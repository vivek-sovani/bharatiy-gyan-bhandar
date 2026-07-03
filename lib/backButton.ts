'use client';

import { App } from '@capacitor/app';
import { isNativeApp } from './notifications';

// Capacitor's native default is to just exit the app on hardware back —
// it no longer walks WebView history automatically (Capacitor 4+). Wire it
// to the in-app navigation history instead, so back behaves like a browser:
// step back through visited pages. At the root, ask before actually
// exiting — dispatched as a CustomEvent so the confirm dialog (a React
// component, see BackButtonHandler.tsx) can render it.
export const EXIT_CONFIRM_EVENT = 'bgb-exit-confirm';

let initialized = false;

export function initBackButton() {
  if (initialized || !isNativeApp()) return;
  initialized = true;

  App.addListener('backButton', ({ canGoBack }) => {
    if (canGoBack) {
      window.history.back();
    } else {
      window.dispatchEvent(new CustomEvent(EXIT_CONFIRM_EVENT));
    }
  });
}

export function exitApp() {
  App.exitApp();
}
