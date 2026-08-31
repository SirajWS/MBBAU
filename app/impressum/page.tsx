import type { Metadata } from "next";
import Link from "next/link";
import {
  siteCity,
  siteCountry,
  siteEmail,
  siteLegalName,
  siteManagingDirector,
  sitePhone,
  sitePhoneTel,
  sitePostalCode,
  siteRegisterCourt,
  siteRegisterNumber,
  siteStreet,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der MB Bau Works UG (haftungsbeschraenkt), Berlin.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-brand-offwhite">
      {/* Minimal-Header */}
      <header className="border-b border-brand-white/10 bg-brand-black px-4 py-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Link
            href="/"
            className="heading-font text-base uppercase tracking-widest text-brand-white hover:text-brand-gold transition-colors"
          >
            MB <span className="text-brand-gold">BAU WORKS</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-brand-white/60 hover:text-brand-white transition-colors"
          >
            &larr; Zur Startseite
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="heading-font text-5xl uppercase text-brand-black">Impressum</h1>
        <p className="mt-2 text-sm text-brand-black/55">
          Angaben gemäß § 5 TMG
        </p>

        <div className="mt-10 space-y-8 text-brand-black/85">

          {/* Firmenname & Anschrift */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              Anbieter
            </h2>
            <p className="font-semibold">{siteLegalName}</p>
            <address className="not-italic mt-1 leading-relaxed">
              {siteStreet}<br />
              {sitePostalCode} {siteCity}<br />
              {siteCountry}
            </address>
          </section>

          {/* Vertretung */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              Vertreten durch
            </h2>
            <p>Geschäftsführer: {siteManagingDirector}</p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              Kontakt
            </h2>
            <dl className="space-y-1">
              <div className="flex gap-2">
                <dt className="font-semibold w-24">Telefon:</dt>
                <dd>
                  <a href={sitePhoneTel} className="hover:text-brand-gold transition-colors">
                    {sitePhone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold w-24">E-Mail:</dt>
                <dd>
                  <a href={`mailto:${siteEmail}`} className="hover:text-brand-gold transition-colors">
                    {siteEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          {/* Handelsregister */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              Registereintrag
            </h2>
            <dl className="space-y-1">
              <div className="flex gap-2">
                <dt className="font-semibold w-44">Registergericht:</dt>
                <dd>{siteRegisterCourt}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold w-44">Registernummer:</dt>
                <dd>{siteRegisterNumber}</dd>
              </div>
            </dl>
          </section>

          {/* Umsatzsteuer */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="text-brand-black/65">
              Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG liegt derzeit nicht vor.
            </p>
          </section>

          {/* Verantwortlich */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              Inhaltlich verantwortlich
            </h2>
            <p>
              {siteManagingDirector}<br />
              {siteStreet}, {sitePostalCode} {siteCity}
            </p>
          </section>

          {/* Streitbeilegung */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              EU-Streitschlichtung
            </h2>
            <p className="text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-gold transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-brand-black/10 bg-brand-white px-4 py-6 text-center text-xs text-brand-black/40">
        <Link href="/" className="hover:text-brand-black/70 transition-colors">
          Zurück zur Startseite
        </Link>
        {" · "}
        <Link href="/datenschutz" className="hover:text-brand-black/70 transition-colors">
          Datenschutz
        </Link>
      </footer>
    </div>
  );
}
