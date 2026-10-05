// Sample data for the section explorer (Vedas first). Years are approximate scholarly
// estimates (negative = BCE); text names and descriptions come from vedasData.ts and
// seers from contributors-data.ts wherever an entry already exists there.

export type StratumKey = 'samhita' | 'brahmana' | 'aranyaka' | 'upanishad';

export type ExplorerSeer = {
  id: string;
  year: number;
  contributorId?: string;
  name?: string;
  deva?: string;
  seal?: string;
  note?: string;
};

export type ExplorerItem = {
  id: 'rig' | 'yajur' | 'sama' | 'atharva';
  accent: string;
  seal: string;
  name: string;
  deva: string;
  blurb: string;
  span: [number, number];
  strata: { key: StratumKey; a: number; b: number }[];
  seers: ExplorerSeer[];
  ideas: string[];
};

export const TIMELINE_RANGE: [number, number] = [-1600, -300];

export const STRATUM_LABEL: Record<StratumKey, { en: string; deva: string; role: string }> = {
  samhita: { en: 'Saṃhitā', deva: 'संहिता', role: 'Hymns and formulas' },
  brahmana: { en: 'Brāhmaṇa', deva: 'ब्राह्मण', role: 'Ritual exposition' },
  aranyaka: { en: 'Āraṇyaka', deva: 'आरण्यक', role: 'Forest texts' },
  upanishad: { en: 'Upaniṣad', deva: 'उपनिषद्', role: 'Inquiry into the self' },
};

export const VEDAS_EXPLORER: ExplorerItem[] = [
  {
    id: 'rig',
    accent: 'var(--ac-knowledge)',
    seal: 'ऋ',
    name: 'Ṛgveda',
    deva: 'ऋग्वेद',
    blurb: 'The oldest stratum: hymns of praise to the powers of nature and the cosmos, preserved by exact oral transmission.',
    span: [-1500, -500],
    strata: [
      { key: 'samhita', a: -1500, b: -1000 },
      { key: 'brahmana', a: -1000, b: -800 },
      { key: 'aranyaka', a: -800, b: -600 },
      { key: 'upanishad', a: -800, b: -500 },
    ],
    seers: [
      { id: 'vasishtha', year: -1300, contributorId: 'vasishtha' },
      { id: 'vishvamitra', year: -1300, contributorId: 'vishvamitra' },
      { id: 'bharadvaja', year: -1250, contributorId: 'bharadvaja' },
      { id: 'agastya', year: -1200, contributorId: 'agastya' },
    ],
    ideas: ['Ṛta — cosmic order', 'Agni and the sacrifice', 'Nāsadīya sūkta', 'Puruṣa sūkta'],
  },
  {
    id: 'yajur',
    accent: 'var(--ac-ethics)',
    seal: 'य',
    name: 'Yajurveda',
    deva: 'यजुर्वेद',
    blurb: 'Formulas and procedures for performing the rites, in a Black (Kṛṣṇa) and a White (Śukla) tradition.',
    span: [-1200, -500],
    strata: [
      { key: 'samhita', a: -1200, b: -900 },
      { key: 'brahmana', a: -900, b: -700 },
      { key: 'aranyaka', a: -800, b: -600 },
      { key: 'upanishad', a: -800, b: -500 },
    ],
    seers: [
      { id: 'yajnavalkya', year: -750, contributorId: 'yajnavalkya' },
      { id: 'gargi', year: -740, contributorId: 'gargi' },
      { id: 'maitreyi', year: -730, contributorId: 'maitreyi' },
    ],
    ideas: ['Yajña as cosmic action', 'Neti neti', 'Karma and knowledge (Īśa)', 'The Self in the Bṛhadāraṇyaka'],
  },
  {
    id: 'sama',
    accent: 'var(--ac-aesthetics)',
    seal: 'सा',
    name: 'Sāmaveda',
    deva: 'सामवेद',
    blurb: 'Verses set to melody for chanting — the root of Indian musical tradition.',
    span: [-1000, -500],
    strata: [
      { key: 'samhita', a: -1000, b: -800 },
      { key: 'brahmana', a: -800, b: -600 },
      { key: 'aranyaka', a: -700, b: -600 },
      { key: 'upanishad', a: -700, b: -500 },
    ],
    seers: [
      { id: 'uddalaka', year: -700, name: 'Uddālaka Āruṇi', deva: 'उद्दालक आरुणि', seal: 'उ', note: 'Teacher of “tat tvam asi” in the Chāndogya Upaniṣad.' },
      { id: 'shvetaketu', year: -690, name: 'Śvetaketu', deva: 'श्वेतकेतु', seal: 'श्वे', note: 'Uddālaka’s son and student, the listener of that teaching.' },
    ],
    ideas: ['Sound as sacred (sāman)', 'Oṃ as udgītha', 'Tat tvam asi', 'Music and ritual'],
  },
  {
    id: 'atharva',
    accent: 'var(--ac-liberation)',
    seal: 'अ',
    name: 'Atharvaveda',
    deva: 'अथर्ववेद',
    blurb: 'Healing, protection and everyday life — spells, medicine and some of the earliest philosophical speculation.',
    span: [-1000, -300],
    strata: [
      { key: 'samhita', a: -1000, b: -800 },
      { key: 'brahmana', a: -700, b: -500 },
      { key: 'upanishad', a: -600, b: -300 },
    ],
    seers: [
      { id: 'atharvan', year: -1000, name: 'Atharvan', deva: 'अथर्वन्', seal: 'अ', note: 'Legendary priest-seer from whom the Veda takes its name.' },
      { id: 'angiras', year: -990, name: 'Aṅgiras', deva: 'अङ्गिरस्', seal: 'अं', note: 'Legendary seer linked with the healing and protective hymns.' },
      { id: 'shaunaka', year: -600, name: 'Śaunaka', deva: 'शौनक', seal: 'शौ', note: 'The teacher who instructs Aṅgiras’s student in the Muṇḍaka Upaniṣad.' },
    ],
    ideas: ['Healing hymns', 'Para and aparā vidyā', 'Pṛthivī sūkta — hymn to the Earth', 'Brahmacarya'],
  },
];

