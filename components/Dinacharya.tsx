'use client';

import { useEffect, useState } from 'react';
import { Glyph } from './Ornaments';
import { DINACHARYA } from '@/lib/data';

// Six tri-doṣic windows; the marker highlights the current segment.
const BOUNDS: [number, number][] = [
  [270, 360],
  [360, 600],
  [600, 840],
  [840, 1080],
  [1080, 1320],
  [1320, 1710],
];

export default function Dinacharya() {
  // Compute after mount so static export and client agree (no hydration mismatch).
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  useEffect(() => {
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    setActiveIdx(BOUNDS.findIndex(([s, e]) => minutes >= s && minutes < e));
  }, []);

  return (
    <section id="dinacharya" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> Lifestyle</div>
            <h2>Dinacaryā — the structure of the day</h2>
          </div>
          <div className="meta">Six segments · classical Āyurveda</div>
        </div>

        <div className="dinacharya">
          {DINACHARYA.map((d, i) => (
            <div key={i} className="seg">
              {i === activeIdx && <div className="marker" style={{ width: '100%' }} />}
              <div className="hr">{d.hr}</div>
              <div className="ph">{d.ph}</div>
              <div className="de deva-only">{d.de}</div>
              <p className="act">{d.act}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
