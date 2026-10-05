'use client';

import { useEffect, useRef, useState } from 'react';
import MapNodePanel from './MapNodePanel';
import { DARSHANAS_DETAILS as DARSHANAS_EN } from '@/lib/darshanas-data';
import { DARSHANAS_DETAILS as DARSHANAS_MR } from '@/lib/darshanas-data_mr';
import { NASTIKA_DETAILS as NASTIKA_EN } from '@/lib/nastika-data';
import { NASTIKA_DETAILS as NASTIKA_MR } from '@/lib/nastika-data_mr';
import { NASTIKA_SCHOOLS, SCHOOL_EDGES, SCHOOL_GROUP, SCHOOL_PAIRS, type EdgeKind } from '@/lib/schools-map-data';
import { useLanguage } from '@/lib/LanguageContext';

type P = { x: number; y: number };
type Layout = {
  vw: number;
  vh: number;
  nw: number;
  nwN: number;
  nh: number;
  pos: Record<string, P>;
  root: P;
  pairLabel: Record<string, P>;
  astika: { x: number; y: number; w: number; h: number; lx: number; ly: number };
  nastika: { x: number; y: number; w: number; h: number; lx: number; ly: number };
};

function buildLayout(portrait: boolean): Layout {
  const pos: Record<string, P> = {};
  const pairLabel: Record<string, P> = {};
  if (portrait) {
    SCHOOL_PAIRS.forEach((p, r) => {
      const y = 150 + r * 118;
      pos[p.members[0]] = { x: 100, y };
      pos[p.members[1]] = { x: 300, y };
      pairLabel[p.id] = { x: 200, y: y - 38 };
    });
    NASTIKA_SCHOOLS.forEach((id, i) => (pos[id] = { x: 70 + i * 130, y: 545 }));
    return {
      vw: 400, vh: 620, nw: 170, nwN: 118, nh: 52, pos,
      root: { x: 200, y: 38 }, pairLabel,
      astika: { x: 8, y: 70, w: 384, h: 350, lx: 20, ly: 90 },
      nastika: { x: 8, y: 450, w: 384, h: 140, lx: 20, ly: 470 },
    };
  }
  SCHOOL_PAIRS.forEach((p, r) => {
    const y = 160 + r * 120;
    pos[p.members[0]] = { x: 150, y };
    pos[p.members[1]] = { x: 440, y };
    pairLabel[p.id] = { x: 295, y: y - 40 };
  });
  NASTIKA_SCHOOLS.forEach((id, i) => (pos[id] = { x: 850, y: 160 + i * 120 }));
  return {
    vw: 1000, vh: 500, nw: 170, nwN: 170, nh: 52, pos,
    root: { x: 295, y: 40 }, pairLabel,
    astika: { x: 20, y: 70, w: 560, h: 400, lx: 36, ly: 92 },
    nastika: { x: 700, y: 70, w: 280, h: 400, lx: 716, ly: 92 },
  };
}

