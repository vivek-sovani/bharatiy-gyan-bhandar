'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import { Glyph } from './Ornaments';
import {
  Timeline as SharedTimeline,
  SeerDetail,
  fmtSpan,
  num,
  resolveSeers,
  useExplorerNav,
  yearLabel,
  type TLLane,
} from './explorer-shared';
import { useLanguage } from '@/lib/LanguageContext';
import { SHAKHAS_DATA, BRAHMANAS_DATA, ARANYAKAS_DATA, UPANISHADS_DATA, type VedicText } from '@/lib/vedasData';
import {
  STRATUM_LABEL,
  STRATUM_LABEL_MR,
  VEDAS_EXPLORER_MR,
  SEERS_MR,
  TIMELINE_RANGE,
  VEDAS_EXPLORER,
  type ExplorerItem,
  type StratumKey,
} from '@/lib/vedic-timeline-data';

const STRATA_ORDER: StratumKey[] = ['samhita', 'brahmana', 'aranyaka', 'upanishad'];
const TEXTS: Record<StratumKey, Record<string, VedicText[]>> = {
  samhita: SHAKHAS_DATA,
  brahmana: BRAHMANAS_DATA,
  aranyaka: ARANYAKAS_DATA,
  upanishad: UPANISHADS_DATA,
};
// Lighter bars for later strata so the lane reads as a progression.
const MIX: Record<StratumKey, number> = { samhita: 62, brahmana: 48, aranyaka: 36, upanishad: 26 };
const ROW: Record<StratumKey, number> = { samhita: 0, brahmana: 1, aranyaka: 0, upanishad: 1 };

type Sel =
  | { kind: 'stratum'; key: StratumKey }
  | { kind: 'text'; key: StratumKey; i: number }
  | { kind: 'seer'; id: string }
  | null;

function stratumLabel(k: StratumKey, mr: boolean) {
  return mr ? { ...STRATUM_LABEL[k], ...STRATUM_LABEL_MR[k], deva: '' } : STRATUM_LABEL[k];
}
function itemText(it: ExplorerItem, mr: boolean) {
  const m = mr ? VEDAS_EXPLORER_MR[it.id] : null;
  return { name: m?.name ?? it.name, deva: mr ? '' : it.deva, blurb: m?.blurb ?? it.blurb, ideas: m?.ideas ?? it.ideas };
}

const TICKS = [-1500, -1300, -1100, -900, -700, -500, -300];

function toLanes(items: ExplorerItem[], mr: boolean): TLLane[] {
  return items.map((it) => {
    const txt = itemText(it, mr);
    return {
      id: it.id,
      accent: it.accent,
      name: txt.name,
      deva: txt.deva,
      bars: it.strata.map((st) => ({
        id: st.key,
        a: st.a,
        b: st.b,
        label: stratumLabel(st.key, mr).en,
        shade: MIX[st.key],
        row: ROW[st.key],
      })),
      seers: resolveSeers(it.seers, mr, SEERS_MR),
    };
  });
}

function Timeline(props: {
  items: ExplorerItem[];
  W: number;
  gutter: number;
  activeId: string;
  names: boolean;
  mr: boolean;
  label: string;
  onPick: (id: string, sel: Sel) => void;
}) {
  const { items, onPick, mr, ...rest } = props;
  return (
    <SharedTimeline
      {...rest}
      mr={mr}
      lanes={toLanes(items, mr)}
      range={TIMELINE_RANGE}
      ticks={TICKS}
      onPick={(id, p) => onPick(id, p ? (p.kind === 'bar' ? { kind: 'stratum', key: p.id as StratumKey } : { kind: 'seer', id: p.id }) : null)}
    />
  );
}

