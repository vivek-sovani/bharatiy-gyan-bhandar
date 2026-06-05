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
  /** Optional cover image (filename under /public) shown as the tile banner. */
  image?: string;
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
      origin: {
        label: 'Upaniṣads',
        href: '/upanishads/',
        explainer:
          'The Upaniṣads approach brahman from multiple angles, none of which fully captures it — which is precisely the point. The Bṛhadāraṇyaka introduces it through negation: when pressed on the nature of the divine, Yājñavalkya works all answers down to one — brahman — defined only as neti neti, "not this, not this." The Chāndogya approaches from the other side: brahman is sat, pure being, "the subtle essence underlying all things," and the teaching culminates in tat tvam asi — that (brahman) thou art. The Taittirīya attempts a positive description: brahman is ānanda (bliss), the deepest sheath of the self. Together these texts establish brahman as simultaneously the ground of the cosmos and the ground of the self — and as identical with each other.',
      },
      references: [
        {
          label: 'Darśanas (Vedānta)',
          href: '/darshanas/',
          explainer:
            'The brahman of the Upaniṣads becomes the central problem of Vedānta — a school defined precisely as the inquiry into brahman (brahma-jijñāsā). The three great schools disagree most sharply on how brahman relates to world and self. Śaṅkara\'s Advaita holds brahman to be the sole reality: world and individual self are appearances produced by māyā; liberation is the recognition of identity with brahman. Rāmānuja\'s Viśiṣṭādvaita holds that brahman is real, the world is real, and selves are real — but selves and world exist as the body of brahman, qualifying it rather than standing apart from it. Madhva\'s Dvaita insists on an eternal distinction between brahman (as Viṣṇu) and everything else; devotion, not identity, is the path.',
        },
        {
          label: 'Itihāsa (Bhagavad-Gītā)',
          href: '/itihasa/',
          explainer:
            'The Gītā deploys brahman in several registers without forcing a single definition. Kṛṣṇa uses it as the impersonal absolute — the akṣara brahman, the imperishable — and speaks of "brahma-nirvāṇa," the peace that comes from union with brahman. He describes sacrifice as brahman offering into brahman within brahman. He also uses it as the ground of action: "consecrating all deeds to brahman" is the Gītā\'s formula for disinterested action. The Gītā holds the personal and impersonal together — brahman is real, Kṛṣṇa is real, and they are ultimately the same ground approached from different directions.',
        },
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
      origin: {
        label: 'Upaniṣads',
        href: '/upanishads/',
        explainer:
          'The Bṛhadāraṇyaka is the primary locus. Yājñavalkya, instructing his wife Maitreyī, strips away everything the self is not — body, breath, mind — until what remains is the pure witness who cannot itself be known as an object, and declares "ahaṃ brahmāsmi" — I am brahman. The Chāndogya gives the complementary approach: Uddālaka Āruṇi shows his son Śvetaketu, through examples of salt dissolved in water and the seed within a fig, that the subtle ātman pervades all things — and "tat tvam asi," that art thou. The Kaṭha Upaniṣad dramatises the teaching as Death (Yama) instructing Naciketa: the ātman is "subtler than the subtle, greater than the great," and it cannot be reached by learning or sharp intellect alone — only by the grace of what it itself is.',
      },
      references: [
        {
          label: 'Darśanas (Vedānta · Sāṅkhya)',
          href: '/darshanas/',
          explainer:
            'Vedānta takes the Upaniṣadic ātman as its central object. In Advaita, ātman and brahman are numerically identical — self-knowledge and knowledge of ultimate reality are the same act; avidyā (ignorance) is the only thing concealing what is already the case. Sāṅkhya, by contrast, posits many individual puruṣas (conscious witnesses) rather than one universal ātman; each puruṣa is distinct and eternally separate both from prakṛti and from other puruṣas. Liberation in Sāṅkhya is viveka — discriminative insight that sees the witness as always already free from all that prakṛti presents — not the recognition of identity with any Absolute. The contrast shows how different accounts of the self generate entirely different liberation-paths.',
        },
        {
          label: 'Nāstika Darśanas (anātman)',
          href: '/nastika-darshanas/',
          explainer:
            'The Buddhist teaching of anātman (Pali anattā) is the most direct philosophical challenge to the Upaniṣadic ātman. The Buddha analyses the person into five aggregates (skandhas) — form, feeling, perception, volition and consciousness — and shows that none of them is the self, nor is any combination. The "self" is a useful conventional label for a stream of momentary processes, not an abiding entity. This is not mere word-play: the conviction that there is a permanent self is, for Buddhism, a root cause of suffering, and the insight into non-self is the beginning of liberation — the precise reverse of the Upaniṣadic position, and the sharpest philosophical disagreement in the Indian tradition.',
        },
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
      origin: {
        label: 'Upaniṣads (Śvetāśvatara)',
        href: '/upanishads/',
        explainer:
          'The Śvetāśvatara Upaniṣad is the first text to use māyā in a philosophically systematic way. It declares "māyāṃ tu prakṛtiṃ vidyāt māyinaṃ tu maheśvaram" — know that prakṛti is māyā, and the lord is the possessor of māyā. Here māyā is the creative power of the supreme deity through which the world of appearance arises; it is not yet the full Advaita concept, but the crucial move is made: māyā links the supreme deity to the produced world, making the world neither fully real nor simply non-existent. Earlier Upaniṣads use māyā in the simpler sense of "magic" or "creative power" — it is the Śvetāśvatara that begins the technical transformation.',
      },
      references: [
        {
          label: 'Darśanas (Advaita Vedānta)',
          href: '/darshanas/',
          explainer:
            'Śaṅkara\'s Advaita gives māyā its definitive philosophical treatment. Māyā is the power by which brahman appears as the manifold world of names and forms — not a second reality alongside brahman, but brahman\'s inexplicable appearance-making capacity. Its two functions are āvaraṇa (veiling the real — concealing the knowledge that brahman alone is) and vikṣepa (projection — superimposing the apparent world on the undivided ground). The classic illustration is the rope mistaken for a snake in dim light: the snake has no independent existence, yet the fear it generates is experienced as fully real. The world stands to brahman as the snake to the rope — empirically real (vyāvahārika), not ultimately so (pāramārthika). Māyā is the hinge that allows Advaita to hold both levels of truth simultaneously without collapsing into either nihilism or naive realism.',
        },
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
      origin: {
        label: 'Vedas (ṛta → dharman)',
        href: '/vedas/',
        explainer:
          'In the Ṛgveda the word dharman (neuter) appears as an adjective meaning "supporting" or "holding in place" — the sustaining-function associated with the great gods, especially Varuṇa and Mitra. The later Vedic literature (Brāhmaṇas, Āraṇyakas) begins to shift toward dharma as a noun denoting right ritual order and correct religious procedure. The conceptual move is precise: the word inherits the content of ṛta — the order that upholds both nature and society — and applies it specifically to human obligation. By the time of the Dharma Sūtras, dharma has settled into its classical range: what one ought to do as a member of a particular community, station and stage of life.',
      },
      references: [
        {
          label: 'Itihāsa (Bhagavad-Gītā)',
          href: '/itihasa/',
          explainer:
            'The Gītā is where dharma receives its most intense philosophical treatment — because the epic makes it a crisis. Arjuna cannot determine the right action when his duty as a warrior (sva-dharma) conflicts with his duty to his family (kula-dharma). Kṛṣṇa\'s answer unfolds dharma from multiple angles: sva-dharma is the duty specific to one\'s own nature and station, and even an imperfectly performed sva-dharma is better than a para-dharma (another\'s duty) well done. But the deeper teaching goes further: action performed without egoic attachment to results — niṣkāma-karma — is itself the highest form of dharmic action. The Gītā holds sva-dharma as the form and non-attachment as the spirit of right action.',
        },
        {
          label: 'Darśanas (Mīmāṃsā)',
          href: '/darshanas/',
          explainer:
            'Mīmāṃsā makes dharma its central and defining subject — the school is in fact a systematic inquiry into what dharma is and how it can be validly known. Jaimini opens with the foundational question: "athāto dharma-jijñāsā" — now, therefore, the inquiry into dharma. His definition is terse: "codanā-lakṣaṇo \'rtho dharmaḥ" — dharma is the good characterised by Vedic injunction (codanā). Because dharma concerns what ought to be done rather than what is, it cannot be derived from observation or inference; only an eternal, self-authoritative Veda can reveal it. This is why Mīmāṃsā\'s entire metaphysics of an authorless, eternal Veda follows: only such a text could be the valid source of moral obligation.',
        },
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
      origin: {
        label: 'Upaniṣads (Bṛhadāraṇyaka)',
        href: '/upanishads/',
        explainer:
          'The Bṛhadāraṇyaka Upaniṣad gives karma its first systematic statement. Yājñavalkya teaches: "as one acts, as one conducts oneself, so one becomes — the doer of good becomes good, the doer of evil becomes evil." This moral principle is then joined to rebirth: the self travels after death by a path determined by the residue of its deeds — those of good conduct rise to good births, those of harmful conduct to bad ones. The Chāndogya Upaniṣad develops the same link through a different image: pleasant conduct leads to a pleasant womb (a brahmin\'s, kṣatriya\'s or vaiśya\'s), foul conduct to a foul womb. Here, for the first time, karma and rebirth are explicitly connected into the single mechanism that will define Indian soteriology.',
      },
      references: [
        {
          label: 'Itihāsa (Bhagavad-Gītā)',
          href: '/itihasa/',
          explainer:
            'The Gītā transforms the karma doctrine from a mechanism of bondage into a path of liberation. The problem karma poses is acute: every action leaves a residue that binds the actor to its consequences. Kṛṣṇa\'s answer is niṣkāma-karma — action without desire for its fruits: "you have a right to perform your duties, but you are not entitled to the fruits of your actions; let not the fruits of action be your motive, nor let attachment to inaction be yours" (2.47). The actor does not cease acting — that is impossible — but acts as an instrument of the universal order, consecrating every deed to Kṛṣṇa, so that no residue accumulates. Karma-yoga thus reframes the doctrine: not an iron causal law to be escaped, but a daily discipline to be mastered.',
        },
        {
          label: 'Darśanas (Mīmāṃsā · Yoga)',
          href: '/darshanas/',
          explainer:
            'Mīmāṃsā and Yoga address karma from opposite angles. Mīmāṃsā is concerned with the karma of sacrifice: the prescribed ritual action generates apūrva — an unseen potency — that ripens into the promised fruit across time, even across lifetimes, independently of any deity\'s will; the causal chain is inexorable. Yoga, following Patañjali, analyses karma as cumulative conditioning: karmas have their roots in the afflictions (kleśas — ignorance, ego, attraction, aversion and the fear of death) and produce their effects in present and future lives. The eightfold yogic discipline both prevents new karma from forming and burns off accumulated karma through austerity (tapas), making Yoga a systematic technology for dismantling the karmic mechanism from the inside.',
        },
        {
          label: 'Nāstika Darśanas',
          href: '/nastika-darshanas/',
          explainer:
            'Both Buddhism and Jainism adopt karma as a central category but reshape it profoundly. Buddhism rejects a permanent self who accumulates karma, yet retains the principle: intentional action (cetanā) leaves dispositions (saṃskāras) that condition the next arising in the stream of experience. Karma is thus a feature of the process, not of an abiding agent. Jainism takes the most literal view: karma is a fine material substance that physically adheres to the soul (jīva) in proportion to the soul\'s passions, weighing it down and binding it to saṃsāra. Liberation requires simultaneously stopping new karma (saṃvara) and burning off accumulated karma (nirjarā) through austerity. The contrast with Vedāntic and Yogic accounts shows how deep a shared term\'s divergence can run.',
        },
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
      origin: {
        label: 'Darśanas · Dharma-śāstra',
        href: '/darshanas/',
        explainer:
          'The puruṣārtha framework does not appear fully formed in any single foundational text — it crystallises gradually across the Dharma Sūtras and Dharma Śāstras. The Āpastamba Dharma Sūtra already codifies the relation between dharma, artha and kāma; Kauṭilya\'s Arthaśāstra presupposes the framework when it insists on the legitimacy of artha and kāma within dharma. The term puruṣārtha ("the proper aim of the person") emerges as the tradition reflects on what a human life is for and finds not one answer but four, held in ordered relationship. By the time of Manu\'s Dharmaśāstra, the fourfold scheme is treated as foundational common ground, not a contested position.',
      },
      references: [
        {
          label: 'Itihāsa (Mahābhārata)',
          href: '/itihasa/',
          explainer:
            'The Mahābhārata is the richest literary exploration of the puruṣārthas in tension. The epic\'s central conflict is precisely a conflict between dharma and artha — legitimate power-pursuit — and the text explores every position on how they relate. The Śānti Parvan contains sustained philosophical discussions of all four aims, their priority and their conflicts; the Rājadharma sections explore how artha and kāma are to be pursued within dharmic limits for a king. The Gītā, embedded in the epic, crystallises the deepest difficulty: when sva-dharma conflicts with ahiṃsā (the desire to avoid harm), which aim takes precedence? The Mahābhārata refuses an easy answer — and that refusal is itself its teaching.',
        },
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
      origin: {
        label: 'Upaniṣads (Bṛhadāraṇyaka)',
        href: '/upanishads/',
        explainer:
          'Saṃsāra as a doctrine first receives systematic treatment in the Bṛhadāraṇyaka Upaniṣad. Yājñavalkya teaches the "two paths" after death: those with full knowledge travel the path of the gods (devayāna) to brahman and do not return; those who perform only ritual action go by the path of the ancestors (pitṛyāna) to the lunar world, exhaust their merit and return to earth to be reborn. The Chāndogya Upaniṣad develops this into a complete rebirth account: the soul returns through rain, enters the food chain, passes from male to female, and is born again — and the quality of that rebirth is determined by the conduct of the previous life. The key move: the beginningless cycle is made morally intelligible, its turning-mechanism identified as karma.',
      },
      references: [
        {
          label: 'Nāstika Darśanas (Bauddha · Jaina)',
          href: '/nastika-darshanas/',
          explainer:
            'Buddhism and Jainism take up saṃsāra and make it the central problem their paths are designed to solve. Buddhism names the driving force precisely: craving (tṛṣṇā) in three forms — for sensual pleasure, for existence and for non-existence — is what keeps rebirth turning. The twelve-linked chain of dependent origination traces exactly how ignorance conditions craving and craving conditions the next arising. Jainism maps saṃsāra onto the cosmic structure: the soul (jīva) bound by karma-matter cycles through all four classes of being — gods, humans, animals and hell-beings — in a vast circuit until, liberated, it rises on its own nature to the apex of the universe. Both traditions accept the structure of saṃsāra fully; they differ on what the mechanism is and how to stop it.',
        },
        {
          label: 'Itihāsa (Bhagavad-Gītā)',
          href: '/itihasa/',
          explainer:
            'The Gītā treats saṃsāra not as an abstract metaphysical backdrop but as the immediate stakes of every moment of consciousness. In chapter 8, Kṛṣṇa describes the two paths — the path of no return (through brahman) and the path of return (the cycle) — framing the entire spiritual enterprise as a fork that one\'s final thought at death determines. In chapter 9, he describes how those devoted to lesser goals return to them after death and thus to rebirth; only those who remember him at the moment of death reach him and do not return. Saṃsāra is thus not an impersonal mechanism but a direct consequence of what the practitioner truly loves — and can be broken by a shift in that deepest devotion.',
        },
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
      origin: {
        label: 'Upaniṣads',
        href: '/upanishads/',
        explainer:
          'Mokṣa as a named concept crystallises in the later Upaniṣads, but its content is established earlier. Yājñavalkya teaches Janaka in the Bṛhadāraṇyaka that the self, when fully known, is not born again — the doctrine in substance, before the canonical term arrives. The Kaṭha Upaniṣad names the goal as "mukti" and describes the liberated soul as freed from the mouth of death itself. The Muṇḍaka states it most compactly: "the knower of brahman becomes brahman" — liberation is not a reward for knowing but the very act of knowing, because what one truly is was never bound. By the time of the Gītā, mokṣa is the established fourth and highest puruṣārtha — the aim that gives the other three their final meaning.',
      },
      references: [
        {
          label: 'Darśanas (Vedānta · Yoga · Sāṅkhya)',
          href: '/darshanas/',
          explainer:
            'Each school describes mokṣa differently, and the differences are not merely verbal. For Advaita Vedānta, mokṣa is the recognition that one was never bound — not a change of state but the removal of the ignorance that made bondage seem real. For Patañjali\'s Yoga, it is kaivalya: the complete isolation of pure consciousness (puruṣa) from all that prakṛti presents, a stillness beyond all movement. For Rāmānuja\'s Viśiṣṭādvaita, liberation means dwelling in the presence of Nārāyaṇa — distinct from but in loving communion with the supreme, union without identity. For Buddhism, its cognate nirvāṇa is the cessation of craving and the extinction of the fuel that drives rebirth, not any positive metaphysical state. The divergences map precisely onto each school\'s account of what bondage is.',
        },
        {
          label: 'Itihāsa (Bhagavad-Gītā)',
          href: '/itihasa/',
          explainer:
            'The Gītā approaches mokṣa from every direction without reducing it to a single path. Chapter 18\'s declaration of the "highest secret" — sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja, "abandon all duties and take refuge in me alone; I shall free you from all sins" — presents the bhakti route to liberation in its most concentrated form. Elsewhere, Kṛṣṇa teaches jñāna-yoga (ch. 4), karma-yoga (ch. 3) and dhyāna-yoga (ch. 6) as parallel routes, each leading to the same end. His teaching is that the path should match the seeker\'s nature (svabhāva) — not one route but one destination, many roads.',
        },
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
      origin: {
        label: 'Upaniṣads (Kaṭha · Śvetāśvatara)',
        href: '/upanishads/',
        explainer:
          'Yoga as a disciplined inner practice appears in embryonic form in the Kaṭha Upaniṣad, where Yama tells Naciketa that the steady holding of the senses — called yoga — is the path by which the self is apprehended. The Śvetāśvatara Upaniṣad goes further and describes the practice in physical detail: sitting straight, holding the breath, controlling the senses, fixing the mind on brahman — recognisably the techniques that later become canonical. The Maitrī Upaniṣad explicitly names a sixfold yoga (ṣaḍaṅga-yoga) and frames it as the discipline by which the self is known. These are the earliest textual descriptions of meditation posture, breath-control and sensory withdrawal in the Upaniṣadic tradition.',
      },
      references: [
        {
          label: 'Darśanas (Yoga · Patañjali)',
          href: '/darshanas/',
          explainer:
            'Patañjali\'s Yoga Sūtras are the founding text of yoga as a philosophical system — one of the six āstika darśanas. His opening definition, "yogaś citta-vṛtti-nirodhaḥ" — yoga is the stilling of the modifications of the mind — sets the goal with precise economy. The eight limbs (aṣṭāṅga) form a complete programme: ethical restraint (yamas), personal observance (niyamas), posture (āsana), breath-regulation (prāṇāyāma), withdrawal of the senses (pratyāhāra), concentration (dhāraṇā), meditation (dhyāna) and complete absorption (samādhi). The Sūtras also provide a detailed psychology of the obstacles (kleśas), the structure of karma, and the nature of the mind — making this the most rigorously argued of the Indian liberation-paths and the framework within which virtually all later yoga-thought operates.',
        },
        {
          label: 'Itihāsa (Bhagavad-Gītā)',
          href: '/itihasa/',
          explainer:
            'The Gītā broadens the meaning of yoga decisively. Kṛṣṇa uses the word not for one specific technique but for any disciplined path walked with full inner commitment: karma-yoga (the yoga of action without attachment), jñāna-yoga (the yoga of liberating knowledge) and bhakti-yoga (the yoga of devotion). Chapter 6 describes the practice of meditation — sitting still, mind steadied on the self, breath controlled, neither too tense nor too slack — in terms that echo Patañjali without adopting his full system. Kṛṣṇa\'s culminating statement reorients the entire tradition: "a yogi is greater than the ascetic, greater than the man of knowledge, greater than the man of ritual action — therefore be a yogi." The Gītā moves yoga from the renunciant\'s forest to the centre of ordinary engaged life.',
        },
      ],
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
      origin: {
        label: 'Sāṅkhya (Sāṅkhya Kārikā)',
        href: '/darshanas/',
        explainer:
          'The puruṣa–prakṛti dualism is the foundational teaching of the Sāṅkhya darśana, and its earliest systematic exposition is the Sāṅkhya Kārikā of Īśvarakṛṣṇa. Its opening verse states the project: to overcome the three kinds of suffering (ādhyātmika, ādhibhautika and ādhidaivika — internal, external and cosmic). Its answer is discriminative knowledge (viveka-khyāti): seeing clearly that puruṣa, pure witnessing consciousness, is not prakṛti. The Kārikā then unfolds the twenty-five tattvas (principles of existence): from avyakta (unmanifest prakṛti), through buddhi, ahaṃkāra, the eleven sense-faculties, five subtle essences (tanmātras) and five gross elements — all of it the self-evolution of prakṛti, with puruṣa standing entirely apart as silent witness throughout.',
      },
      references: [
        {
          label: 'Darśanas (Yoga · Āyurveda) · Itihāsa (Bhagavad-Gītā)',
          href: '/darshanas/',
          explainer:
            'The puruṣa–prakṛti framework became the most widely borrowed conceptual inheritance in classical Indian thought. Patañjali\'s Yoga Sūtras adopt the entire Sāṅkhya cosmology and add a twenty-sixth principle — Īśvara, a special puruṣa untouched by afflictions — as the object of meditative devotion; liberation remains the full disentanglement of puruṣa from prakṛti. Āyurveda takes over the guṇa-analysis of prakṛti and builds its theory of doṣas (vāta, pitta, kapha), dhātus and individual constitution on Sāṅkhya foundations. The Bhagavad-Gītā (ch. 13) explicitly uses the distinction, naming puruṣa "the knower of the field" (kṣetrajña) and prakṛti "the field" (kṣetra), and teaches that clearly understanding this is itself the path of liberating knowledge.',
        },
      ],
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
      origin: {
        label: 'Sāṅkhya (Sāṅkhya Kārikā)',
        href: '/darshanas/',
        explainer:
          'The triguṇa doctrine appears in the Sāṅkhya Kārikā as part of its analysis of prakṛti — the three guṇas are not separable ingredients but the three modes in which all of prakṛti exists. Sattva is the principle of luminosity and pleasure; rajas is the principle of activity and pain; tamas is the principle of restraint and indifference. They are always co-present but in varying ratios — no object or mental state is purely one guṇa. Their interplay accounts for the entire variety of the manifest world, from the finest intellect (sattva-dominant) down to the grossest matter (tamas-dominant). Liberation in Sāṅkhya means the puruṣa recognising it is wholly distinct from all three guṇas — the witness that no combination of strands can reach.',
      },
      references: [
        {
          label: 'Itihāsa (Bhagavad-Gītā)',
          href: '/itihasa/',
          explainer:
            'The Gītā takes the guṇa framework from Sāṅkhya and extends it far beyond cosmology into ethics and character. Chapter 14 describes how all three guṇas bind the embodied person: sattva binds by attachment to happiness and knowledge, rajas by attachment to action and its fruits, tamas by delusion, torpor and sleep. Chapters 17 and 18 apply the guṇas to faith, food, sacrifice, austerity, charity, knowledge, action, doer, intellect and happiness — a sattvic gift is given without expectation of return; a rajasic gift expects reciprocation; a tamasic gift is given at the wrong place and time to an unworthy recipient. This gives the Gītā one of the most detailed character-typologies in Indian literature.',
        },
        {
          label: 'Upavedas (Āyurveda)',
          href: '/upavedas/',
          explainer:
            'Āyurveda takes the guṇa framework and applies it as the practical foundation of medicine and dietetics. The three doṣas are constituted by guṇa-combinations operating through the five elements: pitta is predominantly rajasic (hot, sharp, penetrating), vāta involves rajas and tamas (light, mobile, dry), kapha is predominantly sattvic-tamasic (heavy, slow, stable). Food, herbs, seasons and activities are classified by their guṇa-effects on the body-mind system. A practitioner aims to maintain the guṇa-balance appropriate to the patient\'s constitution. The guṇa framework thus travels directly from Sāṅkhya metaphysics into clinical medicine.',
        },
      ],
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
      origin: {
        label: 'Taittirīya Upaniṣad · Sāṅkhya Kārikā',
        href: '/upanishads/',
        explainer:
          'The five-element analysis first appears as cosmology in the Taittirīya Upaniṣad, which describes a cascade from subtlest to most gross: from ākāśa (ether/space) arises vāyu (air), from vāyu arises agni (fire/heat), from agni arises āpas (water), from āpas arises pṛthvī (earth). The Taittirīya also names the outermost sheath of the self the annamaya kośa — "made of food" — implying that the physical body is constituted by the gross elements of the material world. The Sāṅkhya Kārikā systematises this fully: the five gross elements evolve from five subtle essences (tanmātras — sound, touch, form, taste, smell), which in turn evolve from the cosmic ego (ahaṃkāra), locating the elements precisely within the twenty-five-tattva cosmological framework.',
      },
      references: [
        {
          label: 'Upavedas (Āyurveda)',
          href: '/upavedas/',
          explainer:
            'Āyurveda takes the pañca-mahābhūta as the physical foundation of its entire medical system. Each doṣa is an elemental compound: vāta is air and ether (mobile, light, dry, cold), pitta is fire and water (hot, sharp, penetrating), kapha is water and earth (heavy, slow, stable, cold). The seven body tissues (dhātus) and the three waste products (malas) are similarly analysed in elemental terms. Diagnosis partly consists of identifying which elemental quality is in excess or deficiency; treatment introduces opposing elemental qualities through food, herbs, oils, heat or purification procedures. The five elements are thus not philosophical abstractions but clinical tools operating through measurable qualities (guṇas).',
        },
        {
          label: 'Vedāṅgas · Purāṇas (Vāstu)',
          href: '/vedangas/',
          explainer:
            'Beyond medicine, the pañca-mahābhūta underlie sacred architecture (vāstu-śāstra) and cosmology. In vāstu, the five elements are mapped onto directions and zones of the built space — earth governs the centre, water the north-east, fire the south-east, air the north-west and ether the vertical axis. The layout of a temple or house is planned so the elemental character of each zone reinforces its function: the north-east (water, clarity) is suited to prayer, the south-east (fire, heat) to cooking. In the Purāṇas, the same five elements describe the structure of cosmic geography — the concentric continents, the seven oceans — scaling the bhūta-scheme from the individual body to the body of the cosmos.',
        },
      ],
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
      origin: {
        label: 'Purāṇas (Viṣṇu · Bhāgavata)',
        href: '/puranas/',
        explainer:
          'The fully articulated yuga-cycle with precise numerical durations appears most systematically in the Viṣṇu Purāṇa and the Bhāgavata Purāṇa. The Viṣṇu Purāṇa establishes the canonical figures: the Kṛta/Satya yuga lasts 1,728,000 human years, Tretā 1,296,000, Dvāpara 864,000 and Kali 432,000 — a 4:3:2:1 ratio reflecting progressive decline. A complete mahāyuga is 4,320,000 years; a kalpa (a day of Brahmā) is 1,000 mahāyugas. The Bhāgavata Purāṇa adds the doctrine that Viṣṇu descends as an avatāra in each age in response to the degree of dharma\'s decline — each avatāra is calibrated to the needs of the yuga in which it appears. The scale is not mythological embellishment but systematic cosmological calculation.',
      },
      references: [
        {
          label: 'Vedāṅgas (Jyotiṣa)',
          href: '/vedangas/',
          explainer:
            'The cyclic time scheme receives precise astronomical grounding in Jyotiṣa. Āryabhaṭa\'s Āryabhaṭīya (499 CE) places the beginning of the current Kali yuga at 3102 BCE — a date correlating with a calculated conjunction of the planets at the starting meridian. Jyotiṣa uses nested astronomical cycles — the nakṣatras (lunar mansions), the sidereal year, the synodic periods of the planets, the mahāyuga — to construct a chronological framework of extraordinary scope. The yuga scheme is not purely narrative: it is embedded in a technical astronomy that tracks celestial cycles in order to establish the sacred calendar (pañcāṅga) and determine the auspicious times for rites and festivals.',
        },
        {
          label: 'Itihāsa (Mahābhārata)',
          href: '/itihasa/',
          explainer:
            'The Mahābhārata locates its narrative at the cusp of Dvāpara and Kali yugas — the death of Kṛṣṇa marks the onset of the Kali age in epic chronology. The Śānti Parvan makes the yuga-theory explicit: in the Kṛta age dharma stands on all four legs; in Tretā, three; in Dvāpara, two; in Kali, one. The epic\'s own tragic arc — the fratricidal war, the destruction of both lineages, Kṛṣṇa\'s final departure — enacts this transition in narrative form. The Gītā is delivered at the close of the Dvāpara age, its teaching of niṣkāma-karma designed precisely for beings who must act in a declining world without perfect knowledge of outcomes.',
        },
      ],
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
      origin: {
        label: 'Nyāya Sūtras (Gautama)',
        href: '/darshanas/',
        explainer:
          'Pramāṇa theory receives its first fully systematic treatment in the Nyāya Sūtras of Gautama (c. 2nd century BCE – 2nd century CE), which open by stating that liberation comes through right knowledge — and that right knowledge requires valid means of knowing. Gautama accepts four pramāṇas: pratyakṣa (direct perception), anumāna (inference), upamāna (analogical comparison) and śabda (testimony of a reliable speaker). He analyses each exhaustively. Anumāna receives the most attention: a valid Nyāya inference has five steps — thesis, reason, rule, example and conclusion — structuring the form that became the standard for all subsequent Indian debate. The Nyāyasūtras also inaugurate the systematic analysis of fallacies (hetvābhāsas), the conditions under which an inference appears valid but fails.',
      },
      references: [
        {
          label: 'Darśanas (all schools)',
          href: '/darshanas/',
          explainer:
            'Every Indian school defines itself partly by which pramāṇas it accepts, and the disagreements are philosophically consequential. Sāṅkhya accepts three (dropping upamāna). Mīmāṃsā and Advaita Vedānta add arthāpatti (postulation — if it is daytime and Devadatta is not home, he must be outside) and abhāva (non-perception as a pramāṇa for the knowledge of absence). The Cārvāka materialists accept only pratyakṣa, rejecting inference as unreliable for unobserved entities — a position that forced all other schools to rigorously justify anumāna. The sheer range of these positions means that pramāṇa theory was not a preliminary to Indian philosophy but its constant engine, driving each school to articulate and defend its epistemological foundations.',
        },
        {
          label: 'Nāstika Darśanas (Bauddha pramāṇa)',
          href: '/nastika-darshanas/',
          explainer:
            'The Buddhist tradition developed its own rigorous pramāṇa theory in Dignāga\'s Pramāṇa-samuccaya (c. 5th century CE) and Dharmakīrti\'s Pramāṇavārttika (c. 7th century CE). Dignāga accepts only two pramāṇas — perception and inference — and argues these are sufficient for all valid knowledge. His theory of apoha (exclusion) holds that a concept like "cow" does not pick out a real universal but works by excluding everything that is non-cow — a nominalist challenge to Nyāya realism. Dharmakīrti refines this against Brahmanical objections with extraordinary logical precision. The resulting Nyāya–Buddhist debate over the nature of universals, the validity of inference and the conditions for valid testimony constitutes the most technically sophisticated epistemological exchange in premodern philosophy.',
        },
      ],
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
      origin: {
        label: 'Bauddha darśana (First Sermon at Sarnath)',
        href: '/nastika-darshanas/',
        explainer:
          'The Buddha\'s first teaching after his enlightenment — the Dhammacakkappavattana Sutta, "Setting the Wheel of Dhamma in Motion" — announces duḥkha as the first of the Four Noble Truths. The statement is precise: birth is duḥkha, aging, death, sorrow, lamentation, pain, grief and despair are duḥkha; union with the unloved and separation from the loved are duḥkha; not getting what one wants is duḥkha; and in brief, the five aggregates of clinging are duḥkha. This is not pessimism but diagnosis: the recognition that unsatisfactoriness pervades conditioned existence is the necessary first step toward the cessation (nirodha) that the Noble Eightfold Path produces. The Four Noble Truths are modelled on the ancient Indian medical format: name the disease, identify its cause, state the prognosis, prescribe the cure.',
      },
      references: [
        {
          label: 'Nāstika Darśanas (Bauddha Abhidharma)',
          href: '/nastika-darshanas/',
          explainer:
            'Buddhist philosophy, especially in the Abhidharma literature, develops the analysis of duḥkha into three distinct layers. The first is duḥkha-duḥkha — obvious suffering: pain, grief, physical and mental anguish. The second is vipariṇāma-duḥkha — the suffering of change: even pleasures are a form of duḥkha because they are impermanent, and their inevitable loss causes pain. The third and subtlest is saṃkhāra-duḥkha — the pervasive unease inherent in all conditioned existence, because it is compounded, impermanent and without a fixed self. This analysis shows that the first noble truth is not a claim that everything is always painful — it is the claim that nothing conditioned can provide the stable, complete satisfaction that craving seeks.',
        },
        {
          label: 'Upaniṣads (parallel in śoka)',
          href: '/upanishads/',
          explainer:
            'While duḥkha is distinctively a Buddhist category, it resonates with the Upaniṣadic starting-point of inquiry. The Chāndogya Upaniṣad\'s dialogue between Nārada and Sanatkumāra begins with Nārada confessing: "I have learned all the scriptures but know only words, not the self — I am in sorrow (śoce)." The Kaṭha Upaniṣad\'s teaching to Naciketa and the Bṛhadāraṇyaka\'s analysis of the self both proceed from the recognition that ordinary life — driven by desire for finite goods — is ultimately unsatisfying. Both traditions begin with the same diagnosis of dissatisfaction; they differ on its mechanism and its remedy: the Upaniṣads prescribe ātma-jñāna, Buddhism prescribes the insight into anātman and the cessation of craving.',
        },
      ],
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
      origin: {
        label: 'Bauddha darśana (Anattalakkhana Sutta)',
        href: '/nastika-darshanas/',
        explainer:
          'The anātman teaching is set out in the Pali Anattalakkhana Sutta — delivered as the second discourse after the First Sermon. The Buddha applies a single test to each of the five aggregates (form, feeling, perception, volition, consciousness): "Is this self? If it were self, it would not lead to affliction, and one could say of it: let it be thus, let it not be thus — but since it leads to affliction and one cannot command it, it is not self." The method is not metaphysical assertion but therapeutic analysis. Crucially, the Buddha consistently declines both to say "there is a self" (eternalism) and "there is no self" (nihilism) — anātman is the rejection of clinging to any view of self, not the positive assertion of its non-existence.',
      },
      references: [
        {
          label: 'Nāstika Darśanas (Abhidharma · Madhyamaka · Yogācāra)',
          href: '/nastika-darshanas/',
          explainer:
            'Later Buddhist philosophy develops anātman in two major directions. The Abhidharma tradition atomises personal existence into momentary dharmas — ultimate psycho-physical events — none of which constitutes a self. Madhyamaka (Nāgārjuna) pushes further: not only is there no personal self, but the dharmas themselves lack svabhāva — inherent self-existence. This move from the selflessness of persons (pudgala-nairātmya) to the selflessness of all dharmas (dharma-nairātmya) grounds śūnyatā. The Yogācāra school of Asaṅga and Vasubandhu retains both forms of selflessness while arguing that all phenomena arise as constructions within the stream of consciousness — the two selflessnesses become the master key of Buddhist metaphysics.',
        },
        {
          label: 'Upaniṣads (contrast with ātman)',
          href: '/upanishads/',
          explainer:
            'The anātman teaching acquires its sharpest meaning against the Upaniṣadic ātman it directly counters. Where Yājñavalkya teaches that the witnessing self is the one real and unchanging ground of experience — "the unseen seer, the unheard hearer, the unthought thinker" — the Buddha teaches that examining each candidate for selfhood (body, feeling, perception, volition, consciousness) yields only impermanence and affliction, never a fixed witness. The philosophical question this generates — whether a stream of momentary processes can bear moral responsibility, sustain memory and motivate liberation — became the defining problem for both traditions and generated the most sustained cross-traditional philosophical engagement in Indian intellectual history.',
        },
      ],
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
      origin: {
        label: 'Bauddha darśana (Saṃyutta Nikāya)',
        href: '/nastika-darshanas/',
        explainer:
          'Pratītya-samutpāda is stated in its most compressed form in the Pali Saṃyutta Nikāya: "imasmiṃ sati idaṃ hoti — when this is, that is; from the arising of this, that arises; when this is not, that is not; from the cessation of this, that ceases." This four-part formula is the deepest structure of the teaching — not a temporal causal sequence but a statement about the mutual conditionality of all existing things. It is then spelled out in the twelve-linked chain (dvādaśa-nidāna): from ignorance (avidyā) arise volitional formations (saṃskāra); from these, consciousness; from consciousness, name-and-form; then the six sense-bases, contact, feeling, craving, clinging, becoming, birth, and finally aging-and-death with all their suffering. The chain traces the entire mechanism of saṃsāra with surgical precision.',
      },
      references: [
        {
          label: 'Nāstika Darśanas (Madhyamaka · Yogācāra)',
          href: '/nastika-darshanas/',
          explainer:
            'Nāgārjuna\'s Mūlamadhyamaka-kārikā takes pratītya-samutpāda as its central thesis and draws out its most radical implications. If everything arises only through conditions and nothing exists independently, nothing has svabhāva — inherent self-standing essence. This is śūnyatā: to be dependently arisen is to be empty of intrinsic nature. Nāgārjuna\'s twenty-seven chapters refute the attribution of svabhāva to motion, causation, the self, time and even nirvāṇa itself, showing that every supposed independent entity dissolves under analysis into a web of conditions. MMK 24.18 states the equation: "Whatever is dependently arisen, that is explained as emptiness." Yogācāra names the same insight as paratantra-svabhāva — the dependent nature of all phenomena within the stream of consciousness.',
        },
        {
          label: 'Darśanas (contrast with Sāṅkhya satkāryavāda)',
          href: '/darshanas/',
          explainer:
            'Pratītya-samutpāda defines itself partly against Sāṅkhya\'s satkāryavāda — the teaching that effects pre-exist in their causes: a pot pre-exists in the clay, and causation is simply the manifestation of what was always already latent. For Sāṅkhya, there is no genuine novelty in the world. Buddhist dependent origination takes the opposite view: effects are genuinely new, arising in dependence on conditions — not pre-existing in those conditions, nor arising from nothing. This middle-way account of causation rejects both the absolute identity of cause and effect (Sāṅkhya) and the production of effects from sheer non-existence (which the Nyāya-Vaiśeṣika tradition at times implies). The disagreement is not merely technical — it determines whether the path to liberation can introduce genuine change or only uncover what was always there.',
        },
      ],
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
      origin: {
        label: 'Madhyamaka (Nāgārjuna, Mūlamadhyamaka-kārikā)',
        href: '/nastika-darshanas/',
        explainer:
          'Śūnyatā receives its definitive philosophical treatment in Nāgārjuna\'s Mūlamadhyamaka-kārikā (MMK, c. 2nd century CE). Nāgārjuna argues by systematic deconstruction: in twenty-seven chapters he applies the same relentless argument to every metaphysical category — motion, causation, the self, time, the aggregates, nirvāṇa — showing that no thing has svabhāva (inherent, independent, self-standing existence). Each supposed independent entity dissolves when examined into a network of conditions. The crowning move of chapter 24 identifies śūnyatā with pratītya-samutpāda: to be empty is to be dependently arisen, and to be dependently arisen is to be empty. This makes emptiness not a void but a positive description of the way things exist — through mutual conditionality, without any fixed essence.',
      },
      references: [
        {
          label: 'Nāstika Darśanas (Candrakīrti · Tibetan reception)',
          href: '/nastika-darshanas/',
          explainer:
            'Candrakīrti\'s Prasannapadā and Madhyamakāvatāra (c. 7th century CE) are the most influential commentarial expositions of śūnyatā. Candrakīrti defends the Prāsaṅgika position — that the Mādhyamika should use only consequence (prasaṅga) to reduce opponents\' positions to absurdity, without asserting autonomous inferences — against Bhāviveka\'s Svātantrika. This distinction determines how emptiness is understood: for Candrakīrti, even the most refined positive assertion about emptiness would still be grasping at svabhāva. The Tibetan tradition received śūnyatā through this Prāsaṅgika lens, making it the dominant reading in all four Tibetan Buddhist schools and generating the rich Madhyamaka debate that continues today.',
        },
        {
          label: 'Darśanas (contrast with Advaita māyā)',
          href: '/darshanas/',
          explainer:
            'Śūnyatā is often compared with the Advaita Vedānta concept of māyā, but the resemblance is surface-level and the difference philosophically fundamental. Both hold that ordinary experience misrepresents reality — Advaita says the world of multiplicity is not ultimately real, Madhyamaka says all phenomena are empty of inherent existence. But Advaita posits brahman as the one positively real substratum behind appearance — śūnyatā is what māyā veils. Nāgārjuna explicitly refuses any such positive ground: even brahman, even nirvāṇa, even śūnyatā itself is subject to the same analysis and found empty of svabhāva. Śūnyatā is not a ground but the absence of any ground — a more radical dissolution of metaphysical foundations than Advaita undertakes, and the point where the two traditions diverge most sharply.',
        },
      ],
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
      origin: {
        label: 'Jaina darśana (Ācārāṅga Sūtra)',
        href: '/nastika-darshanas/',
        explainer:
          'The Ācārāṅga Sūtra — the oldest surviving Jaina text, recording the practices of Mahāvīra (c. 599–527 BCE) — places ahiṃsā at the very foundation of Jaina ethics. Its opening books describe with harrowing attention the pain experienced by every form of life, including earth, water, fire and air as one-sensed jīvas. The first of the five mahāvratas (great vows) taken by a Jaina monk is the vow of non-harm extended to all living beings — one-sensed (plants, elements), two-sensed, three-sensed, four-sensed and five-sensed. The intensity is unmatched elsewhere: the Jaina monk sweeps the path before each step, covers his mouth to prevent inhaling insects, and strains his drinking water. The starting principle is stated directly: all living beings desire pleasure and fear pain; to harm them is therefore to act against what one would not wish upon oneself.',
      },
      references: [
        {
          label: 'Vedas · pan-Indic (Yoga, Mahābhārata)',
          href: '/vedas/',
          explainer:
            'Ahiṃsā appears in the Brahmanical tradition in the Śatapatha Brāhmaṇa ("ahiṃsā sarvabhūtebhyaḥ" — non-harm to all beings), but it is in the later texts that it becomes a primary virtue. Patañjali names it the first and greatest of the five yamas — applicable to all regardless of caste, place, time or circumstance — and calls it mahāvrata. The Mahābhārata declares it the highest dharma: "ahiṃsā paramo dharmaḥ." The Gītā lists it among the divine qualities (daivī-sampat) and the highest form of austerity. The wide distribution of the term shows how ahiṃsā crossed from its Jaina technical roots into a shared norm of Indian ethical discourse, embraced by traditions that otherwise disagree on almost everything else.',
        },
        {
          label: 'Modern reception (Gandhi · Satyāgraha)',
          href: '/nastika-darshanas/',
          explainer:
            'Gandhi\'s reinterpretation of ahiṃsā as satyāgraha — "truth-force" or "holding fast to truth" — is the concept\'s most influential modern transformation. Gandhi fused the Jaina absolute commitment to non-harm with the Gītā\'s teaching on fearless action without attachment to results, creating a method of active non-violent resistance. Satyāgraha does not merely refrain from violence; it confronts injustice by accepting suffering on oneself rather than inflicting it — a form of moral force that exposes the injustice of the opponent. Adopted by Martin Luther King Jr. in the American civil rights movement, by Nelson Mandela, by Cesar Chavez and others, this method makes ahiṃsā one of the most consequential ethical ideas of the twentieth century.',
        },
      ],
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
      origin: {
        label: 'Jaina darśana (Tattvārtha Sūtra)',
        href: '/nastika-darshanas/',
        explainer:
          'Anekāntavāda is systematised most rigorously in Umāsvāti\'s Tattvārtha Sūtra (c. 2nd–5th century CE), the definitive Jaina philosophical text accepted by both Digambara and Śvetāmbara sects. Umāsvāti distinguishes the substance (dravya), qualities (guṇas) and modes (paryāyas) of any entity to show that multiple apparently contradictory descriptions can be simultaneously true: a substance is permanent (with respect to its underlying nature), impermanent (with respect to its modes), both, and in one sense inexpressible. The logical technique for handling this is syādvāda — every predication is qualified by syāt ("in some respect"), preventing any single description from claiming absolute adequacy. The seven-fold predication (saptabhaṅgī) — "in some respect it is; in some respect it is not; in some respect it both is and is not; in some respect it is inexpressible" — systematises all possible truth-values for any claim about reality.',
      },
      references: [
        {
          label: 'Nāstika Darśanas (Jaina nayavāda)',
          href: '/nastika-darshanas/',
          explainer:
            'Anekāntavāda is complemented by nayavāda — the doctrine of standpoints. A naya is a partial perspective valid within its own scope that becomes a durnaya (bad standpoint) when claimed as the whole truth. Jaina philosophy catalogues the main standpoints: the universal (seeing only the substance, ignoring its modes), the particular (seeing only the modes), the standpoint of the present moment, of synonymy, of etymology, and so on. Each is a legitimate analytical tool; none exhausts reality. This gives the Jaina tradition a remarkable meta-philosophical advantage in inter-school debate: every rival position — Advaita\'s claim that brahman alone is real, Buddhism\'s claim of universal impermanence, Sāṅkhya\'s dualism — can be acknowledged as a valid naya while being shown to err in elevating itself to an exclusive truth.',
        },
        {
          label: 'Darśanas (contrast with other epistemologies)',
          href: '/darshanas/',
          explainer:
            'Anekāntavāda stands in pointed contrast to the dominant epistemological approaches of rival schools. Buddhism\'s two-truths doctrine holds that conventional and ultimate truth are strictly distinct levels; what is valid conventionally is not ultimately real, and the two cannot both be true in the same sense at once. Nyāya and Mīmāṃsā assert robust realism — external objects and universals exist just as they appear. Advaita holds that brahman alone is ultimately real and the world is appearance. Against all of these, Jainism insists that reality is irreducibly complex and cannot be flattened into any single metaphysical vision. This makes anekāntavāda the most explicitly pluralist epistemology in the Indian tradition and the one most structurally resistant to dogmatism — the system that built its own critique of system into its foundations.',
        },
      ],
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
      origin: {
        label: 'Nāṭyaśāstra (Bharata)',
        href: '/upavedas/',
        explainer:
          'The Nāṭyaśāstra (c. 2nd century BCE–2nd century CE), attributed to Bharata Muni, is the foundational text of Indian dramaturgy and the first systematic treatment of rasa. Chapter 6 states the defining sūtra: "vibhāva-anubhāva-vyabhicāri-saṃyogād rasa-niṣpattiḥ" — rasa arises from the combination of vibhāvas (causal determinants), anubhāvas (expressive responses) and transitory emotions (vyabhicāri-bhāvas). Bharata identifies eight rasas — śṛṅgāra (erotic), hāsya (comic), karuṇa (pathetic), raudra (furious), vīra (heroic), bhayānaka (fearful), bībhatsa (disgustful), and adbhuta (marvellous) — each associated with a permanent underlying emotion (sthāyī-bhāva) in the cultivated audience. The text describes how actor, director and poet together create conditions for rasa through character types, narrative structures, gesture (abhinaya), costume, music and verse. Crucially, rasa is not the private emotion of a character on stage but an aesthetic experience produced in the sāhṛdaya — the audience member who shares the poet\'s sensibility.',
      },
      references: [
        {
          label: 'Abhinavagupta (Abhinavabhāratī)',
          href: '/upavedas/',
          explainer:
            'Abhinavagupta\'s 10th-century commentary on the Nāṭyaśāstra, the Abhinavabhāratī, is the most philosophically sophisticated treatment of rasa. Working within his Pratyabhijñā school of Kashmiri Śaivism, Abhinavagupta asked how rasa can arise from watching suffering or strangers\' love stories. His answer: rasa is not personal emotion but a generalised (sādhāraṇīkaraṇa), impersonal aesthetic experience in which the audience\'s ego-barriers temporarily dissolve and consciousness expands into pure awareness — ānanda — akin to the bliss of brahman-recognition. He championed śānta (the peaceful) as a ninth rasa — absent in Bharata\'s original eight — and the highest of all, being the aesthetic equivalent of spiritual liberation. His reading transformed rasa from a theatrical technique into a complete philosophy of consciousness.',
        },
        {
          label: 'Classical Indian arts (Bharatanāṭyam · music · kāvya)',
          href: '/upavedas/',
          explainer:
            'Rasa became the shared aesthetic criterion across all classical Indian arts. In Bharatanāṭyam the dancer\'s abhinaya is explicitly organised around the nine rasas, with codified hand gestures, facial expressions and eye movements calibrated to evoke each one. Carnatic and Hindustani musicians treat bhāva — the emotional quality that leads to rasa — as the ultimate criterion of a performance, above technical precision. Sanskrit kāvya critics — Ānandavardhana, Mammaṭa, Viśvanātha — built their poetic theories around whether a poem succeeds in evoking rasa; Viśvanātha\'s Sāhityadarpaṇa defines kāvya itself as "vākyaṃ rasātmakaṃ kāvyam" — poetry is speech that has rasa as its soul. Every classical Indian aesthetic treatise, dance manual and music text takes the rasa framework as its starting point rather than something to establish.',
        },
      ],
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
      origin: {
        label: 'Ānandavardhana (Dhvanyāloka)',
        href: '/upavedas/',
        explainer:
          'Ānandavardhana\'s Dhvanyāloka (c. 850 CE, Kashmir) is the founding text of dhvani theory. Before it, Sanskrit poetic theory had centred on guṇas (qualities), doṣas (faults) and alaṃkāras (ornaments/figures) as the components of excellence. Ānandavardhana argued that all these are merely means to a deeper end: the power of suggestion (dhvani or vyañjanā). He distinguished three functions of language — abhidhā (literal denotation), lakṣaṇā (extended or metaphorical meaning) and vyañjanā (resonant suggestion beyond both) — and held that the finest poetry is that in which the suggested sense, especially rasa, dominates over the expressed. His famous example: "Traveller, do not enter the Vindhya forest by night — the lion, once a noble king in a former life, has grown angry." The literal words warn of a lion; the suggested sense is the humiliation of a king reduced to beast. Ānandavardhana classified dhvani by type — rasa-dhvani (the highest), bhāva-dhvani, vastv-alaṃkāra-dhvani — and argued that all great poetry depends on dhvani even when it appears to work through direct statement.',
      },
      references: [
        {
          label: 'Abhinavagupta (Locana)',
          href: '/upavedas/',
          explainer:
            'Abhinavagupta\'s commentary Locana ("the eye") on the Dhvanyāloka (c. 1000 CE) is the most philosophically complete defence of dhvani theory. Abhinavagupta grounded dhvani in his doctrine of śabda-brahman — developed in the Spanda and Trika schools, the view that language itself participates in consciousness and that the supreme form of speech (parā-vāk) transcends ordinary denotation. On this view, vyañjanā is not merely a literary device but reflects the deep structure of all language: words always carry more than they literally mean, and it is in that surplus that poetic meaning lives. Abhinavagupta also used the Locana to argue for the unity of dhvani and rasa theory: the "soul of poetry" is not dhvani as a technical mechanism but dhvani as the vehicle through which rasa — impersonal aesthetic consciousness — is transmitted from poet to audience across time.',
        },
        {
          label: 'Later poetics (Mammaṭa · Viśvanātha · alaṃkāra-vādins)',
          href: '/upavedas/',
          explainer:
            'Dhvani theory entered a century-long debate with the alaṃkāra-vādins — critics who held that ornaments (upamā, rūpaka, anuprāsa) are the essence of poetry. Mammaṭa\'s Kāvyaprakāśa (c. 11th century) synthesised the two positions: alaṃkāras are recognised as important but subordinate to rasa and dhvani. He defined three grades of kāvya: dhvani-kāvya (the highest, where suggestion predominates), guṇī-bhūta-vyaṅgya (where expressed sense is primary but suggested sense is present), and citra-kāvya (where only ornament matters). Viśvanātha\'s Sāhityadarpaṇa (c. 14th century) sharpened the hierarchy further. This debate shaped all subsequent Sanskrit literary criticism and established dhvani — the implied, the resonant, the unsaid — as the supreme criterion that separates great poetry from competent versification.',
        },
      ],
    },
  },

  // ─────────────────── Mind, consciousness & the subtle body (added) ──────────────────
  {
    id: 'avastha-turiya',
    name: 'Avasthā & Turīya',
    deva: 'अवस्थात्रय व तुरीय',
    seal: 'तु',
    gloss: 'Waking, dream, deep sleep — and the fourth',
    glossDeva: 'जागृति, स्वप्न, सुषुप्ति — आणि चौथे',
    domain: 'mind',
    source: 'Māṇḍūkya Upaniṣad',
    sourceDeva: 'मांडूक्य उपनिषद',
    blurb: 'A map of consciousness in four states — waking, dream and dreamless sleep, and turīya, "the fourth": the silent witness that underlies and illumines the other three.',
    tags: ['Consciousness', 'Turīya', 'Oṃ'],
    href: '/upanishads/',
    detail: {
      intro:
        'The Māṇḍūkya Upaniṣad analyses experience itself into four states (avasthā): waking (jāgrat), dream (svapna) and deep sleep (suṣupti), and a fourth — turīya — that is not one state beside the others but their underlying ground and witness. It is the tradition\'s most exact map of consciousness.',
      aspects: [
        'Jāgrat — outward awareness of the gross world through the senses; the waking self, vaiśvānara.',
        'Svapna — inward awareness that fashions a whole world out of impressions alone; the dreaming self, taijasa.',
        'Suṣupti — dreamless sleep: undivided and at peace, yet without objects; the self as prājña, the seed of the other states.',
      ],
      significance:
        'Turīya — literally "the fourth" — names pure consciousness itself, present and unchanged through waking, dream and sleep. To realise it is to recognise the ātman that the Upaniṣads equate with brahman: not a further experience but the witness of all experience.',
      origin: {
        label: 'Upaniṣads (Māṇḍūkya)',
        href: '/upanishads/',
        explainer:
          'The Māṇḍūkya, shortest of the principal Upaniṣads at twelve verses, sets the four states in correspondence with the syllable Oṃ and its sounds — A (waking), U (dream), M (deep sleep) — and the silence that follows the sound, which is turīya. Each state is given a name and a "mouth" of experience, building a precise phenomenology: the same self moves through all three ordinary states yet is exhausted by none of them. The text describes turīya only by negation — not inward-knowing, not outward-knowing, not a mass of cognition, ungraspable, the cessation of the manifold, peace itself — and concludes that this fourth is the ātman, that which is to be known.',
      },
      references: [
        {
          label: 'Gauḍapāda (Māṇḍūkya Kārikā)',
          href: '/upanishads/',
          explainer:
            'Gauḍapāda\'s verse commentary (c. 6th century) is the first systematic statement of Advaita. He reads the three states as equally unreal relative to turīya: just as the dream world is real only within the dream, the waking world is real only within waking, and both dissolve in the witnessing fourth. From this he develops ajātivāda — the doctrine of non-origination — arguing that nothing is ever truly born or destroyed; plurality is an appearance in the one unborn consciousness. The Kārikā turns the Māṇḍūkya\'s map of states into a full metaphysics of non-duality.',
        },
        {
          label: 'Vedānta (Advaita)',
          href: '/darshanas/',
          explainer:
            'Śaṅkara built on Gauḍapāda to make the analysis of the three states (avasthā-traya) a central method of Advaita. Because the self is present in waking, dream and deep sleep alike but identifies fully with none of them — you do not become your dream-body, nor cease to exist in dreamless sleep — the self must be the constant witness (sākṣin) distinct from every changing state. The argument from the states became one of Vedānta\'s most powerful routes to the ātman: not reached by adding an experience, but uncovered by seeing through the ones we already have.',
        },
      ],
    },
  },
  {
    id: 'antahkarana',
    name: 'Antaḥkaraṇa',
    deva: 'अंतःकरण',
    seal: 'अं',
    gloss: 'The inner instrument of mind',
    glossDeva: 'मनाचे अंतःकरण',
    domain: 'mind',
    source: 'Vedānta · Sāṃkhya',
    sourceDeva: 'वेदान्त · सांख्य',
    blurb: 'The "inner instrument" — the mind analysed into four functions: manas (sensing), buddhi (judging), ahaṅkāra (the I-maker) and citta (memory). Not the self, but its nearest tool.',
    tags: ['Manas', 'Buddhi', 'Ahaṅkāra'],
    href: '/darshanas/',
    detail: {
      intro:
        'Antaḥkaraṇa, the "inner instrument," is the tradition\'s name for the mind treated not as a single thing but as a set of functions. It is subtle matter, not consciousness itself — the instrument through which the witnessing self engages a world.',
      aspects: [
        'Manas — the registering, doubting faculty that gathers the senses and turns raw input into a presented object.',
        'Buddhi — intellect: discrimination, judgement and decision; the highest and most luminous function, closest to the self.',
        'Ahaṅkāra — the "I-maker" that appropriates experience as mine, generating the sense of a separate agent.',
      ],
      significance:
        'By distinguishing the inner instrument from the consciousness that lights it up, the tradition can hold a crucial line: the mind is known, therefore it is not the knower. Liberation is disidentification from the antaḥkaraṇa, not its destruction.',
      origin: {
        label: 'Sāṃkhya · the Upaniṣads',
        href: '/darshanas/',
        explainer:
          'Sāṃkhya supplies the analytic frame: from prakṛti evolve buddhi (also called mahat), then ahaṅkāra, then manas, each a product of matter, not of puruṣa (consciousness). The Upaniṣads already use the chariot image of the Kaṭha — the self is the rider, the body the chariot, buddhi the charioteer, manas the reins and the senses the horses — to rank these inner functions and subordinate them to the self. Together they establish that what we casually call "mind" is layered machinery, with buddhi at the top as the faculty of decision.',
      },
      references: [
        {
          label: 'Yoga (Patañjali · citta-vṛtti)',
          href: '/darshanas/',
          explainer:
            'Patañjali frames the whole path as citta-vṛtti-nirodha — the stilling of the modifications of the citta, the mind-stuff. Yoga treats the inner instrument as something that takes the shape of whatever it perceives, like water taking the shape of its vessel; the vṛttis (waves) are these shapings. When they are stilled, the seer (puruṣa) rests in its own nature rather than being mistaken for its fluctuating instrument. Yoga thus turns the Sāṃkhya analysis into a practical psychology of attention and restraint.',
        },
        {
          label: 'Vedānta',
          href: '/upanishads/',
          explainer:
            'Advaita Vedānta uses antaḥkaraṇa to explain how the one consciousness appears as many individual knowers. The witnessing self (sākṣin) is reflected in each inner instrument as in a mirror; the quality of the reflection depends on the clarity of the buddhi. Bondage is the self mistaking itself for this reflected, limited mind-complex (the jīva); knowledge is recognising the difference between the unchanging witness and the changing instrument it illumines.',
        },
      ],
    },
  },
  {
    id: 'panchakosha',
    name: 'Pañca-kośa',
    deva: 'पंचकोश',
    seal: 'को',
    gloss: 'The five sheaths of the self',
    glossDeva: 'आत्म्याचे पाच कोश',
    domain: 'mind',
    source: 'Taittirīya Upaniṣad',
    sourceDeva: 'तैत्तिरीय उपनिषद',
    blurb: 'The self wrapped in five concentric sheaths — food, breath, mind, intellect and bliss — each subtler than the last. A method of peeling inward from body to being.',
    tags: ['Kośa', 'Ānandamaya', 'Self-inquiry'],
    href: '/upanishads/',
    detail: {
      intro:
        'The Taittirīya Upaniṣad pictures the self as veiled in five sheaths (kośa), one within the next like the layers of a casket. The image is also a method: by recognising each layer as something one has rather than something one is, inquiry moves from the outermost body toward the innermost ground.',
      aspects: [
        'Annamaya — the sheath "made of food," the physical body sustained by and returning to matter.',
        'Prāṇamaya and manomaya — the vital-breath sheath that animates the body and the mind-sheath of sensation and emotion.',
        'Vijñānamaya and ānandamaya — the sheath of discerning intellect and, subtlest of all, the sheath of bliss closest to the self.',
      ],
      significance:
        'The kośa scheme gives self-inquiry a graded ladder: each sheath is real at its own level yet is not the ātman, because each is an object the self is aware of. Peeling them away — neti, neti, "not this, not this" — is a disciplined path to what remains when every layer is set aside.',
      origin: {
        label: 'Upaniṣads (Taittirīya)',
        href: '/upanishads/',
        explainer:
          'In the Brahmānanda Vallī of the Taittirīya, a teacher leads the student inward sheath by sheath, each described as having the form of a bird with head, wings and tail. Beginning from the annamaya self of food, the text discloses a subtler self within each — prāṇa within food, manas within prāṇa, vijñāna within manas, ānanda within vijñāna — and at the innermost reaches an extraordinary meditation on bliss itself, measuring it in ascending degrees until it culminates in the bliss of brahman. The structure is at once cosmological, psychological and contemplative.',
      },
      references: [
        {
          label: 'Vedānta',
          href: '/darshanas/',
          explainer:
            'Later Vedānta, especially in primers like the Vivekacūḍāmaṇi and Pañcadaśī, made the five sheaths a standard tool of analysis (kośa-viveka). The seeker is taught to observe that the body changes while awareness persists, that breath and mind come and go while the witness remains, and that even the bliss of deep sleep is experienced by something more fundamental still. Each sheath is methodically negated as "not the self," so that the ānandamaya sheath — often mistaken for liberation — is itself transcended, leaving only the witnessing consciousness it veils.',
        },
      ],
    },
  },
  {
    id: 'indriya',
    name: 'Indriya',
    deva: 'इंद्रिय',
    seal: 'इं',
    gloss: 'The senses & organs of action',
    glossDeva: 'ज्ञान व कर्म यांची इंद्रिये',
    domain: 'mind',
    source: 'Sāṃkhya · Upaniṣads',
    sourceDeva: 'सांख्य · उपनिषदे',
    blurb: 'The eleven indriyas — five senses of knowing, five organs of action, and the mind that coordinates them — the bridge between an inner self and an outer world.',
    tags: ['Senses', 'Jñānendriya', 'Karmendriya'],
    href: '/darshanas/',
    detail: {
      intro:
        'Indriya names a capacity — a "power" — rather than a physical organ. The tradition counts eleven: five faculties of knowing (jñānendriya), five of acting (karmendriya), and manas, the inner sense that binds them. They are the gateways through which consciousness meets the world and acts back upon it.',
      aspects: [
        'Jñānendriya — the five knowing-powers of hearing, touch, sight, taste and smell, each correlated with an element.',
        'Karmendriya — the five acting-powers of speech, grasping, locomotion, excretion and generation.',
        'Manas — the eleventh, the coordinating sense that presents the data of the others to the intellect; sense-restraint (dama) is its discipline.',
      ],
      significance:
        'Mapping the senses as powers rather than mere organs lets the tradition speak of withdrawing them (pratyāhāra) and mastering them as a charioteer reins horses. Control of the indriyas, not their denial, is the recurring image of the disciplined life.',
      origin: {
        label: 'Sāṃkhya · the Upaniṣads',
        href: '/darshanas/',
        explainer:
          'Sāṃkhya derives the eleven indriyas as evolutes of ahaṅkāra in its sattva aspect, pairing the five knowing-senses with the subtle elements (tanmātra) they perceive and the five action-organs with the functions they perform. The Kaṭha Upaniṣad\'s chariot supplies the governing metaphor: the senses are the horses, their objects the roads, and the self the rider who suffers or thrives by how well the chariot is driven. The analysis is consistently practical — the senses are not condemned but located within a hierarchy that the self is meant to govern.',
      },
      references: [
        {
          label: 'Yoga (pratyāhāra)',
          href: '/darshanas/',
          explainer:
            'In Patañjali\'s eight limbs, pratyāhāra — the withdrawal of the senses from their objects — is the hinge between the outer limbs and the inner. When the indriyas no longer chase outward, the mind ceases to be scattered and turns available for concentration. Yoga compares the withdrawn senses to a tortoise drawing in its limbs, an image the Bhagavad Gītā also uses for the person of steady wisdom. Sense-mastery is thus not a goal in itself but the gateway to the inner disciplines of dhāraṇā and dhyāna.',
        },
        {
          label: 'Bhagavad Gītā',
          href: '/itihasa/',
          explainer:
            'The Gītā repeatedly diagnoses bondage as the mind being dragged by the senses "as a gale carries away a ship," and prescribes not suppression but trained equanimity: acting in the world while the senses move among their objects without craving or aversion. Its ideal, the sthitaprajña, is one whose senses are under the self\'s command rather than the reverse — making indriya-mastery a cornerstone of its ethics of action.',
        },
      ],
    },
  },
  {
    id: 'samskara-vasana',
    name: 'Saṃskāra & Vāsanā',
    deva: 'संस्कार व वासना',
    seal: 'सं',
    gloss: 'Latent impressions & tendencies',
    glossDeva: 'सुप्त संस्कार व प्रवृत्ती',
    domain: 'mind',
    source: 'Yoga · Bauddha',
    sourceDeva: 'योग · बौद्ध',
    blurb: 'Every act leaves a trace; traces gather into tendencies. Saṃskāras are the imprints of past experience, vāsanās the dispositions they harden into — the mechanism behind habit, character and karma.',
    tags: ['Imprints', 'Habit', 'Karma'],
    href: '/darshanas/',
    detail: {
      intro:
        'A saṃskāra is the residual imprint left in the mind by any experience or action; a vāsanā is the standing disposition that accumulated imprints become. Together they explain how the past lives on in us — as memory, habit, instinct and the inclinations we are born with.',
      aspects: [
        'Every cognition and action deposits a saṃskāra, which can later reactivate as memory or impulse.',
        'Repeated imprints consolidate into vāsanās — grooves of tendency that shape perception and choice before we deliberate.',
        'This stored momentum is the psychological engine of karma: it carries dispositions across a life, and in most schools across lives.',
      ],
      significance:
        'Saṃskāra and vāsanā make character intelligible without a fixed essence: we are the sediment of what we have repeatedly done. They also make freedom possible — new action lays down new grooves, and disciplined practice can thin and finally erase the old ones.',
      origin: {
        label: 'Yoga (Patañjali)',
        href: '/darshanas/',
        explainer:
          'Patañjali makes saṃskāras central to his account of the mind. Vṛttis (mental activities) leave saṃskāras, which give rise to fresh vṛttis, in a self-feeding cycle; the vāsanās are the deep reservoir of these imprints, conditioning even the kleśas (afflictions) and the shape of future births. The aim of yoga is to weaken the binding saṃskāras through practice (abhyāsa) and dispassion (vairāgya) and to cultivate a counter-imprint of restraint, until at the highest stage even that is released — a "seedless" absorption in which no new binding imprint is sown.',
      },
      references: [
        {
          label: 'Bauddha thought (vāsanā · bīja)',
          href: '/nastika-darshanas/',
          explainer:
            'Buddhism develops a closely parallel theory without a permanent self to store the traces. Actions "perfume" the mind-stream, leaving vāsanās; the Yogācāra school systematised this as bīja (seeds) deposited in the ālaya-vijñāna, the storehouse consciousness, which ripen into future experience. Because there is no enduring self, continuity is precisely this flow of conditioned imprints — a powerful answer to how karma and memory work if, as the Buddhists hold, there is no soul to carry them.',
        },
      ],
    },
  },
  {
    id: 'prana',
    name: 'Prāṇa',
    deva: 'प्राण',
    seal: 'प्र',
    gloss: 'Vital breath & life-force',
    glossDeva: 'प्राणशक्ती · जीवनऊर्जा',
    domain: 'mind',
    source: 'Upaniṣads · Yoga',
    sourceDeva: 'उपनिषदे · योग',
    blurb: 'The life-force that animates body and cosmos alike — felt most directly as breath. Through prāṇāyāma, the link between breath and mind becomes a road inward.',
    tags: ['Breath', 'Prāṇāyāma', 'Subtle body'],
    href: '/upanishads/',
    detail: {
      intro:
        'Prāṇa is the vital energy that animates a living being — encountered most immediately as the breath, but understood as a single life-force pervading body and universe. To study prāṇa is to study the meeting point of the physical, the vital and the mental.',
      aspects: [
        'Analysed into five functions (the pañca-prāṇa): prāṇa, apāna, samāna, udāna and vyāna, governing breathing, elimination, digestion, upward movement and circulation.',
        'Said to flow through subtle channels (nāḍī) centred on the spine — the framework later mapped as cakras in haṭha and tantric yoga.',
        'Tied intimately to the mind: where breath is agitated the mind is restless, where breath is steady the mind grows still.',
      ],
      significance:
        'Because breath is the one bodily process that is both automatic and consciously controllable, prāṇa becomes the practical bridge of yoga — the place where regulating the body directly settles the mind. Prāṇāyāma turns a reflex into a discipline.',
      origin: {
        label: 'Upaniṣads',
        href: '/upanishads/',
        explainer:
          'The Upaniṣads exalt prāṇa as the chief of the vital powers. A recurring parable in the Chāndogya and Bṛhadāraṇyaka stages a contest among the faculties — speech, sight, hearing, mind and breath each depart the body in turn to prove their worth; the body survives the loss of each until prāṇa makes to leave, and the others rush to acknowledge it as the indispensable one. The Praśna Upaniṣad is devoted largely to questions about prāṇa, its origin and its fivefold operation, establishing breath as the binding life of the whole organism.',
      },
      references: [
        {
          label: 'Yoga (prāṇāyāma)',
          href: '/darshanas/',
          explainer:
            'Prāṇāyāma — the regulation of breath — is the fourth of Patañjali\'s eight limbs, placed just before the turn inward. By lengthening and steadying the breath, the yogi steadies the citta and prepares it for concentration; the sūtras say it thins the veil over the inner light and makes the mind fit for dhāraṇā. Later haṭha-yoga texts such as the Haṭha-pradīpikā elaborate this into a detailed science of channels, locks and breath-retention aimed at awakening and raising the subtle energy along the spine — the most physically explicit branch of the Indic disciplines of the self.',
        },
      ],
    },
  },

  // ─────────────────── Order, self & the categories of the real (added) ──────────────────
  {
    id: 'atma-guna',
    name: 'Ātma-guṇa',
    deva: 'आत्मगुण',
    seal: 'आ',
    gloss: 'The qualities of the self',
    glossDeva: 'आत्म्याचे गुण',
    domain: 'order',
    source: 'Nyāya–Vaiśeṣika',
    sourceDeva: 'न्याय–वैशेषिक',
    blurb: 'In Nyāya–Vaiśeṣika the self is a real substance, known not directly but through its qualities — cognition, pleasure, pain, desire, aversion, effort. The mind inferred from what it does.',
    tags: ['Self', 'Buddhi', 'Vaiśeṣika'],
    href: '/darshanas/',
    detail: {
      intro:
        'Where Vedānta makes the self pure consciousness, Nyāya–Vaiśeṣika treats it as a real, eternal substance (dravya) — and argues that we know it only through the qualities (guṇa) that inhere in it. These ātma-guṇas are the evidence from which the self is inferred.',
      aspects: [
        'The classic list names nine qualities special to the self: cognition (buddhi/jñāna), pleasure, pain, desire, aversion, effort, merit, demerit and mental disposition (saṃskāra).',
        'These qualities are not the self but inhere in it, the way roundness and colour inhere in a pot — the self is their unchanging substratum.',
        'In the liberated state these qualities cease to be produced: mokṣa here is the self stripped of cognition and feeling, resting in its bare substantiality.',
      ],
      significance:
        'The doctrine is the analytic counterweight to the Upaniṣadic self: it builds the self up from the outside, by inference from psychological qualities, rather than disclosing it from within as the witness. It anchors Nyāya\'s case that the self is a knowable object of valid cognition, not a mystical absolute.',
      origin: {
        label: 'Darśanas (Vaiśeṣika)',
        href: '/darshanas/',
        explainer:
          'Kaṇāda\'s Vaiśeṣika-sūtra classifies everything real under categories, and lists qualities (guṇa) as one of them; among the twenty-four qualities, a specific cluster inheres only in the self. Because the self is imperceptible to the outer senses, Vaiśeṣika holds that its existence is established by inference: the presence of cognition, desire and effort requires a substance in which they inhere, just as smoke requires fire. The ātma-guṇas thus function as the logical bridge from observable mental life to the unobservable self that owns it.',
      },
      references: [
        {
          label: 'Nyāya',
          href: '/darshanas/',
          explainer:
            'Nyāya adopts the same self and sharpens the inference. Gautama\'s Nyāya-sūtra opens its proof of the self from desire and aversion: because a person seeks what once gave pleasure and shuns what once gave pain, there must be a single persisting knower who connects the past experience to the present impulse — the body and senses, being momentary and many, cannot do this. Liberation (apavarga) is then defined as the absolute cessation of pain, when the chain of qualities that bind the self to rebirth is finally broken. The ātma-guṇas are at once the proof of the self and the bondage from which it is freed.',
        },
      ],
    },
  },
  {
    id: 'saccidananda',
    name: 'Saccidānanda',
    deva: 'सच्चिदानंद',
    seal: 'स',
    gloss: 'Being · consciousness · bliss',
    glossDeva: 'सत् · चित् · आनंद',
    domain: 'order',
    source: 'Vedānta',
    sourceDeva: 'वेदान्त',
    blurb: 'Not three attributes of Brahman but its very nature, named from three sides — sat (being), cit (consciousness), ānanda (bliss). The positive face of the otherwise indescribable absolute.',
    tags: ['Brahman', 'Bliss', 'Advaita'],
    href: '/upanishads/',
    detail: {
      intro:
        'Saccidānanda is the great affirmative description of brahman in Vedānta — being (sat), consciousness (cit) and bliss (ānanda). It is not a list of properties an entity happens to have, but three words pointing at one indivisible reality from three directions.',
      aspects: [
        'Sat — pure being, that which truly is, the existence underlying all that comes and goes.',
        'Cit — pure consciousness, the self-luminous awareness by which everything else is known.',
        'Ānanda — bliss not as an emotion but as the fullness of the self lacking nothing, glimpsed in deep sleep and in liberation.',
      ],
      significance:
        'Saccidānanda lets the tradition speak positively of an absolute it otherwise approaches only by negation (neti, neti). It also grounds the equation of ātman and brahman experientially: the being, awareness and contentment we sense at our own core are said to be the very nature of the ultimate.',
      origin: {
        label: 'Upaniṣads',
        href: '/upanishads/',
        explainer:
          'The three terms are drawn from the Upaniṣads, though the compound itself is later. The Bṛhadāraṇyaka and Chāndogya identify brahman with satya/sat (being) and with vijñāna/cit (consciousness), and the Taittirīya famously climbs through the sheaths to ānanda, declaring that brahman is bliss (ānando brahmeti vyajānāt) and measuring its degrees. Drawing these threads together, Vedānta fused them into the single description saccidānanda — the positive pole balancing the negative theology of "not this, not this."',
      },
      references: [
        {
          label: 'Vedānta (Advaita & later schools)',
          href: '/darshanas/',
          explainer:
            'In Advaita, saccidānanda names the one reality whose appearance as a manifold world is māyā; the jīva\'s true nature is this very being-consciousness-bliss, momentarily forgotten. The theistic Vedāntas adapt the term to a personal God: for them saccidānanda is the nature of the Lord (Bhagavān), whose being, knowledge and bliss are infinite and who is the proper object of devotion. Across the schools the word became the standard shorthand for the divine ground, carried into modern times by teachers like Vivekananda as the affirmative heart of Indian metaphysics.',
        },
      ],
    },
  },
  {
    id: 'ishvara',
    name: 'Īśvara',
    deva: 'ईश्वर',
    seal: 'ई',
    gloss: 'The Lord · personal God',
    glossDeva: 'ईश्वर · सगुण परमेश्वर',
    domain: 'order',
    source: 'Yoga · Vedānta',
    sourceDeva: 'योग · वेदान्त',
    blurb: 'The personal face of the absolute — God conceived as a being one can know, trust and turn to. How the tradition holds an impersonal ground and a God of devotion together.',
    tags: ['God', 'Bhakti', 'Saguṇa'],
    href: '/darshanas/',
    detail: {
      intro:
        'Īśvara — "the Lord," from the root meaning to rule or be able — is the personal God of the tradition: the absolute conceived with qualities, will and grace, a being one can love and approach. The concept lets a philosophy of impersonal Brahman also be a religion of devotion.',
      aspects: [
        'Distinguished from the impersonal absolute as saguṇa (with qualities) rather than nirguṇa (without): the same reality approached as a "Thou."',
        'In Yoga, a special puruṣa untouched by affliction and karma, meditation on whom (with the syllable Oṃ) steadies the mind.',
        'The supreme object of bhakti — knower of hearts, dispenser of grace, the one to whom one surrenders (prapatti).',
      ],
      significance:
        'Īśvara is the hinge between metaphysics and worship. It allows the high non-dual philosophy and the warm devotional religion of the temples and saints to be two registers of one tradition rather than rivals — the formless reality and the God with a face.',
      origin: {
        label: 'Darśanas (Yoga)',
        href: '/darshanas/',
        explainer:
          'Patañjali gives Īśvara a precise philosophical role: a distinct puruṣa (consciousness) untouched by the afflictions, actions and their results that bind ordinary selves, and the original teacher, unconditioned by time. Devotion to Īśvara (īśvara-praṇidhāna) is offered as one direct means to absorption (samādhi), and Oṃ is named as the sound that designates him. Crucially, even atheistic-leaning systems could accommodate this functional Lord, making Yoga\'s Īśvara a bridge between disciplined practice and theistic faith.',
      },
      references: [
        {
          label: 'Vedānta (Advaita & Vaiṣṇava schools)',
          href: '/upanishads/',
          explainer:
            'The Vedānta schools divide precisely over Īśvara. For Advaita, Īśvara is brahman seen through māyā — wholly real at the level of the world and worship, yet ultimately to be transcended in the realisation of the attributeless absolute. For Rāmānuja, Madhva and the Vaiṣṇava traditions, Īśvara is the highest reality itself: a personal Lord with infinite auspicious qualities, of whom souls and matter form the "body," and loving relationship with whom is the goal. The single word thus carries the central debate of Indian theism — whether the personal God is the absolute or its highest appearance.',
        },
      ],
    },
  },
  {
    id: 'nama-rupa',
    name: 'Nāma-rūpa',
    deva: 'नामरूप',
    seal: 'ना',
    gloss: 'Name & form',
    glossDeva: 'नाम व रूप',
    domain: 'order',
    source: 'Upaniṣads · Bauddha',
    sourceDeva: 'उपनिषदे · बौद्ध',
    blurb: 'The world as a play of "name and form" — the differentiation by which one reality appears as many distinct, nameable things. The seam where unity becomes plurality.',
    tags: ['Plurality', 'Appearance', 'Māyā'],
    href: '/upanishads/',
    detail: {
      intro:
        'Nāma-rūpa — "name and form" — is the tradition\'s term for the principle of individuation: the way an undivided ground comes to appear as a world of separate, named shapes. To see through nāma-rūpa is to see the one behind the many.',
      aspects: [
        'Rūpa is the distinguishing form, nāma the distinguishing name; together they make a "this" different from a "that."',
        'In the Upaniṣads, the one being differentiates itself into the manifold precisely by taking on names and forms.',
        'In Buddhism, nāma-rūpa is a link in dependent origination — the psycho-physical complex that constitutes a sentient being.',
      ],
      significance:
        'Nāma-rūpa marks exactly where metaphysics and experience meet: the world we know is a world of named forms, yet the deepest teaching is that this differentiation is not the final truth. It is the conceptual seam that both Vedānta and Buddhism work to loosen.',
      origin: {
        label: 'Upaniṣads',
        href: '/upanishads/',
        explainer:
          'The Chāndogya Upaniṣad gives the classic account: in the beginning there was being alone, which "entered" its creation and differentiated itself by name and form — "let me make each of these tripartite," it says, deploying nāma-rūpa as the very mechanism of manifestation. The Bṛhadāraṇyaka likewise says the world was then undifferentiated and became differentiated by name and form, so that one says "this is so-and-so, of such-and-such a form." Naming and shaping are thus presented not as human labels added later but as the cosmic act by which the one becomes the many.',
      },
      references: [
        {
          label: 'Bauddha thought (pratītya-samutpāda)',
          href: '/nastika-darshanas/',
          explainer:
            'Buddhism gives nāma-rūpa a technical role as the fourth link in the twelvefold chain of dependent origination: conditioned by consciousness, nāma-rūpa is the bundle of mental factors (nāma — feeling, perception, intention, contact, attention) and physical form (rūpa) that together constitute an experiencing being. Far from naming an enduring person, it analyses the "person" into impersonal, interdependent processes — the Buddhist counterpart to the Upaniṣadic use, turning name-and-form from the disguise of the One into evidence that there is no abiding self at all.',
        },
      ],
    },
  },
  {
    id: 'padartha',
    name: 'Padārtha',
    deva: 'पदार्थ',
    seal: 'प',
    gloss: 'The categories of the real',
    glossDeva: 'सत्तेच्या मूलकोटी',
    domain: 'mind',
    source: 'Vaiśeṣika',
    sourceDeva: 'वैशेषिक',
    blurb: 'Vaiśeṣika\'s inventory of everything that exists, sorted into ultimate categories — substance, quality, action, universal, particular, inherence. An early periodic table of being.',
    tags: ['Categories', 'Dravya', 'Vaiśeṣika'],
    href: '/darshanas/',
    detail: {
      intro:
        'A padārtha is literally "the referent of a word" — a category of the real. Vaiśeṣika\'s project is to list, exhaustively, the ultimate kinds of thing there are, so that every nameable item finds its place. It is one of the world\'s earliest systematic ontologies.',
      aspects: [
        'The six classic categories: substance (dravya), quality (guṇa), action (karma), universal (sāmānya), particular (viśeṣa) and inherence (samavāya).',
        'Later Vaiśeṣika adds a seventh, abhāva — absence — to account for the reality of "not being there" (the missing pot is a genuine fact).',
        'Substances are nine: earth, water, fire, air, ether, time, space, self and mind — the bearers in which qualities and actions reside.',
      ],
      significance:
        'Padārtha analysis makes Vaiśeṣika a realist, pluralist physics-and-metaphysics: the world is many real things of definite kinds, knowable by analysis. Its category of viśeṣa — the ultimate differentiator that keeps two atoms distinct — even gives the school its name.',
      origin: {
        label: 'Darśanas (Vaiśeṣika)',
        href: '/darshanas/',
        explainer:
          'Kaṇāda\'s Vaiśeṣika-sūtra opens by promising to explain dharma and then proceeds, remarkably, through a rigorous classification of being itself. Everything that can be known and named is sorted under the categories; knowledge, on this view, is precisely knowing the similarity and difference of things — placing each correctly within the scheme. The system is austere and naturalistic, building the cosmos from eternal atoms combining under unseen moral law, with the categories as the grid on which all explanation is laid out.',
      },
      references: [
        {
          label: 'Nyāya (combined Nyāya–Vaiśeṣika)',
          href: '/darshanas/',
          explainer:
            'Nyāya, with its strength in logic and epistemology, gradually merged with Vaiśeṣika\'s strength in ontology to form a single Nyāya–Vaiśeṣika tradition. Nyāya supplied the means of knowledge (pramāṇa) by which the categories are established and debated, while Vaiśeṣika supplied the catalogue of what those means disclose. The later "new logic" (Navya-Nyāya) refined the categories into an extraordinarily precise technical language of relations and absences, which became the shared analytical idiom of Sanskrit scholarship across disciplines — from law to poetics — for centuries.',
        },
      ],
    },
  },
  {
    id: 'anu-paramanu',
    name: 'Aṇu & Paramāṇu',
    deva: 'अणु व परमाणु',
    seal: 'अ',
    gloss: 'The atom · indivisible matter',
    glossDeva: 'अणु · अविभाज्य द्रव्य',
    domain: 'mind',
    source: 'Vaiśeṣika',
    sourceDeva: 'वैशेषिक',
    blurb: 'Matter cut down to its limit: the paramāṇu, an eternal, partless, indivisible point of substance. India\'s atomism, argued out a millennium before Dalton.',
    tags: ['Atom', 'Matter', 'Vaiśeṣika'],
    href: '/darshanas/',
    detail: {
      intro:
        'Vaiśeṣika argues that divisibility must stop somewhere: keep halving a thing and you reach the paramāṇu, an eternal, indivisible, dimensionless ultimate unit of matter. From these atoms the whole physical world is built up. It is one of the most rigorous atomisms of the ancient world.',
      aspects: [
        'The argument from division: if matter were infinitely divisible, a mountain and a mustard seed would contain equally infinite parts — absurd; so there must be a smallest, partless unit.',
        'Paramāṇus are eternal and uncaused; what is created and destroyed are their combinations, beginning with the dyad (dvyaṇuka) and triad (tryaṇuka).',
        'Atoms of earth, water, fire and air carry the distinctive qualities (smell, taste, colour, touch) that their compounds display.',
      ],
      significance:
        'Atomism let India explain change and plurality without making matter illusory: the world genuinely arises and perishes as atoms combine and separate, under the governance of unseen moral law (adṛṣṭa). It is the realist alternative to the idealisms of Vedānta and the flux of the Buddhists.',
      origin: {
        label: 'Darśanas (Vaiśeṣika)',
        href: '/darshanas/',
        explainer:
          'Kaṇāda — whose very name puns on "atom-eater" — sets out the atomic theory in the Vaiśeṣika-sūtra and its commentaries. Because partless atoms have no magnitude, two alone cannot produce a perceptible body; the system therefore posits that atoms first form imperceptible dyads, and that three dyads form the triad, the smallest visible mote (seen in a sunbeam). Combination is set in motion not by chance but by adṛṣṭa, the unseen force of accumulated karma, tying the physics of creation to the moral order of the cosmos.',
      },
      references: [
        {
          label: 'Nyāya & the Bauddha critics',
          href: '/nastika-darshanas/',
          explainer:
            'The atom became a major battleground of Indian philosophy. Nyāya defended and refined the Vaiśeṣika atoms as the realist foundation of the world. The Buddhist idealists, especially Vasubandhu, attacked them with a famous dilemma: a truly partless atom could not join others, for if it touched a neighbour on one side it would need a "side," and so have parts; if it occupied the same point, no aggregate could ever grow larger. From this the Yogācāra concluded that external atoms are incoherent and that "matter" is finally mind-made — making the debate over the paramāṇu one of the sharpest exchanges between realism and idealism in the tradition.',
        },
      ],
    },
  },

  // ─────────────────── Knowledge, inference & debate (added) ──────────────────
  {
    id: 'anumana',
    name: 'Anumāna',
    deva: 'अनुमान',
    seal: 'अ',
    gloss: 'Inference',
    glossDeva: 'अनुमान',
    domain: 'knowledge',
    source: 'Nyāya',
    sourceDeva: 'न्याय',
    blurb: 'Knowing the unseen from the seen — fire from smoke. Nyāya\'s analysis of valid inference, built on the invariable tie (vyāpti) between sign and signified.',
    tags: ['Logic', 'Vyāpti', 'Hetu'],
    href: '/darshanas/',
    detail: {
      intro:
        'Anumāna is inference: knowledge of something not directly perceived, reached through a sign that is reliably tied to it. Seeing smoke on a hill, one knows there is fire — the standard example by which the whole Indian theory of reasoning is taught.',
      aspects: [
        'It rests on vyāpti — the invariable concomitance "wherever smoke, there fire" — established by repeated observation and the absence of counter-instances.',
        'The classic public form has five members: claim (pratijñā), reason (hetu), example (udāharaṇa), application (upanaya) and conclusion (nigamana).',
        'A valid reason must meet strict conditions; the theory of fallacies (hetvābhāsa) catalogues exactly how an inference goes wrong.',
      ],
      significance:
        'Anumāna is the second of the means of knowledge (pramāṇa) and the engine of Indian logic. Its demand for a stated reason, a securing example and rules against fallacy made disciplined argument — not mere assertion — the currency of philosophical debate across every school.',
      origin: {
        label: 'Darśanas (Nyāya)',
        href: '/darshanas/',
        explainer:
          'Gautama\'s Nyāya-sūtra defines anumāna and distinguishes its kinds, and the later logicians built it into a rigorous science. The five-membered demonstration is designed for public debate: it does not merely assert the conclusion but exhibits the reason, secures it with an example embodying the universal rule, applies the rule to the case, and only then concludes. The heart of the analysis is vyāpti — the pervasion relation — and much of Nyāya\'s ingenuity went into how a universal tie between sign and signified can be reliably established from finite observation, anticipating the problem of induction.',
      },
      references: [
        {
          label: 'Bauddha logic (Dignāga · Dharmakīrti)',
          href: '/nastika-darshanas/',
          explainer:
            'The Buddhist logicians transformed inference theory. Dignāga reduced the five members to a tighter core and formulated the "three marks of a valid reason" (trairūpya): the reason must be present in the case, present in all similar cases, and absent in all dissimilar ones. Dharmakīrti then grounded vyāpti not in mere observation but in real relations — causation and identity — so that a reliable inference reflects how things actually are. This Buddhist–Nyāya exchange produced some of the most sophisticated logic of the pre-modern world, and the "new logic" (Navya-Nyāya) that grew from it supplied a technical vocabulary used across Indian learning.',
        },
      ],
    },
  },
  {
    id: 'shabda-sphota',
    name: 'Śabda & Sphoṭa',
    deva: 'शब्द व स्फोट',
    seal: 'श',
    gloss: 'Word, testimony & meaning',
    glossDeva: 'शब्द, आप्तवचन व अर्थ',
    domain: 'knowledge',
    source: 'Vyākaraṇa · Mīmāṃsā',
    sourceDeva: 'व्याकरण · मीमांसा',
    blurb: 'Two questions about language: how reliable words give us knowledge (śabda as testimony), and how strings of sounds carry a single meaning (sphoṭa). India\'s deep philosophy of language.',
    tags: ['Language', 'Testimony', 'Bhartṛhari'],
    href: '/vedangas/',
    detail: {
      intro:
        'Indian thought took language as seriously as logic. Śabda names two linked concerns: word as a valid means of knowledge — reliable testimony — and the deeper puzzle of how meaning arises at all, answered by the grammarians\' theory of sphoṭa, the meaning-bearing whole that "bursts forth" in understanding.',
      aspects: [
        'Śabda as pramāṇa: the trustworthy word of a reliable source (āpta) is an independent route to knowledge, irreducible to inference.',
        'The puzzle of meaning: sounds are heard one after another and vanish, so what carries the unified sense of a word or sentence?',
        'Sphoṭa is the grammarians\' answer — an indivisible linguistic unit, grasped whole, that the passing sounds only manifest.',
      ],
      significance:
        'By treating testimony as a genuine source of knowledge, the tradition gave scripture and teacher their epistemic standing. And in sphoṭa it produced a theory of meaning as an integral whole rather than a sum of parts — a philosophy of language that still speaks to modern debates.',
      origin: {
        label: 'Vyākaraṇa (Bhartṛhari)',
        href: '/vedangas/',
        explainer:
          'Bhartṛhari\'s Vākyapadīya (c. 5th century) is the great text of the grammarians\' philosophy. He argues that the real linguistic unit is not the letter or even the word but the sentence, grasped as a single meaning-whole (sphoṭa); the sequence of sounds merely reveals it, the way successive glimpses reveal one object. Behind this he sets a bold metaphysics — śabda-brahman, the view that ultimate reality is of the nature of language, and that all awareness is "interpenetrated by the word." Thought and language, for Bhartṛhari, cannot finally be prised apart.',
      },
      references: [
        {
          label: 'Mīmāṃsā & Nyāya',
          href: '/darshanas/',
          explainer:
            'Mīmāṃsā, the school of Vedic interpretation, developed the theory of śabda most rigorously, since everything turned on how the words of the Veda convey their injunctions; it held the word–meaning relation to be eternal and the Veda authorless, so its testimony needs no human guarantor. Nyāya, by contrast, grounded verbal testimony in the reliability of a trustworthy speaker and argued against sphoṭa, holding that meaning is built up from individual letters and words by convention. The disagreement made philosophy of language a central, sharply argued field — concerning the eternity of language, the unit of meaning, and how words hook onto the world.',
        },
      ],
    },
  },
  {
    id: 'vada-shastrartha',
    name: 'Vāda & Śāstrārtha',
    deva: 'वाद व शास्त्रार्थ',
    seal: 'वा',
    gloss: 'Honest debate',
    glossDeva: 'वाद व शास्त्रार्थ',
    domain: 'knowledge',
    source: 'Nyāya',
    sourceDeva: 'न्याय',
    blurb: 'The rules of the public contest of ideas — the difference between truth-seeking debate and mere point-scoring, and the etiquette that made open argument the tradition\'s engine.',
    tags: ['Debate', 'Vāda', 'Method'],
    href: '/darshanas/',
    detail: {
      intro:
        'Indian thought advanced largely through formal public debate (śāstrārtha), and Nyāya theorised the debate itself. Its categories distinguish honest, truth-seeking argument from its corrupt imitations — a code of intellectual conduct as much as a logic.',
      aspects: [
        'Vāda — the good kind: debate between parties who both seek the truth, bound by valid means of knowledge and reasoning, willing to be convinced.',
        'Jalpa and vitaṇḍā — the degenerate kinds: wrangling that aims only to win, and pure refutation that tears down without defending any thesis.',
        'A shared apparatus of valid reasons, examples, and recognised fallacies (hetvābhāsa) let opponents disagree precisely and concede honestly.',
      ],
      significance:
        'Because positions had to be defended in open assembly against the sharpest critics — often across sectarian lines, with the loser expected to concede — Indian philosophy was forced to be rigorous, explicit and self-critical. The debate culture is why the tradition argued with itself for two thousand years and grew stronger for it.',
      origin: {
        label: 'Darśanas (Nyāya)',
        href: '/darshanas/',
        explainer:
          'The Nyāya-sūtra devotes whole sections to the machinery of debate: the members of a demonstration, legitimate and illegitimate tactics, the points of defeat (nigraha-sthāna) that end a contest, and the three modes vāda, jalpa and vitaṇḍā. This was not idle taxonomy — courts, monasteries and royal assemblies hosted real debates with real stakes, and a thinker needed both a winning argument and a way to show, by agreed rules, that he had won. Nyāya supplied the shared rulebook that made such contests decidable.',
      },
      references: [
        {
          label: 'The wider tradition (Upaniṣads to the schools)',
          href: '/upanishads/',
          explainer:
            'The debate impulse runs from the Upaniṣadic dialogues — Yājñavalkya facing down a hall of questioners, Gārgī pressing him to the limit — through the great cross-school contests of the classical age. Buddhists, Jains and the orthodox schools met in public to defend their views by shared standards of evidence; tradition records debates said to have turned the allegiance of kings and the fate of monasteries. This ethos made dissent productive rather than threatening: an opponent who exposed a weak argument was doing the tradition a service, forcing every school to sharpen its claims.',
        },
      ],
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
