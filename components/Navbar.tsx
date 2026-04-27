"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-black/95 backdrop-blur ${
        scrolled ? "border-b border-brand-white/15" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" aria-label="Startseite" className="text-brand-white">
          <BrandLogo compact onDark />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-brand-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-black transition hover:-translate-y-0.5"
          >
            <FileText size={16} />
            Angebot anfragen
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded border border-brand-white/20 p-2 text-brand-white lg:hidden"
          aria-label="Menü"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 top-full w-80 max-w-[100vw] bg-brand-black p-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-brand-white/10 pb-3 text-brand-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-gold py-2 font-semibold text-brand-black"
              >
                <FileText size={16} />
                Angebot anfragen
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
