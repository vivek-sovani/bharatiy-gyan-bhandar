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

// Seal in the header — lotus-derived monogram.
export function HeaderSeal({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" aria-hidden="true">
      <circle cx="30" cy="30" r="29" fill="none" stroke="var(--maroon)" strokeWidth="0.8" />
      <circle cx="30" cy="30" r="24" fill="none" stroke="var(--maroon)" strokeWidth="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <g key={a} transform={`rotate(${a} 30 30)`}>
          <path d="M30 8 C 35 16, 35 22, 30 26 C 25 22, 25 16, 30 8 Z"
                fill="none" stroke="var(--maroon)" strokeWidth="0.8" />
        </g>
      ))}
      <circle cx="30" cy="30" r="3.5" fill="var(--maroon)" />
      <circle cx="30" cy="30" r="1.4" fill="var(--paper)" />
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

// Era / domain emblems — line-art motifs used to decorate section banners.
// Keys: contributor eras (vedic, classical, medieval, modern) and concept
// domains (order, ethics, liberation, mind, knowledge, heterodox, aesthetics).
export function Emblem({
  name,
  className = '',
  size = 56,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const o = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinejoin: 'round' as const,
    strokeLinecap: 'round' as const,
  };
  const solid = { fill: 'currentColor', stroke: 'none' };

  let content: React.ReactNode = null;
  switch (name) {
    // ── Contributor eras ──────────────────────────────────────────────
    case 'vedic': // agni — sacrificial flame on an altar
      content = (
        <>
          <polygon points="50,18 61,52 50,43 39,52" {...solid} />
          <path d="M31 68 H69 L63 80 H37 Z" {...o} />
          <line x1="24" y1="68" x2="76" y2="68" {...o} />
        </>
      );
      break;
    case 'classical': // palm-leaf manuscript bound by a cord
      content = (
        <>
          <rect x="24" y="34" width="52" height="9" rx="2" {...o} />
          <rect x="24" y="48" width="52" height="9" rx="2" {...o} />
          <rect x="24" y="62" width="52" height="9" rx="2" {...o} />
          <line x1="40" y1="30" x2="40" y2="75" {...o} />
          <circle cx="40" cy="52" r="2.4" {...solid} />
        </>
      );
      break;
    case 'medieval': // temple śikhara with finial
      content = (
        <>
          <path d="M50 16 L66 70 H34 Z" {...o} />
          <line x1="41" y1="48" x2="59" y2="48" {...o} />
          <line x1="38" y1="60" x2="62" y2="60" {...o} />
          <circle cx="50" cy="13" r="3" {...o} />
          <rect x="30" y="70" width="40" height="9" {...o} />
        </>
      );
      break;
    case 'modern': // rising sun over a horizon
      content = (
        <>
          <path d="M30 64 A20 20 0 0 1 70 64" {...o} />
          <line x1="22" y1="64" x2="78" y2="64" {...o} />
          {[-42, -21, 0, 21, 42].map((d, i) => {
            const a = ((d - 90) * Math.PI) / 180;
            return (
              <line key={i} x1={50 + Math.cos(a) * 26} y1={64 + Math.sin(a) * 26}
                    x2={50 + Math.cos(a) * 34} y2={64 + Math.sin(a) * 34} {...o} />
            );
          })}
        </>
      );
      break;

    // ── Concept domains ───────────────────────────────────────────────
    case 'order': // ṛta — cosmic order, concentric with axes
      content = (
        <>
          <circle cx="50" cy="50" r="27" {...o} />
          <circle cx="50" cy="50" r="17" {...o} />
          <circle cx="50" cy="50" r="7" {...o} />
          <line x1="50" y1="14" x2="50" y2="86" {...o} />
          <line x1="14" y1="50" x2="86" y2="50" {...o} />
        </>
      );
      break;
    case 'ethics': // balance / scales
      content = (
        <>
          <line x1="50" y1="20" x2="50" y2="74" {...o} />
          <line x1="26" y1="30" x2="74" y2="30" {...o} />
          <circle cx="50" cy="20" r="3" {...solid} />
          <line x1="26" y1="30" x2="20" y2="44" {...o} />
          <line x1="26" y1="30" x2="32" y2="44" {...o} />
          <path d="M18 44 A8 8 0 0 0 34 44" {...o} />
          <line x1="74" y1="30" x2="68" y2="44" {...o} />
          <line x1="74" y1="30" x2="80" y2="44" {...o} />
          <path d="M66 44 A8 8 0 0 0 82 44" {...o} />
          <line x1="38" y1="74" x2="62" y2="74" {...o} />
        </>
      );
      break;
    case 'liberation': // mokṣa — lotus rising from water
      content = (
        <>
          {[0, 38, -38, 70, -70].map((a, i) => (
            <path key={i} transform={`rotate(${a} 50 58)`}
                  d="M50 24 C58 38, 58 49, 50 58 C42 49, 42 38, 50 24 Z" {...o} />
          ))}
          <path d="M22 66 Q36 74 50 66 Q64 58 78 66" {...o} />
        </>
      );
      break;
    case 'mind': // matter & cosmos — interlocking triad (guṇas)
      content = (
        <>
          <circle cx="50" cy="40" r="16" {...o} />
          <circle cx="38" cy="61" r="16" {...o} />
          <circle cx="62" cy="61" r="16" {...o} />
        </>
      );
      break;
    case 'knowledge': // pramāṇa — the eye of perception
      content = (
        <>
          <path d="M20 50 Q50 28 80 50 Q50 72 20 50 Z" {...o} />
          <circle cx="50" cy="50" r="9" {...o} />
          <circle cx="50" cy="50" r="2.6" {...solid} />
        </>
      );
      break;
    case 'heterodox': // dharmacakra — wheel
      content = (
        <>
          <circle cx="50" cy="50" r="28" {...o} />
          <circle cx="50" cy="50" r="6" {...o} />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            return (
              <line key={i} x1={50 + Math.cos(a) * 6} y1={50 + Math.sin(a) * 6}
                    x2={50 + Math.cos(a) * 28} y2={50 + Math.sin(a) * 28} {...o} />
            );
          })}
        </>
      );
      break;
    case 'aesthetics': // rasa — paisley (buṭi) flourish
      content = (
        <>
          <path d="M46 80 C20 68 24 36 48 30 C68 25 76 46 60 54 C50 59 44 50 50 44" {...o} />
          <circle cx="52" cy="40" r="2.4" {...solid} />
        </>
      );
      break;
    default:
      content = <circle cx="50" cy="50" r="3" {...solid} />;
  }

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      {content}
    </svg>
  );
}
