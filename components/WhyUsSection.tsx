import { BadgeEuro, Handshake, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";
import { siteBrandName } from "@/lib/site";

const items = [
  {
    icon: MessageSquareText,
    title: "Klare Kommunikation",
    text: "Transparente Abstimmung zu Aufwand, Ablauf und nächsten Schritten.",
  },
  {
    icon: ShieldCheck,
    title: "Saubere Ausführung",
    text: "Ordentliche Arbeitsweise mit Fokus auf Qualität und Details.",
  },
  {
    icon: Handshake,
    title: "Flexible Unterstützung",
    text: "Von einzelnen Ausbauleistungen bis zur strukturierten Projektbegleitung.",
  },
  {
    icon: Sparkles,
    title: "Termintreue Umsetzung",
    text: "Zuverlässige Koordination der Arbeitsschritte im vereinbarten Rahmen.",
  },
  {
    icon: BadgeEuro,
    title: "Faire Angebote",
    text: "Realistische, nachvollziehbare Angebote ohne übertriebene Versprechen.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-brand-black px-4 py-20 text-brand-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
          <span className="h-px w-10 bg-brand-gold" />
          Stärken
        </p>
        <h2 className="heading-font text-4xl uppercase md:text-5xl">Warum {siteBrandName}?</h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {items.map((row) => {
          const Icon = row.icon;
          return (
            <article
              key={row.title}
              className="border-l border-brand-white/20 pl-5 first:border-l-brand-gold"
            >
              <span className="mb-3 block h-1 w-10 bg-brand-gold" />
              <Icon className="mb-3 text-brand-gold" size={22} />
              <h3 className="heading-font text-2xl uppercase leading-tight">{row.title}</h3>
              <p className="mt-2 text-sm text-brand-white/75">{row.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-12 max-w-7xl rounded-md border border-brand-gold/35 bg-white/5 p-6">
        <p className="text-base text-white/90">
          Sie planen Renovierung, Trockenbau oder Innenausbau? Kontaktieren Sie uns für eine
          unverbindliche Anfrage.
        </p>
      </div>
    </section>
  );
}