export default function SchoolsMap() {
  const { lang, t } = useLanguage();
  const mr = lang === 'mr';
  const DARSHANAS = mr ? DARSHANAS_MR : DARSHANAS_EN;
  const NASTIKA = mr ? NASTIKA_MR : NASTIKA_EN;

  const wrapRef = useRef<HTMLDivElement>(null);
  const [portrait, setPortrait] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => setPortrait(el.clientWidth < 640);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const node = new URLSearchParams(window.location.search).get('node');
    if (node && SCHOOL_GROUP[node]) setSelected(node);
  }, []);

  const select = (id: string | null) => {
    setSelected(id);
    try {
      const url = new URL(window.location.href);
      if (id) url.searchParams.set('node', id);
      else url.searchParams.delete('node');
      window.history.replaceState(null, '', url.toString());
    } catch {
      /* in-page selection still works */
    }
  };

  const info = (id: string) => {
    const d = SCHOOL_GROUP[id] === 'astika' ? DARSHANAS[id] : NASTIKA[id];
    return d;
  };
  const colorOf = (id: string) => (SCHOOL_GROUP[id] === 'astika' ? 'var(--ac-classical)' : 'var(--ac-heterodox)');
  const nameOf = (id: string) => info(id).title;

  const L = buildLayout(portrait);
  const related = (id: string) =>
    SCHOOL_EDGES.filter((e) => e.a === id || e.b === id).map((e) => ({ edge: e, other: e.a === id ? e.b : e.a }));

  // Curve bowing away from the straight line so edges don't run behind other nodes.
  const edgePath = (a: P, b: P, bow: number) => {
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const cx = mx + (-dy / len) * bow;
    const cy = my + (dx / len) * bow;
    return `M${a.x},${a.y} Q${cx},${cy} ${b.x},${b.y}`;
  };

  const selInfo = selected ? info(selected) : null;
  const selDetails = selected
    ? SCHOOL_GROUP[selected] === 'astika'
      ? (selInfo as (typeof DARSHANAS)[string])
      : null
    : null;
  const selRelations = selected ? related(selected) : [];
  const rootPair = (pid: string) => L.pairLabel[pid];

  const kindLabel: Record<EdgeKind, string> = {
    pair: t('map.schools.k_pair'),
    debate: t('map.schools.k_debate'),
    influence: t('map.schools.k_influence'),
  };

  return (
    <>
      <div ref={wrapRef} className="sm-wrap">
        <svg viewBox={`0 0 ${L.vw} ${L.vh}`} className="sm-svg" role="group" aria-label={t('map.schools.aria')}>
          <defs>
            <marker id="sm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="sm-arrowhead" />
            </marker>
          </defs>

          <rect className="sm-zone sm-zone-astika" x={L.astika.x} y={L.astika.y} width={L.astika.w} height={L.astika.h} rx={10} />
          <text className="sm-zone-label" x={L.astika.lx} y={L.astika.ly}>{t('map.schools.astika')}</text>
          <rect className="sm-zone sm-zone-nastika" x={L.nastika.x} y={L.nastika.y} width={L.nastika.w} height={L.nastika.h} rx={10} />
          <text className="sm-zone-label" x={L.nastika.lx} y={L.nastika.ly}>{t('map.schools.nastika')}</text>

          {/* root: the Veda, from which the six āstika schools take their stance */}
          <g className="sm-root">
            <rect x={L.root.x - 105} y={L.root.y - 17} width={210} height={34} rx={17} />
            <text x={L.root.x} y={L.root.y + 5} textAnchor="middle">{t('map.schools.root')}</text>
          </g>
          {SCHOOL_PAIRS.map((p) => (
            <line key={p.id} className="sm-root-line" x1={L.root.x} y1={L.root.y + 17} x2={rootPair(p.id).x} y2={rootPair(p.id).y - 12} />
          ))}

          {/* relationship edges: faint until a school is selected */}
          {SCHOOL_EDGES.map((e, i) => {
            const a = L.pos[e.a];
            const b = L.pos[e.b];
            const active = selected != null && (e.a === selected || e.b === selected);
            const dim = selected != null && !active;
            if (e.kind === 'pair') {
              return (
                <line
                  key={i}
                  className={`sm-edge sm-edge-pair${active ? ' is-active' : ''}${dim ? ' is-dim' : ''}`}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                />
              );
            }
            const bow = portrait ? (a.x < 200 ? -70 : 70) * (e.a === 'vedanta' || e.a === 'yoga' ? -1 : 1) : 55;
            return (
              <path
                key={i}
                className={`sm-edge sm-edge-${e.kind}${active ? ' is-active' : ''}${dim ? ' is-dim' : ''}`}
                d={edgePath(a, b, bow)}
                markerEnd={e.kind === 'influence' ? 'url(#sm-arrow)' : undefined}
              />
            );
          })}

          {SCHOOL_PAIRS.map((p) => (
            <text key={p.id} className="sm-pair-label" x={L.pairLabel[p.id].x} y={L.pairLabel[p.id].y} textAnchor="middle">
              {mr ? p.mr : p.en}
            </text>
          ))}

          {Object.keys(L.pos).map((id) => {
            const p = L.pos[id];
            const d = info(id);
            const nw = SCHOOL_GROUP[id] === 'nastika' ? L.nwN : L.nw;
            const isSel = id === selected;
            const linked = selected != null && related(selected).some((r) => r.other === id);
            const dim = selected != null && !isSel && !linked;
            return (
              <g
                key={id}
                className={`sm-node${isSel ? ' is-sel' : ''}${dim ? ' is-dim' : ''}`}
                style={{ '--c': colorOf(id) } as React.CSSProperties}
                transform={`translate(${p.x - nw / 2},${p.y - L.nh / 2})`}
                tabIndex={0}
                role="button"
                aria-pressed={isSel}
                aria-label={d.title}
                onClick={() => select(isSel ? null : id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    select(isSel ? null : id);
                  }
                }}
              >
                <rect width={nw} height={L.nh} rx={8} />
                <text className="sm-node-title" x={nw / 2} y={mr ? L.nh / 2 + 6 : 22} textAnchor="middle">{d.title}</text>
                {!mr && <text className="sm-node-sub" x={nw / 2} y={41} textAnchor="middle">{d.deva}</text>}
              </g>
            );
          })}
        </svg>
      </div>

      <ul className="sm-legend" aria-label={t('map.schools.legend')}>
        <li><span className="sm-key sm-key-pair" />{kindLabel.pair}</li>
        <li><span className="sm-key sm-key-debate" />{kindLabel.debate}</li>
        <li><span className="sm-key sm-key-influence" />{kindLabel.influence}</li>
      </ul>
      <p className="tl-hint">{t('map.schools.hint')}</p>

      {selected && selInfo && (
        <MapNodePanel
          color={colorOf(selected)}
          eyebrow={`${selInfo.founder} · ${selDetails ? selDetails.coreText : (selInfo as (typeof NASTIKA)[string]).texts.split(',')[0]}`}
          title={selInfo.title}
          deva={selInfo.deva}
          blurb={selInfo.explanation[0]}
          tags={(selInfo as { keyConcepts?: { name: string }[]; concepts?: { name: string }[] }).keyConcepts?.map((c) => c.name)
            ?? (selInfo as { concepts?: { name: string }[] }).concepts?.map((c) => c.name)}
          links={[{ label: t('map.open'), href: `/${SCHOOL_GROUP[selected] === 'astika' ? 'darshanas' : 'nastika-darshanas'}/${selected}/` }]}
          onClose={() => select(null)}
        >
          {selRelations.length > 0 && (
            <div className="sm-rels">
              <div className="sm-rels-hd">{t('map.schools.relations')}</div>
              <ul>
                {selRelations.map(({ edge, other }) => (
                  <li key={`${edge.a}-${edge.b}`}>
                    <span className={`sm-pill sm-pill-${edge.kind}`}>{kindLabel[edge.kind]}</span>
                    <button type="button" className="sm-rel-link" onClick={() => select(other)}>{nameOf(other)}</button>
                    <span className="sm-rel-text">{mr ? edge.mr : edge.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </MapNodePanel>
      )}
    </>
  );
}
