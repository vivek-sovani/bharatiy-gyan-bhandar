// The Complete Path's final arrangement. The themed journeys, woven together, visit 18 of the 28
// sections; this fills in the rest and sets one order for the whole collection, then gives every
// item inside a section its own short reading. The path is as long as that takes (there is no
// cap), and the WhatsApp daily post follows it.

import type { JourneyStep } from './journeys-data';
import { SECTIONS as SECTIONS_EN } from './data';
import { SECTIONS as SECTIONS_MR } from './data_mr';
import { SECTION_DETAILS as DETAILS_EN } from './section-data';
import { SECTION_DETAILS as DETAILS_MR } from './section-data_mr';

type Lang = 'en' | 'mr';

// Sections the Complete Path does not visit, each given a short orienting line.
const EXTRA_STEPS: Record<string, { why: { en: string; mr: string }; minutes: number }> = {
  '/vedangas/': {
    why: {
      en: 'The six limbs that make the Veda intelligible — sound, ritual, grammar, word-origins, metre and time.',
      mr: 'वेद समजण्यासाठी सहा अंगे — उच्चार, कर्मकांड, व्याकरण, शब्दव्युत्पत्ती, छंद आणि काळगणना.',
    },
    minutes: 5,
  },
  '/upavedas/': {
    why: {
      en: 'Where the Veda meets everyday life: medicine, arms, music and architecture as four applied sciences.',
      mr: 'वेद आणि दैनंदिन जीवनाची भेट: आयुर्वेद, धनुर्वेद, गांधर्ववेद आणि स्थापत्य ही चार व्यावहारिक शास्त्रे.',
    },
    minutes: 5,
  },
  '/dharmashastra/': {
    why: {
      en: 'How a society was meant to hold together — the law-books of Manu, Yājñavalkya, Nārada and Bṛhaspati.',
      mr: 'समाजाला एकत्र ठेवणारी रचना — मनु, याज्ञवल्क्य, नारद आणि बृहस्पती यांची धर्मशास्त्रे.',
    },
    minutes: 6,
  },
  '/arthashastra/': {
    why: {
      en: 'Statecraft and economics from Kauṭilya — a hard-headed manual that still reads as modern.',
      mr: 'कौटिल्याचे राज्यशास्त्र व अर्थशास्त्र — आजही आधुनिक वाटणारे व्यवहारी मार्गदर्शन.',
    },
    minutes: 6,
  },
  '/kamashastra/': {
    why: {
      en: 'Kāma as one of life’s four aims — Vātsyāyana’s treatise on the art of living well.',
      mr: 'जीवनाच्या चार पुरुषार्थांपैकी काम — वात्स्यायनाचा सुजीवनाच्या कलेवरील ग्रंथ.',
    },
    minutes: 5,
  },
  '/kavya/': {
    why: {
      en: 'The great forms of Sanskrit literature: epic poem, drama, lyric and tale.',
      mr: 'संस्कृत साहित्याचे प्रमुख प्रकार: महाकाव्य, नाटक, खंडकाव्य आणि कथा.',
    },
    minutes: 5,
  },
  '/kavya-poets/': {
    why: {
      en: 'Meet the poets — Kālidāsa, Bāṇa, Daṇḍin, Jayadeva — and what each gave the language.',
      mr: 'कवींची ओळख — कालिदास, बाण, दण्डी, जयदेव — आणि प्रत्येकाने भाषेला काय दिले.',
    },
    minutes: 6,
  },
  '/agamas/': {
    why: {
      en: 'The temple and the inner path: the Śaiva, Vaiṣṇava and Śākta scriptures behind ritual and yoga.',
      mr: 'मंदिर आणि अंतर्मार्ग: विधी व योगामागील शैव, वैष्णव आणि शाक्त ग्रंथ.',
    },
    minutes: 6,
  },
  '/tantra-texts/': {
    why: {
      en: 'The books behind the tantric streams, from the Śiva-sūtra to the Kaula tantras.',
      mr: 'शिवसूत्रापासून कौल तंत्रांपर्यंत — तांत्रिक प्रवाहांमागील ग्रंथ.',
    },
    minutes: 6,
  },
  '/yantra/': {
    why: {
      en: 'Geometry as a deity: how the Śrī Yantra and the maṇḍala turn a diagram into a way of seeing.',
      mr: 'भूमिती हीच देवता: श्रीयंत्र आणि मंडल रेखाकृतीला पाहण्याची पद्धत कशी बनवतात.',
    },
    minutes: 5,
  },
  '/rangoli/': {
    why: {
      en: 'The threshold made sacred — rangoli, kolam, alpana and the living folk geometry of the doorstep.',
      mr: 'उंबरठा पवित्र करणारी कला — रांगोळी, कोलम, अल्पना आणि अंगणातील जिवंत लोक-भूमिती.',
    },
    minutes: 5,
  },
  '/parallel/': {
    why: {
      en: 'The Jain, Buddhist and Sikh canons — parallel streams that grew alongside the Vedic one.',
      mr: 'जैन, बौद्ध आणि शीख ग्रंथ — वैदिक प्रवाहाशेजारी वाढलेले समांतर प्रवाह.',
    },
    minutes: 5,
  },
  '/modern/': {
    why: {
      en: 'Where it leads: the reformers and thinkers who carried these ideas into the modern age.',
      mr: 'हे सर्व कुठे पोहोचते: या विचारांना आधुनिक युगात नेणारे सुधारक आणि विचारवंत.',
    },
    minutes: 6,
  },
};

