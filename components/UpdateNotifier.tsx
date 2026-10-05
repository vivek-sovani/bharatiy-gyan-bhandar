'use client';

import { useCallback, useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const BUILD_ID = process.env.NEXT_PUBLIC_BUILD_ID ?? 'dev';
const RECHECK_MS = 20 * 60 * 1000;

// An installed web app is resumed from memory, so it can keep showing an old version for days.
// This asks the live site which build is current whenever the app is opened or brought back to
// the foreground, and offers a refresh when it is newer than the one on screen.
export default function UpdateNotifier() {
  const { t } = useLanguage();
  const [stale, setStale] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const check = useCallback(async () => {
    try {
      // The query string keeps any cached copy of this file from answering.
      const res = await fetch(`${BASE}/version.json?t=${Date.now()}`, { cache: 'no-store' });
      if (!res.ok) return;
      const { id } = await res.json();
      if (id && id !== BUILD_ID) setStale(true);
    } catch {
      /* offline or blocked: say nothing */
    }
  }, []);

  useEffect(() => {
    const first = window.setTimeout(check, 3000);
    const onVisible = () => { if (document.visibilityState === 'visible') check(); };
    document.addEventListener('visibilitychange', onVisible);
    const timer = window.setInterval(onVisible, RECHECK_MS);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [check]);

  const refresh = async () => {
    try {
      const reg = await navigator.serviceWorker?.getRegistration();
      await reg?.update();
    } catch { /* the reload below still fetches the new page */ }
    window.location.reload();
  };

  if (!stale || dismissed) return null;
  return (
    <div className="upd-bar" role="status">
      <span>{t('upd.msg')}</span>
      <button type="button" className="upd-go" onClick={refresh}>{t('upd.refresh')}</button>
      <button type="button" className="upd-later" onClick={() => setDismissed(true)} aria-label={t('upd.later')}>{t('upd.later')}</button>
    </div>
  );
}
