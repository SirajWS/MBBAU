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

  // ------------------------------------------------------------------
  // TODO: E-Mail-Versand konfigurieren.
  //
  // Empfehlung: Resend (https://resend.com) oder Nodemailer mit SMTP.
  //
  // Beispiel mit Resend:
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "noreply@mbbauworks.com",
  //     to: "info@mbbauworks.com",
  //     subject: `Neue Anfrage: ${service} (${plz})`,
  //     text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\nOrt/PLZ: ${plz}\nLeistung: ${service}\n\n${message}`,
  //   });
  //
  // Erforderliche Umgebungsvariable: RESEND_API_KEY (in .env.local eintragen)
  // ------------------------------------------------------------------

  // Temporaer: Anfrage serverseitig protokollieren (nur im Dev-Modus sichtbar)
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

  return NextResponse.json({ ok: true });
}
