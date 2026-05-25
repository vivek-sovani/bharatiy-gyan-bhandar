'use client';

import { useState } from 'react';
import { Glyph } from './Ornaments';

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

const VEDAS: Veda[] = [
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

const STRATA = [
  { id: 'samhita', name: 'Saṃhitā', deva: 'संहिता', gloss: 'The mantra-collection itself. Hymns, formulae, chants — the body of the text as the priest performs it.' },
  { id: 'brahmana', name: 'Brāhmaṇa', deva: 'ब्राह्मण', gloss: 'Prose treatises that gloss the rite — its meaning, the legend behind each act, the cosmic correspondence each gesture intends.' },
  { id: 'aranyaka', name: 'Āraṇyaka', deva: 'आरण्यक', gloss: 'The “forest” books, for the practitioner who has withdrawn from the village rite — a transitional layer between ritual and inner contemplation.' },
  { id: 'upanishad', name: 'Upaniṣad', deva: 'उपनिषद्', gloss: 'The “sitting-down-near” — dialogue at the close of each Veda. Turns from the offered fire outward to the fire of the self.' },
];

function VedaTabs() {
  const [active, setActive] = useState('rig');
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
          <div className="eyebrow">№ 0{VEDAS.findIndex((v) => v.id === active) + 1} of 4 · Veda</div>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontStyle: 'italic', fontWeight: 500, margin: '0.7rem 0 0.4rem' }}>{veda.title}</h2>
          <div className="deva-only" style={{ fontFamily: 'var(--font-deva)', fontSize: '1.8rem', color: 'var(--maroon)', lineHeight: 1.4 }}>{veda.deva}</div>
          <p style={{ marginTop: '1rem', color: 'var(--ink-soft)', fontSize: '1.05rem' }}>{veda.summary}</p>

          <dl className="kv">
            <div className="kv-row">
              <dt>Recension</dt>
              <dd>{veda.meta.join(' · ')}</dd>
            </div>
            <div className="kv-row">
              <dt>Officiant</dt>
              <dd>{veda.priests}</dd>
            </div>
            <div className="kv-row">
              <dt>Period</dt>
              <dd>c. 1500 – 600 BCE</dd>
            </div>
          </dl>
        </div>
        <aside className="veda-panel-r">
          <div className="eyebrow" style={{ color: 'var(--gold-deep)' }}>The opening</div>
          <div className="veda-shloka">
            <div className="deva-line deva-only">
              {veda.opening.deva.split('\n').map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
            <p className="trans">{veda.opening.trans}</p>
            <div className="cite">{veda.opening.cite}</div>
          </div>
        </aside>
      </article>

      <div className="veda-strata">
        <div className="eyebrow" style={{ marginBottom: '1rem' }}><Glyph /> The four strata of every Veda</div>
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
  return (
    <>
      <section className="sec-hero">
        <div className="shell sec-hero-inner">
          <div className="sec-hero-copy">
            <div className="sec-crumb">
              <a href="/" style={{ color: 'inherit', borderBottom: 0 }}>Library</a>
              <span className="sep">→</span>
              <span>Śruti</span>
              <span className="sep">→</span>
              <span className="cur">The Four Vedas</span>
            </div>
            <span className="deva-only">चत्वारि वेदाः</span>
            <h1>The Four Vedas</h1>
            <p className="lede">
              Ṛg, Yajur, Sāma, Atharva — four collections, three liturgical roles, one continuously transmitted body of knowledge. Each is a complete arc that moves from outer rite to inner question, in four strata: <em>saṃhitā, brāhmaṇa, āraṇyaka, upaniṣad.</em>
            </p>
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
