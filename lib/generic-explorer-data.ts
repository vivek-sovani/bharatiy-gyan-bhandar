// Per-section configuration for the generic section explorer. Item titles, summaries,
// shlokas and facets come from SECTION_DETAILS (en and mr); people come from the
// contributors data. This file only adds what those lack: approximate dates
// (negative = BCE), grouping, and where each person sits on the line.

import type { ExplorerSeer } from './vedic-timeline-data';

export type GenericItem = { id: string; a?: number; b?: number };

export type GenericGroup = {
  id: string;
  accent: string;
  seal: string;
  name?: { en: string; mr: string };
  blurb?: { en: string; mr: string };
  items: GenericItem[];
  seers?: ExplorerSeer[];
};

export type GenericConfig = {
  mode: 'timeline' | 'cards';
  range?: [number, number];
  ticks?: number[];
  groups: GenericGroup[];
};

const GOLD = 'var(--ac-knowledge)';
const BLUE = 'var(--ac-ethics)';
const ROSE = 'var(--ac-aesthetics)';
const GREEN = 'var(--ac-liberation)';
const PURPLE = 'var(--ac-mind)';
const TEAL = 'var(--ac-heterodox)';
const RED = 'var(--ac-order)';

const seer = (contributorId: string, year: number): ExplorerSeer => ({ id: contributorId, year, contributorId });

