// Assembles the full book manuscript (English + Marathi) from site-data.json
// into two standalone HTML files, ready for pandoc -> EPUB / DOCX.
// Run with: node build.mjs   (from kindle-book/scripts/)
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const D = JSON.parse(readFileSync('../data/site-data.json', 'utf8'));
const esc = (s) => (s ?? '').toString();
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

const PARTS = [
  { id: 'first-steps', journeyId: 'first-steps', accent: 'ac-first-steps', sections: ['shruti-smriti', 'vedas', 'upavedas', 'vedangas', 'upanishads', 'gita', 'subhashita', 'lifestyle'] },
  { id: 'philosophy-path', journeyId: 'philosophy-path', accent: 'ac-philosophy', sections: ['darshanas', 'vedanta-schools', 'language-philosophy', 'nastika-darshanas'] },
  { id: 'stories-first', journeyId: 'stories-first', accent: 'ac-stories', sections: ['itihasa', 'puranas', 'kavya', 'kavya-poets', 'bhakti'] },
  { id: 'scientific-mind', journeyId: 'scientific-mind', accent: 'ac-scientific', sections: ['sciences', 'dharmashastra', 'arthashastra', 'kamashastra', 'agamas', 'tantra-texts', 'yantra', 'rangoli'] },
  { id: 'sant-path', journeyId: 'sant-path', accent: 'ac-sant', sections: ['marathi-sants'] },
  { id: 'modern-mind', journeyId: null, accent: 'ac-modern', sections: ['parallel', 'modern'] },
];

const MODERN_MIND = {
  en: { title: 'The Modern Mind', deva: 'आधुनिक चिन्तन-मार्गः',
    tagline: 'Beyond the vedic line, and the long re-reading — where the corpus meets the present.',
    audience: 'For readers who want the whole arc, vedic to now' },
  mr: { title: 'आधुनिक चिन्तन-मार्ग', deva: 'Ādhunika Cintana-mārgaḥ',
    tagline: 'वेदपरंपरेपलीकडील प्रवाह, आणि नव्याने केलेले वाचन — जिथे परंपरा वर्तमानाला भेटते.',
    audience: 'ज्यांना वेदकाळापासून आजपर्यंतचा संपूर्ण प्रवास हवा आहे, त्यांच्यासाठी' },
};

const STR = {
  en: { part: 'Part', chapter: 'Chapter', atGlance: 'At a glance', preface: 'Preface', appendixA: 'Appendix A — Concepts',
        appendixB: 'Appendix B — Contributors', appendixC: 'Appendix C — Living Knowledge', timeline: 'A Note on Eras',
        backmatter: 'Verse Explanations', colophon: 'Colophon', inThisPart: 'In this part',
        toc: 'Table of Contents', frontTitle: 'Bhāratīya Jñāna Bhaṇḍāra', readExpl: 'read the full explanation',
        editionLabel: 'English Edition', debated: 'debated claim' },
  mr: { part: 'भाग', chapter: 'प्रकरण', atGlance: 'एका दृष्टीक्षेपात', preface: 'प्रस्तावना', appendixA: 'परिशिष्ट अ — संकल्पना',
        appendixB: 'परिशिष्ट ब — योगदानकर्ते', appendixC: 'परिशिष्ट क — जिवंत ज्ञानवारसा', timeline: 'कालखंडांविषयी',
        backmatter: 'श्लोक-विवरण', colophon: 'ग्रंथ-परिचय', inThisPart: 'या भागात',
        toc: 'अनुक्रमणिका', frontTitle: 'भारतीय ज्ञान भंडार', readExpl: 'सविस्तर विवरण वाचा',
        editionLabel: 'मराठी आवृत्ती', debated: 'चर्चेतील दावा' },
};

const ERA_ORDER = ['vedic', 'classical', 'medieval', 'modern'];
const ERA_INFO = {
  en: {
    vedic: { name: 'Vedic Era', range: 'c. 1500 – 600 BCE', blurb: 'The oldest stratum: the four Vedas, preserved orally, and the auxiliary disciplines built to guard them.' },
    classical: { name: 'Classical Era', range: 'c. 600 BCE – 800 CE', blurb: 'The great systematisation — Upaniṣads, the six darśanas, the epics, the śāstras, and the golden age of mathematics.' },
    medieval: { name: 'Medieval Era', range: 'c. 800 – 1800 CE', blurb: 'The devotional turn — Bhakti and the Vārkarī sants carry the tradition into every vernacular and every caste.' },
    modern: { name: 'Modern Era', range: '19th – 20th century', blurb: 'The long re-reading, under colonial rule and after — the corpus reclaimed, contested, and carried forward.' },
  },
  mr: {
    vedic: { name: 'वैदिक काल', range: 'इ.स.पू. सुमारे १५०० – ६००', blurb: 'सर्वात प्राचीन थर — चार वेद, मौखिक परंपरेने जपलेले, आणि त्यांच्या रक्षणासाठी उभी राहिलेली सहायक शास्त्रे.' },
    classical: { name: 'शास्त्रीय काल', range: 'इ.स.पू. ६०० — इ.स. ८००', blurb: 'महान सुसंघटन — उपनिषदे, सहा दर्शने, महाकाव्ये, शास्त्रे, आणि गणित-ज्योतिषाचा सुवर्णकाळ.' },
    medieval: { name: 'मध्ययुगीन काल', range: 'इ.स. ८०० – १८००', blurb: 'भक्तीचे पर्व — भक्ती व वारकरी संतांनी परंपरा प्रत्येक बोलीभाषेत आणि प्रत्येक जातीत नेली.' },
    modern: { name: 'आधुनिक काल', range: '१९ वे – २० वे शतक', blurb: 'वसाहतकाळात व त्यानंतर घडलेले प्रदीर्घ पुनर्वाचन — परंपरा पुन्हा आत्मसात, चर्चिली आणि पुढे नेली गेली.' },
  },
};

