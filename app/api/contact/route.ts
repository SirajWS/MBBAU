import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Einfaches In-Memory Rate-Limiting (pro IP, 5 Anfragen / 10 Minuten)
// Hinweis: Bei Serverless-Deployments (Vercel) teilen Instanzen keinen Speicher.
// Fuer Produktion: Redis / Upstash-basiertes Rate-Limiting empfohlen.
// ---------------------------------------------------------------------------
const rateLimit = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 Minuten

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

// ---------------------------------------------------------------------------
// Eingabe-Validierung
// ---------------------------------------------------------------------------
function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 2000);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Generische Fehlermeldung fuer den Client – kein interner Detail-Leak
const GENERIC_ERROR =
  "Ihre Anfrage konnte leider nicht gesendet werden. Bitte kontaktieren Sie uns direkt unter info@mbbauworks.com oder +49 176 83838626.";

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  // IP ermitteln
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  // Rate-Limit pruefen
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es spaeter erneut." },
      { status: 429 }
    );
  }

  // Body parsen
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungueltige Anfrage." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Ungueltige Anfrage." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  // Felder extrahieren und bereinigen
  const name = sanitize(data.name);
  const email = sanitize(data.email);
  const phone = sanitize(data.phone);
  const plz = sanitize(data.plz);
  const service = sanitize(data.service);
  const message = sanitize(data.message);

  // Pflichtfelder pruefen
  if (!name) {
    return NextResponse.json({ error: "Name fehlt." }, { status: 422 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Ungueltige E-Mail-Adresse." }, { status: 422 });
  }
  if (!plz) {
    return NextResponse.json({ error: "Projektort fehlt." }, { status: 422 });
  }
  if (!service) {
    return NextResponse.json({ error: "Leistungsauswahl fehlt." }, { status: 422 });
  }
  if (!message) {
    return NextResponse.json({ error: "Nachricht fehlt." }, { status: 422 });
  }

  // Dev-Logging (keine vollstaendigen Formulardaten in Produktion)
  if (process.env.NODE_ENV === "development") {
    console.info("[contact] Neue Anfrage:", {
      name,
      email,
      phone: phone || "(nicht angegeben)",
      plz,
      service,
      messageLength: message.length,
    });
  }

  // ---------------------------------------------------------------------------
  // Access Key pruefen – muss als Vercel Environment Variable vorliegen
  // ---------------------------------------------------------------------------
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("[contact] WEB3FORMS_ACCESS_KEY ist nicht konfiguriert.");
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }

  // ---------------------------------------------------------------------------
  // Serverseitiger Request an Web3Forms
  // ---------------------------------------------------------------------------
  let w3fResponse: Response;
  try {
    w3fResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        ...(phone ? { phone } : {}),
        plz,
        service,
        message,
        subject: `Neue Projektanfrage – ${service} – ${plz}`,
        replyto: email,
      }),
    });
  } catch (fetchErr) {
    console.error(
      "[contact] Netzwerkfehler beim Kontakt zu Web3Forms:",
      fetchErr instanceof Error ? fetchErr.message : "Unbekannter Fehler"
    );
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
  }

  // ---------------------------------------------------------------------------
  // Web3Forms-Antwort pruefen: HTTP-Status UND JSON-Success-Flag
  // HTTP 200 / { ok: true } nur bei bestaetigendem Erfolg von Web3Forms.
  // ---------------------------------------------------------------------------
  let w3fJson: unknown;
  try {
    w3fJson = await w3fResponse.json();
  } catch {
    console.error(
      "[contact] Web3Forms-Antwort konnte nicht geparst werden. HTTP Status:",
      w3fResponse.status
    );
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
  }

  const isSuccess =
    w3fResponse.ok &&
    typeof w3fJson === "object" &&
    w3fJson !== null &&
    (w3fJson as Record<string, unknown>).success === true;

  if (!isSuccess) {
    console.error(
      "[contact] Web3Forms hat keinen Erfolg bestaetigt. HTTP Status:",
      w3fResponse.status
    );
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
