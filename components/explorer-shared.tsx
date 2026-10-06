'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CONTRIBUTORS as CONTRIBUTORS_EN } from '@/lib/contributors-data';
import { CONTRIBUTORS as CONTRIBUTORS_MR } from '@/lib/contributors-data_mr';
import { useLanguage } from '@/lib/LanguageContext';
import type { ExplorerSeer } from '@/lib/vedic-timeline-data';

// Pieces shared by the Vedas and Upaniṣads explorers: the zoomable-free timeline,
// seer resolution and number/date formatting.

export type Seer = {
  id: string;
  year: number;
  name: string;
  deva: string;
  seal: string;
  dates: string;
  blurb: string;
  works: string[];
  href?: string;
};

export type Bar = {
  id: string;
  a: number;
  b: number;
  label: string;
  shade: number; // percentage of the lane colour mixed into the paper tone
  row?: number; // fixed row; packed automatically when omitted
};

export type TLLane = {
  id: string;
  accent: string;
  name: string;
  deva: string;
  bars: Bar[];
  seers: Seer[];
};

export type TLPick = { kind: 'bar'; id: string } | { kind: 'seer'; id: string } | null;

const DEVA_DIGITS = '०१२३४५६७८९';
export function num(n: number, mr: boolean): string {
  const t = String(n);
  return mr ? t.replace(/\d/g, (d) => DEVA_DIGITS[+d]) : t;
}

export function yearLabel(y: number, mr: boolean): string {
  if (y > 0) return mr ? `इ.स. ${num(y, true)}` : `c. ${y} CE`;
  return mr ? `इ.स.पू. ${num(-y, true)}` : `c. ${-y} BCE`;
}

export function fmtSpan(a: number, b: number, mr: boolean): string {
  if (a < 0 && b > 0) return mr ? `इ.स.पू. ${num(-a, true)} – इ.स. ${num(b, true)}` : `c. ${-a} BCE – ${b} CE`;
  if (b > 0) return mr ? `इ.स. ${num(a, true)}–${num(b, true)}` : `c. ${a}–${b} CE`;
  return mr ? `इ.स.पू. ${num(-a, true)}–${num(-b, true)}` : `c. ${-a}–${-b} BCE`;
}

export function resolveSeers(
  seers: ExplorerSeer[],
  mr: boolean,
  mrOverrides: Record<string, { name: string; note: string }>,
): Seer[] {
  const people = mr ? CONTRIBUTORS_MR : CONTRIBUTORS_EN;
  return seers.map((s) => {
    const c = s.contributorId ? people.find((x) => x.id === s.contributorId) : undefined;
    const own = mr ? mrOverrides[s.id] : undefined;
    return {
      id: s.id,
      year: s.year,
      name: c?.name ?? own?.name ?? s.name ?? s.id,
      deva: mr ? '' : c?.deva ?? s.deva ?? '',
      seal: c?.seal ?? s.seal ?? '',
      dates: c?.dates ?? yearLabel(s.year, mr),
      blurb: c?.blurb ?? own?.note ?? s.note ?? '',
      works: c?.works ?? [],
      href: c?.href,
    };
  });
}

const LANE_PAD_TOP = 30;
const ROW_H = 17;
const AXIS_H = 26;

