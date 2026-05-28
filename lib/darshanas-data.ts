export type DarshanaConcept = {
  name: string;
  deva: string;
  desc: string;
};

export type MajorText = {
  name: string;
  author: string;
  desc: string;
};

export type DarshanaVerse = {
  deva: string;
  translit: string;
  trans: string;
  cite: string;
};

export interface DarshanaDetails {
  id: string;
  title: string;
  deva: string;
  founder: string;
  coreText: string;
  epistemology: string;
  metaphysics: string;
  pairedSchool: string;
  pairedSchoolId: string;
  explanation: string[];
  keyConcepts: DarshanaConcept[];
  majorWorks: MajorText[];
  verse: DarshanaVerse;
}

export const DARSHANAS_DETAILS: Record<string, DarshanaDetails> = {
  nyaya: {
    id: 'nyaya',
    title: 'Nyāya',
    deva: 'न्याय',
    founder: 'Akṣapāda Gautama',
    coreText: 'Nyāya-sūtras',
    epistemology: '4 Valid Means (Perception, Inference, Comparison, Testimony)',
    metaphysics: 'Realistic Pluralism (16 Categories / Padārthas)',
    pairedSchool: 'Vaiśeṣika',
    pairedSchoolId: 'vaisheshika',
    explanation: [
      'Nyāya is the school of logical analysis and epistemology. Founded by the sage Gautama, it is famous for developing the formal rules of reasoning and debate that became the standard intellectual tools of every subsequent school of Indian philosophy.',
      'According to Nyāya, suffering is caused by ignorance (mithyā-jñāna), which leads to wrong actions and rebirth. Liberation (apavarga) is achieved by obtaining correct and valid knowledge of reality. The school proposes a highly structured five-membered syllogism to prove claims, combining deduction with empirical observation.'
    ],
    keyConcepts: [
      { name: 'Pramāṇa (Means of Knowledge)', deva: 'प्रमाण', desc: 'The four valid sources of knowledge: Pratyakṣa (perception), Anumāna (inference), Upamāna (comparison), and Śabda (verbal testimony).' },
      { name: 'Pañcāvayava (Five-Step Syllogism)', deva: 'पञ्चावयव', desc: 'The formal logic structure: Proposition (Pratijñā), Reason (Hetu), Example (Udāharaṇa), Application (Upanaya), and Conclusion (Nigamana).' },
      { name: 'Apavarga (Liberation)', deva: 'अपवर्ग', desc: 'The state of absolute freedom from pain and rebirth, achieved when correct knowledge dispels ignorance.' }
    ],
    majorWorks: [
      { name: 'Nyāya-sūtra', author: 'Gautama', desc: 'The foundational text containing the core rules of logic and categories of debate.' },
      { name: 'Nyāya-bhāṣya', author: 'Vātsyāyana', desc: 'The earliest surviving comprehensive commentary on the Nyāya-sūtras.' }
    ],
    verse: {
      deva: 'प्रमाण-प्रमेय-संशय-प्रयोजन-दृष्टान्त-सिद्धान्तावयव-तर्क-निर्णय-वाद-जल्प-वितण्डा-हेत्वाभास-छल-जाति-निग्रहस्थानानां तत्त्वज्ञानात् निःश्रेयसाधिगमः ॥',
      translit: 'pramāṇa-prameya-saṃśaya-prayojana-dṛṣṭānta-siddhāntāvayava-tarka-nirṇaya-vāda-jalpa-vitaṇḍā-hetvābhāsa-chala-jāti-nigrahasthānānāṃ tattvajñānāt niḥśreyasādhigamaḥ ||',
      trans: 'Supreme liberation is attained by the true knowledge of the sixteen categories: means of valid knowledge, objects of valid knowledge, doubt, purpose, familiar instance, established tenet, members of syllogism, confutation, ascertainment, discussion, wrangling, cavil, fallacies, quibble, futility, and occasion for rebuke.',
      cite: 'Nyāya-sūtra · 1.1.1'
    }
  },
  vaisheshika: {
    id: 'vaisheshika',
    title: 'Vaiśeṣika',
    deva: 'वैशेषिक',
    founder: 'Kaṇāda',
    coreText: 'Vaiśeṣika-sūtras',
    epistemology: '2 Valid Means (Perception and Inference)',
    metaphysics: 'Atomistic Pluralism (7 Categories / Padārthas)',
    pairedSchool: 'Nyāya',
    pairedSchoolId: 'nyaya',
    explanation: [
      'Vaiśeṣika is the school of physics, atomism, and pluralistic metaphysics. Founded by the sage Kaṇāda (meaning "atom-eater"), it seeks to analyze and categorize the physical universe into fundamental elements. It teaches that all material objects are composed of eternal, indivisible atoms (aṇu) that combine under the influence of an unseen moral force (adṛṣṭa).',
      'The school is strictly realistic, asserting that the objects of our perception exist independently of our minds. It pairs with Nyāya, providing the physical and metaphysical framework, while Nyāya provides the epistemological and logical tools.'
    ],
    keyConcepts: [
      { name: 'Aṇuvāda (Atomism)', deva: 'अणुवाद', desc: 'The theory that the material world is composed of four types of indivisible, eternal atoms: earth, water, fire, and air.' },
      { name: 'Padārtha (Categories)', deva: 'पदार्थ', desc: 'The seven aspects of reality: Dravya (substance), Guṇa (quality), Karma (activity), Sāmānya (generality), Viśेṣa (particularity), Samavāya (inherence), and Abhāva (non-existence).' },
      { name: 'Adṛṣṭa (Unseen Force)', deva: 'अदृष्ट', desc: 'The unseen moral law or karma that guides the motion of atoms and causes the creation and dissolution of the universe.' }
    ],
    majorWorks: [
      { name: 'Vaiśeṣika-sūtra', author: 'Kaṇāda', desc: 'The root aphorisms proposing the atomic structure of the universe and categories of existence.' },
      { name: 'Padārtha-dharma-saṅgraha', author: 'Praśastapāda', desc: 'The classic exposition that restructured and expanded the original sūtra teachings.' }
    ],
    verse: {
      deva: 'धर्मविशेषप्रसूताद् द्रव्यगुणकर्मसामान्यविशेषसमवायानां पदार्थानां साधर्म्यवैधर्म्याभ्यां तत्त्वज्ञानान्निःश्रेयसम् ॥',
      translit: 'dharmaviśeṣaprasūtād dravyaguṇakarmasāmānyaviśeṣasamavāyānāṃ padārthānāṃ sādharmyavaidharmyābhyāṃ tattvajñānānniḥśreyasam ||',
      trans: 'Supreme liberation results from the true knowledge of the categories — substance, quality, activity, generality, particularity, and inherence — derived from their commonalities and differences, brought about by a special merit (dharma).',
      cite: 'Vaiśeṣika-sūtra · 1.1.4'
    }
  },
  sankhya: {
    id: 'sankhya',
    title: 'Sāṅkhya',
    deva: 'साङ्ख्य',
    founder: 'Kapila',
    coreText: 'Sāṅkhya-kārikā (by Īśvarakṛṣṇa)',
    epistemology: '3 Valid Means (Perception, Inference, and Testimony)',
    metaphysics: 'Dualistic Realism (25 Tattvas, Puruṣa & Prakṛti)',
    pairedSchool: 'Yoga',
    pairedSchoolId: 'yoga',
    explanation: [
      'Sāṅkhya is the school of dualistic cosmology and enumeration. Reared by the sage Kapila, it is the oldest philosophical system in India. It proposes a strict dualism between Puruṣa (pure, unchanging consciousness) and Prakṛti (unconscious, dynamic primal matter).',
      'The entire universe evolves from Prakṛti when it is disturbed by the proximity of Puruṣa. This evolution proceeds through twenty-three successive principles (tattvas) governed by three qualities (guṇas): Sattva (purity, light), Rajas (activity, passion), and Tamas (inertia, darkness). Liberation is achieved when Puruṣa realizes its absolute difference from Prakṛti.'
    ],
    keyConcepts: [
      { name: 'Puruṣa & Prakṛti (Consciousness & Matter)', deva: 'पुरुष-प्रकृति', desc: 'The fundamental division between the inactive, seeing consciousness (Puruṣa) and the active, seen nature (Prakṛti).' },
      { name: 'Guṇatraya (Three Qualities)', deva: 'गुणत्रय', desc: 'The three constituents of Prakṛti: Sattva (balance), Rajas (movement), and Tamas (heaviness), whose equilibrium determines all physical and mental phenomena.' },
      { name: 'Satkāryavāda (Theory of Causation)', deva: 'सत्कार्यवाद', desc: 'The doctrine that the effect pre-exists in its cause (e.g., oil exists in sesame seeds before extraction; the statue exists in the stone).' }
    ],
    majorWorks: [
      { name: 'Sāṅkhya-pravacana-sūtra', author: 'Kapila (Attributed)', desc: 'The traditional root sūtra text of the Sāṅkhya school.' },
      { name: 'Sāṅkhya-kārikā', author: 'Īśvarakṛṣṇa', desc: 'The oldest surviving standard text (c. 350 CE) containing 72 verses that systematized the school.' }
    ],
    verse: {
      deva: 'मूलप्रकृतिरविकृतिः महदाद्याः प्रकृतिविकृतयः सप्त ।\nषोडशकस्तु विकारो न प्रकृतिर्न विकृतिः पुरुषः ॥',
      translit: 'mūlaprakṛtiravikṛtiḥ mahadādyāḥ prakṛtivikṛtayaḥ sapta |\nṣoḍaśakastu vikāro na prakṛtirna vikṛtiḥ puruṣaḥ ||',
      trans: 'Root nature (Prakṛti) is uncreated. The seven principles starting with intellect (Mahat) are both created and creators. The sixteen modifications are only created. The conscious self (Puruṣa) is neither created nor a creator.',
      cite: 'Sāṅkhya-kārikā · 3'
    }
  },
  yoga: {
    id: 'yoga',
    title: 'Yoga',
    deva: 'योग',
    founder: 'Patañjali',
    coreText: 'Yoga-sūtras',
    epistemology: '3 Valid Means (Perception, Inference, and Testimony)',
    metaphysics: 'Dualistic Realism with Iśvara (God)',
    pairedSchool: 'Sāṅkhya',
    pairedSchoolId: 'sankhya',
    explanation: [
      'Yoga is the school of meditative practice and psychology. Systematized by Patañjali in 196 sūtras, it is the practical application of Sāṅkhya cosmology. While Sāṅkhya provides the theoretical framework of Puruṣa and Prakṛti, Yoga provides the experimental methodology to isolate consciousness from matter.',
      'Patañjali defines Yoga as the restriction of the fluctuations of the mind-stuff (citta-vṛtti-nirodha). The school introduces the concept of Iśvara (a special Puruṣa untouched by karma) as a focal point for devotion, and lays out the Eight-Limbed Path (Aṣṭāṅga) leading to absorption (samādhi).'
    ],
    keyConcepts: [
      { name: 'Cittavṛtti (Mental Fluctuations)', deva: 'चित्तवृत्ति', desc: 'The five movements of the mind: valid knowledge, error, metaphor/illusion, sleep, and memory.' },
      { name: 'Aṣṭāṅga (Eight Limbs)', deva: 'अष्टाङ्ग', desc: 'The path of discipline: Yama (restraints), Niyama (observances), Āsana (postures), Prāṇāyāma (breath control), Pratyāhāra (sensory withdrawal), Dhāraṇā (concentration), Dhyāna (meditation), and Samādhi (absorption).' },
      { name: 'Kaivalya (Isolation)', deva: 'कैवल्य', desc: 'The absolute isolation of Puruṣa from Prakṛti, representing final liberation and self-realization.' }
    ],
    majorWorks: [
      { name: 'Yoga-sūtras', author: 'Patañjali', desc: 'The 196 aphorisms outlining the eight limbs, mental states, and methods of meditation.' },
      { name: 'Yoga-bhāṣya', author: 'Vyāsa', desc: 'The primary and oldest commentary, without which the brief sūtras are nearly unintelligible.' }
    ],
    verse: {
      deva: 'योगश्चित्तवृत्तिनिरोधः ॥\nतदा द्रष्टुः स्वरूपेऽवस्थानम् ॥',
      translit: 'yogaścittavṛttinirodhaḥ ||\ntadā draṣṭuḥ svarūpe\'vasthānam ||',
      trans: 'Yoga is the restriction of the fluctuations of the mind-stuff. Then, the seer abides in its own true, essential nature.',
      cite: 'Yoga-sūtras · 1.2 – 1.3'
    }
  },
  mimamsa: {
    id: 'mimamsa',
    title: 'Pūrva-Mīmāṃsā',
    deva: 'पूर्व-मीमांसा',
    founder: 'Jaimini',
    coreText: 'Mīmāṃsā-sūtras',
    epistemology: '5 or 6 Valid Means (Prabhākara/Kumārila schools)',
    metaphysics: 'Realistic Pluralism, Eternal Unauthored Veda',
    pairedSchool: 'Uttara-Mīmāṃsā (Vedānta)',
    pairedSchoolId: 'vedanta',
    explanation: [
      'Pūrva-Mīmāṃsā is the school of hermeneutics, semantic interpretation, and ritual duty. Founded by the sage Jaimini, it focuses entirely on the exegesis of the Karma-kāṇḍa (the action/ritual portion of the Vedas). It seeks to establish the eternal and absolute authority of the Veda.',
      'Unlike other schools, Mīmāṃsā does not focus on a creator God. Instead, it posits that the Veda is eternal and unauthored (apauruṣeya), and that performing the prescribed Vedic sacrifices creates an unseen force (apūrva) that automatically yields results. It developed highly sophisticated theories of grammar, semantics, and sentence meaning.'
    ],
    keyConcepts: [
      { name: 'Dharma (Duty/Ritual)', deva: 'धर्म', desc: 'The moral and ritual injunctions commanded by the Veda, which must be performed for their own sake.' },
      { name: 'Apūrva (Unseen Efficacy)', deva: 'अपूर्व', desc: 'The unique causal link or moral residue that connects a completed ritual to its future fruit/result.' },
      { name: 'Apauruṣeyatva (Unauthored Nature)', deva: 'अपौरुषेयत्व', desc: 'The doctrine that the Veda is eternal, uncreated by any human or divine agency, and thus free from error.' }
    ],
    majorWorks: [
      { name: 'Mīmāṃsā-sūtra', author: 'Jaimini', desc: 'The massive collection of sūtras analyzing Vedic commands and syntax.' },
      { name: 'Śābara-bhāṣya', author: 'Śabara', desc: 'The monumental commentary that serves as the basis for all later Mīmāṃsā schools.' }
    ],
    verse: {
      deva: 'अथातो धर्मजिज्ञासा ।\nचोदनालक्षणोऽर्थो धर्मः ॥',
      translit: 'athāto dharmajijñāsā |\ncodanālakṣaṇo\'rtho dharmaḥ ||',
      trans: 'Now, therefore, the desire to know Dharma. Dharma is that beneficial purpose which is characterized by Vedic injunctions.',
      cite: 'Mīmāṃsā-sūtras · 1.1.1 – 1.1.2'
    }
  },
  vedanta: {
    id: 'vedanta',
    title: 'Vedānta',
    deva: 'वेदान्त',
    founder: 'Bādarāyaṇa',
    coreText: 'Brahma-sūtras',
    epistemology: '6 Valid Means (in Advaita)',
    metaphysics: 'Non-dualism / Qualified Non-dualism / Dualism',
    pairedSchool: 'Pūrva-Mīmāṃsā',
    pairedSchoolId: 'mimamsa',
    explanation: [
      'Vedānta (literally "the end of the Veda") is the school that systematizes the philosophical teachings of the Upaniṣads. Based on the Brahma-sūtras of Bādarāyaṇa, it turns away from outer ritual toward the nature of ultimate reality (Brahman) and the self (Ātman).',
      'Vedānta split into three major classical streams based on different commentaries on the same source texts: Advaita (Non-dualism of Śaṅkara), Viśiṣṭādvaita (Qualified Non-dualism of Rāmānuja), and Dvaita (Dualism of Madhva). It remains the dominant philosophical lineage of modern Hinduism.'
    ],
    keyConcepts: [
      { name: 'Prasthanatrayī (Triple Foundation)', deva: 'प्रस्थानत्रयी', desc: 'The three authoritative sources of Vedānta: the Upaniṣads (Śruti), the Brahma-sūtras (Nyāya), and the Bhagavad Gītā (Smṛti).' },
      { name: 'Brahman & Ātman', deva: 'ब्रह्म-आत्मन्', desc: 'The ultimate, unchanging reality (Brahman) and the individual self (Ātman) whose relationship defines the different sub-schools.' },
      { name: 'Māyā (Cosmic Illusion)', deva: 'माया', desc: 'The power of illusion that makes the singular Brahman appear as the diverse, material universe (central to Advaita).' }
    ],
    majorWorks: [
      { name: 'Brahma-sūtras', author: 'Bādarāyaṇa', desc: 'The concise, enigmatic sūtras that summarize the teachings of the Upaniṣads.' },
      { name: 'Śārīraka-bhāṣya', author: 'Adi Śaṅkara', desc: 'The classic Advaita commentary that established non-dualism as a major philosophical force.' }
    ],
    verse: {
      deva: 'अथातो ब्रह्मजिज्ञासा ।\nजन्माद्यस्य यतः ॥',
      translit: 'athāto brahmajijñāsā |\njanmādyasya yataḥ ||',
      trans: 'Now, therefore, the desire to know Brahman. Brahman is that from which the origin, sustenance, and dissolution of this universe proceed.',
      cite: 'Brahma-sūtras · 1.1.1 – 1.1.2'
    }
  }
};
