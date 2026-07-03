'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

// Tap-to-reveal walkthrough of the specific worked example in
// lib/sciences-data.ts (bhaskara item): x ≡ 6 (mod 15), x ≡ 3 (mod 11).
// Verified: 15=1·11+4, 11=2·4+3, 4=1·3+1, 3=3·1+0 → back-substitution
// gives 1 = 3·15 − 4·11, and the smallest positive solution is x = 36.
export default function KuttakaReveal() {
  const { lang } = useLanguage();
  const [revealed, setRevealed] = useState(false);
  const isMr = lang === 'mr';

  return (
    <div className="kuttaka-reveal">
      <button type="button" className="kuttaka-toggle" onClick={() => setRevealed((v) => !v)}>
        {revealed
          ? (isMr ? '← पायऱ्या लपवा' : '← Hide the steps')
          : (isMr ? 'पायऱ्या पहा →' : 'Reveal the steps →')}
      </button>

      {revealed && (
        <div className="kuttaka-steps">
          <div className="kuttaka-step">
            <strong>{isMr ? '१. परस्पर भागाकार (म.सा.वि. काढल्याप्रमाणे)' : '1. Mutual division (as in finding the gcd)'}</strong>
            <p>15 = 1×11 + 4</p>
            <p>11 = 2×4 + 3</p>
            <p>4 = 1×3 + 1</p>
            <p>3 = 3×1 + 0</p>
          </div>
          <div className="kuttaka-step">
            <strong>{isMr ? '२. उलट्या क्रमाने पुन्हा बांधणी' : '2. Back-substitute, climbing the ladder up'}</strong>
            <p>1 = 4 − 1×3</p>
            <p>&nbsp;&nbsp;= 4 − 1×(11 − 2×4) = 3×4 − 11</p>
            <p>&nbsp;&nbsp;= 3×(15 − 11) − 11 = 3×15 − 4×11</p>
          </div>
          <div className="kuttaka-step">
            <strong>{isMr ? '३. उत्तर' : '3. The answer'}</strong>
            <p>
              {isMr
                ? '15×3 − 11×4 = 1 वरून, 15 ने भागल्यास बाकी 6 आणि 11 ने भागल्यास बाकी 3 उरणारी सर्वात लहान संख्या आहे: '
                : 'From 15×3 − 11×4 = 1, the smallest number leaving remainder 6 mod 15 and remainder 3 mod 11 is: '}
              <strong>x = 36</strong>
              {isMr ? ' (तपासा: 36 ÷ 15 → बाकी 6; 36 ÷ 11 → बाकी 3).' : ' (check: 36 ÷ 15 → remainder 6; 36 ÷ 11 → remainder 3).'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
