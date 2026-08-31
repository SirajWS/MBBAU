import BrandLogo from "./BrandLogo";
import {
  siteAddress,
  siteBusinessHours,
  siteCity,
  siteEmail,
  siteLegalName,
  sitePhone,
  sitePhoneTel,
  sitePostalCode,
  siteRegion,
  siteStreet,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold bg-brand-black px-4 py-10 text-brand-white md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Obere Leiste */}
        <div className="flex flex-col items-center justify-between gap-8 border-b border-brand-white/15 pb-8 md:flex-row md:items-start">
          {/* Logo + Adresse */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <BrandLogo compact onDark />
            <address className="not-italic text-sm text-brand-white/65 leading-relaxed text-center md:text-left">
              {siteStreet}<br />
              {sitePostalCode} {siteCity}<br />
              Deutschland
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <ul className="flex flex-wrap justify-center gap-5 text-sm md:flex-col md:gap-2">
              <li><a href="#leistungen" className="hover:text-brand-gold transition-colors">Leistungen</a></li>
              <li><a href="#ueber-uns" className="hover:text-brand-gold transition-colors">Über uns</a></li>
              <li><a href="#kontakt" className="hover:text-brand-gold transition-colors">Kontakt</a></li>
              <li>
                <a href="/impressum" className="hover:text-brand-gold transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-brand-gold transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </nav>

          {/* Kontakt */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href={sitePhoneTel}
              className="rounded-md border border-brand-gold px-5 py-3 text-right text-sm font-semibold text-brand-gold transition hover:bg-brand-gold/10"
            >
              <span className="block text-[10px] font-normal uppercase tracking-wider text-brand-white/60">
                Telefon
              </span>
              <span className="block tabular-nums">{sitePhone}</span>
            </a>
            <a
              href={`mailto:${siteEmail}`}
              className="text-sm text-brand-white/70 hover:text-brand-gold transition-colors"
            >
              {siteEmail}
            </a>
            <p className="text-xs text-brand-white/45">{siteRegion}</p>
            <p className="text-xs text-brand-white/45">{siteBusinessHours}</p>
          </div>
        </div>

        {/* Untere Leiste */}
        <div className="mt-6 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-brand-white/45">
            &copy; {new Date().getFullYear()} {siteLegalName}
          </p>
          <p className="text-[10px] text-brand-white/30">
            {siteAddress} &middot; Einsatzgebiet: {siteRegion}
          </p>
        </div>
      </div>
    </footer>
  );
}
