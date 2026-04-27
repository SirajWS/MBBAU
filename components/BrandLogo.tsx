type BrandLogoProps = {
  compact?: boolean;
  onDark?: boolean;
};

export default function BrandLogo({ compact = false, onDark = false }: BrandLogoProps) {
  const textMain = onDark ? "text-brand-white" : "text-brand-black";
  const textSub = onDark ? "text-brand-white/75" : "text-brand-gold";

  return (
    <div className="inline-flex items-center gap-3">
      <div
        className={
          onDark
            ? "flex h-12 w-12 items-center justify-center rounded-sm border border-brand-white/20 bg-brand-white text-brand-black"
            : "flex h-12 w-12 items-center justify-center rounded-sm border border-brand-black/15 bg-brand-black text-brand-white"
        }
      >
        <span className="heading-font text-2xl uppercase leading-none">MB</span>
      </div>
      {!compact ? (
        <div>
          <p className={`heading-font text-base uppercase tracking-[0.14em] ${textMain}`}>
            MB Bau UG
          </p>
          <p className={`text-[10px] uppercase leading-tight tracking-[0.18em] ${textSub}`}>
            Bauen. Sanieren. Vertrauen.
          </p>
        </div>
      ) : (
        <div>
          <p className={`heading-font text-sm uppercase leading-tight tracking-wide ${textMain}`}>
            MB Bau UG
          </p>
          <p className={`text-[9px] uppercase leading-tight tracking-wide ${textSub}`}>
            Bauen. Sanieren. Vertrauen.
          </p>
        </div>
      )}
    </div>
  );
}