export const STRATUM_LABEL_MR: Record<StratumKey, { en: string; role: string }> = {
  samhita: { en: 'संहिता', role: 'मंत्र आणि सूत्रे' },
  brahmana: { en: 'ब्राह्मण', role: 'यज्ञविवरण' },
  aranyaka: { en: 'आरण्यक', role: 'अरण्यग्रंथ' },
  upanishad: { en: 'उपनिषद', role: 'आत्मचिंतन' },
};

export const VEDAS_EXPLORER_MR: Record<ExplorerItem['id'], { name: string; blurb: string; ideas: string[] }> = {
  rig: {
    name: 'ऋग्वेद',
    blurb: 'सर्वात प्राचीन स्तर: निसर्गशक्ती व विश्वाची स्तुती करणारी सूक्ते, अचूक मौखिक परंपरेने जतन केलेली.',
    ideas: ['ऋत — विश्वव्यवस्था', 'अग्नी आणि यज्ञ', 'नासदीय सूक्त', 'पुरुष सूक्त'],
  },
  yajur: {
    name: 'यजुर्वेद',
    blurb: 'यज्ञकर्मांची सूत्रे व प्रक्रिया — कृष्ण आणि शुक्ल अशा दोन परंपरांत.',
    ideas: ['यज्ञ — विश्वाचे कर्म', 'नेति नेति', 'कर्म आणि ज्ञान (ईश)', 'बृहदारण्यकातील आत्मा'],
  },
  sama: {
    name: 'सामवेद',
    blurb: 'गायनासाठी स्वरबद्ध केलेल्या ऋचा — भारतीय संगीतपरंपरेचे मूळ.',
    ideas: ['नाद — पवित्र ध्वनी (साम)', 'ओंकार — उद्गीथ', 'तत्त्वमसि', 'संगीत आणि यज्ञ'],
  },
  atharva: {
    name: 'अथर्ववेद',
    blurb: 'आरोग्य, संरक्षण आणि दैनंदिन जीवन — मंत्र, औषधी आणि सर्वात प्राचीन तत्त्वचिंतनाचा काही भाग.',
    ideas: ['आरोग्य-सूक्ते', 'परा आणि अपरा विद्या', 'पृथिवी सूक्त', 'ब्रह्मचर्य'],
  },
};

export const SEERS_MR: Record<string, { name: string; note: string }> = {
  uddalaka: { name: 'उद्दालक आरुणि', note: 'छांदोग्य उपनिषदातील “तत्त्वमसि” या उपदेशाचे आचार्य.' },
  shvetaketu: { name: 'श्वेतकेतु', note: 'उद्दालकाचा पुत्र व शिष्य — त्या उपदेशाचा श्रोता.' },
  atharvan: { name: 'अथर्वन्', note: 'ज्यांच्या नावावरून या वेदाला नाव मिळाले ते आख्यायिक ऋषी-पुरोहित.' },
  angiras: { name: 'अङ्गिरस्', note: 'आरोग्य व संरक्षक सूक्तांशी जोडलेले आख्यायिक ऋषी.' },
  shaunaka: { name: 'शौनक', note: 'मुंडक उपनिषदात अंगिरसाच्या शिष्याला शिकवणारे आचार्य.' },
};
