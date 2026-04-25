"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
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
        <Link href="#" aria-label="Startseite" className="text-brand-white">
          <BrandLogo compact onDark />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
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
            className="rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-black transition hover:-translate-y-0.5"
          >
            Angebot anfragen
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded border border-brand-white/20 p-2 text-brand-white md:hidden"
          aria-label="Menü öffnen"
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
            className="absolute right-0 top-full w-72 bg-brand-black p-6 shadow-xl md:hidden"
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
                className="rounded-md bg-brand-gold px-4 py-2 text-center font-semibold text-brand-black"
              >
                Angebot anfragen
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
