'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { COMPLETE_PATH_ID, JOURNEYS as JOURNEYS_EN, type Journey, type JourneyStep } from './journeys-data';
import { JOURNEYS as JOURNEYS_MR } from './journeys-data_mr';
import { getProgressMap, markVisited } from './journey-progress';
import { useLanguage } from './LanguageContext';

// Guided reading: while a reading path is active the site shows only the current step,
// holds the reader to the path, and offers one way forward. State lives in the URL
// (?j=<journey>&s=<step>) so a shared link opens straight into it, and in sessionStorage
// so the mode survives in-site navigation that drops the query string.

export const GUIDED_KEY = 'bgb-guided';

const allJourneys = (lang: 'en' | 'mr'): Journey[] => (lang === 'mr' ? JOURNEYS_MR : JOURNEYS_EN);

// How strictly the shell holds the reader to a path: the long Complete Path is strict and locks
// later steps; the short themed paths are soft.
const guidedRules = (journeyId: string) =>
  journeyId === COMPLETE_PATH_ID ? { strict: true, lock: true } : { strict: false, lock: false };
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

type Session = { j: string; s: number } | null;

type Guided = {
  active: boolean;
  journey?: Journey;
  step?: JourneyStep;
  index: number;
  strict: boolean;
  lock: boolean;
  onStep: boolean;
  visited: string[];
  isUnlocked: (i: number) => boolean;
  hrefFor: (i: number) => string;
  exit: (stay?: boolean) => void;
  toast: string | null;
};

const IDLE: Guided = {
  active: false,
  index: 0,
  strict: false,
  lock: false,
  onStep: false,
  visited: [],
  isUnlocked: () => true,
  hrefFor: () => '#',
  exit: () => {},
  toast: null,
};

const GuidedContext = createContext<Guided>(IDLE);
export const useGuided = () => useContext(GuidedContext);

// Working pages that sit outside the reading experience.
const EXEMPT = ['/daily'];

const norm = (p: string) => (p.endsWith('/') ? p : p + '/');
const stripBase = (p: string) => (BASE && p.startsWith(BASE) ? p.slice(BASE.length) || '/' : p);

function readSession(): Session {
  try {
    const q = new URLSearchParams(window.location.search);
    const j = q.get('j');
    const s = Number(q.get('s'));
    if (j && Number.isInteger(s) && s >= 0) {
      const next = { j, s };
      sessionStorage.setItem(GUIDED_KEY, JSON.stringify(next));
      return next;
    }
    const raw = sessionStorage.getItem(GUIDED_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* storage unavailable: guided mode simply stays off */
  }
  return null;
}

export function GuidedProvider({ children }: { children: React.ReactNode }) {
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<Session>(null);
  const [visited, setVisited] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    const next = readSession();
    // Landing on another page of the same path (a link, the back button) makes that page the current step.
    if (next && !new URLSearchParams(window.location.search).get('j')) {
      const j = allJourneys(lang).find((x) => x.id === next.j);
      const i = j ? j.steps.findIndex((st) => norm(st.path) === norm(pathname)) : -1;
      if (i >= 0 && i !== next.s) {
        next.s = i;
        try { sessionStorage.setItem(GUIDED_KEY, JSON.stringify(next)); } catch { /* ignore */ }
      }
    }
    setSession(next);
  }, [pathname, lang]);

  const journey = useMemo(
    () => (session ? allJourneys(lang).find((j) => j.id === session.j) : undefined),
    [session, lang],
  );
  const index = session && journey ? Math.min(session.s, journey.steps.length - 1) : 0;
  const step = journey?.steps[index];
  const exempt = EXEMPT.some((p) => norm(pathname) === norm(p));
  const active = !!(session && journey && step) && !exempt;
  const rules = journey ? guidedRules(journey.id) : { strict: false, lock: false };
  const onStep = active && norm(pathname) === norm(step!.path);

  // The home page is not part of any path: a reader on a path who lands there is taken back to their step.
  useEffect(() => {
    if (active && step && norm(pathname) === '/') router.replace(`${step.path}?j=${journey!.id}&s=${index}`);
  }, [active, step, journey, index, pathname, router]);

  useEffect(() => {
    if (session && !journey) {
      // Stale or unknown journey id: drop back to the normal site.
      try { sessionStorage.removeItem(GUIDED_KEY); } catch { /* ignore */ }
      setSession(null);
    }
  }, [session, journey]);

  useEffect(() => {
    const root = document.documentElement;
    if (active) {
      root.setAttribute('data-guided', onStep ? 'step' : 'trip');
      root.toggleAttribute('data-guided-strict', rules.strict);
    } else {
      root.removeAttribute('data-guided');
      root.removeAttribute('data-guided-strict');
    }
  }, [active, onStep, rules.strict]);

  // Arriving on a step marks it as read; progress is shared with the Journeys pages.
  useEffect(() => {
    if (!active || !onStep || !journey || !step) return;
    markVisited(journey.id, step.path);
    setVisited(getProgressMap()[journey.id]?.visited ?? []);
  }, [active, onStep, journey, step]);

  useEffect(() => {
    if (journey) setVisited(getProgressMap()[journey.id]?.visited ?? []);
  }, [journey]);

  const maxReached = useMemo(() => {
    if (!journey) return 0;
    let m = index;
    journey.steps.forEach((s, i) => { if (visited.includes(s.path) && i > m) m = i; });
    return m;
  }, [journey, visited, index]);

  const isUnlocked = useCallback(
    (i: number) => !rules.lock || i <= maxReached + 1,
    [rules.lock, maxReached],
  );

  const hrefFor = useCallback(
    (i: number) => (journey ? `${journey.steps[i].path}?j=${journey.id}&s=${i}` : '#'),
    [journey],
  );

  const notify = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 3400);
  }, []);

  // Leave the path. By default the reader stays on the page they are reading, now with the full site around it.
  const exit = useCallback((stay: boolean = true) => {
    try { sessionStorage.removeItem(GUIDED_KEY); } catch { /* ignore */ }
    setSession(null);
    document.documentElement.removeAttribute('data-guided');
    if (stay) router.replace(pathname);
  }, [router, pathname]);

  // Strict paths: links that leave the path are refused (links to unlocked steps still work).
  useEffect(() => {
    if (!active || !rules.strict || !journey) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as Element | null)?.closest('a[href]') as HTMLAnchorElement | null;
      if (!a || a.closest('.guided-shell') || a.target === '_blank') return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const p = norm(stripBase(url.pathname));
      if (p === norm(pathname)) return;
      const i = journey.steps.findIndex((s) => norm(s.path) === p);
      if (i >= 0 && isUnlocked(i)) return;
      e.preventDefault();
      e.stopPropagation();
      notify(i >= 0 ? t('gd.locked_toast') : t('gd.blocked'));
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [active, rules.strict, journey, pathname, isUnlocked, notify, t]);

  const value: Guided = useMemo(
    () =>
      active
        ? { active, journey, step, index, strict: rules.strict, lock: rules.lock, onStep, visited, isUnlocked, hrefFor, exit, toast }
        : { ...IDLE, toast },
    [active, journey, step, index, rules.strict, rules.lock, onStep, visited, isUnlocked, hrefFor, exit, toast],
  );

  return <GuidedContext.Provider value={value}>{children}</GuidedContext.Provider>;
}
