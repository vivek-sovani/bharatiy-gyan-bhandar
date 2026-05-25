'use client';

import { useEffect, useState } from 'react';

const THEMES = [
  { id: 'cream', label: 'Cream' },
  { id: 'dark', label: 'Dark' },
  { id: 'saffron', label: 'Saffron' },
];

export const THEME_KEY = 'bgb-theme';
export const DEVA_KEY = 'bgb-deva';

export default function ThemeControl() {
  const [theme, setTheme] = useState('cream');
  const [deva, setDeva] = useState(true);

  // Sync from whatever the pre-paint script already applied to <html>.
  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.getAttribute('data-theme') || 'cream');
    setDeva(root.getAttribute('data-deva') !== 'off');
  }, []);

  function applyTheme(value: string) {
    setTheme(value);
    document.documentElement.setAttribute('data-theme', value);
    try { localStorage.setItem(THEME_KEY, value); } catch {}
  }

  function applyDeva(value: boolean) {
    setDeva(value);
    document.documentElement.setAttribute('data-deva', value ? 'on' : 'off');
    try { localStorage.setItem(DEVA_KEY, value ? 'on' : 'off'); } catch {}
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
      <div className="pref-group">
        <button
          type="button"
          className="pref-btn pref-deva"
          aria-pressed={deva}
          aria-label={deva ? 'Hide Devanāgarī' : 'Show Devanāgarī'}
          title={deva ? 'Hide Devanāgarī' : 'Show Devanāgarī'}
          onClick={() => applyDeva(!deva)}
        >
          देव
        </button>
      </div>
    </div>
  );
}
