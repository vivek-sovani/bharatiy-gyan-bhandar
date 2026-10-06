'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGuided } from '@/lib/guided';
import { enterLibrary } from '@/lib/home-mode';
import { useLanguage } from '@/lib/LanguageContext';
import LangControl from './LangControl';
import ThemeControl from './ThemeControl';

const fill = (s: string, vars: Record<string, string | number>) =>
  Object.entries(vars).reduce((acc, [k, v]) => acc.replace(`{${k}}`, String(v)), s);

// Fixed bar that replaces the site header while a path is active.
export function GuidedBar() {
  const g = useGuided();
  const { t } = useLanguage();
  const [trailOpen, setTrailOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const showing = g.active && !!g.journey && !!g.step;

  // Keep the page content clear of the fixed bar, whatever its height (side-trip strip, wrapped title).
  useEffect(() => {
    const el = barRef.current;
    if (!showing || !el) return;
    const sync = () => document.documentElement.style.setProperty('--guided-h', `${el.getBoundingClientRect().height}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => { ro.disconnect(); document.documentElement.style.removeProperty('--guided-h'); };
  }, [showing]);

  if (!g.active || !g.journey || !g.step) return null;

  const { journey, index } = g;
  const total = journey.steps.length;
  const prev = index > 0 ? index - 1 : null;
  const next = index < total - 1 ? index + 1 : null;

  return (
    <div ref={barRef} className="guided-bar guided-shell" style={{ '--accent': `var(--${journey.accent})` } as React.CSSProperties}>
      <div className="shell guided-bar-inner">
        <button type="button" className="guided-exit" onClick={() => g.exit()} aria-label={t('gd.exit')}>
          <span aria-hidden>×</span><span className="guided-exit-label">{t('gd.exit')}</span>
        </button>

        <button type="button" className="guided-title" aria-expanded={trailOpen} onClick={() => setTrailOpen((v) => !v)}>
          <span className="guided-title-name">{journey.title}</span>
          <span className="guided-title-step">{fill(t('gd.step_of'), { n: index + 1, total })} <span aria-hidden>▾</span></span>
        </button>

        <div className="guided-nav">
          {prev !== null && g.isUnlocked(prev) && (
            <Link href={g.hrefFor(prev)} className="guided-arrow" aria-label={t('gd.prev')}>‹</Link>
          )}
          {next !== null && g.isUnlocked(next) && (
            <Link href={g.hrefFor(next)} className="guided-arrow" aria-label={t('gd.next')}>›</Link>
          )}
        </div>
        <div className="guided-prefs"><LangControl /><ThemeControl /></div>
      </div>
      <div className="guided-track" aria-hidden>
        <span style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      {!g.onStep && (
        <div className="guided-trip">
          <div className="shell guided-trip-inner">
            <span>{t('gd.trip')}</span>
            <Link href={g.hrefFor(index)} className="guided-return">{t('gd.return')} →</Link>
          </div>
        </div>
      )}

      {trailOpen && (
        <div className="guided-trail">
          <div className="shell">
            <ol>
              {journey.steps.map((s, i) => {
                const done = g.visited.includes(s.path);
                const open = g.isUnlocked(i);
                const cls = `guided-trail-item${i === index ? ' is-current' : ''}${done ? ' is-done' : ''}${open ? '' : ' is-locked'}`;
                const body = (
                  <>
                    <span className="guided-trail-n">{done ? '✓' : open ? i + 1 : '🔒'}</span>
                    <span className="guided-trail-t">{s.title}</span>
                    <span className="guided-trail-m">{fill(t('gd.min'), { n: s.minutes })}</span>
                  </>
                );
                return (
                  <li key={s.path}>
                    {open ? (
                      <Link href={g.hrefFor(i)} className={cls} onClick={() => setTrailOpen(false)}>{body}</Link>
                    ) : (
                      <span className={cls} title={t('gd.locked')}>{body}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

// The "why this step, why now" line that opens each step.
export function GuidedIntro() {
  const g = useGuided();
  const { t } = useLanguage();
  if (!g.active || !g.onStep || !g.step || !g.journey) return null;
  return (
    <div className="guided-intro guided-shell">
      <div className="shell">
        <div className="eyebrow">
          {fill(t('gd.step_of'), { n: g.index + 1, total: g.journey.steps.length })} · {fill(t('gd.min'), { n: g.step.minutes })}
        </div>
        <p><strong>{t('gd.why')}:</strong> {g.step.why}</p>
      </div>
    </div>
  );
}

// The one way forward, at the end of the step.
export function GuidedNext() {
  const g = useGuided();
  const { t } = useLanguage();
  const router = useRouter();
  if (!g.active || !g.onStep || !g.journey) return null;
  const { journey, index } = g;
  const next = index < journey.steps.length - 1 ? journey.steps[index + 1] : null;

  return (
    <div className="guided-next guided-shell" style={{ '--accent': `var(--${journey.accent})` } as React.CSSProperties}>
      <div className="shell">
        {next ? (
          <Link href={g.hrefFor(index + 1)} className="guided-next-card">
            <span>
              <span className="guided-next-kicker">{t('gd.next')} · {fill(t('gd.min'), { n: next.minutes })}</span>
              <span className="guided-next-title">{next.title}</span>
            </span>
            <span className="guided-next-arrow" aria-hidden>→</span>
          </Link>
        ) : (
          <div className="guided-next-card is-done">
            <span>
              <span className="guided-next-kicker">{t('gd.done')}</span>
              <span className="guided-next-title">{fill(t('gd.done_title'), { title: journey.title })}</span>
            </span>
            <span className="guided-done-actions">
              <Link href="/journeys/" className="chip" onClick={() => g.exit(false)}>{t('gd.paths')}</Link>
              <button type="button" className="chip" onClick={() => { g.exit(false); enterLibrary(); router.push('/#sections'); }}>{t('gd.library')}</button>
            </span>
          </div>
        )}
        {index > 0 && g.isUnlocked(index - 1) && (
          <Link href={g.hrefFor(index - 1)} className="guided-prev-link">← {t('gd.prev')}: {journey.steps[index - 1].title}</Link>
        )}
      </div>
    </div>
  );
}

export function GuidedToast() {
  const g = useGuided();
  if (!g.toast) return null;
  return <div className="guided-toast guided-shell" role="status">{g.toast}</div>;
}

// Material beyond the step itself. Plain content on the normal site; a closed panel in guided mode.
export function GuidedDeeper({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener('gd:open-deeper', show);
    return () => window.removeEventListener('gd:open-deeper', show);
  }, []);
  return (
    <div className={`gd-deeper${open ? ' is-open' : ''}`}>
      <button type="button" className="gd-deeper-btn" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {open ? t('gd.hide_deeper') : t('gd.deeper')} <span aria-hidden>{open ? '▴' : '▾'}</span>
      </button>
      <div className="gd-deeper-body">{children}</div>
    </div>
  );
}
