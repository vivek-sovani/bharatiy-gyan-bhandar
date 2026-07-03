'use client';

import { useEffect } from 'react';
import { initBackButton } from '@/lib/backButton';

// No UI — wires the Android hardware back button to in-app navigation
// history. Android app only; a no-op on the web build.
export default function BackButtonHandler() {
  useEffect(() => {
    initBackButton();
  }, []);

  return null;
}
