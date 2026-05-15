"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  BriefcaseBusiness,
  Cable,
  Drill,
  Hammer,
  HardHat,
  Home,
  Layers,
  PaintRoller,
  Ruler,
} from "lucide-react";
import { siteWhatsAppUrl } from "@/lib/site";

type ServiceItem = {
  title: string;
  description: string;
  points: string[];
  hint?: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

const services: ServiceItem[] = [
  {
    title: "Kompletter Familienhausbau",
    description:
      "Wir realisieren moderne Familienhäuser — von der Planung bis zur Fertigstellung. Gemeinsam mit qualifizierten Fachpartnern koordinieren und begleiten wir alle Bauphasen effizient, zuverlässig und transparent.",
    points: [
      "Planung und Projektabstimmung",
      "Koordination qualifizierter Fachpartner",
      "Begleitung aller Bauphasen",
      "Transparente Abwicklung bis zur Fertigstellung",
    ],
    icon: Home,
  },
  {
    title: "Trockenbau – Hauptbereich",
    description:
      "Professionelle Trockenbauarbeiten für Wohnungen, Gewerbeflächen und Sanierungen.",
    points: [
      "Trennwände aus Gipskarton bauen",
      "Decken abhängen",
      "Wandverkleidung und Beplankung",
      "Dämmung für Schall- und Wärmeschutz einbauen",
      "Spachtelarbeiten Q1–Q4",
      "Fugen schließen und Reparaturen",
      "Dachgeschossausbau ohne tragende Eingriffe",
      "Trockenestrich verlegen",
      "Einfache Brandschutzverkleidungen",
    ],
    icon: Layers,
  },
  {
    title: "Bodenarbeiten",
    description: "Saubere Bodenarbeiten für Wohn- und Gewerberäume.",
    points: [
      "Laminat verlegen",
      "Vinyl verlegen",
      "Teppich entfernen oder verlegen",
      "Untergrund vorbereiten",
      "Parkett verlegen, soweit zulassungsfrei möglich",
    ],
    icon: Ruler,
  },
  {
    title: "Einfache Abbrucharbeiten",
    description: "Rückbau und Entkernung im nicht tragenden Bereich.",
    points: [
      "Nicht tragende Wände entfernen",
      "Fliesen entfernen",
      "Küchen abbauen",
      "Leichte Entkernung",
    ],
    hint: "Keine statischen Eingriffe und keine Arbeiten an tragenden Bauteilen.",
    icon: Hammer,
  },
  {
    title: "Montagearbeiten",
    description: "Montage von genormten Bauteilen und Einrichtungen.",
    points: [
      "Türen einbauen (Standard)",
      "Fenster einbauen (genormte Bauteile)",
      "Küchen montieren",
      "Möbelmontage",
    ],
    icon: Drill,
  },
  {
    title: "Innenausbau und Renovierung",
    description: "Renovierungsarbeiten für Wohnungen, Büros und Gewerbeflächen.",
    points: [
      "Wände spachteln",
      "Einfache Streicharbeiten",
      "Kleinere Renovierungen",
      "Oberflächen vorbereiten",
      "Räume modernisieren",
    ],
    icon: PaintRoller,
  },
  {
    title: "Gebäudeservice und Baustellenservice",
    description: "Unterstützung rund um Baustelle, Objekt und Übergabe.",
    points: [
      "Baustellenreinigung",
      "Gebäudereinigung",
      "Entrümpelung",
      "Hausmeisterservice",
      "Vorbereitung und Nachbereitung von Baustellen",
    ],
    icon: HardHat,
  },
  {
    title: "Kabelverlegung ohne Anschluss",
    description: "Vorbereitende Kabelverlegung ohne elektrische Anschlussarbeiten.",
    points: ["Kabel verlegen", "Kabelwege vorbereiten", "Leerrohre vorbereiten"],
    hint: "Keine Elektroanschlüsse, keine Arbeiten am Stromnetz. Anschluss nur durch qualifizierte Elektriker.",
    icon: Cable,
  },
  {
    title: "Bauleitung und Organisation",
    description: "Koordination, Überwachung und Organisation von Bauprojekten.",
    points: [
      "Baustellen koordinieren",
      "Subunternehmer organisieren",
      "Projekte überwachen",
      "Qualität und Ablauf kontrollieren",
      "Termine und Arbeitsschritte koordinieren",
    ],
    icon: BriefcaseBusiness,
  },
];

const partnerServices = [
  { title: "Rohbau & Maurerarbeiten", text: "Planung und Umsetzung durch erfahrene Partnerbetriebe." },
  { title: "Elektroinstallationen", text: "Fachgerechte Ausführung durch zertifizierte Elektriker." },
  { title: "Sanitär & Heizung", text: "Installation und Modernisierung durch Fachfirmen." },
  { title: "Dacharbeiten", text: "Reparatur, Ausbau und Neueindeckung mit Fachpartnern." },
  {
    title: "Fliesen- und Oberflächenarbeiten",
    text: "Hochwertige Ausführung durch spezialisierte Handwerksbetriebe.",
  },
  { title: "Komplettsanierungen", text: "Koordination aller Gewerke aus einer Hand." },
  { title: "Gewerbeausbau", text: "Ausbau von Büros, Läden und Geschäftsräumen." },
  { title: "Projektkoordination & Bauleitung", text: "Planung, Organisation und Kontrolle aller Bauphasen." },
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="bg-brand-offwhite px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
          <span className="h-px w-10 bg-brand-gold" />
          Leistungen
        </p>
        <h2 className="heading-font text-4xl uppercase text-brand-black md:text-5xl lg:text-6xl">
          Zulassungsfreie Ausbau- und Servicearbeiten
        </h2>
        <p className="mt-4 max-w-4xl text-sm text-brand-black/75 md:text-base">
          Wir übernehmen Ausbau-, Renovierungs- und Servicearbeiten sowie die Organisation und
          Koordination von Bauprojekten. Zulassungsfreie Leistungen führen wir eigenständig aus.
          Weitere Gewerke realisieren wir in Zusammenarbeit mit qualifizierten Fachpartnern.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full rounded-md border border-brand-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-gold hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-md bg-brand-gold p-3 text-brand-black">
                  <Icon size={20} />
                </div>
                <h3 className="heading-font text-2xl uppercase text-brand-black sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-brand-black/75">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-brand-black/85">
                  {service.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {service.hint && (
                  <p className="mt-4 rounded border border-brand-gold/30 bg-brand-gold/10 p-3 text-xs text-brand-black/90">
                    Hinweis: {service.hint}
                  </p>
                )}
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 rounded-md border border-brand-black/10 bg-white p-5 md:p-6">
          <p className="text-sm leading-relaxed text-brand-black/85">
            Zulassungsfreie Arbeiten führen wir eigenständig aus. Meisterpflichtige Gewerke werden
            durch qualifizierte Fachbetriebe umgesetzt und von uns koordiniert und überwacht.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="rounded-md bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-black transition hover:-translate-y-0.5"
            >
              Kostenlos anfragen
            </a>
            <a
              href="#kontakt"
              className="rounded-md border border-brand-black/25 bg-white px-5 py-3 text-sm font-semibold text-brand-black transition hover:-translate-y-0.5"
            >
              Projekt besprechen
            </a>
            <a
              href={siteWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-brand-black transition hover:-translate-y-0.5"
            >
              WhatsApp kontaktieren
            </a>
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-10 bg-brand-gold" />
            Weitere Leistungen
          </p>
          <h3 className="heading-font text-3xl uppercase text-brand-black md:text-4xl lg:text-5xl">
            Weitere Leistungen & Projektabwicklung
          </h3>
          <p className="mt-4 max-w-4xl text-sm text-brand-black/75 md:text-base">
            Neben unseren eigenen Ausbau- und Serviceleistungen bieten wir Ihnen die komplette
            Organisation und Umsetzung weiterer Bauleistungen. In Zusammenarbeit mit qualifizierten
            Fachpartnern realisieren wir auch komplexe Projekte aus einer Hand.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {partnerServices.map((s, idx) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-md border border-brand-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-gold"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-brand-black">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h4 className="heading-font text-xl uppercase text-brand-black">{s.title}</h4>
                <p className="mt-2 text-sm text-brand-black/75">{s.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
