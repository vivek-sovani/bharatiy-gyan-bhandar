'use client';

import { useState } from 'react';
import { CornerOrn, Glyph } from './Ornaments';
import { CONTRIBUTORS as CONTRIB_EN, CONTRIB_ERAS, type Contributor } from '@/lib/contributors-data';
import { CONTRIBUTORS as CONTRIB_MR } from '@/lib/contributors-data_mr';
import { useLanguage } from '@/lib/LanguageContext';
import ContributorModal from './ContributorModal';

interface EraMeta {
  id: Contributor['era'];
  label: string;
  deva: string;
  period: string;
  periodDeva: string;
  gloss: string;
  glossDeva: string;
}

const ERAS_META: EraMeta[] = [
  {
    id: 'vedic',
    label: 'Vedic Era',
    deva: 'वैदिक कालखंड',
    period: 'c. 1500 – 500 BCE',
    periodDeva: 'इ.स.पूर्व १५०० – ५००',
    gloss: 'The ṛṣis who heard the hymns and the brahmavādinīs who pressed them into dialogue — the seer-poets at the source of the canon.',
    glossDeva: 'ज्यांनी मंत्र ऐकले ते ऋषी आणि ज्यांनी संवादातून ते उलगडले त्या ब्रह्मवादिनी — ग्रंथसंपदेच्या उगमस्थानी असलेले द्रष्टे.',
  },
  {
    id: 'classical',
    label: 'Classical Era',
    deva: 'अभिजात कालखंड',
    period: 'c. 500 BCE – 800 CE',
    periodDeva: 'इ.स.पूर्व ५०० – इ.स. ८००',
    gloss: 'The sūtra-kāras of the six darśanas, the founders of the heterodox schools, the grammarians, mathematicians, vaidyas, dramatists and the first Vedānta ācārya.',
    glossDeva: 'षड्दर्शनांचे सूत्रकार, नास्तिक संप्रदायांचे संस्थापक, व्याकरणी, गणितज्ञ, वैद्य, नाट्यकार आणि वेदान्ताचे आदि-आचार्य.',
  },
  {
    id: 'medieval',
    label: 'Medieval Era',
    deva: 'मध्ययुगीन कालखंड',
    period: 'c. 800 – 1800 CE',
    periodDeva: 'इ.स. ८०० – १८००',
    gloss: 'The Vedānta ācāryas after Śaṅkara, the bhakti poet-saints in every regional language, the Kerala mathematicians and the first Sikh gurus.',
    glossDeva: 'शङ्करोत्तर वेदान्ताचार्य, प्रत्येक लोकभाषेतले संतकवी, केरळचे गणितज्ञ आणि सिख गुरूंची प्रारंभिक परंपरा.',
  },
  {
    id: 'modern',
    label: 'Modern Era',
    deva: 'आधुनिक कालखंड',
    period: 'c. 1800 CE – Present',
    periodDeva: 'इ.स. १८०० – वर्तमान',
    gloss: 'The reformers, mystics, jurists and freedom-fighters who re-read the tradition in the languages of the colonial encounter and the republic.',
    glossDeva: 'वसाहतकाल आणि प्रजासत्ताकाच्या संदर्भात परंपरेचे पुनर्वाचन करणारे सुधारक, संत, विधिज्ञ आणि स्वातंत्र्यसैनिक.',
  },
];

function EraHeader({ era, lang }: { era: EraMeta; lang: string }) {
  const period = lang === 'mr' ? era.periodDeva : era.period;
  const gloss = lang === 'mr' ? era.glossDeva : era.gloss;

  return (
    <div className="era-banner" aria-label={era.label}>
      <div className="era-banner-row">
        <span className="era-banner-period">{period}</span>
        <h3 className="era-banner-title">
          {lang === 'mr' ? (
            <span className="deva-only">{era.deva}</span>
          ) : (
            <>
              <span>{era.label}</span>
              <span className="era-banner-sep">·</span>
              <span className="deva-only">{era.deva}</span>
            </>
          )}
        </h3>
      </div>
      <p className="era-banner-gloss">{gloss}</p>
    </div>
  );
}

function PersonCard({
  c,
  lang,
  onOpen,
}: {
  c: Contributor;
  lang: string;
  onOpen: (c: Contributor) => void;
}) {
  return (
    <button type="button" className="person is-link" onClick={() => onOpen(c)}>
      <CornerOrn className="tl" />
      <CornerOrn className="tr" />
      <CornerOrn className="bl" />
      <CornerOrn className="br" />

      <div className="person-row">
        <span className="person-seal" aria-hidden>{c.seal}</span>
        <div className="person-id">
          <span className="person-dates">{lang === 'mr' ? c.datesDeva : c.dates}</span>
          {lang === 'mr' ? (
            <h4 className="person-name deva-only">{c.deva}</h4>
          ) : (
            <>
              <h4 className="person-name">{c.name}</h4>
              {c.name !== c.deva && (
                <div className="person-deva deva-only">{c.deva}</div>
              )}
            </>
          )}
          {c.epithet && (
            <div className="person-epithet">
              {lang === 'mr' ? (c.epithetDeva || c.epithet) : c.epithet}
            </div>
          )}
        </div>
      </div>

      <div className="person-tradition">{lang === 'mr' ? c.traditionDeva : c.tradition}</div>
      <p className="person-blurb">{c.blurb}</p>

      <div className="person-works">
        {c.works.map((w) => (
          <span key={w} className="person-work">{w}</span>
        ))}
      </div>
    </button>
  );
}

export default function Contributors() {
  const { lang, t } = useLanguage();
  const CONTRIBUTORS = lang === 'mr' ? CONTRIB_MR : CONTRIB_EN;
  const total = CONTRIBUTORS.length;
  const [selected, setSelected] = useState<Contributor | null>(null);

  return (
    <section id="contributors" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('contrib.eyebrow')}</div>
            <h2>{t('contrib.title')}</h2>
          </div>
          <div className="meta">
            {t('contrib.meta').replace('{count}', total.toString())}
          </div>
        </div>

        <p className="contrib-prompt">{t('contrib.prompt')}</p>

        {CONTRIB_ERAS.map((eraId) => {
          const era = ERAS_META.find((e) => e.id === eraId);
          if (!era) return null;
          const people = CONTRIBUTORS.filter((c) => c.era === eraId);
          if (people.length === 0) return null;

          return (
            <div key={eraId} style={{ marginTop: '2.5rem' }}>
              <EraHeader era={era} lang={lang} />
              <div className="people">
                {people.map((c) => (
                  <PersonCard key={c.id} c={c} lang={lang} onOpen={setSelected} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ContributorModal contributor={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
