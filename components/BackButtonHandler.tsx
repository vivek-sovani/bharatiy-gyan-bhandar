'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { EXIT_CONFIRM_EVENT, exitApp, initBackButton } from '@/lib/backButton';

// Wires the Android hardware back button to in-app navigation history, and
// asks for confirmation before actually exiting once there's nowhere left
// to go back to. Android app only — a no-op on the web build.
export default function BackButtonHandler() {
  const { lang } = useLanguage();
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    initBackButton();
    const onExitConfirm = () => setConfirming(true);
    window.addEventListener(EXIT_CONFIRM_EVENT, onExitConfirm);
    return () => window.removeEventListener(EXIT_CONFIRM_EVENT, onExitConfirm);
  }, []);

  if (!confirming) return null;

  const isMr = lang === 'mr';

  return (
    <div
      className="exit-confirm-backdrop"
      onClick={() => setConfirming(false)}
      role="dialog"
      aria-modal="true"
    >
      <div className="exit-confirm-dialog" onClick={(e) => e.stopPropagation()}>
        <p>{isMr ? 'अ‍ॅपमधून बाहेर पडायचे आहे का?' : 'Leave the app?'}</p>
        <div className="exit-confirm-actions">
          <button type="button" className="exit-confirm-stay" onClick={() => setConfirming(false)}>
            {isMr ? 'थांबा' : 'Stay'}
          </button>
          <button type="button" className="exit-confirm-leave" onClick={exitApp}>
            {isMr ? 'बाहेर पडा' : 'Exit'}
          </button>
        </div>
      </div>
    </div>
  );
}
