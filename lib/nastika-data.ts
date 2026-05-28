export type NastikaConcept = {
  name: string;
  deva: string;
  desc: string;
};

export type NastikaSchool = {
  name: string;
  desc: string;
};

export type NastikaVerse = {
  deva: string;
  translit: string;
  trans: string;
  cite: string;
};

export interface NastikaDetails {
  id: string;
  title: string;
  deva: string;
  founder: string;
  texts: string;
  epistemology: string;
  metaphysics: string;
  schools: NastikaSchool[];
  concepts: NastikaConcept[];
  explanation: string[];
  verse: NastikaVerse;
}

export const NASTIKA_DETAILS: Record<string, NastikaDetails> = {
  carvaka: {
    id: 'carvaka',
    title: 'Cārvāka',
    deva: 'चार्वाक',
    founder: 'Bṛhaspati (Legendary Sage)',
    texts: 'Bārhaspatya-sūtras (lost, reconstructed), Tattvopaplava-siṃha',
    epistemology: 'Pratyakṣa (Direct Perception only)',
    metaphysics: 'Materialistic Monism (Four elements: Earth, Water, Fire, Air)',
    schools: [
      { name: 'Dhūrta Cārvāka', desc: 'Strict skeptics who accept only direct perception of currently present physical elements and reject any form of unseen logic.' },
      { name: 'Suśikṣita Cārvāka', desc: 'Refined materialists who accept inference when it has immediate, reliable empirical verification (e.g. smoke implies fire).' }
    ],
    concepts: [
      { name: 'Dehātmavāda', deva: 'देहात्मवाद', desc: 'The doctrine that the physical body is the self. Consciousness is a temporary byproduct of the body and ends at death.' },
      { name: 'Bhūtavāda', deva: 'भूतवाद', desc: 'The theory that consciousness emerges from the combination of the four material elements, just as alcohol\'s intoxicating power arises from fermenting grains.' },
      { name: 'Lokāyata', deva: 'लोकायत', desc: 'The "world-centered" philosophy that rejects heaven, hell, karma, and rites, urging focus on concrete earthly happiness.' }
    ],
    explanation: [
      'Cārvāka (also known as Lokāyata) is the ancient Indian school of pure materialism and skepticism. Classed as a Nāstika school because it rejects the authority of the Veda and any transcendental concepts, it asserts that the physical world is the only reality.',
      'According to Cārvāka, direct perception (Pratyakṣa) is the only valid source of knowledge. Inference (Anumāna) is rejected as a final authority because it relies on universal relationships that cannot be fully verified. The school mocks rituals, priests, and the concepts of afterlife or karma, arguing that they are created by cunning priests for their own livelihood. The highest goal is to live happily in the present world.'
    ],
    verse: {
      deva: 'यावज्जीवेत् सुखं जीवेत् ऋणं कृत्वा घृतं पिबेत् ।\nभस्मीभूतस्य देहस्य पुनरागमनं कुतः ॥',
      translit: 'yāvajjīvet sukhaṃ jīvet ṛṇaṃ kṛtvā ghṛtaṃ pibet |\nbhasmībhūtasya dehasya punarāgamanaṃ kutaḥ ||',
      trans: 'While you live, live happily, even if you have to take a loan to drink ghee. For once the physical body is reduced to ashes, how can it ever return?',
      cite: 'Attributed to Cārvāka · Sarva-darśana-saṅgraha 1.3'
    }
  },
  bauddha: {
    id: 'bauddha',
    title: 'Bauddha',
    deva: 'बौद्ध',
    founder: 'Siddhārtha Gautama (The Buddha)',
    texts: 'Tripiṭaka (Pāli Canon), Mūlamadhyamaka-kārikā, Pramāṇavārttika',
    epistemology: '2 Valid Means (Perception and Inference)',
    metaphysics: 'Pratītyasamutpāda (Dependent Origination), Anātman (No-self)',
    schools: [
      { name: 'Theravāda', desc: 'The "Way of the Elders," focusing on monastic discipline and personal liberation based on the Pāli Canon.' },
      { name: 'Mādhyamaka', desc: 'The "Middle Way" founded by Nāgārjuna, centering on the concept of Śūnyatā (emptiness of inherent existence).' },
      { name: 'Yogācāra / Vijnānavāda', desc: 'The consciousness-only school of Asaṅga and Vasubandhu, asserting that external objects are representations of mind.' }
    ],
    concepts: [
      { name: 'Catvāri Āryasatyāni', deva: 'चत्वारि आर्यसत्यानि', desc: 'The Four Noble Truths: suffering exists (Duḥkha), it has a cause (Samudaya), it can end (Nirodha), and there is a path to its end (Mārga).' },
      { name: 'Pratītyasamutpāda', deva: 'प्रतीत्यसमुत्पाद', desc: 'Dependent Origination: the principle that all phenomena arise in dependence upon multiple causes and conditions.' },
      { name: 'Anātman & Anitya', deva: 'अनात्मन् · अनित्य', desc: 'The core insights that there is no eternal, unchanging self or soul (Anātma) and that all conditioned things are impermanent (Anitya).' }
    ],
    explanation: [
      'Bauddha (Buddhism) is the philosophical tradition arising from the teachings of Gautama Buddha in the 5th century BCE. It rejects the spiritual authority of the Vedas, the caste system, and the concept of an eternal soul (Ātman) or creator God, charting a middle path between extreme indulgence and asceticism.',
      'The ultimate goal of Buddhism is Nirvāṇa—the blowing out of the fires of desire, hatred, and delusion, ending the cycle of rebirth and suffering. The school developed complex epistemological and logical traditions under Dignāga and Dharmakīrti, and evolved into major philosophical branches spanning realist, idealist, and non-dualist views of reality.'
    ],
    verse: {
      deva: 'ये धर्मा हेतुप्रभवा हेतुं तेषां तथागतो ह्यवदत् ।\nतेषां च यो निरोधो एवंवादी महाश्रमणः ॥',
      translit: 'ye dharmā hetuprabhavā hetuṃ teṣāṃ tathāgato hyavadat |\nteṣāṃ ca yo nirodho evaṃvādī mahāśramaṇaḥ ||',
      trans: 'Of all phenomena that arise from a cause, the Tathāgata (Buddha) has explained the cause, and also their cessation. This is the teaching of the Great Ascetic.',
      cite: 'Pratītyasamutpāda-gāthā · Vinaya Piṭaka'
    }
  },
  jaina: {
    id: 'jaina',
    title: 'Jaina',
    deva: 'जैन',
    founder: 'Rishabhadeva (1st) and Mahāvīra (24th Tīrthaṅkara)',
    texts: 'Jaina Āgamas, Tattvārtha-sūtra, Samayasāra',
    epistemology: '3 Valid Means (Perception, Inference, and Testimony / Standpoints)',
    metaphysics: 'Dualistic Pluralism (Jīva / Soul and Ajīva / Non-soul)',
    schools: [
      { name: 'Digambara', desc: 'The "sky-clad" sect whose monks wear no clothes, hold strict ascetic vows, and believe women must be reborn as men to attain liberation.' },
      { name: 'Śvetāmbara', desc: 'The "white-clad" sect whose monks and nuns wear simple white robes and accept women as fully eligible for ascetic ordination and liberation.' }
    ],
    concepts: [
      { name: 'Anekāntavāda', deva: 'अनेकान्तवाद', desc: 'The doctrine of non-one-sidedness; reality is complex and possesses infinite aspects, none of which can be captured by a single description.' },
      { name: 'Syādvāda & Nayavāda', deva: 'स्याद्वाद · नयवाद', desc: 'The logic of conditional predication ("perhaps" or "in a certain sense"), emphasizing that statements are true only from relative standpoints.' },
      { name: 'Ahiṃsā (Non-violence)', deva: 'अहिंसा', desc: 'The supreme ethical commitment to avoid harming any living being, whether in action, speech, or thought.' }
    ],
    explanation: [
      'Jaina (Jainism) is an ancient Indian philosophical and religious system revitalized by Vardhamāna Mahāvīra in the 6th century BCE. It is categorized as a Nāstika school because it rejects the absolute authority of the Vedas, replacing it with the teachings of the realized seers (Tīrthaṅkaras).',
      'Jainism teaches a dualistic universe made of Jīva (conscious souls) and Ajīva (unconscious matter). Karma is viewed as a physical substance that flows into and binds the soul. Liberation (Mokṣa) is achieved by stopping this karmic influx (Saṃvara) and burning off existing karma (Nirjarā) through the three gems: Right View, Right Knowledge, and Right Conduct.'
    ],
    verse: {
      deva: 'सम्यग्दर्शनज्ञानचारित्राणि मोक्षमार्गः ॥\nपरस्परोपग्रहो जीवानाम् ॥',
      translit: 'samyagdarśanajñānacāritrāṇi mokṣamārgaḥ ||\nparasparopagraho jīvānām ||',
      trans: 'Right view, right knowledge, and right conduct together constitute the path to liberation. The role of souls is to assist and support one another.',
      cite: 'Tattvārtha-sūtra · 1.1 & 5.21'
    }
  }
};
