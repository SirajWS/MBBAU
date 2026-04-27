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
  const sizeClass = compact
    ? "h-10 w-[4.25rem] sm:h-12 sm:w-[4.75rem]"
    : "h-14 w-[6.5rem] sm:h-16 sm:w-28";

  return (
    <div className="inline-flex items-center gap-3">
      <svg
        viewBox="0 0 92 66"
        preserveAspectRatio="xMidYMid meet"
        className={sizeClass}
        role="img"
        aria-label="MB Bau UG"
      >
        <rect x="0.5" y="0.5" width="91" height="65" rx="5" fill={markBg} stroke={markStroke} />
        <path
          d="M17 28 L46 6 L75 28"
          fill="none"
          stroke="#C49A2A"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="62" y="18" width="4.5" height="7" fill="#C49A2A" rx="0.5" />
        <text
          x="46"
          y="57"
          textAnchor="middle"
          fill={letterFill}
          style={{
            fontFamily: "var(--font-barlow-condensed), Impact, system-ui, sans-serif",
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: "0.01em",
          }}
        >
          MB
        </text>
      </svg>

      {!compact ? (
        <div>
          <p className={`heading-font text-lg uppercase tracking-[0.1em] sm:text-xl ${textMain}`}>
            MB <span className="text-brand-gold">Bau</span> UG
          </p>
          <p className={`text-[10px] uppercase leading-tight tracking-[0.2em] ${textSub}`}>
            Bauen. Sanieren. Vertrauen.
          </p>
        </div>
      ) : (
        <div>
          <p className={`heading-font text-base uppercase tracking-[0.08em] ${textMain}`}>
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
