'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Timeline,
  SeerDetail,
  fmtSpan,
  num,
  resolveSeers,
  useExplorerNav,
  yearLabel,
  type TLLane,
  type TLPick,
} from './explorer-shared';
import { UPANISHADS_DETAILS as DETAILS_EN } from '@/lib/upanishads-data';
import { UPANISHADS_DETAILS as DETAILS_MR } from '@/lib/upanishads-data_mr';
import {
  UPANISHAD_GROUPS,
  UPANISHAD_RANGE,
  UPANISHAD_SEERS_MR,
  UPANISHAD_TICKS,
  type UpanishadGroup,
} from '@/lib/upanishad-explorer-data';
import { useLanguage } from '@/lib/LanguageContext';

type Sel = { kind: 'text'; id: string } | { kind: 'seer'; id: string } | null;

// Older texts get a deeper tint so each lane reads as a sequence.
function shadeFor(a: number): number {
  return a <= -700 ? 62 : a <= -500 ? 48 : a <= -300 ? 38 : 28;
}

export default function UpanishadExplorer() {
  const { lang, t } = useLanguage();
  const mr = lang === 'mr';
  const DETAILS = mr ? DETAILS_MR : DETAILS_EN;
  const groups = UPANISHAD_GROUPS;
  const [sels, setSels] = useState<Record<string, Sel>>({});
  const { active, pinned, hdrH, panelRef, cardRefs, jump } = useExplorerNav(groups[0].id);

  const lanes = useMemo<TLLane[]>(
    () =>
      groups.map((g) => ({
        id: g.id,
        accent: g.accent,
        name: mr ? g.name.mr : g.name.en,
        deva: g.deva,
        bars: g.texts.map((x) => ({
          id: x.id,
          a: x.a,
          b: x.b,
          label: DETAILS[x.id]?.title ?? x.id,
          shade: shadeFor(x.a),
        })),
        seers: resolveSeers(g.seers, mr, UPANISHAD_SEERS_MR),
      })),
    [groups, mr, DETAILS],
  );

  const pick = useCallback((id: string, p: TLPick) => {
    setSels((prev) => ({ ...prev, [id]: p ? (p.kind === 'bar' ? { kind: 'text', id: p.id } : { kind: 'seer', id: p.id }) : null }));
    jump(id);
  }, [jump]);

  const activeLane = lanes.find((l) => l.id === active)!;
  const tlLabel = t('up.timeline_aria');
  const nameOf = (g: UpanishadGroup) => (mr ? g.name.mr : g.name.en);
  const common = { range: UPANISHAD_RANGE, ticks: UPANISHAD_TICKS, mr, label: tlLabel, onPick: pick };

  return (
    <section className="frame vx-frame" style={{ '--vx-top': `${hdrH}px` } as React.CSSProperties}>
      <div className="shell">
        <p className="vx-lede">{t('up.intro')}</p>

        <div ref={panelRef} className="vx-panel">
          <div className="vx-panel-desktop">
            <Timeline {...common} lanes={lanes} W={1000} gutter={150} activeId={active} names />
          </div>
          <div className="vx-panel-mobile">
            <div className="vx-chips" role="tablist" aria-label={t('vx.choose')}>
              {groups.map((g) => (
                <button key={g.id} type="button" role="tab" aria-selected={g.id === active}
                  className="vx-pill" style={{ '--vc': g.accent } as React.CSSProperties}
                  onClick={() => jump(g.id)}>
                  <span className="vx-dot" />{nameOf(g)}
                </button>
              ))}
            </div>
          </div>
          <div className="vx-legend">
            <span><i className="vx-lg-bar" />{t('up.legend')}</span>
            <span><i className="vx-lg-seer" />{t('vx.seers')}</span>
            <span className="vx-approx">{t('vx.approx')}</span>
          </div>
        </div>

        <div className={`vx-pinned${pinned ? ' is-on' : ''}`} style={{ top: hdrH }} aria-hidden={!pinned}>
          <div className="vx-chips">
            {groups.map((g) => (
              <button key={g.id} type="button" tabIndex={pinned ? 0 : -1}
                className={`vx-pill${g.id === active ? ' is-active' : ''}`}
                style={{ '--vc': g.accent } as React.CSSProperties}
                onClick={() => jump(g.id)}>
                <span className="vx-dot" />{nameOf(g)}
              </button>
            ))}
          </div>
          <div className="vx-pinned-lane">
            <Timeline {...common} lanes={[activeLane]} W={1000} gutter={10} activeId={active} names={false} />
          </div>
        </div>

        <div className="vx-cards">
          {groups.map((g, gi) => {
            const sel = sels[g.id] ?? null;
            const seers = resolveSeers(g.seers, mr, UPANISHAD_SEERS_MR);
            const selText = sel && sel.kind === 'text' ? DETAILS[sel.id] : null;
            const selSeer = sel && sel.kind === 'seer' ? seers.find((s) => s.id === sel.id) : null;
            return (
              <article
                key={g.id}
                id={`vx-${g.id}`}
                data-id={g.id}
                ref={(el) => { cardRefs.current[g.id] = el; }}
                className={`vx-card${g.id === active ? ' is-active' : ''}`}
                style={{ '--vc': g.accent } as React.CSSProperties}
              >
                <header className="vx-card-hd">
                  <span className="vx-medal vx-medal-lg">{g.seal}</span>
                  <div>
                    <h2>{nameOf(g)} {!mr && <span className="deva-only">{g.deva}</span>}</h2>
                    <div className="vx-span">{g.texts.length === 1 ? t('up.count_one') : t('up.count').replace('{n}', num(g.texts.length, mr))}</div>
                  </div>
                </header>
                <p className="vx-blurb">{mr ? g.blurb.mr : g.blurb.en}</p>

                <div className="vx-lane-m">
                  <Timeline {...common} lanes={[lanes[gi]]} W={640} gutter={8} activeId={g.id} names={false} />
                </div>

                <h3 className="vx-sub">{t('up.texts')}</h3>
                <ul className="up-list">
                  {g.texts.map((x) => {
                    const d = DETAILS[x.id];
                    if (!d) return null;
                    const open = sel?.kind === 'text' && sel.id === x.id;
                    return (
                      <li key={x.id}>
                        <button type="button" className={`up-item${open ? ' is-open' : ''}`}
                          onClick={() => setSels((p) => ({ ...p, [g.id]: { kind: 'text', id: x.id } }))}>
                          <span className="up-item-name">{d.title} {!mr && <span className="deva-only">{d.deva}</span>}</span>
                          <span className="up-item-date">{fmtSpan(x.a, x.b, mr)}</span>
                          <span className="up-item-focus">{d.focus}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <h3 className="vx-sub">{t('vx.seers')}</h3>
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

                <h3 className="vx-sub">{t('vx.ideas')}</h3>
                <ul className="vx-ideas">
                  {(mr ? g.ideas.mr : g.ideas.en).map((x) => <li key={x}>{x}</li>)}
                </ul>

                {selText && (
                  <div className="vx-detail">
                    <button type="button" className="vx-detail-x" aria-label={t('vx.close')} onClick={() => setSels((p) => ({ ...p, [g.id]: null }))}>×</button>
                    <div className="eyebrow">{selText.vedaAssociation} · {selText.versesCount}</div>
                    <h3>{selText.title} {!mr && <span className="deva-only">{selText.deva}</span>}</h3>
                    <p>{selText.explanation[0]}</p>
                    <ul className="tl-tags">{selText.coreIdeas.map((c) => <li key={c.name}>{c.name}</li>)}</ul>
                    <Link className="chip" href={`/upanishads/${selText.id}/`}>{t('up.open')} →</Link>
                  </div>
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
