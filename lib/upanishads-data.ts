export type UpanishadConcept = {
  name: string;
  deva: string;
  desc: string;
};

export type UpanishadCoreIdea = {
  name: string;
  desc: string;
};

export type UpanishadVerse = {
  deva: string;
  translit: string;
  trans: string;
  cite: string;
};

export interface UpanishadDetails {
  id: string;
  title: string;
  deva: string;
  vedaAssociation: string;
  versesCount: string;
  focus: string;
  coreIdeas: UpanishadCoreIdea[];
  concepts: UpanishadConcept[];
  explanation: string[];
  verse: UpanishadVerse;
}

export const UPANISHADS_DETAILS: Record<string, UpanishadDetails> = {
  isha: {
    id: 'isha',
    title: 'Īśa Upaniṣad',
    deva: 'ईशोपनिषद्',
    vedaAssociation: 'Śukla-Yajurveda (Vājasaneyi Saṃhitā · Chapter 40)',
    versesCount: '18 Verses',
    focus: 'Reconciliation of action (Karma) and contemplation (Jñāna), divine immanence, and detachment',
    coreIdeas: [
      { name: 'Divine Immanence (Īśāvāsya)', desc: 'Seeing all transient things in the universe as enveloped by the supreme ruler, thereby realizing the sacredness of the physical world.' },
      { name: 'Enjoyment through Renunciation', desc: 'Finding spiritual joy and satisfaction by renouncing possessiveness and the desire to covet another person\'s wealth.' },
      { name: 'Vidyā and Avidyā Integration', desc: 'Reconciling empirical knowledge of the material world (Avidyā) with spiritual knowledge of the self (Vidyā) as both are required to cross death and enjoy immortality.' }
    ],
    concepts: [
      { name: 'Īśāvāsya', deva: 'ईशावास्य', desc: 'The realization that the divine dwelling-place is everywhere, inside every particle of this changing world.' },
      { name: 'Karma-niṣṭhā', deva: 'कर्मनिष्ठा', desc: 'The commitment to perform one\'s duties and live for a hundred years without being bound by the fruits of action.' },
      { name: 'Sambhūti & Asambhūti', deva: 'सम्भूति-असम्भूति', desc: 'The manifest (creation) and the unmanifest (uncreated source), both of which must be understood in unison to achieve final liberation.' }
    ],
    explanation: [
      'The Īśa Upaniṣad, though short with only eighteen verses, forms the foundational opening of the traditional Mukhya Upanishadic canon. It is unique in being directly embedded as the final chapter of the Śukla Yajurveda Saṃhitā itself, rather than appearing in the later Aranyaka or Brahmana prose layers.',
      'Its primary philosophical contribution is the resolution of the conflict between the householder\'s path of ritual action (Karma) and the ascetic\'s path of contemplative knowledge (Jñāna). It warns that pursuing either in isolation leads to darkness, advocating instead for a synthesis where one acts in the world with absolute detachment, viewing every action as a dedication to the immanent Divine.'
    ],
    verse: {
      deva: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥',
      translit: 'īśā vāsyamidaṃ sarvaṃ yatkiñca jagatyāṃ jagat |\nten tyakten bhuñjīthā mā gṛdhaḥ kasyasviddhanam ||',
      trans: 'All this — whatever there is in this changing world — is enveloped by the Divine. Therefore, find your enjoyment in renunciation; do not covet the wealth of anyone.',
      cite: 'Īśa Upaniṣad · 1'
    }
  },
  kena: {
    id: 'kena',
    title: 'Kena Upaniṣad',
    deva: 'केनोपनिषद्',
    vedaAssociation: 'Sāmaveda (Talavakāra Jaiminīya Brāhmaṇa)',
    versesCount: '4 Chapters (34 Verses)',
    focus: 'The search for the ultimate director behind the mind and senses, and the legend of the gods\' pride',
    coreIdeas: [
      { name: 'The Primary Director (Keneṣitam)', desc: 'Inquiring into the unseen agent that directs the mind, speech, sight, hearing, and the vital breath (Prāṇa) to perform their functions.' },
      { name: 'Brahman as the Unknowable Knower', desc: 'Declaring that Brahman cannot be reached by speech, eye, or mind, and is distinct from the known and above the unknown.' },
      { name: 'The Pride of the Devas', desc: 'A narrative showing that the gods (Agni, Vāyu, Indra) cannot execute their powers (burning, blowing) without the underlying power of Brahman.' }
    ],
    concepts: [
      { name: 'Pratibodhaviditam', deva: 'प्रतिबोधविदितम्', desc: 'Realizing Brahman as the witness in and through every single act of cognition, which leads to immortality.' },
      { name: 'Yakṣa Legend', deva: 'यक्षोपाख्यान', desc: 'The allegory where Brahman appears as a mysterious giant spirit (Yakṣa) to humble the ego of the Vedic deities.' },
      { name: 'Umā Haimavatī', deva: 'उमा हैमवती', desc: 'The daughter of the Himalayas (representing intuitive wisdom) who reveals the identity of the Yakṣa as Brahman to Indra.' }
    ],
    explanation: [
      'The Kena Upaniṣad takes its name from its opening word Kena ("by whom?"). It belongs to the Sāmaveda tradition and is written partly in verse and partly in prose. The Upanishad begins as a psychological inquiry into the source of sensory and cognitive abilities, establishing that what shines through the eyes and thinks through the mind is a transcendent consciousness that cannot itself be objectified.',
      'The second half of the Upanishad presents the famous allegory of the Yakṣa. When the gods celebrate a victory over the demons, assuming it was won by their own strength, Brahman appears as a giant, mysterious presence. Agni cannot burn a blade of grass placed before him by the spirit, nor can Vāyu blow it away. Indra, approaching with humility, meets Goddess Umā, who teaches him that their power is merely a fraction of the supreme Brahman.'
    ],
    verse: {
      deva: 'श्रोत्रस्य श्रोत्रं मनसो मनो यद्वाचो ह वाचं स उ प्राणस्य प्राणः ।\nचक्षुषश्चक्षुरतिमुच्य धीराः प्रेत्यास्माल्लोकादमृता भवन्ति ॥',
      translit: 'śrotrasya śrotraṃ manaso mano yadvāco ha vācaṃ sa u prāṇasya prāṇaḥ |\ncakṣuṣascakṣuratimucya dhīrāḥ pretyāsmāllokādamṛtā bhavanti ||',
      trans: 'It is the Ear of the ear, the Mind of the mind, the Speech of speech, the Life of life, and the Eye of the eye. Having freed themselves from these organs, the wise transcend this world and become immortal.',
      cite: 'Kena Upaniṣad · 1.2'
    }
  },
  katha: {
    id: 'katha',
    title: 'Kaṭha Upaniṣad',
    deva: 'कठोपनिषद्',
    vedaAssociation: 'Kṛṣṇa-Yajurveda (Kaṭha Śākhā)',
    versesCount: '2 Chapters / 6 Vallīs (119 Verses)',
    focus: 'The dialogue between Naciketas and Yama (Death) on the nature of the self, and the chariot metaphor of life',
    coreIdeas: [
      { name: 'The Choice of Naciketas', desc: 'Rejecting worldly pleasures, wealth, and heavenly nymphs offered by Death, and insisting on receiving only the knowledge of what survives death.' },
      { name: 'Śreyas versus Preyas', desc: 'Distinguishing between the spiritually good (Śreyas) and the emotionally or sensory-pleasing (Preyas). The wise choose Śreyas, while the foolish run after Preyas.' },
      { name: 'The Chariot Metaphor', desc: 'Explaining the relationship between the Self, intellect, mind, senses, and body as parts of a chariot journey.' }
    ],
    concepts: [
      { name: 'Kathopadeśa', deva: 'कठोपदेश', desc: 'The profound teachings on immortality, soul-reincarnation, and liberation delivered by Yama, the Lord of Death.' },
      { name: 'Ratha-rūpaka', deva: 'रथ-रूपक', desc: 'The chariot analogy: Self is the passenger, body is the vehicle, Buddhi is the driver, mind is the reins, senses are the horses, and desires are the path.' },
      { name: 'Yoga-lakṣaṇa', deva: 'योगलक्षण', desc: 'Defining Yoga as the steady control of the senses, mind, and intellect, which stops all mental distractions.' }
    ],
    explanation: [
      'The Kaṭha Upaniṣad is one of the most widely read and translated Upanishads, celebrated for its dramatic narrative and vivid metaphors. The story begins when a young boy, Naciketas, is sent to the realm of Death (Yama) due to his father\'s rash vow. Waiting three days without food, Yama grants him three boons. For his third boon, Naciketas demands to know the truth about what happens to a person after death.',
      'Yama initially tests Naciketas by offering him long life, vast kingdoms, wealth, and heavenly maidens. Naciketas rejects them all, stating that these are transient and wear out the vigor of the senses. Pleased by his renunciation, Yama teaches him the secret of the eternal Ātman, the distinction between the pleasant and the good, and the practice of yoga as the path to self-realization.'
    ],
    verse: {
      deva: 'आत्मानं रथिनं विद्धि शरीरं रथमेव तु ।\nबुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥',
      translit: 'ātmānaṃ rathinaṃ viddhi śarīraṃ rathameva tu |\nbudhiṃ tu sārathiṃ viddhi manaḥ pragrahameva ca ||',
      trans: 'Know the Self (Ātman) as the rider, and the body as the chariot. Know the intellect (Buddhi) as the charioteer, and the mind as the reins.',
      cite: 'Kaṭha Upaniṣad · 1.3.3'
    }
  },
  prashna: {
    id: 'prashna',
    title: 'Praśna Upaniṣad',
    deva: 'प्रश्नोपनिषद्',
    vedaAssociation: 'Atharvaveda (Pippalāda Śākhā)',
    versesCount: '6 Questions (67 Verses)',
    focus: 'Six queries posed by six seekers to Sage Pippalāda covering cosmogony, the nature of Prāṇa, and the human structure',
    coreIdeas: [
      { name: 'Origin of Life (Rayi & Prāṇa)', desc: 'The universe originates from a union of the passive, material principle (Rayi) and the active, energetic vital force (Prāṇa).' },
      { name: 'The Vital Force (Prāṇa)', desc: 'Understanding Prāṇa as the primary life support, its origin in the Self, its division into five winds, and how it sustains the body.' },
      { name: 'The Ṣoḍaśakala Puruṣa', desc: 'Analyzing the human being as a composite of sixteen distinct structural elements that ultimately dissolve back into consciousness.' }
    ],
    concepts: [
      { name: 'Pippalāda-śikṣā', deva: 'पिप्पलाद-शिक्षा', desc: 'The pedagogical approach of Pippalāda requiring students to live in austerity (Tapas) and faith for a year before asking their questions.' },
      { name: 'Five Prāṇas', deva: 'पञ्चप्राण', desc: 'The five movements of life-force: Prāṇa (respiration), Apāna (excretion), Samāna (digestion), Vyāna (circulation), and Udāna (ascent of consciousness).' },
      { name: 'Ṣoḍaśakala', deva: 'षोडशकल', desc: 'The sixteen parts of the manifest self, including faith, space, air, light, water, earth, senses, mind, food, vigor, penance, mantras, actions, worlds, and name.' }
    ],
    explanation: [
      'The Praśna Upaniṣad, belonging to the Atharvaveda, is structured entirely as a series of six questions (Praśna) asked by six earnest seekers to the great sage Pippalāda. The questions follow a logical order, moving from the macrocosmic level (how did creation start?) to the microcosmic level (what are the organs in the body? what is the nature of dream and sleep? what is the value of meditating on Om?).',
      'The central theme of the text is the glorification of Prāṇa, the vital life-force. Pippalāda explains that Prāṇa is born of the Self and projects itself into the body like a king assigning officers to various districts. The final question discusses the sixteen parts that make up a person, comparing them to rivers that flow towards the ocean and, upon reaching it, lose their names and forms to become one with the sea.'
    ],
    verse: {
      deva: 'प्राणस्येदं वशे सर्वं त्रिदिवे यत्प्रतिष्ठितम् ।\nमातेव पुत्रान्रक्षस्व श्रीश्च प्रज्ञां च विधेहि न इति ॥',
      translit: 'prāṇasyedaṃ vaśe sarvaṃ tridive yatpratiṣṭhitam |\nmāteva putrānrakṣasva śrīśca prajñāṃ ca vidhehi na iti ||',
      trans: 'All that exists in the three worlds is under the control of Prāṇa. Protect us as a mother protects her children, and grant us prosperity and wisdom.',
      cite: 'Praśna Upaniṣad · 2.13'
    }
  },
  mundaka: {
    id: 'mundaka',
    title: 'Muṇḍaka Upaniṣad',
    deva: 'मुण्डकोपनिषद्',
    vedaAssociation: 'Atharvaveda (Śaunaka Śākhā)',
    versesCount: '3 Chapters / 6 Sections (64 Verses)',
    focus: 'The division between higher and lower knowledge, the spider metaphor of creation, and the two-bird analogy',
    coreIdeas: [
      { name: 'Parā and Aparā Vidyā', desc: 'Distinguishing between lower knowledge (Aparā), which includes the Vedas, grammar, and astronomy, and higher knowledge (Parā), through which the eternal is realized.' },
      { name: 'The Spider and the Web', desc: 'Explaining how the universe emanates from Brahman just as a spider spins its web, plants grow from the earth, and hair grows on a living person.' },
      { name: 'The Witness Self', desc: 'Using the two-bird metaphor to explain the individual ego experiencing life and the silent inner witness that watches without acting.' }
    ],
    concepts: [
      { name: 'Akṣara-Brahman', deva: 'अक्षरब्रह्म', desc: 'The imperishable, formless, colorless reality that has no eyes, ears, hands, or feet, yet is the source of all existence.' },
      { name: 'Satyam Eva Jayate', deva: 'सत्यमेव जयते', desc: 'The spiritual declaration that truth alone triumphs, opening the path to the divine treasure of liberation.' },
      { name: 'Dhanuḥ-Śara-Lakṣya', deva: 'धनुः-शर-लक्ष्य', desc: 'The target-shooting metaphor: Om is the bow, the Self is the arrow, and Brahman is the target, to be hit with unwavering focus.' }
    ],
    explanation: [
      'The Muṇḍaka Upaniṣad takes its name from Muṇḍa ("shaved head"), suggesting a text meant for those who have shaved off worldly attachments, or referring to the clarity of its teachings that "shave off" ignorance. It belongs to the Atharvaveda and contains three chapters, each divided into two sections.',
      'The text is famous for drawing clear boundaries between ritual performance (the lower path, which only leads to temporary heavens) and self-inquiry (the higher path of Parā Vidyā). It introduces the beautiful metaphor of two birds sharing the same tree: one bird represents the active Jīva eating the bitter-sweet fruits of actions and suffering in ignorance, while the other is the silent Ātman, whose mere sight frees the first bird from grief.'
    ],
    verse: {
      deva: 'द्वा सुपर्णा सयुजा सखाया समानं वृक्षं परिषस्वजाते ।\nतयोरन्यः पिप्पलं स्वाद्वत्त्यनश्नन्नन्यो अभिचाकशीति ॥',
      translit: 'dvā suparṇā sayujā sakhāyā samānaṃ vṛkṣaṃ pariṣasvajāte |\ntayoranyaḥ pippalaṃ svādvattyanaśnannanyo abhicākaśīti ||',
      trans: 'Two birds, inseparable companions, clasp the self-same tree. One of them eats the sweet fruit, while the other looks on without eating.',
      cite: 'Muṇḍaka Upaniṣad · 3.1.1'
    }
  },
  mandukya: {
    id: 'mandukya',
    title: 'Māṇḍūkya Upaniṣad',
    deva: 'माण्डूक्योपनिषद्',
    vedaAssociation: 'Atharvaveda',
    versesCount: '12 Verses',
    focus: 'Analysis of the syllable Aum, the four states of consciousness, and the definition of Turīya',
    coreIdeas: [
      { name: 'All is Aum and Brahman', desc: 'Proposing that the past, present, future, and whatever exists beyond time is nothing but the syllable Om, and all this is Brahman.' },
      { name: 'The Three States of Consciousness', desc: 'Mapping the waking state (external), dreaming state (internal), and deep sleep state (undifferentiated mass of consciousness) as quarters of the Self.' },
      { name: 'Turīya (The Transcendent)', desc: 'Defining the fourth state, which is not a state but the non-dual consciousness that underlies and transcends the other three.' }
    ],
    concepts: [
      { name: 'Catuṣpāt', deva: 'चतुष्पात्', desc: 'The four-fold structure of existence: Waking (Vaiśvānara), Dream (Taijasa), Deep Sleep (Prājña), and the Fourth (Turīya).' },
      { name: 'Mātrās of Aum', deva: 'मात्रा', desc: 'Matching the letters of Om to states: "A" for waking, "U" for dream, "M" for deep sleep, and the silent soundless Om (Amātra) for Turīya.' },
      { name: 'Ajātivāda', deva: 'अजातिवाद', desc: 'The philosophy of non-creation, later expounded by Gauḍapāda in his Kārikā, establishing that the world is an appearance and has never been created.' }
    ],
    explanation: [
      'The Māṇḍūkya Upaniṣad is the shortest of the principal Upanishads, containing only twelve prose verses. Despite its brevity, it is considered one of the most philosophically profound, so much so that the Muktikā Upaniṣad declares that for the liberation of a seeker, the Māṇḍūkya alone is sufficient.',
      'The text provides a systematic map of human consciousness. It explains that the waking state, the dream state, and the deep sleep state are all partial expressions of our true nature. Our real self is the Fourth (Turīya), which is non-dual, peaceful, and free from the subject-object split. The text integrates this psychology with the sacred sound Aum, showing that the silence following the chant represents the unnameable, absolute Self.'
    ],
    verse: {
      deva: 'नान्तःप्रज्ञं न बहिःप्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनं न प्रज्ञं नाप्रज्ञम् ।\nअदृष्टमव्यवहार्यमग्राह्यमलक्षणमचिन्त्यमव्यपदेश्यमेकात्मप्रत्ययसारं प्रपञ्चोपशमं शान्तं शिवमद्वैतं चतुर्थं चतुर्थं मन्यन्ते स आत्मा स विज्ञेयः ॥',
      translit: 'nāntaḥprajñaṃ na bahiḥprajñaṃ nobhayataḥprajñaṃ na prajñānaghanaṃ na prajñaṃ nāprajñam |\nadṛṣṭamavyavahāryamagrāhyamalakṣaṇamacintyamavyapadeśyamekātmapratyayasāraṃ prapañcopaśamaṃ śāntaṃ śivamadvaitaṃ caturthaṃ manyante sa ātmā sa vijñeyaḥ ||',
      trans: 'Not inwardly cognitive, nor outwardly cognitive, nor cognitive both ways; not a mass of cognition, nor cognitive, nor non-cognitive. It is unseen, unusable, ungraspable, indefinable, unthinkable, unnameable, the essence of the single self-cognition, quiet, auspicious, non-dual. This is the Fourth (Turīya) — that is the Self, that is to be known.',
      cite: 'Māṇḍūkya Upaniṣad · 7'
    }
  },
  taittiriya: {
    id: 'taittiriya',
    title: 'Taittirīya Upaniṣad',
    deva: 'तैत्तिरीयोपनिषद्',
    vedaAssociation: 'Kṛṣṇa-Yajurveda (Taittirīya Āraṇyaka · Chapters 7, 8, 9)',
    versesCount: '3 Vallīs (Śikṣā, Ānanda, Bhṛgu - ~40 Sections)',
    focus: 'The five sheaths (Pañcakośa) enveloping the Self, the nature of cosmic bliss, and ancient student instructions',
    coreIdeas: [
      { name: 'The Five Sheaths (Pañcakośa)', desc: 'Mapping human identity through five layers: the physical (Annamaya), vital (Prāṇamaya), mental (Manomaya), intellectual (Vijñānamaya), and blissful (Ānandamaya).' },
      { name: 'The Convocation Address', desc: 'Ethical rules for a departing student: speak the truth, follow dharma, serve parents and teachers, and perform selfless actions.' },
      { name: 'The Nature of Bliss (Ānanda)', desc: 'Analyzing joy by constructing a scale of bliss, multiplying a unit of perfect human happiness up to the absolute bliss of Brahman.' }
    ],
    concepts: [
      { name: 'Pañcakośa-viveka', deva: 'पञ्चकोश-विवेक', desc: 'The practice of discriminative inquiry, peeling away the sheaths of matter, life, mind, and intellect to realize the inner Bliss-Self.' },
      { name: 'Satyaṃ Vada', deva: 'सत्यं वद धर्मं चर', desc: 'The moral imperatives "Speak the truth, act righteously," which form the ethical foundation of Vedic education.' },
      { name: 'Annamaya-tattva', deva: 'अन्नमय', desc: 'The realization that food is sacred, representing the material framework of the cosmos and the physical body.' }
    ],
    explanation: [
      'The Taittirīya Upaniṣad belongs to the Taittirīya school of the Kṛṣṇa Yajurveda and is divided into three sections called Vallīs. The first, Śikṣāvāllī, deals with phonetics, meditations, and the famous ethical instructions given to students finishing their education. The second and third, Brahmānandavāllī and Bhṛguvāllī, contain the core philosophical teachings regarding the nature of Brahman.',
      'This Upanishad is the source of the famous Pañcakośa model, which describes the human being as nested layers of energy and matter. By showing that the physical body, the breath, the mind, and the intellect are merely sheaths (Kośa) enveloping the inner Self, it guides the seeker to look deeper. It also defines Brahman as Satyam (Truth), Jñānam (Knowledge), and Anantam (Infinite), and declares that the universe was born out of pure, cosmic Bliss (Ānanda).'
    ],
    verse: {
      deva: 'सत्यं वद । धर्मं चर । स्वाध्यायान्मा प्रमदः ।\nआचार्याय प्रियं धनमाहृत्य प्रजातन्तुं मा व्यवच्छेत्सीः ॥',
      translit: 'satyaṃ vada | dharmaṃ cara | svādhyāyānmā pramadaḥ |\nācāryāya priyaṃ dhanamāhṛtya prajātantuṃ mā vyavacchetsīḥ ||',
      trans: 'Speak the truth. Practice dharma. Do not neglect your daily study. Having brought to your teacher the wealth he desires, do not cut off the thread of lineage.',
      cite: 'Taittirīya Upaniṣad · 1.11.1'
    }
  },
  aitareya: {
    id: 'aitareya',
    title: 'Aitareya Upaniṣad',
    deva: 'ऐतरेयोपनिषद्',
    vedaAssociation: 'Ṛgveda (Aitareya Āraṇyaka · Book 2 · Chapters 4-6)',
    versesCount: '3 Chapters (33 Verses)',
    focus: 'The creation of the cosmos from the Self, the three births of the soul, and the declaration "Consciousness is Brahman"',
    coreIdeas: [
      { name: 'Creation of the Worlds (Loka-sṛṣṭi)', desc: 'The Self existed alone in the beginning. It willed to create, producing the four cosmic waters/regions and the cosmic person (Puruṣa).' },
      { name: 'The Three Births of the Soul', desc: 'Explaining the transmigration of the soul: first as semen in the father, second as the child born from the mother, and third as the spiritual rebirth after death.' },
      { name: 'Consciousness as Brahman', desc: 'Establishing that all functions of the mind, senses, and elements are guided by and established in Prajñāna (Consciousness).' }
    ],
    concepts: [
      { name: 'Prajñānam Brahma', deva: 'प्रज्ञानं ब्रह्म', desc: 'One of the four great Mahāvākyas (Vedic axioms) declaring that ultimate reality is pure, non-dual Consciousness.' },
      { name: 'Deva-praveśa', deva: 'देवप्रवेश', desc: 'The cosmic process where the deities of speech, sight, hearing, and breath enter the human senses to enable experience.' },
      { name: 'Vāmadeva-mukti', deva: 'वामदेव-मुक्ति', desc: 'The realization of the sage Vāmadeva, who, while still in the womb, realized his identity with all gods and achieved liberation.' }
    ],
    explanation: [
      'The Aitareya Upaniṣad belongs to the Ṛgveda tradition and is attributed to the sage Mahidāsa Aitareya. It is a short text in three chapters, focusing primarily on cosmogony—the creation of the universe—and the ultimate identity of the individual soul with the cosmic consciousness.',
      'The text describes how the Self created the worlds and then created a human form to house the cosmic senses. It details how the deities of nature became the human senses (e.g., the Sun became sight in the eyes, Fire became speech in the mouth). In its famous conclusion, the Upanishad declares that everything that exists—gods, elements, animals, and humans—is guided by and established in Prajñāna (Consciousness), concluding with the Mahāvākya "Prajñānam Brahma."'
    ],
    verse: {
      deva: 'सर्वं तत्प्रज्ञानेत्रं प्रज्ञाने प्रतिष्ठितं प्रज्ञानेत्रो लोकः प्रज्ञा प्रतिष्ठा प्रज्ञानं ब्रह्म ॥',
      translit: 'sarvaṃ tatprajñānetraṃ prajñāne pratiṣṭhitaṃ prajñānetro lokaḥ prajñā pratiṣṭhā prajñānaṃ brahma ||',
      trans: 'All this is guided by consciousness, established in consciousness. The world is guided by consciousness, consciousness is the basis. Consciousness is Brahman.',
      cite: 'Aitareya Upaniṣad · 3.1.3'
    }
  },
  chandogya: {
    id: 'chandogya',
    title: 'Chāndogya Upaniṣad',
    deva: 'छान्दोग्योपनिषद्',
    vedaAssociation: 'Sāmaveda (Chāndogya Brāhmaṇa)',
    versesCount: '8 Chapters (154 Sections)',
    focus: 'The identity of the Self and the Absolute ("Tat Tvam Asi"), the space within the heart, and the story of Satyakāma',
    coreIdeas: [
      { name: 'That Thou Art (Tat Tvam Asi)', desc: 'The repeated instruction of Uddālaka to his son Śvetaketu using analogies like salt in water, clay pots, and gold ornaments to show the unity of the soul and Brahman.' },
      { name: 'The Story of Satyakāma', desc: 'A young boy is accepted as a disciple by Gautama because he spoke the truth about his unknown father, showing that truthfulness defines a seeker.' },
      { name: 'The Space in the Heart (Dahara)', desc: 'Teaching that the small space inside the heart contains the entire heavens, earth, sun, moon, stars, and everything that exists.' }
    ],
    concepts: [
      { name: 'Tat Tvam Asi', deva: 'तत्त्वमसि', desc: 'The Mahāvākya of the Sāmaveda declaring: "That absolute reality is what you are, O Śvetaketu."' },
      { name: 'Udgītha-vidyā', deva: 'उद्गीथ-विद्या', desc: 'The sacred meditation on the chant of the Sāmaveda, identifying the syllable Om with the vital breath and cosmic forces.' },
      { name: 'Bhūmā-tattva', deva: 'भूमा', desc: 'The philosophy of the Infinite, taught to Nārada, stating that happiness lies only in the infinite, not in the finite.' }
    ],
    explanation: [
      'The Chāndogya Upaniṣad is one of the oldest and longest Upanishads, belonging to the Sāmaveda. It contains eight chapters and is rich in narrative, rituals, and profound philosophical dialogues. The text is highly valued in the Vedānta school, as it provides the basis for many key discussions on cosmology and the nature of the self.',
      'The most famous section of the text is the dialogue in the sixth chapter between Uddālaka Āruṇi and his son Śvetaketu. Uddālaka uses natural metaphors to explain how the individual soul arises from and returns to the Sat (Existence). He shows that just as rivers flow into the ocean and lose their separate identity, or as clay remains clay despite taking the form of various pots, the inner self of all beings is the one absolute Brahman, concluding nine times with the formula: "Tat Tvam Asi."'
    ],
    verse: {
      deva: 'स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो इति ।',
      translit: 'sa ya eṣo\'ṇimaitadātmyamidaṃ sarvaṃ tatsatyaṃ sa ātmā tattvamasi śvetaketo iti |',
      trans: 'That which is the subtle essence — in it all that exists has its self. That is the Truth. That is the Self. That thou art, O Śvetaketu.',
      cite: 'Chāndogya Upaniṣad · 6.8.7'
    }
  },
  brihad: {
    id: 'brihad',
    title: 'Bṛhadāraṇyaka Upaniṣad',
    deva: 'बृहदारण्यकोपनिषद्',
    vedaAssociation: 'Śukla-Yajurveda (Śatapatha Brāhmaṇa · Kāṇḍa 14)',
    versesCount: '6 Chapters (47 Sections)',
    focus: 'The debates of Yājñavalkya, the definition of the self as "Neti, Neti", and the dialogue on love and immortality with Maitreyī',
    coreIdeas: [
      { name: 'The Dialogue with Maitreyī', desc: 'Yājñavalkya teaches his wife Maitreyī that nothing is loved for its own sake, but for the sake of the Self (Ātman). Realizing this Self is the key to immortality.' },
      { name: 'The Path of Negation (Neti Neti)', desc: 'Defining the ultimate reality by systematically denying all objective, physical, and mental concepts: "not this, not this."' },
      { name: 'The Debate at Janaka\'s Court', desc: 'Yājñavalkya answering challenging questions from various sages, including the female philosopher Gārgī, about the foundation of the universe.' }
    ],
    concepts: [
      { name: 'Neti Neti', deva: 'नेति नेति', desc: 'The analytical process of negating all limiting additions (Upādhis) to realize the pure, unqualified subject.' },
      { name: 'Antaryāmin', deva: 'अन्तर्यामिन्', desc: 'The inner ruler or thread (Sūtra) that binds all elements, worlds, and beings together from within.' },
      { name: 'Ahaṃ Brahmāsmi', deva: 'अहं ब्रह्मास्मि', desc: 'The Yajurvedic Mahāvākya declaring: "I am Brahman," representing the direct realization of non-duality.' }
    ],
    explanation: [
      'The Bṛhadāraṇyaka Upaniṣad, literally meaning the "Great Forest Upanishad," is the largest, oldest, and arguably the most complex text in the Upanishadic canon. It forms the final part of the fourteenth book of the Śatapatha Brāhmaṇa in the Śukla Yajurveda. The text is divided into three sections: Madhu Kāṇḍa (cosmology and teachings), Yājñavalkya Kāṇḍa (debates and philosophical dialogues), and Khila Kāṇḍa (prayers and miscellaneous meditations).',
      'The central figure of the text is the great sage Yājñavalkya. Through his interactions with King Janaka, his wife Maitreyī, and his rival philosophers, the text expounds the absolute nature of the Ātman. It establishes that the Self is the ultimate light of human beings when the sun, the moon, and fire have set. It also contains the famous invocation of peace: "Asato mā sadgamaya," praying to be led from the temporary, illusory world of names and forms to the eternal light of consciousness.'
    ],
    verse: {
      deva: 'असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्माऽमृतं गमय ॥',
      translit: 'asato mā sadgamaya | tamaso mā jyotirgamaya | mṛtyormā\'mṛtaṃ gamaya ||',
      trans: 'Lead me from the unreal to the real. Lead me from darkness to light. Lead me from death to immortality.',
      cite: 'Bṛhadāraṇyaka Upaniṣad · 1.3.28'
    }
  }
};
