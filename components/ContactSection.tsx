import {
  siteAddress,
  siteBusinessHours,
  siteEmail,
  sitePhone,
  sitePhoneTel,
  siteRegion,
  siteWebsiteLabel,
  siteWebsiteUrl,
  siteWhatsAppUrl,
} from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-brand-offwhite px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

        {/* Linke Seite: Unternehmensdaten */}
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-10 bg-brand-gold" />
            Kontakt
          </p>
          <h2 className="heading-font text-4xl uppercase text-brand-black md:text-5xl">
            Lassen Sie uns Ihr Projekt besprechen
          </h2>
          <p className="mt-4 text-sm text-brand-black/70">Einsatzgebiet: {siteRegion}</p>

          <dl className="mt-8 space-y-4 text-brand-black/85">
            <div>
              <dt className="font-semibold">Telefon:</dt>
              <dd>
                <a
                  href={sitePhoneTel}
                  className="text-lg font-semibold hover:text-brand-gold transition-colors"
                >
                  {sitePhone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">E-Mail:</dt>
              <dd>
                <a
                  href={`mailto:${siteEmail}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  {siteEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Website:</dt>
              <dd>
                <a
                  href={siteWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  {siteWebsiteLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Adresse:</dt>
              <dd>{siteAddress}</dd>
            </div>
            <div>
              <dt className="font-semibold">Öffnungszeiten:</dt>
              <dd>{siteBusinessHours}</dd>
            </div>
          </dl>
        </div>

        {/* Rechte Seite: Kontakt-Card */}
        <div className="rounded-md bg-brand-white p-8 shadow-sm flex flex-col justify-center">
          <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-8 bg-brand-gold" />
            Anfrage stellen
          </p>
          <h3 className="heading-font text-3xl uppercase text-brand-black md:text-4xl">
            Projekt anfragen
          </h3>
          <p className="mt-4 leading-relaxed text-brand-black/70">
            Schildern Sie uns Ihr Vorhaben direkt per E-Mail oder telefonisch.
            Wir melden uns schnellstmöglich bei Ihnen zurück.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {/* Primär-CTA: E-Mail */}
            <a
              href={`mailto:${siteEmail}`}
              className="inline-flex items-center justify-center rounded-md bg-brand-gold px-6 py-4 font-semibold text-brand-black transition hover:-translate-y-0.5 hover:bg-brand-gold/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
            >
              E-Mail senden
            </a>

            {/* Sekundär-CTA: Anrufen */}
            <a
              href={sitePhoneTel}
              className="inline-flex items-center justify-center rounded-md border-2 border-brand-black px-6 py-4 font-semibold text-brand-black transition hover:-translate-y-0.5 hover:bg-brand-black hover:text-brand-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2"
            >
              Jetzt anrufen &middot; {sitePhone}
            </a>

            {/* Dezenter WhatsApp-Link */}
            <a
              href={siteWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm text-brand-black/50 hover:text-brand-gold transition-colors"
            >
              Oder via WhatsApp schreiben &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
