'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Timeline,
  SeerDetail,
  DetailModal,
  LaneFit,
  fmtSpan,
  resolveSeers,
  useExplorerNav,
  yearLabel,
  type TLLane,
  type TLPick,
} from './explorer-shared';
import { SECTION_DETAILS as DETAILS_EN, type SectionItem } from '@/lib/section-data';
import { SECTION_DETAILS as DETAILS_MR } from '@/lib/section-data_mr';
import { GENERIC_EXPLORERS, type GenericGroup } from '@/lib/generic-explorer-data';
import { sectionPath } from '@/lib/routes';
import { SECTIONS as SECTIONS_EN } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';

type Sel = { kind: 'item'; id: string } | { kind: 'seer'; id: string } | null;

// Earlier items get a deeper tint so a lane reads as a sequence.
function shadeFor(a: number, lo: number, hi: number): number {
  const k = hi === lo ? 0 : (a - lo) / (hi - lo);
  return Math.round(64 - k * 34);
}

export default function GenericExplorer({ sectionId }: { sectionId: string }) {
  const { lang, t } = useLanguage();
  const mr = lang === 'mr';
  const cfg = GENERIC_EXPLORERS[sectionId];
  const detail = (mr ? DETAILS_MR : DETAILS_EN)[sectionId];
  const section = SECTIONS_EN.find((s) => s.id === sectionId);
  const groups = cfg.groups;
  const multi = groups.length > 1;
  const timeline = cfg.mode === 'timeline';

  const items = useMemo(() => {
    const m = new Map<string, SectionItem>();
    detail?.items?.forEach((i) => m.set(i.id, i));
    return m;
  }, [detail]);

  const [sels, setSels] = useState<Record<string, Sel>>({});
  const { active, pinned, hdrH, panelRef, cardRefs, jump } = useExplorerNav(groups[0].id);

  const groupName = useCallback(
    (g: GenericGroup) => (g.name ? (mr ? g.name.mr : g.name.en) : detail?.title ?? sectionId),
    [mr, detail, sectionId],
  );

  const lanes = useMemo<TLLane[]>(() => {
    if (!timeline) return [];
    return groups.map((g) => {
      const dated = g.items.filter((i) => i.a !== undefined);
      return {
        id: g.id,
        accent: g.accent,
        name: groupName(g),
        deva: g.name ? '' : detail?.deva ?? '',
        bars: dated.map((i) => ({
          id: i.id,
          a: i.a!,
          b: i.b ?? i.a! + 20,
          label: items.get(i.id)?.title ?? i.id,
          shade: shadeFor(i.a!, cfg.range![0], cfg.range![1]),
        })),
        seers: resolveSeers(g.seers ?? [], mr, {}),
      };
    });
  }, [timeline, groups, groupName, detail, items, mr, cfg.range]);

  const pick = useCallback((id: string, p: TLPick) => {
    setSels((prev) => ({ ...prev, [id]: p ? (p.kind === 'bar' ? { kind: 'item', id: p.id } : { kind: 'seer', id: p.id }) : null }));
    if (multi) jump(id);
  }, [jump, multi]);

  if (!detail || !section) return null;

  const base = sectionPath(section);
  const tlLabel = t('ge.timeline_aria');
  const activeLane = lanes.find((l) => l.id === active) ?? lanes[0];
  const common = { range: cfg.range ?? [0, 1], ticks: cfg.ticks ?? [], mr, label: tlLabel, onPick: pick };

  return (
    <section className="frame vx-frame" style={{ '--vx-top': `${hdrH}px` } as React.CSSProperties}>
      <div className="shell">
        <p className="vx-lede">{t(timeline ? 'ge.intro_timeline' : 'ge.intro_cards')}</p>

        {timeline && (
          <div ref={panelRef} className="vx-panel">
            <div className="vx-panel-desktop">
              <Timeline {...common} lanes={lanes} W={1000} gutter={multi ? 150 : 10} activeId={active} names={multi} />
            </div>
            <div className="vx-panel-mobile">
              {multi ? (
                <div className="vx-chips" role="tablist" aria-label={t('vx.choose')}>
                  {groups.map((g) => (
                    <button key={g.id} type="button" role="tab" aria-selected={g.id === active}
                      className="vx-pill" style={{ '--vc': g.accent } as React.CSSProperties}
                      onClick={() => jump(g.id)}>
                      <span className="vx-dot" />{groupName(g)}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="vx-lane-solo"><Timeline {...common} lanes={lanes} W={640} gutter={8} activeId={active} names={false} /></div>
              )}
            </div>
            <div className="vx-legend">
              <span><i className="vx-lg-bar" />{t('ge.legend')}</span>
              {lanes.some((l) => l.seers.length > 0) && <span><i className="vx-lg-seer" />{t('ge.people')}</span>}
              <span className="vx-approx">{t('vx.approx')}</span>
            </div>
          </div>
        )}

        {multi && (
          <div className={`vx-pinned${pinned ? ' is-on' : ''}`} style={{ top: hdrH }} aria-hidden={!pinned}>
            <div className="vx-chips">
              {groups.map((g) => (
                <button key={g.id} type="button" tabIndex={pinned ? 0 : -1}
                  className={`vx-pill${g.id === active ? ' is-active' : ''}`}
                  style={{ '--vc': g.accent } as React.CSSProperties}
                  onClick={() => jump(g.id)}>
                  <span className="vx-dot" />{groupName(g)}
                </button>
              ))}
            </div>
            {timeline && activeLane && (
              <div className="vx-pinned-lane">
                <Timeline {...common} lanes={[activeLane]} W={1000} gutter={10} activeId={active} names={false} />
              </div>
            )}
          </div>
        )}

        <div className="vx-cards">
          {groups.map((g, gi) => {
            const sel = sels[g.id] ?? null;
            const seers = resolveSeers(g.seers ?? [], mr, {});
            const selItem = sel?.kind === 'item' ? items.get(sel.id) : null;
            const selSeer = sel?.kind === 'seer' ? seers.find((s) => s.id === sel.id) : null;
            const ideas = Array.from(new Set(g.items.flatMap((i) => items.get(i.id)?.facets ?? []))).slice(0, 8);
            return (
              <article
                key={g.id}
                id={`vx-${g.id}`}
                data-id={g.id}
                ref={(el) => { cardRefs.current[g.id] = el; }}
                className={`vx-card${multi && g.id === active ? ' is-active' : ''}`}
                style={{ '--vc': g.accent } as React.CSSProperties}
              >
                {multi && (
                  <>
                    <header className="vx-card-hd">
                      <span className="vx-medal vx-medal-lg">{g.seal}</span>
                      <div>
                        <h2>{groupName(g)}</h2>
                        <div className="vx-span">{t('ge.count').replace('{n}', String(g.items.length))}</div>
                      </div>
                    </header>
                    {g.blurb && <p className="vx-blurb">{mr ? g.blurb.mr : g.blurb.en}</p>}
                  </>
                )}

                {timeline && multi && (
                  <div className="vx-lane-m">
                    <LaneFit>{(W) => <Timeline {...common} lanes={[lanes[gi]]} W={W} gutter={8} activeId={g.id} names={false} />}</LaneFit>
                  </div>
                )}

                <h3 className="vx-sub" style={multi ? undefined : { marginTop: 0 }}>{t('ge.items')}</h3>
                <ul className="up-list">
                  {g.items.map((gi2) => {
                    const it = items.get(gi2.id);
                    if (!it) return null;
                    const open = sel?.kind === 'item' && sel.id === gi2.id;
                    const date = gi2.a !== undefined ? fmtSpan(gi2.a, gi2.b ?? gi2.a, mr) : it.meta[0];
                    return (
                      <li key={gi2.id}>
                        <button type="button" className={`up-item${open ? ' is-open' : ''}`}
                          onClick={() => setSels((p) => ({ ...p, [g.id]: { kind: 'item', id: gi2.id } }))}>
                          <span className="up-item-name">{it.title} {!mr && it.deva !== it.title && <span className="deva-only">{it.deva}</span>}</span>
                          <span className="up-item-date">{date}</span>
                          <span className="up-item-focus">{it.epithet}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {seers.length > 0 && (
                  <>
                    <h3 className="vx-sub">{t('ge.people')}</h3>
                    <ul className="vx-seers">
                      {seers.map((s) => (
                        <li key={s.id}>
                          <button type="button" className="vx-seer" onClick={() => setSels((p) => ({ ...p, [g.id]: { kind: 'seer', id: s.id } }))}>
                            <span className="vx-medal">{s.seal}</span>
                            <span className="vx-seer-name">{s.name}</span>
                            <span className="vx-seer-date">{yearLabel(s.year, mr)}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {ideas.length > 0 && (
                  <>
                    <h3 className="vx-sub">{t('ge.topics')}</h3>
                    <ul className="vx-ideas">{ideas.map((x) => <li key={x}>{x}</li>)}</ul>
                  </>
                )}

                {selItem && (
                  <DetailModal onClose={() => setSels((p) => ({ ...p, [g.id]: null }))}>
                    <div className="eyebrow">{selItem.meta.slice(0, 2).join(' · ')}</div>
                    <h3>{selItem.title} {!mr && selItem.deva !== selItem.title && <span className="deva-only">{selItem.deva}</span>}</h3>
                    <p>{selItem.summary}</p>
                    {selItem.opening && (
                      <blockquote className="ge-quote">
                        <span className="deva-only">{selItem.opening.deva}</span>
                        <span>{selItem.opening.trans}</span>
                        <cite>{selItem.opening.cite}</cite>
                      </blockquote>
                    )}
                    {selItem.facets && <ul className="tl-tags">{selItem.facets.map((f) => <li key={f}>{f}</li>)}</ul>}
                    <Link className="chip" href={`${base}${selItem.id}/`}>{t('up.open')} →</Link>
                  </DetailModal>
                )}
                {selSeer && <SeerDetail seer={selSeer} onClose={() => setSels((p) => ({ ...p, [g.id]: null }))} />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
