import { Award, BadgeCheck, Building, Handshake } from "lucide-react";
import { siteDisplayName } from "@/lib/site";

const indicators = [
  { icon: Award, text: "Strukturierte Projektabwicklung" },
  { icon: BadgeCheck, text: "Sorgfältige Ausführung" },
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
              Berliner Unternehmen für Ausbau, Renovierung und Baukoordination
            </h2>
            <p className="mt-6 text-brand-black/80">
              {siteDisplayName} ist ein in Berlin eingetragenes Unternehmen für Ausbau-,
              Renovierungs- und Servicearbeiten sowie Baukoordination. Wir führen zulassungsfreie
              Leistungen eigenständig durch und koordinieren weitere Gewerke in enger Zusammenarbeit
              mit qualifizierten Fachpartnern.
            </p>
            <p className="mt-4 text-brand-black/80">
              Ob private Wohnung, Gewerbeflächensanierung oder strukturierte Projektbegleitung &ndash;
              wir legen Wert auf klare Abstimmung, transparente Angebote und eine saubere Ausführung
              im vereinbarten Rahmen.
            </p>
            <p className="mt-4 text-brand-black/80">
              Einsatzgebiet: Berlin und Umgebung.
            </p>
          </div>

          <aside className="relative border border-brand-black bg-brand-black p-8 text-brand-white">
            <span className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-brand-gold" />
            <span className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-brand-gold" />
            <p className="heading-font text-3xl uppercase leading-tight md:text-4xl">
              Wir bauen nicht nur Räume &ndash; wir bauen Vertrauen.
            </p>
            <p className="mt-6 text-sm uppercase tracking-wider text-brand-gold">
              &mdash; {siteDisplayName}
            </p>
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
