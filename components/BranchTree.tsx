'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { TREE as TREE_EN, type TreeNode } from '@/lib/data';
import { TREE as TREE_MR } from '@/lib/data_mr';
import { treeNodePath } from '@/lib/routes';
import { useLanguage } from '@/lib/LanguageContext';

// One radial diagram per primary stream (Śruti / Smṛti / Itara).
export default function BranchTree({ branchId }: { branchId: string }) {
  const router = useRouter();
  const { lang, t } = useLanguage();

  const TREE = lang === 'mr' ? TREE_MR : TREE_EN;

  const primary = TREE.primary.find((p) => p.id === branchId)!;
  const children = TREE.children[branchId];
  const [active, setActive] = useState<TreeNode | null>(null);

  const W = 1000;
  const H = branchId === 'smriti' ? 680 : branchId === 'shruti' ? 600 : 520;
  const cx = W / 2;
  const cy = H / 2;

  const n = children.length;
  const radius = n >= 10 ? 245 : n >= 5 ? 215 : 170;

  // Math.sin/cos precision is implementation-defined, so Node (build) and the
  // browser can disagree in the last digit. Round so SSR and hydration match.
  const r = (v: number) => Math.round(v * 1000) / 1000;

  const startAngle = -Math.PI / 2;
  const childPositions = children.map((c, i) => {
    const a = startAngle + (i / n) * Math.PI * 2;
    return {
      node: c,
      x: r(cx + Math.cos(a) * radius),
      y: r(cy + Math.sin(a) * radius),
      angle: a,
    };
  });

  function ChildNode({ pos }: { pos: (typeof childPositions)[number] }) {
    const c = pos.node;
    const isActive = active != null && active.id === c.id;
    const href = treeNodePath(c.id);
    return (
      <g
        className="branch-node"
        onMouseEnter={() => setActive(c)}
        onMouseLeave={() => setActive(null)}
        onClick={(e) => {
          if (href && !e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            router.push(href);
          }
        }}
        style={{ cursor: href ? 'pointer' : 'default' }}
      >
        <circle cx={pos.x} cy={pos.y} r="32"
          style={isActive ? { fill: 'var(--maroon)', stroke: 'var(--maroon)' } : undefined} />
        <text x={pos.x} y={pos.y - 2} textAnchor="middle" className="label" fontSize="11.5"
          style={isActive ? { fill: 'var(--paper)' } : undefined}>
          {c.label}
        </text>
        <text x={pos.x} y={pos.y + 12} textAnchor="middle" className="deva-t deva-only" fontSize="11"
          style={isActive ? { fill: 'var(--paper)' } : undefined}>
          {c.deva}
        </text>
      </g>
    );
  }

  return (
    <div className="branch">
      <header className="branch-hd">
        <div className="branch-mark">
          <span className="branch-glyph" aria-hidden="true">
            {branchId === 'shruti' ? 'श्' : branchId === 'smriti' ? 'स्म्' : 'इ'}
          </span>
        </div>
        <div className="branch-meta">
          <div className="eyebrow"><Glyph /> {t('tree.branch')} · {n} {t('tree.streams')}</div>
          <h3>
            <span className="deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', marginRight: '0.6em' }}>{primary.deva}</span>
            {primary.label}
          </h3>
          <p>{primary.gloss}</p>
        </div>
      </header>

      <div className="branch-canvas">
        <CornerOrn className="tl" />
        <CornerOrn className="tr" />
        <CornerOrn className="bl" />
        <CornerOrn className="br" />
        <svg className="tree-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          <circle cx={cx} cy={cy} r={radius + 56} fill="none" stroke="var(--rule)" strokeDasharray="1 4" />
          <circle cx={cx} cy={cy} r={radius - 56} fill="none" stroke="var(--rule)" strokeDasharray="2 5" />

          {childPositions.map((p) => (
            <line key={p.node.id} className="tree-link"
              x1={r(cx + Math.cos(p.angle) * 50)} y1={r(cy + Math.sin(p.angle) * 50)}
              x2={r(p.x - Math.cos(p.angle) * 34)} y2={r(p.y - Math.sin(p.angle) * 34)} />
          ))}

          <g className="tree-node is-primary">
            <circle cx={cx} cy={cy} r="50" style={{ fill: 'var(--paper-deep)', stroke: 'var(--maroon)', strokeWidth: 1.6 }} />
            <text x={cx} y={cy - 3} textAnchor="middle" className="label" fontSize="15" style={{ fontWeight: 600 }}>
              {primary.label}
            </text>
            <text x={cx} y={cy + 13} textAnchor="middle" className="deva-t deva-only" fontSize="13">
              {primary.deva}
            </text>
          </g>

          {childPositions.map((p) => (
            <ChildNode key={p.node.id} pos={p} />
          ))}
        </svg>

        <div className={`branch-detail ${active ? 'visible' : ''}`}>
          {active && (
            <>
              <div className="ttl">
                <span className="en">{active.label}</span>
                <span className="de deva-only">{active.deva}</span>
              </div>
              <p>{active.gloss}</p>
              {treeNodePath(active.id) && (
                <Link className="open" href={treeNodePath(active.id)!}>{t('tree.open_page')}</Link>
              )}
            </>
          )}
        </div>
      </div>

      <ol className="branch-list">
        {children.map((c, i) => {
          const href = treeNodePath(c.id);
          const interactive = Boolean(href);
          return (
            <li key={c.id}>
              {interactive ? (
                <Link className="branch-card is-link" href={href!}>
                  <span className="ord">{String(i + 1).padStart(2, '0')}</span>
                  <span className="de deva-only">{c.deva}</span>
                  <span className="en">{c.label}</span>
                  <p>{c.gloss}</p>
                  <span className="cta">{t('tree.open_page')}</span>
                </Link>
              ) : (
                <div className="branch-card">
                  <span className="ord">{String(i + 1).padStart(2, '0')}</span>
                  <span className="de deva-only">{c.deva}</span>
                  <span className="en">{c.label}</span>
                  <p>{c.gloss}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
