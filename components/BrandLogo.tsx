type BrandLogoProps = {
  compact?: boolean;
  onDark?: boolean;
};

/**
 * Wort- und Bildmarke: Dach in Gold, „MB“ klar im Rahmen, daneben Textzeilen.
 * Optimiert für dunkle Nav und helle Flächen.
 */
export default function BrandLogo({ compact = false, onDark = false }: BrandLogoProps) {
  const textMain = onDark ? "text-brand-white" : "text-brand-black";
  const textSub = onDark ? "text-brand-white/75" : "text-brand-gold";
  const markBg = onDark ? "#141414" : "#ffffff";
  const markStroke = onDark ? "rgba(255,255,255,0.2)" : "rgba(17,17,17,0.12)";
  const letterFill = onDark ? "#f8f8f8" : "#111111";
  const sizeClass = compact ? "h-9 w-[3.4rem] sm:h-10 sm:w-[3.75rem]" : "h-12 w-20";

  return (
    <div className="inline-flex items-center gap-3">
      <svg
        viewBox="0 0 88 56"
        className={sizeClass}
        role="img"
        aria-label="MB Bau UG"
      >
        <rect x="0.5" y="0.5" width="87" height="55" rx="5" fill={markBg} stroke={markStroke} />
        <path
          d="M16 33 L44 11 L72 33"
          fill="none"
          stroke="#C49A2A"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="58" y="24" width="4" height="6" fill="#C49A2A" rx="0.5" />
        <text
          x="44"
          y="50"
          textAnchor="middle"
          fill={letterFill}
          style={{
            fontFamily: "var(--font-barlow-condensed), Impact, system-ui, sans-serif",
            fontSize: 21,
            fontWeight: 800,
            letterSpacing: "0.02em",
          }}
        >
          MB
        </text>
      </svg>

      {!compact ? (
        <div>
          <p className={`heading-font text-base uppercase tracking-[0.12em] ${textMain}`}>
            MB <span className="text-brand-gold">Bau</span> UG
          </p>
          <p className={`text-[10px] uppercase leading-tight tracking-[0.2em] ${textSub}`}>
            Bauen. Sanieren. Vertrauen.
          </p>
        </div>
      ) : (
        <div>
          <p className={`heading-font text-sm uppercase tracking-[0.08em] ${textMain}`}>
            MB <span className="text-brand-gold">Bau</span> UG
          </p>
          <p className={`text-[9px] uppercase leading-tight tracking-[0.16em] ${textSub}`}>
            Bauen. Sanieren. Vertrauen.
          </p>
        </div>
      )}
    </div>
  );
}
