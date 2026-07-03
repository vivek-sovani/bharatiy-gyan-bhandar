'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Glyph } from './Ornaments';
import { JOURNEYS as JOURNEYS_EN } from '@/lib/journeys-data';
import { JOURNEYS as JOURNEYS_MR } from '@/lib/journeys-data_mr';
import { useLanguage } from '@/lib/LanguageContext';
import { journeyStats } from '@/lib/journey-progress';

export default function JourneysListView() {
  const { lang, t } = useLanguage();
  const JOURNEYS = lang === 'mr' ? JOURNEYS_MR : JOURNEYS_EN;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="frame">
      <div className="shell">
        <div className="sec-crumb">
          <Link href="/">{t('detail.library')}</Link>
          <span className="sep">→</span>
          <span className="cur">{t('jrn.crumb')}</span>
        </div>

        <div className="frame-hd" style={{ marginTop: '1.5rem' }}>
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('jrn.list.eyebrow')}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', marginTop: '0.6rem' }}>
              {t('jrn.list.title')}
            </h1>
          </div>
          <div className="meta">{t('jrn.meta').replace('{count}', String(JOURNEYS.length))}</div>
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

            return (
              <Link
                key={j.id}
                className="jrn-card"
                href={`/journeys/${j.id}/`}
                style={{ '--accent': `var(--${j.accent})` } as React.CSSProperties}
              >
                {j.deva !== j.title && <span className="deva-only jrn-card-deva">{j.deva}</span>}
                <h3>{j.title}</h3>
                <p>{j.tagline}</p>
                <div className="jrn-card-audience">{j.audience}</div>
                <div className="jrn-card-meta">
                  {t('jrn.steps_min')
                    .replace('{steps}', String(j.steps.length))
                    .replace('{minutes}', String(totalMinutes))}
                </div>
                {stats && stats.isStarted && (
                  <div className="jrn-progress" aria-hidden>
                    <span className="jrn-progress-fill" style={{ width: `${stats.percent}%` }} />
                  </div>
                )}
                <div className="jrn-card-cta">{cta}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
