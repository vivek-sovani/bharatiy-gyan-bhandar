// Core concepts of the Indian knowledge systems.
// All copy is original synthesis intended for an educational platform.

export type ConceptDetail = {
  intro: string;          // expanded opening
  aspects: string[];      // key aspects, one per line
  significance: string;   // why it matters / where it leads
  origin?: ConceptSource;        // where the concept is first explained
  references?: ConceptSource[];  // where it is further developed / referred to
};

// A pointer into the collection — where a concept is explained or referenced.
export type ConceptSource = {
  label: string;      // section / text name
  href: string;       // link to the relevant section
  explainer?: string; // prose description of how the concept is stated / used here
};

export type Concept = {
  id: string;
  name: string;        // Roman / IAST
  deva: string;        // Devanāgarī
  seal: string;        // 1–2 Devanāgarī characters for the medallion
  gloss: string;       // one-line meaning (Roman)
  glossDeva: string;
  domain: 'order' | 'ethics' | 'liberation' | 'mind' | 'knowledge' | 'heterodox' | 'aesthetics';
  source: string;      // textual home (Roman)
  sourceDeva: string;
  blurb: string;       // card text
  tags: string[];      // related terms / short tags
  href?: string;       // optional link to a related section
  detail?: ConceptDetail;
};

export const CONCEPTS: Concept[] = [
  // ───────────────────────── Cosmic & metaphysical order ──────────────────────
  {
    id: 'rta',
    name: 'Ṛta',
    deva: 'ऋत',
    seal: 'ऋ',
    gloss: 'Cosmic order',
    glossDeva: 'वैश्विक ऋतनियम',
    domain: 'order',
    source: 'Ṛgveda',
    sourceDeva: 'ऋग्वेद',
    blurb: 'The impersonal order by which the cosmos runs true — the rhythm that turns the seasons and makes the sacrifice effective. The Vedic seed from which dharma grows.',
    tags: ['Order', 'Truth', 'Cosmos'],
    href: '/vedas/',
    detail: {
      intro:
        'Ṛta is the oldest organising idea of the Vedic vision — the deep regularity by which the sun rises, the rivers flow and the year wheels through its seasons. It is at once natural law, ritual correctness and moral truth, held together as a single order.',
      aspects: [
        'Names the cosmic order that even the gods serve rather than command; Varuṇa is its guardian (gopā ṛtasya).',
        'Binds together the physical regularity of nature, the precision of ritual and the rightness of conduct.',
        'Its opposite is anṛta — falsehood, chaos, the violation of order.',
      ],
      significance:
        'Ṛta is the conceptual ancestor of dharma: as the tradition turns from cosmos to conduct, the cosmic order of ṛta becomes the lived order of dharma.',
      origin: {
        label: 'Ṛgveda',
        href: '/vedas/',
        explainer:
          'Ṛta pervades the Ṛgveda as its deepest organising principle — the word appears over 300 times across the hymns. The sun travels "the path of ṛta," the dawn rises by it, the rivers flow in its track and the seasons turn by its rhythm. Varuṇa, the great sovereign god, holds the epithet gopā ṛtasya — guardian of ṛta. The sacrifice is effective only when performed in strict alignment with ṛta; any deviation is anṛta — falsehood, disorder, a transgression against the cosmic compact. Ṛta thus fuses the regularity of nature, the precision of ritual and the rightness of moral conduct into a single, undivided order.',
      },
      references: [
        {
          label: 'Upaniṣads',
          href: '/upanishads/',
          explainer:
            'As the tradition turns from cosmic speculation to inner inquiry, ṛta recedes as a central term but its substance is absorbed and transformed. The Taittirīya Upaniṣad enjoins "satyam vada, dharmaṃ cara" — speak truth, walk in dharma — showing how ṛta has bifurcated into its two heirs: satya takes on its moral-verbal face, dharma its normative-conduct face. The Bṛhadāraṇyaka then identifies brahman itself with satya: "satyam brahma" — the cosmic regularity that was ṛta is now disclosed as the very nature of ultimate reality, carrying ṛta\'s cosmological weight into the metaphysics of the Absolute.',
        },
        {
          label: 'Darśanas (Mīmāṃsā)',
          href: '/darshanas/',
          explainer:
            'Mīmāṃsā inherits the ritual face of ṛta most directly. Jaimini holds that the Veda is self-authoritative and that the sacrifice, when correctly and precisely performed, generates an unseen potency (apūrva) that inevitably produces its fruit. This conviction — that correctly ordered ritual action aligns the human sphere with the moral structure of the cosmos — is the philosophical heir of the Vedic insight that the universe runs by ṛta. For Mīmāṃsā, the Vedic injunctions are not commands from a deity but the articulation of a timeless cosmic order; to follow them is to participate in ṛta.',
        },
      ],
    },
  },
  {
    id: 'satya',
    name: 'Satya',
    deva: 'सत्य',
    seal: 'स',
    gloss: 'Truth · being',
    glossDeva: 'सत्य · अस्तित्व',
    domain: 'order',
    source: 'Upaniṣads',
    sourceDeva: 'उपनिषदे',
    blurb: '"That which is." Truth understood not merely as correct speech but as alignment with reality itself — the moral face of the cosmic order.',
    tags: ['Truth', 'Being', 'Reality'],
    href: '/upanishads/',
    detail: {
      intro:
        'Satya is truth in the fullest sense — derived from sat, "that which is," it means being, reality and truthfulness at once. To speak satya is to be in accord with what genuinely is.',
      aspects: [
        'Unites the ethical (truthful speech) and the metaphysical (the real) in a single word.',
        'Paired with ṛta in the Vedas as the moral correlate of cosmic order.',
        'Becomes a vow and a discipline — satya as one of the great ethical restraints (yamas).',
      ],
      significance:
        'The motto satyam eva jayate ("truth alone triumphs"), drawn from the Muṇḍaka Upaniṣad, became the emblem of the modern Indian republic — the concept carried into national life.',
      origin: {
        label: 'Ṛgveda (with ṛta)',
        href: '/vedas/',
        explainer:
          'In the Ṛgveda, satya appears most characteristically beside ṛta — "ṛtaṃ ca satyaṃ ca" (cosmic order and truth) is a recurring pairing in hymns invoking the great order of things. Satya here is the moral and verbal face of ṛta: while ṛta is the objective cosmic regularity, satya is the truthful speech and action that aligns the human person with it. To speak satya is not merely to state facts but to be in accord with the real order of things — a mode of participation in the cosmic. False speech (anṛta) is not merely wrong but a transgression against the order of the world itself.',
      },
      references: [
        {
          label: 'Upaniṣads (Muṇḍaka)',
          href: '/upanishads/',
          explainer:
            'The Upaniṣads deepen satya from ethics into metaphysics. The Chāndogya grounds the great teaching tat tvam asi in sat, pure being — "in the beginning this was sat alone, one only without a second" — making satya the ontological foundation of all existence. The Bṛhadāraṇyaka declares "satyam brahma": brahman, the ultimate reality, is truth. The Muṇḍaka then supplies the phrase that carried the concept into national life — "satyam eva jayate nānṛtam," truth alone triumphs, not untruth — framing satya as the very force that ultimately prevails in the order of things.',
        },
        {
          label: 'Darśanas (Yoga · the yamas)',
          href: '/darshanas/',
          explainer:
            'Patañjali lists satya as the second of the five great yamas — the ethical foundations of the entire yogic path, binding on all regardless of caste, place or time. His sūtra states: "satya-pratiṣṭhāyāṃ kriyā-phala-āśrayatvam" — when one is truly established in truthfulness, actions and their fruits follow with complete fidelity, and causality becomes transparent to the yogi. The Yoga tradition treats satya not as a rule to be obeyed but as a sādhana (discipline) whose sustained practice re-tunes the practitioner\'s consciousness to the texture of reality itself — the ethical commitment and the metaphysical insight made one.',
        },
      ],
    },
  },
  {
    id: 'brahman',
    name: 'Brahman',
    deva: 'ब्रह्मन्',
    seal: 'ब्र',
    gloss: 'Ultimate reality',
    glossDeva: 'परम तत्त्व',
    domain: 'order',
    source: 'Upaniṣads · Vedānta',
    sourceDeva: 'उपनिषदे · वेदान्त',
    blurb: 'The one unconditioned reality underlying and pervading everything — beyond name and form, yet the ground of all that appears.',
    tags: ['Absolute', 'Sat-cit-ānanda', 'Vedānta'],
    href: '/darshanas/',
    detail: {
      intro:
        'Brahman is the central concept of the Upaniṣads and of Vedānta — the single, infinite, unconditioned reality that is the ground and source of everything. It is described as sat-cit-ānanda: being, consciousness and bliss.',
      aspects: [
        'Approached by negation (neti neti, "not this, not this") because it exceeds every category.',
        'Distinguished as nirguṇa (without attributes) and saguṇa (with attributes, as Īśvara).',
        'The schools of Vedānta differ chiefly on how the world and the self relate to Brahman.',
      ],
      significance:
        'The Upaniṣadic equation ātman = brahman — that the innermost self is identical with the ultimate reality — is the high point of Indian metaphysics and the pivot of the whole Vedānta tradition.',
      origin: { label: 'Upaniṣads', href: '/upanishads/' },
      references: [
        { label: 'Darśanas (Vedānta)', href: '/darshanas/' },
        { label: 'Itihāsa (Bhagavad-Gītā)', href: '/itihasa/' },
      ],
    },
  },
  {
    id: 'atman',
    name: 'Ātman',
    deva: 'आत्मन्',
    seal: 'आ',
    gloss: 'The self',
    glossDeva: 'आत्मा',
    domain: 'order',
    source: 'Upaniṣads',
    sourceDeva: 'उपनिषदे',
    blurb: 'The true self — not the body, mind or personality, but the witnessing consciousness that underlies them. In Vedānta, identical with Brahman.',
    tags: ['Self', 'Consciousness', 'Witness'],
    href: '/upanishads/',
    detail: {
      intro:
        'Ātman is the real self — distinguished sharply from body, senses, mind and ego, all of which it silently witnesses. The Upaniṣadic quest is to discover what the self ultimately is.',
      aspects: [
        'Reached by stripping away everything one is not — "the seer of seeing, the hearer of hearing."',
        'In Advaita, wholly identical with Brahman; in Viśiṣṭādvaita and Dvaita, real but dependent on God.',
        'Self-knowledge (ātma-jñāna) is held to be liberating, not merely informative.',
      ],
      significance:
        'The mahāvākyas ("great sayings") — tat tvam asi ("that thou art"), ahaṃ brahmāsmi ("I am Brahman") — compress the entire teaching: to know the self is to know the Absolute.',
      origin: { label: 'Upaniṣads', href: '/upanishads/' },
      references: [
        { label: 'Darśanas (Vedānta · Sāṅkhya)', href: '/darshanas/' },
        { label: 'Nāstika Darśanas (anātman)', href: '/nastika-darshanas/' },
      ],
    },
  },
  {
    id: 'maya',
    name: 'Māyā',
    deva: 'माया',
    seal: 'मा',
    gloss: 'Appearance',
    glossDeva: 'आभास',
    domain: 'order',
    source: 'Vedānta',
    sourceDeva: 'वेदान्त',
    blurb: 'The creative power that projects the many out of the one — and, in Advaita, the appearance that veils the sole reality of Brahman.',
    tags: ['Appearance', 'Avidyā', 'Veiling'],
    href: '/darshanas/',
    detail: {
      intro:
        'Māyā is the power by which the one undivided reality appears as the manifold world of names and forms. In Advaita Vedānta it is what makes the rope look like a snake — a real appearance with no independent reality.',
      aspects: [
        'Has two functions: veiling the real (āvaraṇa) and projecting the apparent (vikṣepa).',
        'Closely linked to avidyā (ignorance) — the mistaking of appearance for reality.',
        'Not "mere illusion": the world is empirically real, but not ultimately so.',
      ],
      significance:
        'Māyā lets Advaita affirm both that Brahman alone is real and that the world we experience is not simply nothing — the bridge between the absolute and the everyday.',
      origin: { label: 'Upaniṣads (Śvetāśvatara)', href: '/upanishads/' },
      references: [
        { label: 'Darśanas (Advaita Vedānta)', href: '/darshanas/' },
      ],
    },
  },

  // ───────────────────────── Action, ethics & society ─────────────────────────
  {
    id: 'dharma',
    name: 'Dharma',
    deva: 'धर्म',
    seal: 'ध',
    gloss: 'That which upholds',
    glossDeva: 'धारण करणारे',
    domain: 'ethics',
    source: 'Pan-Indic',
    sourceDeva: 'सर्वव्यापी',
    blurb: 'Duty, law, righteousness, the right way of being — the principle that holds individuals, society and cosmos in their proper order.',
    tags: ['Duty', 'Law', 'Righteousness'],
    href: '/darshanas/',
    detail: {
      intro:
        'Dharma — from the root dhṛ, "to hold" — is that which upholds and sustains: the order proper to each thing and each person. It ranges from cosmic law to social duty to individual virtue, and resists any single translation.',
      aspects: [
        'Sva-dharma: the duty proper to one\'s own nature and station, central to the Bhagavad-Gītā.',
        'Sanātana-dharma: the eternal, universal order; and yuga-dharma, the duty fitted to the age.',
        'The first and governing aim among the four puruṣārthas.',
      ],
      significance:
        'Dharma is the ethical heir of Vedic ṛta — the cosmic order turned into a way of living. It remains the central organising idea of Hindu, Buddhist (dhamma) and Jaina ethics alike.',
      origin: { label: 'Vedas (ṛta → dharman)', href: '/vedas/' },
      references: [
        { label: 'Itihāsa (Bhagavad-Gītā)', href: '/itihasa/' },
        { label: 'Darśanas (Mīmāṃsā)', href: '/darshanas/' },
      ],
    },
  },
  {
    id: 'karma',
    name: 'Karma',
    deva: 'कर्म',
    seal: 'क',
    gloss: 'Action & consequence',
    glossDeva: 'कर्म व परिणाम',
    domain: 'ethics',
    source: 'Pan-Indic',
    sourceDeva: 'सर्वव्यापी',
    blurb: 'Action and its fruit. Every deed leaves a trace that ripens into consequence — the moral law that binds the cycle of rebirth.',
    tags: ['Action', 'Cause & effect', 'Rebirth'],
    href: '/upanishads/',
    detail: {
      intro:
        'Karma means action — and the principle that every action bears fruit, sooner or later, for the one who does it. It is the moral mechanism that links conduct in one life to circumstance in the next.',
      aspects: [
        'Distinguished into sañcita (accumulated), prārabdha (now ripening) and āgāmi (being made).',
        'It is the intention behind the act, not merely the act, that binds.',
        'The Gītā teaches niṣkāma-karma — acting without attachment to the fruit — as the way to act without binding.',
      ],
      significance:
        'Karma joined to rebirth gives the Indian traditions their account of justice and inequality across lives, and frames the whole problem that liberation (mokṣa) is meant to solve.',
      origin: { label: 'Upaniṣads (Bṛhadāraṇyaka)', href: '/upanishads/' },
      references: [
        { label: 'Itihāsa (Bhagavad-Gītā)', href: '/itihasa/' },
        { label: 'Darśanas (Mīmāṃsā · Yoga)', href: '/darshanas/' },
        { label: 'Nāstika Darśanas', href: '/nastika-darshanas/' },
      ],
    },
  },
  {
    id: 'purusharthas',
    name: 'Puruṣārtha',
    deva: 'पुरुषार्थ',
    seal: 'पु',
    gloss: 'The four aims of life',
    glossDeva: 'चार पुरुषार्थ',
    domain: 'ethics',
    source: 'Dharma-śāstra',
    sourceDeva: 'धर्मशास्त्र',
    blurb: 'The four legitimate goals of a human life — dharma, artha, kāma and mokṣa — held in balance rather than opposition.',
    tags: ['Dharma', 'Artha', 'Kāma', 'Mokṣa'],
    href: '/darshanas/',
    detail: {
      intro:
        'The puruṣārthas are the four proper aims of human life, a framework that refuses to set the worldly and the spiritual against each other. A full life pursues all four, each in its place.',
      aspects: [
        'Dharma (duty/righteousness) governs and conditions the rest.',
        'Artha (prosperity, power) and kāma (pleasure, love) are legitimate, pursued within dharma.',
        'Mokṣa (liberation) is the highest aim, to which the other three are ultimately ordered.',
      ],
      significance:
        'The scheme gives Indian thought a strikingly balanced ethics: material success and pleasure are affirmed, not denied — but framed by duty and crowned by liberation.',
      origin: { label: 'Darśanas · Dharma-śāstra', href: '/darshanas/' },
      references: [
        { label: 'Itihāsa (Mahābhārata)', href: '/itihasa/' },
      ],
    },
  },

  // ───────────────────────── Bondage & liberation ─────────────────────────────
  {
    id: 'samsara',
    name: 'Saṃsāra',
    deva: 'संसार',
    seal: 'सं',
    gloss: 'The cycle of rebirth',
    glossDeva: 'जन्म-मृत्यू चक्र',
    domain: 'liberation',
    source: 'Pan-Indic',
    sourceDeva: 'सर्वव्यापी',
    blurb: 'The beginningless round of birth, death and rebirth, driven by karma and desire — the condition from which liberation is sought.',
    tags: ['Rebirth', 'Bondage', 'Wandering'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Saṃsāra — literally "wandering through" — is the endless cycle of birth, death and rebirth in which beings are caught. Driven by karma and craving, it is the default condition of unliberated existence.',
      aspects: [
        'Kept turning by karma and by the desire and ignorance that motivate action.',
        'Shared, with variations, across Hindu, Buddhist, Jaina and Sikh thought.',
        'Marked by repeated suffering (duḥkha) and impermanence, however pleasant any single life.',
      ],
      significance:
        'Saṃsāra is the problem to which mokṣa is the answer; nearly every Indian path defines itself by how it proposes to bring the wandering to an end.',
      origin: { label: 'Upaniṣads (Bṛhadāraṇyaka)', href: '/upanishads/' },
      references: [
        { label: 'Nāstika Darśanas (Bauddha · Jaina)', href: '/nastika-darshanas/' },
        { label: 'Itihāsa (Bhagavad-Gītā)', href: '/itihasa/' },
      ],
    },
  },
  {
    id: 'moksha',
    name: 'Mokṣa',
    deva: 'मोक्ष',
    seal: 'मो',
    gloss: 'Liberation',
    glossDeva: 'मुक्ती',
    domain: 'liberation',
    source: 'Vedānta · Yoga',
    sourceDeva: 'वेदान्त · योग',
    blurb: 'Release from the cycle of rebirth and from all bondage — the highest of the four aims, variously understood as union, knowledge or freedom.',
    tags: ['Liberation', 'Freedom', 'Mukti'],
    href: '/darshanas/',
    detail: {
      intro:
        'Mokṣa is final liberation — release from saṃsāra, from karma and from the ignorance that binds. It is the highest of the puruṣārthas and the goal toward which the spiritual disciplines are directed.',
      aspects: [
        'Understood differently by each school: as identity with Brahman, as loving union with God, or as the soul\'s isolation in its own nature (kaivalya).',
        'May be attained while still living — jīvanmukti, liberation in this life.',
        'Reached by paths of knowledge (jñāna), devotion (bhakti) or action (karma), often combined.',
      ],
      significance:
        'Mokṣa is the orienting horizon of Indian spirituality — the point at which the long account of karma, rebirth and bondage is finally cancelled.',
      origin: { label: 'Upaniṣads', href: '/upanishads/' },
      references: [
        { label: 'Darśanas (Vedānta · Yoga · Sāṅkhya)', href: '/darshanas/' },
        { label: 'Itihāsa (Bhagavad-Gītā)', href: '/itihasa/' },
      ],
    },
  },
  {
    id: 'yoga',
    name: 'Yoga',
    deva: 'योग',
    seal: 'यो',
    gloss: 'Disciplined union',
    glossDeva: 'साधना · योग',
    domain: 'liberation',
    source: 'Yoga · Gītā',
    sourceDeva: 'योग · गीता',
    blurb: 'Disciplined practice that "yokes" mind and body toward liberation — both a specific darśana and a family of paths: jñāna, bhakti, karma.',
    tags: ['Discipline', 'Union', 'Practice'],
    href: '/darshanas/',
    detail: {
      intro:
        'Yoga, from the root yuj ("to yoke, to join"), is disciplined practice aimed at stilling the mind and reaching liberation. It names both Patañjali\'s specific school and, more broadly, the methods by which any path is walked.',
      aspects: [
        'Patañjali defines it as citta-vṛtti-nirodha — the stilling of the modifications of the mind — and lays out the eight limbs (aṣṭāṅga).',
        'The Gītā distinguishes karma-yoga (action), bhakti-yoga (devotion) and jñāna-yoga (knowledge).',
        'Integrates ethics, posture, breath and meditation into a single graded discipline.',
      ],
      significance:
        'Yoga is the practical engine of the tradition — the how to the what of liberation — and the single Indic concept most fully adopted by the modern world.',
    },
  },

  // ───────────────────────── Mind, matter & cosmos ────────────────────────────
  {
    id: 'purusha-prakriti',
    name: 'Puruṣa & Prakṛti',
    deva: 'पुरुष · प्रकृति',
    seal: 'पुप्र',
    gloss: 'Consciousness & matter',
    glossDeva: 'चैतन्य व प्रकृती',
    domain: 'mind',
    source: 'Sāṅkhya',
    sourceDeva: 'सांख्य',
    blurb: 'The fundamental duality of Sāṅkhya: puruṣa, pure witnessing consciousness, and prakṛti, the active principle of matter from which the world unfolds.',
    tags: ['Consciousness', 'Matter', 'Dualism'],
    href: '/darshanas/',
    detail: {
      intro:
        'Sāṅkhya analyses existence into two irreducible principles: puruṣa, pure inactive consciousness, and prakṛti, the dynamic root of all matter and mind. Their apparent entanglement is the cause of bondage.',
      aspects: [
        'Puruṣa is the silent witness; prakṛti does all the doing, evolving into intellect, ego, mind, senses and elements.',
        'Liberation comes from discriminating the two — seeing that the witness is never truly bound.',
        'This vocabulary is borrowed by Yoga, Āyurveda, the Gītā and much of later thought.',
      ],
      significance:
        'The puruṣa–prakṛti analysis is the substructure beneath a vast amount of Indian thought; even schools that reject its dualism reason in its terms.',
    },
  },
  {
    id: 'triguna',
    name: 'Triguṇa',
    deva: 'त्रिगुण',
    seal: 'त्रि',
    gloss: 'The three strands',
    glossDeva: 'तीन गुण',
    domain: 'mind',
    source: 'Sāṅkhya · Gītā',
    sourceDeva: 'सांख्य · गीता',
    blurb: 'The three qualities woven through all of nature — sattva (clarity), rajas (activity) and tamas (inertia) — whose shifting balance shapes everything.',
    tags: ['Sattva', 'Rajas', 'Tamas'],
    href: '/darshanas/',
    detail: {
      intro:
        'The three guṇas are the constituent strands of prakṛti, present in everything in differing proportions. Their ever-shifting balance accounts for the whole variety of nature, mind and character.',
      aspects: [
        'Sattva — lightness, clarity, harmony; rajas — energy, passion, motion; tamas — heaviness, inertia, darkness.',
        'Every object, food, action and temperament is classified by its dominant guṇa.',
        'The Gītā maps the guṇas onto conduct, knowledge and even kinds of faith.',
      ],
      significance:
        'The triguṇa scheme gives Indian thought a supple psychology and ethics of character, and underlies Āyurvedic and dietary classification to this day.',
    },
  },
  {
    id: 'panchamahabhuta',
    name: 'Pañca-mahābhūta',
    deva: 'पञ्चमहाभूत',
    seal: 'पं',
    gloss: 'The five elements',
    glossDeva: 'पाच महाभूते',
    domain: 'mind',
    source: 'Sāṅkhya · Āyurveda',
    sourceDeva: 'सांख्य · आयुर्वेद',
    blurb: 'The five gross elements — earth, water, fire, air and ether — from which the physical world and the body are composed.',
    tags: ['Earth', 'Water', 'Fire', 'Air', 'Ether'],
    href: '/upavedas/',
    detail: {
      intro:
        'The pañca-mahābhūta are the five gross elements that make up the material world: pṛthvī (earth), āpas (water), tejas/agni (fire), vāyu (air) and ākāśa (ether/space). Each is tied to a sense and a quality.',
      aspects: [
        'Each element pairs with a sense-faculty — ether/hearing, air/touch, fire/sight, water/taste, earth/smell.',
        'They evolve, in Sāṅkhya cosmology, from subtle essences (tanmātras).',
        'Āyurveda builds the three doṣas (vāta, pitta, kapha) from combinations of these elements.',
      ],
      significance:
        'The five-element scheme is the shared physics of Indian medicine, cosmology and even architecture (vāstu) — the building blocks of the manifest world.',
    },
  },
  {
    id: 'kala-yuga',
    name: 'Kāla & Yuga',
    deva: 'काल · युग',
    seal: 'का',
    gloss: 'Time & the cosmic ages',
    glossDeva: 'काल व युगचक्र',
    domain: 'mind',
    source: 'Purāṇas · Jyotiṣa',
    sourceDeva: 'पुराणे · ज्योतिष',
    blurb: 'Time as a vast cyclic order — the four yugas turning within ever-larger kalpas, in which the cosmos is repeatedly created and dissolved.',
    tags: ['Time', 'Yuga', 'Cycles'],
    href: '/puranas/',
    detail: {
      intro:
        'Indian cosmology conceives time (kāla) not as a straight line but as immense repeating cycles. The four yugas — Kṛta, Tretā, Dvāpara and Kali — succeed one another in a long decline, and the whole sequence repeats without end.',
      aspects: [
        'The four yugas form a mahāyuga; a thousand mahāyugas make a kalpa, "a day of Brahmā."',
        'Each yuga shows a progressive decline of dharma, from the perfect Kṛta age to our own Kali age.',
        'Creation and dissolution (sṛṣṭi and pralaya) recur endlessly within this cyclic time.',
      ],
      significance:
        'Cyclic time gives Indian thought its characteristic vastness of scale and its sense that decline is not final — every Kali age is followed by renewal.',
    },
  },

  // ───────────────────────── Knowledge & epistemology ─────────────────────────
  {
    id: 'pramana',
    name: 'Pramāṇa',
    deva: 'प्रमाण',
    seal: 'प्र',
    gloss: 'Means of valid knowledge',
    glossDeva: 'ज्ञानाची प्रमाणे',
    domain: 'knowledge',
    source: 'Nyāya · all darśanas',
    sourceDeva: 'न्याय · सर्व दर्शने',
    blurb: 'The valid means by which knowledge is acquired — perception, inference, comparison, testimony — the shared toolkit of Indian philosophy.',
    tags: ['Pratyakṣa', 'Anumāna', 'Śabda'],
    href: '/darshanas/',
    detail: {
      intro:
        'A pramāṇa is a valid source or instrument of knowledge. The question "how do we know?" was so central to Indian philosophy that schools were largely defined by which pramāṇas they accepted.',
      aspects: [
        'The most widely accepted: pratyakṣa (perception), anumāna (inference), upamāna (comparison) and śabda (reliable testimony).',
        'Nyāya accepts four; Sāṅkhya three; Cārvāka admits perception alone.',
        'Each pramāṇa was analysed minutely — the structure of inference, the conditions of valid testimony, the sources of error.',
      ],
      significance:
        'Pramāṇa theory made Indian philosophy rigorously self-critical: no claim stood without an account of how it could be known, the discipline every school had to master to debate at all.',
    },
  },

  // ───────────────────────── Heterodox concepts (Bauddha & Jaina) ─────────────
  {
    id: 'duhkha',
    name: 'Duḥkha',
    deva: 'दुःख',
    seal: 'दुः',
    gloss: 'Suffering · unease',
    glossDeva: 'दुःख',
    domain: 'heterodox',
    source: 'Bauddha darśana',
    sourceDeva: 'बौद्ध दर्शन',
    blurb: 'The pervasive unsatisfactoriness of conditioned existence — the first of the Buddha\'s Four Noble Truths and the starting point of his diagnosis.',
    tags: ['Suffering', 'Four Truths', 'Buddhism'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Duḥkha is the first of the Buddha\'s Four Noble Truths — the recognition that conditioned existence is shot through with unsatisfactoriness, from outright pain to the subtle unease of impermanence.',
      aspects: [
        'Includes obvious pain, the suffering of change, and the deep unease built into all conditioned things.',
        'Its cause is identified as craving (tṛṣṇā/taṇhā); its cessation is nirvāṇa.',
        'The Four Noble Truths form a medical structure: diagnosis, cause, prognosis, cure.',
      ],
      significance:
        'Duḥkha sets the whole Buddhist project in motion — a clear-eyed naming of the problem that the Eightfold Path is designed to dissolve.',
    },
  },
  {
    id: 'anatman',
    name: 'Anātman',
    deva: 'अनात्मन्',
    seal: 'अन्',
    gloss: 'No-self',
    glossDeva: 'अनात्म',
    domain: 'heterodox',
    source: 'Bauddha darśana',
    sourceDeva: 'बौद्ध दर्शन',
    blurb: 'The Buddhist denial of a permanent, unchanging self — the person is a stream of momentary processes, not an abiding soul.',
    tags: ['No-self', 'Anattā', 'Process'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Anātman (Pali anattā) is the Buddhist teaching that there is no permanent, independent self or soul. What we call a person is a bundle of ever-changing physical and mental processes (the five skandhas).',
      aspects: [
        'Directly opposes the Upaniṣadic ātman as an abiding essence.',
        'The "self" is a useful convention, not an ultimate entity — a stream, not a thing.',
        'Grasping at a fixed self is held to be a root cause of suffering.',
      ],
      significance:
        'Anātman is the most distinctive Buddhist contribution to Indian thought, and the sharpest of its disagreements with the Vedāntic tradition over the nature of the self.',
    },
  },
  {
    id: 'pratityasamutpada',
    name: 'Pratītya-samutpāda',
    deva: 'प्रतीत्यसमुत्पाद',
    seal: 'प्र',
    gloss: 'Dependent origination',
    glossDeva: 'प्रतीत्यसमुत्पाद',
    domain: 'heterodox',
    source: 'Bauddha darśana',
    sourceDeva: 'बौद्ध दर्शन',
    blurb: 'Nothing arises on its own: everything comes to be in dependence on conditions. The Buddhist account of causation and the basis of no-self and emptiness.',
    tags: ['Dependence', 'Causation', 'Conditioning'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Pratītya-samutpāda — "dependent arising" — is the Buddhist principle that everything comes into being in dependence on causes and conditions, and nothing exists independently or in its own right.',
      aspects: [
        'Stated as: "when this is, that is; from the arising of this, that arises."',
        'Spelled out in the twelve-linked chain (nidānas) that traces how suffering is conditioned, from ignorance to old age and death.',
        'Grounds both anātman and, in Madhyamaka, śūnyatā.',
      ],
      significance:
        'Dependent origination is the philosophical heart of Buddhism — a middle way between "things exist absolutely" and "nothing exists," reframing reality as a web of conditions.',
    },
  },
  {
    id: 'shunyata',
    name: 'Śūnyatā',
    deva: 'शून्यता',
    seal: 'शू',
    gloss: 'Emptiness',
    glossDeva: 'शून्यता',
    domain: 'heterodox',
    source: 'Madhyamaka',
    sourceDeva: 'माध्यमिक',
    blurb: 'Nāgārjuna\'s teaching that all things are empty of inherent, independent existence — empty precisely because they arise dependently.',
    tags: ['Emptiness', 'Nāgārjuna', 'Mahāyāna'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Śūnyatā, the central concept of Madhyamaka Buddhism, holds that all things are "empty" of svabhāva — of any fixed, independent, self-standing essence. To be empty is not to be nothing, but to exist only in dependence.',
      aspects: [
        'Follows from dependent origination: what arises through conditions has no essence of its own.',
        'Nāgārjuna\'s dialectic empties every fixed position — including, reflexively, the view of emptiness itself.',
        'Paired with the doctrine of two truths: conventional and ultimate.',
      ],
      significance:
        'Śūnyatā became the philosophical core of Mahāyāna across Tibet, China and Japan — one of the most influential and rigorously argued ideas India produced.',
    },
  },
  {
    id: 'ahimsa',
    name: 'Ahiṃsā',
    deva: 'अहिंसा',
    seal: 'अ',
    gloss: 'Non-harm',
    glossDeva: 'अहिंसा',
    domain: 'heterodox',
    source: 'Jaina · pan-Indic',
    sourceDeva: 'जैन · सर्वव्यापी',
    blurb: 'The principle of non-violence toward all living beings — carried to its furthest reach in Jainism and made a political force by Gandhi.',
    tags: ['Non-violence', 'Compassion', 'Ethics'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Ahiṃsā is the principle of not harming any living being, in deed, word or thought. Shared across the Indian traditions, it is taken to its most uncompromising form in Jainism.',
      aspects: [
        'The first of the great vows (mahāvratas) in Jainism, extended even to the most minute forms of life.',
        'One of the yamas of Patañjali\'s yoga and a central virtue of dharma.',
        'Reinterpreted by Gandhi as satyāgraha — non-violence as an active political method.',
      ],
      significance:
        'Ahiṃsā is perhaps India\'s most influential ethical export: from Mahāvīra to Gandhi to the movements of King and Mandela, it became a force in world history.',
    },
  },
  {
    id: 'anekantavada',
    name: 'Anekāntavāda',
    deva: 'अनेकान्तवाद',
    seal: 'अने',
    gloss: 'Many-sidedness of truth',
    glossDeva: 'अनेकान्तवाद',
    domain: 'heterodox',
    source: 'Jaina darśana',
    sourceDeva: 'जैन दर्शन',
    blurb: 'The Jaina doctrine that reality is many-sided, and every claim true only from a particular standpoint — an epistemology of intellectual humility.',
    tags: ['Many-sidedness', 'Syādvāda', 'Perspective'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Anekāntavāda is the Jaina teaching that reality has many aspects, and that any single statement captures only one of them. Truth is therefore always conditional on the standpoint from which it is asserted.',
      aspects: [
        'Expressed logically as syādvāda — every assertion holds "in some respect" (syāt).',
        'Illustrated by the parable of the blind men and the elephant, each describing one part as the whole.',
        'A built-in corrective against dogmatism and one-sided assertion.',
      ],
      significance:
        'Anekāntavāda gave Indian thought its most rigorous philosophy of intellectual humility — a principled openness to the partial truth in rival positions.',
    },
  },

  // ───────────────────────── Aesthetics & language ────────────────────────────
  {
    id: 'rasa',
    name: 'Rasa',
    deva: 'रस',
    seal: 'र',
    gloss: 'Aesthetic essence',
    glossDeva: 'रससिद्धान्त',
    domain: 'aesthetics',
    source: 'Nāṭyaśāstra',
    sourceDeva: 'नाट्यशास्त्र',
    blurb: 'The "flavour" or distilled emotional essence that a work of art evokes in the cultivated audience — the central concept of Indian aesthetics.',
    tags: ['Aesthetics', 'Emotion', 'Art'],
    href: '/upavedas/',
    detail: {
      intro:
        'Rasa — literally "juice" or "flavour" — is the savoured emotional essence that a work of drama, poetry or music evokes. First set out by Bharata in the Nāṭyaśāstra, it is the organising idea of all Indian aesthetics.',
      aspects: [
        'Bharata names eight (later nine) rasas — the erotic, comic, pathetic, furious, heroic, fearful, disgustful, marvellous (and the peaceful).',
        'A durable emotion (sthāyi-bhāva) in the audience is raised, by the play of the work, into relishable rasa.',
        'Abhinavagupta gave it its deepest form: rasa as a self-luminous, impersonal delight akin to spiritual bliss.',
      ],
      significance:
        'Rasa theory underlies every classical Indian art — dance, drama, music and poetry — and remains the central category through which they are made and judged.',
    },
  },
  {
    id: 'dhvani',
    name: 'Dhvani',
    deva: 'ध्वनि',
    seal: 'ध्व',
    gloss: 'Poetic suggestion',
    glossDeva: 'ध्वनि · व्यंजना',
    domain: 'aesthetics',
    source: 'Sanskrit poetics',
    sourceDeva: 'संस्कृत काव्यशास्त्र',
    blurb: 'The power of suggestion — the unspoken meaning that resonates beyond the literal words. For its theorists, the very soul of poetry.',
    tags: ['Suggestion', 'Resonance', 'Poetics'],
    href: '/upavedas/',
    detail: {
      intro:
        'Dhvani is "suggestion" — the meaning a poem conveys beyond what its words literally state. Theorised by Ānandavardhana in the Dhvanyāloka, it locates the worth of poetry in what is implied rather than said.',
      aspects: [
        'Distinguishes the literal (vācya) from the suggested (vyaṅgya) meaning.',
        'The finest poetry is that in which the suggested sense, especially rasa, predominates.',
        'Defended and deepened by Abhinavagupta in his Locana commentary.',
      ],
      significance:
        'Dhvani theory made resonance, not statement, the measure of poetic excellence — one of the most sophisticated accounts of literary meaning in any premodern tradition.',
    },
  },
];

export const CONCEPT_DOMAINS = [
  'order',
  'ethics',
  'liberation',
  'mind',
  'knowledge',
  'heterodox',
  'aesthetics',
] as const;
