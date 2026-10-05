'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ERAS, eraOfPath } from '@/lib/eras';
import type { Journey } from '@/lib/journeys-data';
import { useLanguage } from '@/lib/LanguageContext';

const fill = (s: string, vars: Record<string, string | number>) =>
  Object.entries(vars).reduce((acc, [k, v]) => acc.replace(`{${k}}`, String(v)), s);

const DEVA_DIGITS = '०१२३४५६७८९';
const num = (n: number, mr: boolean) => (mr ? String(n).replace(/\d/g, (d) => DEVA_DIGITS[+d]) : String(n));

function duration(total: number, mr: boolean): string {
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (!h) return mr ? `${num(m, true)} मिनिटे` : `${m} min`;
  return mr ? `${num(h, true)} तास ${num(m, true)} मिनिटे` : `${h} h ${m} min`;
}

// A small picture of where a path travels, shown before the reader commits to it.
export default function RouteGlance({ journey, startIndex, started }: { journey: Journey; startIndex: number; started: boolean }) {
  const { lang, t } = useLanguage();
  const mr = lang === 'mr';
  const [sel, setSel] = useState<number | null>(null);

  const steps = useMemo(() => journey.steps.map((s, i) => ({ ...s, i, era: ERAS.find((e) => e.id === eraOfPath(s.path))! })), [journey]);
  const counts = useMemo(() => ERAS.map((e) => ({ era: e, n: steps.filter((s) => s.era.id === e.id).length })).filter((x) => x.n > 0), [steps]);
  const total = steps.reduce((a, s) => a + s.minutes, 0);
  const mins = steps.map((s) => s.minutes);
  const first = steps[0];
  const last = steps[steps.length - 1];
  const shown = sel !== null ? steps[sel] : null;

  return (
    <div className="rg" style={{ '--accent': `var(--${journey.accent})` } as React.CSSProperties}>
      <div className="rg-hd">
        <span className="eyebrow">{t('rg.title')}</span>
        <span className="rg-facts">
          {fill(t('rg.facts'), { n: num(steps.length, mr), time: duration(total, mr), a: num(Math.min(...mins), mr), b: num(Math.max(...mins), mr) })}
        </span>
      </div>

      <ul className="rg-eras" aria-label={t('rg.eras')}>
        {counts.map(({ era, n }) => (
          <li key={era.id} style={{ '--c': era.color } as React.CSSProperties}>
            <span className="rg-era-dot" />
            <span className="rg-era-name">{mr ? era.mr : era.en}</span>
            <span className="rg-era-n">{num(n, mr)}</span>
          </li>
        ))}
      </ul>

      <ol className="rg-dots" aria-label={t('rg.route')}>
        {steps.map((s) => (
          <li key={s.path}>
            <button
              type="button"
              className={`rg-dot${sel === s.i ? ' is-sel' : ''}`}
              style={{ '--c': s.era.color } as React.CSSProperties}
              aria-label={`${s.i + 1}. ${s.title}`}
              aria-pressed={sel === s.i}
              onClick={() => setSel(s.i)}
              onFocus={() => setSel(s.i)}
              onPointerEnter={(e) => { if (e.pointerType === 'mouse') setSel(s.i); }}
            />
          </li>
        ))}
      </ol>

      <p className="rg-caption" aria-live="polite">
        {shown ? (
          <>
            <strong>{num(shown.i + 1, mr)}. {shown.title}</strong>
            <span>{mr ? shown.era.mr : shown.era.en} · {fill(t('jrn.min_short'), { n: num(shown.minutes, mr) })}</span>
          </>
        ) : (
          <>
            <span>{t('rg.starts')} <strong>{first.title}</strong></span>
            <span>{t('rg.ends')} <strong>{last.title}</strong></span>
          </>
        )}
      </p>

      <div className="rg-actions">
        <Link className="rg-begin" href={`${steps[startIndex].path}?j=${journey.id}&s=${startIndex}`}>
          {started ? fill(t('rg.continue'), { n: num(startIndex + 1, mr) }) : t('rg.begin')} →
        </Link>
        <span className="rg-hint">{t('rg.hint')}</span>
      </div>
    </div>
  );
}

// A row of small dots, one per step, coloured by era: the route in miniature for path cards.
// The names show as text under the dots, so a phone (no hover) gets the same information.
export function MiniRoute({ journey }: { journey: Journey }) {
  const steps = journey.steps;
  return (
    <>
      <ul className="mini-route" aria-hidden>
        {steps.map((s) => {
          const era = ERAS.find((e) => e.id === eraOfPath(s.path))!;
          return <li key={s.path} title={s.title} style={{ '--c': era.color } as React.CSSProperties} />;
        })}
      </ul>
      <p className="mini-route-ends">{steps[0].title} → {steps[steps.length - 1].title}</p>
    </>
  );
}
