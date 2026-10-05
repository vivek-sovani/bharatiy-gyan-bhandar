'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export type PanelLink = { label: string; href: string };

type Props = {
  color: string;
  eyebrow?: string;
  title: string;
  deva?: string;
  blurb?: string;
  tags?: string[];
  links?: PanelLink[];
  onClose: () => void;
  children?: React.ReactNode;
};

// Shared detail card for the Schools and Tree views (the timeline keeps its own inline copy).
export default function MapNodePanel({ color, eyebrow, title, deva, blurb, tags, links, onClose, children }: Props) {
  const { t } = useLanguage();
  return (
    <aside className="tl-panel" style={{ '--c': color } as React.CSSProperties} aria-live="polite">
      <button type="button" className="tl-panel-x" aria-label={t('map.close')} onClick={onClose}>×</button>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {deva && <div className="deva-only tl-panel-deva">{deva}</div>}
      {blurb && <p>{blurb}</p>}
      {tags && tags.length > 0 && (
        <ul className="tl-tags">
          {tags.map((x) => <li key={x}>{x}</li>)}
        </ul>
      )}
      {children}
      {links && links.length > 0 && (
        <div className="tl-panel-actions">
          {links.map((l) => (
            <Link key={l.href} className="chip" href={l.href}>{l.label} →</Link>
          ))}
        </div>
      )}
    </aside>
  );
}
