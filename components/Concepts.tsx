'use client';

import { useState } from 'react';
import { CornerOrn, Glyph, Emblem } from './Ornaments';

const CONCEPT_EMOJI: Record<string, string> = {
  rta:                  '☀️',
  satya:                '💎',
  brahman:              '🕉️',
  atman:                '🪷',
  maya:                 '🌊',
  dharma:               '☸️',
  karma:                '⚡',
  purusharthas:         '🎯',
  samsara:              '♾️',
  moksha:               '🕊️',
  yoga:                 '🧘',
  'purusha-prakriti':   '☯️',
  triguna:              '🔱',
  panchamahabhuta:      '🌍',
  'kala-yuga':          '⏳',
  pramana:              '👁️',
  duhkha:               '💧',
  anatman:              '🌀',
  pratityasamutpada:    '🕸️',
  shunyata:             '⭕',
  ahimsa:               '🌱',
  anekantavada:         '🔮',
  rasa:                 '🎭',
  dhvani:               '🎵',
  'avastha-turiya':     '🌙',
  antahkarana:          '🧠',
  panchakosha:          '🪆',
  indriya:              '🌺',
  'samskara-vasana':    '🧬',
  prana:                '💨',
  'atma-guna':          '✨',
  saccidananda:         '🌟',
  ishvara:              '🙏',
  'nama-rupa':          '🪞',
  padartha:             '📐',
  'anu-paramanu':       '⚛️',
  anumana:              '🔍',
  'shabda-sphota':      '📜',
  'vada-shastrartha':   '⚖️',
  'nishkama-karma':     '🌾',
  sthitaprajna:         '🏔️',
  ashrama:              '🛤️',
  'rina-traya':         '🤝',
  svadharma:            '⚔️',
  yajna:                '🔥',
  bhakti:               '❤️',
  jnana:                '📚',
  'ashtanga-yoga':      '🪷',
  samadhi:              '💫',
  'viveka-vairagya':    '🧭',
  'guru-shishya':       '🪔',
  'catvari-arya-satya': '🌸',
  'ashtangika-marga':   '🌿',
  nirvana:              '🕯️',
  anitya:               '🍂',
  kshanikavada:         '⏱️',
  syadvada:             '🔀',
  kevalajnana:          '💡',
  'bhava-sthayibhava':  '🎨',
};
import { CONCEPTS as CONCEPTS_EN, CONCEPT_DOMAINS, type Concept } from '@/lib/concepts-data';
import { CONCEPTS as CONCEPTS_MR } from '@/lib/concepts-data_mr';
import { useLanguage } from '@/lib/LanguageContext';
import ConceptModal from './ConceptModal';

interface DomainMeta {
  id: Concept['domain'];
  label: string;
  deva: string;
  gloss: string;
  glossDeva: string;
}

const DOMAINS_META: DomainMeta[] = [
  {
    id: 'order',
    label: 'Cosmic & metaphysical order',
    deva: 'वैश्विक व तात्त्विक व्यवस्था',
    gloss: 'The structure of reality — from the cosmic order of ṛta to the ultimate ground of Brahman and the self.',
    glossDeva: 'वास्तवाची रचना — ऋताच्या विश्वनियमापासून ब्रह्म व आत्म्याच्या परम आधारापर्यंत.',
  },
  {
    id: 'ethics',
    label: 'Action, ethics & society',
    deva: 'कर्म, नीती व समाज',
    gloss: 'How one ought to live — duty, the law of action, and the balanced aims of a human life.',
    glossDeva: 'कसे जगावे — कर्तव्य, कर्माचा नियम आणि मानवी जीवनाची संतुलित उद्दिष्टे.',
  },
  {
    id: 'liberation',
    label: 'Bondage & liberation',
    deva: 'बंधन व मुक्ती',
    gloss: 'The cycle of rebirth and the disciplines by which it is brought to an end.',
    glossDeva: 'पुनर्जन्माचे चक्र आणि ज्या साधनांनी त्याचा अंत होतो त्या.',
  },
  {
    id: 'mind',
    label: 'Mind, matter & cosmos',
    deva: 'मन, द्रव्य व विश्व',
    gloss: 'The analysis of nature — consciousness and matter, the three strands, the elements, and cyclic time.',
    glossDeva: 'निसर्गाचे विश्लेषण — चैतन्य व द्रव्य, तीन गुण, पंचभूते आणि चक्रीय काल.',
  },
  {
    id: 'knowledge',
    label: 'Knowledge & epistemology',
    deva: 'ज्ञान व ज्ञानमीमांसा',
    gloss: 'How we know what we know — the valid means of knowledge shared across the schools.',
    glossDeva: 'आपण कसे जाणतो — सर्व शाखांत समाईक असलेली ज्ञानाची वैध साधने.',
  },
  {
    id: 'heterodox',
    label: 'Heterodox concepts — Bauddha & Jaina',
    deva: 'नास्तिक संकल्पना — बौद्ध व जैन',
    gloss: 'Ideas from the schools that stand outside Vedic authority — suffering, no-self, emptiness, non-harm.',
    glossDeva: 'वैदिक प्रामाण्याबाहेरील शाखांतील कल्पना — दुःख, अनात्म, शून्यता, अहिंसा.',
  },
  {
    id: 'aesthetics',
    label: 'Aesthetics & language',
    deva: 'सौंदर्यशास्त्र व भाषा',
    gloss: 'The theory of art and meaning — aesthetic flavour and the power of poetic suggestion.',
    glossDeva: 'कला व अर्थाचा सिद्धान्त — रससिद्धान्त आणि काव्यात्मक सूचनेची शक्ती.',
  },
];

