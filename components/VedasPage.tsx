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
        title: 'Ṛgveda Saṃhitā Recensions (Shakhas)',
        deva: 'ऋग्वेद संहिता - शाखाः',
        details: [
          'Śākala Saṃhitā — The only fully surviving recension of the Ṛgveda, containing 1,028 hymns organized into 10 Maṇḍalas. It is the global standard for Vedic study.',
          'Bāṣkala Saṃhitā — A partially surviving recension. It includes additional hymns known as the Valakhilya and Khilani (supplementary scriptures).',
          'Other Historical Shakhas — Historically, branches like Āśvalāyana, Śāṅkhāyana, and Māṇḍukāyana existed. Their independent Saṃhitās are lost, but their auxiliary ritual texts survive.'
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
        title: 'Yajurveda Saṃhitā Recensions (Shakhas)',
        deva: 'यजुर्वेद संहिता - शाखाः',
        details: [
          'Vājasaneyi Mādhyandina Saṃhitā (Śukla) — The most popular recension of White Yajurveda in Northern and Central India, consisting of 40 chapters (Adhyayas) of clean ritual mantras.',
          'Vājasaneyi Kāṇva Saṃhitā (Śukla) — Widely practiced in Southern India, featuring minor textual variations and order changes compared to the Madhyandina recension.',
          'Taittirīya Saṃhitā (Kṛṣṇa) — The most prominent recension of Black Yajurveda, widely chanted in South India. It contains both the sacrificial mantras and the prose ritual instructions interleaved together.',
          'Maitrāyaṇī Saṃhitā (Kṛṣṇa) — Consists of 4 books, preserved primarily in parts of Gujarat and Maharashtra.',
          'Kāṭhaka / Kaṭha Saṃhitā (Kṛṣṇa) — Originally from Kashmir, containing detailed sacrificial prose and verse.',
          'Kapiṣṭhala-Kaṭha Saṃhitā (Kṛṣṇa) — A rare and fragmented recension closely related to the Katha branch.'
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
        title: 'Sāmaveda Saṃhitā Recensions (Shakhas)',
        deva: 'सामवेद संहिता - शाखाः',
        details: [
          'Kauthuma Saṃhitā — The most popular and widely studied recension of the Sāmaveda, prevalent in Gujarat, Maharashtra, and parts of Southern India. It divides chants into Purvarcika and Uttararcika.',
          'Rāṇāyanīya Saṃhitā — Prevalent in Karnataka, Maharashtra, and Odisha. It is textually very close to the Kauthuma branch but differs slightly in chanting style and pronunciation.',
          'Jaiminīya / Talavakāra Saṃhitā — An ancient and highly distinct recension, preserved primarily in Kerala and Tamil Nadu. Its musical notation and chanting system are older and differ significantly from the Kauthuma branch.'
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
        title: 'Atharvaveda Saṃhitā Recensions (Shakhas)',
        deva: 'अथर्ववेद संहिता - शाखाः',
        details: [
          'Śaunakīya Saṃhitā — The standard, most popular, and fully preserved recension of the Atharvaveda, comprising 20 books (kāṇḍas) containing 730 hymns.',
          'Paippalāda Saṃhitā — An older recension containing different arrangements and additional hymns. It was rediscovered in Kashmir and is actively preserved in Odisha.'
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
        title: 'ऋग्वेद संहिता - शाखा (recensions)',
        deva: 'ऋग्वेद संहिता - शाखाः',
        details: [
          'शाकल संहिता — ऋग्वेदाची एकमेव पूर्णपणे उपलब्ध असलेली शाखा. यात १० मंडळांमध्ये १,०२८ सूक्ते आहेत. हा वेदांच्या अभ्यासाचा मुख्य वैश्विक स्रोत आहे.',
          'बाष्कल संहिता — अंशतः उपलब्ध असलेली शाखा. यात मुख्य संहितेव्यतिरिक्त \'खिलानि\' (पूरक सूक्ते) नावाचे अतिरिक्त मंत्र समाविष्ट आहेत.',
          'इतर ऐतिहासिक शाखा — पूर्वी आश्वलायन, शाङ्खायन, आणि माण्डूकायन या शाखा अस्तित्वात होत्या. सध्या त्यांच्या संहितेचे मूळ स्वरूप उपलब्ध नाही, परंतु पूरक विधी ग्रंथ शिल्लक आहेत.'
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
        title: 'यजुर्वेद संहिता - शाखा (recensions)',
        deva: 'यजुर्वेद संहिता - शाखाः',
        details: [
          'वाजसनेयी माध्यन्दिन संहिता (शुक्ल) — उत्तर आणि मध्य भारतात सर्वाधिक प्रचलित असलेली शुक्ल यजुर्वेदाची शाखा, ज्यामध्ये ४० अध्याय आहेत.',
          'वाजसनेयी काण्व संहिता (शुक्ल) — प्रामुख्याने दक्षिण भारतात (कर्नाटक, तमिळनाडू, आंध्र) गायली जाणारी शाखा.',
          'तैत्तिरीय संहिता (कृष्ण) — कृष्ण यजुर्वेदाची सर्वात मोठी आणि लोकप्रिय शाखा, जी दक्षिण भारतात मोठ्या प्रमाणावर अभ्यासली जाते. यात मंत्र आणि गद्य विधी एकत्र आहेत.',
          'मैत्रायणी संहिता (कृष्ण) — ४ प्रमुख भागांमध्ये विभागलेली, प्रामुख्याने गुजरात आणि महाराष्ट्रातील काही भागात जतन केलेली शाखा.',
          'काठक / कठ संहिता (कृष्ण) — काश्मीरमध्ये उगम पावलेली, यज्ञ विधी आणि मंत्रांची वैशिष्ट्यपूर्ण मांडणी असणारी शाखा.',
          'कपिष्ठल-कठ संहिता (कृष्ण) — अत्यंत दुर्मिळ आणि केवळ काही खंडांमध्ये उपलब्ध असलेली कृष्ण यजुर्वेदाची शाखा.'
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
          'बृहदारण्यक उपनिषद् — उपनिषदांमधील सर्वात मोठे उपनिषद, यात याज्ञवल्क्य ऋषींचे महान तत्त्वज्ञान संवाद आहेत.',
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
        title: 'सामवेद संहिता - शाखा (recensions)',
        deva: 'सामवेद संहिता - शाखाः',
        details: [
          'कौथुम संहिता — सामवेदाची सर्वाधिक प्रचलित शाखा, जी गुजरात, महाराष्ट्र आणि दक्षिण भारतात गायली जाते. यात पूर्वार्चिक आणि उत्तरार्चिक अशी दोन मुख्य विभाजने आहेत.',
          'राणायनीय संहिता — कर्नाटक, महाराष्ट्र आणि ओडिशामध्ये आढळणारी शाखा. ही कौथुम शाखेशी मिळतीजुळती आहे, परंतु गायन पद्धतीत आणि स्वरांच्या उच्चारात किंचित फरक आहे.',
          'जैमिनीय / तलवकार संहिता — सामवेदाची अत्यंत प्राचीन आणि वैशिष्ट्यपूर्ण शाखा, जी प्रामुख्याने वनांमध्ये आणि ऋषींच्या पारंपरिक आश्रमांमध्ये संगीत स्वरांच्या आधारे केरळ व तमिळनाडूत जतन केली गेली आहे.'
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
          'छान्दोग्य उपनिषद् — सर्वात प्राचीन उपनिषदांपैकी एक, यात "तत्त्वमसि" (ते तूच आहेस) या महावाक्याचा उगम आहे.',
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
        title: 'अथर्ववेद संहिता - शाखा (recensions)',
        deva: 'अथर्ववेद संहिता - शाखाः',
        details: [
          'शौनकीय संहिता — अथर्ववेदाची मानक आणि सर्वाधिक लोकप्रिय शाखा. यामध्ये २० कांडे आणि ७३० सूक्ते असून ती संपूर्ण भारतात अभ्यासली जाते.',
          'पैप्पलाद संहिता — शौनकीय शाखेपेक्षा अधिक प्राचीन मानली जाणारी शाखा. हिचा शोध काश्मीरमध्ये लागला आणि सध्या ओडिशामधील काही वेदपाठशाळांमध्ये ती जतन केली गेली आहे.'
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
          'काहीही नाही — अथर्ववेदाचा कोणताही आरण्यक ग्रंथ उपलब्ध नाही. गोपथ ब्राह्मणातून थेट उपनिषदात तत्त्वज्ञान संक्रमित होते.'
        ]
      },
      upanishad: {
        title: 'अथर्ववेदातील उपनिषदे',
        deva: 'अथर्ववेद उपनिषदः',
        details: [
          'मुण्डक उपनिषद् — विद्या आणि अविद्या यातील फरक आणि देशाचे बोधवाक्य "सत्यमेव जयते" (सत्याचाच विजय होतो) चा उगम.',
          'माण्डूक्य उपनिषद् — अवघ्या १२ श्लोकांचे उपनिषद्, यात मानवी चेतनेच्या ४ अवस्था (जागृती, स्वप्न, सुषुप्ती, तुरीय) स्पष्ट केल्या आहेत.',
          'प्रश्न उपनिषद् — सृष्टी, प्राण आणि आत्म्याबद्दल सहा जिज्ञासूंनी पिप्पलाद ऋषींना विचारलेले सहा प्रश्न.'
        ]
      }
    }
  },
];

interface Shakha {
  name: string;
  deva: string;
  category?: string;
  categoryDeva?: string;
  status: string;
  statusDeva: string;
  structure: string;
  structureDeva: string;
  region: string;
  regionDeva: string;
  desc: string;
  descDeva: string;
}

interface KeySukta {
  name: string;
  nameDeva: string;
  citation: string;
  citationDeva: string;
  summary: string;
  summaryDeva: string;
  verse?: {
    deva: string;
    trans: string;
    cite: string;
  };
}

const SHAKHAS_DATA: Record<string, Shakha[]> = {
  rig: [
    {
      name: 'Śākala Saṃhitā',
      deva: 'शाकल संहिता',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '10 Maṇḍalas, 1,028 Sūktas, 10,552 verses',
      structureDeva: '१० मंडळे, १,०२८ सूक्ते, १०,५५२ ऋचा',
      region: 'Prevalent throughout India',
      regionDeva: 'संपूर्ण भारतात',
      desc: 'The standard, widely chanted recension of the Rigveda. Features the unique oral preservation with exact pitch accents (Udātta, Anudātta, Svarita).',
      descDeva: 'ऋग्वेदाची सर्वात लोकप्रिय व सध्या उपलब्ध असणारी एकमेव संपूर्ण शाखा. स्वरचिन्हांसह (उदात्त, अनुदात्त, स्वरित) पठणाची अचूक मौखिक परंपरा यात जतन केली आहे.'
    },
    {
      name: 'Bāṣkala Saṃhitā',
      deva: 'बाष्कल संहिता',
      status: 'Partially Extant',
      statusDeva: 'अंशतः उपलब्ध',
      structure: '10 Maṇḍalas, 1,025 Sūktas, includes Khilani/Valakhilya',
      structureDeva: '१० मंडळे, १,०२५ सूक्ते, खिलसूक्ते समाविष्ट',
      region: 'Historically North & West India',
      regionDeva: 'ऐतिहासिकदृष्ट्या उत्तर व पश्चिम भारत',
      desc: 'Preserves 8 additional hymns (Vālakhilya) and other supplementary texts. Closely related to the Shakala tradition but with small textual differences.',
      descDeva: 'शाकल शाखेसारखीच पण यात अतिरिक्त \'खिलानि\' (पूरक सूक्ते) व ८ अतिरिक्त वालखिल्य सूक्ते आढळतात. काही हस्तलिखितांमध्ये ही शाखा अंशतः टिकून राहिली आहे.'
    },
    {
      name: 'Āśvalāyana Saṃhitā',
      deva: 'आश्वलायन संहिता',
      status: 'Lost Saṃhitā (Ritual texts extant)',
      statusDeva: 'संहिता लुप्त (विधी ग्रंथ उपलब्ध)',
      structure: 'Auxiliary ritual works (Shrauta & Grihya Sutras) survive',
      structureDeva: 'विधी सूत्रे आणि श्रौत सूत्रे उपलब्ध',
      region: 'Historically popular in Maharashtra & South India',
      regionDeva: 'ऐतिहासिकदृष्ट्या महाराष्ट्र व दक्षिण भारत',
      desc: 'The independent Samhita is lost, but the ritual manuals (Sutras) written by sage Ashvalayana (disciple of Shaunaka) are the primary authority for Rigvedic rites in many parts of India.',
      descDeva: 'मूळ संहिता लुप्त झाली आहे, परंतु शौनकांचे शिष्य आश्वलायन ऋषींनी लिहिलेले आश्वलायन श्रौत व गृह्य सूत्र ग्रंथ उपलब्ध आहेत. महाराष्ट्रात ऋग्वेदी ब्राह्मणांचे बहुतांश विधी याच शाखेनुसार होतात.'
    },
    {
      name: 'Śāṅkhāyana / Kauṣītaki',
      deva: 'शाङ्खायन / कौषीतकी',
      status: 'Lost Saṃhitā (Brahmana & Upanishad extant)',
      statusDeva: 'संहिता लुप्त (ब्राह्मण व उपनिषद उपलब्ध)',
      structure: 'Shrauta/Grihya Sutras, Brahmana, Aranyaka, and Upanishad survive',
      structureDeva: 'ब्राह्मण, आरण्यक, उपनिषद आणि सूत्रे उपलब्ध',
      region: 'Historically Gujarat & Rajasthan',
      regionDeva: 'ऐतिहासिकदृष्ट्या गुजरात व राजस्थान',
      desc: 'While the main mantra collection is lost, its Brahmana, Aranyaka, and Upanishad are fully preserved and form an important intellectual lineage of Rigvedic ritualism.',
      descDeva: 'मूळ मंत्रसंग्रह अनुपलब्ध असला तरी या शाखेचे कौषीतकी ब्राह्मण, आरण्यक, उपनिषद आणि शाङ्खायन विधीसूत्रे पूर्णपणे सुरक्षित आहेत. ही शाखा आंतरिक साधनेवर भर देते.'
    },
    {
      name: 'Māṇḍukāyana',
      deva: 'माण्डूकायन',
      status: 'Lost',
      statusDeva: 'पूर्णपणे लुप्त',
      structure: 'None surviving',
      structureDeva: 'सध्या कोणताही ग्रंथ उपलब्ध नाही',
      region: 'Historically Northern India',
      regionDeva: 'ऐतिहासिकदृष्ट्या उत्तर भारत',
      desc: 'Mentioned by ancient grammarians and lexicographers like Shaunaka in the Rigveda Pratisakhya, but no text or oral tradition survives today.',
      descDeva: 'शौनकांच्या ऋग्वेद प्रातिशाख्यात आणि इतर प्राचीन ग्रंथांमध्ये या शाखेचा उल्लेख आढळतो, परंतु आज याचा कोणताही ग्रंथ किंवा मौखिक परंपरा शिल्लक नाही.'
    }
  ],
  yajur: [
    {
      name: 'Vājasaneyi Mādhyandina',
      deva: 'वाजसनेयी माध्यन्दिन',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '40 Adhyāyas (chapters), 1,975 Kandikās (verses)',
      structureDeva: '४० अध्याय, १,९७५ कण्डिका/मंत्र',
      region: 'Dominant in North and Central India',
      regionDeva: 'उत्तर व मध्य भारत',
      desc: 'Named after sage Yajnavalkya (Vajasaneya) and the midday sun. It is the most popular Shukla Yajurveda recension, recited with a distinctive pronunciation where \'ya\' becomes \'ja\' and \'va\' becomes \'ba\' in specific contexts.',
      descDeva: 'याज्ञवल्क्य ऋषींनी आदित्य भगवंताकडून प्राप्त केलेली मुख्य शाखा. उत्तर व मध्य भारतात अत्यंत लोकप्रिय आहे. यात \'य\' चा उच्चार \'ज\' आणि \'ष\' चा उच्चार \'ख\' करण्याची विशिष्ट स्वर पद्धती आहे.'
    },
    {
      name: 'Vājasaneyi Kāṇva',
      deva: 'वाजसनेयी काण्व',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '40 Adhyāyas, 328 Anuvākas, 2,086 verses',
      structureDeva: '४० अध्याय, ३२८ अनुवाक, २,०८६ मंत्र',
      region: 'Popular in South India, Maharashtra, and Odisha',
      regionDeva: 'दक्षिण भारत, महाराष्ट्र व ओडिशा',
      desc: 'Prevalent in South India. It is textually very close to Madhyandina but features minor word order variations and contains 111 additional verses. It serves as the basis for the Kanva Shatapatha Brahmana.',
      descDeva: 'कण्व ऋषींच्या परंपरेतील ही शाखा दक्षिण भारतात (विशेषतः तमिळनाडू, कर्नाटक, आंध्र व महाराष्ट्र) जास्त प्रचलित आहे. यात माध्यन्दिन शाखेपेक्षा १११ मंत्र जास्त आहेत.'
    },
    {
      name: 'Taittirīya Saṃhitā',
      deva: 'तैत्तिरीय संहिता',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '7 Kāṇḍas, 44 Prapāṭhakas, 651 Anuvākas',
      structureDeva: '७ कांडे, ४४ प्रपाठक, ६५१ अनुवाक',
      region: 'Dominant across South India',
      regionDeva: 'संपूर्ण दक्षिण भारत',
      desc: 'Named after sage Tittiri. The most widely chanted and preserved Black Yajurveda school, containing both mantras and prose commentary integrated together. Famous for its beautiful, resonant chanting flow.',
      descDeva: 'तित्तिरी ऋषींच्या परंपरेतील कृष्ण यजुर्वेदाची ही सर्वात महत्त्वाची व लोकप्रिय शाखा आहे. दक्षिण भारतात (तमिळनाडू, कर्नाटक, केरळ) या शाखेची मौखिक परंपरा अतिशय जिवंत आहे. यात मंत्र आणि गद्य विधी एकत्र गुंफलेले आहेत.'
    },
    {
      name: 'Maitrāyaṇī Saṃhitā',
      deva: 'मैत्रायणी संहिता',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '4 Kāṇḍas, 54 Prapāṭhakas, 3,144 mantras',
      structureDeva: '४ कांडे, ५४ प्रपाठक, ३,१४४ मंत्र',
      region: 'Preserved in Western Maharashtra and Gujarat',
      regionDeva: 'पश्चिम महाराष्ट्र व गुजरात',
      desc: 'Named after sage Maitri. It preserves archaic linguistic features and unique ritual details. Today, a small community of priests in Nashik and Nandurbar (Maharashtra) maintains its oral chanting.',
      descDeva: 'मैत्रि ऋषींनी प्रवचन केलेली कृष्ण यजुर्वेदाची ही प्राचीन शाखा आहे. गुजरात आणि महाराष्ट्रातील (विशेषतः नाशिक व नंदुरबार परिसर) काही मोजक्या घराण्यांनी ही मौखिक परंपरा अजूनही टिकवून ठेवली आहे.'
    },
    {
      name: 'Kāṭhaka / Kaṭha Saṃhitā',
      deva: 'काठक / कठ संहिता',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant / Reconstructed',
      statusDeva: 'पूर्णपणे उपलब्ध / पुनर्रचित',
      structure: '5 Granthas (divisions), detailed sacrificial rules',
      structureDeva: '५ मुख्य विभाग/ग्रंथ',
      region: 'Historically Kashmir and Himachal Pradesh',
      regionDeva: 'ऐतिहासिकदृष्ट्या काश्मीर व हिमाचल प्रदेश',
      desc: 'Attributed to sage Kaṭha (disciple of Vaisampayana). Contains rich prose and poetry on sacrificial architecture. Mostly reconstructed from Kashmiri birch-bark manuscripts.',
      descDeva: 'वैशंपायनांचे शिष्य कठ ऋषींनी स्थापन केलेली शाखा. पूर्वी काश्मीरमध्ये याचे मोठ्या प्रमाणावर पठण होत असे. यज्ञ विधींच्या आणि रचनेच्या बाबतीत यात अत्यंत सविस्तर गद्य आणि पद्य माहिती आहे.'
    },
    {
      name: 'Kapiṣṭhala-Kaṭha Saṃhitā',
      deva: 'कपिष्ठल-कठ संहिता',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fragmentary / Partially Extant',
      statusDeva: 'अंशतः उपलब्ध',
      structure: '8 fragments of chapters',
      structureDeva: 'कपिष्ठल-कठ संहिता',
      region: 'Historically Punjab and Northwest India',
      regionDeva: 'ऐतिहासिकदृष्ट्या पंजाब व वायव्य भारत',
      desc: 'Named after sage Kapisthala. Closely related to the Katha recension, it survives only in fragmented manuscripts containing partial chapters of the Samhita.',
      descDeva: 'कपिष्ठल ऋषींनी जतन केलेली ही शाखा कठ शाखेशी अत्यंत साम्य राखणारी आहे. सध्या ही संहिता केवळ काही हस्तलिखितांमध्ये व तुकड्यांमध्येच उपलब्ध असून तिचे मौखिक पठण लुप्त झाले आहे.'
    }
  ],
  sama: [
    {
      name: 'Kauthuma Saṃhitā',
      deva: 'कौथुम संहिता',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '1,875 verses divided into Purvarcika & Uttararcika',
      structureDeva: '१,८७५ मंत्र, पूर्वार्चिक व उत्तरार्चिक विभाग',
      region: 'Prevalent in Gujarat, Maharashtra, and Tamil Nadu',
      regionDeva: 'गुजरात, महाराष्ट्र व तमिळनाडू',
      desc: 'The standard and most popular recension of Samaveda. It divides the chants into two parts (preliminary and main sections) and forms the basis of most modern Samavedic studies and performances.',
      descDeva: 'सामवेदाची सर्वात प्रसिद्ध आणि मोठ्या प्रमाणावर गायली जाणारी शाखा. यात गीतांच्या चाली स्पष्ट करण्यासाठी विशिष्ट अंक आणि स्वरांचे खुणेचे नियम आहेत.'
    },
    {
      name: 'Rāṇāyanīya Saṃhitā',
      deva: 'राणायनीय संहिता',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '1,875 verses, textually identical to Kauthuma',
      structureDeva: '१,८७५ मंत्र, कौथुम शाखेशी समान मजकूर',
      region: 'Karnataka, Gokarna, and Odisha',
      regionDeva: 'कर्नाटक, गोकर्ण व ओडिशा',
      desc: 'Prevalent in Karnataka and Odisha. Though it shares the exact text with the Kauthuma branch, it is distinguished by a slower chanting tempo, different musical notations, and phonetic adjustments (e.g. less nasalization).',
      descDeva: 'कर्नाटक, आंध्र आणि महाराष्ट्राच्या काही भागात (उदा. गोकर्ण) ही परंपरा आहे. लिखित मजकूर कौथुम शाखेसारखाच असला, तरी गायनाचा वेग मंद असतो आणि स्वरांच्या आंदोलनात किंचित फरक असतो.'
    },
    {
      name: 'Jaiminīya / Talavakāra',
      deva: 'जैमिनीय / तलवकार संहिता',
      status: 'Fully Extant (Rare)',
      statusDeva: 'दुर्मिळ पण उपलब्ध',
      structure: 'Textually distinct, features Jaiminiya Brahmana & Upanishad',
      structureDeva: 'वेगळा संगीत स्वर संग्रह',
      region: 'Preserved in Kerala and Tamil Nadu',
      regionDeva: 'केरळ व तमिळनाडू',
      desc: 'An ancient and highly distinct lineage. It features an older, less ornamented musical notation and a different set of chants compared to Kauthuma. Kept alive by a handful of families in Kerala and Tamil Nadu.',
      descDeva: 'सामवेदाची ही सर्वात जुनी आणि अत्यंत कठीण गायन पद्धती आहे. केरळ आणि तमिळनाडूतील मोजक्या नंबुदिरी व इतर ब्राह्मणांनी ही अत्यंत गूढ मौखिक पद्धती जतन केली आहे. यात कौथुमपेक्षा वेगळे राग व स्वर आहेत.'
    }
  ],
  atharva: [
    {
      name: 'Śaunakīya Saṃhitā',
      deva: 'शौनकीय संहिता',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '20 Kāṇḍas (books), 730 Sūktas, 5,977 verses',
      structureDeva: '२० कांडे, ७३० सूक्ते, ५,९७७ मंत्र',
      region: 'Prevalent throughout India',
      regionDeva: 'संपूर्ण भारतात',
      desc: 'The standard, widely studied recension of the Atharvaveda. It contains domestic rites, healing formulas, hymns to the earth (Bhumi Sukta), and political-social prayers.',
      descDeva: 'अथर्ववेदाची ही सर्वात व्यापक आणि प्रमाण मानली जाणारी शाखा आहे. यात गृह्यकर्म, आरोग्य, वनस्पती, औषधोपचार आणि प्रसिद्ध \'भूमी सूक्त\' समाविष्ट आहे. संपूर्ण भारतात याच शाखेचा अभ्यास होतो.'
    },
    {
      name: 'Paippalāda Saṃhitā',
      deva: 'पैप्पलाद संहिता',
      status: 'Fully Extant / Revived',
      statusDeva: 'पूर्णपणे उपलब्ध / पुनरुज्जीवित',
      structure: '20 Kāṇḍas, distinct hymn arrangement',
      structureDeva: '२० कांडे, स्वतंत्र मंत्र रचना',
      region: 'Preserved in Odisha and Jharkhand',
      regionDeva: 'ओडिशा व झारखंड',
      desc: 'A highly ancient recension, historically popular in Kashmir. A unique manuscript was found in Kashmir in the 19th century. The living oral tradition is preserved in Odisha. It contains additional hymns and alternate readings.',
      descDeva: 'शौनकीय शाखेपेक्षा अधिक प्राचीन मानली जाणारी शाखा. १९ व्या शतकात काश्मीरमध्ये याच्या शारदा लिपीतील हस्तलिखिताचा शोध लागला. सध्या ओडिशामधील काही वेदपाठशाळांमध्ये याचे सस्वर मौखिक पठण केले जाते.'
    },
    {
      name: 'Other Historical / Lost Shakhas',
      deva: 'इतर ऐतिहासिक / लुप्त शाखा',
      status: 'Lost',
      statusDeva: 'लुप्त',
      structure: 'Pippalāda and Śaunakīya are the only survivors of the traditional 9',
      structureDeva: '९ पैकी केवळ २ शाखा शिल्लक',
      region: 'Historically Northern & Eastern India',
      regionDeva: 'ऐतिहासिकदृष्ट्या उत्तर व पूर्व भारत',
      desc: 'The Caraṇavyūha mentions seven other branches: Tauda, Mauda, Jājala, Jalada, Brahmavada, Devadarśa, and Cāraṇavaidyā. They are lost, with only references surviving in ancient commentaries.',
      descDeva: 'चरणव्यूह ग्रंथानुसार अथर्ववेदाच्या एकूण ९ शाखा होत्या, जसे की तौद, मौद, जाजल, जलद, ब्रह्मवद, देवदर्श आणि चारणवैद्या. सध्या या शाखांचे मूळ मंत्रसंग्रह पूर्णपणे काळाच्या पडद्याआड गेले आहेत.'
    }
  ]
};

const SUKTAS_DATA: Record<string, KeySukta[]> = {
  rig: [
    {
      name: 'Puruṣa Sūkta',
      nameDeva: 'पुरुषसूक्त',
      citation: 'RV 10.90',
      citationDeva: 'ऋग्वेद १०.९०',
      summary: 'The foundational hymn on the cosmic being (Purusha), detailing the unity of creation and the spiritual origin of the universe and society.',
      summaryDeva: 'विश्वाच्या निर्मितीचा आणि विराट पुरुषाचा (वैश्विक चेतनेचा) पायाभूत ग्रंथ, जो सृष्टीचे ऐक्य आणि उत्पत्ती स्पष्ट करतो.',
      verse: {
        deva: 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥',
        trans: 'sahasraśīrṣā puruṣaḥ sahasrākṣaḥ sahasrapāt |\nsa bhūmiṃ viśvato vṛtvātyatiṣṭhaddaśāṅgulam ||',
        cite: 'RV 10.90.1'
      }
    },
    {
      name: 'Nāsadīya Sūkta',
      nameDeva: 'नासदीय सूक्त',
      citation: 'RV 10.129',
      citationDeva: 'ऋग्वेद १०.१२९',
      summary: 'The famous Hymn of Creation exploring the origin of the cosmos with deep philosophical inquiry, famously questioning: "Who knows whence it first came into being?"',
      summaryDeva: 'विश्वाच्या उत्पत्तीचा सखोल शोध घेणारे प्रसिद्ध सूक्त, ज्यामध्ये अतिशय गंभीर आणि तात्त्विक प्रश्न विचारले गेले आहेत: "सृष्टी नक्की कुठून आली हे कोणाला ठाऊक आहे?"',
      verse: {
        deva: 'नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।\nकिमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥',
        trans: 'nāsadāsīnno sadāsīttadānīm nāsīdrajo no vyomā paro yat |\nkimāvarīvaḥ kuha kasya śarmannambhaḥ kimāsīdgahanaṃ gabhīram ||',
        cite: 'RV 10.129.1'
      }
    },
    {
      name: 'Saṃjñāna Sūkta',
      nameDeva: 'संज्ञान सूक्त',
      citation: 'RV 10.191',
      citationDeva: 'ऋग्वेद १०.१९१',
      summary: 'The final hymn of the Rigveda, offering a powerful prayer for unity, harmony in speech, collective assembly, and common minds.',
      summaryDeva: 'ऋग्वेदाचा शेवटचा भाग, जो मानवी समाज एकत्र राहण्यासाठी आणि विचारांमध्ये ऐक्य साधण्यासाठी सामूहिक प्रार्थनेचा संदेश देतो.',
      verse: {
        deva: 'सङ्गच्छध्वं संवदध्वं सं वो मनांसि जानताम् ।\nदेवा भागं यथा पूर्वे सञ्जानाना उपासते ॥',
        trans: 'saṅgacchadhvaṃ saṃvadadhvaṃ saṃ vo manāṃsi jānatām |\ndevā bhāgaṃ yathā pūrve sañjānānā upāsate ||',
        cite: 'RV 10.191.2'
      }
    },
    {
      name: 'Gāyatrī Mantra (from Savitṛ Sūkta)',
      nameDeva: 'गायत्री मन्त्र (सवीतृ सूक्त)',
      citation: 'RV 3.62.10',
      citationDeva: 'ऋग्वेद ३.६२.१०',
      summary: 'The most sacred and universally chanted Rigvedic verse, addressed to the solar deity Savitṛ, praying for intellectual illumination.',
      summaryDeva: 'सवीतृ (सूर्य) देवतेला उद्देशून रचलेला अतिशय पवित्र आणि लोकप्रिय मंत्र, ज्यामध्ये बुद्धीच्या प्रकाशासाठी प्रार्थना केली आहे.',
      verse: {
        deva: 'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
        trans: 'tat savitur vareṇyaṃ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
        cite: 'RV 3.62.10'
      }
    },
    {
      name: 'Vāk Sūkta / Devī Sūkta',
      nameDeva: 'वाक् सूक्त / देवी सूक्त',
      citation: 'RV 10.125',
      citationDeva: 'ऋग्वेद १०.१२५',
      summary: 'A profound hymn where the goddess Vāk (Speech/Cosmic Power) speaks in the first person, declaring herself as the sustaining energy of the entire universe.',
      summaryDeva: 'वाग्देवतेने स्वतःच्या मुखातून वदलेले सूक्त, ज्यामध्ये ती स्वतःला विश्वाची चेतना व शक्ती म्हणून घोषित करते. शाक्त तत्त्वज्ञानाचा हा मुख्य आधार आहे.',
      verse: {
        deva: 'अहमेव वात इव प्रवाम्य आरभमाणा भुवनानि विश्वा ।\nपरो दिवा पर एना पृथिव्यैतावती महिना संबभूव ॥',
        trans: 'ahameva vāta iva pravāmyārabhamāṇā bhuvanāni viśvā |\nparo divā para enā pṛthivyaitāvatī mahinā saṃbabhūva ||',
        cite: 'RV 10.125.8'
      }
    },
    {
      name: 'Hiraṇyagarbha Sūkta',
      nameDeva: 'हिरण्यगर्भ सूक्त',
      citation: 'RV 10.121',
      citationDeva: 'ऋग्वेद १०.१२१',
      summary: 'Hymn to the "Golden Womb/Child", celebrating the source of all light, life, and creation, asking rhetorically: "To which deity should we offer our worship?"',
      summaryDeva: '\'हिरण्यगर्भ\' म्हणजेच सुवर्ण गर्भाचे (विश्वाच्या उगमस्थानी असणाऱ्या प्रकाशाचे) सूक्त, जे संपूर्ण सृष्टीच्या उत्पत्तीचा ध्यास घेते.',
      verse: {
        deva: 'हिरण्यगर्भः समवर्तताग्रे भूतस्य जातः पतिरेक आसीत् ।\nस दाधार पृथिवीं द्यामुतेमां कस्मै देवाय हविषा विधेम ॥',
        trans: 'hiraṇyagarbhaḥ samavartatāgre bhūtasya jātaḥ patireka āsīt |\nsa dādhāra pṛthivīṃ dyāmutemāṃ kasmai devāya haviṣā vidhema ||',
        cite: 'RV 10.121.1'
      }
    }
  ],
  yajur: [
    {
      name: 'Śrī Rudram (Namakam)',
      nameDeva: 'श्रीरुद्रम् (नमकम्)',
      citation: 'TS 4.5 / VS 16',
      citationDeva: 'तैत्तिरीय ४.५ / वाजसनेयी १६',
      summary: 'A magnificent hymn addressed to Rudra (Shiva) in both his fierce and benevolent aspects, invoking peace, protection, and universal well-being.',
      summaryDeva: 'रुद्र (शिव) यांच्या उग्र आणि शांत दोन्ही रूपांची स्तुती करणारे महान सूक्त, जे शांती, संरक्षण आणि विश्वाच्या कल्याणासाठी गायले जाते.',
      verse: {
        deva: 'नमस्ते रुद्र मन्यव उतोत इषवे नमः ।\nनमस्ते अस्तु धन्वने बाहुभ्यामुत ते नमः ॥',
        trans: 'namaste rudra manyava utota iṣave namaḥ |\nnamaste astu dhanvane bāhubhyāmuta te namaḥ ||',
        cite: 'TS 4.5.1.1'
      }
    },
    {
      name: 'Camakam',
      nameDeva: 'चमकम्',
      citation: 'TS 4.7',
      citationDeva: 'तैत्तिरीय ४.७',
      summary: 'A companion hymn to Sri Rudram, praying for daily physical, mental, agricultural, and spiritual blessings using the repeating refrain "ca me" (and to me).',
      summaryDeva: 'श्रीरुद्र सूक्ताचा जोडभाग, ज्यामध्ये \'च मे\' (आणि मला लाभो) या शब्दांच्या पुनरावृत्तीने अन्न, आरोग्य, बुद्धी व आध्यात्मिक प्रगतीची याचना केली आहे.',
      verse: {
        deva: 'शं च मे मयश्च मे प्रियं च मेऽनुकामश्च मे ।\nकामश्च मे सौमनसश्च मे भद्रं च मे श्रेयश्च मे ॥',
        trans: 'śaṃ ca me mayaśca me priyaṃ ca me\'nukāmaśca me |\nkāmaśca me saumanasaśca me bhadraṃ ca me śreyaśca me ||',
        cite: 'TS 4.7.1'
      }
    },
    {
      name: 'Śivasaiṅkalpa Sūkta',
      nameDeva: 'शिवसङ्कल्प सूक्त',
      citation: 'VS 34.1-6',
      citationDeva: 'वाजसनेयी ३४.१-६',
      summary: 'A beautiful prayer of six verses from the Shukla Yajurveda, focusing on the mind and requesting that it always resolve upon noble and auspicious thoughts.',
      summaryDeva: 'शुक्ल यजुर्वेदातील ६ श्लोकांचे प्रसिद्ध सूक्त, ज्यामध्ये आपले मन नेहमी चांगल्या आणि कल्याणकारी विचारांकडेच वळावे अशी प्रार्थना केली आहे.',
      verse: {
        deva: 'यज्जाग्रतो दूरमुदैति दैवं तदु सुप्तस्य तथैवेति ।\nदूरङ्गमं ज्योतिषां ज्योतिरेकं तन्मे मनः शिवसङ्कल्पमस्तु ॥',
        trans: 'yajjāgrato dūramudaiti daivaṃ tadu suptasya tathaiveti |\ndūraṅgamaṃ jyotiṣāṃ jyotirekaṃ tanme manaḥ śivasaṅkalpamastu ||',
        cite: 'VS 34.1'
      }
    },
    {
      name: 'Īśāvāsya Mantras (Īśa Upaniṣad)',
      nameDeva: 'ईशावास्य मन्त्र (ईशोपनिषद्)',
      citation: 'VS 40',
      citationDeva: 'वाजसनेयी ४०',
      summary: 'The entire 40th and final chapter of the Shukla Yajurveda Samhita, which forms the famous Ishavasya Upanishad, exploring self-realization and action without attachment.',
      summaryDeva: 'शुक्ल यजुर्वेद संहितेचा शेवटचा (४० वा) अध्याय, जो प्रसिद्ध \'ईशोपनिषद\' आहे. यात निष्काम कर्म आणि आत्मज्ञानाचा सुंदर समन्वय सांगितला आहे.',
      verse: {
        deva: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥',
        trans: 'iśā vāsyamidaṃ sarvaṃ yatkiñca jagatyāṃ jagat |\ntena tyaktena bhuñjīthā mā gṛdhaḥ kasyasviddhanam ||',
        cite: 'VS 40.1'
      }
    },
    {
      name: 'Mahāmṛtyuñjaya Mantra',
      nameDeva: 'महामृत्युञ्जय मन्त्र',
      citation: 'VS 3.60 / TS 1.8.6',
      citationDeva: 'वाजसनेयी ३.६० / तैत्तिरीय १.८.६',
      summary: 'The great mantra of liberation from death, wishing for spiritual immortality and physical well-being, addressed to Tryambaka (Shiva).',
      summaryDeva: 'मृत्यूच्या भयापासून मुक्त करणारे आणि अमृतत्वाची प्राप्ती करून देणारे महान सूक्त, ज्यामध्ये शंकराची त्रिनेत्र रूपी आराधना केली आहे.',
      verse: {
        deva: 'त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥',
        trans: 'tryambakaṃ yajāmahe sugandhiṃ puṣṭi-vardhanam |\nurvārukam iva bandhanān mṛtyor mukṣīya mā\'mṛtāt ||',
        cite: 'VS 3.60'
      }
    },
    {
      name: 'Śānti Mantra',
      nameDeva: 'शान्ति मन्त्र',
      citation: 'VS 36.17',
      citationDeva: 'वाजसनेयी ३६.१७',
      summary: 'A grand invocation of peace for the entire cosmos, praying for tranquility in the sky, earth, waters, plants, trees, and the ultimate Brahman.',
      summaryDeva: 'वैश्विक शांततेची प्रार्थना, ज्यामध्ये अंतरिक्ष, पृथ्वी, जल, वनस्पती आणि परमेश्वरासह संपूर्ण ब्रह्मांडासाठी शांतीची याचना केली आहे.',
      verse: {
        deva: 'द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः ।\nवनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि ॥',
        trans: 'dyauḥ śāntirantarikṣaṃ śāntiḥ pṛthivī śāntirāpaḥ śāntiroṣadhayaḥ śāntih |\nvanaspatayaḥ śāntirviśvedevāḥ śāntirbrahma śāntiḥ sarvaṃ śāntih śāntireva śāntih sā mā śāntiredhi ||',
        cite: 'VS 36.17'
      }
    }
  ],
  sama: [
    {
      name: 'Bṛhat Sāma',
      nameDeva: 'बृहत् साम',
      citation: 'SV Gāna Tradition',
      citationDeva: 'सामवेद गान परंपरा',
      summary: 'A magnificent melody sung to express cosmic grandeur and strength. In the Bhagavad Gita (10.35), Lord Krishna declares: "Of hymns, I am the Bṛhat-sāma."',
      summaryDeva: 'वैश्विक भव्यता आणि शक्तीचे प्रदर्शन करणारे सामवेदाचे संगीत. भगवद्गीतेमध्ये (१०.३५) श्रीकृष्ण म्हणतात: "गायनात मी बृहत्-साम आहे."',
      verse: {
        deva: 'वेदानां सामवेदोऽस्मि देवानामस्मि वासवः ।\nइन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ॥',
        trans: 'vedānāṃ sāmavedo\'smi devānāmasmi vāsavaḥ |\nindriyāṇāṃ manaścāsmi bhūtānāmasmi cetanā ||',
        cite: 'Bhagavad Gītā 10.22'
      }
    },
    {
      name: 'Rathantara Sāma',
      nameDeva: 'रथन्तर साम',
      citation: 'SV 1.1.1',
      citationDeva: 'सामवेद १.१.१',
      summary: 'One of the oldest and most sacred melodies of the Sāmaveda, traditionally associated with the cosmic order (Ṛta) and the movement of the sun.',
      summaryDeva: 'सामवेदातील सर्वात जुन्या आणि पवित्र स्वरांपैकी एक, जे वैश्विक नियम (ऋत) आणि सूर्याच्या प्रवासाशी संबंधित मानले जाते.',
      verse: {
        deva: 'अग्न आ याहि वीतये गृणानो हव्यदातये ।\nनि होता सत्सि बर्हिषि ॥',
        trans: 'agna ā yāhi vītaye gṛṇāno havyadātaye |\nni hotā satsi barhiṣi ||',
        cite: 'SV 1.1.1'
      }
    },
    {
      name: 'Vāmadevya Sāma',
      nameDeva: 'वामदेव्य साम',
      citation: 'SV 1.169',
      citationDeva: 'सामवेद १.१६९',
      summary: 'A beautiful melody chanted to invoke absolute harmony, natural growth, and peace, symbolizing the vital breath (Prana) and cosmic integration.',
      summaryDeva: 'कौठुंबिक आणि सामाजिक ऐक्य व शांती प्रस्थापित करण्यासाठी गायले जाणारे सामवेदाचे अत्यंत लोकप्रिय संगीत, जे प्राण आणि विश्वाचे नाते स्पष्ट करते.',
      verse: {
        deva: 'कया नश्चित्र आ भुवदूती सदावृधः सखा ।\nकया शचिष्ठया वृता ॥',
        trans: 'kayā naścitra ā bhuvadūtī sadāvṛdhaḥ sakhā |\nkayā śaciṣṭhayā vṛtā ||',
        cite: 'SV 1.169'
      }
    },
    {
      name: 'Pavamāna Soma Chants',
      nameDeva: 'पवमान सोम गान',
      citation: 'SV 2.1.1.1',
      citationDeva: 'सामवेद २.१.१.१',
      summary: 'Hymns sung during the pressing and purification of the Soma juice, invoking spiritual ecstasy, inner purification, and light.',
      summaryDeva: 'सोमररस शुद्ध करताना गायले जाणारे मंत्र, जे मनाची शुद्धी, आध्यात्मिक आनंद आणि अंतःकरणातील प्रकाशाचे आवाहन करतात.',
      verse: {
        deva: 'उच्चा ते जातम् अंधसो दिवि सद्भूम्य आ ददे ।\nउग्रं शर्म mahi श्रवः ॥',
        trans: 'uccā te jātam andhaso divi sadbhūmya ā dade |\nugraṃ śarma mahi śravaḥ ||',
        cite: 'SV 2.1.1.1'
      }
    },
    {
      name: 'Jyeṣṭha Sāma',
      nameDeva: 'ज्येष्ठ साम',
      citation: 'SV 1.467',
      citationDeva: 'सामवेद १.४६७',
      summary: 'The "Elder Chants", highly sacred melodies used during major sacrifices to cleanse sins and align the consciousness with the cosmic head.',
      summaryDeva: 'ज्येष्ठ साम म्हणजे पापांचे क्षालन करणारे आणि मानवी चेतनेला वैश्विक विराट स्वरूपाशी जोडणारे सामवेदाचे प्रमुख आणि पवित्र मंत्र.',
      verse: {
        deva: 'मूर्धानं दिवो अरतिं पृथिव्या वैश्वानरमृत आ जातमग्निम् ।\nकविं सम्राजमतिथिं जनानामासन्ना पात्रं जनयन्त देवाः ॥',
        trans: 'mūrdhānaṃ divo aratiṃ pṛthivyā vaiśvānarāmṛta ā jātamagnim |\nkaviṃ samrājamatitiṃ janānāmāsannā pātraṃ janayenta devāḥ ||',
        cite: 'SV 1.467'
      }
    }
  ],
  atharva: [
    {
      name: 'Bhūmi Sūkta (Pṛthivī Sūkta)',
      nameDeva: 'भूमि सूक्त (पृथ्वी सूक्त)',
      citation: 'AV 12.1',
      citationDeva: 'अथर्ववेद १२.१',
      summary: 'A magnificent 63-verse hymn to Mother Earth, celebrated as the world\'s earliest anthem of ecological consciousness and harmony between humans and nature.',
      summaryDeva: 'पृथ्वीमातेची स्तुती करणारे ६३ श्लोकांचे भव्य सूक्त. पर्यावरण चेतना आणि मनुष्य व निसर्ग यांच्यातील संबंध स्पष्ट करणारे जगातील पहिले निसर्गगीत मानले जाते.',
      verse: {
        deva: 'शिला भूमिरश्मा पांसुः सा भूमिः संधृता मयू ।\nतस्यै  हिरण्यवक्षसे पृथिव्या अकरं नमः ॥\nमाता भूमिः पुत्रो अहं पृथिव्याः ॥',
        trans: 'śilā bhūmi raśmā pāṃsuḥ sā bhūmiḥ saṃdhṛtā mayū |\ntasyai hiraṇyavakṣase pṛthivyā akaraṃ namaḥ ||\nmātā bhūmiḥ putro ahaṃ pṛthivyāḥ ||',
        cite: 'AV 12.1.26 / 12.1.12'
      }
    },
    {
      name: 'Prāṇa Sūkta',
      nameDeva: 'प्राण सूक्त',
      citation: 'AV 11.4',
      citationDeva: 'अथर्ववेद ११.४',
      summary: 'A profound hymn glorifying Prāṇa (the vital breath/life-force) as the supreme ruler of all beings, which animates the universe.',
      summaryDeva: 'प्राणाला (प्राणवायू/जीवनशक्ती) विश्वाचा अधिपती मानून त्याची स्तुती करणारे सूक्त, जे सजीव सृष्टीला चैतन्य प्रदान करते.',
      verse: {
        deva: 'प्राणाय नमो यस्य सर्वमिदं वशे ।\nयो भूतः सर्वस्येश्वरो यस्मिन् सर्वं प्रतिष्ठितम् ॥',
        trans: 'prāṇāya namo yasya sarvamidaṃ vaśe |\nyo bhūtaḥ sarvasyeśvaro yasmin sarvaṃ pratiṣṭhitam ||',
        cite: 'AV 11.4.1'
      }
    },
    {
      name: 'Kāla Sūkta',
      nameDeva: 'काल सूक्त',
      citation: 'AV 19.53-54',
      citationDeva: 'अथर्ववेद १९.५३-५४',
      summary: 'A profound philosophical hymn that personifies Time (Kāla) as the primordial horse, the generator of heaven and earth, and the supreme ruler of all.',
      summaryDeva: 'काळ (वेळ) या वैश्विक तत्त्वाची स्तुती करणारे सूक्त, ज्यामध्ये काळाला सर्व सृष्टीचा निर्माता, नियंत्रक आणि सर्वोच्च सत्ता मानले गेले आहे.',
      verse: {
        deva: 'कालो अश्वो वहति सप्तरश्मिः सहस्राक्षो अजरो भूरिरेताः ।\nतमारोहन्ति कवयो विपश्चितस्तस्य चक्रा भुवनानि विश्वा ॥',
        trans: 'kālo aśvo vahati saptaraśmiḥ sahasrākṣo ajaro bhūriretāḥ |\ntamārohanti kavayo vipaścitastasya cakrā bhuvanāni viśvā ||',
        cite: 'AV 19.53.1'
      }
    },
    {
      name: 'Brahma-Cārī Sūkta',
      nameDeva: 'ब्रह्मचारिसूक्त',
      citation: 'AV 11.5',
      citationDeva: 'अथर्ववेद ११.५',
      summary: 'Glorifies the spiritual student (Brahmachari) who, through self-discipline and austerity (Tapas), becomes a cosmic force that sustains the gods and the universe.',
      summaryDeva: 'ब्रह्मचाऱ्याचे (विद्यार्थी/साधक) महात्म्य सांगणारे सूक्त. तपश्चर्या आणि संयमाद्वारे साधक स्वतः कसा वैश्विक शक्तीचा भाग बनतो याचे यात सुंदर वर्णन आहे.',
      verse: {
        deva: 'ब्रह्मचारीष्णंश्चरति रोदसी उभे तस्मिन्देवाः संमनसो भवन्ति ।\nस दाधार पृथिवीं दिवं च स आचार्यं तपसा पिपर्ति ॥',
        trans: 'brahmacārīṣṇaṃścarati rodasī ubhe tasmindevāḥ saṃmanaso bhavanti |\nsa dādhāra pṛthivīṃ divaṃ ca sa ācāryaṃ tapasā piparti ||',
        cite: 'AV 11.5.1'
      }
    },
    {
      name: 'Bhaiṣajya Sūkta',
      nameDeva: 'भेषज्य सूक्त',
      citation: 'AV 1.2',
      citationDeva: 'अथर्ववेद १.२',
      summary: 'Healing hymns dedicated to curing physical diseases, utilizing natural elements like water, wind, and herbs, forming the basis of Ayurveda.',
      summaryDeva: 'शारीरिक व्याधींचे निवारण करण्यासाठी रचलेले रोगनिवारक सूक्त, ज्यामध्ये जल, वायू व औषधी वनस्पतींच्या साह्याने आरोग्य प्राप्तीची प्रार्थना केली आहे.',
      verse: {
        deva: 'विद्मा शरस्य पितरं पर्जन्यं भूरिधायसम् ।\nविद्मो ष्वस्य मातरं पृथिवीं भूरिवर्पसम् ॥',
        trans: 'vidmā śarasya pitaraṃ parjanyaṃ bhūridhāyasam |\nvidmo ṣvasya mātaraṃ pṛthivīṃ bhūrivarpasam ||',
        cite: 'AV 1.2.1'
      }
    },
    {
      name: 'Kāmada Sūkta',
      nameDeva: 'कामद सूक्त',
      citation: 'AV 19.52',
      citationDeva: 'अथर्ववेद १९.५२',
      summary: 'Hymn to Kama (desire), celebrated as the primordial seed of mind and the creative impulse of the cosmos, which precedes all creation.',
      summaryDeva: 'काम (इच्छा किंवा सृजनशीलता) या शक्तीची स्तुती, जे सृष्टीच्या आरंभी मनाचे पहिले बीज व उत्पत्तीची पहिली प्रेरणा म्हणून अस्तित्वात होते.',
      verse: {
        deva: 'कामस्तदग्रे समवर्तत मनसो रेतः प्रथमं यदासीत् ।\nस काम कामेन बृहता सयोनी रायस्पोषं यजमानाय धेहि ॥',
        trans: 'kāmastadgre samavartata manaso retaḥ prathamaṃ yadāsīt |\nsa kāma kāmena bṛhatā sayonī rāyaspoṣaṃ yajamānāya dhēhi ||',
        cite: 'AV 19.52.1'
      }
    }
  ]
};

const BRAHMANAS_DATA: Record<string, Shakha[]> = {
  rig: [
    {
      name: 'Aitareya Brāhmaṇa',
      deva: 'ऐतरेय ब्राह्मण',
      category: 'Śākala recension',
      categoryDeva: 'शाकल शाखा',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '40 adhyāyas in 8 pañcikās',
      structureDeva: '८ पञ्चिका, ४० अध्याय',
      region: 'Pan-Indian; principal Rigvedic Brāhmaṇa',
      regionDeva: 'संपूर्ण भारतात; ऋग्वेदाचा मुख्य ब्राह्मण ग्रंथ',
      desc: 'Attributed to sage Mahidāsa Aitareya. The principal Brāhmaṇa of the Rigveda. Treats the Soma sacrifice in detail, the royal consecration (Rājasūya), the Mahāvrata winter rite, and contains the famous Śunaḥśepa narrative — one of the earliest extended stories in Indic literature.',
      descDeva: 'महिदास ऐतरेय ऋषींची रचना. ऋग्वेदाचा मुख्य ब्राह्मण ग्रंथ. सोमयाग, राजसूय अभिषेक, महाव्रत हिवाळी विधी आणि भारतीय साहित्यातील सर्वात प्राचीन विस्तृत कथांपैकी एक मानली जाणारी शुनःशेप कथा यात आहे.'
    },
    {
      name: 'Kauṣītaki / Śāṅkhāyana Brāhmaṇa',
      deva: 'कौषीतकि / शाङ्खायन ब्राह्मण',
      category: 'Bāṣkala / Śāṅkhāyana recension',
      categoryDeva: 'बाष्कल / शाङ्खायन शाखा',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '30 adhyāyas',
      structureDeva: '३० अध्याय',
      region: 'Historically Gujarat & Rajasthan; surviving in manuscripts',
      regionDeva: 'ऐतिहासिकदृष्ट्या गुजरात व राजस्थान',
      desc: 'The second surviving Rigvedic Brāhmaṇa. More systematic than the Aitareya — opens with the consecration of the priest and proceeds through the Agnihotra, the new- and full-moon rites, the four-monthly rites, and the soma sacrifices. The accompanying Kauṣītaki Āraṇyaka and Upaniṣad form one of the most important Rigvedic intellectual lineages.',
      descDeva: 'दुसरा उपलब्ध ऋग्वेदीय ब्राह्मण. ऐतरेयापेक्षा अधिक सुव्यवस्थित — पुरोहित दीक्षा, अग्निहोत्र, दर्श-पूर्णमास, चातुर्मास्य व सोमयाग या क्रमाने. यासोबत येणारे कौषीतकि आरण्यक व उपनिषद ऋग्वेदीय बौद्धिक परंपरेचे महत्त्वाचे अंग आहेत.'
    },
    {
      name: 'Paiṅgi Brāhmaṇa',
      deva: 'पैङ्गि ब्राह्मण',
      category: 'Lost Rigvedic recension',
      categoryDeva: 'लुप्त ऋग्वेद शाखा',
      status: 'Lost',
      statusDeva: 'लुप्त',
      structure: 'No surviving text; cited by later commentators',
      structureDeva: 'मूळ ग्रंथ अनुपलब्ध; भाष्यांत संदर्भ',
      region: 'Historically Northern India',
      regionDeva: 'ऐतिहासिकदृष्ट्या उत्तर भारत',
      desc: 'A Brāhmaṇa belonging to a now-lost Rigvedic shakha (probably Paiṅgi). Quoted by Sāyaṇa and other mediaeval commentators on the Veda, but the independent text has not survived.',
      descDeva: 'पैङ्गि नावाच्या आता लुप्त झालेल्या ऋग्वेद शाखेचा ब्राह्मण. सायणाचार्य व इतर मध्ययुगीन भाष्यकारांनी याचे अवतरण दिले आहे, परंतु स्वतंत्र ग्रंथ शिल्लक नाही.'
    }
  ],
  yajur: [
    {
      name: 'Śatapatha Brāhmaṇa — Mādhyandina',
      deva: 'शतपथ ब्राह्मण — माध्यन्दिन',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '14 kāṇḍas, 100 adhyāyas, 7,624 brāhmaṇas',
      structureDeva: '१४ कांडे, १०० अध्याय, ७,६२४ ब्राह्मण',
      region: 'North & Central India',
      regionDeva: 'उत्तर व मध्य भारत',
      desc: 'The "Brāhmaṇa of a Hundred Paths" — the longest single text of the Vedic prose canon. Attributed in part to Yājñavalkya. Treats every major Vedic rite, contains the earliest Indic flood narrative (Manu and the fish), the Pravargya, the Aśvamedha, the Agnicayana fire-altar construction, and embeds the Bṛhadāraṇyaka Upaniṣad as its final book.',
      descDeva: '"शंभर मार्गांचा ब्राह्मण" — वैदिक गद्य परंपरेचा सर्वात मोठा ग्रंथ. याज्ञवल्क्य ऋषींना श्रेय. सर्व प्रमुख वैदिक विधी, मनू व मत्स्याचा प्राचीनतम जलप्रलय वृत्तांत, प्रवर्ग्य, अश्वमेध, अग्निचयन आणि शेवटी बृहदारण्यक उपनिषद यांचा समावेश.'
    },
    {
      name: 'Śatapatha Brāhmaṇa — Kāṇva',
      deva: 'शतपथ ब्राह्मण — काण्व',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '17 kāṇḍas, 104 adhyāyas',
      structureDeva: '१७ कांडे, १०४ अध्याय',
      region: 'South India, Maharashtra, Odisha',
      regionDeva: 'दक्षिण भारत, महाराष्ट्र, ओडिशा',
      desc: 'The Kāṇva recension of the Śatapatha — textually close to the Mādhyandina but differently divided, shorter in some passages and longer in others. Both recensions are accepted and chanted.',
      descDeva: 'शतपथ ब्राह्मणाची काण्व शाखा — माध्यन्दिनासारखीच पण विभागणी वेगळी; काही ठिकाणी लहान, इतर ठिकाणी मोठी. दोन्ही शाखा मान्य आहेत व पठण केल्या जातात.'
    },
    {
      name: 'Taittirīya Brāhmaṇa',
      deva: 'तैत्तिरीय ब्राह्मण',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '3 kāṇḍas, 28 prapāṭhakas',
      structureDeva: '३ कांडे, २८ प्रपाठक',
      region: 'South India',
      regionDeva: 'दक्षिण भारत',
      desc: 'A continuation of the Taittirīya Saṃhitā in the same Black-Yajurveda manner — interleaving mantra and prose explanation. Treats the Nakṣatra-iṣṭi, the Aśvamedha, the Puruṣamedha, and contains the seed of the Pañcāgni-vidyā that the Upaniṣads later expand.',
      descDeva: 'तैत्तिरीय संहितेचाच विस्तार — कृष्ण यजुर्वेदी पद्धतीने मंत्र व गद्य विधी एकत्र. नक्षत्रेष्टि, अश्वमेध, पुरुषमेध, आणि उपनिषदांमध्ये पुढे विस्तारित होणाऱ्या पञ्चाग्निविद्येचे बीज यात आहे.'
    },
    {
      name: 'Maitrāyaṇī Brāhmaṇa',
      deva: 'मैत्रायणी ब्राह्मण',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Partially Extant',
      statusDeva: 'अंशतः उपलब्ध',
      structure: 'No separate Brāhmaṇa text; exposition embedded in the Saṃhitā',
      structureDeva: 'स्वतंत्र ब्राह्मण ग्रंथ नाही; विवेचन संहितेतच गुंफलेले',
      region: 'Western Maharashtra, Gujarat',
      regionDeva: 'पश्चिम महाराष्ट्र, गुजरात',
      desc: 'In the Maitrāyaṇī school the Brāhmaṇa-style material is not a separate book — it is woven into the prose passages of the Maitrāyaṇī Saṃhitā itself. This is the defining feature of all Kṛṣṇa-Yajurveda schools, but most pronounced here. The Maitrāyaṇī Upaniṣad continues this line.',
      descDeva: 'मैत्रायणी शाखेत ब्राह्मण-स्वरूपाचे विवेचन स्वतंत्र ग्रंथ म्हणून नाही — ते मैत्रायणी संहितेच्याच गद्य भागांत गुंफलेले आहे. कृष्ण यजुर्वेदाच्या सर्व शाखांचे हे वैशिष्ट्य, पण येथे सर्वाधिक स्पष्ट. मैत्रायणी उपनिषद् हीच परंपरा पुढे नेते.'
    },
    {
      name: 'Kāṭhaka Brāhmaṇa',
      deva: 'काठक ब्राह्मण',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Partially Extant',
      statusDeva: 'अंशतः उपलब्ध',
      structure: 'Fragments only; main Brāhmaṇa lost',
      structureDeva: 'केवळ खंडित भाग उपलब्ध',
      region: 'Historically Kashmir',
      regionDeva: 'ऐतिहासिकदृष्ट्या काश्मीर',
      desc: 'The Brāhmaṇa of the Kaṭha school. The main text is lost; what survives is the Kāṭhaka-saṅkalana (a compilation of citations) and small fragments preserved in Kashmiri birch-bark manuscripts. The famous Kaṭha Upaniṣad descends from this lineage.',
      descDeva: 'कठ शाखेचा ब्राह्मण. मुख्य ग्रंथ लुप्त; काठक-संकलन (अवतरण-संग्रह) व काश्मिरी भूर्जपत्र हस्तलिखितांतील छोटे तुकडे शिल्लक. प्रसिद्ध कठ उपनिषद् याच परंपरेतून आले आहे.'
    }
  ],
  sama: [
    {
      name: 'Pañcaviṃśa (Tāṇḍya-mahā) Brāhmaṇa',
      deva: 'पञ्चविंश (ताण्ड्यमहा) ब्राह्मण',
      category: 'Kauthuma / Rāṇāyanīya',
      categoryDeva: 'कौथुम / राणायनीय',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '25 adhyāyas (hence "Pañcaviṃśa" — twenty-five)',
      structureDeva: '२५ अध्याय (म्हणून "पञ्चविंश")',
      region: 'Gujarat, Maharashtra, Tamil Nadu',
      regionDeva: 'गुजरात, महाराष्ट्र, तमिळनाडू',
      desc: 'Also known as the Tāṇḍya-mahā-brāhmaṇa. The principal Sāmavedic Brāhmaṇa — gives the choral-rite procedure, the Stomas, the Vrātyastoma (re-admission of outsiders), and the long sacrificial sessions (sattras). The widest catalogue of Sāmavedic chants in any single text.',
      descDeva: 'ताण्ड्य-महा-ब्राह्मण म्हणूनही ओळखला जातो. सामवेदाचा मुख्य ब्राह्मण ग्रंथ — गायन विधी, स्तोम, व्रात्यस्तोम (बाहेरील लोकांना पुन्हा परंपरेत आणणारा विधी) आणि दीर्घ सत्र विधी. एका ग्रंथात सामगानाचा सर्वात विस्तृत संग्रह.'
    },
    {
      name: 'Ṣaḍviṃśa Brāhmaṇa',
      deva: 'षड्विंश ब्राह्मण',
      category: 'Kauthuma',
      categoryDeva: 'कौथुम',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '6 adhyāyas — the "twenty-sixth" appendix to the Pañcaviṃśa',
      structureDeva: '६ अध्याय — पञ्चविंशास "सव्विसावे" परिशिष्ट',
      region: 'Gujarat, Maharashtra, Karnataka',
      regionDeva: 'गुजरात, महाराष्ट्र, कर्नाटक',
      desc: 'Literally "the twenty-sixth" — a six-chapter appendix to the Pañcaviṃśa. Treats expiation rites for unfavourable omens and atharvanic remedies; its final chapter is the Adbhuta-brāhmaṇa on prodigies and portents.',
      descDeva: 'शब्दशः "सव्विसावा" — पञ्चविंशास जोडलेला सहा अध्यायांचा परिशिष्ट. अशुभ शकुनांच्या प्रायश्चित्तविधी व अथर्ववेदीय शान्ती; शेवटचा अध्याय अद्भुत-ब्राह्मण असून तो उल्कापात व विलक्षण घटनांचा.'
    },
    {
      name: 'Sāmavidhāna Brāhmaṇa',
      deva: 'सामविधान ब्राह्मण',
      category: 'Kauthuma',
      categoryDeva: 'कौथुम',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '3 prapāṭhakas',
      structureDeva: '३ प्रपाठक',
      region: 'Pan-Sāmavedic',
      regionDeva: 'सर्व सामवेदी परंपरांत',
      desc: 'On the ritual application (vidhāna) of sāman chants — which chant cures which ailment, which secures rain, which secures progeny. The closest the Sāmavedic Brāhmaṇa literature comes to the medical-apotropaic register of the Atharvaveda.',
      descDeva: 'सामगायनांच्या विधानाविषयी (कोणते साम कोणत्या रोगाचे, पावसाचे, प्रजेचे) — सामवेदी ब्राह्मण साहित्यातील अथर्ववेदीय वैद्यक-शांती शैलीच्या जवळ जाणारा ग्रंथ.'
    },
    {
      name: 'Ārṣeya Brāhmaṇa',
      deva: 'आर्षेय ब्राह्मण',
      category: 'Kauthuma',
      categoryDeva: 'कौथुम',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '3 prapāṭhakas — an index of ṛṣis',
      structureDeva: '३ प्रपाठक — ऋषींची सूची',
      region: 'Pan-Sāmavedic',
      regionDeva: 'सर्व सामवेदी परंपरांत',
      desc: 'A short technical work giving the ṛṣi (sage) traditionally associated with each chant — Sāmaveda’s answer to a "table of authors". The Jaiminīya school has its own parallel Ārṣeya.',
      descDeva: 'प्रत्येक सामगानाशी निगडित ऋषीचा निर्देश करणारा छोटा ग्रंथ — सामवेदाची "रचयिता-सूची". जैमिनीय शाखेचा स्वतंत्र समांतर आर्षेय ग्रंथ आहे.'
    },
    {
      name: 'Devatādhyāya Brāhmaṇa',
      deva: 'देवताध्याय ब्राह्मण',
      category: 'Kauthuma',
      categoryDeva: 'कौथुम',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '1 chapter',
      structureDeva: '१ अध्याय',
      region: 'Pan-Sāmavedic',
      regionDeva: 'सर्व सामवेदी परंपरांत',
      desc: 'A single short chapter on the deities to whom the various chants are addressed — and on the symbolism of the seven svaras as gods, sages and metres.',
      descDeva: 'सामगानांच्या देवतांविषयीचा एक छोटा अध्याय — सात स्वरांचे देव, ऋषि व छंद यांच्याशी असलेल्या प्रतीकात्मक संबंधाचे विवेचन.'
    },
    {
      name: 'Saṃhitopaniṣad Brāhmaṇa',
      deva: 'संहितोपनिषद् ब्राह्मण',
      category: 'Kauthuma',
      categoryDeva: 'कौथुम',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '5 khaṇḍas',
      structureDeva: '५ खंड',
      region: 'Pan-Sāmavedic',
      regionDeva: 'सर्व सामवेदी परंपरांत',
      desc: 'A brief, esoteric work on the mystical correspondences between sāman chants and inner physiology — bridge between Brāhmaṇa and Upaniṣad in the Sāmavedic line.',
      descDeva: 'सामगान व अंतःस्थ शरीर यांच्या गूढ अनुरूपतांविषयीचा एक छोटा, गुह्य ग्रंथ — सामवेदी परंपरेत ब्राह्मण व उपनिषद यांच्यातील पूल.'
    },
    {
      name: 'Vaṃśa Brāhmaṇa',
      deva: 'वंश ब्राह्मण',
      category: 'Kauthuma',
      categoryDeva: 'कौथुम',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '1 short chapter — a teacher-lineage',
      structureDeva: '१ छोटा अध्याय — गुरुपरंपरा',
      region: 'Pan-Sāmavedic',
      regionDeva: 'सर्व सामवेदी परंपरांत',
      desc: 'The "lineage" Brāhmaṇa — a single chapter listing the unbroken chain of teachers through whom the Sāmavedic chants were transmitted. The closest the Vedic corpus comes to a list of its own pre-classical scholars.',
      descDeva: '"वंश" — सामवेदी गायन संक्रमित करणाऱ्या अखंड गुरुपरंपरेची सूची असलेला एकच अध्याय. वैदिक साहित्यात आपल्याच पूर्वशास्त्रीय आचार्यांची सूची देणारा सर्वात जवळचा ग्रंथ.'
    },
    {
      name: 'Jaiminīya Brāhmaṇa',
      deva: 'जैमिनीय ब्राह्मण',
      category: 'Jaiminīya / Talavakāra',
      categoryDeva: 'जैमिनीय / तलवकार',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '3 kāṇḍas, ~1,348 khaṇḍas',
      structureDeva: '३ कांडे, सुमारे १,३४८ खंड',
      region: 'Preserved in Kerala and Tamil Nadu',
      regionDeva: 'केरळ व तमिळनाडूत जतन',
      desc: 'The Brāhmaṇa of the Jaiminīya school — the longest and most narrative of all Sāmavedic Brāhmaṇas, with the largest single collection of Vedic legends (the tales of Cyavana and Sukanyā, Bhṛgu’s vision of the world to come, the dialogue of Yama and the dog Sārameya).',
      descDeva: 'जैमिनीय शाखेचा ब्राह्मण — सर्व सामवेदी ब्राह्मणांत सर्वात मोठा व कथात्मक. च्यवन-सुकन्या, भृगूचा परलोक-दर्शन, यम व सारमेय कुत्र्याचा संवाद यांसारख्या वैदिक कथांचा सर्वात मोठा एकल संग्रह.'
    }
  ],
  atharva: [
    {
      name: 'Gopatha Brāhmaṇa',
      deva: 'गोपथ ब्राह्मण',
      category: 'Śaunakīya & Paippalāda',
      categoryDeva: 'शौनकीय व पैप्पलाद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: 'Two parts — Pūrva (5 prapāṭhakas) and Uttara (6 prapāṭhakas)',
      structureDeva: 'दोन भाग — पूर्व (५ प्रपाठक), उत्तर (६ प्रपाठक)',
      region: 'Atharvavedic communities across India',
      regionDeva: 'भारतातील अथर्ववेदी परंपरांत',
      desc: 'The only surviving Brāhmaṇa of the Atharvaveda. The Pūrva-bhāga lays out the supremacy of the Atharvan and the Brahman priest (who oversees the whole sacrifice); the Uttara-bhāga gives the technical procedure of the Soma rite from the Atharvan standpoint. Quotes the other three Vedas extensively and is one of the latest of the Brāhmaṇas.',
      descDeva: 'अथर्ववेदाचा एकमेव उपलब्ध ब्राह्मण. पूर्व-भाग अथर्वन व ब्रह्मा पुरोहित (संपूर्ण यज्ञाचा निरीक्षक) यांचे श्रेष्ठत्व प्रतिपादन करतो; उत्तर-भाग अथर्वनी दृष्टीने सोमयागाची तांत्रिक प्रक्रिया देतो. इतर तीन वेदांतून विपुल अवतरण; सर्वात उत्तरकालीन ब्राह्मणांपैकी एक.'
    }
  ]
};

const PASSAGES_DATA: Record<string, KeySukta[]> = {
  rig: [
    {
      name: 'Opening — Agni the lowest, Viṣṇu the highest',
      nameDeva: 'मंगलाचरण — अग्नि व विष्णु',
      citation: 'AB 1.1.1',
      citationDeva: 'ऐतरेय ब्राह्मण १.१.१',
      summary: 'The first sentence of the Aitareya Brāhmaṇa. Places Agni at the threshold (the fire on the household altar) and Viṣṇu at the limit (the sun, the wide-stepper) — and locates every other deity between them. The Brāhmaṇa’s entire cosmology in one line.',
      summaryDeva: 'ऐतरेय ब्राह्मणाचे पहिले वाक्य. अग्नीला उंबरठ्यावर (कुटुंबाच्या वेदीवरील अग्नि) आणि विष्णूला सीमेवर (सूर्य, उरुक्रम) ठेवते — आणि बाकीच्या सर्व देवता या दोघांमध्ये स्थापन करते. एका ओळीत ब्राह्मणाची संपूर्ण विश्वरचना.',
      verse: {
        deva: 'अग्निर्वै देवानामवमो विष्णुः परमस्तदन्तरेण सर्वा अन्या देवताः ॥',
        trans: 'agnir vai devānām avamo viṣṇuḥ paramas tad antareṇa sarvā anyā devatāḥ ||',
        cite: 'AB 1.1.1'
      }
    },
    {
      name: 'The Śunaḥśepa narrative',
      nameDeva: 'शुनःशेपाख्यान',
      citation: 'AB 7.13–18',
      citationDeva: 'ऐतरेय ब्राह्मण ७.१३–१८',
      summary: 'King Hariścandra promises Varuṇa his son in sacrifice in exchange for a son of his own. When the moment comes, the boy is replaced by Śunaḥśepa — a brahmin’s son sold by his father for a hundred cows. Bound to the stake, Śunaḥśepa prays his way through verses of the Ṛgveda; each verse loosens a binding. Recited at every Rājasūya consecration, and one of the earliest extended narratives in any Indic source.',
      summaryDeva: 'राजा हरिश्चंद्र पुत्र मिळवण्याच्या बदल्यात वरुणाला आपला पुत्र अर्पण करण्याचे वचन देतो. प्रत्यक्ष यज्ञ-वेळी, मुलाच्या ऐवजी शुनःशेप — ज्याला त्याच्या वडिलांनी शंभर गायींच्या बदल्यात विकले होते — स्तंभाला बांधले जाते. शुनःशेप ऋग्वेदातील ऋचांच्या आधारे प्रार्थना करतो आणि प्रत्येक ऋचेसरशी एक बंधन सुटते. राजसूय अभिषेकात प्रत्येक वेळी पठण होणारी ही कथा भारतीय परंपरेतील सर्वात प्राचीन विस्तृत कथांपैकी एक.'
    },
    {
      name: 'The Mahāvrata winter rite',
      nameDeva: 'महाव्रत — हिवाळी विधी',
      citation: 'AB 5.13–34',
      citationDeva: 'ऐतरेय ब्राह्मण ५.१३–३४',
      summary: 'The "Great Vow" — a year-long sattra closing at the winter solstice. The Aitareya gives the most detailed surviving account: the chariot race, the riddle-contest between hotṛ and udgātṛ, the symbolic intercourse on the seat. The pre-classical ancestor of every later Indian solstice festival.',
      summaryDeva: '"महाव्रत" — हिवाळ्याच्या संक्रांतीला संपणारा वर्षभर चालणारा सत्र. ऐतरेय यात सर्वात विस्तृत वर्णन देते: रथशर्यत, होता व उद्गाता यांच्यातील पहेली-स्पर्धा, आसनावरचा प्रतीकात्मक संग. नंतरच्या प्रत्येक भारतीय संक्रांती उत्सवाचा पूर्व-शास्त्रीय पूर्वज.'
    },
    {
      name: 'The Rājasūya consecration',
      nameDeva: 'राजसूय अभिषेक',
      citation: 'AB 7.13 ff · 8.5–28',
      citationDeva: 'ऐतरेय ब्राह्मण ७.१३ ff · ८.५–२८',
      summary: 'The longest single treatment of royal consecration in the Vedic prose corpus. The eighth book gives the formula spoken over the king as he is sprinkled with the consecrating waters from the rivers of his realm — a passage that re-appears, almost word for word, in mediaeval coronations a thousand years later.',
      summaryDeva: 'वैदिक गद्यात राजाभिषेकाचे सर्वात विस्तृत वर्णन. आठव्या कांडात राज्याच्या नद्यांच्या जलाने राजाला अभिषेक करताना उच्चारली जाणारी सूत्ररचना — हजार वर्षांनंतरच्या मध्ययुगीन राज्याभिषेकांत जवळजवळ शब्दशः याच ओळी पुन्हा येतात.'
    },
    {
      name: 'The Agnihotra exposition',
      nameDeva: 'अग्निहोत्र विवेचन',
      citation: 'KB 2',
      citationDeva: 'कौषीतकि ब्राह्मण २',
      summary: 'The Kauṣītaki’s second chapter is the locus classicus on the daily fire-offering. Treats the rite from waking to first light: the kindling, the libation, the placement of fuel-sticks, and the meditation on the sun rising as Agni reborn each morning.',
      summaryDeva: 'कौषीतकि ब्राह्मणाचा दुसरा अध्याय दैनिक अग्निहोत्राचा मूळ संदर्भ. जागृतीपासून पहाटेपर्यंतचा विधी — समिधाधान, आहुति, इंधनाची मांडणी, आणि उदयोन्मुख सूर्य म्हणजे रोज पुनर्जन्म घेणारा अग्नि — हे चिंतन.'
    }
  ],
  yajur: [
    {
      name: 'Manu and the fish — the Indic flood',
      nameDeva: 'मनू व मत्स्य — जलप्रलय',
      citation: 'ŚB 1.8.1.1–10',
      citationDeva: 'शतपथ ब्राह्मण १.८.१.१–१०',
      summary: 'The earliest surviving Indic flood narrative. A small fish in Manu’s washing-water asks for protection, grows enormous, warns him of the coming deluge, and tows his boat to a northern mountain through the rising waters. Centuries earlier than the Mahābhārata and Purāṇic versions, and the source they all rework.',
      summaryDeva: 'भारतातील सर्वात प्राचीन उपलब्ध जलप्रलय कथा. मनूच्या प्रक्षालन-जलात एक छोटा मासा रक्षणाची याचना करतो, अति विशाल होतो, येणाऱ्या प्रलयाचा इशारा देतो आणि वाढत्या जलाशयातून मनूची नौका उत्तरेच्या पर्वतापर्यंत ओढून नेतो. महाभारत व पुराणांच्या आवृत्त्यांपेक्षा शतकानुशतके प्राचीन — त्या सर्वांचा मूळ स्रोत.',
      verse: {
        deva: 'मनवे ह वै प्रातरवनेग्यमुदकमाजहुर्यथेदं पाणिभ्यामवनेजनायाहरन्त्येवम् ।\nतस्यावनेनिजानस्य मत्स्यः पाणी आपेदे ॥',
        trans: 'manave ha vai prātar avanegyam udakam ājahur yathedaṃ pāṇibhyām avanejanāyāharanty evam |\ntasyāvanenijānasya matsyaḥ pāṇī āpede ||',
        cite: 'ŚB 1.8.1.1'
      }
    },
    {
      name: 'The Aśvamedha — horse sacrifice',
      nameDeva: 'अश्वमेध',
      citation: 'ŚB 13.1–5',
      citationDeva: 'शतपथ ब्राह्मण १३.१–५',
      summary: 'The Śatapatha’s thirteenth kāṇḍa is the most complete account of the year-long royal horse sacrifice. A consecrated stallion is set loose to roam; wherever it goes, the land becomes the king’s. The Brāhmaṇa specifies the daily rites kept up around it, the closing ceremony, and the queen’s symbolic union with the slain horse — a passage debated by every later commentator.',
      summaryDeva: 'शतपथाचा तेरावा कांड वर्षभर चालणाऱ्या राजेशाही अश्वमेधाचे सर्वात संपूर्ण वर्णन देतो. अभिषिक्त अश्व मुक्त सोडला जातो; तो जिथे जातो ती भूमी राजाची होते. ब्राह्मणात त्याभोवती चाललेले दैनंदिन विधी, समापन आणि राणीचा हतमेधाशी प्रतीकात्मक संगम — हे विवरण नंतरच्या प्रत्येक भाष्यकाराने वादप्रसंगी विचारले आहे.'
    },
    {
      name: 'The Pravargya rite — the gharma pot',
      nameDeva: 'प्रवर्ग्य — घर्मपात्र',
      citation: 'ŚB 14.1–3',
      citationDeva: 'शतपथ ब्राह्मण १४.१–३',
      summary: 'The fire-offering of hot milk in a red-hot clay pot. The Śatapatha treats the rite at length and reads it cosmologically — the pot is the sun, the milk is light, the priest who looks into the pot looks into the eye of the year. Still performed in some Nampūtiri lineages of Kerala.',
      summaryDeva: 'तापलेल्या लाल मातीच्या पात्रात गरम दुधाचा अग्निहोम. शतपथ हा विधी विस्ताराने मांडतो आणि वैश्विकदृष्ट्या वाचतो — पात्र म्हणजे सूर्य, दूध म्हणजे प्रकाश, पात्रात पाहणारा पुरोहित म्हणजे वर्षाच्या डोळ्यात पाहणारा. केरळातील काही नंबुदिरी परंपरांत आजही केला जातो.'
    },
    {
      name: 'Prajāpati creates the worlds',
      nameDeva: 'प्रजापति व विश्वसृष्टि',
      citation: 'ŚB 11.1.6',
      citationDeva: 'शतपथ ब्राह्मण ११.१.६',
      summary: 'In the beginning there was only Prajāpati; he desired to be many. He performed tapas, and from the heat came the three worlds — earth, mid-air, sky. The Brāhmaṇa’s most-cited cosmogony, and the proximate source of the creation narratives in the Bṛhadāraṇyaka and the Manusmṛti.',
      summaryDeva: 'प्रारंभी केवळ प्रजापति होता; त्याला अनेक होण्याची इच्छा झाली. त्याने तप केले, आणि त्या तपातून तीन लोक उत्पन्न झाले — पृथ्वी, अंतरिक्ष, द्यौ. ब्राह्मणातील सर्वाधिक उद्धृत सृष्टिकथा आणि बृहदारण्यक व मनुस्मृतीतील सृष्टिकथांचा निकटतम स्रोत.'
    },
    {
      name: 'The Agnicayana fire-altar',
      nameDeva: 'अग्निचयन — वेदी-रचना',
      citation: 'ŚB 6–10',
      citationDeva: 'शतपथ ब्राह्मण ६–१०',
      summary: 'Five entire books on the construction of the great bird-shaped fire-altar from 10,800 baked bricks. Every brick is consecrated with a mantra and a numerical correspondence — to a day of the year, to a part of the body, to a metre. The most elaborate single procedure in the Brāhmaṇa corpus.',
      summaryDeva: '१०,८०० भाजलेल्या विटांपासून पक्ष्याच्या आकाराची महान अग्निवेदी रचण्यावरचे संपूर्ण पाच कांडे. प्रत्येक विटेला मंत्र व अंक-अनुरूपता — वर्षाच्या एका दिवसाशी, शरीराच्या एका अवयवाशी, एका छंदाशी. ब्राह्मण साहित्यातील सर्वात विस्तृत एकल प्रक्रिया.'
    },
    {
      name: 'Yājñavalkya on the self',
      nameDeva: 'याज्ञवल्क्य व आत्मन्',
      citation: 'ŚB 14.7 (= BĀU 4)',
      citationDeva: 'शतपथ ब्राह्मण १४.७ (= बृहदारण्यक ४)',
      summary: 'The closing book of the Śatapatha is the Bṛhadāraṇyaka Upaniṣad — the moment the Brāhmaṇa literature turns into Vedānta. Yājñavalkya in the court of Janaka, the dialogue with Maitreyī, the "neti, neti" — Brāhmaṇa prose at the edge of its own dissolution into Upaniṣadic philosophy.',
      summaryDeva: 'शतपथाचा शेवटचा कांड म्हणजे बृहदारण्यक उपनिषद् — ब्राह्मण साहित्य वेदान्तात रूपांतरित होण्याचा क्षण. जनकाच्या राजसभेत याज्ञवल्क्य, मैत्रेयीशी संवाद, "नेति, नेति" — स्वतःच्या उपनिषदीय तत्त्वज्ञानात विलीन होणारे ब्राह्मण गद्य.'
    }
  ],
  sama: [
    {
      name: 'The Vrātyastoma — readmission of outsiders',
      nameDeva: 'व्रात्यस्तोम — पुन्हा-समावेश',
      citation: 'PB 17.1–4',
      citationDeva: 'पञ्चविंश ब्राह्मण १७.१–४',
      summary: 'The Pañcaviṃśa’s seventeenth book gives the rite by which a Vrātya — an outsider, an "uninitiated" wanderer outside the brahmanical fold — is reincorporated into orthodox society. A reminder that the boundary of "inside" the tradition was always more porous than later orthodoxy admits.',
      summaryDeva: 'पञ्चविंशाच्या सतराव्या कांडात व्रात्य — ब्राह्मणी परिघाबाहेरचा "अदीक्षित" भटका — पुन्हा शास्त्रसंमत समाजात समाविष्ट करण्याचा विधी. परंपरेच्या "आत"ची सीमा नंतरच्या शास्त्रचुस्तपणापेक्षा नेहमीच अधिक भेद्य होती, याची आठवण.'
    },
    {
      name: 'Cyavana and Sukanyā',
      nameDeva: 'च्यवन व सुकन्या',
      citation: 'JB 3.120–129',
      citationDeva: 'जैमिनीय ब्राह्मण ३.१२०–१२९',
      summary: 'The Jaiminīya’s most famous story. The sage Cyavana, grown old and motionless in his āśrama, is mistaken for an ant-hill by the young princess Sukanyā, who pierces his eyes with a thorn. To right the wrong she is given to him in marriage; the Aśvins later restore his youth. The narrative reappears in the Mahābhārata and dozens of Purāṇas.',
      summaryDeva: 'जैमिनीय ब्राह्मणातील सर्वाधिक प्रसिद्ध कथा. आश्रमात वृद्ध व निश्चल होऊन बसलेल्या च्यवन ऋषीला वारुळ समजून तरुण राजकन्या सुकन्या काट्याने त्यांचे डोळे फोडते. प्रायश्चित्त म्हणून तिचे त्यांच्याशी लग्न लावले जाते; नंतर अश्विनीकुमार त्यांना तारुण्य देतात. महाभारत व डझनभर पुराणांत याच कथेचा पुनरुच्चार.'
    },
    {
      name: 'Bhṛgu’s vision of the world to come',
      nameDeva: 'भृगूचा परलोक-दर्शन',
      citation: 'JB 1.42–44',
      citationDeva: 'जैमिनीय ब्राह्मण १.४२–४४',
      summary: 'The young Bhṛgu, sent by his father Varuṇa, walks through the worlds and sees men eating men, men eating animals, women being eaten by their hair — and in each case is told this is the next-world consequence of an act done in this one. The earliest karma narrative in the Indic record, centuries before the Upaniṣads systematise it.',
      summaryDeva: 'पित्या वरुणाने पाठवलेला तरुण भृगू लोकांतून फिरतो आणि माणसे माणसे खाताना, माणसे प्राणी खाताना, स्त्रिया त्यांच्याच केसांनी खाल्ल्या जाताना पाहतो — आणि प्रत्येक प्रसंगात त्याला सांगितले जाते की ही या जगातील एका कृत्याची पुढच्या जगातील फलश्रुती आहे. उपनिषदांनी कर्मसिद्धांत व्यवस्थित मांडण्याच्या शतकानुशतके आधीची भारतीय परंपरेतील पहिली कर्म-कथा.'
    },
    {
      name: 'The long sacrificial sessions (sattras)',
      nameDeva: 'सत्र — दीर्घ यज्ञ',
      citation: 'PB 4–5',
      citationDeva: 'पञ्चविंश ब्राह्मण ४–५',
      summary: 'Twelve-day, year-long, and thousand-year sattras — multi-priest, multi-family long sessions in which the patron is the rite itself rather than any single person. The Pañcaviṃśa gives the day-by-day schedule. The institutional ancestor of every long Indic vrata.',
      summaryDeva: 'बारा दिवस, वर्षभर व हजार-वर्षांचे सत्र — एकाहून अधिक पुरोहित व एकाहून अधिक कुटुंबे; ज्यात यजमान कोणी विशिष्ट व्यक्ती नसून यज्ञ स्वतःच असतो. पञ्चविंशात त्याचे दिवसा-दिवशीचे कार्यक्रम. प्रत्येक दीर्घ भारतीय व्रताचा संस्थागत पूर्वज.'
    },
    {
      name: 'The Stomas and their architecture',
      nameDeva: 'स्तोम व त्यांची रचना',
      citation: 'PB 2',
      citationDeva: 'पञ्चविंश ब्राह्मण २',
      summary: 'A technical treatise on the Stoma — the numbered patterns (15, 17, 21, 24…) in which choral verses are arranged and repeated. The Brāhmaṇa’s contribution to what is, in effect, mathematical music theory: the first known systematic study of cyclic patterns in chant.',
      summaryDeva: 'स्तोम — समूहगायनाच्या ऋचा ज्या निर्धारित अंक-नमुन्यांत (१५, १७, २१, २४…) मांडल्या व पुनरावृत्त केल्या जातात — त्यांचे तांत्रिक विवरण. प्रत्यक्षात गणितीय संगीतशास्त्राला ब्राह्मणाचे योगदान: गायनातील चक्रीय नमुन्यांचा पहिला ज्ञात व्यवस्थित अभ्यास.'
    }
  ],
  atharva: [
    {
      name: 'Supremacy of the Brahman priest',
      nameDeva: 'ब्रह्मा पुरोहिताचे श्रेष्ठत्व',
      citation: 'GB Pūrva 3',
      citationDeva: 'गोपथ ब्राह्मण पूर्व ३',
      summary: 'The Gopatha’s argument for why the Atharvaveda matters. Among the four priestly officiants, the Brahman — the silent overseer who corrects mistakes in any of the other three’s recitations — must know all four Vedas, not three. Therefore the Atharvaveda is not the "fourth" Veda but the principal one. A scholarly argument disguised as a ritual exposition.',
      summaryDeva: 'अथर्ववेद का महत्त्वाचा हे गोपथाचे प्रमेय. चार ऋत्विजांपैकी ब्रह्मा — मौनी निरीक्षक जो इतर तिघांच्या पठणातील चुका सुधारतो — त्याला तीन नव्हे तर चारही वेद ज्ञात असावे लागतात. म्हणून अथर्ववेद हा "चौथा" वेद नसून मुख्य वेद आहे. विधी-निरूपणाच्या वेषात मांडलेला अभ्यासकीय युक्तिवाद.'
    },
    {
      name: 'On the syllable Aum',
      nameDeva: 'ओम्-कारावरील विवेचन',
      citation: 'GB Pūrva 1.16–24',
      citationDeva: 'गोपथ ब्राह्मण पूर्व १.१६–२४',
      summary: 'A long exposition on the syllable Aum — broken into its three sounds (a, u, m), identified with the three Vedas, the three worlds, the three guṇas, and the three breaths. The most elaborate Brāhmaṇa-level treatment of Aum we have; the Māṇḍūkya Upaniṣad later compresses this into twelve verses.',
      summaryDeva: 'ओम्-कारावरील दीर्घ विवेचन — त्याच्या तीन ध्वनींत (अ, उ, म) विभागून ते तीन वेद, तीन लोक, तीन गुण आणि तीन प्राणांशी समीकृत. ब्राह्मण पातळीवरचे ओम्-कारावरील सर्वात विस्तृत विवेचन; नंतर माण्डूक्य उपनिषद याला बारा श्लोकांत संकोचवते.'
    },
    {
      name: 'The Gāyatrī as cosmic frame',
      nameDeva: 'गायत्री — वैश्विक छंद',
      citation: 'GB Pūrva 1.32–37',
      citationDeva: 'गोपथ ब्राह्मण पूर्व १.३२–३७',
      summary: 'A meditation on the Gāyatrī mantra — not as a hymn to Savitṛ but as a cosmic frame. Twenty-four syllables, twenty-four half-months in the year, twenty-four ṛṣis, twenty-four metres. The kind of numerical correspondence that organises the entire Brāhmaṇa imagination.',
      summaryDeva: 'गायत्री मंत्रावर ध्यान — सवित्राला उद्देशून केलेले स्तोत्र म्हणून नव्हे तर वैश्विक छंद म्हणून. चोवीस अक्षरे, वर्षातील चोवीस अर्धमास, चोवीस ऋषि, चोवीस छंद. संपूर्ण ब्राह्मण कल्पनेला आकार देणारी अंक-अनुरूपता.'
    },
    {
      name: 'The Soma rite from the Atharvan angle',
      nameDeva: 'अथर्वनी दृष्टीने सोमयाग',
      citation: 'GB Uttara 1–6',
      citationDeva: 'गोपथ ब्राह्मण उत्तर १–६',
      summary: 'The Uttara-bhāga takes the standard Vedic Soma sacrifice and re-reads every step from the Atharvan standpoint. The Brahman priest’s duties are foregrounded; the apotropaic and protective dimension of every offering is brought out; the role of Atharva-mantras in correcting ritual mistakes is laid out in detail.',
      summaryDeva: 'उत्तर-भाग प्रचलित वैदिक सोमयागाचे प्रत्येक पाऊल अथर्वनी दृष्टीने पुन्हा वाचतो. ब्रह्मा पुरोहिताची कर्तव्ये अग्रभागी आणली जातात; प्रत्येक आहुतीचे रक्षणात्मक व अरिष्टनिवारक स्वरूप स्पष्ट केले जाते; विधीतील चुका सुधारण्यात अथर्व-मंत्रांची भूमिका विस्ताराने मांडली जाते.'
    },
    {
      name: 'Quotations from the other three Vedas',
      nameDeva: 'इतर वेदांतील अवतरणे',
      citation: 'GB Pūrva 2 · Uttara 5',
      citationDeva: 'गोपथ ब्राह्मण पूर्व २ · उत्तर ५',
      summary: 'Among Brāhmaṇas, the Gopatha is the most citation-heavy — quoting and commenting on verses from the Ṛg, Yajur and Sāma in long stretches. A late text that already treats the other three Vedas as a closed canon and positions the Atharvaveda as their unifier. Its date is the latest of any major Brāhmaṇa.',
      summaryDeva: 'सर्व ब्राह्मणांत गोपथ सर्वाधिक अवतरण-समृद्ध — ऋग्, यजुर्, साम वेदांतील ऋचा दीर्घ खंडांत उद्धृत व व्याख्यायित करणारा. इतर तीन वेद आधीच बंद-कोश म्हणून घेणारा आणि अथर्ववेदाला त्यांचा एकीकरणकर्ता म्हणून मांडणारा उत्तरकालीन ग्रंथ. कोणत्याही मुख्य ब्राह्मणापेक्षा याची रचना उशिराची.'
    }
  ]
};

const ARANYAKAS_DATA: Record<string, Shakha[]> = {
  rig: [
    {
      name: 'Aitareya Āraṇyaka',
      deva: 'ऐतरेय आरण्यक',
      category: 'Śākala recension',
      categoryDeva: 'शाकल शाखा',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '5 āraṇyakas (books), 18 chapters in total',
      structureDeva: '५ आरण्यके, एकूण १८ अध्याय',
      region: 'Pan-Indian',
      regionDeva: 'संपूर्ण भारतात',
      desc: 'The principal Rigvedic Āraṇyaka. Opens with the inner meaning of the Mahāvrata rite — the great vow that closes the year — and moves through meditations on speech (vāc) and breath (prāṇa). Contains the Aitareya Upaniṣad in its middle books, embedded inside the Āraṇyaka rather than at its end.',
      descDeva: 'ऋग्वेदाचा मुख्य आरण्यक. महाव्रत विधीच्या अंतःस्थ अर्थाने सुरुवात — वर्षाची सांगता करणारे महान व्रत — आणि वाक् व प्राण यांच्यावरील ध्यानाकडे जातो. ऐतरेय उपनिषद याच्या मधल्या आरण्यकांत आहे; उपनिषद् येथे आरण्यकाच्या मध्यभागी आहे, शेवटी नाही.'
    },
    {
      name: 'Kauṣītaki / Śāṅkhāyana Āraṇyaka',
      deva: 'कौषीतकि / शाङ्खायन आरण्यक',
      category: 'Bāṣkala / Śāṅkhāyana recension',
      categoryDeva: 'बाष्कल / शाङ्खायन शाखा',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '15 adhyāyas (chapters 3–6 form the Kauṣītaki Upaniṣad)',
      structureDeva: '१५ अध्याय (अध्याय ३–६ मिळून कौषीतकि उपनिषद)',
      region: 'Surviving in manuscripts and limited recitation',
      regionDeva: 'हस्तलिखित व मर्यादित पठण परंपरेत',
      desc: 'Fifteen chapters, of which the third through sixth form the Kauṣītaki Upaniṣad. An early form of the Saṃvarga-vidyā — the doctrine of "the swallower" (vāyu in the cosmos, breath in the body) — appears in its second chapter. One of the densest pieces of pre-Upaniṣadic philosophy in the Veda.',
      descDeva: 'पंधरा अध्याय, ज्यांपैकी तिसरा ते सहावा अध्याय मिळून प्रसिद्ध कौषीतकि उपनिषद बनतात. दुसऱ्या अध्यायात संवर्ग-विद्येचे आरंभीचे रूप — "गिळणारा" तत्त्व (विश्वात वायु, शरीरात प्राण) — आढळते. वेदातील पूर्व-उपनिषदीय तत्त्वज्ञानाचा अत्यंत घन भाग.'
    }
  ],
  yajur: [
    {
      name: 'Bṛhad-āraṇyaka',
      deva: 'बृहदारण्यक',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '6 chapters — the final kāṇḍa of the Śatapatha (= Bṛhad-āraṇyaka Upaniṣad)',
      structureDeva: '६ अध्याय — शतपथाचा शेवटचा कांड (= बृहदारण्यक उपनिषद)',
      region: 'North & Central India (Mādhyandina), South & East (Kāṇva)',
      regionDeva: 'उत्तर व मध्य भारत (माध्यन्दिन), दक्षिण व पूर्व (काण्व)',
      desc: 'In the Śukla Yajurveda the Āraṇyaka and the Upaniṣad are the same text — the last six chapters of the Śatapatha Brāhmaṇa form the Bṛhad-āraṇyaka, which in turn is the Bṛhad-āraṇyaka Upaniṣad. Yājñavalkya in the court of Janaka, the dialogue with Maitreyī, the formula "neti, neti".',
      descDeva: 'शुक्ल यजुर्वेदात आरण्यक व उपनिषद हे एकच ग्रंथ — शतपथ ब्राह्मणाचे शेवटचे सहा अध्याय मिळून बृहदारण्यक बनतात, जे स्वतःच बृहदारण्यक उपनिषद आहे. जनकाच्या राजसभेत याज्ञवल्क्य, मैत्रेयीशी संवाद, "नेति, नेति" हे सूत्र.'
    },
    {
      name: 'Taittirīya Āraṇyaka',
      deva: 'तैत्तिरीय आरण्यक',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '10 prapāṭhakas',
      structureDeva: '१० प्रपाठक',
      region: 'South India',
      regionDeva: 'दक्षिण भारत',
      desc: 'The largest Āraṇyaka of the Kṛṣṇa Yajurveda. Its seventh, eighth and ninth prapāṭhakas are the Taittirīya Upaniṣad; its tenth, the Mahānārāyaṇa Upaniṣad — the source of many of the most-recited Vedic invocations (Tryambaka, Medhā-sūkta, Nārāyaṇa-anuvāka). The first six are still classed Āraṇyaka proper.',
      descDeva: 'कृष्ण यजुर्वेदाचा सर्वात मोठा आरण्यक. सातवा, आठवा व नववा प्रपाठक मिळून तैत्तिरीय उपनिषद; दहावा म्हणजे महानारायण उपनिषद — त्र्यंबक, मेधासूक्त, नारायण-अनुवाक यांसारख्या प्रसिद्ध वैदिक आवाहनांचा स्रोत. पहिले सहा प्रपाठक आरण्यक स्वरूपातच गणले जातात.'
    },
    {
      name: 'Maitrāyaṇī Āraṇyaka',
      deva: 'मैत्रायणी आरण्यक',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Partially Extant',
      statusDeva: 'अंशतः उपलब्ध',
      structure: 'No separate Āraṇyaka text; Maitrāyaṇī Upaniṣad descends from this lineage',
      structureDeva: 'स्वतंत्र आरण्यक ग्रंथ नाही; मैत्रायणी उपनिषद याच परंपरेतून',
      region: 'Western Maharashtra, Gujarat',
      regionDeva: 'पश्चिम महाराष्ट्र, गुजरात',
      desc: 'As with its Brāhmaṇa, the Maitrāyaṇī school does not preserve a separate Āraṇyaka text. The Maitrāyaṇī (Maitrī) Upaniṣad — a late Upaniṣad in seven prapāṭhakas, mixing Vedic and proto-classical idioms — descends from this lineage.',
      descDeva: 'त्याच्या ब्राह्मणाप्रमाणेच मैत्रायणी शाखेत स्वतंत्र आरण्यक ग्रंथ जतन नाही. मैत्रायणी (मैत्री) उपनिषद — सात प्रपाठकांचे एक उत्तरकालीन उपनिषद, ज्यात वैदिक व पूर्व-शास्त्रीय भाषा मिसळलेली आहे — याच परंपरेतून आले आहे.'
    },
    {
      name: 'Kāṭhaka Āraṇyaka',
      deva: 'काठक आरण्यक',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Partially Extant',
      statusDeva: 'अंशतः उपलब्ध',
      structure: 'Fragments only',
      structureDeva: 'केवळ खंडित भाग',
      region: 'Historically Kashmir',
      regionDeva: 'ऐतिहासिकदृष्ट्या काश्मीर',
      desc: 'A small set of birch-bark fragments from Kashmir, plus citations in mediaeval commentaries, are all that survives. The Kaṭha Upaniṣad — Naciketas and Yama — is the great Upaniṣadic monument of this otherwise depleted Āraṇyaka tradition.',
      descDeva: 'काश्मीरमधील भूर्जपत्र हस्तलिखितांचे थोडे तुकडे आणि मध्ययुगीन भाष्यांतील अवतरणे — एवढेच शिल्लक. नचिकेत व यम यांचा संवाद असलेले कठ उपनिषद् हाच या अन्यथा क्षीण झालेल्या आरण्यक परंपरेचा महान उपनिषदीय स्तंभ.'
    }
  ],
  sama: [
    {
      name: 'Talavakāra Āraṇyaka (Jaiminīya Upaniṣad Brāhmaṇa)',
      deva: 'तलवकार आरण्यक (जैमिनीय उपनिषद् ब्राह्मण)',
      category: 'Jaiminīya / Talavakāra',
      categoryDeva: 'जैमिनीय / तलवकार',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '4 adhyāyas (the fourth is the Kena Upaniṣad)',
      structureDeva: '४ अध्याय (चौथा अध्याय म्हणजे केन उपनिषद)',
      region: 'Preserved in Kerala and Tamil Nadu',
      regionDeva: 'केरळ व तमिळनाडूत जतन',
      desc: 'The Sāmaveda’s only clearly preserved Āraṇyaka. Its fourth chapter is the Kena Upaniṣad — the short, sharp dialogue on the ground behind the senses. The earlier chapters give Sāmavedic vidyās: the meditation on Aum as Udgītha, the cosmic correspondences of breath and chant, the doctrine of the inner self as the singer.',
      descDeva: 'सामवेदाचा एकमेव स्पष्टपणे जतन झालेला आरण्यक. त्याचा चौथा अध्याय म्हणजे केन उपनिषद — इंद्रियांच्या मागे असणाऱ्या आधाराविषयीचा लहान पण तीक्ष्ण संवाद. पूर्वीचे अध्याय सामवेदीय विद्या देतात: ओम् व उद्गीथ यांवरील ध्यान, प्राण व साम यांच्या वैश्विक अनुरूपता, अंतःकरणातील आत्मा हाच गायक — हा सिद्धांत.'
    },
    {
      name: 'Chāndogya Āraṇyaka',
      deva: 'छान्दोग्य आरण्यक',
      category: 'Kauthuma / Rāṇāyanīya',
      categoryDeva: 'कौथुम / राणायनीय',
      status: 'Partially Extant',
      statusDeva: 'अंशतः उपलब्ध',
      structure: 'Not preserved as a separate text; first chapters of the Chāndogya Brāhmaṇa serve the function',
      structureDeva: 'स्वतंत्र ग्रंथ म्हणून जतन नाही; छान्दोग्य ब्राह्मणाचे पहिले अध्याय हीच भूमिका निभावतात',
      region: 'Pan-Sāmavedic (Kauthuma line)',
      regionDeva: 'सर्व कौथुम सामवेदी परंपरांत',
      desc: 'In the Kauthuma–Rāṇāyanīya line the Āraṇyaka layer is not preserved as an independent book. Its function is performed partly by the first two prapāṭhakas of the Chāndogya Brāhmaṇa (the Mantra-brāhmaṇa, mainly for domestic rites) and partly by the opening of the Chāndogya Upaniṣad itself — which treats the inner significance of Aum and the udgītha at the very threshold between Āraṇyaka and Upaniṣad.',
      descDeva: 'कौथुम–राणायनीय परंपरेत आरण्यक स्तर स्वतंत्र ग्रंथ म्हणून जतन झालेला नाही. त्याचे कार्य अंशतः छान्दोग्य ब्राह्मणाचे पहिले दोन प्रपाठक (मंत्र-ब्राह्मण, मुख्यतः गृह्य विधींसाठी) करतात, आणि अंशतः स्वतः छान्दोग्य उपनिषदाची सुरुवात — जी आरण्यक व उपनिषद यांच्या अगदी सीमेवर ओम् व उद्गीथ यांच्या अंतःस्थ अर्थाचे विवेचन करते.'
    }
  ],
  atharva: [
    {
      name: 'No surviving Āraṇyaka',
      deva: 'आरण्यक उपलब्ध नाही',
      category: 'All Atharvavedic recensions',
      categoryDeva: 'सर्व अथर्ववेदी शाखा',
      status: 'Lost',
      statusDeva: 'लुप्त / अनुपलब्ध',
      structure: 'No independent Āraṇyaka in any surviving Atharvavedic line',
      structureDeva: 'कोणत्याही उपलब्ध अथर्ववेदी शाखेत स्वतंत्र आरण्यक नाही',
      region: '—',
      regionDeva: '—',
      desc: 'Uniquely among the four, the Atharvaveda has no surviving independent Āraṇyaka. Its forest-contemplative material is folded back into the Gopatha Brāhmaṇa and forward into the three classical Atharvan Upaniṣads (Muṇḍaka, Māṇḍūkya, Praśna), which take the philosophical burden directly without an intermediate āraṇyaka layer.',
      descDeva: 'चार वेदांत केवळ अथर्ववेदाला स्वतंत्र आरण्यक नाही. त्याचे वन-चिंतनात्मक साहित्य मागे गोपथ ब्राह्मणात आणि पुढे तीन शास्त्रीय अथर्वनी उपनिषदांत (मुण्डक, माण्डूक्य, प्रश्न) सामावले गेले आहे — मधल्या आरण्यक स्तराशिवाय हेच उपनिषद थेट तत्त्वज्ञानाचा भार उचलतात.'
    }
  ]
};

const ARANYAKA_PASSAGES_DATA: Record<string, KeySukta[]> = {
  rig: [
    {
      name: 'The Mahāvrata in the forest',
      nameDeva: 'अरण्यातील महाव्रत',
      citation: 'AĀ 1.1–5',
      citationDeva: 'ऐतरेय आरण्यक १.१–५',
      summary: 'The Mahāvrata — the great winter-solstice rite the Brāhmaṇa treats publicly — is here read again, esoterically, for the forest-dweller. Every external act is mapped onto an inner correspondence: the chariot race becomes the race of the breaths, the dance becomes the dance of the senses on their objects. The opening move of the entire Āraṇyaka register.',
      summaryDeva: 'ब्राह्मणात उघडपणे मांडलेले महाव्रत — हिवाळी संक्रांतीचे प्रसिद्ध विधी — येथे वनवासी साधकासाठी पुन्हा गूढ अर्थाने वाचले आहे. प्रत्येक बाह्य कृतीला अंतःस्थ अनुरूपता दिली आहे: रथशर्यत म्हणजे प्राणांची शर्यत, नृत्य म्हणजे विषयांवरील इंद्रियांचे नृत्य. संपूर्ण आरण्यक धाटणीची सुरुवात.'
    },
    {
      name: 'Vāc — speech as the whole',
      nameDeva: 'वाक् — वाणी हीच सर्वस्व',
      citation: 'AĀ 2.4',
      citationDeva: 'ऐतरेय आरण्यक २.४',
      summary: 'A long meditation on speech as the carrier of every world. The metres are forms of speech; the gods come into being because they are named; the very fire on the altar is kindled by the recited mantra and not the other way around. A position the Mīmāṃsakas later inherit wholesale.',
      summaryDeva: 'प्रत्येक लोकाला वाहून नेणारी वाक् — यावर दीर्घ ध्यान. छंद म्हणजे वाणीचे रूप; देव अस्तित्वात येतात कारण त्यांना नावे दिली जातात; वेदीवरील अग्नी सुद्धा पठण केलेल्या मंत्रामुळे प्रज्वलित होतो — उलट क्रमाने नाही. मीमांसक हीच भूमिका पुढे संपूर्णपणे स्वीकारतात.'
    },
    {
      name: 'Prāṇa-vidyā — breath as the supreme',
      nameDeva: 'प्राण-विद्या',
      citation: 'AĀ 2.1–3',
      citationDeva: 'ऐतरेय आरण्यक २.१–३',
      summary: 'The contest of the breaths: the gods (eye, ear, mind, speech, prāṇa) try to determine which of them is supreme by withdrawing in turn. The body survives without each — until prāṇa attempts to leave, at which point all the others reach for it in panic. The earliest version of an argument the Upaniṣads will repeat for a thousand years.',
      summaryDeva: 'प्राणांचा वाद: डोळा, कान, मन, वाणी आणि प्राण हे देव एक-एक करून शरीरातून निघून जाण्याचा प्रयत्न करून आपापले श्रेष्ठत्व ठरवायला निघतात. प्रत्येकाशिवाय शरीर चालू राहते — पण प्राण निघू लागताच इतर सर्व त्याला घट्ट धरून ठेवण्यासाठी धावतात. हजार वर्षे उपनिषदे पुनरुच्चारित करतील त्या युक्तिवादाची सर्वात आरंभीची आवृत्ती.'
    },
    {
      name: 'The hidden meaning of the Saṃhitā',
      nameDeva: 'संहितेचा गुह्यार्थ',
      citation: 'AĀ 3',
      citationDeva: 'ऐतरेय आरण्यक ३',
      summary: 'A short, dense book — almost entirely lost on a first reading — on what the Saṃhitā is "really" doing. Treats the joining of words (saṃ-hitā) as itself a cosmic act: each junction between two words holds the universe together at one point. A piece of pre-classical philosophy of language that pre-dates Pāṇini and Bhartṛhari by centuries.',
      summaryDeva: 'एक लहान, घन पुस्तक — पहिल्या वाचनात जवळजवळ संपूर्णपणे गूढ — संहिता "खरोखर" काय करते यावर. शब्दांच्या जोडणीला (सम् + हिता) स्वतः एक वैश्विक कृती मानते: दोन शब्दांमधील प्रत्येक संधी म्हणजे विश्वाला एका बिंदूत बांधून ठेवणारी गाठ. पाणिनि व भर्तृहरि यांच्या शतकानुशतके आधीचे पूर्व-शास्त्रीय भाषाशास्त्र.'
    },
    {
      name: 'The Saṃvarga-vidyā',
      nameDeva: 'संवर्ग-विद्या',
      citation: 'Kauṣ. Ā 2',
      citationDeva: 'कौषीतकि आरण्यक २',
      summary: 'The doctrine of "the swallower". In the cosmos it is Vāyu, the wind — into which fire, sun and moon all set when they go out. In the body it is Prāṇa, the breath — into which speech, sight, hearing all set when they sleep. One macrocosmic-microcosmic pairing, two names for the same principle. The earliest extended statement of an idea the Chāndogya later expands.',
      summaryDeva: '"गिळणारा" तत्त्वाचा सिद्धांत. विश्वात तो वायु — ज्यात अग्नी, सूर्य व चंद्र अस्त होताना सामावतात. शरीरात तो प्राण — ज्यात वाणी, दृष्टी, श्रवण सर्व झोपताना सामावतात. एक स्थूल-सूक्ष्म जोडी, एकाच तत्त्वाची दोन नावे. नंतर छान्दोग्य उपनिषदात विस्तारित होणाऱ्या या विचाराचे सर्वात आरंभीचे विस्तृत प्रतिपादन.'
    }
  ],
  yajur: [
    {
      name: 'Mahānārāyaṇa — the long invocation',
      nameDeva: 'महानारायण — दीर्घ आवाहन',
      citation: 'TĀ 10',
      citationDeva: 'तैत्तिरीय आरण्यक १०',
      summary: 'The tenth and final prapāṭhaka of the Taittirīya Āraṇyaka is itself the Mahānārāyaṇa Upaniṣad. Reads as a long, beautiful liturgical anthology — the Nārāyaṇa-anuvāka, the Medhā-sūkta (prayer for memory), the Tryambaka and the Mṛtyuñjaya — most of the invocations heard at any south-Indian temple’s daily worship come from this single chapter.',
      summaryDeva: 'तैत्तिरीय आरण्यकाचा दहावा व अखेरचा प्रपाठक म्हणजेच महानारायण उपनिषद. एक दीर्घ, सुंदर पठण-संग्रह — नारायण-अनुवाक, मेधा-सूक्त (बुद्धीसाठी प्रार्थना), त्र्यंबक, मृत्युंजय — दक्षिण भारतीय कोणत्याही मंदिरात दैनिक उपासनेत म्हटली जाणारी बहुतेक आवाहने याच एका अध्यायातून येतात.',
      verse: {
        deva: 'अम्भस्यपारे भुवनस्य मध्ये नाकस्य पृष्ठे महतो महीयान् ।\nशुक्रेण ज्योतीꣳषि समनुप्रविष्टः प्रजापतिश्चरति गर्भे अन्तः ॥',
        trans: 'ambhasy apāre bhuvanasya madhye nākasya pṛṣṭhe mahato mahīyān |\nśukreṇa jyotīṃṣi samanupraviṣṭaḥ prajāpatiś carati garbhe antaḥ ||',
        cite: 'TĀ 10.1.1'
      }
    },
    {
      name: 'The Aruṇa-ketuka altar',
      nameDeva: 'अरुणकेतुक विधी',
      citation: 'TĀ 1',
      citationDeva: 'तैत्तिरीय आरण्यक १',
      summary: 'A long, technical first chapter on the Aruṇa-ketuka — the dawn-red fire-altar that the kṛṣṇa-yajurvedin builds at the start of any extended sattra. Treats every brick, every measurement, every accompanying mantra; in the older south Indian tradition still recited (though no longer constructed).',
      summaryDeva: 'अरुणकेतुक यावरील दीर्घ, तांत्रिक पहिला अध्याय — कोणत्याही दीर्घ सत्राच्या आरंभी कृष्ण यजुर्वेदी जो उषःकालीन ताम्र-रक्त अग्निवेदी रचतो तो. प्रत्येक वीट, प्रत्येक माप, प्रत्येक सोबतचा मंत्र यांचे विवरण; जुन्या दक्षिण भारतीय परंपरेत आजही पठण होते (जरी बांधणी आता होत नाही).'
    },
    {
      name: 'The Cāturhotra — the four-priest contemplation',
      nameDeva: 'चातुर्होत्र',
      citation: 'TĀ 3',
      citationDeva: 'तैत्तिरीय आरण्यक ३',
      summary: 'The four hotṛ priests of the great sacrifice are read not as four men but as four cosmic functions — the inward, the outward, the digestive, and the connective. The Vedic ritual scaled down into a meditation any householder can perform without lighting a single fire. A direct ancestor of the antaryāga (inner ritual) literature.',
      summaryDeva: 'महायज्ञातील चार होता म्हणजे चार पुरुष नव्हे, तर चार वैश्विक कार्ये — अंतर्मुख, बहिर्मुख, पाचक आणि संयोजक. वैदिक विधी अशा प्रमाणावर लघु केला आहे की कोणताही गृहस्थ एकही अग्नी न पेटवता हा विधी ध्यानरूपात करू शकतो. अंतर्याग साहित्याचा थेट पूर्वज.'
    },
    {
      name: 'Pravargya — the inner exposition',
      nameDeva: 'प्रवर्ग्य — आंतरिक विवरण',
      citation: 'TĀ 4–5',
      citationDeva: 'तैत्तिरीय आरण्यक ४–५',
      summary: 'Where the Śatapatha treats the Pravargya rite externally — the hot milk in the red-hot pot, the priest who looks into it — the Taittirīya Āraṇyaka treats it internally. The pot is the head; the milk is the mind’s light; the priest looking in is the self looking at itself. The Vedic ritual at the threshold of becoming yoga.',
      summaryDeva: 'शतपथ प्रवर्ग्य विधी बाह्यपणे मांडतो — तापलेल्या पात्रात गरम दूध, पात्रात पाहणारा पुरोहित — तर तैत्तिरीय आरण्यक तोच विधी अंतर्मुख करून मांडतो. पात्र म्हणजे शिर; दूध म्हणजे मनाचा प्रकाश; पात्रात पाहणारा पुरोहित म्हणजे स्वतःकडे पाहणारा आत्मा. योग होण्याच्या उंबरठ्यावर असलेला वैदिक विधी.'
    },
    {
      name: 'The cosmic horse',
      nameDeva: 'वैश्विक अश्व',
      citation: 'Bṛh. Ā 1.1 (= ŚB 14.1)',
      citationDeva: 'बृहदारण्यक १.१ (= शतपथ १४.१)',
      summary: 'The opening of the Bṛhad-āraṇyaka. The horse of the Aśvamedha is read as the universe itself: its head the dawn, its eye the sun, its breath the wind, its back the heavens, its belly the air, its hooves the earth. The largest ritual the Brāhmaṇa describes is here rewritten as a single cosmic body — and from that move, the Upaniṣadic register takes over.',
      summaryDeva: 'बृहदारण्यकाची सुरुवात. अश्वमेधाचा अश्व म्हणजे स्वतः विश्व: त्याचे शिर म्हणजे उषा, डोळा सूर्य, श्वास वारा, पाठ स्वर्ग, पोट अंतरिक्ष, खूर पृथ्वी. ब्राह्मणाने वर्णन केलेला सर्वात मोठा विधी येथे एका वैश्विक शरीरात पुनर्लेखन केला आहे — आणि त्या एका हालचालीतून उपनिषदीय धाटणी सुरू होते.',
      verse: {
        deva: 'ॐ उषा वा अश्वस्य मेध्यस्य शिरः । सूर्यश्चक्षुर्वातः प्राणो व्यात्तमग्निर्वैश्वानरः ॥',
        trans: 'oṃ uṣā vā aśvasya medhyasya śiraḥ | sūryaś cakṣur vātaḥ prāṇo vyāttam agnir vaiśvānaraḥ ||',
        cite: 'Bṛh. Ā 1.1.1'
      }
    }
  ],
  sama: [
    {
      name: 'Aum as Udgītha',
      nameDeva: 'उद्गीथरूप ओम्',
      citation: 'JUB 1.1',
      citationDeva: 'जैमिनीय उपनिषद् ब्राह्मण १.१',
      summary: 'The Talavakāra opens with a long meditation on the syllable Aum understood not as a sound but as the Udgītha — the "loud chant" that holds every chant together. Every cosmic doublet (sun and moon, breath and speech, day and night) is read as Aum’s two sides; every singer is read as Aum singing itself. The Chāndogya later picks up exactly here.',
      summaryDeva: 'तलवकार आरण्यकाची सुरुवात ओम् या अक्षराच्या दीर्घ ध्यानाने होते — ध्वनी म्हणून नव्हे तर उद्गीथ म्हणून, अर्थात "उच्चस्वर गायन" जे प्रत्येक गायनाला एकत्र बांधते. प्रत्येक वैश्विक जोडी (सूर्य व चंद्र, श्वास व वाणी, दिवस व रात्र) ओम्-च्या दोन बाजू म्हणून वाचली जाते; प्रत्येक गायक स्वतः ओम् गाणाराच आहे. छान्दोग्य उपनिषद नेमके येथूनच पुढे जाते.'
    },
    {
      name: 'The inner singer',
      nameDeva: 'अंतःकरणातील गायक',
      citation: 'JUB 1.45–60',
      citationDeva: 'जैमिनीय उपनिषद् ब्राह्मण १.४५–६०',
      summary: 'A sequence of meditations identifying the self with the singer of the Sāmaveda. The outer udgātṛ — the priest who chants at the rite — is read as the visible form of an inner udgātṛ that sings, soundlessly, inside every breathing being. To know the inner singer is to know that the chant has never required a voice.',
      summaryDeva: 'सामवेदाच्या गायकाशी आत्म्याचे तादात्म्य सांगणारी ध्यानांची मालिका. बाह्य उद्गाता — विधीच्या वेळी गायन करणारा पुरोहित — हा प्रत्येक श्वासयुक्त प्राण्याच्या आत निःशब्दपणे गाणाऱ्या एका अंतर्गत उद्गात्याचे दृश्य रूप आहे. अंतर्गत गायकाला ओळखणे म्हणजे साम-गायनाला आवाजाची मुळातच गरज नव्हती हे ओळखणे.'
    },
    {
      name: 'Kena — "by whom is the mind sent?"',
      nameDeva: 'केन — "कोणाच्या प्रेरणेने?"',
      citation: 'JUB 4 (= Kena Upaniṣad)',
      citationDeva: 'जैमिनीय उपनिषद् ब्राह्मण ४ (= केन उपनिषद)',
      summary: 'The fourth and final chapter of the Talavakāra Āraṇyaka is the Kena Upaniṣad — opening with the unanswerable question "by whom is the mind sent forth on its way?" and answering not with a thing but with the impossibility of grasping the answerer. The Sāmaveda’s contribution to the canon of philosophical Upaniṣads.',
      summaryDeva: 'तलवकार आरण्यकाचा चौथा व अखेरचा अध्याय म्हणजे केन उपनिषद — "मन कोणाच्या प्रेरणेने प्रवृत्त होते?" या उत्तरहीन प्रश्नाने सुरू होणारे, आणि उत्तर देणाऱ्याला पकडता न येण्याच्या अशक्यतेने त्याचे उत्तर देणारे. तत्त्वज्ञ-उपनिषदांच्या परंपरेला सामवेदाचे योगदान.'
    }
  ],
  atharva: [
    {
      name: 'A canon without an Āraṇyaka',
      nameDeva: 'आरण्यकाशिवायचा कोश',
      citation: '—',
      citationDeva: '—',
      summary: 'The Atharvaveda is the only one of the four for which no Āraṇyaka has come down to us. The transition from Brāhmaṇa to Upaniṣad happens directly: the Gopatha Brāhmaṇa on one side, the three classical Atharvan Upaniṣads — Muṇḍaka, Māṇḍūkya, Praśna — on the other, with no intermediate forest-layer in between. Most scholars treat this as an original feature of the school rather than evidence of loss.',
      summaryDeva: 'चार वेदांपैकी अथर्ववेद हाच एकमेव वेद आहे ज्याचा आरण्यक आपल्यापर्यंत पोहोचलेला नाही. ब्राह्मणाकडून उपनिषदाकडे संक्रमण थेट होते: एका बाजूला गोपथ ब्राह्मण, दुसऱ्या बाजूला तीन शास्त्रीय अथर्वनी उपनिषदे — मुण्डक, माण्डूक्य, प्रश्न — आणि मध्ये कोणताही वन-स्तर नाही. बहुतेक अभ्यासक हे शाखेचे मूळ वैशिष्ट्य मानतात, लुप्त झाल्याचा पुरावा नाही.'
    }
  ]
};

function ShakhaCard({ shakha, lang }: { shakha: Shakha; lang: string }) {
  const [expanded, setExpanded] = useState(false);
  const statusLabel = lang === 'mr' ? 'स्थिती' : 'Status';
  const structureLabel = lang === 'mr' ? 'रचना' : 'Structure';
  const regionLabel = lang === 'mr' ? 'मुख्य क्षेत्र' : 'Primary Region';
  
  const statusVal = lang === 'mr' ? shakha.statusDeva : shakha.status;
  const structureVal = lang === 'mr' ? shakha.structureDeva : shakha.structure;
  const regionVal = lang === 'mr' ? shakha.regionDeva : shakha.region;
  const descVal = lang === 'mr' ? shakha.descDeva : shakha.desc;

  const getStatusClass = (status: string) => {
    if (status.includes('Fully Extant')) return 'extant';
    if (status.includes('Partially Extant')) return 'partial';
    return 'lost';
  };

  return (
    <div className="shakha-card" onClick={() => setExpanded(!expanded)}>
      <div className="shakha-card-header">
        <div className="shakha-title-group">
          <h4>{lang === 'mr' ? shakha.deva : shakha.name}</h4>
          {lang !== 'mr' && <div className="shakha-deva">{shakha.deva}</div>}
        </div>
        <span className={`shakha-badge ${getStatusClass(shakha.status)}`}>
          {statusVal}
        </span>
      </div>
      {(shakha.category || shakha.categoryDeva) && (
        <div className="shakha-category">
          {lang === 'mr' ? shakha.categoryDeva : shakha.category}
        </div>
      )}
      <p className="shakha-snippet">
        {descVal.length > 90 ? `${descVal.substring(0, 90)}...` : descVal}
      </p>
      <div className="shakha-card-footer">
        <span style={{ color: 'var(--ink-soft)' }}>{structureVal.split(',')[0]}</span>
        <span className="shakha-expand-hint">
          {expanded ? (lang === 'mr' ? 'कमी करा ▲' : 'Show less ▲') : (lang === 'mr' ? 'तपशील ▼' : 'Details ▼')}
        </span>
      </div>
      {expanded && (
        <div className="shakha-expanded-details" onClick={(e) => e.stopPropagation()}>
          <div className="shakha-meta-item">
            <strong>{statusLabel}:</strong> {statusVal}
          </div>
          <div className="shakha-meta-item">
            <strong>{structureLabel}:</strong> {structureVal}
          </div>
          <div className="shakha-meta-item">
            <strong>{regionLabel}:</strong> {regionVal}
          </div>
          <p className="shakha-detail-desc">{descVal}</p>
        </div>
      )}
    </div>
  );
}

function KeySuktaCard({ sukta, lang }: { sukta: KeySukta; lang: string }) {
  const [showVerse, setShowVerse] = useState(false);
  const title = lang === 'mr' ? sukta.nameDeva : sukta.name;
  const citation = lang === 'mr' ? sukta.citationDeva : sukta.citation;
  const summary = lang === 'mr' ? sukta.summaryDeva : sukta.summary;

  return (
    <div className="sukta-item">
      <div className="sukta-header">
        <div className="sukta-title-group">
          <h4>{title}</h4>
          {lang !== 'mr' && <div className="shakha-deva" style={{ marginTop: 2 }}>{sukta.nameDeva}</div>}
        </div>
        <span className="sukta-cite">{citation}</span>
      </div>
      <p className="sukta-desc">{summary}</p>
      {sukta.verse && (
        <>
          <button 
            type="button" 
            className="verse-toggle-btn"
            onClick={() => setShowVerse(!showVerse)}
          >
            <span>{showVerse ? '✕' : 'ॐ'}</span>
            <span>
              {showVerse 
                ? (lang === 'mr' ? 'मंत्र लपवा' : 'Hide Verse') 
                : (lang === 'mr' ? 'मुख्य मंत्र पहा' : 'Show Featured Verse')}
            </span>
          </button>
          {showVerse && (
            <div className="verse-panel">
              <div className="deva-line">
                {sukta.verse.deva.split('\n').map((l, i) => (
                  <div key={i}>{l}</div>
                ))}
              </div>
              <div className="translit-line">
                {transliterate(sukta.verse.deva).split('\n').map((l, i) => (
                  <div key={i}>{l}</div>
                ))}
              </div>
              <p className="trans">{sukta.verse.trans}</p>
              <div className="cite">{sukta.verse.cite}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function SamhitaSubPanel({ vedaId, lang }: { vedaId: string; lang: string }) {
  const [subTab, setSubTab] = useState<'shakhas' | 'suktas'>('shakhas');
  
  const shakhas = SHAKHAS_DATA[vedaId] || [];
  const suktas = SUKTAS_DATA[vedaId] || [];

  const intros: Record<string, { en: string; mr: string }> = {
    rig: {
      en: 'The Rigveda was historically preserved in 21 shakhas (branches) according to Patañjali. Today, the Śākala branch is the only complete surviving textual tradition, while others are known through auxiliary texts or references.',
      mr: 'पतंजलींच्या महाभाष्यानुसार ऋग्वेदाच्या एकूण २१ शाखा होत्या. आज केवळ शाकल शाखा पूर्ण स्वरूपात उपलब्ध आहे, तर इतर शाखांचे विधी ग्रंथ आणि संदर्भ शिल्लक आहेत।'
    },
    yajur: {
      en: 'The Yajurveda is split into two major currents: Śukla (White) and Kṛṣṇa (Black), historically comprising 100 or 101 branches. Six main schools are preserved with vibrant oral recitation and distinct liturgical manuals today.',
      mr: 'यजुर्वेद शुक्ल आणि कृष्ण अशा दोन मुख्य प्रवाहांत विभागलेला असून त्याच्या १०० पेक्षा जास्त ऐतिहासिक शाखा होत्या. आज ६ प्रमुख शाखांचे सस्वर मौखिक पठण आणि विधी ग्रंथ उपलब्ध आहेत।'
    },
    sama: {
      en: 'Of the legendary 1,000 shakhas of the Sāmaveda (celebrated as "sahasravartmā"), only three survive today. They preserve distinct musical structures, notation, and styles of choral chanting.',
      mr: 'सामवेदाच्या प्राचीन १००० शाखांपैकी (सहस्रवर्त्मा सामवेद) आज केवळ तीनच शाखा जतन केल्या गेल्या आहेत. या शाखांच्या संगीत आणि स्वर चिन्हांमध्ये वैशिष्ट्यपूर्ण फरक आहेत।'
    },
    atharva: {
      en: 'Historically, the Atharvaveda had 9 shakhas according to the Caraṇavyūha. Today, only two (Śaunakīya and Paippalāda) survive. The Paippalāda branch was recently rediscovered and revived in Odisha.',
      mr: 'चरणव्यूह ग्रंथानुसार अथर्ववेदाच्या एकूण ९ शाखा होत्या, ज्यापैकी आज शौनकीय आणि पैप्पलाद या दोनच शाखा उपलब्ध आहेत. ओडिशामध्ये पैप्पलाद शाखा पुनरुज्जीवित केली गेली आहे।'
    }
  };

  const intro = intros[vedaId]?.[lang as 'en' | 'mr'] || '';

  return (
    <div className="samhita-sub-panel">
      <p className="samhita-intro">{intro}</p>
      
      <nav className="samhita-tabs-nav" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={subTab === 'shakhas'}
          className={`samhita-tab-btn ${subTab === 'shakhas' ? 'is-active' : ''}`}
          onClick={() => setSubTab('shakhas')}
        >
          {lang === 'mr' ? 'शाखा / संहितेचे प्रकार' : 'Recensions (Shakhas)'}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={subTab === 'suktas'}
          className={`samhita-tab-btn ${subTab === 'suktas' ? 'is-active' : ''}`}
          onClick={() => setSubTab('suktas')}
        >
          {lang === 'mr' ? 'लोकप्रिय सूक्ते व ऋचा' : 'Key Hymns & Verses'}
        </button>
      </nav>

      {subTab === 'shakhas' ? (
        <div className="shakha-grid">
          {shakhas.map((shakha, i) => (
            <ShakhaCard key={i} shakha={shakha} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="sukta-list">
          {suktas.map((sukta, i) => (
            <KeySuktaCard key={i} sukta={sukta} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}

function BrahmanaSubPanel({ vedaId, lang }: { vedaId: string; lang: string }) {
  const [subTab, setSubTab] = useState<'brahmanas' | 'passages'>('brahmanas');

  const brahmanas = BRAHMANAS_DATA[vedaId] || [];
  const passages = PASSAGES_DATA[vedaId] || [];

  const intros: Record<string, { en: string; mr: string }> = {
    rig: {
      en: 'Of the Rigveda’s Brāhmaṇa literature, two complete texts survive: the Aitareya, on the great Soma sacrifices and the Rājasūya consecration, and the Kauṣītaki, on domestic and seasonal rites. A third — the Paiṅgi — is lost but quoted in mediaeval commentaries.',
      mr: 'ऋग्वेदाच्या ब्राह्मण साहित्यापैकी दोन ग्रंथ संपूर्णपणे टिकले आहेत: सोमयाग व राजसूय अभिषेकावरचे ऐतरेय, आणि गृहस्थ व ऋतु-विधींवरचे कौषीतकि. तिसरे — पैङ्गि — लुप्त आहे पण मध्ययुगीन भाष्यांत उद्धृत.'
    },
    yajur: {
      en: 'The Yajurveda’s Brāhmaṇa tradition is dominated by the colossal Śatapatha — the longest text of the Vedic prose canon — preserved in two recensions, Mādhyandina and Kāṇva. Alongside it stands the Taittirīya Brāhmaṇa of the Black-Yajurveda south. Two other Kṛṣṇa-Yajurveda Brāhmaṇas (Maitrāyaṇī and Kāṭhaka) are partly embedded in their Saṃhitās or survive only in fragments.',
      mr: 'यजुर्वेदाच्या ब्राह्मण परंपरेचे मुख्य प्रतिनिधी म्हणजे प्रचंड शतपथ — वैदिक गद्य परंपरेचा सर्वात मोठा ग्रंथ — जो माध्यन्दिन व काण्व या दोन शाखांत जतन केला आहे. त्याशेजारी कृष्ण यजुर्वेदी दक्षिणेकडचा तैत्तिरीय ब्राह्मण उभा आहे. इतर दोन कृष्ण यजुर्वेदी ब्राह्मण (मैत्रायणी व काठक) अंशतः त्यांच्या संहितेत गुंफलेले किंवा खंडित स्वरूपात उपलब्ध आहेत.'
    },
    sama: {
      en: 'The Sāmaveda preserves the largest number of Brāhmaṇas of any Veda — eight in the Kauthuma line alone — most of them short, technical, and concerned with the mathematical-musical architecture of the chant. The Jaiminīya Brāhmaṇa stands apart as the longest and most narrative of the eight, with the largest single collection of Vedic legends.',
      mr: 'सामवेदात कोणत्याही वेदापेक्षा अधिक ब्राह्मण ग्रंथ जतन केले आहेत — एकट्या कौथुम परंपरेत आठ — त्यांपैकी बहुतेक छोटे, तांत्रिक, गायनाच्या गणित-संगीत रचनेविषयीचे. जैमिनीय ब्राह्मण आठांत सर्वात मोठा व कथात्मक — वैदिक कथांचा सर्वात मोठा एकल संग्रह.'
    },
    atharva: {
      en: 'The Atharvaveda has only one surviving Brāhmaṇa — the Gopatha — but a remarkable one: late, learned, citation-heavy, and unique in being explicitly an argument for the supremacy of its own Veda. Reads as much like a treatise as a ritual manual.',
      mr: 'अथर्ववेदाचा एकमेव टिकलेला ब्राह्मण म्हणजे गोपथ — पण एक उल्लेखनीय ग्रंथ: उत्तरकालीन, विद्वत्तापूर्ण, अवतरण-समृद्ध, आणि स्वतःच्याच वेदाच्या श्रेष्ठत्वासाठी खुलेपणाने वाद घालणारा. विधी-पुस्तकाइतकाच शास्त्रीय निबंधासारखा वाटतो.'
    }
  };

  const intro = intros[vedaId]?.[lang as 'en' | 'mr'] || '';

  return (
    <div className="samhita-sub-panel">
      <p className="samhita-intro">{intro}</p>

      <nav className="samhita-tabs-nav" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={subTab === 'brahmanas'}
          className={`samhita-tab-btn ${subTab === 'brahmanas' ? 'is-active' : ''}`}
          onClick={() => setSubTab('brahmanas')}
        >
          {lang === 'mr' ? 'ब्राह्मण ग्रंथ' : 'Brāhmaṇa texts'}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={subTab === 'passages'}
          className={`samhita-tab-btn ${subTab === 'passages' ? 'is-active' : ''}`}
          onClick={() => setSubTab('passages')}
        >
          {lang === 'mr' ? 'महत्त्वाची आख्याने व विधी' : 'Key Passages & Rites'}
        </button>
      </nav>

      {subTab === 'brahmanas' ? (
        <div className="shakha-grid">
          {brahmanas.map((b, i) => (
            <ShakhaCard key={i} shakha={b} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="sukta-list">
          {passages.map((p, i) => (
            <KeySuktaCard key={i} sukta={p} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}

function AranyakaSubPanel({ vedaId, lang }: { vedaId: string; lang: string }) {
  const [subTab, setSubTab] = useState<'aranyakas' | 'passages'>('aranyakas');

  const aranyakas = ARANYAKAS_DATA[vedaId] || [];
  const passages = ARANYAKA_PASSAGES_DATA[vedaId] || [];

  const intros: Record<string, { en: string; mr: string }> = {
    rig: {
      en: 'The Rigveda preserves two Āraṇyakas in full: the Aitareya, in five books — the third and fourth of which contain the Aitareya Upaniṣad — and the Kauṣītaki, in fifteen chapters with the Kauṣītaki Upaniṣad embedded inside. The boundary between Āraṇyaka and Upaniṣad is, here, a matter of where one stops reading.',
      mr: 'ऋग्वेदाचे दोन आरण्यक पूर्णपणे टिकले आहेत: पाच आरण्यकांचे ऐतरेय — ज्याच्या तिसऱ्या व चौथ्या आरण्यकांत ऐतरेय उपनिषद आहे — आणि पंधरा अध्यायांचे कौषीतकि, ज्याच्या आत कौषीतकि उपनिषद आहे. आरण्यक व उपनिषद यांच्यातील सीमा येथे फक्त "कुठे वाचणे थांबवायचे" इतकीच आहे.'
    },
    yajur: {
      en: 'In the Yajurveda the Āraṇyaka layer is most fully developed. The Śukla line has the Bṛhad-āraṇyaka — which is at once the closing book of the Śatapatha Brāhmaṇa and the Bṛhad-āraṇyaka Upaniṣad. The Kṛṣṇa line has the great Taittirīya Āraṇyaka in ten prapāṭhakas (containing both the Taittirīya and the Mahānārāyaṇa Upaniṣads), alongside the partly-preserved Maitrāyaṇī and the fragmentary Kāṭhaka.',
      mr: 'यजुर्वेदात आरण्यक स्तर सर्वाधिक विकसित आहे. शुक्ल परंपरेत बृहदारण्यक — जो एकाच वेळी शतपथ ब्राह्मणाचा शेवटचा कांड व बृहदारण्यक उपनिषद आहे. कृष्ण परंपरेत दहा प्रपाठकांचे महान तैत्तिरीय आरण्यक (ज्यात तैत्तिरीय व महानारायण ही दोन्ही उपनिषदे आहेत), त्यासोबत अंशतः जतन झालेले मैत्रायणी व खंडित काठक.'
    },
    sama: {
      en: 'The Sāmaveda has only one clearly preserved Āraṇyaka — the Talavakāra (the Jaiminīya Upaniṣad Brāhmaṇa), whose fourth chapter is the Kena Upaniṣad. In the much larger Kauthuma–Rāṇāyanīya line the Āraṇyaka layer is not preserved as a separate book; its function is taken up by the early chapters of the Chāndogya Brāhmaṇa and the opening of the Chāndogya Upaniṣad itself.',
      mr: 'सामवेदाचा एकमेव स्पष्टपणे जतन झालेला आरण्यक म्हणजे तलवकार (जैमिनीय उपनिषद् ब्राह्मण), ज्याचा चौथा अध्याय केन उपनिषद आहे. खूप मोठ्या कौथुम–राणायनीय परंपरेत आरण्यक स्तर स्वतंत्र ग्रंथ म्हणून जतन झालेला नाही; त्याचे कार्य छान्दोग्य ब्राह्मणाच्या प्रारंभिक अध्यायांनी व स्वतः छान्दोग्य उपनिषदाच्या सुरुवातीनेच पार पाडले आहे.'
    },
    atharva: {
      en: 'Alone among the four, the Atharvaveda has no surviving Āraṇyaka layer. Its line goes directly from the Gopatha Brāhmaṇa to the three classical Atharvan Upaniṣads — Muṇḍaka, Māṇḍūkya, Praśna — without an intervening forest-book. Whether this is an original feature of the school or evidence of loss is the longest-running open question in Atharvavedic scholarship.',
      mr: 'चार वेदांत केवळ अथर्ववेदाला उपलब्ध आरण्यक स्तर नाही. त्याची परंपरा थेट गोपथ ब्राह्मणाकडून तीन शास्त्रीय अथर्वनी उपनिषदांकडे — मुण्डक, माण्डूक्य, प्रश्न — कोणत्याही मधल्या वन-ग्रंथाशिवाय जाते. हे शाखेचे मूळ वैशिष्ट्य आहे की लुप्ततेचा पुरावा, हा अथर्ववेदी अभ्यासातील सर्वात दीर्घकाळ टिकलेला खुला प्रश्न आहे.'
    }
  };

  const intro = intros[vedaId]?.[lang as 'en' | 'mr'] || '';

  return (
    <div className="samhita-sub-panel">
      <p className="samhita-intro">{intro}</p>

      <nav className="samhita-tabs-nav" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={subTab === 'aranyakas'}
          className={`samhita-tab-btn ${subTab === 'aranyakas' ? 'is-active' : ''}`}
          onClick={() => setSubTab('aranyakas')}
        >
          {lang === 'mr' ? 'आरण्यक ग्रंथ' : 'Āraṇyaka texts'}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={subTab === 'passages'}
          className={`samhita-tab-btn ${subTab === 'passages' ? 'is-active' : ''}`}
          onClick={() => setSubTab('passages')}
        >
          {lang === 'mr' ? 'महत्त्वाची विद्या व आख्याने' : 'Key Vidyās & Passages'}
        </button>
      </nav>

      {subTab === 'aranyakas' ? (
        <div className="shakha-grid">
          {aranyakas.map((a, i) => (
            <ShakhaCard key={i} shakha={a} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="sukta-list">
          {passages.map((p, i) => (
            <KeySuktaCard key={i} sukta={p} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}

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
          {activeStratum === 'samhita' ? (
            <SamhitaSubPanel vedaId={active} lang={lang} />
          ) : activeStratum === 'brahmana' ? (
            <BrahmanaSubPanel vedaId={active} lang={lang} />
          ) : activeStratum === 'aranyaka' ? (
            <AranyakaSubPanel vedaId={active} lang={lang} />
          ) : (
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
          )}
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
