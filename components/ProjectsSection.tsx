const projects = [
  {
    name: "Neubau EFH Musterhausen",
    category: "Neubau",
    scope: "Rohbau, Trockenbau, Fliesenarbeiten",
    status: "In Planung",
  },
  {
    name: "Betonsanierung Brücke B14",
    category: "Sanierung",
    scope: "Betoninstandsetzung und Tragwerksverstärkung",
    status: "Abgeschlossen",
  },
  {
    name: "Trockenbauausbau Bürogebäude",
    category: "Trockenbau",
    scope: "Innenausbau, Decken- und Trennwandsysteme",
    status: "In Ausführung",
  },
  {
    name: "Fliesenprojekt Wellnessbad",
    category: "Fliesen",
    scope: "Großformat-Fliesen, Abdichtung, Detailarbeiten",
    status: "Abgeschlossen",
  },
  {
    name: "Abbruch Industriehalle",
    category: "Abbruch",
    scope: "Rückbau inkl. Entsorgung und Baustellenlogistik",
    status: "Abgeschlossen",
  },
  {
    name: "Stahlbau Lagerhalle",
    category: "Stahlbau",
    scope: "Stahlkonstruktion mit Montage und Korrosionsschutz",
    status: "In Ausführung",
  },
];

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

        <p className="mt-4 max-w-3xl text-sm text-brand-black/70">
          Da aktuell noch keine Projektfotos vorliegen, zeigen wir unsere Referenzen transparent
          als Projektsteckbriefe mit Leistungsumfang und Status.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-md border border-brand-black/10 bg-brand-offwhite p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-3 inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-black">
                {project.category}
              </span>
              <h3 className="heading-font text-3xl uppercase text-brand-black">{project.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-black/75">{project.scope}</p>
              <div className="mt-6 flex items-center justify-between border-t border-brand-black/10 pt-4">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-black/60">
                  Status
                </span>
                <span className="text-sm font-semibold text-brand-black">{project.status}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
