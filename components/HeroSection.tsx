"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  Handshake,
  MapPin,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { siteBrandName, siteRegion } from "@/lib/site";

const highlights = [
  { line1: "Sauber", line2: "Ausgeführt" },
  { line1: "Klar", line2: "Abgestimmt" },
  { line1: "Zuverlässig", line2: "Koordiniert" },
];

const trustBar = [
  { text: "Strukturierte Projektabwicklung", Icon: ShieldCheck },
  { text: "Sorgfältige Ausführung", Icon: CalendarCheck2 },
  { text: "Transparente Angebote", Icon: ReceiptText },
  { text: "Regionale Verwurzelung", Icon: MapPin },
];

const parent = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HeroSection() {
  return (
    <section className="hero-showcase text-brand-black" id="home">
      <div className="px-4 pb-10 pt-12 md:px-8">
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.9fr] lg:items-center"
        >
          <div>
            <motion.div variants={item} className="mb-5 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-gold">
                {siteBrandName}
              </span>
              <span className="rounded-full border border-brand-black/15 bg-white/80 px-3 py-1 text-xs font-semibold uppercase text-brand-black/80">
                {siteRegion}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="heading-font text-[2.4rem] uppercase leading-[0.95] text-brand-black md:text-[4.2rem] lg:text-[5.25rem]"
            >
              Ausbau, Renovierung
              <br />
              <span className="text-brand-gold">&amp; Baukoordination</span>
              <br />
              in Berlin
              <span className="text-brand-gold">.</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-brand-black/75">
              Zulassungsfreie Ausbau- und Servicearbeiten führen wir selbst durch.
              Weitere Gewerke realisieren wir gemeinsam mit qualifizierten Fachpartnern &ndash;
              alles aus einer Hand koordiniert.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-black transition hover:-translate-y-0.5"
              >
                Angebot anfragen
              </a>
              <a
                href="#leistungen"
                className="rounded-md border border-brand-black/30 bg-white px-6 py-3 font-semibold text-brand-black transition hover:-translate-y-0.5"
              >
                Leistungen ansehen
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="justify-self-stretch rounded-sm bg-brand-black p-6 text-white shadow-2xl lg:max-w-md lg:justify-self-end"
          >
            <ul className="space-y-4">
              {highlights.map((row) => (
                <li
                  key={row.line1}
                  className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <Handshake className="h-6 w-6 shrink-0 text-brand-gold" />
                  <p className="heading-font text-2xl uppercase leading-tight sm:text-3xl">
                    <span className="text-white">{row.line1} </span>
                    <span className="text-brand-gold">{row.line2}</span>
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-brand-black/10 bg-white/80 px-4 py-5 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustBar.map((b) => {
            const Icon = b.Icon;
            return (
              <div
                key={b.text}
                className="flex items-center gap-3 text-sm font-semibold uppercase leading-tight text-brand-black/85"
              >
                <Icon className="h-6 w-6 shrink-0 text-brand-gold" />
                <span>{b.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