export function Timeline({
  lanes,
  range,
  ticks,
  W,
  gutter,
  activeId,
  names,
  mr,
  label,
  onPick,
}: {
  lanes: TLLane[];
  range: [number, number];
  ticks: number[];
  W: number;
  gutter: number;
  activeId: string;
  names: boolean;
  mr: boolean;
  label: string;
  onPick: (laneId: string, pick: TLPick) => void;
}) {
  const x = (y: number) => gutter + ((y - range[0]) / (range[1] - range[0])) * (W - gutter - 14);

  // On a narrow lane the fixed rows give way to automatic packing so every layer can carry its label
  // beside its bar, and tick labels thin out so they do not overprint.
  const narrow = W < 460;
  const tickStep = ticks.length > 1 ? Math.max(1, Math.ceil(64 / Math.abs(x(ticks[1]) - x(ticks[0])))) : 1;

  // Bars are packed in pixel space so a label that has to sit beside a short bar
  // still reserves its width. Bars with a fixed row (the Vedas) keep that row and
  // draw their label inside only.
  const laid = lanes.map((l) => {
    const sorted = [...l.bars].sort((p, q) => p.a - q.a);
    const ends: number[] = [];
    const placed = sorted.map((b) => {
      const x1 = x(b.a);
      const w = Math.max(10, x(b.b) - x1);
      const tw = b.label.length * (mr ? 7.6 : 6) + 12;
      const fixed = b.row !== undefined && !narrow;
      const inside = fixed ? w > 62 : w >= tw;
      const right = x1 + (inside ? w : w + 4 + tw);
      let r: number;
      if (fixed) {
        r = b.row!;
        ends[r] = Math.max(ends[r] ?? -1e9, right);
      } else {
        r = ends.findIndex((e) => e === undefined || e <= x1 - 4);
        if (r === -1) r = ends.length;
        ends[r] = right;
      }
      return { b, x1, w, inside, r };
    });
    const nRows = Math.max(1, ...placed.map((q) => q.r + 1));
    return { l, placed, h: LANE_PAD_TOP + nRows * ROW_H + 14 };
  });
  const H = AXIS_H + laid.reduce((s, q) => s + q.h, 0) + 4;
  let top = AXIS_H;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="vx-svg" role="group" aria-label={label}>
      {ticks.map((y, ti) => (
        <g key={y}>
          <line className="vx-tick" x1={x(y)} x2={x(y)} y1={AXIS_H - 4} y2={H} />
          {ti % tickStep === 0 && <text className="vx-tick-label" x={x(y)} y={AXIS_H - 10} textAnchor={x(y) > W - 36 ? 'end' : 'middle'}>
            {y === 0 ? (mr ? 'इ.स. १' : '1 CE') : y > 0 ? (mr ? `${num(y, true)} इ.स.` : `${y} CE`) : mr ? `${num(-y, true)} इ.स.पू.` : `${-y} BCE`}
          </text>}
        </g>
      ))}
      {laid.map(({ l, placed, h }) => {
        const y0 = top;
        top += h;
        const active = l.id === activeId;
        let prev = -1e9;
        const seers = [...l.seers]
          .sort((a, b) => a.year - b.year)
          .map((s) => {
            const sx = Math.max(x(s.year), prev + 21);
            prev = sx;
            return { s, sx };
          });
        return (
          <g key={l.id} className={`vx-lane${active ? ' is-active' : ''}`} style={{ '--vc': l.accent } as React.CSSProperties} transform={`translate(0,${y0})`}>
            <rect className="vx-lane-bg" x={2} y={2} width={W - 4} height={h - 6} rx={8} onClick={() => onPick(l.id, null)} />
            {names && (
              <g className="vx-lane-name" onClick={() => onPick(l.id, null)}>
                <rect x={2} y={2} width={5} height={h - 6} rx={2} className="vx-lane-bar" />
                <text x={18} y={mr ? 40 : 30} className="vx-lane-title">{l.name}</text>
                {!mr && <text x={18} y={48} className="vx-lane-deva">{l.deva}</text>}
              </g>
            )}
            {placed.map(({ b, x1, w, inside, r }) => {
              const y = LANE_PAD_TOP + r * ROW_H;
              return (
                <g key={b.id} className="vx-strat" onClick={() => onPick(l.id, { kind: 'bar', id: b.id })}>
                  <title>{`${b.label} · ${fmtSpan(b.a, b.b, mr)}`}</title>
                  <rect x={x1} y={y} width={w} height={14} rx={4}
                    style={{ fill: `color-mix(in oklab, var(--vc) ${b.shade}%, var(--paper-elev))` }} />
                  {inside
                    ? <text x={x1 + 7} y={y + 10.5} className="vx-strat-label">{b.label}</text>
                    : (b.row === undefined || narrow) && <text x={x1 + w + 5} y={y + 10.5} className="vx-strat-label vx-strat-out">{b.label}</text>}
                </g>
              );
            })}
            {seers.map(({ s, sx }) => (
              <g key={s.id} className="vx-seer-mark" transform={`translate(${sx},16)`}
                onClick={() => onPick(l.id, { kind: 'seer', id: s.id })}>
                <title>{`${s.name} · ${s.dates}`}</title>
                <circle r={10} />
                <text y={3.5} textAnchor="middle">{s.seal.slice(0, 2)}</text>
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// Draws a timeline at the pixel width it has been given, so text keeps its size on a narrow screen
// and the labels re-pack to fit instead of the whole lane being shrunk or scrolled.
export function LaneFit({ children }: { children: (W: number) => React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(340);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(Math.round(Math.min(640, Math.max(260, e.contentRect.width)))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return <div ref={ref}>{children(w)}</div>;
}

// A selection opens as a popup over the page, so it is seen wherever the card's links sit.
export function DetailModal({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  const { t } = useLanguage();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);
  return (
    <div className="vx-modal" onClick={onClose}>
      <div className="vx-detail" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="vx-detail-x" aria-label={t('vx.close')} onClick={onClose} autoFocus>×</button>
        {children}
      </div>
    </div>
  );
}

export function SeerDetail({ seer, onClose }: { seer: Seer; onClose: () => void }) {
  const { t } = useLanguage();
  return (
    <DetailModal onClose={onClose}>
      <div className="vx-detail-seer">
        <span className="vx-medal">{seer.seal}</span>
        <div>
          <div className="eyebrow">{t('vx.seer')} · {seer.dates}</div>
          <h3>{seer.name} {seer.deva && <span className="deva-only">{seer.deva}</span>}</h3>
        </div>
      </div>
      <p>{seer.blurb}</p>
      {seer.works.length > 0 && <ul className="tl-tags">{seer.works.map((w) => <li key={w}>{w}</li>)}</ul>}
      {seer.href && <Link className="chip" href={seer.href}>{t('vx.open_related')} →</Link>}
    </DetailModal>
  );
}

// Shared page behaviour: scroll-spy over the cards, a pinned compact bar once the full
// timeline has scrolled away, and smooth jumps from timeline to card.
export function useExplorerNav(firstId: string) {
  const [active, setActive] = useState(firstId);
  const [pinned, setPinned] = useState(false);
  const [hdrH, setHdrH] = useState(64);
  const panelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const jumping = useRef<number | null>(null);

  useEffect(() => {
    const bar = document.querySelector('.guided-bar') ?? document.querySelector('.hdr');
    const h = bar?.getBoundingClientRect().height;
    if (h) setHdrH(h);
  }, []);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setPinned(!e.isIntersecting && e.boundingClientRect.top < 0), {
      rootMargin: `-${hdrH}px 0px 0px 0px`,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [hdrH]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (jumping.current) return;
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.getAttribute('data-id')!);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    Object.values(cardRefs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const jump = useCallback((id: string) => {
    setActive(id);
    cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (jumping.current) window.clearTimeout(jumping.current);
    jumping.current = window.setTimeout(() => { jumping.current = null; }, 900);
  }, []);

  return { active, pinned, hdrH, panelRef, cardRefs, jump };
}
