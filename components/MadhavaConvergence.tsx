'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

// π/4 = 1 − 1/3 + 1/5 − 1/7 + … — a slider over the number of terms,
// showing how slowly the raw partial sums close in on π.
export default function MadhavaConvergence() {
  const { lang } = useLanguage();
  const [n, setN] = useState(6);

  const { approx, diff } = useMemo(() => {
    let s = 0;
    for (let i = 0; i < n; i++) s += (i % 2 === 0 ? 1 : -1) / (2 * i + 1);
    const approx = s * 4;
    return { approx, diff: Math.abs(Math.PI - approx) };
  }, [n]);

  const isMr = lang === 'mr';

  return (
    <div className="madhava-slider">
      <label htmlFor="madhava-n">
        {isMr ? `पदांची संख्या: ${n}` : `Number of terms: ${n}`}
      </label>
      <input
        id="madhava-n"
        type="range"
        min={1}
        max={40}
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />
      <div className="madhava-readout">
        <div>
          <span className="madhava-label">{isMr ? 'अंदाजमूल्य' : 'Approximation'}</span>
          <span className="madhava-value">{approx.toFixed(6)}</span>
        </div>
        <div>
          <span className="madhava-label">π</span>
          <span className="madhava-value">3.141593</span>
        </div>
        <div>
          <span className="madhava-label">{isMr ? 'फरक' : 'Off by'}</span>
          <span className="madhava-value">{diff.toFixed(6)}</span>
        </div>
      </div>
    </div>
  );
}
