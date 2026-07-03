'use client';

import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { SCIENCES as SCIENCES_EN } from '@/lib/sciences-data';
import { SCIENCES as SCIENCES_MR } from '@/lib/sciences-data_mr';
import { FIGURES } from './figures/ScienceFigures';
import KuttakaReveal from './KuttakaReveal';
import MadhavaConvergence from './MadhavaConvergence';
import { useLanguage } from '@/lib/LanguageContext';

export default function SciencesDetail({ id }: { id: string }) {
  const { lang, t } = useLanguage();
  const SCIENCES = lang === 'mr' ? SCIENCES_MR : SCIENCES_EN;
  const item = SCIENCES.find((s) => s.id === id) || SCIENCES_EN.find((s) => s.id === id);

  if (!item) {
    return (
      <section className="sec-hero">
        <div className="shell"><h2>Not found</h2></div>
      </section>
    );
  }

  const otherItems = SCIENCES.filter((s) => s.id !== item.id);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      <section className="sec-hero">
        <div className="shell sec-hero-inner">
          <div className="sec-hero-copy">
            <div className="sec-crumb">
              <Link href="/">{t('detail.library')}</Link>
              <span className="sep">→</span>
              <Link href="/sciences/">{lang === 'mr' ? 'भारतीय विज्ञान आणि गणित' : 'Sciences & Mathematics'}</Link>
              <span className="sep">→</span>
              <span className="cur">{item.title}</span>
            </div>
            {item.deva !== item.title && (
              <span className="deva-only" style={{ fontSize: '2.5rem', color: 'var(--maroon)', marginTop: '1.2rem', display: 'block' }}>
                {item.deva}
              </span>
            )}
            <h1 style={{ marginTop: '0.2rem' }}>{item.title}</h1>
            <div className="epithet" style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{item.epithet}</div>
            <p className="lede" style={{ marginTop: '1rem', maxWidth: '64ch' }}>{item.tldr}</p>
            <div className="sec-facets" style={{ marginTop: '1rem' }}>
              <span className="facet">{item.era}</span>
            </div>
          </div>
          <div className="sec-hero-img-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--paper-deep)' }}>
            <img
              src={`${basePath}/corpus-sciences.png`}
              alt={item.title}
              fetchPriority="high"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section className="frame">
        <div className="shell">
          <div className="sec-panel">
            <div className="sec-panel-l">
              <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Glyph /> {lang === 'mr' ? 'परिचय' : 'The story'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '1.25rem' }}>
                {item.narrative.map((p, i) => (
                  <p key={i} style={{ fontSize: '1.08rem', lineHeight: '1.7', color: 'var(--ink-soft)', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>

            <aside className="sec-aside">
              <div className="eyebrow" style={{ color: 'var(--gold-deep)' }}>
                {lang === 'mr' ? 'मूळ स्रोत' : 'The source, quoted'}
              </div>
              <div className="sec-shloka" style={{ marginTop: '0.6rem' }}>
                <CornerOrn className="tl" />
                <CornerOrn className="tr" />
                <CornerOrn className="bl" />
                <CornerOrn className="br" />
                <div className="deva-line deva-only" style={{ fontSize: '1.15rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                  {item.source.text}
                </div>
                <p className="trans" style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.98rem' }}>
                  {item.source.trans}
                </p>
                <div className="cite" style={{ marginTop: '1rem', fontWeight: 600 }}>{item.source.citation}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="frame" style={{ background: 'var(--paper-deep)' }}>
        <div className="shell">
          <div className="frame-hd">
            <div className="title-block">
              <div className="eyebrow"><Glyph /> {lang === 'mr' ? 'गणित' : 'The Mathematics'}</div>
              <h2>{lang === 'mr' ? 'प्रत्यक्ष आकडेमोड' : 'The actual working'}</h2>
            </div>
          </div>

          {item.theMath.map((block, i) => {
            const Figure = block.figure ? FIGURES[block.figure] : undefined;
            return (
              <div key={i} className="math-panel">
                <div className="math-panel-body">
                  <h4>{block.heading}</h4>
                  {block.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {item.interactive === 'kuttaka' && i === item.theMath.length - 1 && <KuttakaReveal />}
                  {item.interactive === 'madhava' && i === item.theMath.length - 1 && <MadhavaConvergence />}
                </div>
                {Figure && (
                  <div className="math-panel-figure" style={{ color: 'var(--maroon)' }}>
                    <Figure />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {otherItems.length > 0 && (
        <section className="see-also">
          <div className="shell">
            <h4>{lang === 'mr' ? 'विज्ञान आणि गणितातील इतर विषय' : 'More in Sciences & Mathematics'}</h4>
            <div className="see-grid">
              {otherItems.map((other) => (
                <Link key={other.id} className="see-link" href={`/sciences/${other.id}/`}>
                  <span>
                    <span className="ttl">{other.title}</span>
                    {other.deva !== other.title && (
                      <>
                        <br />
                        <span className="ttl-de deva-only" style={{ color: 'var(--maroon)', fontSize: '0.92rem' }}>{other.deva}</span>
                      </>
                    )}
                  </span>
                  <span className="arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
