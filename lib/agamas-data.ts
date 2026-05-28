export type AgamaConcept = {
  name: string;
  deva: string;
  desc: string;
};

export type AgamaSubdivision = {
  name: string;
  desc: string;
};

export type AgamaVerse = {
  deva: string;
  translit: string;
  trans: string;
  cite: string;
};

export interface AgamaDetails {
  id: string;
  title: string;
  deva: string;
  deity: string;
  texts: string;
  focus: string;
  subdivisions: AgamaSubdivision[];
  concepts: AgamaConcept[];
  explanation: string[];
  verse: AgamaVerse;
}

export const AGAMAS_DETAILS: Record<string, AgamaDetails> = {
  shaiva: {
    id: 'shaiva',
    title: 'Śaiva-āgama',
    deva: 'शैव आगम',
    deity: 'Śiva',
    texts: '28 Siddhānta Āgamas, Śiva-sūtras, Spanda-kārikā',
    focus: 'Temple ritual, non-dual yoga, mantra practice, and the nature of consciousness',
    subdivisions: [
      { name: 'Śaiva-siddhānta', desc: 'The dualistic, ritual-heavy school dominant in Southern India, focusing on temple worship and the relationship of soul to Lord.' },
      { name: 'Kashmir Śaivism (Trika)', desc: 'The absolute monistic philosophy of Northern India, teaching that the entire universe is the play of Śiva\'s consciousness.' },
      { name: 'Vīra-śaivism', desc: 'An egalitarian, bhakti-centered movement focused on carrying the personal Linga as an emblem of identity and devotion.' }
    ],
    concepts: [
      { name: 'Pati-Paśu-Pāśa', deva: 'पति-पशु-पाश', desc: 'The three realities: the Lord (Pati), the bound individual soul (Paśu), and the fetters of ignorance, karma, and ego (Pāśa).' },
      { name: 'Spanda (Divine Pulsation)', deva: 'स्पन्द', desc: 'The dynamic, creative vibration of divine consciousness that brings the universe into manifestation.' },
      { name: 'Pratyabhijñā (Recognition)', deva: 'प्रत्यभिज्ञा', desc: 'The instantaneous recognition of one\'s true self as identical with the supreme consciousness of Śiva.' }
    ],
    explanation: [
      'The Śaiva Āgamas are the sacred manuals governing the worship of Śiva and the philosophy of his non-dual nature. They are traditionally divided into four pādas (chapters): Jñāna (knowledge), Yoga (meditation), Kriyā (ritual actions), and Caryā (conduct/observances).',
      'The system ranges from the dualistic Śaiva-siddhānta (the theological foundation of South Indian temple liturgy) to Kashmir Śaivism—a highly sophisticated, monistic idealism developed by Abhinavagupta. According to Kashmir Śaivism, liberation is not a state to be manufactured, but the sudden recognition (Pratyabhijñā) of one\'s inherent identity as Śiva himself, the singular light of consciousness.'
    ],
    verse: {
      deva: 'चैतन्यमात्मा ॥\nज्ञानं बन्धः ॥',
      translit: 'caitanyamātmā ||\njñānaṃ bandhaḥ ||',
      trans: 'Consciousness is the self. Limited relative knowledge is the cause of bondage.',
      cite: 'Śiva-sūtras · 1.1 – 1.2'
    }
  },
  vaishnava: {
    id: 'vaishnava',
    title: 'Vaiṣṇava-āgama',
    deva: 'वैष्णव आगम',
    deity: 'Viṣṇu / Nārāyaṇa',
    texts: 'Pāñcarātra Saṃhitās (Ahirbudhnya, Jayākhya), Vaikhānasa Sūtras',
    focus: 'Temple architecture, image consecration, five-fold daily worship, and cosmic emanations',
    subdivisions: [
      { name: 'Pāñcarātra', desc: 'The esoteric tradition based on the theory of five-fold daily duties and the cosmic manifestations (Vyūhas) of Viṣṇu.' },
      { name: 'Vaikhānasa', desc: 'The orthodox priestly lineage that blends Vedic domestic fire rituals with Āgamic temple image worship.' }
    ],
    concepts: [
      { name: 'Arcā-avatāra (Image Incarnation)', deva: 'अर्चावतार', desc: 'The belief that the supreme Lord fully manifests his presence within a properly consecrated temple image (pratimā).' },
      { name: 'Pañcakāla-pūjā', deva: 'पञ्चकालपूजा', desc: 'The division of the day into five periods for spiritual acts: approach, preparation, offering, self-study, and meditation.' },
      { name: 'Vyūha Theory', deva: 'व्यूहवाद', desc: 'The four cosmic emanations through which Viṣṇu projects the universe: Vāsudeva, Saṃkarṣaṇa, Pradyumna, and Aniruddha.' }
    ],
    explanation: [
      'The Vaiṣṇava Āgamas govern the design, construction, daily worship, and theology of Viṣṇu temples. Divided into the Pāñcarātra and Vaikhānasa traditions, they provide the technical rules for everything from building a temple\'s gateway (gopura) to preparing daily food offerings.',
      'A core concept of Vaiṣṇava Āgama is the Arcā-avatāra—the temple image is not treated as a mere symbol, but as a living incarnation of Viṣṇu, who voluntarily subjects himself to material form out of love for his devotees. Daily liturgy is structured as serving a royal guest, ensuring that the temple functions as a physical anchor for cosmic energy.'
    ],
    verse: {
      deva: 'ॐ नमो नारायणाय ॥\nयन्मङ्गलमुपायज्ञैर्देवानां हितकाम्यया ॥',
      translit: 'oṃ namo nārāyaṇāya ||\nyanmaṅgalamupāyajñairdevānāṃ hitakāmyayā ||',
      trans: 'Om, salutations to Nārāyaṇa. That which is auspicious, prescribed by the sages for the welfare of the gods...',
      cite: 'Vaiṣṇava Liturgy · Aṣṭākṣara & Saṃhitā Paraphrase'
    }
  },
  shakta: {
    id: 'shakta',
    title: 'Śākta-tantra',
    deva: 'शाक्त तन्त्र',
    deity: 'Śakti / Tripura Sundarī / Kālī',
    texts: 'Saundarya-laharī, Śāradā-tilaka, Tantrasāra',
    focus: 'Awakening energy, yantra meditation, mantra science, and cosmic non-dualism',
    subdivisions: [
      { name: 'Śrī-vidyā (Samayācāra)', desc: 'The refined, internal, and meditative path focusing on Tripura Sundarī, the Śrī-cakra, and quiet visualization.' },
      { name: 'Kālī-kula (Kaulācāra)', desc: 'The dynamic, external, and direct path centered on Kālī, seeking transformation through intense, immediate experience.' }
    ],
    concepts: [
      { name: 'Śrī-cakra (Sacred Yantra)', deva: 'श्रीचक्र', desc: 'The geometric diagram of nine interlocking triangles representing the cosmic union of Śiva and Śakti.' },
      { name: 'Kundalinī-Yoga', deva: 'कुण्डलिनी', desc: 'The system of awakening the dormant spiritual energy coiled at the base of the spine, drawing it up through the six cakras.' },
      { name: 'Daśa-Mahāvidyā', deva: 'दशमहाविद्या', desc: 'The ten aspects of cosmic knowledge manifested as ten distinct forms of the Goddess (e.g. Kālī, Tārā, Sundarī).' }
    ],
    explanation: [
      'Śākta Tantra (or Āgama) centers on the worship of Śakti, the Goddess, as the dynamic, supreme reality. It teaches that the universe is the self-projection of the Goddess, and that the material world is not an illusion to be escaped, but a manifestation of divine energy.',
      'The tradition is deeply experiential, relying on the triad of Mantra (sacred sound), Yantra (geometric diagrams), and Mudrā (ritual gestures). Its primary visual representation is the Śrī-cakra—a map of both the human body and the universe—while its primary energetic practice is Kundalinī-Yoga, which seeks to merge individual energy with cosmic consciousness at the crown of the head.'
    ],
    verse: {
      deva: 'शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुम् ।\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि ॥',
      translit: 'śivaḥ śaktyā yukto yadi bhavati śaktaḥ prabhavitum |\nna cedevaṃ devo na khalu kuśalaḥ spanditumapi ||',
      trans: 'Śiva, only when joined with Śakti, is able to create. Otherwise, the Lord is not even able to stir or vibrate.',
      cite: 'Saundarya-laharī · 1'
    }
  }
};
