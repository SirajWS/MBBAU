import type { Metadata } from "next";
import Link from "next/link";
import {
  siteCity,
  siteEmail,
  siteLegalName,
  siteManagingDirector,
  sitePhone,
  sitePhoneTel,
  sitePostalCode,
  siteStreet,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der MB Bau Works UG (haftungsbeschraenkt).",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
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
        <h1 className="heading-font text-5xl uppercase text-brand-black">Datenschutz&shy;erklärung</h1>
        <p className="mt-2 text-sm text-brand-black/55">Stand: September 2026</p>

        <div className="mt-10 space-y-10 text-brand-black/85 leading-relaxed">

          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <address className="not-italic mt-3 leading-relaxed">
              <strong>{siteLegalName}</strong><br />
              Vertreten durch: {siteManagingDirector}<br />
              {siteStreet}<br />
              {sitePostalCode} {siteCity}<br />
              <a href={sitePhoneTel} className="hover:text-brand-gold transition-colors">{sitePhone}</a><br />
              <a href={`mailto:${siteEmail}`} className="hover:text-brand-gold transition-colors">{siteEmail}</a>
            </address>
          </section>

          {/* 2. Allgemeines */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p>
              Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur,
              soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte
              und Leistungen erforderlich ist. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </section>

          {/* 3. Hosting */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              3. Hosting & Server-Logs
            </h2>
            <p>
              Diese Website wird bei einem Hosting-Anbieter betrieben.{" "}
              {/* TODO: Hosting-Anbieter eintragen, sobald bestaetigt (z. B. Vercel, Hetzner, o. a.) */}
              <strong className="text-brand-black/50">[TODO: Hosting-Anbieter und dessen Datenschutzinformationen hier eintragen]</strong>
            </p>
            <p className="mt-3">
              Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch sogenannte
              Server-Log-Dateien erfasst. Dazu können gehören: IP-Adresse, Datum und Uhrzeit des
              Abrufs, Browsertyp, Betriebssystem sowie die aufgerufene Seite. Diese Daten werden
              nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
              f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der Website).
            </p>
          </section>

          {/* 4. Kontakt per E-Mail und Telefon */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              4. Kontakt per E-Mail und Telefon
            </h2>
            <p>
              Wenn Sie uns per E-Mail oder telefonisch kontaktieren, werden Ihre übermittelten
              Angaben (z. B. Name, E-Mail-Adresse, Telefonnummer und Ihr Anliegen) zur Bearbeitung
              Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Eine
              Weitergabe an Dritte findet nicht statt.
            </p>
            <p className="mt-3">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
            </p>
            <p className="mt-3">
              <strong>Speicherdauer:</strong> Wir löschen die Daten, sobald sie für den Zweck ihrer
              Erhebung nicht mehr erforderlich sind, spätestens nach Ablauf der handels- und
              steuerrechtlichen Aufbewahrungsfristen.
            </p>
          </section>

          {/* 5. Schriftarten */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              5. Schriftarten (Google Fonts)
            </h2>
            <p>
              Diese Website verwendet Schriftarten von Google Fonts. Die Einbindung erfolgt über den
              Next.js Font-Optimizer, der die Schriftdateien beim Build-Prozess herunterlädt und
              lokal von unserem Server ausliefert. Es findet beim Seitenaufruf{" "}
              <strong>kein direkter Verbindungsaufbau zu Google-Servern</strong> statt. Es werden
              keine Daten an Google übertragen.
            </p>
          </section>

          {/* 6. Externe Links */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              6. Externe Links (WhatsApp)
            </h2>
            <p>
              Unsere Website enthält einen Link zum WhatsApp-Messenger. Wenn Sie diesen Link
              anklicken, verlassen Sie unsere Website und es gelten die Datenschutzbestimmungen
              von WhatsApp/Meta. Die Nutzung erfolgt freiwillig durch aktives Klicken.
            </p>
          </section>

          {/* 7. Cookies */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              7. Cookies & Tracking
            </h2>
            <p>
              Diese Website verwendet <strong>keine</strong> Analyse-Tools, kein Tracking und setzt
              keine nicht notwendigen Cookies. Es wird kein Nutzungsverhalten aufgezeichnet und keine
              Daten zu Werbezwecken an Dritte weitergegeben.
            </p>
          </section>

          {/* 8. Rechte */}
          <section>
            <h2 className="heading-font text-2xl uppercase text-brand-black mb-3">
              8. Ihre Rechte
            </h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href={`mailto:${siteEmail}`} className="underline hover:text-brand-gold transition-colors">
                {siteEmail}
              </a>
            </p>
            <p className="mt-3">
              Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
              beschweren. In Berlin ist dies der Berliner Beauftragte für Datenschutz und
              Informationsfreiheit, Friedrichstr. 219, 10969 Berlin.
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-brand-black/10 bg-brand-white px-4 py-6 text-center text-xs text-brand-black/40">
        <Link href="/" className="hover:text-brand-black/70 transition-colors">
          Zurück zur Startseite
        </Link>
        {" · "}
        <Link href="/impressum" className="hover:text-brand-black/70 transition-colors">
          Impressum
        </Link>
      </footer>
    </div>
  );
}
