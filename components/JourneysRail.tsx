'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { JOURNEYS as JOURNEYS_EN, COMPLETE_PATH_ID } from '@/lib/journeys-data';
import { JOURNEYS as JOURNEYS_MR } from '@/lib/journeys-data_mr';
import { useLanguage } from '@/lib/LanguageContext';
import { journeyStats } from '@/lib/journey-progress';
import { MiniRoute } from './RouteGlance';

// One unified picker: the Complete Path (read everything, in order) featured
// first, then the themed journeys as alternatives — a single decision, not
// two competing systems.
export default function JourneysRail() {
  const { lang, t } = useLanguage();
  const ALL = lang === 'mr' ? JOURNEYS_MR : JOURNEYS_EN;
  const spine = ALL.find((j) => j.id === COMPLETE_PATH_ID);
  const JOURNEYS = ALL.filter((j) => j.id !== COMPLETE_PATH_ID);

  // Progress reads localStorage — deferred to a post-mount effect so the
  // server-rendered and first client render agree (no hydration mismatch).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const spineStats = spine && mounted ? journeyStats(spine) : null;
  const resumeIndex = spineStats && spineStats.isStarted && !spineStats.isComplete ? spineStats.nextIndex : 0;
  const spineCta = spine && (!spineStats || !spineStats.isStarted || spineStats.isComplete)
    ? t('spine.begin')
    : t('spine.continue').replace('{n}', String(resumeIndex + 1));

  return (
    <section id="journeys" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('jrn.eyebrow')}</div>
            <h2>{t('jrn.title')}</h2>
            <p className="jrn-lede">{t('jrn.lede')}</p>
          </div>
        </div>

        {spine && (
          <div
            className="reading-spine-panel"
            style={{ '--accent': `var(--${spine.accent})` } as React.CSSProperties}
          >
            <CornerOrn className="tl" />
            <CornerOrn className="tr" />
            <CornerOrn className="bl" />
            <CornerOrn className="br" />
            <div className="eyebrow"><Glyph /> {t('spine.eyebrow')}</div>
            <h3 className="reading-spine-title">{spine.title}</h3>
            <p className="reading-spine-lede">{spine.tagline}</p>
            {spineStats && spineStats.isStarted && (
              <div className="reading-spine-progress">
                <span className="jrn-progress" aria-hidden>
                  <span className="jrn-progress-fill" style={{ width: `${spineStats.percent}%` }} />
                </span>
                <span className="reading-spine-count">
                  {t('spine.walked')
                    .replace('{n}', String(spineStats.visitedCount))
                    .replace('{total}', String(spineStats.total))}
                </span>
              </div>
            )}
            <div className="reading-spine-actions">
              <Link
                className="reading-spine-begin"
                href={`${spine.steps[resumeIndex].path}?j=${spine.id}&s=${resumeIndex}`}
              >
                {spineCta} →
              </Link>
              <Link className="reading-spine-map" href={`/journeys/${spine.id}/`}>
                {t('spine.see_all')}
              </Link>
            </div>
          </div>
        )}

        <div className="jrn-themed-label">
          <span className="jrn-themed-tag">{t('jrn.themed_heading')}</span>
          <span className="meta">{t('jrn.meta').replace('{count}', String(JOURNEYS.length))}</span>
        </div>

        <div className="jrn-cards">
          {JOURNEYS.map((j) => {
            const stats = mounted ? journeyStats(j) : null;
            const totalMinutes = j.steps.reduce((sum, s) => sum + s.minutes, 0);
            const cta = !stats || !stats.isStarted
              ? t('jrn.begin')
              : stats.isComplete
                ? t('jrn.complete_badge')
                : t('jrn.continue').replace('{n}', String(stats.nextIndex + 1));

            const resume = stats && stats.isStarted && !stats.isComplete ? stats.nextIndex : 0;
            const beginHref = stats?.isComplete ? `/journeys/${j.id}/` : `${j.steps[resume].path}?j=${j.id}&s=${resume}`;

            return (
              <article
                key={j.id}
                className="jrn-card"
                style={{ '--accent': `var(--${j.accent})` } as React.CSSProperties}
              >
                {j.deva !== j.title && <span className="deva-only jrn-card-deva">{j.deva}</span>}
                <h3>{j.title}</h3>
                <p>{j.tagline}</p>
                <div className="jrn-card-meta">
                  {t('jrn.steps_min')
                    .replace('{steps}', String(j.steps.length))
                    .replace('{minutes}', String(totalMinutes))}
                </div>
                <MiniRoute journey={j} />
                {stats && stats.isStarted && (
                  <div className="jrn-progress" aria-hidden>
                    <span className="jrn-progress-fill" style={{ width: `${stats.percent}%` }} />
                  </div>
                )}
                <div className="jrn-card-actions">
                  <Link className="jrn-card-begin" href={beginHref}>{cta}</Link>
                  <Link className="reading-spine-map" href={`/journeys/${j.id}/`}>{t('spine.see_all')}</Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
