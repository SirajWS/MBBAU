"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Paintbrush2,
  ShieldCheck,
  Trash2,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Stahl- und Betonbau",
    text: "Tragende Strukturen mit höchster Präzision. Wir errichten Fundamente, Stützen und Decken nach DIN-Norm.",
    icon: Building2,
  },
  {
    title: "Neubau",
    text: "Schlüsselfertige Neubauten für Privat- und Gewerbekunden. Von der Planung bis zur Übergabe alles aus einer Hand.",
    icon: Wrench,
  },
  {
    title: "Abbrucharbeiten",
    text: "Kontrollierter Rückbau und Entsorgung. Sicher, termingerecht und umweltgerecht durchgeführt.",
    icon: Trash2,
  },
  {
    title: "Trockenbau",
    text: "Wände, Decken und Trennwände in höchster Qualität. Schnell, sauber und maßgenau verarbeitet.",
    icon: ShieldCheck,
  },
  {
    title: "Sanierung",
    text: "Modernisierung und Instandsetzung von Bestandsgebäuden. Altes bewahren, Neues gestalten — mit Sachverstand.",
    icon: Hammer,
  },
  {
    title: "Fliesenarbeiten",
    text: "Präzises Verlegen in Bad, Küche und Außenbereich. Jede Fuge sitzt. Jeder Belag hält.",
    icon: Paintbrush2,
  },
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="bg-brand-black px-4 py-20 text-brand-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
          <span className="h-px w-10 bg-brand-gold" />
          Was wir tun
        </p>
        <h2 className="heading-font text-5xl uppercase md:text-6xl">Unsere Leistungen</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative overflow-hidden border-l-2 border-transparent bg-[#1a1a1a] p-6 transition hover:border-brand-gold hover:bg-[#212121]"
              >
                <div className="mb-4 inline-flex rounded-md bg-brand-gold p-3 text-brand-black">
                  <Icon size={20} />
                </div>
                <h3 className="heading-font text-3xl uppercase">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-white/70">{service.text}</p>
                <span className="heading-font absolute bottom-4 right-4 text-6xl text-brand-white/10">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
