/**
 * ProjectsSection -- Referenzen & Projekte
 *
 * Diese Sektion ist aktuell NICHT in app/page.tsx eingebunden.
 * Echte Projektreferenzen werden nach Freigabe durch den Betreiber ergaenzt.
 *
 * Anforderungen fuer echte Referenzen:
 * - Projektart (z. B. Trockenbau, Renovierung)
 * - Ort nur allgemein (z. B. Berlin-Kreuzberg)
 * - Leistungsumfang
 * - Zeitraum (z. B. Q1 2026)
 * - Keine Kundennamen, keine Privatadressen, keine Rechnungsbetraege
 * - Fotos nur mit Nutzungsrechten des Unternehmens
 */

export default function ProjectsSection() {
  return (
    <section id="projekte" className="bg-brand-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
          <span className="h-px w-10 bg-brand-gold" />
          Projekte
        </p>
        <h2 className="heading-font text-5xl uppercase text-brand-black md:text-6xl">
          Referenzen & Projekte
        </h2>
        <p className="mt-6 max-w-2xl text-brand-black/70">
          Wir arbeiten derzeit an der Zusammenstellung unserer Referenzprojekte.
          Sprechen Sie uns gerne direkt an &ndash; wir informieren Sie ueber abgeschlossene Arbeiten.
        </p>
        <div className="mt-8">
          <a
            href="#kontakt"
            className="rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-black transition hover:-translate-y-0.5 inline-block"
          >
            Angebot anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
