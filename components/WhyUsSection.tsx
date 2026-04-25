import { BadgeEuro, CalendarClock, HardHat, Shield } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Qualität & Präzision",
    text: "Sorgfältige Ausführung nach höchsten handwerklichen Standards.",
  },
  {
    icon: CalendarClock,
    title: "Termintreue",
    text: "Wir halten, was wir zusagen — Ihr Bauablauf bleibt planbar.",
  },
  {
    icon: BadgeEuro,
    title: "Faire Preise",
    text: "Transparente Kalkulation ohne versteckte Kosten.",
  },
  {
    icon: HardHat,
    title: "Erfahrung",
    text: "15 Jahre Bauerfahrung in der Region — jedes Projekt ein Referenzprojekt.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-brand-black px-4 py-20 text-brand-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="border-l border-brand-white/20 pl-6 first:border-l-brand-gold">
              <span className="mb-4 block h-1 w-10 bg-brand-gold" />
              <Icon className="mb-4 text-brand-gold" size={22} />
              <h3 className="heading-font text-3xl uppercase">{item.title}</h3>
              <p className="mt-3 text-sm text-brand-white/75">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
