type BrandLogoProps = {
  compact?: boolean;
  onDark?: boolean;
};

export default function BrandLogo({ compact = false, onDark = false }: BrandLogoProps) {
  const textMain = onDark ? "text-brand-white" : "text-brand-black";
  const textSub = onDark ? "text-brand-white/85" : "text-brand-gold";

  return (
    <div className="inline-flex items-center gap-3">
      <div className="relative w-[64px]">
        <svg viewBox="0 0 100 55" className="h-5 w-16" aria-hidden="true">
          <path
            d="M10 44 L50 14 L85 35"
            fill="none"
            stroke="#C49A2A"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <p className={`heading-font -mt-1 text-[35px] uppercase leading-none tracking-tight ${textMain}`}>
          MB
        </p>
      </div>
      {!compact ? (
        <div>
          <p className={`heading-font text-base uppercase tracking-[0.28em] ${textMain}`}>MB Bau GmbH</p>
          <p className={`text-[11px] uppercase tracking-[0.22em] ${textSub}`}>
            Zuverlässig. Präzise. Professionell.
          </p>
        </div>
      ) : (
        <p className={`heading-font text-lg uppercase tracking-[0.22em] ${textMain}`}>
          MB Bau
        </p>
      )}
    </div>
  );
}
