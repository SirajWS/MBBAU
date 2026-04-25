import BrandLogo from "./BrandLogo";

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
          <a
            href="tel:+490123456789"
            className="rounded-md border border-brand-gold px-4 py-2 text-sm font-semibold text-brand-gold"
          >
            Jetzt anrufen
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-brand-white/70">
          <span>© 2025 MB Bau GmbH</span>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
