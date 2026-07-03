'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Glyph } from './Ornaments';
import { JOURNEYS as JOURNEYS_EN } from '@/lib/journeys-data';
import { JOURNEYS as JOURNEYS_MR } from '@/lib/journeys-data_mr';
import { useLanguage } from '@/lib/LanguageContext';
import { isStepVisited, journeyStats } from '@/lib/journey-progress';

export default function JourneyDetail({ id }: { id: string }) {
  const { lang, t } = useLanguage();
  const JOURNEYS = lang === 'mr' ? JOURNEYS_MR : JOURNEYS_EN;
  const journey = JOURNEYS.find((j) => j.id === id) || JOURNEYS_EN.find((j) => j.id === id);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!journey) {
    return (
      <section className="sec-hero">
        <div className="shell"><h2>Journey not found</h2></div>
      </section>
    );
  }

  const totalMinutes = journey.steps.reduce((sum, s) => sum + s.minutes, 0);
  const stats = mounted ? journeyStats(journey) : null;

  const otherJourneys = JOURNEYS
    .filter((j) => j.id !== journey.id)
    .sort((a, b) => {
      const aStarted = mounted ? journeyStats(a).isStarted : false;
      const bStarted = mounted ? journeyStats(b).isStarted : false;
      return Number(aStarted) - Number(bStarted);
    })
    .slice(0, 2);

  return (
    <>
      <section className="frame" style={{ '--accent': `var(--${journey.accent})` } as React.CSSProperties}>
        <div className="shell">
          <div className="sec-crumb">
            <Link href="/">{t('detail.library')}</Link>
            <span className="sep">→</span>
            <Link href="/journeys/">{t('jrn.crumb')}</Link>
            <span className="sep">→</span>
            <span className="cur">{journey.title}</span>
          </div>

          <div style={{ marginTop: '1.5rem', maxWidth: '64ch' }}>
            {journey.deva !== journey.title && (
              <span className="deva-only" style={{ fontSize: '2rem', color: 'var(--accent, var(--maroon))', display: 'block' }}>
                {journey.deva}
              </span>
            )}
            <h1 style={{ marginTop: journey.deva !== journey.title ? '0.2rem' : 0 }}>{journey.title}</h1>
            <p className="lede" style={{ marginTop: '1rem' }}>{journey.tagline}</p>
            <p style={{ color: 'var(--ink-faint)', fontStyle: 'italic', marginTop: '0.5rem' }}>{journey.audience}</p>
            <div className="jrn-card-meta" style={{ marginTop: '1rem' }}>
              {t('jrn.steps_min')
                .replace('{steps}', String(journey.steps.length))
                .replace('{minutes}', String(totalMinutes))}
            </div>
            {stats && stats.isStarted && (
              <div className="jrn-progress" style={{ marginTop: '1rem', maxWidth: '20rem' }} aria-hidden>
                <span className="jrn-progress-fill" style={{ width: `${stats.percent}%` }} />
              </div>
            )}
          </div>

          <ol className="jrn-stepper" style={{ marginTop: '2.5rem' }}>
            {journey.steps.map((step, i) => {
              const visited = mounted && isStepVisited(journey.id, step.path);
              return (
                <li key={step.path} className={`jrn-step${visited ? ' is-visited' : ''}`}>
                  <Link href={`${step.path}?j=${journey.id}&s=${i}`} className="jrn-step-link">
                    <span className="jrn-step-node">{visited ? '✓' : i + 1}</span>
                    <span className="jrn-step-body">
                      <span className="jrn-step-title">{step.title}</span>
                      <span className="jrn-step-why">{step.why}</span>
                      <span className="jrn-step-min">{t('jrn.min_short').replace('{n}', String(step.minutes))}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>

          {stats && stats.isComplete && (
            <div className="jrn-done">
              <Glyph />
              <p>{t('jrn.ribbon.done_title').replace('{title}', journey.title)}</p>
              {otherJourneys.length > 0 && (
                <p>
                  {t('jrn.ribbon.done_more')}{' '}
                  {otherJourneys.map((oj, i) => (
                    <span key={oj.id}>
                      <Link href={`/journeys/${oj.id}/`}>{oj.title}</Link>
                      {i < otherJourneys.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
