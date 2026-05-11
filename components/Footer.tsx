import BrandLogo from "./BrandLogo";
import { siteBrandName, sitePhoneContacts } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold bg-brand-black px-4 py-10 text-brand-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-brand-white/15 pb-6 md:flex-row">
          <BrandLogo compact onDark />
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <a href="#ueber-uns">Über uns</a>
            <a href="#leistungen">Leistungen</a>
            <a href="#projekte">Projekte</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div className="flex flex-col items-stretch gap-2 sm:items-end">
            {sitePhoneContacts.map((c) => (
              <a
                key={c.tel}
                href={c.tel}
                title={`${c.role}${c.name ? ` — ${c.name}` : ""}`}
                className="rounded-md border border-brand-gold px-4 py-2 text-right text-sm font-semibold text-brand-gold transition hover:bg-brand-gold/10"
              >
                <span className="block text-[10px] font-normal uppercase tracking-wider text-brand-white/70">
                  {c.role}
                </span>
                <span className="block tabular-nums">{c.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-brand-white/70">
          <span>© 2026 {siteBrandName}</span>
          <span>Impressum &amp; Datenschutz folgen</span>
        </div>
      </div>
    </footer>
  );
}
