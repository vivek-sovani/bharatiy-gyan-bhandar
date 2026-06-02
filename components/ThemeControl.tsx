'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const THEMES = [
  { id: 'cream', label: 'Cream', labelMr: 'क्रीम' },
  { id: 'dark', label: 'Dark', labelMr: 'गडद' },
  { id: 'saffron', label: 'Saffron', labelMr: 'भगवा' },
];

export const THEME_KEY = 'bgb-theme';
const THEME_EVENT = 'bgb-theme-change';

export default function ThemeControl({ variant = 'bar' }: { variant?: 'bar' | 'menu' }) {
  const { lang } = useLanguage();
  const [theme, setTheme] = useState('cream');

  // Sync from <html> on mount and stay in sync with the other instance.
  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.getAttribute('data-theme') || 'cream');
    const onChange = (e: Event) => setTheme((e as CustomEvent<string>).detail);
    window.addEventListener(THEME_EVENT, onChange);
    return () => window.removeEventListener(THEME_EVENT, onChange);
  }, []);

  function applyTheme(value: string) {
    setTheme(value);
    document.documentElement.setAttribute('data-theme', value);
    try { localStorage.setItem(THEME_KEY, value); } catch {}
    window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: value }));
  }

  return (
    <div
      className={`prefs${variant === 'menu' ? ' prefs-menu' : ' prefs-theme'}`}
      role="group"
      aria-label="Theme"
    >
      <div className="pref-group">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`pref-btn${variant === 'bar' ? ' pref-label' : ''}`}
            aria-pressed={theme === t.id}
            onClick={() => applyTheme(t.id)}
          >
            {lang === 'mr' ? t.labelMr : t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
