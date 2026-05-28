export type PuranaConcept = {
  name: string;
  deva: string;
  desc: string;
};

export type PuranaText = {
  name: string;
  verses: string;
  desc: string;
};

export type PuranaVerse = {
  deva: string;
  translit: string;
  trans: string;
  cite: string;
};

export interface PuranaDetails {
  id: string;
  title: string;
  deva: string;
  deity: string;
  guna: string;
  textsList: PuranaText[];
  concepts: PuranaConcept[];
  explanation: string[];
  verse: PuranaVerse;
}

export const PURANAS_DETAILS: Record<string, PuranaDetails> = {
  vaishnava: {
    id: 'vaishnava',
    title: 'Vaiṣṇava Purāṇas',
    deva: 'वैष्णव पुराणानि',
    deity: 'Viṣṇu',
    guna: 'Sattva (Purity, Truth, and Harmony)',
    textsList: [
      { name: 'Viṣṇu Purāṇa', verses: '23,000', desc: 'The model Purāṇa, containing detailed accounts of creation, cosmology, the life of Kṛṣṇa, and dynasties.' },
      { name: 'Bhāgavata Purāṇa', verses: '18,000', desc: 'The most celebrated Purāṇa, focusing on Bhakti (devotion) and detailing the life and teachings of Kṛṣṇa.' },
      { name: 'Nāradīya Purāṇa', verses: '25,000', desc: 'A dialogue where sage Nārada describes the core contents and significance of all eighteen Purāṇas.' },
      { name: 'Garuḍa Purāṇa', verses: '19,000', desc: 'Best known for its detailed descriptions of death, the afterlife, the journey of the soul, and cosmology.' },
      { name: 'Padma Purāṇa', verses: '55,000', desc: 'A massive text containing chapters on creation, geography, sacred pilgrimages (Tīrthas), and local legends.' },
      { name: 'Varāha Purāṇa', verses: '24,000', desc: 'Centering on the Varāha (boar) avatar of Viṣṇu, focusing on ritual worship, prayers, and holy places.' }
    ],
    concepts: [
      { name: 'Bhakti (Loving Devotion)', deva: 'भक्ति', desc: 'The path of complete surrender and love toward the divine as the easiest and most supreme means of liberation.' },
      { name: 'Daśāvatāra (Ten Incarnations)', deva: 'दशावतार', desc: 'The ten major forms assumed by Viṣṇu to restore cosmic order (dharma) on earth in different cosmic eras.' },
      { name: 'Apavarga (Salvation)', deva: 'अपवर्ग', desc: 'Achieving absolute freedom from the cycle of birth and death through divine grace and pure devotion.' }
    ],
    explanation: [
      'The Vaiṣṇava Purāṇas are classified under the quality of Sattva (purity and light). In these texts, Viṣṇu is celebrated as the supreme reality, the preserver and protector of the universe, who incarnates whenever chaos threatens the cosmic order.',
      'The crown jewel of this collection is the Bhāgavata Purāṇa. It transformed the landscape of Indian spirituality by placing Bhakti (devotion) above ritualism and philosophical debate, illustrating that a direct, emotional, and loving relationship with the divine leads to ultimate liberation. These texts also preserve advanced systems of time (Yugas) and cosmic cycles.'
    ],
    verse: {
      deva: 'स वै पुंसां परो धर्मो यतो भक्तिरधोक्षजे ।\nअहैतुक्यप्रतिहता ययात्मा सम्प्रसीदति ॥',
      translit: 'sa vai puṃsāṃ paro dharmo yato bhaktiradhokṣaje |\nahaitukyapratihatā yayātmā samprasīdati ||',
      trans: 'The supreme duty of humanity is that by which loving devotion to the transcendent Lord is generated — devotion that is unmotivated and uninterrupted, satisfying the soul completely.',
      cite: 'Bhāgavata Purāṇa · 1.2.6'
    }
  },
  brahma: {
    id: 'brahma',
    title: 'Brāhma Purāṇas',
    deva: 'ब्राह्म पुराणानि',
    deity: 'Brahmā / Devī / Sūrya',
    guna: 'Rajas (Activity, Creation, and Passion)',
    textsList: [
      { name: 'Brahma Purāṇa', verses: '10,000', desc: 'Also called Ādi Purāṇa, covering creation legends, the solar and lunar dynasties, and holy places.' },
      { name: 'Brahmāṇḍa Purāṇa', verses: '12,000', desc: 'Famous for containing the Lalitā Sahasranāma and describing the origin of the cosmic egg (Brahmāṇḍa).' },
      { name: 'Brahmavaivarta Purāṇa', verses: '18,000', desc: 'Focuses heavily on the divine play of Kṛṣṇa and Rādhā, representing them as the origin of all creation.' },
      { name: 'Mārkaṇḍeya Purāṇa', verses: '9,000', desc: 'Contains the famous Devī Māhātmya, outlining the battles and victories of the supreme Goddess.' },
      { name: 'Bhaviṣya Purāṇa', verses: '28,000', desc: 'Deals primarily with prophecies, future dynasties, and the glorification of the sun deity (Sūrya).' },
      { name: 'Vāmana Purāṇa', verses: '10,000', desc: 'Focuses on the legends of the Vāmana (dwarf) avatar of Viṣṇu and details sacred regional geography.' }
    ],
    concepts: [
      { name: 'Pañcalakṣaṇa (Five Subjects)', deva: 'पञ्चलक्षण', desc: 'The five defining topics: Sarga (creation), Pratisarga (dissolution), Vaṃśa (dynasties), Manvantara (cosmic eras), and Vaṃśānucarita (genealogies).' },
      { name: 'Śakti (Divine Power)', deva: 'शक्ति', desc: 'The cosmic creative energy manifested as the Goddess, who maintains, protects, and drives the dynamics of the universe.' },
      { name: 'Brahmāṇḍa (Cosmic Egg)', deva: 'ब्रह्माण्ड', desc: 'The golden egg of creation from which Brahmā emerges to project the material layers of the cosmos.' }
    ],
    explanation: [
      'The Brāhma Purāṇas are classified under the quality of Rajas (creation, passion, and movement). While named after Brahmā (the creator god), they also host the foundational texts of Goddess worship (Śākta tradition) and solar worship.',
      'The most influential work in this category is the Devī Māhātmya, nested inside the Mārkaṇḍeya Purāṇa. It declares the Goddess (Devī) to be the supreme ultimate reality, the creative power (Śakti) behind the gods, and the protector of the cosmos. This collection also codifies the Pañcalakṣaṇa model—the classic five-fold subject list of traditional Purāṇic literature.'
    ],
    verse: {
      deva: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके ।\nशरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥',
      translit: 'sarvamaṅgalamāṅgalye śive sarvārthasādhike |\nśaraṇye tryambake gauri nārāyaṇi namo\'stu te ||',
      trans: 'O Giver of all auspiciousness, O auspicious power who fulfills every purpose, the protector, the three-eyed Goddess, salutations to you, O Nārāyaṇi.',
      cite: 'Devī Māhātmya · 11.3 (Mārkaṇḍeya Purāṇa)'
    }
  },
  shaiva: {
    id: 'shaiva',
    title: 'Śaiva Purāṇas',
    deva: 'शैव पुराणानि',
    deity: 'Śiva',
    guna: 'Tamas (Transformation, Dissolution, and Renewal)',
    textsList: [
      { name: 'Śiva Purāṇa', verses: '24,000', desc: 'Focuses entirely on the mythology, philosophy, rituals, and legends associated with Śiva and Pārvatī.' },
      { name: 'Liṅga Purāṇa', verses: '11,000', desc: 'Explains the symbolism of the Liṅga (divine pillar of light), methods of worship, and Śaiva yoga.' },
      { name: 'Skanda Purāṇa', verses: '81,000', desc: 'The longest Purāṇa, containing vast lists of sacred pilgrimages, local myths, and the legends of Kārttikeya.' },
      { name: 'Agni Purāṇa', verses: '15,000', desc: 'An encyclopedic Purāṇa covering grammar, law, medicine, politics, temple architecture, and weaponry.' },
      { name: 'Matsya Purāṇa', verses: '14,000', desc: 'Delivered by the Matsya (fish) avatar, preserving ancient details on building science, dynasties, and the flood legend.' },
      { name: 'Kūrma Purāṇa', verses: '17,000', desc: 'Features the Kūrma (tortoise) avatar, containing the Īśvara Gītā which outlines devotion and yoga.' }
    ],
    concepts: [
      { name: 'Laya & Saṃhāra (Dissolution)', deva: 'लय · संहार', desc: 'The process of cosmic dissolution led by Śiva, viewed not as evil, but as a necessary phase of renewal and return to source.' },
      { name: 'Śiva-Śakti (Dual Unity)', deva: 'शिव-शक्ति', desc: 'The non-dual reality where Śiva (pure consciousness) and Śakti (dynamic power) are eternally unified.' },
      { name: 'Tīrthamāhātmya (Pilgrimage Glory)', deva: 'तीर्थमाहात्म्य', desc: 'The spiritual benefits of visiting sacred geographic locations, rivers, and mountains across India.' }
    ],
    explanation: [
      'The Śaiva Purāṇas are classified under the quality of Tamas (dissolution and transformation). They place Śiva as the supreme reality—the ultimate absolute from whom the universe rises, in whom it rests, and into whom it dissolves.',
      'Unlike the destructive focus often associated with Tamas, these Purāṇas treat dissolution as a grand act of mercy and liberation, clearing away outdated structures to prepare for rebirth. The Agni and Matsya Purāṇas in this category serve as vital historical encyclopedias, preserving the technical rules of Vāstu-śāstra, medicine, and Sanskrit grammar.'
    ],
    verse: {
      deva: 'नमः शिवाय शान्ताय कारणत्रयहेतवे ।\nनिवेदयामि चात्मानं त्वं गतिः परमेश्वर ॥',
      translit: 'namaḥ śivāya śāntāya kāraṇatrayahetave |\nnivedayāmi cātmānaṃ tvaṃ gatiḥ parameśvara ||',
      trans: 'Salutations to Śiva, the peaceful Lord, the ultimate cause of the three-fold universe (creation, preservation, and dissolution). I surrender my soul to you; you are my supreme refuge.',
      cite: 'Śiva Purāṇa · Rudrasaṃhitā 2.1'
    }
  }
};
