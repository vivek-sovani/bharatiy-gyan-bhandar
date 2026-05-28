export type UpavedaConcept = {
  name: string;
  deva: string;
  desc: string;
};

export type UpavedaBranch = {
  name: string;
  desc: string;
};

export type UpavedaVerse = {
  deva: string;
  translit: string;
  trans: string;
  cite: string;
};

export interface UpavedaDetails {
  id: string;
  title: string;
  deva: string;
  vedaPair: string;
  texts: string;
  focus: string;
  branches: UpavedaBranch[];
  concepts: UpavedaConcept[];
  explanation: string[];
  verse: UpavedaVerse;
}

export const UPAVEDAS_DETAILS: Record<string, UpavedaDetails> = {
  ayurveda: {
    id: 'ayurveda',
    title: 'Āyurveda',
    deva: 'आयुर्वेद',
    vedaPair: 'Atharvaveda',
    texts: 'Caraka-saṃhitā, Suśruta-saṃhitā, Aṣṭāṅga-hṛdaya',
    focus: 'Holistic health, medicine, longevity, and constitutional balance',
    branches: [
      { name: 'Kāyacikitsā', desc: 'Internal medicine, dealing with the diagnosis and treatment of systemic body ailments.' },
      { name: 'Śalyatantra', desc: 'Surgery, detailing operational techniques, surgical instruments, and wound management.' },
      { name: 'Śālākyatantra', desc: 'Ophthalmology and ENT, focusing on diseases of the eyes, ears, nose, and throat.' },
      { name: 'Kaumārabhrtya', desc: 'Pediatrics, obstetrics, and gynecology, covering childcare and maternal health.' },
      { name: 'Agadatantra', desc: 'Toxicology, treating poisons from animals, plants, minerals, and artificial toxins.' },
      { name: 'Bhūtavidyā', desc: 'Psychiatry, treating mental disturbances through spiritual, herbal, and behavioral means.' },
      { name: 'Rasāyana', desc: 'Rejuvenation therapy, focus on longevity, memory improvement, and immune defense.' },
      { name: 'Vājīkaraṇa', desc: 'Virility and reproductive health, enhancing vitality and the health of offspring.' }
    ],
    concepts: [
      { name: 'Tridoṣa (Three Bio-Energies)', deva: 'त्रिदोष', desc: 'The fundamental constitution of Vāta (air/ether), Pitta (fire/water), and Kapha (water/earth) that governs physiological processes.' },
      { name: 'Saptadhātu (Seven Tissues)', deva: 'सप्तधातु', desc: 'The structural components of the body: Rasa (plasma), Rakta (blood), Māṃsa (muscle), Medas (fat), Asthi (bone), Majjā (marrow), and Śukra (reproductive).' },
      { name: 'Pañcakarma (Five Cleansings)', deva: 'पञ्चकर्म', desc: 'The five therapeutic processes of detoxification: Vamana, Virecana, Basti, Nasya, and Raktamokṣaṇa.' },
      { name: 'Prakṛti (Individual Constitution)', deva: 'प्रकृति', desc: 'The unique genetic and physical blueprint of an individual determined at the moment of conception.' }
    ],
    explanation: [
      'Āyurveda, the "science of longevity," is the Upaveda of the Atharvaveda. It treats the human being as an integrated whole of body, mind, and spirit, proposing that health is not merely the absence of disease but a dynamic state of physiological and psychological equilibrium.',
      'The system operates around the balance of the Tridoṣas (biological humors) and recognizes that every individual possesses a distinct constitutional blueprint (Prakṛti). Disease arises when these humors fall out of balance due to improper diet, stress, seasonal shifts, or lifestyle. Treatment ranges from complex herbal pharmacology and dietary adjustments to Panchakarma (physical detoxification) and rejuvenation therapies.'
    ],
    verse: {
      deva: 'हिताहितं सुखं दुःखमायुस्तस्य हिताहितम् ।\nमानं च तच्च यत्रोक्तमायुर्वेदः स उच्यते ॥',
      translit: 'hitāhitaṃ sukhaṃ duḥkhamāyustasya hitāhitam |\nmānaṃ ca tacca yatroktamāyurvedaḥ sa ucyate ||',
      trans: 'That science is called Āyurveda which describes what is good and bad for life, what is happy and unhappy, and provides the measure and guidelines for a wholesome lifespan.',
      cite: 'Caraka-saṃhitā · Sūtrasthāna 1.41'
    }
  },
  dhanurveda: {
    id: 'dhanurveda',
    title: 'Dhanurveda',
    deva: 'धनुर्वेद',
    vedaPair: 'Yajurveda',
    texts: 'Vasiṣṭha Dhanurveda-saṃhitā, Agni Purāṇa (Warfare sections)',
    focus: 'Martial arts, archery, weapon training, strategy, and battle ethics',
    branches: [
      { name: 'Mukta', desc: 'Thrown weapons, such as arrows, spears, and discuss/disks.' },
      { name: 'Amukta', desc: 'Unthrown weapons, including swords, maces, shields, and daggers.' },
      { name: 'Muktāmukta', desc: 'Weapons that can be thrown or held close, such as javelins and tridents.' },
      { name: 'Yantramukta', desc: 'Mechanical projectile devices, slings, and siege weaponry.' },
      { name: 'Bāhu-yuddha', desc: 'Unarmed close combat, wrestling, and pressure-point striking.' }
    ],
    concepts: [
      { name: 'Yuddha-dharma (Chivalry & Ethics)', deva: 'युद्धधर्म', desc: 'The ethical code governing combat: protecting non-combatants, banning poisoned weapons, and ensuring fair matchups.' },
      { name: 'Dhanurvidyā (Sacred Archery)', deva: 'धनुर्विद्या', desc: 'The discipline of archery, treated not just as a physical skill but as a deep meditative practice.' },
      { name: 'Marmasthāna (Vital Points)', deva: 'मर्मस्थान', desc: 'The study of 107 vital energy spots on the body used for self-defense and martial healing.' }
    ],
    explanation: [
      'Dhanurveda, the Upaveda of the Yajurveda, is the ancient Indian science of warfare, combat, and martial strategy. The name literally means "knowledge of the bow," highlighting the primary status that archery held in early Indian military discipline.',
      'It encompasses the study of various weapons, physical conditioning, chariot and cavalry maneuvering, and complex army formations (Vyūha). Crucially, Dhanurveda is grounded in Yuddha-dharma—the moral code of war—which dictates that combat must be fought with honor, prohibiting the targeting of unarmed soldiers, surrendering foes, or using cruel and deceitful methods.'
    ],
    verse: {
      deva: 'चतुष्पादं धनुर्वेदं प्रवक्ष्याम्यनुपूर्वशः ।\nयस्य ज्ञानेन देवेन्द्रो विजयं समवाप्तवान् ॥',
      translit: 'catuṣpādaṃ dhanurvedaṃ pravakṣyāmyanupūrvaśaḥ |\nyasya jñānena devendro vijayaṃ samavāptavān ||',
      trans: 'I shall now systematically expound the four-footed Dhanurveda, the supreme science through whose knowledge even the lord of heaven obtained victory.',
      cite: 'Vasiṣṭha Dhanurveda-saṃhitā · 1.1'
    }
  },
  gandharvaveda: {
    id: 'gandharvaveda',
    title: 'Gāndharvaveda',
    deva: 'गान्धर्ववेद',
    vedaPair: 'Sāmaveda',
    texts: 'Nāṭya-śāstra of Bharata Muni, Saṅgīta-ratnākara',
    focus: 'Aesthetics, classical music, dance, dramaturgy, and theater',
    branches: [
      { name: 'Saṅgīta (Vocal Music)', desc: 'The science of voice production, melodic cycles (Rāgas), and vocal techniques.' },
      { name: 'Vādya (Instrumental Music)', desc: 'The study of musical instruments divided into stringed, wind, percussion, and solid categories.' },
      { name: 'Nṛtya & Nṛtta (Dance)', desc: 'Expressive and pure physical dance, using complex footwork and mudras (hand gestures).' },
      { name: 'Nāṭya (Dramaturgy)', desc: 'The art of theatrical production, stagecraft, scriptwriting, and performance.' }
    ],
    concepts: [
      { name: 'Rasa Theory (Aesthetics)', deva: 'रस', desc: 'The eight (later nine) fundamental emotional responses evoked in the audience through artistic expression.' },
      { name: 'Saptasvara (Seven Notes)', deva: 'सप्तस्वर', desc: 'The seven primary musical notes: Sa, Ri, Ga, Ma, Pa, Dha, and Ni, representing cosmic vibrations.' },
      { name: 'Tāla (Rhythmic Cycles)', deva: 'ताल', desc: 'The structural time cycles and rhythmic beats that organize musical and dance performances.' }
    ],
    explanation: [
      'Gāndharvaveda, the Upaveda of the Sāmaveda, is the comprehensive study of music, dance, theater, and aesthetics. Rooted in the melodic chants of the Sāman priests, it views the arts not merely as entertainment, but as a path to spiritual absorption and liberation (Mokṣa).',
      'The foundational authority, Bharata Muni\'s Nāṭya-śāstra, systematizes the rules of performance, defining the revolutionary Rasa theory. According to this theory, art succeeds when it evokes a refined, universal emotional state (Rasa) in the spectator, shifting them from temporary personal emotions into pure, transcendent experience.'
    ],
    verse: {
      deva: 'गीतं वाद्यं च नृत्यं च त्रयं सङ्गीतमुच्यते ।\nमार्गदेशीविभागेन तद् द्वेधा परिकीर्तितम् ॥',
      translit: 'gītaṃ vādyaṃ ca nṛtyaṃ ca trayaṃ saṅgītamucyate |\nmārgadeśīvibhāgena tad dvedhā parikīrtitam ||',
      trans: 'Vocal music, instrumental music, and dance are together called Saṅgīta. It is classified into two paths: Mārga (classical/sacred) and Deśī (regional/folk).',
      cite: 'Saṅgīta-ratnākara · 1.1.21'
    }
  },
  sthapatyaveda: {
    id: 'sthapatyaveda',
    title: 'Sthāpatyaveda',
    deva: 'स्थापत्यवेद',
    vedaPair: 'Ṛgveda',
    texts: 'Mānasāra, Mayamatam, Samarāṅगाणा-sūtradhāra',
    focus: 'Architecture, sacred geometry, town planning, and sculpture',
    branches: [
      { name: 'Vāstu-śāstra', desc: 'The design and alignment of houses, palaces, public buildings, and civil works.' },
      { name: 'Śilpa-śāstra', desc: 'Iconography, proportions of divine statues, and the art of rock sculpture.' },
      { name: 'Citrakalā', desc: 'Traditional painting, murals, and visual rendering on walls and canvases.' },
      { name: 'Bhūmi-lakṣaṇa', desc: 'Soil testing, site selection, topography, and hydrological surveying.' }
    ],
    concepts: [
      { name: 'Vāstu-puruṣa-maṇḍala', deva: 'वास्तुपुरुषमण्डल', desc: 'The sacred grid plan representing the cosmic man, used to determine the energetic layout of buildings.' },
      { name: 'Ṣaḍāṅga (Six Proportions)', deva: 'षडङ्ग', desc: 'The six mathematical ratios used to ensure structural strength, aesthetic balance, and cosmic alignment.' },
      { name: 'Sūtradhāra (Master Architect)', deva: 'सूत्रधार', desc: 'The lead architect and engineer who holds the direct string of measurements and directs construction.' }
    ],
    explanation: [
      'Sthāpatyaveda, the Upaveda of the Ṛgveda, is the science of architecture, engineering, civil planning, and iconography. It bridges physical utility with cosmic alignment, ensuring that human structures exist in harmony with natural currents and forces.',
      'Central to this discipline is the Vāstu-puruṣa-maṇḍala—a grid diagram that represents the cosmic being bound to the earth. Houses, temples, and entire cities are laid out according to these grids, assigning specific rooms or public areas to elements (like water, fire, and wind) based on their cardinal directions to promote health and prosperity.'
    ],
    verse: {
      deva: 'प्रासाद-शयन-यानानि मञ्चकादि यथाविधि ।\nवास्तुसंज्ञं गृहं तत्र वसतां सुखदायकम् ॥',
      translit: 'prāsāda-śayana-yānāni mañcakādi yathāvidhi |\nvāstusaṃjñaṃ gṛhaṃ tatra vasatāṃ sukhadāyakam ||',
      trans: 'Temples, beds, vehicles, and thrones must be built in accordance with the sacred science. A home constructed according to Vāstu rules brings peace and happiness to those who dwell within.',
      cite: 'Mayamatam · 1.2'
    }
  }
};