export const GENERIC_EXPLORERS: Record<string, GenericConfig> = {
  upavedas: {
    mode: 'cards',
    groups: [
      {
        id: 'all', accent: GOLD, seal: 'उ',
        items: [{ id: 'ayurveda' }, { id: 'dhanurveda' }, { id: 'gandharvaveda' }, { id: 'sthapatyaveda' }],
      },
    ],
  },

  vedangas: {
    mode: 'cards',
    groups: [
      {
        id: 'all', accent: BLUE, seal: 'अ',
        items: [{ id: 'shiksha' }, { id: 'kalpa' }, { id: 'vyakarana' }, { id: 'nirukta' }, { id: 'chandas' }, { id: 'jyotisha' }],
      },
    ],
  },

  darshanas: {
    mode: 'timeline',
    range: [-700, 500],
    ticks: [-600, -400, -200, 0, 200, 400],
    groups: [
      {
        id: 'logic', accent: BLUE, seal: 'न',
        name: { en: 'Logic + Physics', mr: 'तर्क + पदार्थविज्ञान' },
        blurb: {
          en: 'Nyāya gives the rules of debate and valid knowledge; Vaiśeṣika gives the categories and atoms of the physical world.',
          mr: 'न्याय वाद व प्रमाणाचे नियम देतो; वैशेषिक पदार्थांची वर्गवारी व परमाणुवाद.',
        },
        items: [{ id: 'nyaya', a: -200, b: 150 }, { id: 'vaisheshika', a: -200, b: 100 }],
        seers: [seer('gautama-nyaya', -180), seer('kanada', -160)],
      },
      {
        id: 'theory', accent: GREEN, seal: 'सां',
        name: { en: 'Theory + Practice', mr: 'सिद्धांत + साधना' },
        blurb: {
          en: 'Sāṅkhya maps consciousness and matter; Yoga turns that map into a discipline of the mind.',
          mr: 'सांख्य चैतन्य व प्रकृतीचा नकाशा देते; योग त्याचे मनाच्या साधनेत रूपांतर करतो.',
        },
        items: [{ id: 'sankhya', a: -600, b: 350 }, { id: 'yoga', a: -200, b: 400 }],
        seers: [seer('kapila', -550), seer('patanjali', -150)],
      },
      {
        id: 'veda', accent: GOLD, seal: 'मी',
        name: { en: 'Ritual + Knowledge', mr: 'कर्म + ज्ञान' },
        blurb: {
          en: 'Pūrva-Mīmāṃsā reads the Veda as duty and rite; Vedānta reads the same Veda as knowledge of Brahman.',
          mr: 'पूर्व-मीमांसा वेद कर्तव्य व यज्ञ म्हणून वाचते; वेदान्त तोच वेद ब्रह्मज्ञान म्हणून.',
        },
        items: [{ id: 'mimamsa', a: -300, b: -100 }, { id: 'vedanta', a: -200, b: 200 }],
        seers: [seer('jaimini', -250), seer('badarayana', -100)],
      },
    ],
  },

  'vedanta-schools': {
    mode: 'timeline',
    range: [400, 1600],
    ticks: [500, 700, 900, 1100, 1300, 1500],
    groups: [
      {
        id: 'all', accent: BLUE, seal: 'वे',
        items: [
          { id: 'gaudapada', a: 500, b: 600 },
          { id: 'advaita', a: 788, b: 820 },
          { id: 'vishishtadvaita', a: 1017, b: 1137 },
          { id: 'dvaita', a: 1238, b: 1317 },
          { id: 'bhedabheda', a: 800, b: 1534 },
        ],
        seers: [seer('adi-shankara', 804), seer('ramanuja', 1077), seer('madhva', 1277), seer('vallabha', 1505), seer('caitanya', 1510)],
      },
    ],
  },

  'language-philosophy': {
    mode: 'timeline',
    range: [-500, 1800],
    ticks: [-400, 0, 400, 800, 1200, 1600],
    groups: [
      {
        id: 'all', accent: PURPLE, seal: 'श',
        items: [
          { id: 'mahabhashya', a: -200, b: -100 },
          { id: 'bhartrihari', a: 450, b: 500 },
          { id: 'shabda-brahman', a: 450, b: 550 },
          { id: 'grammar-liberation', a: 460, b: 520 },
          { id: 'vaiyakarana-legacy', a: 1600, b: 1750 },
        ],
        seers: [seer('panini', -400), seer('patanjali', -150)],
      },
    ],
  },

  yantra: {
    mode: 'cards',
    groups: [
      {
        id: 'all', accent: RED, seal: 'य',
        items: [{ id: 'yantra' }, { id: 'sri-yantra' }, { id: 'bindu-trikona' }, { id: 'mandala' }, { id: 'vastu-mandala' }, { id: 'ritual-yantras' }],
      },
    ],
  },

  'tantra-texts': {
    mode: 'timeline',
    range: [600, 1300],
    ticks: [700, 800, 900, 1000, 1100, 1200],
    groups: [
      {
        id: 'all', accent: PURPLE, seal: 'त',
        items: [
          { id: 'vijnana-bhairava', a: 700, b: 900 },
          { id: 'shiva-sutra', a: 800, b: 900 },
          { id: 'spanda', a: 825, b: 900 },
          { id: 'saundarya-lahari', a: 800, b: 1000 },
          { id: 'pratyabhijna', a: 900, b: 1050 },
          { id: 'kaula-tantras', a: 900, b: 1200 },
        ],
        seers: [seer('adi-shankara', 804), seer('abhinavagupta', 983)],
      },
    ],
  },

  agamas: {
    mode: 'cards',
    groups: [
      { id: 'all', accent: PURPLE, seal: 'आ', items: [{ id: 'shaiva' }, { id: 'vaishnava' }, { id: 'shakta' }] },
    ],
  },

  itihasa: {
    mode: 'timeline',
    range: [-700, 500],
    ticks: [-600, -400, -200, 0, 200, 400],
    groups: [
      {
        id: 'all', accent: RED, seal: 'इ',
        items: [{ id: 'ramayana', a: -500, b: 200 }, { id: 'mahabharata', a: -400, b: 400 }],
        seers: [seer('valmiki', -500), seer('vyasa', -400)],
      },
    ],
  },

  rangoli: {
    mode: 'cards',
    groups: [
      {
        id: 'all', accent: ROSE, seal: 'र',
        items: [{ id: 'rangoli' }, { id: 'kolam' }, { id: 'alpana' }, { id: 'mandana' }, { id: 'pookalam' }, { id: 'sacred-geometry' }],
      },
    ],
  },

  lifestyle: {
    mode: 'cards',
    groups: [
      {
        id: 'rhythm', accent: GOLD, seal: 'द',
        name: { en: 'Rhythm of day and year', mr: 'दिवस आणि वर्षाची लय' },
        items: [{ id: 'dinacharya' }, { id: 'ritucharya' }],
      },
      {
        id: 'design', accent: BLUE, seal: 'ज',
        name: { en: 'Designing a life', mr: 'जीवनाची रचना' },
        items: [{ id: 'ashrama' }, { id: 'purushartha' }, { id: 'dharma' }],
      },
      {
        id: 'practice', accent: GREEN, seal: 'सा',
        name: { en: 'Body and practice', mr: 'देह आणि साधना' },
        items: [{ id: 'yoga' }, { id: 'ayurveda' }],
      },
    ],
  },

  'nastika-darshanas': {
    mode: 'timeline',
    range: [-700, 300],
    ticks: [-600, -400, -200, 0, 200],
    groups: [
      {
        id: 'all', accent: TEAL, seal: 'न',
        items: [{ id: 'carvaka', a: -600, b: -200 }, { id: 'bauddha', a: -500, b: -300 }, { id: 'jaina', a: -600, b: -400 }],
        seers: [seer('mahavira', -563), seer('buddha', -483)],
      },
    ],
  },

  puranas: {
    mode: 'cards',
    groups: [
      { id: 'all', accent: RED, seal: 'पु', items: [{ id: 'vaishnava' }, { id: 'brahma' }, { id: 'shaiva' }] },
    ],
  },

  dharmashastra: {
    mode: 'timeline',
    range: [-300, 800],
    ticks: [-200, 0, 200, 400, 600],
    groups: [
      {
        id: 'all', accent: BLUE, seal: 'ध',
        items: [
          { id: 'manu', a: -200, b: 200 },
          { id: 'yajnavalkya', a: 300, b: 500 },
          { id: 'narada', a: 400, b: 500 },
          { id: 'brihaspati', a: 550, b: 700 },
        ],
      },
    ],
  },

  arthashastra: {
    mode: 'timeline',
    range: [-400, 1700],
    ticks: [-200, 200, 600, 1000, 1400],
    groups: [
      {
        id: 'all', accent: RED, seal: 'अ',
        items: [
          { id: 'kautilya', a: -350, b: 250 },
          { id: 'manu-raja', a: -200, b: 200 },
          { id: 'kamandaka', a: 600, b: 800 },
          { id: 'shukra', a: 1000, b: 1600 },
        ],
        seers: [seer('kautilya', -320)],
      },
    ],
  },

  kamashastra: {
    mode: 'timeline',
    range: [0, 1400],
    ticks: [200, 400, 600, 800, 1000, 1200],
    groups: [
      {
        id: 'all', accent: ROSE, seal: 'का',
        items: [{ id: 'kamasutra', a: 200, b: 300 }, { id: 'jayamangala', a: 1200, b: 1300 }],
      },
    ],
  },

  kavya: {
    mode: 'cards',
    groups: [
      { id: 'all', accent: ROSE, seal: 'का', items: [{ id: 'mahakavya' }, { id: 'natya' }, { id: 'khanda' }, { id: 'katha' }] },
    ],
  },

  'kavya-poets': {
    mode: 'timeline',
    range: [0, 1300],
    ticks: [200, 400, 600, 800, 1000, 1200],
    groups: [
      {
        id: 'all', accent: ROSE, seal: 'क',
        items: [
          { id: 'dramatists', a: 200, b: 800 },
          { id: 'kalidasa', a: 350, b: 450 },
          { id: 'mahakavya', a: 500, b: 1200 },
          { id: 'bana', a: 600, b: 650 },
          { id: 'dandin', a: 650, b: 750 },
          { id: 'jayadeva', a: 1150, b: 1200 },
        ],
        seers: [seer('bharata-muni', 100)],
      },
    ],
  },

  sciences: {
    mode: 'timeline',
    range: [-900, 1700],
    ticks: [-600, -200, 200, 600, 1000, 1400],
    groups: [
      {
        id: 'all', accent: GREEN, seal: 'वि',
        items: [
          { id: 'shulba', a: -800, b: -200 },
          { id: 'altar-geometry', a: -800, b: -200 },
          { id: 'pingala', a: -300, b: -200 },
          { id: 'aryabhata', a: 476, b: 550 },
          { id: 'brahmagupta', a: 598, b: 668 },
          { id: 'bhaskara', a: 1114, b: 1185 },
          { id: 'kerala', a: 1340, b: 1600 },
        ],
        seers: [seer('sushruta', -300), seer('charaka', 100), seer('varahamihira', 546)],
      },
    ],
  },

  subhashita: {
    mode: 'cards',
    groups: [
      { id: 'all', accent: GOLD, seal: 'सु', items: [{ id: 'bhartrihari' }, { id: 'chanakya' }, { id: 'vidura' }, { id: 'panchatantra' }] },
    ],
  },

  modern: {
    mode: 'timeline',
    range: [1750, 1990],
    ticks: [1800, 1850, 1900, 1950],
    groups: [
      {
        id: 'all', accent: RED, seal: 'आ',
        items: [
          { id: 'rammohan', a: 1772, b: 1833 },
          { id: 'tagore', a: 1861, b: 1941 },
          { id: 'vivekananda', a: 1863, b: 1902 },
          { id: 'gandhi', a: 1869, b: 1948 },
          { id: 'aurobindo', a: 1872, b: 1950 },
          { id: 'ambedkar', a: 1891, b: 1956 },
          { id: 'krishnamurti', a: 1895, b: 1986 },
        ],
        seers: [seer('dayananda', 1853), seer('ramakrishna', 1861), seer('tilak', 1888), seer('ramana', 1915), seer('radhakrishnan', 1931)],
      },
    ],
  },

  gita: {
    mode: 'cards',
    groups: [
      { id: 'all', accent: GOLD, seal: 'गी', items: [{ id: 'karma' }, { id: 'bhakti' }, { id: 'jnana' }, { id: 'vishvarupa' }] },
    ],
  },

  bhakti: {
    mode: 'timeline',
    range: [500, 1700],
    ticks: [600, 800, 1000, 1200, 1400, 1600],
    groups: [
      {
        id: 'all', accent: ROSE, seal: 'भ',
        items: [
          { id: 'alvars', a: 600, b: 900 },
          { id: 'nayanars', a: 600, b: 900 },
          { id: 'sants', a: 1300, b: 1700 },
          { id: 'gaudiya', a: 1486, b: 1650 },
        ],
        seers: [seer('namdev', 1310), seer('kabir', 1479), seer('guru-nanak', 1504), seer('caitanya', 1510), seer('mira', 1523), seer('sūrdas', 1530), seer('tulsidas', 1577)],
      },
    ],
  },

  'marathi-sants': {
    mode: 'timeline',
    range: [1250, 1700],
    ticks: [1300, 1400, 1500, 1600],
    groups: [
      {
        id: 'all', accent: ROSE, seal: 'सं',
        items: [
          { id: 'sant-mandali', a: 1275, b: 1690 },
          { id: 'namdev', a: 1270, b: 1350 },
          { id: 'jnaneshwar', a: 1275, b: 1296 },
          { id: 'eknath', a: 1533, b: 1599 },
          { id: 'tukaram', a: 1608, b: 1649 },
          { id: 'ramdas', a: 1608, b: 1681 },
        ],
      },
    ],
  },

  parallel: {
    mode: 'timeline',
    range: [-700, 1800],
    ticks: [-500, 0, 500, 1000, 1500],
    groups: [
      {
        id: 'all', accent: TEAL, seal: 'स',
        items: [
          { id: 'jain', a: -599, b: -400 },
          { id: 'buddhist', a: -563, b: -300 },
          { id: 'sikh', a: 1469, b: 1708 },
        ],
        seers: [seer('mahavira', -563), seer('buddha', -483), seer('guru-nanak', 1504)],
      },
    ],
  },
};
