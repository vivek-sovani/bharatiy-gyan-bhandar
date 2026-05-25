'use client';

import { useState } from 'react';
import { Glyph } from './Ornaments';
import { transliterate } from '@/lib/transliterate';
import { useLanguage } from '@/lib/LanguageContext';

type Veda = {
  id: string;
  title: string;
  deva: string;
  epithet: string;
  meta: string[];
  summary: string;
  opening: { deva: string; trans: string; cite: string };
  priests: string;
};

const VEDAS_EN: Veda[] = [
  {
    id: 'rig',
    title: 'Ṛgveda',
    deva: 'ऋग्वेद',
    epithet: 'The veda of praise',
    meta: ['1,028 sūktas', '10 maṇḍalas', '10,552 ṛcas'],
    summary: 'The oldest surviving stratum of Indic thought — a collection of metrical hymns to the devas, preserved orally with a precision that astonished every philologist who later met it. Its language is older than Pāṇinian Sanskrit; its world is one of fire, dawn, water and the chariot.',
    opening: { deva: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥', trans: 'I praise Agni, household priest of the rite, the divine officiant — the invoker, dispenser of treasures.', cite: 'Ṛgveda · 1.1.1' },
    priests: 'Hotṛ (the recitant)',
  },
  {
    id: 'yajur',
    title: 'Yajurveda',
    deva: 'यजुर्वेद',
    epithet: 'The veda of liturgy',
    meta: ['Two recensions', 'Śukla & Kṛṣṇa', 'Prose · verse'],
    summary: 'The handbook of the priest who handles the rite — the mantras arranged in the order of their use, with the prose passages (yajus) that direct the offering. It survives in two principal lines: the white (śukla), where mantra and commentary are kept apart, and the black (kṛṣṇa), where they are interleaved.',
    opening: { deva: 'इषे त्वोर्जे त्वा वायवस्थोपायवस्थ ।', trans: 'For sustenance I take you; for vigour I take you. You are of the winds; you are the goal of the winds.', cite: 'Vājasaneyi Saṃhitā · 1.1' },
    priests: 'Adhvaryu (the officiant)',
  },
  {
    id: 'sama',
    title: 'Sāmaveda',
    deva: 'सामवेद',
    epithet: 'The veda of melody',
    meta: ['1,875 verses', '~95% from Ṛgveda', 'Earliest notation'],
    summary: 'A collection of Ṛgvedic verses set to chant — the earliest surviving system of musical notation in the world, and the ancestor of every later Indian classical scale. Its notation marks seven svaras, of which our sā re ga ma pa dha ni are the descendants.',
    opening: { deva: 'अग्न आ याहि वीतये ।', trans: 'Agni, come for the offering.', cite: 'Sāmaveda · 1.1.1' },
    priests: 'Udgātṛ (the chanter)',
  },
  {
    id: 'atharva',
    title: 'Atharvaveda',
    deva: 'अथर्ववेद',
    epithet: 'The veda of the householder',
    meta: ['730 hymns', '20 kāṇḍas', 'Domestic · medical'],
    summary: 'Long the most contested of the four — the “fourth Veda” admitted late into the canon, but in fact the oldest record we have of Indic medical, botanical and apotropaic knowledge. Every later āyurvedic tradition descends from it.',
    opening: { deva: 'ये त्रिषप्ताः परियन्ति विश्वा रूपाणि बिभ्रतः ।', trans: 'They who, three-times-seven, encompass all forms — may the lord of speech place their powers in me today.', cite: 'Atharvaveda · 1.1.1' },
    priests: 'Brahman (the overseer)',
  },
];

const VEDAS_MR: Veda[] = [
  {
    id: 'rig',
    title: 'ऋग्वेद',
    deva: 'ऋग्वेद',
    epithet: 'स्तुतीचा वेद',
    meta: ['१,०२८ सूक्ते', '१० मंडळे', '१०,५५२ ऋचा'],
    summary: 'भारतीय विचारसरणीचा सर्वात जुना थर — देवदेवतांच्या स्तुतीपर मंत्रांचे संकलन, जे तोंडपाठ करून हजारो वर्षे अचूकपणे टिकवून ठेवले गेले. याची भाषा पाणिनीय संस्कृतापेक्षा जुनी आहे; त्याचे जग यज्ञ, उषा, जल आणि रथाचे आहे.',
    opening: { deva: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥', trans: 'मी अग्नीची स्तुती करतो, जो यज्ञाचा मुख्य पुरोहित, देव आणि ऋत्विज आहे — जो मंत्रांचे पठण करणारा आणि रत्नांना धारण करणारा आहे.', cite: 'ऋग्वेद · १.१.१' },
    priests: 'होता (मंत्र पठण करणारा)',
  },
  {
    id: 'yajur',
    title: 'यजुर्वेद',
    deva: 'यजुर्वेद',
    epithet: 'विधी आणि यज्ञाचा वेद',
    meta: ['दोन शाखा', 'शुक्ल आणि कृष्ण', 'गद्य आणि पद्य'],
    summary: 'यज्ञ करणाऱ्या पुरोहितांची नियमावली — मंत्रांची मांडणी विधींच्या क्रमानुसार केली आहे. याचे दोन मुख्य भाग आहेत: शुक्ल यजुर्वेद (जिथे मंत्र आणि भाष्य वेगळे आहेत) आणि कृष्ण यजुर्वेद (जिथे ते एकत्र आहेत).',
    opening: { deva: 'इषे त्वोर्जे त्वा वायवस्थोपायवस्थ ।', trans: 'अन्नासाठी मी तुला स्वीकारतो; उर्जेसाठी मी तुला स्वीकारतो. तुम्ही वायू आहात; तुम्ही वायूचे ध्येय आहात.', cite: 'वाजसनेयी संहिता · १.१' },
    priests: 'अध्वर्यू (विधी करणारा पुरोहित)',
  },
  {
    id: 'sama',
    title: 'सामवेद',
    deva: 'सामवेद',
    epithet: 'संगीताचा वेद',
    meta: ['१,८७५ श्लोक', '९५% ऋग्वेदातून', 'जगातील पहिली स्वर पद्धत'],
    summary: 'ऋग्वेदातील मंत्रांना स्वरबद्ध करून गाण्याची कला — जगातील सर्वात जुनी संगीत स्वर पद्धती. भारतीय शास्त्रीय संगीताचे सा, रे, ग, म हे स्वर याच वेदातून आले आहेत.',
    opening: { deva: 'अग्न आ याहि वीतये ।', trans: 'हे अग्नी, यज्ञातील भाग स्वीकारण्यासाठी या.', cite: 'सामवेद · १.१.१' },
    priests: 'उद्गाता (गायन करणारा पुरोहित)',
  },
  {
    id: 'atharva',
    title: 'अथर्ववेद',
    deva: 'अथर्ववेद',
    epithet: 'गृहस्थाचा वेद',
    meta: ['७३० सूक्ते', '२० कांडे', 'गृहस्थ व औषधी नियम'],
    summary: 'कौटुंबिक आयुष्य, औषधे आणि उपचारांचा वेद. वेदांमध्ये याचा उशिरा समावेश झाला असला तरी, प्राचीन वैद्यकीय विज्ञानाचा (आयुर्वेद) हाच मुख्य पाया आहे.',
    opening: { deva: 'ये त्रिषप्ताः परियन्ति विश्वा रूपाणि बिभ्रतः ।', trans: 'जे तीन-गुणिले-सात, सर्व रूपांमध्ये पसरलेले आहेत — त्या वाक्पतीने (वाणीच्या देवाने) आज त्यांची शक्ती माझ्या मनात स्थापित करावी.', cite: 'अथर्ववेद · १.१.१' },
    priests: 'ब्रह्मा (यज्ञाचा मुख्य रक्षक)',
  },
];

const STRATA_EN = [
  { id: 'samhita', name: 'Saṃhitā', deva: 'संहिता', gloss: 'The mantra-collection itself. Hymns, formulae, chants — the body of the text as the priest performs it.' },
  { id: 'brahmana', name: 'Brāhmaṇa', deva: 'ब्राह्मण', gloss: 'Prose treatises that gloss the rite — its meaning, the legend behind each act, the cosmic correspondence each gesture intends.' },
  { id: 'aranyaka', name: 'Āraṇyaka', deva: 'आरण्यक', gloss: 'The “forest” books, for the practitioner who has withdrawn from the village rite — a transitional layer between ritual and inner contemplation.' },
  { id: 'upanishad', name: 'Upaniṣad', deva: 'उपनिषद्', gloss: 'The “sitting-down-near” — dialogue at the close of each Veda. Turns from the offered fire outward to the fire of the self.' },
];

const STRATA_MR = [
  { id: 'samhita', name: 'संहिता', deva: 'संहिता', gloss: 'मूळ मंत्र संग्रह. स्तुती आणि विधींचे मंत्र — यज्ञ प्रसंगी पुरोहितांद्वारे म्हटले जाणारे मूळ पठण.' },
  { id: 'brahmana', name: 'ब्राह्मण', deva: 'ब्राह्मण', gloss: 'यज्ञविधींचे विश्लेषण करणारे गद्य ग्रंथ — विधींचा अर्थ, त्यामागील पौराणिक कथा आणि विश्वाशी त्यांचा संबंध स्पष्ट करणारे ग्रंथ.' },
  { id: 'aranyaka', name: 'आरण्यक', deva: 'आरण्यक', gloss: '“अरण्य” किंवा वनातील चिंतन ग्रंथ — सांसारिक कर्मांकडून शांत चिंतन आणि साधनेकडे नेणारा मधला टप्पा.' },
  { id: 'upanishad', name: 'उपनिषद', deva: 'उपनिषद्', gloss: '“जवळ बसून घेतलेले ज्ञान” — प्रत्येक वेदाचा शेवटचा भाग (वेदांत). बाह्य कर्माकडून थेट आत्मज्ञानाकडे वळणारा संवाद.' },
];

function VedaTabs() {
  const [active, setActive] = useState('rig');
  const { lang, t } = useLanguage();

  const VEDAS = lang === 'mr' ? VEDAS_MR : VEDAS_EN;
  const STRATA = lang === 'mr' ? STRATA_MR : STRATA_EN;

  const veda = VEDAS.find((v) => v.id === active)!;

  return (
    <div className="veda-tabs">
      <nav className="veda-tab-nav" role="tablist">
        {VEDAS.map((v) => (
          <button
            key={v.id}
            type="button"
            role="tab"
            aria-selected={active === v.id}
            className={`veda-tab ${active === v.id ? 'is-active' : ''}`}
            onClick={() => setActive(v.id)}
          >
            <span className="veda-tab-de deva-only">{v.deva}</span>
            <span className="veda-tab-en">{v.title}</span>
            <span className="veda-tab-ep">{v.epithet}</span>
          </button>
        ))}
      </nav>

      <article className="veda-panel" key={veda.id}>
        <div className="veda-panel-l">
          <div className="eyebrow">№ 0{VEDAS.findIndex((v) => v.id === active) + 1} of 4 · {lang === 'mr' ? 'वेद' : 'Veda'}</div>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontStyle: 'italic', fontWeight: 500, margin: '0.7rem 0 0.4rem' }}>{veda.title}</h2>
          <div className="deva-only" style={{ fontFamily: 'var(--font-deva)', fontSize: '1.8rem', color: 'var(--maroon)', lineHeight: 1.4 }}>{veda.deva}</div>
          <p style={{ marginTop: '1rem', color: 'var(--ink-soft)', fontSize: '1.05rem' }}>{veda.summary}</p>

          <dl className="kv">
            <div className="kv-row">
              <dt>{t('detail.recension')}</dt>
              <dd>{veda.meta.join(' · ')}</dd>
            </div>
            <div className="kv-row">
              <dt>{t('detail.officiant')}</dt>
              <dd>{veda.priests}</dd>
            </div>
            <div className="kv-row">
              <dt>{t('detail.period')}</dt>
              <dd>{lang === 'mr' ? 'इ.स.पूर्व १५०० – ६००' : 'c. 1500 – 600 BCE'}</dd>
            </div>
          </dl>
        </div>
        <aside className="veda-panel-r">
          <div className="eyebrow" style={{ color: 'var(--gold-deep)' }}>{t('detail.the_opening')}</div>
          <div className="veda-shloka">
            <div className="deva-line deva-only">
              {veda.opening.deva.split('\n').map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
            <div className="translit-line">
              {transliterate(veda.opening.deva).split('\n').map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
            <p className="trans">{veda.opening.trans}</p>
            <div className="cite">{veda.opening.cite}</div>
          </div>
        </aside>
      </article>

      <div className="veda-strata">
        <div className="eyebrow" style={{ marginBottom: '1rem' }}><Glyph /> {t('detail.strata')}</div>
        <div className="strata-grid">
          {STRATA.map((s, i) => (
            <div key={s.id} className="stratum">
              <div className="stratum-no">{['I', 'II', 'III', 'IV'][i]}</div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>{s.name}</h4>
                <div className="deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', marginTop: 2 }}>{s.deva}</div>
                <p style={{ marginTop: '0.6rem', fontSize: '0.94rem', color: 'var(--ink-soft)' }}>{s.gloss}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VedasView() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="sec-hero">
        <div className="shell sec-hero-inner">
          <div className="sec-hero-copy">
            <div className="sec-crumb">
              <a href="/" style={{ color: 'inherit', borderBottom: 0 }}>{t('detail.library')}</a>
              <span className="sep">→</span>
              <span>{lang === 'mr' ? 'श्रुति' : 'Śruti'}</span>
              <span className="sep">→</span>
              <span className="cur">{lang === 'mr' ? 'चार वेद' : 'The Four Vedas'}</span>
            </div>
            <span className="deva-only">चत्वारि वेदाः</span>
            <h1>{lang === 'mr' ? 'चार वेद' : 'The Four Vedas'}</h1>
            {lang === 'mr' ? (
              <p className="lede">
                ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद — चार संग्रह, तीन विधी भूमिका, आणि अनादिकालापासून मौखिकरित्या चालत आलेले ज्ञान. प्रत्येक वेदामध्ये बाह्य यज्ञाकडून अंतर्गत आत्मचिंतनाकडे जाणारी चार मुख्य स्तरांची रचना आहे: <em>संहिता, ब्राह्मण, आरण्यक, आणि उपनिषद.</em>
              </p>
            ) : (
              <p className="lede">
                Ṛg, Yajur, Sāma, Atharva — four collections, three liturgical roles, one continuously transmitted body of knowledge. Each is a complete arc that moves from outer rite to inner question, in four strata: <em>saṃhitā, brāhmaṇa, āraṇyaka, upaniṣad.</em>
              </p>
            )}
          </div>
          <div className="sec-hero-img-wrap">
            <img
              src={`${basePath}/corpus-vedas.png`}
              alt="The Four Vedas"
              fetchPriority="high"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      <section className="frame">
        <div className="shell">
          <VedaTabs />
        </div>
      </section>
    </>
  );
}