// ---------- bridging sentence pools ----------
const BRIDGE_EN = [
  (p, c) => `From ${p}, the corpus turns to ${c}.`,
  (p, c) => `Alongside ${p} stands ${c} — a different facet of the same concern.`,
  (p, c) => `Where ${p} leaves off, ${c} takes up the thread.`,
  (p, c) => `The next figure in this line is ${c}.`,
  (p, c) => `A companion piece to ${p} is ${c}.`,
  (p, c) => `Set beside ${p}, ${c} rounds out the picture.`,
  (p, c) => `Not far from ${p} in spirit is ${c}.`,
  (p, c) => `The chapter's next stop is ${c}.`,
];
const BRIDGE_MR = [
  (p, c) => `${p} नंतर, परंपरेचा ओघ ${c} कडे वळतो.`,
  (p, c) => `${p} च्या शेजारी ${c} उभे आहे — त्याच चिंतनाचे दुसरे रूप.`,
  (p, c) => `${p} जिथे थांबते, तिथून ${c} पुढे नेते.`,
  (p, c) => `या मालिकेतील पुढील टप्पा — ${c}.`,
  (p, c) => `${p} च्या जोडीने ${c} चित्र पूर्ण करते.`,
  (p, c) => `${p} च्या भावनेशी जवळीक साधणारे ${c}.`,
  (p, c) => `प्रकरणाचा पुढला थांबा — ${c}.`,
];
function bridge(lang, seedIdx, itemIdx, prevTitle, curTitle) {
  const pool = lang === 'mr' ? BRIDGE_MR : BRIDGE_EN;
  const fn = pool[(seedIdx * 3 + itemIdx) % pool.length];
  return `<p class="no-indent bridge">${fn(prevTitle, curTitle)}</p>`;
}

function atAGlance(list, lang) {
  if (!list || !list.length) return '';
  return `<p class="no-indent" style="font-style:italic;color:var(--ink-soft);font-size:.92rem;">${STR[lang].atGlance}: ${list.join(' &middot; ')}</p>`;
}
function shlokaBlock(op) {
  if (!op) return '';
  return `<div class="opening-shloka"><div class="deva">${esc(op.deva).replace(/\n/g, '<br/>')}</div><div class="trans">${esc(op.trans)}</div><div class="cite">${esc(op.cite)}</div></div>`;
}
function aspectsBlock(aspects) {
  if (!aspects || !aspects.length) return '';
  return `<div class="aspects">${aspects.map(a => {
    if (!a.name) return `<div class="aspect">${esc(a.desc)}</div>`;
    return `<div class="aspect"><span class="name">${esc(a.name)}</span>${a.deva ? ` <span class="deva" style="font-size:.85em;color:var(--ink-faint)">${a.deva}</span>` : ''} — ${esc(a.desc)}</div>`;
  }).join('')}</div>`;
}
function explanationParas(explanation) {
  if (!explanation || !explanation.length) return '';
  return explanation.map(p => `<p>${esc(p)}</p>`).join('');
}

// =====================================================================
// Deep per-item data for the nine dedicated sections (richer than
// SECTION_DETAILS — see kindle-book engineering notes). Each config
// entry maps its record's field names onto the generic item template.
// =====================================================================
const DETAIL_SECTIONS = {
  upanishads:        { record: 'UPANISHADS_DETAILS',  metaFields: ['vedaAssociation', 'versesCount', 'focus'],                    listFields: ['coreIdeas', 'concepts'] },
  darshanas:         { record: 'DARSHANAS_DETAILS',   metaFields: ['founder', 'coreText', 'epistemology', 'metaphysics', 'pairedSchool'], listFields: ['keyConcepts', 'majorWorks'] },
  agamas:            { record: 'AGAMAS_DETAILS',      metaFields: ['deity', 'texts', 'focus'],                                    listFields: ['subdivisions', 'concepts'] },
  itihasa:           { record: 'ITIHASA_DETAILS',     metaFields: ['author', 'verses', 'structure'], proseField: 'message',       listFields: ['chapters', 'concepts'] },
  'nastika-darshanas': { record: 'NASTIKA_DETAILS',   metaFields: ['founder', 'texts', 'epistemology', 'metaphysics'],            listFields: ['schools', 'concepts'] },
  puranas:           { record: 'PURANAS_DETAILS',     metaFields: ['deity', 'guna'],                                              listFields: ['textsList', 'concepts'] },
  upavedas:          { record: 'UPAVEDAS_DETAILS',    metaFields: ['vedaPair', 'texts', 'focus'],                                 listFields: ['branches', 'concepts'] },
  vedangas:          { record: 'VEDANGAS_DETAILS',    metaFields: ['limb', 'metaphor', 'authorityText', 'keyAuthor', 'scope'],    listFields: ['subdivisions', 'keyConcepts'] },
};

function detailRecordItems(sectionId, lang) {
  const cfg = DETAIL_SECTIONS[sectionId];
  const suffix = lang === 'mr' ? '_MR' : '';
  const record = D[cfg.record + suffix];
  return Object.values(record).map((d) => {
    const meta = cfg.metaFields.map(f => d[f]).filter(Boolean);
    const lists = cfg.listFields.flatMap(f => d[f] || []).map(entry =>
      entry.verses ? { ...entry, name: `${entry.name} (${entry.verses}${lang === 'mr' ? '' : ' verses'})` } : entry
    );
    const proseIntro = cfg.proseField && d[cfg.proseField] ? [d[cfg.proseField]] : [];
    return {
      id: d.id, title: d.title, deva: d.deva, epithet: null,
      metaList: meta, opening: d.verse || null,
      summary: proseIntro[0] || (d.explanation || [])[0] || '',
      explanation: proseIntro[0] ? (d.explanation || []) : (d.explanation || []).slice(1),
      aspects: lists,
    };
  });
}

// ---------- Sciences (list, not a record; has its own theMath blocks) ----------
function sciencesItems(lang) {
  const list = lang === 'mr' ? D.SCIENCES_MR : D.SCIENCES;
  return list.map(s => ({
    id: s.id, title: s.title, deva: s.deva, epithet: s.epithet,
    metaList: [s.era].filter(Boolean),
    opening: s.source ? { deva: s.source.text, trans: s.source.trans, cite: s.source.citation } : null,
    summary: s.tldr,
    explanation: [...(s.narrative || []), ...(s.theMath || []).flatMap(m => [`<strong>${esc(m.heading)}.</strong> ${esc((m.body || [])[0] || '')}`, ...((m.body || []).slice(1))])],
    aspects: null,
  }));
}

