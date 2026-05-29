'use client';
import { useEffect } from 'react';

// Save current scroll position under a stable key (e.g. "home" or "section:vedas")
// before navigating away. Pair with useScrollRestoration on the destination page.
export function saveScroll(key: string) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(`scroll:${key}`, String(window.scrollY));
  }
}

// On mount, if a saved scroll position exists for this key, restore it and
// clear the entry. Works for Link forward-nav with onClick=saveScroll, for
// breadcrumb back-nav, and for the browser back button.
export function useScrollRestoration(key: string) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = sessionStorage.getItem(`scroll:${key}`);
    if (saved) {
      // requestAnimationFrame ensures layout has settled before we scroll
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(saved, 10));
        sessionStorage.removeItem(`scroll:${key}`);
      });
    }
  }, [key]);
}
