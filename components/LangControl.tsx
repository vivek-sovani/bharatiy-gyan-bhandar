'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function LangControl() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="prefs" role="group" aria-label="Language preferences">
      <div className="pref-group">
        <button
          type="button"
          className="pref-btn"
          aria-pressed={lang === 'en'}
          onClick={() => setLang('en')}
          style={{ letterSpacing: '0.08em', fontSize: '9px', fontWeight: 600 }}
        >
          EN
        </button>
        <button
          type="button"
          className="pref-btn pref-deva"
          aria-pressed={lang === 'mr'}
          onClick={() => setLang('mr')}
          style={{ fontSize: '11px' }}
        >
          मराठी
        </button>
      </div>
    </div>
  );
}
