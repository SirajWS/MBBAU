"use client";

import { motion } from "framer-motion";

const stats = ["15+ Jahre Erfahrung", "200+ Projekte", "100% Termintreue"];

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HeroSection() {
  return (
    <section
      className="hero-grid relative flex min-h-screen items-center px-4 py-20 text-brand-white md:px-8"
      id="home"
    >
      <motion.div
        variants={parent}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end"
      >
        <div className="max-w-[700px]">
          <motion.span
            variants={item}
            className="mb-6 inline-block rounded-full border border-brand-gold px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-gold"
          >
            MB Bau GmbH
          </motion.span>
          <motion.h1
            variants={item}
            className="heading-font text-5xl uppercase leading-[0.95] md:text-[88px]"
          >
            Ihr Partner für Bau und Sanierung
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-base text-brand-white/75">
            Von der Planung bis zur Übergabe — wir bauen mit Qualität, Termintreue und fairen
            Preisen.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-black transition hover:-translate-y-0.5"
            >
              Jetzt Angebot anfragen
            </a>
            <a
              href="#leistungen"
              className="rounded-md border border-brand-white px-6 py-3 font-semibold text-brand-white transition hover:-translate-y-0.5"
            >
              Unsere Leistungen
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="grid gap-4 text-right">
          {stats.map((stat) => (
            <div key={stat} className="border-r-2 border-brand-gold pr-4">
              <p className="heading-font text-4xl uppercase md:text-5xl">{stat.split(" ")[0]}</p>
              <p className="text-sm uppercase tracking-wider text-brand-white/75">
                {stat.replace(`${stat.split(" ")[0]} `, "")}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
