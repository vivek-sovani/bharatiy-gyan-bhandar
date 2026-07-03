// Journeys — curated reading sequences through pages that already exist.
// Pure curation: every step.path must resolve to a real route. See
// IMPLEMENTATION_PLAN.md Part 4 for the design this implements.

export type JourneyStep = {
  path: string; // existing route, e.g. '/upanishads/isha/'
  title: string; // display name for the step (matches the destination page's title)
  why: string; // one line: why this step, why now — the connective tissue
  minutes: number; // honest reading-time estimate
};

export type Journey = {
  id: string;
  title: string;
  deva: string;
  tagline: string;
  audience: string;
  accent: string; // existing --ac-* CSS var name (without the leading --)
  steps: JourneyStep[];
};

export const JOURNEYS: Journey[] = [
  {
    id: 'first-steps',
    title: 'First Steps',
    deva: 'प्रथम पदानि',
    tagline: 'From "what is all this?" to your first Upaniṣad — in seven short reads.',
    audience: 'No prior knowledge needed',
    accent: 'ac-knowledge',
    steps: [
      {
        path: '/shruti-smriti/',
        title: 'Śruti & Smṛti',
        why: "Start with the map: what makes a text 'heard' rather than 'remembered' — and why the distinction still organizes everything that follows.",
        minutes: 4,
      },
      {
        path: '/vedas/',
        title: 'The Four Vedas',
        why: 'The oldest layer, where it all starts — four collections, one continuous act of remembering aloud.',
        minutes: 6,
      },
      {
        path: '/upanishads/',
        title: 'The Upaniṣads',
        why: 'The moment ritual turns inward — the same fire, now lit as a question about the self.',
        minutes: 5,
      },
      {
        path: '/upanishads/isha/',
        title: 'Īśa Upaniṣad',
        why: 'Your first complete text — eighteen verses, short enough to read before your tea cools, and dense enough to reread for years.',
        minutes: 6,
      },
      {
        path: '/gita/',
        title: 'Bhagavad Gītā',
        why: "The corpus's most beloved distillation — the Upaniṣads' questions, answered on a battlefield.",
        minutes: 8,
      },
      {
        path: '/subhashita/',
        title: 'Subhāṣita & Nīti',
        why: 'Wisdom compressed to a single memorable line — the kind you can quote at dinner and mean it.',
        minutes: 4,
      },
      {
        path: '/lifestyle/',
        title: 'Dinacaryā & Living',
        why: 'Where the ideas come down to earth — how this was meant to be lived, one ordinary day at a time.',
        minutes: 5,
      },
    ],
  },
  {
    id: 'philosophy-path',
    title: 'The Philosophy Path',
    deva: 'दर्शन-मार्गः',
    tagline: "For the systematically minded — six schools, their split readings, and the arguments against them.",
    audience: 'A taste for careful argument helps, but no prior training needed',
    accent: 'ac-order',
    steps: [
      {
        path: '/darshanas/',
        title: 'The Āstika Darśanas',
        why: 'The map of the six orthodox schools — pick a lens before you pick a fight.',
        minutes: 5,
      },
      {
        path: '/darshanas/nyaya/',
        title: 'Nyāya',
        why: 'Start with how to argue well — Nyāya built the logical toolkit every other school had to answer to.',
        minutes: 7,
      },
      {
        path: '/darshanas/sankhya/',
        title: 'Sāṅkhya',
        why: "Now ask what exists — Sāṅkhya's inventory of matter and consciousness underlies half the vocabulary you'll meet from here on.",
        minutes: 7,
      },
      {
        path: '/darshanas/yoga/',
        title: 'Yoga',
        why: "Sāṅkhya says what's real; Yoga says what to do about it — the practical twin of the pair.",
        minutes: 7,
      },
      {
        path: '/darshanas/vedanta/',
        title: 'Vedānta',
        why: 'The school that absorbed the Upaniṣads directly and became, for many, the last word on the self and the absolute.',
        minutes: 8,
      },
      {
        path: '/vedanta-schools/',
        title: 'Vedānta Schools',
        why: "One text, three great readings — where Vedānta's interpreters part ways and the real arguments begin.",
        minutes: 7,
      },
      {
        path: '/nastika-darshanas/',
        title: 'The Nāstika Darśanas',
        why: 'The loyal opposition — Jaina, Buddhist and materialist critiques that every orthodox school had to take seriously.',
        minutes: 7,
      },
      {
        path: '/language-philosophy/',
        title: 'Philosophy of Language',
        why: 'The summit: after matter, self and liberation, the hardest question of all — what does meaning itself consist of?',
        minutes: 7,
      },
    ],
  },
  {
    id: 'stories-first',
    title: 'Stories First',
    deva: 'कथा-मार्गः',
    tagline: "All ages, all families — the two epics, the Gītā's pause inside one of them, and the songs that followed.",
    audience: 'For families and readers of any age',
    accent: 'ac-aesthetics',
    steps: [
      {
        path: '/itihasa/',
        title: 'Itihāsa',
        why: '"So indeed it was" — history as the epics tell it, where doctrine arrives dressed as narrative.',
        minutes: 5,
      },
      {
        path: '/itihasa/ramayana/',
        title: 'Rāmāyaṇa',
        why: 'One prince, one exile, one impossible standard of duty — the story every Indian language has retold.',
        minutes: 8,
      },
      {
        path: '/itihasa/mahabharata/',
        title: 'Mahābhārata',
        why: "The largest epic ever composed, built around one family's war and the question of what's worth fighting for.",
        minutes: 9,
      },
      {
        path: '/gita/',
        title: 'Bhagavad Gītā',
        why: 'The conversation inside the epic — paused on the battlefield to ask the only question that matters before the fighting starts.',
        minutes: 7,
      },
      {
        path: '/puranas/',
        title: 'The Purāṇas',
        why: 'Where the old stories keep growing — cosmology, myth and genealogy told and retold across a thousand years.',
        minutes: 6,
      },
      {
        path: '/bhakti/',
        title: 'Bhakti Traditions',
        why: 'How the stories became song — devotion that turned itihāsa and purāṇa into something you sing, not just read.',
        minutes: 5,
      },
    ],
  },
  {
    id: 'scientific-mind',
    title: 'The Scientific Mind',
    deva: 'विज्ञान-मार्गः',
    tagline: "For students and skeptics — mathematics, astronomy, grammar and medicine, on their own terms.",
    audience: 'A curious, questioning mind — no faith required',
    accent: 'ac-mind',
    steps: [
      {
        path: '/sciences/',
        title: 'Indic Sciences & Mathematics',
        why: 'The overview — where mathematics, astronomy and grammar sat inside one continuous tradition of exact thought.',
        minutes: 6,
      },
      {
        path: '/living-knowledge/zero/',
        title: 'Zero (śūnya) as a number',
        why: 'The single idea with the largest afterlife — a placeholder that became a number, and made modern mathematics possible.',
        minutes: 5,
      },
      {
        path: '/living-knowledge/eclipses/',
        title: 'Eclipses by shadow, not myth',
        why: 'From counting to predicting — geometry applied to the sky, centuries before telescopes.',
        minutes: 6,
      },
      {
        path: '/vedangas/jyotisha/',
        title: 'Jyotiṣa',
        why: 'The Vedic discipline of timekeeping that eclipse prediction eventually grew out of — read it after, and the arithmetic makes sense.',
        minutes: 8,
      },
      {
        path: '/living-knowledge/panini-grammar/',
        title: "Pāṇini's Aṣṭādhyāyī",
        why: 'Grammar as engineering — a formal system so precise it anticipates ideas from twentieth-century computer science.',
        minutes: 8,
      },
      {
        path: '/living-knowledge/charaka-medicine/',
        title: "Charaka's internal medicine",
        why: 'The same rigor turned on the body — diagnosis and treatment built from observation, not just doctrine.',
        minutes: 6,
      },
      {
        path: '/upavedas/ayurveda/',
        title: 'Āyurveda',
        why: "The full system Charaka's medicine belongs to — theory, practice and the discipline that still treats patients today.",
        minutes: 6,
      },
    ],
  },
  {
    id: 'sant-path',
    title: 'The Sant Path',
    deva: 'संत-वाट',
    tagline: 'A Marathi-first path — from bhakti\'s roots to the Vārkarī sants who carried it home.',
    audience: 'For Marathi readers, or anyone curious about the Vārkarī tradition',
    accent: 'ac-liberation',
    steps: [
      {
        path: '/bhakti/',
        title: 'Bhakti Traditions',
        why: "Where devotion begins as an all-India movement — before it found its most beloved Marathi voice.",
        minutes: 5,
      },
      {
        path: '/marathi-sants/',
        title: 'Marathi Sants',
        why: 'The Vārkarī lineage — poet-saints who made Vedānta sing in the language people actually spoke.',
        minutes: 5,
      },
      {
        path: '/marathi-sants/jnaneshwar/',
        title: 'Jñāneśvar',
        why: "The foundation — a teenager's Marathi commentary on the Gītā that started the whole tradition.",
        minutes: 8,
      },
      {
        path: '/marathi-sants/namdev/',
        title: 'Nāmdev',
        why: 'The open door — kīrtan and the name of God carried from Mahārāṣṭra all the way to the Guru Granth Sāhib.',
        minutes: 6,
      },
      {
        path: '/marathi-sants/tukaram/',
        title: 'Tukārām',
        why: 'The summit of the abhaṅga — plain speech, total devotion, and four thousand verses that still get sung today.',
        minutes: 8,
      },
      {
        path: '/marathi-sants/ramdas/',
        title: 'Samarth Rāmdās',
        why: 'Devotion joined to action — the sant who insisted that loving Rāma also meant building a stronger world for him.',
        minutes: 8,
      },
    ],
  },
];
