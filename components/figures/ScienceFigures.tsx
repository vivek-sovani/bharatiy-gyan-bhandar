// Inline SVG figures for lib/sciences-data.ts — line-art style consistent
// with Ornaments.tsx (stroke="currentColor", colored via the wrapping
// element's `color`). No chart library; every number here is verified
// against the prose it illustrates.

const line = { stroke: 'currentColor', fill: 'none', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const dash = { ...line, strokeDasharray: '3 3' };
const label = { fill: 'currentColor', fontFamily: 'var(--font-mono)', fontSize: 10 };
const labelBig = { fill: 'currentColor', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600 };

export function SqrtTwoFigure() {
  return (
    <svg viewBox="0 0 220 150" width="100%" aria-hidden="true">
      <polygon points="40,120 140,120 140,20 40,20" {...line} />
      <line x1="40" y1="120" x2="140" y2="20" {...line} strokeWidth={1.8} />
      <text x="20" y="74" {...label}>1</text>
      <text x="82" y="138" {...label}>1</text>
      <text x="94" y="64" {...labelBig}>√2</text>
      <text x="94" y="80" {...label}>≈ 1.4142157</text>
    </svg>
  );
}

export function AltarSquareCircleFigure() {
  return (
    <svg viewBox="0 0 260 150" width="100%" aria-hidden="true">
      <polygon points="20,120 120,120 120,20 20,20" {...line} />
      <line x1="20" y1="120" x2="120" y2="20" {...dash} />
      <text x="14" y="138" {...label}>side a = 1</text>
      <circle cx="195" cy="70" r="56.9" {...line} strokeWidth={1.8} />
      <line x1="195" y1="70" x2="251.9" y2="70" {...dash} />
      <text x="196" y="66" {...label}>r ≈ 0.569</text>
      <text x="150" y="138" {...label}>equal-area circle</text>
    </svg>
  );
}

export function MeruTriangleFigure() {
  const rows = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
  const rowGap = 26;
  const colGap = 26;
  return (
    <svg viewBox="0 0 220 150" width="100%" aria-hidden="true">
      {rows.map((row, r) => {
        const y = 20 + r * rowGap;
        const startX = 110 - (row.length - 1) * (colGap / 2);
        return row.map((n, c) => (
          <text key={`${r}-${c}`} x={startX + c * colGap} y={y} textAnchor="middle" {...label} fontSize={13}>
            {n}
          </text>
        ));
      })}
    </svg>
  );
}

export function SineTableFigure() {
  const cx = 30, cy = 130, r = 95;
  const angles = [0, 22.5, 45, 67.5, 90];
  return (
    <svg viewBox="0 0 220 150" width="100%" aria-hidden="true">
      <path d={`M ${cx + r} ${cy} A ${r} ${r} 0 0 0 ${cx} ${cy - r}`} {...line} />
      <line x1={cx} y1={cy} x2={cx} y2={cy - r} {...line} />
      <line x1={cx} y1={cy} x2={cx + r} y2={cy} {...line} />
      {angles.map((a) => {
        const rad = (a * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy - r * Math.sin(rad);
        return <line key={a} x1={cx} y1={cy} x2={x} y2={y} {...dash} />;
      })}
      <line x1={cx + r * Math.cos(Math.PI / 4)} y1={cy} x2={cx + r * Math.cos(Math.PI / 4)} y2={cy - r * Math.sin(Math.PI / 4)} {...line} strokeWidth={1.8} />
      <text x={cx + r * Math.cos(Math.PI / 4) + 6} y={cy - 20} {...label}>jyā (45°)</text>
    </svg>
  );
}

export function CyclicQuadFigure() {
  const cx = 110, cy = 75, r = 60;
  const pts = [100, 20, -60, -150].map((a) => {
    const rad = (a * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  });
  const [A, B, C, D] = pts;
  const labels = [
    { p: A, t: 'a', dx: 10, dy: 4 },
    { p: B, t: 'b', dx: 10, dy: 4 },
    { p: C, t: 'c', dx: -4, dy: 16 },
    { p: D, t: 'd', dx: -12, dy: 4 },
  ];
  return (
    <svg viewBox="0 0 220 150" width="100%" aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} {...dash} />
      <polygon points={pts.map((p) => p.join(',')).join(' ')} {...line} strokeWidth={1.8} />
      {labels.map((l, i) => (
        <text key={i} x={l.p[0] + l.dx} y={l.p[1] + l.dy} {...label}>{l.t}</text>
      ))}
    </svg>
  );
}

// The specific mutual-division ladder for the worked example in the data
// file (find x with x≡6 mod 15, x≡3 mod 11): 15,11 → 4,3,1, quotients 1,2,1,3.
export function KuttakaLadderFigure() {
  const steps = [
    { a: 15, b: 11, q: 1, r: 4 },
    { a: 11, b: 4, q: 2, r: 3 },
    { a: 4, b: 3, q: 1, r: 1 },
    { a: 3, b: 1, q: 3, r: 0 },
  ];
  return (
    <svg viewBox="0 0 220 170" width="100%" aria-hidden="true">
      {steps.map((s, i) => {
        const y = 20 + i * 36;
        return (
          <g key={i}>
            <text x="10" y={y} {...label} fontSize={12}>{s.a} = {s.q}×{s.b} + {s.r}</text>
            {i < steps.length - 1 && <line x1="16" y1={y + 8} x2="16" y2={y + 28} {...dash} />}
          </g>
        );
      })}
    </svg>
  );
}

export function MadhavaSeriesFigure() {
  // First six partial sums of 4×(1 − 1/3 + 1/5 − 1/7 + 1/9 − 1/11), verified numerically.
  const sums = [4, 2.66667, 3.46667, 2.89524, 3.33968, 2.97605];
  const w = 220, h = 150, pad = 20;
  const barW = (w - pad * 2) / sums.length - 8;
  const yFor = (v: number) => h - pad - ((v - 2.4) / (4.2 - 2.4)) * (h - pad * 2);
  const piY = yFor(Math.PI);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" aria-hidden="true">
      <line x1={pad} y1={piY} x2={w - pad} y2={piY} {...dash} />
      <text x={w - pad - 18} y={piY - 6} {...label}>π</text>
      {sums.map((v, i) => {
        const x = pad + i * ((w - pad * 2) / sums.length) + 4;
        const y = yFor(v);
        return <line key={i} x1={x + barW / 2} y1={h - pad} x2={x + barW / 2} y2={y} {...line} strokeWidth={5} />;
      })}
    </svg>
  );
}

export const FIGURES: Record<string, React.ComponentType> = {
  sqrtTwo: SqrtTwoFigure,
  altarSquareCircle: AltarSquareCircleFigure,
  meruTriangle: MeruTriangleFigure,
  sineTable: SineTableFigure,
  cyclicQuad: CyclicQuadFigure,
  kuttakaLadder: KuttakaLadderFigure,
  madhavaSeries: MadhavaSeriesFigure,
};
