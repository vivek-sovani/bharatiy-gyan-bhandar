export type SubDivision = {
  name: string;
  desc: string;
};

export type KeyConcept = {
  name: string;
  deva: string;
  desc: string;
};

export type VedangaVerse = {
  deva: string;
  translit: string;
  trans: string;
  cite: string;
};

export interface VedangaDetails {
  id: string;
  title: string;
  deva: string;
  limb: string;
  metaphor: string;
  authorityText: string;
  keyAuthor: string;
  scope: string;
  explanation: string[];
  subdivisions: SubDivision[];
  keyConcepts: KeyConcept[];
  verse: VedangaVerse;
}

export const VEDANGAS_DETAILS: Record<string, VedangaDetails> = {
  shiksha: {
    id: 'shiksha',
    title: 'Śikṣā',
    deva: 'शिक्षा',
    limb: 'Mouth (मुखम्)',
    metaphor: 'The organ of pronunciation and articulation',
    authorityText: 'Pāṇinīya Śikṣā, Yājñavalkya Śikṣā',
    keyAuthor: 'Pāṇini, Yājñavalkya',
    scope: 'Phonetics, accentuation, articulation, and correct recitation rules.',
    explanation: [
      'Śikṣā is the science of vocal pronunciation and phonetics. It is described as the "mouth" of the Veda because the Vedic hymns are meant to be heard and recited, not silently read. Precision in accentuation is considered crucial; a single mispronounced vowel or shifted accent could alter the entire meaning of a mantra and ruin the efficacy of a ritual.',
      'Historically, Śikṣā texts created the most rigorous phonetic classifications of any ancient civilization. They mapped the exact places of articulation in the vocal tract and the types of effort required to produce consonants and vowels. This rigid preservation is the sole reason why the Vedas have survived in their original acoustic form for over three millennia without any dialectal drift.'
    ],
    subdivisions: [
      { name: 'Varna (Letters)', desc: 'The study of individual sounds, categorized into vowels (svara) and consonants (vyañjana).' },
      { name: 'Svara (Accents)', desc: 'The three Vedic accents: Udātta (high-pitched), Anudātta (low-pitched), and Svarita (circumflex).' },
      { name: 'Mātrā (Quantity)', desc: 'The duration of a sound, measured in Kalās or moments: short (hrasva), long (dīrgha), or prolated (pluta).' },
      { name: 'Bala (Articulation)', desc: 'The force or effort of pronunciation, divided into internal and external articulatory efforts.' },
      { name: 'Sāma (Recitation)', desc: 'The melody, rhythm, and uniformity of continuous chanting.' },
      { name: 'Santāna (Sandhi)', desc: 'The phonetic rules governing the combination of words and syllables in continuous speech.' }
    ],
    keyConcepts: [
      { name: 'Sthāna (Articulation Points)', deva: 'स्थान', desc: 'The eight places where sounds are formed in the mouth and throat (Kanṭha, Tālu, Mūrdhā, Danta, Oṣṭha, Nāsikā, Urash, and Jihvāmūla).' },
      { name: 'Pratna (Effort)', deva: 'प्रयत्न', desc: 'The muscular effort required for articulation: internal (ābhyantara) like contact, and external (bāhya) like aspiration.' },
      { name: 'Uccāraṇa (Recitation Rules)', deva: 'उच्चारण', desc: 'Prescriptions for avoiding defects in chanting, such as reciting too fast, murmuring, or swallowing syllables.' }
    ],
    verse: {
      deva: 'व्याघ्री यथा हरेत्पुत्रान्दंष्ट्राभ्यां न च पीडयेत् ।\nभीता पतनभेदाभ्यां तद्वद्वर्णान्प्रयोजयेत् ॥',
      translit: 'vyāghrī yathā haret putrān daṃṣṭrābhyāṃ na ca pīḍayet |\nbhītā patana-bhedābhyāṃ tadvad varṇān prayojayet ||',
      trans: 'Just as a tigress carries her cubs in her mouth, holding them firmly with her teeth but never biting or hurting them, and ever fearful of dropping them, so should a chanter articulate every single syllable of the Veda — neither holding too tightly nor letting go too loosely.',
      cite: 'Pāṇinīya Śikṣā · 25'
    }
  },
  kalpa: {
    id: 'kalpa',
    title: 'Kalpa',
    deva: 'कल्प',
    limb: 'Arms (हस्तौ)',
    metaphor: 'The organ of action and execution',
    authorityText: 'Kalpasūtras (Śrauta, Gṛhya, Dharma, Śulba)',
    keyAuthor: 'Baudhāyana, Āpastamba, Āśvalāyana',
    scope: 'Ritual procedure, domestic ceremonies, ethical law codes, and altar geometry.',
    explanation: [
      'Kalpa is the science of ritual application and conducts. It represents the "arms" of the Veda because it translates abstract Vedic sound into physical, structured action. It is written in the form of Sūtras (dense, aphoristic guidelines) that cover every aspect of a person\'s ritual, family, and civic duties.',
      'The Kalpasūtras are categorized into four distinct layers. Among these, the Śulba-sūtras are of particular historical interest to science as they contain the oldest manuals for geometric construction of fire altars, embodying advanced mathematical principles (such as early formulations of the Pythagorean theorem) centuries before Greek geometry arose.'
    ],
    subdivisions: [
      { name: 'Śrauta-sūtra', desc: 'Prescribes instructions for the grand, public sacrifices (Yajñas) involving the three sacred fires and multiple priests.' },
      { name: 'Gṛhya-sūtra', desc: 'Details domestic rituals and life-cycle ceremonies (Saṃskāras) such as birth, marriage, initiation (Upanayana), and funerals.' },
      { name: 'Dharma-sūtra', desc: 'Exposes code of ethics, social conduct, law codes, and duties (Dharma) of individuals at various life stages.' },
      { name: 'Śulba-sūtra', desc: 'The mathematical manuals prescribing geometry for designing, aligning, and building fire altars.' }
    ],
    keyConcepts: [
      { name: 'Saṃskāra (Sacraments)', deva: 'संस्कार', desc: 'The purificatory rites (usually 16) that mark transition phases of a human life from conception to cremation.' },
      { name: 'Yajña (Sacrifice)', deva: 'यज्ञ', desc: 'Ritual offerings made into the fire to cosmic deities, serving as an expression of gratitude and maintaining cosmic order (Ṛta).' },
      { name: 'Vāstu (Sacred Space)', deva: 'वास्तु', desc: 'Principles of layout and alignment of the sacrificial arena and altars to cosmic directions.' }
    ],
    verse: {
      deva: 'दीर्घचतुरस्रस्याक्ष्णया रज्जुः पार्श्वमानी तिर्यङ्मानी च यत्पृथग्भूते कुरुतस्तदुभयं करोतीति ॥',
      translit: 'dīrghacaturasrasyākṣṇayā rajjuḥ pārśvamānī tiryaṅmānī ca yat pṛthagbhūte kurutastadubhayaṃ karotīti ||',
      trans: 'The diagonal rope of a rectangle produces both areas which the flank (long) side and the horizontal (short) side produce separately. (This is the earliest known formulation of what later became known as the Pythagorean theorem).',
      cite: 'Baudhāyana Śulba-sūtra · 1.48'
    }
  },
  vyakarana: {
    id: 'vyakarana',
    title: 'Vyākaraṇa',
    deva: 'व्याकरण',
    limb: 'Face/Mouth (मुखं व्याकरणं स्मृतम्)',
    metaphor: 'The organ of formal speech and semantic structure',
    authorityText: 'Aṣṭādhyāyī, Mahābhāṣya',
    keyAuthor: 'Pāṇini, Patañjali, Kātyāyana',
    scope: 'Grammatical analysis, morphophonemic derivation, and linguistic rules.',
    explanation: [
      'Vyākaraṇa is the grammar and linguistic analysis of Sanskrit. It is considered the "face" or "mouth" of the Veda because it clarifies the structural laws of speech. Pāṇini’s Aṣṭādhyāyī is the foundational text of this science, consisting of nearly 4,000 aphorisms (sūtras) that function like an algebraic algorithm or generative programming language to derive all classical and Vedic Sanskrit words from core roots and suffixes.',
      'Grammarians within this tradition are revered as sages. The trio of Pāṇini, Kātyāyana, and Patañjali (known as the Munitraya) established a level of formal logic in language analysis that preceded modern generative linguistics by twenty-five centuries.'
    ],
    subdivisions: [
      { name: 'Dhātupāṭha (Verb Roots)', desc: 'The list of approximately 2,000 verbal roots (dhātus) from which all nouns and verbs are derived.' },
      { name: 'Gaṇapāṭha (Nominal Groups)', desc: 'Groupings of nouns that share similar declensions or grammatical behaviors.' },
      { name: 'Śivasūtra (Phoneme Inventory)', desc: 'The fourteen verses that organize sounds in a way that allows Pāṇini\'s rules to refer to groups of sounds concisely.' },
      { name: 'Aṣṭādhyāyī (Core Rules)', desc: 'The eight chapters of generative rules describing phonetic shifts, word compounding, and case terminations.' }
    ],
    keyConcepts: [
      { name: 'Prakṛti & Pratyaya (Base & Suffix)', deva: 'प्रकृति-प्रत्यय', desc: 'The core linguistic methodology of splitting any word into its semantic root and its morphological suffix.' },
      { name: 'Sandhi (Phonetic Junction)', deva: 'सन्धि', desc: 'Rules governing how sounds merge or shift when they come in contact with each other at word boundaries.' },
      { name: 'Kāraka (Case Relations)', deva: 'कारक', desc: 'The semantic relation between the action (verb) and the participants (nouns) in a sentence, forming the basis of Sanskrit syntax.' }
    ],
    verse: {
      deva: 'नृत्तावसाने नटराजराजो ननाद ढक्कां नवपञ्चवारम् ।\nउद्धर्तुकामः सनकादिसिद्धान्नेतद्विमर्शे शिवसूत्रजालम् ॥',
      translit: 'nṛttāvasāne naṭarājarājo nanāda ḍhakkāṃ navapañcavāram |\nuddhartukāmaḥ sanakādisiddhān netadvimarśe śivasūtrajālam ||',
      trans: 'At the end of his cosmic dance, Śiva, the King of Dancers, sounded his drum fourteen times, desiring to uplift the sages Sanaka and others. Thus emerged the Shiva Sutras (fourteen sets of phonemes), serving as the foundational catalog of Sanskrit sounds for Panini.',
      cite: 'Nandikeśvara Kāśikā · 1'
    }
  },
  nirukta: {
    id: 'nirukta',
    title: 'Nirukta',
    deva: 'निरुक्त',
    limb: 'Ears (श्रोत्रम्)',
    metaphor: 'The organ of hearing and semantic comprehension',
    authorityText: 'Nirukta of Yāska',
    keyAuthor: 'Yāska',
    scope: 'Etymology, word derivation, semantics, and interpretation of obscure Vedic terms.',
    explanation: [
      'Nirukta is the science of etymology and semantics. It represents the "ears" of the Veda because it is concerned with understanding the meaning of what is heard. It was written by the sage Yāska as a systematic commentary on the Nighaṇṭu — a glossary of rare, archaic, and difficult Vedic words.',
      'Yāska\'s primary thesis was that all nouns are ultimately derived from verbal roots (dhātus). This semantic principle was a massive leap forward in lexicography, allowing interpreters to extract the deep inner meanings of Vedic hymns rather than relying on literal, superficial interpretations.'
    ],
    subdivisions: [
      { name: 'Naighanṭuka Kānḍa', desc: 'The collection of synonymous words grouped together to clarify semantic fields.' },
      { name: 'Naigama Kānḍa', desc: 'A collection of difficult, homonymous words that occur in specific Vedic contexts.' },
      { name: 'Daivata Kānḍa', desc: 'The classification of deities and cosmic powers, mapped across the three regions of earth, atmosphere, and heaven.' }
    ],
    keyConcepts: [
      { name: 'Padajāta (Parts of Speech)', deva: 'पदजात', desc: 'The division of language into four distinct parts: Nāma (nouns), Ākhyāta (verbs), Upasarga (prefixes), and Nipāta (particles).' },
      { name: 'Nirvacana (Derivation)', deva: 'निर्वाचन', desc: 'The etymological rules for tracing any noun back to its action root, even when phonetic shifts have obscured the connection.' },
      { name: 'Arthajñāna (Value of Meaning)', deva: 'अर्थज्ञान', desc: 'The philosophical principle that reciting mantras without knowing their meaning is useless, comparing such a reciter to a pillar carrying weight.' }
    ],
    verse: {
      deva: 'चत्वारि पदजातानि नामाख्याते चोपसर्गनिपाताश्च ॥',
      translit: 'catvāri padajātāni nāmākhyāte copasarganipātāśca ||',
      trans: 'There are four distinct classes of words: the nouns (nāma), the verbs (ākhyāta), the prepositions or prefixes (upasarga), and the particles or conjunctions (nipāta).',
      cite: 'Yāska · Nirukta · 1.1'
    }
  },
  chandas: {
    id: 'chandas',
    title: 'Chandas',
    deva: 'छन्दस्',
    limb: 'Feet (पादौ)',
    metaphor: 'The organ of support and movement',
    authorityText: 'Chandaḥ-sūtra of Piṅgala',
    keyAuthor: 'Piṅgala',
    scope: 'Poetic metres, syllable weight, rhythm, and combinatorics.',
    explanation: [
      'Chandas is the study of poetic metre. It is called the "feet" of the Veda because it forms the rhythmic support on which the hymns stand and move. Vedic literature is entirely poetic, and its chants are categorized strictly by the number of syllables per line.',
      'Piṅgala\'s Chandaḥ-sūtra is the earliest known systematic treatment of this science. In his attempt to calculate all possible combinations of light and heavy syllables, Piṅgala laid down algebraic formulas that contain the earliest historical descriptions of binary numbers, combinatorial mathematics, and the "Meru-Prastāra" (which is now known in the West as Pascal\'s triangle).'
    ],
    subdivisions: [
      { name: 'Vedic Metres', desc: 'Metres defined strictly by syllable count (Akṣara-vṛtta), dominated by the seven primary metres.' },
      { name: 'Classical Metres', desc: 'Later metres defined by the arrangement of light and heavy syllables (Mātrā-vṛtta).' },
      { name: 'Meru-Prastāra', desc: 'A geometric representation of combinations of syllables, equivalent to the binomial expansion triangle.' }
    ],
    keyConcepts: [
      { name: 'Laghu & Guru (Syllable Weight)', deva: 'लघु-गुरु', desc: 'The distinction between light/short (Laghu, 1 beat) and heavy/long (Guru, 2 beats) syllables based on vowel length and following clusters.' },
      { name: 'Gana (Metrical Feet)', deva: 'गण', desc: 'Groups of three syllables used in classical metres, classified into eight standard types (Ya, Ma, Ta, Ra, Ja, Bha, Ja, Sa).' },
      { name: 'Prastāra (Permutation)', deva: 'प्रस्तार', desc: 'The systematic methods for writing down and counting all possible metrical patterns of a given length.' }
    ],
    verse: {
      deva: 'सानुस्वारश्च दीर्घश्च विसर्गी च गुरुर्भवेत् ।\nवर्णो गुरुर्विज्ञेयः गद्यपद्येऽपि सर्वथा ॥',
      translit: 'sānusvāraśca dīrghaśca visargī ca gururbhavet |\nvarṇo gururvijñeyaḥ gadyapadye\'pi sarvathā ||',
      trans: 'A syllable containing a short vowel followed by an anusvara, a long vowel, or followed by a visarga, is to be recognized as heavy (Guru) in both prose and verse.',
      cite: 'Piṅgala Chandaḥ-sūtra · Traditional metric rule'
    }
  },
  jyotisha: {
    id: 'jyotisha',
    title: 'Jyotiṣa',
    deva: 'ज्योतिष',
    limb: 'Eyes (नेत्रम्)',
    metaphor: 'The organ of vision and cosmic alignment',
    authorityText: 'Vedāṅga-jyotiṣa of Lagadha',
    keyAuthor: 'Lagadha',
    scope: 'Astronomy, calendar systems, movements of the sun and moon, and auspicious timing.',
    explanation: [
      'Jyotiṣa is the science of astronomy and celestial timing. It represents the "eyes" of the Veda because it allows the tradition to see the cosmic time and perform sacrifices in alignment with celestial movements. Vedic rituals are tied strictly to solar and lunar cycles, solstices, and lunar mansions.',
      'The earliest text, the Vedāṅga-jyotiṣa of sage Lagadha, lays out a luni-solar calendar of a five-year cycle (Yuga). It details the positions of the sun and moon relative to the twenty-seven Nakṣatras (lunar mansions). This mathematical discipline later evolved into the classical Indian astronomy of Aryabhata and Varahamihira.'
    ],
    subdivisions: [
      { name: 'Siddhānta (Mathematical Astronomy)', desc: 'Calculations of planetary positions, eclipses, and orbits.' },
      { name: 'Saṃhitā (Mundane Astrology)', desc: 'The study of celestial events, earthquakes, and omen patterns on a collective scale.' },
      { name: 'Horā (Natal Astrology)', desc: 'The study of natal charts and individual timings, which developed extensively in the classical post-Vedic period.' }
    ],
    keyConcepts: [
      { name: 'Nakṣatra (Lunar Mansions)', deva: 'नक्षत्र', desc: 'The twenty-seven segments of the ecliptic through which the moon passes during its sidereal orbit.' },
      { name: 'Ayana (Solstices)', deva: 'अयन', desc: 'The six-month paths of the sun: Uttarāyaṇa (northward journey) and Dakṣiṇāyana (southward journey).' },
      { name: 'Muhūrta (Auspicious Moment)', deva: 'मुहूर्त', desc: 'A unit of time (approximately 48 minutes) utilized to find the perfect moment to initiate any ritual or task.' }
    ],
    verse: {
      deva: 'यथा शिखा मयूराणां नागानां मणयो यथा ।\nतद्वद्वेदाङ्गशास्त्राणां गणितं मूर्धनि स्थितम् ॥',
      translit: 'yathā śikhā mayūrāṇāṃ nāgānāṃ maṇayo yathā |\ntadvad vedāṅgaśāstrāṇāṃ gaṇitaṃ mūrdhani sthitam ||',
      trans: 'Just as the crest stands on the head of a peacock, and the jewel on the hood of a cobra, so does the science of mathematics (astronomy) stand at the very head of all the Vedāṅga auxiliary sciences.',
      cite: 'Lagadha · Vedāṅga-jyotiṣa · 35'
    }
  }
};