// Final order. A path that is not in EXTRA_STEPS is taken from the woven themed journeys.
const ORDER: string[] = [
  '/shruti-smriti/',
  '/vedas/',
  '/upanishads/',
  '/upanishads/isha/',
  '/gita/',
  '/subhashita/',
  '/lifestyle/',
  '/darshanas/',
  '/darshanas/nyaya/',
  '/darshanas/sankhya/',
  '/darshanas/yoga/',
  '/darshanas/vedanta/',
  '/vedanta-schools/',
  '/nastika-darshanas/',
  '/language-philosophy/',
  '/itihasa/',
  '/itihasa/ramayana/',
  '/itihasa/mahabharata/',
  '/puranas/',
  '/dharmashastra/',
  '/arthashastra/',
  '/kamashastra/',
  '/kavya/',
  '/kavya-poets/',
  '/bhakti/',
  '/agamas/',
  '/tantra-texts/',
  '/yantra/',
  '/rangoli/',
  '/sciences/',
  '/living-knowledge/zero/',
  '/living-knowledge/eclipses/',
  '/vedangas/',
  '/vedangas/jyotisha/',
  '/living-knowledge/panini-grammar/',
  '/living-knowledge/charaka-medicine/',
  '/upavedas/',
  '/upavedas/ayurveda/',
  '/parallel/',
  '/marathi-sants/',
  '/marathi-sants/jnaneshwar/',
  '/marathi-sants/namdev/',
  '/marathi-sants/tukaram/',
  '/marathi-sants/ramdas/',
  '/modern/',
];


// Reading time for a step that is added automatically (an item inside a section). The curated steps keep their own.
const ITEM_MINUTES = 6;

// Sections whose items are not separate pages, so there is nothing to add after their overview.
const NO_ITEM_PAGES = new Set(['vedas', 'shruti-smriti']);

export function completePathSteps(chained: JourneyStep[], lang: Lang): JourneyStep[] {
  const base = new Map(chained.map((s) => [s.path, s]));
  const sections = lang === 'mr' ? SECTIONS_MR : SECTIONS_EN;
  const details = lang === 'mr' ? DETAILS_MR : DETAILS_EN;

  const curated = ORDER.map((path): JourneyStep => {
    const existing = base.get(path);
    if (existing) return existing;
    const extra = EXTRA_STEPS[path];
    const section = sections.find((s) => s.id === path.split('/')[1]);
    if (!extra || !section) throw new Error(`complete path: no data for ${path}`);
    return { path, title: section.title, why: extra.why[lang], minutes: extra.minutes };
  });

  // Every item of a section gets its own step, placed after the last curated step of that section.
  const sectionOf = (s: JourneyStep) => s.path.split('/')[1];
  const lastIndex = new Map<string, number>();
  curated.forEach((s, i) => lastIndex.set(sectionOf(s), i));
  const have = new Set(curated.map((s) => s.path));

  const steps: JourneyStep[] = [];
  curated.forEach((step, i) => {
    steps.push(step);
    const sid = sectionOf(step);
    if (lastIndex.get(sid) !== i || NO_ITEM_PAGES.has(sid)) return;
    for (const item of details[sid]?.items ?? []) {
      const path = `/${sid}/${item.id}/`;
      if (have.has(path)) continue;
      const sectionTitle = sections.find((x) => x.id === sid)?.title ?? sid;
      const why = `${sectionTitle} — ${item.epithet}.`;
      steps.push({ path, title: item.title, why, minutes: ITEM_MINUTES });
    }
  });

  // A step added to a themed journey later is kept (at the end) rather than silently dropped.
  const placed = new Set(steps.map((s) => s.path));
  return [...steps, ...chained.filter((s) => !placed.has(s.path))];
}
