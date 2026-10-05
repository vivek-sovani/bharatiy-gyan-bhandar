// Placement of the ten principal Upaniṣads for the section explorer. Titles, focus,
// core ideas and explanations come from upanishads-data(.ts/_mr.ts); this file only
// holds approximate dates (negative = BCE), the Veda grouping, seers and ideas.

import type { ExplorerSeer } from './vedic-timeline-data';

export const UPANISHAD_RANGE: [number, number] = [-900, 100];
export const UPANISHAD_TICKS = [-800, -600, -400, -200, 0];

export type UpanishadGroup = {
  id: 'rig' | 'yajur' | 'sama' | 'atharva';
  accent: string;
  seal: string;
  name: { en: string; mr: string };
  deva: string;
  blurb: { en: string; mr: string };
  texts: { id: string; a: number; b: number }[];
  seers: ExplorerSeer[];
  ideas: { en: string[]; mr: string[] };
};

export const UPANISHAD_GROUPS: UpanishadGroup[] = [
  {
    id: 'rig',
    accent: 'var(--ac-knowledge)',
    seal: 'ऋ',
    name: { en: 'Ṛgveda', mr: 'ऋग्वेद' },
    deva: 'ऋग्वेद',
    blurb: {
      en: 'Awareness before everything else: the one Upaniṣad of the oldest Veda asks what the self is and answers that consciousness is the ground of the world.',
      mr: 'सर्वांच्या आधी चैतन्य: सर्वात प्राचीन वेदाचे हे उपनिषद आत्मा म्हणजे काय हे विचारते आणि चैतन्य हेच जगाचे अधिष्ठान असल्याचे सांगते.',
    },
    texts: [{ id: 'aitareya', a: -700, b: -500 }],
    seers: [
      { id: 'mahidasa', year: -700, name: 'Mahidāsa Aitareya', deva: 'महीदास ऐतरेय', seal: 'म', note: 'The traditional sage associated with the Aitareya Brāhmaṇa, Āraṇyaka and Upaniṣad.' },
    ],
    ideas: {
      en: ['Prajñānaṃ brahma — consciousness is Brahman', 'The self as source of the world', 'Three births of the self'],
      mr: ['प्रज्ञानं ब्रह्म — चैतन्य हेच ब्रह्म', 'आत्मा — जगाचा उगम', 'आत्म्याचे तीन जन्म'],
    },
  },
  {
    id: 'yajur',
    accent: 'var(--ac-ethics)',
    seal: 'य',
    name: { en: 'Yajurveda', mr: 'यजुर्वेद' },
    deva: 'यजुर्वेद',
    blurb: {
      en: 'The largest group, from the great Bṛhadāraṇyaka dialogues to the compact Īśa: the self, action and renunciation, and the question of death.',
      mr: 'सर्वात मोठा गट — बृहदारण्यकातील मोठ्या संवादांपासून लहानशा ईशोपनिषदापर्यंत: आत्मा, कर्म आणि त्याग, आणि मृत्यूचा प्रश्न.',
    },
    texts: [
      { id: 'brihad', a: -800, b: -600 },
      { id: 'taittiriya', a: -700, b: -500 },
      { id: 'katha', a: -500, b: -300 },
      { id: 'isha', a: -500, b: -200 },
    ],
    seers: [
      { id: 'yajnavalkya', year: -750, contributorId: 'yajnavalkya' },
      { id: 'gargi', year: -740, contributorId: 'gargi' },
      { id: 'maitreyi', year: -730, contributorId: 'maitreyi' },
      { id: 'naciketas', year: -450, name: 'Naciketas', deva: 'नचिकेता', seal: 'न', note: 'The young seeker who asks Death what happens after dying, in the Kaṭha Upaniṣad.' },
    ],
    ideas: {
      en: ['Neti neti — not this, not this', 'Aham brahmāsmi', 'Īśāvāsyam — the world enveloped by the divine', 'Naciketas and the question of death'],
      mr: ['नेति नेति — हे नव्हे, हे नव्हे', 'अहं ब्रह्मास्मि', 'ईशावास्यम् — जग ईश्वराने व्यापलेले', 'नचिकेता आणि मृत्यूचा प्रश्न'],
    },
  },
  {
    id: 'sama',
    accent: 'var(--ac-aesthetics)',
    seal: 'सा',
    name: { en: 'Sāmaveda', mr: 'सामवेद' },
    deva: 'सामवेद',
    blurb: {
      en: 'Chant and being: Oṃ as the essence of sound, and the teaching that the self within is the same as the reality of the world.',
      mr: 'नाद आणि अस्तित्व: ओंकार हे ध्वनीचे सार, आणि अंतरातील आत्मा जगाच्या सत्याशी एकरूप असल्याची शिकवण.',
    },
    texts: [
      { id: 'chandogya', a: -800, b: -600 },
      { id: 'kena', a: -500, b: -300 },
    ],
    seers: [
      { id: 'uddalaka', year: -700, name: 'Uddālaka Āruṇi', deva: 'उद्दालक आरुणि', seal: 'उ', note: 'Teacher of “tat tvam asi” in the Chāndogya Upaniṣad.' },
      { id: 'shvetaketu', year: -690, name: 'Śvetaketu', deva: 'श्वेतकेतु', seal: 'श्वे', note: 'Uddālaka’s son and student, the listener of that teaching.' },
      { id: 'satyakama', year: -680, name: 'Satyakāma Jābāla', deva: 'सत्यकाम जाबाल', seal: 'सत्य', note: 'The student of unknown parentage whose truthfulness wins him a teacher, in the Chāndogya.' },
    ],
    ideas: {
      en: ['Tat tvam asi — you are that', 'Oṃ as udgītha', 'The self behind the mind (Kena)', 'Sad-vidyā — the knowledge of being'],
      mr: ['तत्त्वमसि — तूच ते', 'ओंकार — उद्गीथ', 'मनामागील आत्मा (केन)', 'सद्विद्या — अस्तित्वाचे ज्ञान'],
    },
  },
  {
    id: 'atharva',
    accent: 'var(--ac-liberation)',
    seal: 'अ',
    name: { en: 'Atharvaveda', mr: 'अथर्ववेद' },
    deva: 'अथर्ववेद',
    blurb: {
      en: 'Questions and answers on knowing: higher and lower knowledge, the four states of consciousness, and the sage’s six great questions.',
      mr: 'जाणण्याबद्दल प्रश्न आणि उत्तरे: परा आणि अपरा विद्या, चेतनेच्या चार अवस्था, आणि ऋषींचे सहा महान प्रश्न.',
    },
    texts: [
      { id: 'mundaka', a: -500, b: -200 },
      { id: 'prashna', a: -300, b: -100 },
      { id: 'mandukya', a: -200, b: 100 },
    ],
    seers: [
      { id: 'angiras', year: -520, name: 'Aṅgiras', deva: 'अङ्गिरस्', seal: 'अं', note: 'Teaches the higher and lower knowledge to Śaunaka in the Muṇḍaka Upaniṣad.' },
      { id: 'shaunaka', year: -510, name: 'Śaunaka', deva: 'शौनक', seal: 'शौ', note: 'The householder who asks “what is that by knowing which all is known?”' },
      { id: 'pippalada', year: -300, name: 'Pippalāda', deva: 'पिप्पलाद', seal: 'पि', note: 'The sage who answers six students’ questions in the Praśna Upaniṣad.' },
    ],
    ideas: {
      en: ['Parā and aparā vidyā', 'Two birds on one tree', 'The four states of consciousness (Māṇḍūkya)', 'Satyam eva jayate'],
      mr: ['परा आणि अपरा विद्या', 'एकाच झाडावरचे दोन पक्षी', 'चेतनेच्या चार अवस्था (माण्डूक्य)', 'सत्यमेव जयते'],
    },
  },
];

