import { Award, BadgeCheck, Building, Handshake } from "lucide-react";

const indicators = [
  { icon: Award, text: "Strukturierte Projektabwicklung" },
  { icon: BadgeCheck, text: "DIN-gerechte Ausführung" },
  { icon: Handshake, text: "Transparente Angebote" },
  { icon: Building, text: "Regionale Verwurzelung" },
];

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="bg-brand-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold" />
              Über uns
            </p>
            <h2 className="heading-font text-4xl uppercase text-brand-black md:text-5xl md:leading-tight">
              Wir stehen für Qualität, Struktur und Verlässlichkeit am Bau
            </h2>
            <p className="mt-6 text-brand-black/80">
              Die MB Bau UG verbindet handwerkliche Ausführung mit klarer Organisation und moderner
              Projektsteuerung. Unser Anspruch ist es, Bauprojekte effizient, sauber und
              termingerecht umzusetzen.
            </p>
            <p className="mt-4 text-brand-black/80">
              Wir arbeiten für private und gewerbliche Auftraggeber und begleiten Projekte von der
              Planung bis zur Fertigstellung — transparent, lösungsorientiert und zuverlässig.
            </p>
          </div>

          <aside className="relative border border-brand-black bg-brand-black p-8 text-brand-white">
            <span className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-brand-gold" />
            <span className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-brand-gold" />
            <p className="heading-font text-3xl uppercase leading-tight md:text-4xl">
              Wir bauen nicht nur Gebäude — wir bauen Vertrauen.
            </p>
            <p className="mt-6 text-sm uppercase tracking-wider text-brand-gold">— MB Bau UG</p>
          </aside>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {indicators.map((entry) => {
            const Icon = entry.icon;
            return (
              <div
                key={entry.text}
                className="flex items-center gap-3 rounded-md border border-brand-black/15 bg-brand-offwhite p-4"
              >
                <Icon size={20} className="text-brand-gold" />
                <span className="text-sm font-medium text-brand-black">{entry.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
