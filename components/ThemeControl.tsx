'use client';

import { useEffect, useState } from 'react';

const THEMES = [
  { id: 'cream', label: 'Cream' },
  { id: 'dark', label: 'Dark' },
  { id: 'saffron', label: 'Saffron' },
];

export const THEME_KEY = 'bgb-theme';

export default function ThemeControl() {
  const [theme, setTheme] = useState('cream');

  // Sync from whatever the pre-paint script already applied to <html>.
  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.getAttribute('data-theme') || 'cream');
  }, []);

  function applyTheme(value: string) {
    setTheme(value);
    document.documentElement.setAttribute('data-theme', value);
    try { localStorage.setItem(THEME_KEY, value); } catch {}
  }

  return (
    <div className="prefs" role="group" aria-label="Display preferences">
      <div className="pref-group">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            className="pref-btn pref-label"
            aria-pressed={theme === t.id}
            onClick={() => applyTheme(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