export const UPANISHAD_SEERS_MR: Record<string, { name: string; note: string }> = {
  mahidasa: { name: 'महीदास ऐतरेय', note: 'ऐतरेय ब्राह्मण, आरण्यक व उपनिषदाशी जोडले जाणारे पारंपरिक ऋषी.' },
  naciketas: { name: 'नचिकेता', note: 'कठोपनिषदात यमाला मृत्यूनंतर काय होते हे विचारणारा तरुण जिज्ञासू.' },
  uddalaka: { name: 'उद्दालक आरुणि', note: 'छांदोग्य उपनिषदातील “तत्त्वमसि” या उपदेशाचे आचार्य.' },
  shvetaketu: { name: 'श्वेतकेतु', note: 'उद्दालकाचा पुत्र व शिष्य — त्या उपदेशाचा श्रोता.' },
  satyakama: { name: 'सत्यकाम जाबाल', note: 'पित्याचे नाव अज्ञात असूनही सत्यनिष्ठेमुळे गुरू मिळवणारा शिष्य, छांदोग्यात.' },
  angiras: { name: 'अङ्गिरस्', note: 'मुंडक उपनिषदात शौनकाला परा आणि अपरा विद्या शिकवणारे ऋषी.' },
  shaunaka: { name: 'शौनक', note: 'ज्या एकाच्या ज्ञानाने सर्व ज्ञात होते त्याबद्दल विचारणारा गृहस्थ.' },
  pippalada: { name: 'पिप्पलाद', note: 'प्रश्न उपनिषदात सहा शिष्यांच्या प्रश्नांना उत्तर देणारे ऋषी.' },
};