function Detail({ item, sel, mr, onClose }: { item: ExplorerItem; sel: NonNullable<Sel>; mr: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const close = <button type="button" className="vx-detail-x" aria-label={t('vx.close')} onClick={onClose}>×</button>;
  if (sel.kind === 'stratum') {
    const st = item.strata.find((s) => s.key === sel.key)!;
    const L = stratumLabel(sel.key, mr);
    const texts = TEXTS[sel.key][item.id] ?? [];
    return (
      <div className="vx-detail">
        {close}
        <div className="eyebrow">{L.role} · {fmtSpan(st.a, st.b, mr)}</div>
        <h3>{L.en} {!mr && <span className="deva-only">{L.deva}</span>}</h3>
        <p>{texts.length ? texts.map((x) => (mr ? x.deva : x.name)).join(' · ') : t('vx.pending')}</p>
      </div>
    );
  }
  if (sel.kind === 'text') {
    const x = (TEXTS[sel.key][item.id] ?? [])[sel.i];
    if (!x) return null;
    return (
      <div className="vx-detail">
        {close}
        <div className="eyebrow">{stratumLabel(sel.key, mr).en} · {mr ? x.statusDeva : x.status}</div>
        <h3>{mr ? x.deva : x.name} {!mr && <span className="deva-only">{x.deva}</span>}</h3>
        <p>{mr ? x.descDeva || x.desc : x.desc}</p>
        <ul className="tl-tags">
          <li>{mr ? x.structureDeva : x.structure}</li>
          {(mr ? x.regionDeva : x.region) && <li>{mr ? x.regionDeva : x.region}</li>}
        </ul>
      </div>
    );
  }
  const s = resolveSeers(item.seers, mr, SEERS_MR).find((q) => q.id === sel.id);
  if (!s) return null;
  return <SeerDetail seer={s} onClose={onClose} />;
}

// embedded: rendered inside an existing section page that already has its own heading and hero.
export default function SectionExplorer({ embedded = false, onDeepDive }: { embedded?: boolean; onDeepDive?: (id: string) => void }) {
  const { lang, t } = useLanguage();
  const mr = lang === 'mr';
  const items = VEDAS_EXPLORER;
  const [sels, setSels] = useState<Record<string, Sel>>({});
  const { active, pinned, hdrH, panelRef, cardRefs, jump } = useExplorerNav(items[0].id);

  const pick = useCallback((id: string, sel: Sel) => {
    setSels((p) => ({ ...p, [id]: sel }));
    jump(id);
  }, [jump]);

  const activeItem = useMemo(() => items.find((i) => i.id === active)!, [items, active]);
  const tlLabel = t('vx.timeline_aria');

  const body = (
    <>
      <p className="vx-lede">{t('vx.intro')}</p>

      <div ref={panelRef} className="vx-panel">
        <div className="vx-panel-desktop">
          <Timeline items={items} W={1000} gutter={150} activeId={active} names mr={mr} label={tlLabel} onPick={pick} />
        </div>
        <div className="vx-panel-mobile">
          <div className="vx-chips" role="tablist" aria-label={t('vx.choose')}>
            {items.map((it) => (
              <button key={it.id} type="button" role="tab" aria-selected={it.id === active}
                className="vx-pill" style={{ '--vc': it.accent } as React.CSSProperties}
                onClick={() => jump(it.id)}>
                <span className="vx-dot" />{itemText(it, mr).name}
              </button>
            ))}
          </div>
        </div>
        <div className="vx-legend">
          <span><i className="vx-lg-bar" />{t('vx.legend_layers')}</span>
          <span><i className="vx-lg-seer" />{t('vx.seers')}</span>
          <span className="vx-approx">{t('vx.approx')}</span>
        </div>
      </div>

      <div className={`vx-pinned${pinned ? ' is-on' : ''}`} style={{ top: hdrH }} aria-hidden={!pinned}>
        <div className="vx-chips">
          {items.map((it) => (
            <button key={it.id} type="button" tabIndex={pinned ? 0 : -1}
              className={`vx-pill${it.id === active ? ' is-active' : ''}`}
              style={{ '--vc': it.accent } as React.CSSProperties}
              onClick={() => jump(it.id)}>
              <span className="vx-dot" />{itemText(it, mr).name}
            </button>
          ))}
        </div>
        <div className="vx-pinned-lane">
          <Timeline items={[activeItem]} W={1000} gutter={10} activeId={active} names={false} mr={mr} label={tlLabel} onPick={pick} />
        </div>
      </div>

      <div className="vx-cards">
        {items.map((it) => {
          const sel = sels[it.id] ?? null;
          const seers = resolveSeers(it.seers, mr, SEERS_MR);
          const txt = itemText(it, mr);
          return (
            <article
              key={it.id}
              id={`vx-${it.id}`}
              data-id={it.id}
              ref={(el) => { cardRefs.current[it.id] = el; }}
              className={`vx-card${it.id === active ? ' is-active' : ''}`}
              style={{ '--vc': it.accent } as React.CSSProperties}
            >
              <header className="vx-card-hd">
                <span className="vx-medal vx-medal-lg">{it.seal}</span>
                <div>
                  <h2>{txt.name} {!mr && <span className="deva-only">{txt.deva}</span>}</h2>
                  <div className="vx-span">{fmtSpan(it.span[0], it.span[1], mr)}</div>
                </div>
              </header>
              <p className="vx-blurb">{txt.blurb}</p>

              <div className="vx-lane-m">
                <Timeline items={[it]} W={640} gutter={8} activeId={it.id} names={false} mr={mr} label={tlLabel} onPick={pick} />
              </div>

              <h3 className="vx-sub">{t('vx.layers')}</h3>
              <ol className="vx-steps">
                {STRATA_ORDER.map((k, n) => {
                  const st = it.strata.find((s) => s.key === k);
                  if (!st) return null;
                  const texts = TEXTS[k][it.id] ?? [];
                  const open = sel && sel.kind === 'stratum' && sel.key === k;
                  const L = stratumLabel(k, mr);
                  return (
                    <li key={k} className={`vx-step${open ? ' is-open' : ''}`}>
                      <button type="button" className="vx-step-hd" onClick={() => setSels((p) => ({ ...p, [it.id]: { kind: 'stratum', key: k } }))}>
                        <span className="vx-step-n">{num(n + 1, mr)}</span>
                        <span className="vx-step-name">{L.en}</span>
                        <span className="vx-step-role">{L.role}</span>
                        <span className="vx-step-date">{fmtSpan(st.a, st.b, mr)}</span>
                      </button>
                      <ul className="vx-texts">
                        {texts.map((x, i) => (
                          <li key={x.name}>
                            <button type="button" className="vx-text"
                              onClick={() => setSels((p) => ({ ...p, [it.id]: { kind: 'text', key: k, i } }))}>
                              {mr ? x.deva : x.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ol>

              <h3 className="vx-sub">{t('vx.seers')}</h3>
              <ul className="vx-seers">
                {seers.map((s) => (
                  <li key={s.id}>
                    <button type="button" className="vx-seer" onClick={() => setSels((p) => ({ ...p, [it.id]: { kind: 'seer', id: s.id } }))}>
                      <span className="vx-medal">{s.seal}</span>
                      <span className="vx-seer-name">{s.name}</span>
                      <span className="vx-seer-date">{yearLabel(s.year, mr)}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="vx-sub">{t('vx.ideas')}</h3>
              <ul className="vx-ideas">
                {txt.ideas.map((x) => <li key={x}>{x}</li>)}
              </ul>

              {sel && <Detail item={it} sel={sel} mr={mr} onClose={() => setSels((p) => ({ ...p, [it.id]: null }))} />}

              {onDeepDive && (
                <button type="button" className="vx-deep" onClick={() => onDeepDive(it.id)}>
                  {t('vx.deep')} ↓
                </button>
              )}
            </article>
          );
        })}
      </div>
    </>
  );

  return (
    <section className="frame vx-frame" style={{ '--vx-top': `${hdrH}px` } as React.CSSProperties}>
      <div className="shell">
        {!embedded && (
          <div className="frame-hd" style={{ marginTop: '1.5rem' }}>
            <div className="title-block">
              <div className="eyebrow"><Glyph /> {t('vx.intro_eyebrow')}</div>
            </div>
          </div>
        )}
        {body}
      </div>
    </section>
  );
}