// ---------- Veda overview (opening verse, epithet, summary, presiding priest) —
//            transcribed from components/VedasPage.tsx, the live site's per-Veda
//            intro panel. The catalog data below (SHAKHAS_DATA etc.) only ever
//            held the recension-level detail, never this per-Veda opening. ----------
const VEDA_OVERVIEW = {
  en: {
    rig: { epithet: 'The veda of praise', meta: ['1,028 sūktas', '10 maṇḍalas', '10,552 ṛcas'],
      summary: 'The oldest surviving stratum of Indic thought — a collection of metrical hymns to the devas, preserved orally with a precision that astonished every philologist who later met it. Its language is older than Pāṇinian Sanskrit; its world is one of fire, dawn, water and the chariot.',
      opening: { deva: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥', trans: 'I praise Agni, household priest of the rite, the divine officiant — the invoker, dispenser of treasures.', cite: 'Ṛgveda · 1.1.1' },
      priests: 'Hotṛ (the recitant)' },
    yajur: { epithet: 'The veda of liturgy', meta: ['Two recensions', 'Śukla & Kṛṣṇa', 'Prose · verse'],
      summary: 'The handbook of the priest who handles the rite — the mantras arranged in the order of their use, with the prose passages (yajus) that direct the offering. It survives in two principal lines: the white (śukla), where mantra and commentary are kept apart, and the black (kṛṣṇa), where they are interleaved.',
      opening: { deva: 'इषे त्वोर्जे त्वा वायवस्थोपायवस्थ ।', trans: 'For sustenance I take you; for vigour I take you. You are of the winds; you are the goal of the winds.', cite: 'Vājasaneyi Saṃhitā · 1.1' },
      priests: 'Adhvaryu (the officiant)' },
    sama: { epithet: 'The veda of melody', meta: ['1,875 verses', '~95% from Ṛgveda', 'Earliest notation'],
      summary: 'A collection of Ṛgvedic verses set to chant — the earliest surviving system of musical notation in the world, and the ancestor of every later Indian classical scale. Its notation marks seven svaras, of which our sā re ga ma pa dha ni are the descendants.',
      opening: { deva: 'अग्न आ याहि वीतये ।', trans: 'Agni, come for the offering.', cite: 'Sāmaveda · 1.1.1' },
      priests: 'Udgātṛ (the chanter)' },
    atharva: { epithet: 'The veda of the householder', meta: ['730 hymns', '20 kāṇḍas', 'Domestic · medical'],
      summary: 'Long the most contested of the four — the "fourth Veda" admitted late into the canon, but in fact the oldest record we have of Indic medical, botanical and apotropaic knowledge. Every later āyurvedic tradition descends from it.',
      opening: { deva: 'ये त्रिषप्ताः परियन्ति विश्वा रूपाणि बिभ्रतः ।', trans: 'They who, three-times-seven, encompass all forms — may the lord of speech place their powers in me today.', cite: 'Atharvaveda · 1.1.1' },
      priests: 'Brahman (the overseer)' },
  },
  mr: {
    rig: { epithet: 'स्तुतीचा वेद', meta: ['१,०२८ सूक्ते', '१० मंडळे', '१०,५५२ ऋचा'],
      summary: 'भारतीय विचारसरणीचा सर्वात जुना थर — देवदेवतांच्या स्तुतीपर मंत्रांचे संकलन, जे तोंडपाठ करून हजारो वर्षे अचूकपणे टिकवून ठेवले गेले. याची भाषा पाणिनीय संस्कृतापेक्षा जुनी आहे; त्याचे जग यज्ञ, उषा, जल आणि रथाचे आहे.',
      opening: { deva: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥', trans: 'मी अग्नीची स्तुती करतो, जो यज्ञाचा मुख्य पुरोहित, देव आणि ऋत्विज आहे — जो मंत्रांचे पठण करणारा आणि रत्नांना धारण करणारा आहे.', cite: 'ऋग्वेद · १.१.१' },
      priests: 'होता (मंत्र पठण करणारा)' },
    yajur: { epithet: 'विधी आणि यज्ञाचा वेद', meta: ['दोन शाखा', 'शुक्ल आणि कृष्ण', 'गद्य आणि पद्य'],
      summary: 'यज्ञ करणाऱ्या पुरोहितांची नियमावली — मंत्रांची मांडणी विधींच्या क्रमानुसार केली आहे. याचे दोन मुख्य भाग आहेत: शुक्ल यजुर्वेद (जिथे मंत्र आणि भाष्य वेगळे आहेत) आणि कृष्ण यजुर्वेद (जिथे ते एकत्र आहेत).',
      opening: { deva: 'इषे त्वोर्जे त्वा वायवस्थोपायवस्थ ।', trans: 'अन्नासाठी मी तुला स्वीकारतो; उर्जेसाठी मी तुला स्वीकारतो. तुम्ही वायू आहात; तुम्ही वायूचे ध्येय आहात.', cite: 'वाजसनेयी संहिता · १.१' },
      priests: 'अध्वर्यू (विधी करणारा पुरोहित)' },
    sama: { epithet: 'संगीताचा वेद', meta: ['१,८७५ श्लोक', '९५% ऋग्वेदातून', 'जगातील पहिली स्वर पद्धत'],
      summary: 'ऋग्वेदातील मंत्रांना स्वरबद्ध करून गाण्याची कला — जगातील सर्वात जुनी संगीत स्वर पद्धती. भारतीय शास्त्रीय संगीताचे सा, रे, ग, म हे स्वर याच वेदातून आले आहेत.',
      opening: { deva: 'अग्न आ याहि वीतये ।', trans: 'हे अग्नी, यज्ञातील भाग स्वीकारण्यासाठी या.', cite: 'सामवेद · १.१.१' },
      priests: 'उद्गाता (गायन करणारा पुरोहित)' },
    atharva: { epithet: 'गृहस्थाचा वेद', meta: ['७३० सूक्ते', '२० कांडे', 'गृहस्थ व औषधी नियम'],
      summary: 'कौटुंबिक आयुष्य, औषधे आणि उपचारांचा वेद. वेदांमध्ये याचा उशिरा समावेश झाला असला तरी, प्राचीन वैद्यकीय विज्ञानाचा (आयुर्वेद) हाच मुख्य पाया आहे.',
      opening: { deva: 'ये त्रिषप्ताः परियन्ति विश्वा रूपाणि बिभ्रतः ।', trans: 'जे तीन-गुणिले-सात, सर्व रूपांमध्ये पसरलेले आहेत — त्या वाक्पतीने (वाणीच्या देवाने) आज त्यांची शक्ती माझ्या मनात स्थापित करावी.', cite: 'अथर्ववेद · १.१.१' },
      priests: 'ब्रह्मा (यज्ञाचा मुख्य रक्षक)' },
  },
};
const PRIEST_LABEL = { en: 'Presiding priest', mr: 'मुख्य पुरोहित' };

// ---------- Vedas chapter (no SECTION_DETAILS entry) — full detailing:
//            every Śākhā / Brāhmaṇa / Āraṇyaka / Upaniṣad gets its own
//            titled sub-block, plus key hymns/teachings with verses.
//            Rendered with the SAME .aspects/.aspect markup used for every
//            other chapter's sub-lists (concepts, key works, etc.), and
//            deliberately limited to the same small set of type treatments
//            used everywhere else in the book — body font for names and
//            prose, display font only for real headings, deva font only
//            for Devanāgarī, mono only for citations (never for descriptive
//            tags — that badge-cluster look had no precedent elsewhere and
//            is what made this chapter read as font/size-inconsistent). ----------
function vedaSubBlock(vt, lang) {
  const status = lang === 'mr' ? vt.statusDeva : vt.status;
  const desc = lang === 'mr' ? vt.descDeva : vt.desc;
  const devaSpan = vt.deva ? ` <span class="deva" style="font-size:.85em;color:var(--ink-faint)">${esc(vt.deva)}</span>` : '';
  return `<div class="aspect"><span class="name">${esc(vt.name)}</span>${devaSpan} — ${esc(desc)}${status ? ` (${esc(status)})` : ''}</div>`;
}
function vedaTeachingBlock(t, lang) {
  const name = lang === 'mr' ? t.nameDeva : t.name;
  const citation = lang === 'mr' ? t.citationDeva : t.citation;
  const summary = lang === 'mr' ? t.summaryDeva : t.summary;
  const verseHTML = t.verse ? shlokaBlock(t.verse) : '';
  return `<div class="aspect"><span class="name">${esc(name)}</span> <span class="mono">${esc(citation)}</span> — ${esc(summary)}</div>${verseHTML}`;
}
function vedaLayer(label, catalog, teachings, teachingsLabel, lang) {
  if (!catalog || !catalog.length) return '';
  let html = `<h3 class="veda-layer-title">${esc(label)}</h3><div class="aspects">${catalog.map(c => vedaSubBlock(c, lang)).join('')}</div>`;
  if (teachings && teachings.length) {
    html += `<p class="no-indent veda-subhead">${esc(teachingsLabel)}</p><div class="aspects">${teachings.map(t => vedaTeachingBlock(t, lang)).join('')}</div>`;
  }
  return `<div class="veda-layer">${html}</div>`;
}
function vedasItems(lang) {
  const names = { rig: ['Ṛgveda', 'ऋग्वेद'], yajur: ['Yajurveda', 'यजुर्वेद'], sama: ['Sāmaveda', 'सामवेद'], atharva: ['Atharvaveda', 'अथर्ववेद'] };
  const layerLabel = lang === 'mr'
    ? { samhita: 'संहिता — मंत्रसंचय (शाखा)', brahmana: 'ब्राह्मण — यज्ञविधी-भाष्य', aranyaka: 'आरण्यक — वन-चिंतन', upanishad: 'या वेदातील उपनिषदे' }
    : { samhita: 'Saṃhitā — the recensions (śākhās)', brahmana: 'Brāhmaṇa — ritual exposition', aranyaka: 'Āraṇyaka — forest meditations', upanishad: 'Upaniṣads belonging to this Veda' };
  const hymnsLabel = lang === 'mr' ? 'प्रमुख सूक्ते' : 'Key Hymns';
  const teachLabel = lang === 'mr' ? 'प्रमुख उपदेश' : 'Key Teachings';
  const order = ['rig', 'yajur', 'sama', 'atharva'];
  return order.map((key) => {
    const V = D.VEDAS_ITEMS;
    const [title, deva] = names[key];
    const ov = VEDA_OVERVIEW[lang][key];
    const shakhas = V.SHAKHAS_DATA[key] || [];
    const meta = [...ov.meta, `${PRIEST_LABEL[lang]}: ${ov.priests}`];
    const layers = [
      vedaLayer(layerLabel.samhita, shakhas, V.SUKTAS_DATA[key], hymnsLabel, lang),
      vedaLayer(layerLabel.brahmana, V.BRAHMANAS_DATA[key], V.BRAHMANAS_TEACHINGS_DATA[key], teachLabel, lang),
      vedaLayer(layerLabel.aranyaka, V.ARANYAKAS_DATA[key], V.ARANYAKAS_TEACHINGS_DATA[key], teachLabel, lang),
      vedaLayer(layerLabel.upanishad, V.UPANISHADS_DATA[key], V.UPANISHADS_TEACHINGS_DATA[key], teachLabel, lang),
    ].join('');
    return {
      id: key, title, deva, epithet: ov.epithet, metaList: meta,
      opening: ov.opening, summary: ov.summary, explanationHTML: layers, explanation: null, aspects: null,
    };
  });
}

// ---------- Śruti / Smṛti primer (shruti-smriti chapter has no items[] on the
//            site — the content lives entirely as hardcoded JSX in
//            components/SectionDetail.tsx's PrimerLayout(), transcribed here). ----------
const SHRUTI_SMRITI = {
  en: {
    columns: [
      { title: 'Śruti', deva: 'श्रुति', gloss: '"That which was heard"',
        intro: 'The eternal body of knowledge that the ṛṣis received in deep contemplation — held by tradition to be apauruṣeya, unauthored, eternally co-present with reality and merely received by ṛṣis. Receives the highest canonical authority.',
        points: [
          { name: 'The four Vedas', desc: 'Ṛg, Yajur, Sāma, Atharva, including their Saṃhitā, Brāhmaṇa and Āraṇyaka strata.' },
          { name: 'The principal Upaniṣads', desc: 'closing dialogues of each Veda.' },
          { name: 'Authority', desc: 'final. Where śruti and any other source disagree, śruti wins.' },
        ] },
      { title: 'Smṛti', deva: 'स्मृति', gloss: '"That which is remembered"',
        intro: 'Composed by named authors, drawing on and applying śruti. Includes everything that organises the practical life of the tradition — its grammar, its medicine, its epics, its codes of conduct, its philosophy.',
        points: [
          { name: 'The six Vedāṅgas', desc: 'phonetics, ritual, grammar, etymology, prosody, astronomy.' },
          { name: 'The four Upavedas', desc: 'Āyurveda, Dhanurveda, Gāndharvaveda, Sthāpatyaveda.' },
          { name: 'Itihāsa, Purāṇas, Darśana-sūtras, Dharma-śāstras', desc: 'the rest of the canon.' },
          { name: 'Authority', desc: 'derived. Holds, except where contradicted by śruti.' },
        ] },
    ],
    tableTitle: 'Śruti and Smṛti, compared',
    rows: [
      ['Status', 'Unauthored · eternal', 'Human authorship · datable'],
      ['Sanskrit name', '"That which is heard" (श्रुति)', '"That which is remembered" (स्मृति)'],
      ['Comprises', '4 Vedas · 10 (108) Upaniṣads', 'Vedāṅgas · Upavedas · Itihāsa · Purāṇas · Darśanas · Dharma-śāstras'],
      ['Authority', 'Final (apauruṣeya)', 'Derived (pauruṣeya)'],
      ['On disagreement', 'Takes precedence', 'Gives way'],
      ['Mode of preservation', 'Recited, preserved by ear', 'Read, composed, copied'],
    ],
  },
  mr: {
    columns: [
      { title: 'श्रुति', deva: 'श्रुति', gloss: '"जे ऐकले गेले"',
        intro: 'ज्ञानाचा तो सनातन स्रोत जो ऋषींना ध्यानस्थ अवस्थेत साक्षात्कारातून प्राप्त झाला — ज्याला परंपरा अपौरुषेय (मानवाने न रचलेले) मानते. याला सर्वोच्च अधिकार आहे.',
        points: [
          { name: 'चार वेद', desc: 'ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद, आणि त्यांचे संहिता, ब्राह्मण व आरण्यक स्तर.' },
          { name: 'मुख्य उपनिषदे', desc: 'प्रत्येक वेदाच्या शेवटी होणारे मुख्य संवाद.' },
          { name: 'अधिकार', desc: 'अंतिम. जिथे श्रुति आणि इतर स्रोतांमध्ये मतभेद होतात, तिथे श्रुतींचे म्हणणे श्रेष्ठ मानले जाते.' },
        ] },
      { title: 'स्मृति', deva: 'स्मृति', gloss: '"जे आठवले गेले"',
        intro: 'विशिष्ट लेखकांनी रचलेले ग्रंथ, जे श्रुतींचे संदर्भ घेऊन बनवले गेले आहेत. यात मानवी जीवनाचे नियोजन करणारे सर्व ग्रंथ — व्याकरण, वैद्यकशास्त्र, महाकाव्ये, आचारसंहिता आणि दर्शने समाविष्ट आहेत.',
        points: [
          { name: 'सहा वेदांगे', desc: 'शिक्षा, कल्प, व्याकरण, निरुक्त, छंद, ज्योतिष.' },
          { name: 'चार उपवेद', desc: 'आयुर्वेद, धनुर्वेद, गांधर्ववेद, स्थापत्यवेद.' },
          { name: 'इतिहास, पुराणे, दर्शन-सूत्रे, धर्मशास्त्रे', desc: 'इतर सर्व आदरणीय ग्रंथ.' },
          { name: 'अधिकार', desc: 'दुय्यम. श्रुतींशी सुसंगत असेपर्यंतच स्मृतींचे नियम ग्राह्य धरले जातात.' },
        ] },
    ],
    tableTitle: 'श्रुति आणि स्मृति — तुलना',
    rows: [
      ['स्वरूप', 'अपौरुषेय · सनातन', 'मानवी निर्मिती · ऐतिहासिक'],
      ['शाब्दिक अर्थ', '"जे ऐकले गेले" (श्रुति)', '"जे आठवले गेले" (स्मृति)'],
      ['समाविष्ट ग्रंथ', '४ वेद · १० (१०८) उपनिषदे', 'वेदांगे · उपवेद · इतिहास · पुराणे · दर्शने · धर्मशास्त्रे'],
      ['अधिकार श्रेणी', 'सर्वोच्च (अंतिम)', 'दुय्यम (सापेक्ष)'],
      ['मतभेदाच्या वेळी', 'श्रेष्ठ मानले जाते', 'मार्ग सोडून देते'],
      ['जतन पद्धत', 'मौखिक पठण, कानाने ऐकून जतन', 'वाचन, लेखन, प्रत तयार करणे'],
    ],
  },
};
function shrutiSmritiCompareHTML(lang) {
  const S = SHRUTI_SMRITI[lang];
  const rows = S.rows.map(([label, a, b]) => `
    <div class="compare-row">
      <div class="compare-label">${esc(label)}</div>
      <div class="compare-val"><span class="compare-tag">Śruti</span>${esc(a)}</div>
      <div class="compare-val"><span class="compare-tag">Smṛti</span>${esc(b)}</div>
    </div>`).join('');
  return `<div class="compare-table"><div class="compare-title">${esc(S.tableTitle)}</div>${rows}</div>`;
}
function shrutiSmritiItems(lang) {
  const S = SHRUTI_SMRITI[lang];
  return S.columns.map((col, i) => ({
    id: col.title.toLowerCase(), title: col.title, deva: col.deva, epithet: col.gloss,
    metaList: [], opening: null, summary: col.intro, explanation: null,
    aspects: col.points.map(p => ({ name: p.name, desc: p.desc })),
    explanationHTML: i === S.columns.length - 1 ? shrutiSmritiCompareHTML(lang) : '',
  }));
}

// ---------- verse footer pool ----------
function buildVersePool() {
  const pool = [];
  for (const m of D.MAHAVAKYAS) pool.push({ kind: 'mv', id: m.id, deva: m.deva, source: m.source,
    meaningEn: m.meaningEn, explanationEn: m.explanationEn, meaningMr: m.meaningMr, explanationMr: m.explanationMr });
  for (const s of D.SUBHASHITS) pool.push({ kind: 'sb', id: s.id, deva: s.deva, source: s.source,
    meaningEn: s.meaningEn, explanationEn: s.explanationEn, meaningMr: s.meaningMr, explanationMr: s.explanationMr });
  return pool;
}
const VERSE_POOL = buildVersePool();
function pickVerse(chapterGlobalIdx) {
  const idx = (chapterGlobalIdx * 47 + 11) % VERSE_POOL.length;
  return VERSE_POOL[idx];
}
function verseFooter(v, lang) {
  const meaning = lang === 'mr' ? v.meaningMr : v.meaningEn;
  return `
  <div class="verse-footer">
    <div class="vf-deva">${esc(v.deva).replace(/\n/g, '<br/>')}</div>
    <div class="vf-trans">${esc(meaning)}</div>
    <div class="vf-source">${esc(v.source)}</div>
  </div>`;
}

// ---------- chapter ----------
function chapterHTML(sectionId, chapNoInPart, chapGlobalIdx, lang, accentVar, partRoman) {
  const SECTIONS = lang === 'mr' ? D.SECTIONS_MR : D.SECTIONS;
  const secMeta = SECTIONS.find(s => s.id === sectionId);
  const DETAILS = lang === 'mr' ? D.SECTION_DETAILS_MR : D.SECTION_DETAILS;
  const overview = DETAILS[sectionId];
  const title = overview?.title || secMeta?.title || sectionId;
  const deva = overview?.deva || secMeta?.deva || '';
  const lede = overview?.lede || secMeta?.blurb || '';

  let items;
  if (sectionId === 'vedas') items = vedasItems(lang);
  else if (sectionId === 'shruti-smriti') items = shrutiSmritiItems(lang);
  else if (DETAIL_SECTIONS[sectionId]) items = detailRecordItems(sectionId, lang);
  else if (sectionId === 'sciences') items = sciencesItems(lang);
  else items = (overview?.items || []).map(it => ({
    id: it.id, title: it.title, deva: it.deva, epithet: it.epithet,
    metaList: it.meta && it.meta.length ? it.meta : (it.facets || []),
    opening: it.opening, summary: it.summary, explanation: it.explanation, aspects: (it.aspects || []),
  }));

  const itemsHTML = items.map((item, i) => {
    const b = i > 0 ? bridge(lang, chapGlobalIdx, i, items[i - 1].title, item.title) : '';
    return `
    <div class="item${i === 0 ? ' dropcap' : ''}">
      ${b}
      <h2 class="item-title">${esc(item.title)} <span class="deva" style="font-size:.75em;color:var(--ink-faint)">${esc(item.deva)}</span></h2>
      ${item.epithet ? `<div class="item-epithet">${esc(item.epithet)}</div>` : ''}
      ${atAGlance(item.metaList, lang)}
      ${shlokaBlock(item.opening)}
      <p${i === 0 ? '' : ' class="no-indent"'}>${esc(item.summary)}</p>
      ${explanationParas(item.explanation)}
      ${aspectsBlock(item.aspects)}
      ${item.explanationHTML || ''}
    </div>`;
  }).join('\n');

  const eraInfo = ERA_INFO[lang][secMeta?.era] || null;
  const dateline = eraInfo ? `<div class="chapter-dateline">${esc(eraInfo.name)} &middot; ${esc(eraInfo.range)}</div>` : '';

  const verse = pickVerse(chapGlobalIdx);
  return `
  <section class="chapter" style="--accent:var(--${accentVar})" id="ch-${sectionId}">
    <div class="running-head">${STR[lang].part} ${partRoman}</div>
    <div class="chapter-no">${STR[lang].chapter} ${chapNoInPart}</div>
    <h1 class="chapter-title">${esc(title)}</h1>
    <div class="chapter-deva">${esc(deva)}</div>
    ${dateline}
    <img class="chapter-image" src="assets/images/corpus-${sectionId}.jpg" alt="${esc(title)}"/>
    <p class="chapter-lede">${esc(lede)}</p>
    ${itemsHTML}
    ${verseFooter(verse, lang)}
  </section>`;
}

// ---------- part divider ----------
function partDividerHTML(part, partIdx, lang) {
  const JOURNEYS = lang === 'mr' ? D.JOURNEYS_MR : D.JOURNEYS;
  const j = part.journeyId ? JOURNEYS.find(x => x.id === part.journeyId) : null;
  const info = j ? { title: j.title, deva: j.deva, tagline: j.tagline, audience: j.audience }
                 : MODERN_MIND[lang];
  const DETAILS = lang === 'mr' ? D.SECTION_DETAILS_MR : D.SECTION_DETAILS;
  const SECTIONS = lang === 'mr' ? D.SECTIONS_MR : D.SECTIONS;
  const chapterTitles = part.sections.map(sid => DETAILS[sid]?.title || SECTIONS.find(s => s.id === sid)?.title || sid);
  const linesHTML = chapterTitles.map(t => `<div class="part-contents-line">${esc(t)}</div>`).join('');
  return `
  <section class="part-divider" style="--accent:var(--${part.accent})">
    <div class="part-no">${STR[lang].part} ${ROMAN[partIdx]}</div>
    <h2 class="part-title">${esc(info.title)}</h2>
    <div class="part-deva">${esc(info.deva)}</div>
    <p class="part-tagline">${esc(info.tagline)}</p>
    <div class="part-audience">${esc(info.audience)}</div>
    <div class="part-contents"><span class="label">${STR[lang].inThisPart}</span>${linesHTML}</div>
  </section>`;
}

// ---------- preface ----------
function prefaceHTML(lang) {
  const I = lang === 'mr' ? D.INTRO_MR : D.INTRO;
  const sections = I.sections.map(s => `
    <div class="preface-section">
      <h3>${esc(s.title)}</h3>
      ${s.paragraphs.map((p, i) => `<p${i === 0 ? ' class="no-indent"' : ''}>${p}</p>`).join('')}
      ${s.pullQuote ? `<p class="pull-quote">&ldquo;${esc(s.pullQuote)}&rdquo;</p>` : ''}
    </div>`).join('\n');
  const threads = I.conclusion.threads.map(t => `<div class="thread"><span class="label">${esc(t.label)}</span> ${t.text}</div>`).join('');
  return `
  <section class="preface dropcap" id="preface">
    <div class="eyebrow">${STR[lang].preface}</div>
    <h1 class="title">${esc(I.title)}</h1>
    <p class="subtitle">${esc(I.subtitle)}</p>
    <div class="lede">${I.lede.map((p, i) => `<p${i === 0 ? ' class="no-indent"' : ''}>${p}</p>`).join('')}</div>
    ${sections}
    <h3>${esc(I.conclusion.title)}</h3>
    <p class="no-indent">${esc(I.conclusion.intro)}</p>
    ${threads}
    <p class="no-indent" style="margin-top:1.4em;">${esc(I.closing)}</p>
  </section>`;
}

// ---------- timeline (front matter) ----------
function timelineHTML(lang) {
  const rows = ERA_ORDER.map(era => {
    const info = ERA_INFO[lang][era];
    return `<div class="timeline-era"><span class="era-name">${esc(info.name)}</span><span class="era-range">${esc(info.range)}</span><p class="no-indent" style="margin-top:.4em;">${esc(info.blurb)}</p></div>`;
  }).join('\n');
  return `<section id="timeline"><h1 style="text-align:center;">${STR[lang].timeline}</h1>${rows}</section>`;
}

// ---------- concept cross-references (origin + references) ----------
function conceptXrefs(c, lang) {
  const items = [c.detail?.origin, ...(c.detail?.references || [])].filter(Boolean);
  if (!items.length) return '';
  const label = lang === 'mr' ? 'हा विचार जिथे आढळतो' : 'Where this appears in the corpus';
  const rows = items.map(x => `<div class="concept-xref"><span class="label">${esc(x.label)}.</span> ${esc(x.explainer)}</div>`).join('');
  return `<div class="concept-xref-head">${label}</div>${rows}`;
}

// ---------- appendix A: concepts ----------
function appendixAHTML(lang) {
  const C = lang === 'mr' ? D.CONCEPTS_MR : D.CONCEPTS;
  const domainOrder = ['order', 'ethics', 'liberation', 'mind', 'knowledge', 'heterodox', 'aesthetics'];
  const domainLabel = {
    en: { order: 'Cosmic & Metaphysical Order', ethics: 'Ethics', liberation: 'Liberation', mind: 'Mind & Nature', knowledge: 'Knowledge', heterodox: 'Heterodox Concepts', aesthetics: 'Aesthetics' },
    mr: { order: 'वैश्विक व तात्त्विक व्यवस्था', ethics: 'नीतिशास्त्र', liberation: 'मोक्ष', mind: 'मन व प्रकृती', knowledge: 'ज्ञान', heterodox: 'नास्तिक संकल्पना', aesthetics: 'सौंदर्यशास्त्र' },
  }[lang];
  const nonEmptyDomains = domainOrder.filter(dom => C.some(c => c.domain === dom));
  const groups = nonEmptyDomains.map((dom, gi) => {
    const entries = C.filter(c => c.domain === dom);
    const entriesHTML = entries.map(c => `
      <div class="appendix-entry">
        <span class="seal">${esc(c.seal)}</span>
        <h3>${esc(c.name)} <span class="deva" style="font-size:.75em;color:var(--ink-faint)">${esc(c.deva)}</span></h3>
        <div class="gloss">${esc(c.gloss)}</div>
        <p class="no-indent">${esc(c.detail?.intro || c.blurb)}</p>
        ${c.detail?.aspects?.length ? aspectsBlock(c.detail.aspects.map(a => ({ name: '', desc: a }))) : ''}
        ${c.detail?.significance ? `<p class="no-indent">${esc(c.detail.significance)}</p>` : ''}
        ${conceptXrefs(c, lang)}
        <div class="tags">${(c.tags || []).map(t => `<span>${esc(t)}</span>`).join('')}</div>
      </div>`).join('');
    return `<h2 class="appendix-group${gi === 0 ? ' appendix-group-first' : ''}">${esc(domainLabel[dom])}</h2>${entriesHTML}`;
  }).join('\n');
  return `<section id="appendix-a"><h1 style="text-align:center;">${STR[lang].appendixA}</h1>${groups}</section>`;
}

// ---------- appendix B: contributors ----------
function appendixBHTML(lang) {
  const K = lang === 'mr' ? D.CONTRIBUTORS_MR : D.CONTRIBUTORS;
  const eraLabel = { en: { vedic: 'Vedic Era', classical: 'Classical Era', medieval: 'Medieval Era', modern: 'Modern Era' },
    mr: { vedic: 'वैदिक काल', classical: 'शास्त्रीय काल', medieval: 'मध्ययुगीन काल', modern: 'आधुनिक काल' } }[lang];
  const nonEmptyEras = ERA_ORDER.filter(era => K.some(c => c.era === era));
  const groups = nonEmptyEras.map((era, gi) => {
    const entries = K.filter(c => c.era === era);
    const entriesHTML = entries.map(c => `
      <div class="appendix-entry">
        <span class="seal">${esc(c.seal)}</span>
        <h3>${esc(c.name)} <span class="deva" style="font-size:.75em;color:var(--ink-faint)">${esc(c.deva)}</span></h3>
        <div class="gloss">${esc(c.epithet || '')} &middot; ${esc(c.dates)}</div>
        <p class="no-indent">${esc(c.detail?.intro || c.blurb)}</p>
        ${c.detail?.contributions?.length ? aspectsBlock(c.detail.contributions.map(a => ({ name: '', desc: a }))) : ''}
        ${c.detail?.legacy ? `<p class="no-indent">${esc(c.detail.legacy)}</p>` : ''}
        <div class="tags">${(c.works || []).map(t => `<span>${esc(t)}</span>`).join('')}</div>
      </div>`).join('');
    return `<h2 class="appendix-group${gi === 0 ? ' appendix-group-first' : ''}">${esc(eraLabel[era])}</h2>${entriesHTML}`;
  }).join('\n');
  return `<section id="appendix-b"><h1 style="text-align:center;">${STR[lang].appendixB}</h1>${groups}</section>`;
}

// ---------- appendix C: living knowledge ----------
function appendixCHTML(lang) {
  const items = lang === 'mr' ? D.LIVING_KNOWLEDGE_MR : D.LIVING_KNOWLEDGE;
  const domains = lang === 'mr' ? D.LK_DOMAIN_META_MR : D.LK_DOMAIN_META;
  const nonEmptyDomains = domains.filter(dom => items.some(it => it.domain === dom.id));
  const groups = nonEmptyDomains.map((dom, gi) => {
    const entries = items.filter(it => it.domain === dom.id);
    const entriesHTML = entries.map(it => `
      <div class="lk-item">
        <span class="lk-title">${esc(it.name)}</span> <span class="deva" style="font-size:.8em;color:var(--ink-faint)">${esc(it.deva)}</span>
        ${it.debated ? `<span class="lk-debated">${STR[lang].debated}</span>` : ''}
        <div class="lk-when">${esc(it.when)}</div>
        <p class="no-indent">${esc(it.blurb)}</p>
        <p class="no-indent">${esc(it.what)} ${esc(it.how)}</p>
      </div>`).join('');
    return `<div class="lk-domain-head${gi === 0 ? ' lk-domain-head-first' : ''}"><div class="lk-name">${esc(dom.label)}</div><div class="lk-deva">${esc(dom.deva || '')}</div></div>${entriesHTML}`;
  }).join('\n');
  return `<section id="appendix-c"><h1 style="text-align:center;">${STR[lang].appendixC}</h1>${groups}</section>`;
}

// ---------- back matter: verse explanations, in order of first appearance ----------
function backMatterHTML(lang, usedVerses) {
  const entries = usedVerses.map(v => {
    const anchor = `vf-${v.kind}-${v.id}`;
    const explanation = lang === 'mr' ? v.explanationMr : v.explanationEn;
    const meaning = lang === 'mr' ? v.meaningMr : v.meaningEn;
    return `
    <div class="appendix-entry" id="${anchor}">
      <div class="deva" style="color:var(--maroon);font-size:1.05rem;">${esc(v.deva).replace(/\n/g, '<br/>')}</div>
      <div class="gloss">${esc(meaning)}</div>
      <div class="mono" style="margin-bottom:.5em;">${esc(v.source)}</div>
      ${esc(explanation).split('\n\n').map(p => `<p class="no-indent">${p}</p>`).join('')}
    </div>`;
  }).join('\n');
  return `<section id="back-matter"><h1 style="text-align:center;">${STR[lang].backmatter}</h1>${entries}</section>`;
}

function colophonHTML(lang) {
  const en = `
    <p class="no-indent">Bhāratīya Jñāna Bhaṇḍāra is compiled by Vivek Sovani from the open digital archive at
    <em>vivek-sovani.github.io/bharatiy-gyan-bhandar</em>, licensed CC BY-SA 4.0. All copy is original synthesis
    intended for an educational reader.</p>
    <p class="no-indent">This edition was assembled from the site's own source content — section summaries,
    opening ślokas, deep per-text detail pages, concept and contributor entries, the Living Knowledge collection,
    and the Mahāvākya and Subhāṣita verses — reflowed for continuous reading, with connective prose added between
    entries within each chapter.</p>
    <p class="no-indent">Contact: vivek.sovani@gmail.com</p>`;
  const mr = `
    <p class="no-indent">भारतीय ज्ञान भंडार हा ग्रंथ विवेक सोवनी यांनी <em>vivek-sovani.github.io/bharatiy-gyan-bhandar</em>
    येथील मुक्त डिजिटल संग्रहातून संकलित केला आहे. हा संग्रह CC BY-SA 4.0 अंतर्गत उपलब्ध आहे.</p>
    <p class="no-indent">ही आवृत्ती संकेतस्थळाच्या मूळ मराठी मजकुरातून — विभाग-सारांश, प्रारंभिक श्लोक, सविस्तर तपशील-पाने,
    संकल्पना व योगदानकर्त्यांच्या नोंदी, जिवंत ज्ञानवारसा संग्रह, आणि महावाक्य व सुभाषित संग्रहातून — निरंतर वाचनासाठी
    पुनर्रचित करण्यात आली आहे.</p>
    <p class="no-indent">संपर्क: vivek.sovani@gmail.com</p>`;
  return `<section id="colophon"><h1 style="text-align:center;">${STR[lang].colophon}</h1>${lang === 'mr' ? mr : en}</section>`;
}

// ---------- title page ----------
function titlePageHTML(lang) {
  return `
  <section class="cover">
    <div class="deva-title">भारतीय ज्ञान भंडार</div>
    <h1 class="title">Bhāratīya Jñāna Bhaṇḍāra</h1>
    <p class="subtitle">${lang === 'mr' ? 'भारतीय मनाच्या सात वाटा — वेदांपासून आधुनिक युगापर्यंत' : 'Seven Journeys Through the Indic Mind — from the Vedas to the Modern Age'}</p>
    <div class="byline">Compiled by Vivek Sovani</div>
    <div class="edition-badge">${STR[lang].editionLabel}</div>
  </section>`;
}

function tocLine(href, label) {
  return `<div class="toc-line"><a href="${href}">${esc(label)}</a></div>`;
}
function tocHTML(lang) {
  const rows = PARTS.map((part, pi) => {
    const DETAILS = lang === 'mr' ? D.SECTION_DETAILS_MR : D.SECTION_DETAILS;
    const SECTIONS = lang === 'mr' ? D.SECTIONS_MR : D.SECTIONS;
    const chNames = part.sections.map(sid =>
      tocLine(`#ch-${sid}`, DETAILS[sid]?.title || SECTIONS.find(s => s.id === sid)?.title || sid)
    ).join('');
    const JOURNEYS = lang === 'mr' ? D.JOURNEYS_MR : D.JOURNEYS;
    const j = part.journeyId ? JOURNEYS.find(x => x.id === part.journeyId) : null;
    const title = j ? j.title : MODERN_MIND[lang].title;
    return `<h3 class="toc-part-head">${STR[lang].part} ${ROMAN[pi]} — ${esc(title)}</h3><div class="toc-list">${chNames}</div>`;
  }).join('\n');
  return `<section id="toc"><h1 style="text-align:center;">${STR[lang].toc}</h1>
    <div class="toc-list">${tocLine('#timeline', STR[lang].timeline)}${tocLine('#preface', STR[lang].preface)}</div>
    ${rows}
    <div class="toc-list">
      ${tocLine('#appendix-a', STR[lang].appendixA)}
      ${tocLine('#appendix-b', STR[lang].appendixB)}
      ${tocLine('#appendix-c', STR[lang].appendixC)}
    </div>
  </section>`;
}

// ---------- full build ----------
function buildLang(lang) {
  const usedVerses = [];
  let globalIdx = 0;
  const partsHTML = PARTS.map((part, pi) => {
    const divider = partDividerHTML(part, pi, lang);
    const chapters = part.sections.map((sid, ci) => {
      const html = chapterHTML(sid, ci + 1, globalIdx, lang, part.accent, ROMAN[pi]);
      usedVerses.push(pickVerse(globalIdx));
      globalIdx++;
      return html;
    }).join('\n');
    return divider + chapters;
  }).join('\n');

  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8"/>
<title>${STR[lang].frontTitle}</title>
<link rel="stylesheet" href="assets/theme.css"/>
</head>
<body lang="${lang}">
${titlePageHTML(lang)}
${tocHTML(lang)}
${timelineHTML(lang)}
${prefaceHTML(lang)}
${partsHTML}
${appendixAHTML(lang)}
${appendixBHTML(lang)}
${appendixCHTML(lang)}
${colophonHTML(lang)}
</body>
</html>`;

  mkdirSync('../build', { recursive: true });
  writeFileSync(`../build/manuscript-${lang}.html`, html);
  console.log(`wrote ../build/manuscript-${lang}.html (${(html.length / 1e6).toFixed(2)} MB, ${usedVerses.length} chapters)`);
}

const targetLangs = process.argv[2] === 'all' ? ['en', 'mr'] : ['en'];
targetLangs.forEach(buildLang);