function DomainHeader({ domain, lang }: { domain: DomainMeta; lang: string }) {
  const gloss = lang === 'mr' ? domain.glossDeva : domain.gloss;

  return (
    <div className="era-banner" aria-label={domain.label}>
      <Emblem name={domain.id} className="era-banner-emblem" size={92} />
      <div className="era-banner-row">
        <Emblem name={domain.id} className="era-banner-mark" size={30} />
        <h3 className="era-banner-title">
          {lang === 'mr' ? (
            <span className="deva-only">{domain.deva}</span>
          ) : (
            <>
              <span>{domain.label}</span>
              <span className="era-banner-sep">·</span>
              <span className="deva-only">{domain.deva}</span>
            </>
          )}
        </h3>
      </div>
      <p className="era-banner-gloss">{gloss}</p>
    </div>
  );
}

function ConceptCard({
  c,
  lang,
  onOpen,
}: {
  c: Concept;
  lang: string;
  onOpen: (c: Concept) => void;
}) {
  return (
    <button
      type="button"
      className="person is-link"
      onClick={() => onOpen(c)}
    >
      <CornerOrn className="tl" />
      <CornerOrn className="tr" />
      <CornerOrn className="bl" />
      <CornerOrn className="br" />

      <div className="person-row">
        <span className="person-seal" aria-hidden>
          <Emblem name={c.domain} size={26} />
        </span>
        <div className="person-id">
          <span className="person-dates">{lang === 'mr' ? c.glossDeva : c.gloss}</span>
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
        </div>
      </div>

      <div className="person-tradition">{lang === 'mr' ? c.sourceDeva : c.source}</div>
      <p className="person-blurb">{c.blurb}</p>

      <div className="person-works">
        {c.tags.map((w) => (
          <span key={w} className="person-work">{w}</span>
        ))}
      </div>
    </button>
  );
}

export default function Concepts() {
  const { lang, t } = useLanguage();
  const CONCEPTS = lang === 'mr' ? CONCEPTS_MR : CONCEPTS_EN;
  const total = CONCEPTS.length;
  const [selected, setSelected] = useState<Concept | null>(null);

  return (
    <section id="concepts" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('concepts.eyebrow')}</div>
            <h2>{t('concepts.title')}</h2>
          </div>
          <div className="meta">
            {t('concepts.meta').replace('{count}', total.toString())}
          </div>
        </div>

        <p className="contrib-prompt">{t('concepts.prompt')}</p>

        {CONCEPT_DOMAINS.map((domainId) => {
          const domain = DOMAINS_META.find((d) => d.id === domainId);
          if (!domain) return null;
          const items = CONCEPTS.filter((c) => c.domain === domainId);
          if (items.length === 0) return null;

          return (
            <div
              key={domainId}
              style={{ marginTop: '2.5rem', '--accent': `var(--ac-${domainId})` } as React.CSSProperties}
            >
              <DomainHeader domain={domain} lang={lang} />
              <div className="people">
                {items.map((c) => (
                  <ConceptCard key={c.id} c={c} lang={lang} onOpen={setSelected} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ConceptModal concept={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
