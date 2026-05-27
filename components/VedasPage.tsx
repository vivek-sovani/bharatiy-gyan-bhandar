'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
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
  strataDetails: Record<string, { title: string; deva?: string; details: string[] }>;
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
    strataDetails: {
      samhita: {
        title: 'Ṛgveda Saṃhitā',
        deva: 'ऋग्वेद संहिता',
        details: [
          'Structure — Organized into 10 Maṇḍalas (books), containing 1,028 Sūktas (hymns) and 10,552 ṛcas (verses).',
          'Aura & Language — Written in archaic Vedic Sanskrit, representing the oldest surviving layer of Indo-European literature.',
          'Themes — Metrical hymns addressed to cosmic powers (devas) such as Agni (fire), Indra (strength), Soma (essence), and Uṣas (dawn).'
        ]
      },
      brahmana: {
        title: 'Rigvedic Brāhmaṇas',
        deva: 'ऋग्वेद ब्राह्मणाणि',
        details: [
          'Aitareya Brāhmaṇa — Consists of 40 chapters detailing grand sacrificial ceremonies like the Soma sacrifice and royal consecration (Rājasūya).',
          'Kauṣītaki Brāhmaṇa — Consists of 30 chapters focusing on domestic fire offerings (Agnihotra) and seasonal rituals.'
        ]
      },
      aranyaka: {
        title: 'Rigvedic Āraṇyakas',
        deva: 'ऋग्वेद आरण्यकानि',
        details: [
          'Aitareya Āraṇyaka — Features 5 books discussing the symbolic essence of rituals and meditating on the vital breath (Prāṇa).',
          'Kauṣītaki Āraṇyaka — Details inner contemplation and esoteric correspondences of chants.'
        ]
      },
      upanishad: {
        title: 'Rigvedic Upaniṣads',
        deva: 'ऋग्वेद उपनिषदः',
        details: [
          'Aitareya Upaniṣad — Focuses on the creation of the universe and contains the Mahāvākya "Prajñānaṃ Brahma" (Consciousness is Brahman).',
          'Kauṣītaki Upaniṣad — Explores the path of the soul after death and maps the identity of breath with the conscious self.'
        ]
      }
    }
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
    strataDetails: {
      samhita: {
        title: 'Yajurveda Saṃhitās',
        deva: 'यजुर्वेद संहिताः',
        details: [
          'White (Śukla) — Vājasaneyi Saṃhitā (Mādhyandina & Kāṇva recensions), containing pure liturgical mantras.',
          'Black (Kṛṣṇa) — Taittirīya Saṃhitā, where the sacrificial mantras are directly interleaved with prose commentary.'
        ]
      },
      brahmana: {
        title: 'Yajurvedic Brāhmaṇas',
        deva: 'यजुर्वेद ब्राह्मणाणि',
        details: [
          'Śatapatha Brāhmaṇa (Śukla) — The Brāhmaṇa of a Hundred Paths. The longest prose work of the Vedic canon, covering rituals, myths, and early science.',
          'Taittirīya Brāhmaṇa (Kṛṣṇa) — Explains domestic rituals and the cosmic significance of sacrificial timings.'
        ]
      },
      aranyaka: {
        title: 'Yajurvedic Āraṇyakas',
        deva: 'यजुर्वेद आरण्यकानि',
        details: [
          'Bṛhadāraṇyaka (Śukla) — Found at the close of the Śatapatha Brāhmaṇa, focusing on the transition to philosophical truth.',
          'Taittirīya Āraṇyaka (Kṛṣṇa) — 10 chapters on internal rituals, including the famous Mahānārāyaṇa portion.'
        ]
      },
      upanishad: {
        title: 'Yajurvedic Upaniṣads',
        deva: 'यजुर्वेद उपनिषदः',
        details: [
          'Bṛhadāraṇyaka Upaniṣad — The largest and oldest Upanishad, depicting dialogues of sage Yājñavalkya on the unity of Ātman.',
          'Īśa Upaniṣad — The final chapter of the Śukla Yajurveda Saṃhitā itself; teaches action without attachment.',
          'Taittirīya Upaniṣad — Outlines the five layers (sheaths) of human personality (Koshas).',
          'Kaṭha Upaniṣad — Depicts the dialogue between Naciketas and Death (Yama) about immortality.'
        ]
      }
    }
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
    strataDetails: {
      samhita: {
        title: 'Sāmaveda Saṃhitā',
        deva: 'सामवेद संहिता',
        details: [
          'Musical Form — Consists of verses primarily taken from the Ṛgveda, rearranged and set to musical scales (Gānas).',
          'Chant Tradition — Sung by Udgātṛ priests using seven musical notes, forming the basis of Indian classical music.'
        ]
      },
      brahmana: {
        title: 'Sāmavedic Brāhmaṇas',
        deva: 'सामवेद ब्राह्मणाणि',
        details: [
          'Pañcaviṃśa Brāhmaṇa — Also called Tāṇḍya, containing 25 books focusing on choral rites and purification ceremonies.',
          'Ṣaḍviṃśa Brāhmaṇa — Details extra rituals and astrological remedies for unfavorable omens.',
          'Jaiminīya Brāhmaṇa — A vast collection of legends and instructions on chants.'
        ]
      },
      aranyaka: {
        title: 'Sāmavedic Āraṇyakas',
        deva: 'सामवेद आरण्यकानि',
        details: [
          'Chāndogya Āraṇyaka — Details meditation on the sacred syllable Om (Pranava).',
          'Talavakāra Āraṇyaka (or Jaiminīya Upaniṣad Brāhmaṇa) — Explores sound, breath, and the cosmos.'
        ]
      },
      upanishad: {
        title: 'Sāmavedic Upaniṣads',
        deva: 'सामवेद उपनिषदः',
        details: [
          'Chāndogya Upaniṣad — One of the oldest and most extensive Upanishads, containing the Mahāvākya "Tat Tvam Asi" (That thou art).',
          'Kena Upaniṣad — Investigates the supreme power behind the mind and senses: "By whom willed does the mind fly?"'
        ]
      }
    }
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
    strataDetails: {
      samhita: {
        title: 'Atharvaveda Saṃhitā',
        deva: 'अथर्ववेद संहिता',
        details: [
          'Recensions — Preserved in the Śaunakīya and Paippalāda branches, containing 20 books (kāṇḍas) of domestic and apotropaic verses.',
          'Nature — Focuses on healing charms, protection spells, herbs, and prayers for daily life, forming the ancestor of Ayurvedic sciences.'
        ]
      },
      brahmana: {
        title: 'Atharvavedic Brāhmaṇa',
        deva: 'अथर्ववेद ब्राह्मणम्',
        details: [
          'Gopatha Brāhmaṇa — The only surviving Brāhmaṇa of the Atharvaveda. It details the duties of the supervising Brahman priest.'
        ]
      },
      aranyaka: {
        title: 'Atharvavedic Āraṇyaka',
        deva: 'अथर्ववेद आरण्यकम्',
        details: [
          'None — The Atharvaveda has no surviving independent Āraṇyaka text. Its transition from ritual directly to philosophy is preserved in the Gopatha Brāhmaṇa.'
        ]
      },
      upanishad: {
        title: 'Atharvavedic Upaniṣads',
        deva: 'अथर्ववेद उपनिषदः',
        details: [
          'Muṇḍaka Upaniṣad — Distinguishes higher from lower knowledge and contains the motto "Satyameva Jayate" (Truth alone triumphs).',
          'Māṇḍūkya Upaniṣad — Shortest major Upanishad (12 verses); maps out the four states of consciousness (waking, dreaming, sleeping, Turīya).',
          'Praśna Upaniṣad — Six questions asked by seekers about creation, breath, and the cosmic self.'
        ]
      }
    }
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
    strataDetails: {
      samhita: {
        title: 'ऋग्वेद संहिता',
        deva: 'ऋग्वेद संहिता',
        details: [
          'रचना — १० मंडळे, १,०२८ सूक्ते आणि १०,५५२ ऋचा (मंत्र) यांनी बनलेला छंदोबद्ध संग्रह.',
          'भाषा आणि स्वरूप — अतिप्राचीन वैदिक संस्कृत भाषेत रचलेला, जो मानवी इतिहासातील सर्वात जुना मौखिक ग्रंथ मानला जातो.',
          'विषय — अग्नी, इंद्र, सोम, उषा इत्यादी वैश्विक शक्तींच्या (देवतांच्या) स्तुतीपर मंत्र.'
        ]
      },
      brahmana: {
        title: 'ऋग्वेदातील ब्राह्मण ग्रंथ',
        deva: 'ऋग्वेद ब्राह्मणाणि',
        details: [
          'ऐतरेय ब्राह्मण — ४० अध्यायांचे संकलन. यात सोमयज्ञ आणि राजांच्या राज्याभिषेक विधींचे (राजसूय) सविस्तर वर्णन आहे.',
          'कौषीतकी ब्राह्मण — ३० अध्यायांचे संकलन. यात दैनिक अग्नीहोत्र आणि हंगामी यज्ञांच्या विधींची माहिती दिली आहे.'
        ]
      },
      aranyaka: {
        title: 'ऋग्वेदातील आरण्यक ग्रंथ',
        deva: 'ऋग्वेद आरण्यकानि',
        details: [
          'ऐतरेय आरण्यक — ५ भाग. यात विधींचे प्रतीकात्मक स्पष्टीकरण आणि प्राणवायूच्या महत्त्वाबद्दलचे चिंतन समाविष्ट आहे.',
          'कौषीतकी आरण्यक — १५ अध्याय. यात अंतर्गत यज्ञ आणि साधनेचे रहस्य सांगितले आहे.'
        ]
      },
      upanishad: {
        title: 'ऋग्वेदातील उपनिषदे',
        deva: 'ऋग्वेद उपनिषदः',
        details: [
          'ऐतरेय उपनिषद् — विश्वाच्या निर्मितीचा अभ्यास आणि प्रसिद्ध महावाक्य "प्रज्ञानं ब्रह्म" (ज्ञान हेच परब्रह्म) यातच आहे.',
          'कौषीतकी उपनिषद् — मृत्यूत्तर आत्म्याचा प्रवास आणि प्राण व चेतना यांच्यातील एकतेचे विवेचन.'
        ]
      }
    }
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
    strataDetails: {
      samhita: {
        title: 'यजुर्वेद संहिता',
        deva: 'यजुर्वेद संहिताः',
        details: [
          'शुक्ल यजुर्वेद — वाजसनेयी संहिता (माध्यन्दिन आणि काण्व शाखा), ज्यात केवळ शुद्ध मंत्र समाविष्ट आहेत.',
          'कृष्ण यजुर्वेद — तैत्तिरीय संहिता, ज्यात मंत्र आणि विधींच्या अंमलबजावणीचे गद्य भाष्य एकत्र दिले आहे.'
        ]
      },
      brahmana: {
        title: 'यजुर्वेदातील ब्राह्मण ग्रंथ',
        deva: 'यजुर्वेद ब्राह्मणाणि',
        details: [
          'शतपथ ब्राह्मण (शुक्ल) — १०० अध्यायांचा सर्वात मोठा ब्राह्मण ग्रंथ. यात यज्ञशास्त्र, खगोलशास्त्र आणि अनेक पौराणिक कथा आहेत.',
          'तैत्तिरीय ब्राह्मण (कृष्ण) — घरगुती यज्ञ विधी आणि यज्ञाच्या वेळेचे खगोलशास्त्रीय महत्त्व यावर मार्गदर्शन.'
        ]
      },
      aranyaka: {
        title: 'यजुर्वेदातील आरण्यक ग्रंथ',
        deva: 'यजुर्वेद आरण्यकानि',
        details: [
          'बृहदारण्यक (शुक्ल) — शतपथ ब्राह्मणाच्या शेवटचा भाग जो कर्माकडून ज्ञानाकडे नेतो.',
          'तैत्तिरीय आरण्यक (कृष्ण) — १० अध्यायांचे चिंतन, ज्यामध्ये महानारायण सूक्ताचा समावेश आहे.'
        ]
      },
      upanishad: {
        title: 'यजुर्वेदातील उपनिषदे',
        deva: 'यजुर्वेद उपनिषदः',
        details: [
          'बृहदारण्यक उपनिषद् — उपनिषदांमधील सर्वात मोठे उपनिषद, ज्यात याज्ञवल्क्य ऋषींचे महान तत्त्वज्ञान संवाद आहेत.',
          'ईश उपनिषद् — थेट यजुर्वेद संहितेचा शेवटचा (४० वा) अध्याय; निष्काम कर्म आणि आत्मज्ञानाचा मेळ.',
          'तैत्तिरीय उपनिषद् — मानवी शरीराचे ५ स्तर (पंचकोष सिद्धांत) आणि दीक्षान्त उपदेश.',
          'कठ उपनिषद् — नचिकेत आणि यमराज यांच्यातील प्रसिद्ध संवाद, ज्यामध्ये मृत्यूचे रहस्य उलगडले आहे.'
        ]
      }
    }
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
    strataDetails: {
      samhita: {
        title: 'सामवेद संहिता',
        deva: 'सामवेद संहिता',
        details: [
          'स्वरूप — मुख्यतः ऋग्वेदातील मंत्रांची गायनासाठी केलेली पुनर्रचना आणि स्वरचिन्हे (गायन ग्रंथ).',
          'गायन पद्धत — उद्गाता पुरोहितांद्वारे सात स्वरांच्या आधारे म्हटले जाणारे मंत्र, जे भारतीय अभिजात संगीताचा पाया आहेत.'
        ]
      },
      brahmana: {
        title: 'सामवेदातील ब्राह्मण ग्रंथ',
        deva: 'सामवेद ब्राह्मणाणि',
        details: [
          'पञ्चविंश ब्राह्मण (ताण्ड्य) — २५ भाग. यात यज्ञविधींचे प्रायश्चित्त आणि शुध्दीकरण विधी दिले आहेत.',
          'षड्विंश ब्राह्मण — अतिरिक्त यज्ञ आणि वाईट ग्रहांच्या शांतीचे विधी.',
          'जैमिनीय ब्राह्मण — ऋषींच्या कथा आणि साम गायनाच्या विविध पद्धतींचे संकलन.'
        ]
      },
      aranyaka: {
        title: 'सामवेदातील आरण्यक ग्रंथ',
        deva: 'सामवेद आरण्यकानि',
        details: [
          'छान्दोग्य आरण्यक — ॐ (प्रणव) अक्षराच्या गूढ चिंतनाचा समावेश.',
          'तलवकार आरण्यक — संगीत आणि निसर्गाचे आध्यात्मिक ऐक्य स्पष्ट करणारा अभ्यास.'
        ]
      },
      upanishad: {
        title: 'सामवेदातील उपनिषदे',
        deva: 'सामवेद उपनिषदः',
        details: [
          'छान्दोग्य उपनिषद् — सर्वात प्राचीन उपनिषदांपैकी एक, ज्यात "तत्त्वमसि" (ते तूच आहेस) या महावाक्याचा उगम आहे.',
          'केनोपनिषद् — बुद्धी आणि इंद्रियांच्या मागे असणाऱ्या सुप्त दिव्य शक्तीचा शोध.'
        ]
      }
    }
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
    strataDetails: {
      samhita: {
        title: 'अथर्ववेद संहिता',
        deva: 'अथर्ववेद संहिता',
        details: [
          'शाखा आणि स्वरूप — शौनकीय आणि पैप्पलाद शाखा. यात गृहस्थ धर्म, औषधोपचार आणि संरक्षणाचे २० विभाग (कांडे) आहेत.',
          'महत्त्व — यात औषधी वनस्पती आणि रोगांचे निवारण करणारे मंत्र आहेत, जे आयुर्वेदाचे मूळ मानले जातात.'
        ]
      },
      brahmana: {
        title: 'अथर्ववेदातील ब्राह्मण ग्रंथ',
        deva: 'अथर्ववेद ब्राह्मणम्',
        details: [
          'गोपथ ब्राह्मण — अथर्ववेदाचा एकमेव उपलब्ध ब्राह्मण ग्रंथ. यात यज्ञाच्या संरक्षणाची जबाबदारी असणाऱ्या "ब्रह्मा" पुरोहिताचे कार्य स्पष्ट केले आहे.'
        ]
      },
      aranyaka: {
        title: 'अथर्ववेदातील आरण्यक ग्रंथ',
        deva: 'अथर्ववेद आरण्यकम्',
        details: [
          'काहीही नाही — अथर्ववेदाचा कोणताही स्वतंत्र आरण्यक ग्रंथ उपलब्ध नाही. गोपथ ब्राह्मणातून थेट उपनिषदात तत्त्वज्ञान संक्रमित होते.'
        ]
      },
      upanishad: {
        title: 'अथर्ववेदातील उपनिषदे',
        deva: 'अथर्ववेद उपनिषदः',
        details: [
          'मुण्डक उपनिषद् — विद्या आणि अविद्या यातील फरक आणि देशाचे बोधवाक्य "सत्यमेव जयते" (सत्याचाच विजय होतो) चा उगम.',
          'माण्डूक्य उपनिषद् — अवघ्या १२ श्लोकांचे उपनिषद्, ज्यात मानवी चेतनेच्या ४ अवस्था (जागृती, स्वप्न, सुषुप्ती, तुरीय) स्पष्ट केल्या आहेत.',
          'प्रश्न उपनिषद् — सृष्टी, प्राण आणि आत्म्याबद्दल सहा जिज्ञासूंनी पिप्पलाद ऋषींना विचारलेले सहा प्रश्न.'
        ]
      }
    }
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
  const [activeStratum, setActiveStratum] = useState<string | null>(null);
  const { lang, t } = useLanguage();

  const VEDAS = lang === 'mr' ? VEDAS_MR : VEDAS_EN;
  const STRATA = lang === 'mr' ? STRATA_MR : STRATA_EN;

  const veda = VEDAS.find((v) => v.id === active)!;

  const handleVedaChange = (id: string) => {
    setActive(id);
    setActiveStratum(null); // Reset active stratum detail on Veda change
  };

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
            onClick={() => handleVedaChange(v.id)}
          >
            <span className="veda-tab-de deva-only">{v.deva}</span>
            <span className="veda-tab-en">{v.title}</span>
            <span className="veda-tab-ep">{v.epithet}</span>
          </button>
        ))}
      </nav>

      <article className="veda-panel" key={veda.id}>
        <div className="veda-panel-l">
          <div className="eyebrow">
            № 0{VEDAS.findIndex((v) => v.id === active) + 1} of 4 · {lang === 'mr' ? 'वेद' : 'Veda'}
          </div>
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
            <button
              key={s.id}
              type="button"
              className={`stratum ${activeStratum === s.id ? 'is-active' : ''}`}
              onClick={() => setActiveStratum(activeStratum === s.id ? null : s.id)}
            >
              <div className="stratum-no">{['I', 'II', 'III', 'IV'][i]}</div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>{s.name}</h4>
                <div className="deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', marginTop: 2 }}>{s.deva}</div>
                <p style={{ marginTop: '0.6rem', fontSize: '0.94rem', color: 'var(--ink-soft)' }}>{s.gloss}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeStratum && veda.strataDetails[activeStratum] && (
        <div className="stratum-details-panel">
          <CornerOrn className="tl" />
          <CornerOrn className="tr" />
          <CornerOrn className="bl" />
          <CornerOrn className="br" />
          <div className="panel-header">
            <span className="eyebrow" style={{ color: 'var(--maroon)' }}>
              {t('detail.strata')} · {STRATA.find(s => s.id === activeStratum)?.name}
            </span>
            <h3>
              {veda.strataDetails[activeStratum].deva && (
                <span className="deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', marginRight: '0.6em' }}>
                  {veda.strataDetails[activeStratum].deva}
                </span>
              )}
              {veda.strataDetails[activeStratum].title}
            </h3>
          </div>
          <ul className="details-list">
            {veda.strataDetails[activeStratum].details.map((detail, idx) => (
              <li key={idx}>
                {detail.includes(' — ') ? (
                  <>
                    <strong>{detail.split(' — ')[0]}</strong> — {detail.split(' — ')[1]}
                  </>
                ) : (
                  detail
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
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
              <Link href="/" style={{ color: 'inherit', borderBottom: 0 }}>{t('detail.library')}</Link>
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
