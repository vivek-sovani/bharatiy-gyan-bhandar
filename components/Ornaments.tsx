// SVG ornaments: corner glyph, seal, mandala, yantra, flourish.

export function CornerOrn({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg className={`corner-orn ${className}`} width={size} height={size}
         viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M0 0 L24 0 L24 1 L1 1 L1 24 L0 24 Z" fill="currentColor" />
      <path d="M4 4 C 9 4, 12 7, 12 12" stroke="currentColor" strokeWidth="0.9" fill="none" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      <path d="M4 8 L 6 8 M 8 4 L 8 6" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

// Dharma Chakra seal in the header — 24-spoke wheel matching the site logo.
export function HeaderSeal({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      {/* Triple outer ring */}
      <circle cx="50" cy="50" r="48.5" fill="none" stroke="var(--maroon)" strokeWidth="1.8"/>
      <circle cx="50" cy="50" r="45"   fill="none" stroke="var(--maroon)" strokeWidth="0.7"/>
      <circle cx="50" cy="50" r="41.5" fill="none" stroke="var(--maroon)" strokeWidth="1.8"/>
      {/* 24 spokes at 15° intervals */}
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        return (
          <line key={i}
            x1={50 + 12.5 * Math.cos(a)} y1={50 + 12.5 * Math.sin(a)}
            x2={50 + 41.5 * Math.cos(a)} y2={50 + 41.5 * Math.sin(a)}
            stroke="var(--maroon)" strokeWidth="1.3"/>
        );
      })}
      {/* Hub outer ring */}
      <circle cx="50" cy="50" r="12.5" fill="none" stroke="var(--maroon)" strokeWidth="1.5"/>
      {/* Hub inner ring */}
      <circle cx="50" cy="50" r="7.5"  fill="none" stroke="var(--maroon)" strokeWidth="0.8"/>
      {/* 8 mini hub-spokes */}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return (
          <line key={i}
            x1={50 + 2.5 * Math.cos(a)} y1={50 + 2.5 * Math.sin(a)}
            x2={50 + 7.5 * Math.cos(a)} y2={50 + 7.5 * Math.sin(a)}
            stroke="var(--maroon)" strokeWidth="1"/>
        );
      })}
      {/* Centre */}
      <circle cx="50" cy="50" r="2"   fill="none" stroke="var(--maroon)" strokeWidth="0.7"/>
      <circle cx="50" cy="50" r="0.9" fill="var(--maroon)"/>
    </svg>
  );
}

// Mandala — used in the strip and as ambient flourish.
export function Mandala({ className = '', size = 80 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        <circle cx="50" cy="50" r="48" />
        <circle cx="50" cy="50" r="38" />
        <circle cx="50" cy="50" r="22" />
        <circle cx="50" cy="50" r="10" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * 22.5 * Math.PI) / 180;
          return (
            <line key={i}
              x1={50 + Math.cos(a) * 22} y1={50 + Math.sin(a) * 22}
              x2={50 + Math.cos(a) * 38} y2={50 + Math.sin(a) * 38} />
          );
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = i * 45;
          return (
            <g key={i} transform={`rotate(${a} 50 50)`}>
              <path d="M50 12 C 56 22, 56 30, 50 38 C 44 30, 44 22, 50 12 Z" />
            </g>
          );
        })}
      </g>
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}

// Yantra — used as the side ornament of the manuscript-hero variant.
export function Yantra({ className = '', size = 240 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        <rect x="6" y="6" width="188" height="188" />
        <rect x="14" y="14" width="172" height="172" />
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="60" />
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 100 100)`}>
            <path d="M100 20 C 116 50, 116 70, 100 100 C 84 70, 84 50, 100 20 Z" />
          </g>
        ))}
        <polygon points="100,40 156,140 44,140" />
        <polygon points="100,50 146,132 54,132" />
        <polygon points="100,160 156,60 44,60" />
        <polygon points="100,150 146,68 54,68" />
        <circle cx="100" cy="100" r="6" />
      </g>
      <circle cx="100" cy="100" r="2" fill="currentColor" />
    </svg>
  );
}

// Small flourish glyph used in dividers.
export function Glyph({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true">
      <path d="M7 1 L 9 5 L 13 7 L 9 9 L 7 13 L 5 9 L 1 7 L 5 5 Z"
            fill="currentColor" />
    </svg>
  );
}
