'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { JOURNEYS as JOURNEYS_EN } from '@/lib/journeys-data';
import { JOURNEYS as JOURNEYS_MR } from '@/lib/journeys-data_mr';
import { useLanguage } from '@/lib/LanguageContext';
import { markVisited } from '@/lib/journey-progress';

// The reading companion for any page opened via a Journey (?j=<id>&s=<step>).
// One integration point (mounted once in the root layout) covers every
// detail page — generic and dedicated alike — with no route changes.
function JourneyRibbonInner() {
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [dismissed, setDismissed] = useState(false);

  const journeyId = searchParams.get('j');
  const stepIndex = Number(searchParams.get('s'));

  useEffect(() => {
    setDismissed(false);
  }, [pathname, journeyId, stepIndex]);

  const JOURNEYS = lang === 'mr' ? JOURNEYS_MR : JOURNEYS_EN;
  const journey = journeyId ? JOURNEYS.find((j) => j.id === journeyId) : undefined;
  const step = journey && Number.isInteger(stepIndex) ? journey.steps[stepIndex] : undefined;

  useEffect(() => {
    if (journey && step) markVisited(journey.id, step.path);
  }, [journey, step]);

  if (!journey || !step || dismissed) return null;

  const total = journey.steps.length;
  const isLast = stepIndex === total - 1;
  const nextStep = isLast ? undefined : journey.steps[stepIndex + 1];

  return (
    <div className="jrn-ribbon" style={{ '--accent': `var(--${journey.accent})` } as React.CSSProperties}>
      <div className="shell jrn-ribbon-inner">
        <div className="jrn-ribbon-info">
          <span className="jrn-ribbon-title">{journey.title}</span>
          <span className="jrn-ribbon-step">{t('jrn.step_of').replace('{n}', String(stepIndex + 1)).replace('{total}', String(total))}</span>
          <span className="jrn-ribbon-track" aria-hidden>
            <span className="jrn-ribbon-fill" style={{ width: `${((stepIndex + 1) / total) * 100}%` }} />
          </span>
        </div>
        <div className="jrn-ribbon-actions">
          <Link href={`/journeys/${journey.id}/`} className="jrn-ribbon-trail">
            {t('jrn.ribbon.trail')}
          </Link>
          {nextStep && (
            <Link
              href={`${nextStep.path}?j=${journey.id}&s=${stepIndex + 1}`}
              className="jrn-ribbon-next"
            >
              {t('jrn.ribbon.next')}: {nextStep.title} →
            </Link>
          )}
          <button
            type="button"
            className="jrn-ribbon-dismiss"
            aria-label={t('jrn.ribbon.dismiss')}
            onClick={() => setDismissed(true)}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default function JourneyRibbon() {
  return (
    <Suspense fallback={null}>
      <JourneyRibbonInner />
    </Suspense>
  );
}
