// Contributors — ṛṣis, ācāryas, scientists, poets, saints, reformers.
// All copy is original synthesis intended for an educational platform.

// Full contribution detail shown in the click-through modal.
// Added in batches of five; cards without a `detail` fall back to the blurb.
export type ContributorDetail = {
  intro: string;            // expanded opening paragraph
  contributions: string[];  // the principal contributions, one per line
  legacy: string;           // closing paragraph on influence / legacy
};

export type Contributor = {
  id: string;
  name: string;        // Roman / IAST transliteration
  deva: string;        // Devanāgarī
  seal: string;        // 1–2 Devanāgarī characters shown in the seal medallion
  epithet?: string;    // honourific or descriptor (Roman)
  epithetDeva?: string;
  dates: string;       // Roman dates / range
  datesDeva: string;
  era: 'vedic' | 'classical' | 'medieval' | 'modern';
  tradition: string;   // discipline / school (Roman)
  traditionDeva: string;
  blurb: string;
  works: string[];     // 2–4 short tags
  href?: string;       // optional link to a related section page
  detail?: ContributorDetail; // full contribution write-up for the modal
};

export const CONTRIBUTORS: Contributor[] = [
  // ─────────────────────────────── Vedic Era ──────────────────────────────────
  {
    id: 'vyasa',
    name: 'Vyāsa',
    deva: 'व्यासः',
    seal: 'व्या',
    epithet: 'Veda-Vyāsa',
    epithetDeva: 'वेदव्यासः',
    dates: 'Vedic period',
    datesDeva: 'वैदिक काल',
    era: 'vedic',
    tradition: 'Śruti redaction · Itihāsa',
    traditionDeva: 'श्रुति-संपादन · इतिहास',
    blurb: 'Divided the one Veda into four and arranged the Brāhmaṇas; composed the Mahābhārata, the Brahma-Sūtra and the eighteen Purāṇas — the architect of the canon.',
    works: ['Veda redaction', 'Mahābhārata', 'Brahma-Sūtra', '18 Purāṇas'],
    href: '/vedas/',
    detail: {
      intro:
        'Vyāsa — literally “the compiler” — stands at the threshold of the recorded tradition. Born Kṛṣṇa Dvaipāyana, he is remembered less as a single author than as the organising intelligence who gave the inherited revelation its lasting architecture.',
      contributions: [
        'Divided the single primordial Veda into the four Saṃhitās — Ṛk, Yajus, Sāman and Atharvan — and assigned each to a disciple, founding the four lines of Vedic transmission.',
        'Arranged the Brāhmaṇa prose and the ritual apparatus that frames the hymns, fixing the relationship between mantra and rite.',
        'Composed the Mahābhārata, the hundred-thousand-verse “fifth Veda” in which the Bhagavad-Gītā is set.',
        'Condensed the teaching of the Upaniṣads into the 555 aphorisms of the Brahma-Sūtra — the text every later Vedāntin is obliged to interpret.',
        'Traditionally credited with the eighteen Mahāpurāṇas, the encyclopaedic narrative vehicle of popular dharma.',
      ],
      legacy:
        'Because the very act of editing the canon is called vyāsa, every later redactor works in his shadow. The four Vedic schools, the epic tradition and the entire enterprise of Vedānta all trace their starting point to him.',
    },
  },
  {
    id: 'valmiki',
    name: 'Vālmīki',
    deva: 'वाल्मीकिः',
    seal: 'वा',
    epithet: 'Ādi-kavi',
    epithetDeva: 'आदिकविः',
    dates: 'Late Vedic period',
    datesDeva: 'उत्तर वैदिक काल',
    era: 'vedic',
    tradition: 'Itihāsa · Sanskrit kāvya',
    traditionDeva: 'इतिहास · संस्कृत काव्य',
    blurb: 'The “first poet,” to whom grief gave the first śloka. His Rāmāyaṇa fixes the shape of every later Indic narrative.',
    works: ['Rāmāyaṇa', 'Anuṣṭubh metre'],
    href: '/itihasa/',
    detail: {
      intro:
        'Vālmīki is honoured as the ādi-kavi, the first poet — the figure in whom deliberate, metrical literature is said to begin. Tradition tells that the sight of a hunter killing one of a pair of mating cranes wrung from him the first śloka, grief crystallising into measured speech.',
      contributions: [
        'Composed the Rāmāyaṇa, the twenty-four-thousand-verse epic that became the template for narrative poetry across the subcontinent and beyond.',
        'Gave the anuṣṭubh śloka its classical shape — the thirty-two-syllable couplet that remains the default metre of Sanskrit storytelling.',
        'Established the conventions of mahākāvya: the heroic protagonist, the structured cantos, and the set descriptions of cities, seasons and battles.',
      ],
      legacy:
        'Every later retelling — Tamil, Awadhi, Bengali, Telugu, Southeast Asian — measures itself against his text. In the Indic imagination the shape of the ideal man, the ideal kingdom and the ideal poem all descend from Vālmīki.',
    },
  },
  {
    id: 'vasishtha',
    name: 'Vasiṣṭha',
    deva: 'वसिष्ठः',
    seal: 'व',
    epithet: 'Saptarṣi',
    epithetDeva: 'सप्तर्षिः',
    dates: 'Ṛgvedic period',
    datesDeva: 'ऋग्वेदकाल',
    era: 'vedic',
    tradition: 'Ṛgveda · Maṇḍala VII',
    traditionDeva: 'ऋग्वेद · सप्तम मण्डल',
    blurb: 'Seer of the seventh maṇḍala and preceptor of the Ikṣvāku line. The Yoga-Vāsiṣṭha carries his name into later Advaita.',
    works: ['Ṛgveda Maṇḍala VII', 'Yoga-Vāsiṣṭha (attrib.)'],
    detail: {
      intro:
        'Vasiṣṭha is counted among the saptarṣis, the seven seers, and is the ṛṣi of the seventh maṇḍala of the Ṛgveda. He appears as the family priest (purohita) of the Ikṣvāku kings — the dynasty into which Rāma is later born.',
      contributions: [
        'Seer of the entire seventh maṇḍala of the Ṛgveda, including the hymns to Varuṇa that are among the tradition’s most searching meditations on guilt and grace.',
        'Embodies the office of the brahman purohita — the priest who binds the kingdom’s prosperity to right ritual conduct.',
        'Lends his name to the Vasiṣṭha Dharmasūtra and, in later tradition, to the Yoga-Vāsiṣṭha, a vast Advaitic dialogue addressed to Rāma.',
      ],
      legacy:
        'As the archetypal preceptor of kings, Vasiṣṭha stands for the ideal of priestly counsel to royal power — the steady brahminical pole set against the restless kṣatriya energy of his rival Viśvāmitra.',
    },
  },
  {
    id: 'vishvamitra',
    name: 'Viśvāmitra',
    deva: 'विश्वामित्रः',
    seal: 'वि',
    epithet: 'Saptarṣi',
    epithetDeva: 'सप्तर्षिः',
    dates: 'Ṛgvedic period',
    datesDeva: 'ऋग्वेदकाल',
    era: 'vedic',
    tradition: 'Ṛgveda · Maṇḍala III',
    traditionDeva: 'ऋग्वेद · तृतीय मण्डल',
    blurb: 'The kṣatriya who became a brahmarṣi. Seer of the third maṇḍala and of the Gāyatrī — the mantra recited every dawn for three thousand years.',
    works: ['Ṛgveda Maṇḍala III', 'Gāyatrī Mantra'],
    detail: {
      intro:
        'Viśvāmitra is the great exception among the seers — a king by birth who, by sheer ascetic resolve, won the rank of brahmarṣi that no warrior was thought able to reach. His rivalry with Vasiṣṭha is one of the oldest narrative threads in the tradition.',
      contributions: [
        'Seer of the third maṇḍala of the Ṛgveda.',
        'Revealed the Gāyatrī mantra (Ṛgveda 3.62.10) — the verse to Savitṛ recited at dawn for three millennia and the heart of Vedic initiation.',
        'In the Rāmāyaṇa, the sage who takes the young Rāma and Lakṣmaṇa as his charges and arms them for their task.',
      ],
      legacy:
        'Viśvāmitra is the standing proof, inside the tradition’s own myth, that spiritual attainment is open to effort rather than fixed by birth — a theme later reformers return to again and again.',
    },
  },
  {
    id: 'bharadvaja',
    name: 'Bharadvāja',
    deva: 'भरद्वाजः',
    seal: 'भ',
    epithet: 'Saptarṣi',
    epithetDeva: 'सप्तर्षिः',
    dates: 'Ṛgvedic period',
    datesDeva: 'ऋग्वेदकाल',
    era: 'vedic',
    tradition: 'Ṛgveda · Maṇḍala VI',
    traditionDeva: 'ऋग्वेद · षष्ठ मण्डल',
    blurb: 'Seer of the sixth maṇḍala. His gotra continues into both Āyurveda and Dhanurveda — a single line carries medicine and arms.',
    works: ['Ṛgveda Maṇḍala VI', 'Bharadvāja Saṃhitā (Āyurveda)'],
    detail: {
      intro:
        'Bharadvāja is the seer of the sixth maṇḍala of the Ṛgveda and the founder of one of the most populous of brahmin gotras. His name marks a lineage that carries, unusually, both the healing arts and the science of arms.',
      contributions: [
        'Seer of the sixth maṇḍala of the Ṛgveda.',
        'Founding figure of the Bharadvāja gotra, one of the principal pravara lineages.',
        'Named as an early authority in the Āyurvedic tradition — the Caraka-Saṃhitā opens by tracing medical knowledge through Bharadvāja.',
        'Associated in later texts with the Dhanurveda, the science of archery and warfare.',
      ],
      legacy:
        'Through the gotra system and the twin inheritances of medicine and arms, Bharadvāja’s name threads through both the Āyurvedic and the martial traditions — a single ṛṣi at the root of two very different sciences.',
    },
  },
  {
    id: 'yajnavalkya',
    name: 'Yājñavalkya',
    deva: 'याज्ञवल्क्यः',
    seal: 'या',
    dates: 'c. 8th–7th c. BCE',
    datesDeva: 'इ.स.पूर्व ८–७ शतक',
    era: 'vedic',
    tradition: 'Upaniṣad · Dharma · Yajurveda',
    traditionDeva: 'उपनिषद् · धर्म · यजुर्वेद',
    blurb: 'Central voice of the Bṛhadāraṇyaka. Compiled the Śukla Yajurveda; the Yājñavalkya-Smṛti carries his name as a rule-book of dharma.',
    works: ['Bṛhadāraṇyaka dialogues', 'Śukla Yajurveda', 'Yājñavalkya-Smṛti'],
    href: '/upanishads/',
    detail: {
      intro:
        'Yājñavalkya is the towering intellect of the early Upaniṣadic age — the sage of the Bṛhadāraṇyaka, equally at home in the technicalities of ritual and in the most radical metaphysics of the Self. At the court of King Janaka of Videha he outargues every rival brought against him.',
      contributions: [
        'Dominates the Bṛhadāraṇyaka Upaniṣad, where his dialogues — with Gārgī, Maitreyī and Janaka — set out the doctrine of the imperishable Self (ātman) and the method of negation, neti neti (“not this, not this”).',
        'Compiled and transmitted the Śukla (White) Yajurveda, the Vājasaneyī Saṃhitā, which tradition says he received afresh from the Sun.',
        'Lends his name to the Yājñavalkya-Smṛti, one of the most systematic of the dharmaśāstras and a major source for later Hindu jurisprudence.',
        'Frames the teaching that the knower can never be made an object of knowledge — “you cannot see the seer of seeing.”',
      ],
      legacy:
        'Yājñavalkya fixes the characteristic move of Upaniṣadic thought: the turn inward to the witnessing Self that all later Vedānta — Advaita above all — takes as its starting point.',
    },
  },
  {
    id: 'gargi',
    name: 'Gārgī Vāchaknavī',
    deva: 'गार्गी वाचक्नवी',
    seal: 'गा',
    epithet: 'Brahmavādinī',
    epithetDeva: 'ब्रह्मवादिनी',
    dates: 'c. 8th c. BCE',
    datesDeva: 'इ.स.पूर्व ८ शतक',
    era: 'vedic',
    tradition: 'Upaniṣad · philosophy',
    traditionDeva: 'उपनिषद् · तत्त्वज्ञान',
    blurb: 'At Janaka’s court she pressed Yājñavalkya with the question on which all metaphysics turns — and was the only interlocutor told to stop.',
    works: ['Bṛhadāraṇyaka 3.6, 3.8'],
    href: '/upanishads/',
    detail: {
      intro:
        'Gārgī Vāchaknavī is among the brahmavādinīs, the women who debated openly in the Vedic assemblies. At Janaka’s great sacrificial gathering she alone returns to challenge Yājñavalkya a second time, with the deepest question of all — what is the ground on which everything, warp and woof, is woven?',
      contributions: [
        'Interlocutor of Yājñavalkya in two celebrated passages of the Bṛhadāraṇyaka Upaniṣad (3.6 and 3.8).',
        'Presses the regress of causes — “on what is the world woven?” — until the inquiry reaches the akṣara, the imperishable, beyond space, time and ether.',
        'Stands in the tradition as a woman acknowledged as a master of brahmavidyā, the knowledge of the Absolute.',
      ],
      legacy:
        'Gārgī’s questions mark the outer edge of metaphysical inquiry in the Upaniṣads — the point where the chain of explanation stops and the imperishable is named. She remains a touchstone for the place of women in the Vedic intellectual tradition.',
    },
  },
  {
    id: 'maitreyi',
    name: 'Maitreyī',
    deva: 'मैत्रेयी',
    seal: 'मै',
    epithet: 'Brahmavādinī',
    epithetDeva: 'ब्रह्मवादिनी',
    dates: 'c. 8th c. BCE',
    datesDeva: 'इ.स.पूर्व ८ शतक',
    era: 'vedic',
    tradition: 'Upaniṣad · philosophy',
    traditionDeva: 'उपनिषद् · तत्त्वज्ञान',
    blurb: 'Refused her husband’s wealth and asked for what makes a thing dear instead. The Maitreyī dialogue opens the Upaniṣadic teaching on the Self.',
    works: ['Bṛhadāraṇyaka 2.4, 4.5'],
    href: '/upanishads/',
    detail: {
      intro:
        'Maitreyī is the wife of Yājñavalkya who, when he prepares to renounce the world and divide his property, refuses the wealth and asks instead for what is truly worth having. Her dialogue is one of the most quoted passages in all of Vedānta.',
      contributions: [
        'Central voice of the Maitreyī dialogue in the Bṛhadāraṇyaka Upaniṣad (2.4, repeated at 4.5).',
        'Asks whether wealth can make one immortal — and on being told it cannot, sets it aside: “what should I do with that by which I do not become immortal?”',
        'Receives the teaching that all things are dear not for their own sake but for the sake of the Self (ātman) — “it is the Self that should be seen, heard, reflected on and meditated upon.”',
      ],
      legacy:
        'The Maitreyī dialogue compresses the whole Upaniṣadic ethic into a single exchange: the move from possession to knowledge, from the dear object to the Self for whose sake all is dear. She is remembered as a brahmavādinī and a model seeker.',
    },
  },
  {
    id: 'agastya',
    name: 'Agastya',
    deva: 'अगस्त्यः',
    seal: 'अ',
    dates: 'Vedic period',
    datesDeva: 'वैदिक काल',
    era: 'vedic',
    tradition: 'Ṛgveda · southern transmission',
    traditionDeva: 'ऋग्वेद · दक्षिण प्रसार',
    blurb: 'Seer credited with carrying Vedic dharma south of the Vindhyas. Lopāmudrā shares his hymns; the southern grammars and siddha lineages claim him as ādi-guru.',
    works: ['Ṛgveda hymns (with Lopāmudrā)', 'Agastya-Saṃhitā'],
    detail: {
      intro:
        'Agastya is the ṛṣi the tradition credits with carrying Vedic culture south across the Vindhya range — the sage of the threshold between north and south, and one of the saptarṣis of the southern sky. His wife Lopāmudrā is herself a hymn-composer of the Ṛgveda.',
      contributions: [
        'Seer of Ṛgvedic hymns, several composed in dialogue with his wife Lopāmudrā — among the rare hymns voiced by a woman.',
        'Remembered as the sage who first took Vedic dharma south of the Vindhyas, in legend bidding the mountain bow until his return.',
        'Claimed as ādi-guru by the Tamil grammatical tradition (the Agattiyam) and as a founder-figure by the Siddha medical lineages of the south.',
        'Lends his name to the Agastya-Saṃhitā and to a wide body of later tantric and astronomical literature.',
      ],
      legacy:
        'Agastya is the bridge-figure of the tradition — the point at which the northern Vedic and the southern Dravidian streams are imagined to meet. Few ṛṣis are invoked across so many fields: hymn, grammar, medicine and the very geography of the subcontinent.',
    },
  },

  // ───────────────────────────── Classical Era ────────────────────────────────
  {
    id: 'mahavira',
    name: 'Mahāvīra',
    deva: 'महावीरः',
    seal: 'म',
    epithet: '24th Tīrthaṅkara',
    epithetDeva: '२४वे तीर्थंकर',
    dates: '599–527 BCE',
    datesDeva: 'इ.स.पूर्व ५९९–५२७',
    era: 'classical',
    tradition: 'Jaina darśana',
    traditionDeva: 'जैन दर्शन',
    blurb: 'Recensed and systematised the Jaina path of ahiṃsā, anekāntavāda and aparigraha — the ethics of multi-sided truth and radical non-harm.',
    works: ['Five mahāvratas', 'Syādvāda', 'Āgama tradition'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Vardhamāna Mahāvīra, the twenty-fourth and last Tīrthaṅkara of this cosmic age, is the figure who gave Jainism its enduring shape. A contemporary of the Buddha, he renounced a princely life for twelve years of extreme asceticism before teaching the path of liberation he had won.',
      contributions: [
        'Systematised the five great vows (mahāvratas): non-violence (ahiṃsā), truth, non-stealing, celibacy and non-possession (aparigraha).',
        'Taught anekāntavāda, the doctrine of the many-sidedness of reality, and its logical expression syādvāda — that every assertion holds only “in some respect.”',
        'Carried ahiṃsā to its furthest reach, extending non-harm to every living being down to the most minute.',
        'Organised the fourfold community (saṅgha) of monks, nuns, laymen and laywomen, and stands behind the Āgama scriptures that preserve his teaching.',
      ],
      legacy:
        'Mahāvīra’s anekāntavāda gave Indian thought its most rigorous philosophy of intellectual humility, and his radical ahiṃsā shaped the ethics of the whole subcontinent — reaching, much later, the non-violence of Gandhi.',
    },
  },
  {
    id: 'buddha',
    name: 'Gautama Buddha',
    deva: 'गौतम बुद्धः',
    seal: 'बु',
    epithet: 'Śākyamuni',
    epithetDeva: 'शाक्यमुनिः',
    dates: 'c. 563–483 BCE',
    datesDeva: 'इ.स.पूर्व ५६३–४८३',
    era: 'classical',
    tradition: 'Bauddha darśana',
    traditionDeva: 'बौद्ध दर्शन',
    blurb: 'Set the Four Noble Truths and the Eightfold Path. The middle way reframed dharma without God, soul, or sacrifice — and travelled further than any Indian school.',
    works: ['Dhammacakkappavattana', 'Vinaya', 'Sutta Piṭaka'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Siddhārtha Gautama, the Śākyamuni Buddha, abandoned a sheltered princely life in search of an end to suffering, and after long ascetic experiment found awakening under the bodhi tree at Bodh Gayā. His teaching reframed the whole question of dharma.',
      contributions: [
        'Set out the Four Noble Truths — suffering, its origin in craving, its cessation, and the path to that cessation.',
        'Taught the Noble Eightfold Path and the Middle Way between indulgence and self-mortification.',
        'Reframed dharma without reliance on a creator God, an eternal soul (anattā) or Vedic sacrifice, grounding it instead in dependent origination (pratītya-samutpāda).',
        'Founded the saṅgha, the monastic order whose Vinaya discipline and Sutta discourses preserved and carried the teaching.',
      ],
      legacy:
        'From a teacher in the Gangetic plain the Buddha became the source of a tradition that spread across the whole of Asia — Theravāda, Mahāyāna and Vajrayāna — the most widely travelled of all the schools born in India.',
    },
  },
  {
    id: 'panini',
    name: 'Pāṇini',
    deva: 'पाणिनिः',
    seal: 'पा',
    dates: 'c. 5th–4th c. BCE',
    datesDeva: 'इ.स.पूर्व ५–४ शतक',
    era: 'classical',
    tradition: 'Vyākaraṇa · Vedāṅga',
    traditionDeva: 'व्याकरण · वेदाङ्ग',
    blurb: 'The Aṣṭādhyāyī: nearly four thousand generative rules that derive every well-formed Sanskrit utterance. The most precise grammar written in any ancient language.',
    works: ['Aṣṭādhyāyī', 'Dhātupāṭha', 'Gaṇapāṭha'],
    href: '/vedangas/',
    detail: {
      intro:
        'Pāṇini, working in the north-west around the fifth or fourth century BCE, produced in the Aṣṭādhyāyī a description of Sanskrit so complete and so economical that it has no rival in the ancient world. It is less a grammar book than a formal system for generating a language.',
      contributions: [
        'Composed the Aṣṭādhyāyī, nearly four thousand sūtras that derive every well-formed Sanskrit word and sentence from roots and affixes.',
        'Built a metalanguage of technical markers, abbreviations and ordering conventions — a generative apparatus anticipating modern formal grammar by millennia.',
        'Compiled the supporting Dhātupāṭha (list of verbal roots) and Gaṇapāṭha (lists of word-classes) on which the rules operate.',
        'Fixed the standard of classical Sanskrit, the language in which almost all later śāstra is written.',
      ],
      legacy:
        'Pāṇini’s system became the model of rigour for every Indian science, and in the modern era drew the admiration of linguists from Bloomfield to the founders of generative grammar — a two-and-a-half-thousand-year-old grammar still studied as a working theory.',
    },
  },
  {
    id: 'kautilya',
    name: 'Cāṇakya / Kauṭilya',
    deva: 'कौटिल्यः',
    seal: 'कौ',
    epithet: 'Viṣṇugupta',
    epithetDeva: 'विष्णुगुप्तः',
    dates: 'c. 4th c. BCE',
    datesDeva: 'इ.स.पूर्व ४ शतक',
    era: 'classical',
    tradition: 'Arthaśāstra · statecraft',
    traditionDeva: 'अर्थशास्त्र · राजनीति',
    blurb: 'Architect of the Mauryan order. The Arthaśāstra reads economics, intelligence, foreign policy and law as a single integrated science of rule.',
    works: ['Arthaśāstra', 'Cāṇakya-nīti'],
    detail: {
      intro:
        'Cāṇakya — also called Kauṭilya and Viṣṇugupta — is remembered as the brahmin strategist who toppled the Nanda dynasty and raised Candragupta Maurya to the throne, founding the first great pan-Indian empire. The Arthaśāstra is the manual of the order he built.',
      contributions: [
        'Authored the Arthaśāstra, a comprehensive science of statecraft covering administration, law, taxation, agriculture, diplomacy, espionage and war.',
        'Treated economics (artha) as a discipline in its own right — the material basis of a stable polity.',
        'Set out a realist theory of inter-state relations, the maṇḍala of allies and enemies, centuries before comparable treatises elsewhere.',
        'Associated with the Cāṇakya-nīti, a popular collection of aphorisms on conduct and prudence.',
      ],
      legacy:
        'The Arthaśāstra, lost for centuries and rediscovered in 1905, reshaped the modern understanding of ancient Indian political thought. Cāṇakya endures as the subcontinent’s archetype of the shrewd counsellor — India’s answer to Machiavelli, written seventeen centuries earlier.',
    },
  },
  {
    id: 'patanjali',
    name: 'Patañjali',
    deva: 'पतञ्जलिः',
    seal: 'प',
    dates: 'c. 2nd c. BCE',
    datesDeva: 'इ.स.पूर्व २ शतक',
    era: 'classical',
    tradition: 'Yoga · Vyākaraṇa',
    traditionDeva: 'योग · व्याकरण',
    blurb: 'The Yoga-Sūtra distils meditative practice into 196 aphorisms. The same tradition assigns him the Mahābhāṣya — the great commentary on Pāṇini.',
    works: ['Yoga-Sūtra', 'Mahābhāṣya'],
    href: '/darshanas/',
    detail: {
      intro:
        'Patañjali is the name attached to two foundational works in two different fields — the Yoga-Sūtra of meditative discipline and the Mahābhāṣya, the great grammatical commentary. Tradition treats them as one author; either way the name stands at the head of yoga as a system.',
      contributions: [
        'Compiled the Yoga-Sūtra, 196 aphorisms that organise meditative practice into the eight limbs (aṣṭāṅga) of yoga.',
        'Defined yoga as the stilling of the modifications of the mind (citta-vṛtti-nirodha) — the classic formulation of the whole tradition.',
        'Systematised the relationship between Sāṅkhya metaphysics and contemplative practice, giving Yoga its place among the six darśanas.',
        'By tradition also the author of the Mahābhāṣya, the authoritative commentary on Pāṇini’s grammar.',
      ],
      legacy:
        'The Yoga-Sūtra is the text on which the global practice of yoga ultimately rests. Patañjali’s eight limbs remain the reference framework for meditation, ethics and posture alike, from classical commentaries to the modern studio.',
    },
  },
  {
    id: 'kapila',
    name: 'Kapila',
    deva: 'कपिलः',
    seal: 'क',
    dates: 'pre-classical',
    datesDeva: 'पूर्व-अभिजात काल',
    era: 'classical',
    tradition: 'Sāṅkhya darśana',
    traditionDeva: 'सांख्य दर्शन',
    blurb: 'Founding ācārya of Sāṅkhya. The dualism of puruṣa and prakṛti enters the Gītā, Yoga, Āyurveda and every later school as a default working vocabulary.',
    works: ['Sāṅkhya-Sūtra (attrib.)', 'Sāṅkhya-Kārikā (line)'],
    href: '/darshanas/',
    detail: {
      intro:
        'Kapila is honoured as the founding ācārya of Sāṅkhya, the oldest of the six orthodox darśanas. Though almost nothing of his own work survives, the dualist vocabulary he is credited with became the common property of nearly every later Indian system.',
      contributions: [
        'Founder of the Sāṅkhya school, traditionally credited with the (now lost) Sāṅkhya-Sūtra.',
        'Set out the dualism of puruṣa (pure consciousness) and prakṛti (primal matter), and the unfolding of the world through the three guṇas.',
        'Provided the analytical scheme of the twenty-five tattvas, the categories by which existence is enumerated — the very word sāṅkhya means “enumeration.”',
        'Supplied the working vocabulary later taken up by the Gītā, Yoga, Āyurveda and Vedānta.',
      ],
      legacy:
        'Sāṅkhya’s analysis of consciousness and matter is the substructure beneath much of Indian thought; even schools that reject its dualism argue in its terms. Kapila stands as the tradition’s first systematic philosopher.',
    },
  },
  {
    id: 'gautama-nyaya',
    name: 'Gautama (Akṣapāda)',
    deva: 'अक्षपाद गौतमः',
    seal: 'गौ',
    dates: 'c. 2nd c. BCE',
    datesDeva: 'इ.स.पूर्व २ शतक',
    era: 'classical',
    tradition: 'Nyāya darśana',
    traditionDeva: 'न्याय दर्शन',
    blurb: 'The Nyāya-Sūtra: the formal theory of pramāṇa (means of knowledge) and the five-membered syllogism that powered Indic debate for two millennia.',
    works: ['Nyāya-Sūtra'],
    href: '/darshanas/',
    detail: {
      intro:
        'Akṣapāda Gautama is the founder of Nyāya, the school of logic and epistemology. His Nyāya-Sūtra gave Indian thought its formal tools of reasoning and debate — the apparatus that every other school would have to use to argue at all.',
      contributions: [
        'Composed the Nyāya-Sūtra, the foundational text of Indian logic and theory of knowledge.',
        'Set out the four valid means of knowledge (pramāṇas): perception, inference, comparison and testimony.',
        'Formalised the five-membered syllogism (avayava) — proposition, reason, example, application and conclusion — the standard form of Indian demonstration.',
        'Built a theory of debate, fallacy and refutation that disciplined philosophical argument across all traditions.',
      ],
      legacy:
        'Nyāya became the shared grammar of Indian reasoning; mastery of its categories was the price of entry to any serious debate. Its later “new logic” (Navya-Nyāya) developed a technical precision that rivals modern formal logic.',
    },
  },
  {
    id: 'kanada',
    name: 'Kaṇāda',
    deva: 'कणादः',
    seal: 'क',
    epithet: 'Ulūka',
    epithetDeva: 'उलूकः',
    dates: 'c. 2nd c. BCE',
    datesDeva: 'इ.स.पूर्व २ शतक',
    era: 'classical',
    tradition: 'Vaiśeṣika darśana',
    traditionDeva: 'वैशेषिक दर्शन',
    blurb: 'The Vaiśeṣika-Sūtra: an atomistic ontology of substance, quality and motion two thousand years before Dalton — and paired with Nyāya into a single school.',
    works: ['Vaiśeṣika-Sūtra'],
    href: '/darshanas/',
    detail: {
      intro:
        'Kaṇāda, also called Ulūka, is the founder of Vaiśeṣika, the school of natural philosophy. His Vaiśeṣika-Sūtra proposes that the physical world is built from indivisible atoms (paramāṇu) — an analysis that pairs naturally with the logic of Nyāya.',
      contributions: [
        'Composed the Vaiśeṣika-Sūtra, the foundational text of Indian atomism and ontology.',
        'Proposed that material substances are composed of eternal, indivisible atoms combining into dyads and triads.',
        'Classified reality into categories (padārthas) — substance, quality, action, generality, particularity and inherence.',
        'Grounded an account of the physical world that the allied Nyāya school adopted as its natural philosophy.',
      ],
      legacy:
        'Kaṇāda’s atomism anticipates, in conceptual outline, ideas that European science would not reach until the nineteenth century. Fused with Nyāya, his Vaiśeṣika supplied classical India with its most developed philosophy of nature.',
    },
  },
  {
    id: 'jaimini',
    name: 'Jaimini',
    deva: 'जैमिनिः',
    seal: 'जै',
    dates: 'c. 3rd c. BCE',
    datesDeva: 'इ.स.पूर्व ३ शतक',
    era: 'classical',
    tradition: 'Pūrva Mīmāṃsā',
    traditionDeva: 'पूर्व मीमांसा',
    blurb: 'The Pūrva-Mīmāṃsā-Sūtra: the hermeneutics of Vedic ritual and the theory of injunction (vidhi) that later jurisprudence inherits whole.',
    works: ['Pūrva-Mīmāṃsā-Sūtra'],
    href: '/darshanas/',
    detail: {
      intro:
        'Jaimini is the founder of Pūrva Mīmāṃsā, the school devoted to the interpretation of the ritual portion of the Veda. His Mīmāṃsā-Sūtra is, in effect, the first systematic theory of how to read an authoritative text — a science of interpretation born from the need to apply Vedic injunction.',
      contributions: [
        'Composed the Pūrva-Mīmāṃsā-Sūtra, the foundational text of Vedic hermeneutics.',
        'Developed the theory of injunction (vidhi) — how a command is identified, qualified and applied — the heart of Mīmāṃsā.',
        'Defended the eternality and self-validity of the Veda and the inherent power of the ritual word.',
        'Built the rules of textual interpretation that later Dharmaśāstra and Hindu jurisprudence inherited whole.',
      ],
      legacy:
        'Mīmāṃsā’s interpretive principles became the shared method for reading any normative text in India, from ritual manuals to law. Jaimini’s hermeneutics underlie the entire later tradition of dharma and its application.',
    },
  },
  {
    id: 'badarayana',
    name: 'Bādarāyaṇa',
    deva: 'बादरायणः',
    seal: 'बा',
    dates: 'c. 2nd c. BCE',
    datesDeva: 'इ.स.पूर्व २ शतक',
    era: 'classical',
    tradition: 'Vedānta · Uttara Mīmāṃsā',
    traditionDeva: 'वेदान्त · उत्तर मीमांसा',
    blurb: 'The Brahma-Sūtra summarises the Upaniṣads in 555 aphorisms. Every later Vedāntin — Śaṅkara, Rāmānuja, Madhva — writes a bhāṣya on it.',
    works: ['Brahma-Sūtra'],
    href: '/darshanas/',
    detail: {
      intro:
        'Bādarāyaṇa is the author of the Brahma-Sūtra, the foundational text of Vedānta. In a few hundred terse aphorisms he organised the scattered teaching of the Upaniṣads into a single coherent system — and set the agenda for two thousand years of Indian metaphysics.',
      contributions: [
        'Composed the Brahma-Sūtra (also called the Vedānta-Sūtra), summarising the Upaniṣads in 555 aphorisms.',
        'Reconciled apparently conflicting Upaniṣadic statements into a unified doctrine of Brahman, the ground of all being.',
        'Established the Brahma-Sūtra as one of the three canonical bases (prasthāna-trayī) of Vedānta, beside the Upaniṣads and the Gītā.',
        'Framed the questions — the nature of Brahman, the self, and their relation — that every later school would answer differently.',
      ],
      legacy:
        'Every major Vedāntin — Śaṅkara, Rāmānuja, Madhva and the rest — had to write a commentary on the Brahma-Sūtra to establish his school. Bādarāyaṇa is thus the common ancestor of the whole Vedānta tradition, however much its branches disagree.',
    },
  },
  {
    id: 'bharata-muni',
    name: 'Bharata Muni',
    deva: 'भरतमुनिः',
    seal: 'भ',
    dates: 'c. 200 BCE – 200 CE',
    datesDeva: 'इ.स.पूर्व २०० – इ.स. २००',
    era: 'classical',
    tradition: 'Nāṭyaśāstra · aesthetics',
    traditionDeva: 'नाट्यशास्त्र · रससिद्धान्त',
    blurb: 'The Nāṭyaśāstra codified drama, music, dance and the eight rasas. Every classical Indian art still references it as a first source.',
    works: ['Nāṭyaśāstra', 'Rasa-sūtra'],
    href: '/upavedas/',
    detail: {
      intro:
        'Bharata Muni is the sage to whom the Nāṭyaśāstra is ascribed — the encyclopaedic treatise that codified the performing arts of classical India. It treats drama, music, dance and aesthetics as a single integrated science, and remains the first source for them all.',
      contributions: [
        'Compiled the Nāṭyaśāstra, the foundational treatise on theatre, dance, music and dramaturgy.',
        'Set out the theory of rasa — the aesthetic “flavours” a performance evokes — beginning with eight basic emotional states.',
        'Described in detail the elements of performance: gesture, costume, stagecraft, vocal and instrumental music, and the structure of dramatic plot.',
        'Gave the rasa-sūtra, the formula relating dramatic situation, emotion and aesthetic experience that later aestheticians endlessly debated.',
      ],
      legacy:
        'Every classical Indian art — Bharatanāṭyam, Kathak, the rāga system, Sanskrit drama — still traces its first principles to the Nāṭyaśāstra. Bharata’s rasa theory became the central concept of all Indian aesthetics.',
    },
  },
  {
    id: 'charaka',
    name: 'Caraka',
    deva: 'चरकः',
    seal: 'च',
    dates: 'c. 1st–2nd c. CE',
    datesDeva: 'इ.स. १–२ शतक',
    era: 'classical',
    tradition: 'Āyurveda · internal medicine',
    traditionDeva: 'आयुर्वेद · कायचिकित्सा',
    blurb: 'The Caraka-Saṃhitā is the foundational text of internal medicine — pathology, pharmacology and the ethics of the physician — still cited in BAMS curricula today.',
    works: ['Caraka-Saṃhitā'],
    href: '/upavedas/',
    detail: {
      intro:
        'Caraka is the redactor whose name attaches to the Caraka-Saṃhitā, the foundational treatise of Āyurvedic internal medicine (kāya-cikitsā). The text presents itself as a recension of an earlier teaching of Ātreya, organised into a systematic science of health and disease.',
      contributions: [
        'Redacted the Caraka-Saṃhitā, the principal classical text of internal medicine.',
        'Set out a theory of health as the balance of the three doṣas (vāta, pitta, kapha) and disease as their disturbance.',
        'Developed systematic pathology, diagnosis, dietetics and pharmacology drawn from a vast materia medica of plants and minerals.',
        'Articulated the ethics of the physician — the duties, training and conduct expected of the vaidya.',
      ],
      legacy:
        'The Caraka-Saṃhitā remains a living text, still studied in BAMS curricula today. Caraka’s framework of doṣa, diet and constitution is the backbone of Āyurveda as it is practised across India and increasingly abroad.',
    },
  },
  {
    id: 'sushruta',
    name: 'Suśruta',
    deva: 'सुश्रुतः',
    seal: 'सु',
    epithet: 'Father of surgery',
    epithetDeva: 'शल्यतंत्रजनकः',
    dates: 'c. 600 BCE – 2nd c. CE',
    datesDeva: 'इ.स.पूर्व ६०० – इ.स. २००',
    era: 'classical',
    tradition: 'Āyurveda · śalya-tantra',
    traditionDeva: 'आयुर्वेद · शल्यतंत्र',
    blurb: 'The Suśruta-Saṃhitā describes 300+ surgical procedures, including rhinoplasty and cataract extraction — the earliest systematic surgical manual in any tradition.',
    works: ['Suśruta-Saṃhitā', '120 surgical instruments'],
    href: '/upavedas/',
    detail: {
      intro:
        'Suśruta is the figure behind the Suśruta-Saṃhitā, the great classical treatise of surgery (śalya-tantra). Where Caraka systematised medicine, Suśruta systematised the knife — giving the ancient world its most detailed surgical manual.',
      contributions: [
        'Compiled the Suśruta-Saṃhitā, describing more than three hundred surgical procedures and over a hundred surgical instruments.',
        'Detailed operations including rhinoplasty (reconstruction of the nose), cataract couching, the removal of stones and the suturing of wounds.',
        'Laid out a programme of surgical training, including practice on models, gourds and animal tissue.',
        'Integrated surgery with anatomy, requiring direct study of the body — unusual in the ancient world.',
      ],
      legacy:
        'Suśruta is often called the father of surgery, and of plastic surgery in particular; his nose-reconstruction technique reached Europe and shaped early modern rhinoplasty. The Suśruta-Saṃhitā stands as the earliest systematic surgical treatise of any tradition.',
    },
  },
  {
    id: 'nagarjuna',
    name: 'Nāgārjuna',
    deva: 'नागार्जुनः',
    seal: 'ना',
    dates: 'c. 150–250 CE',
    datesDeva: 'इ.स. १५०–२५०',
    era: 'classical',
    tradition: 'Madhyamaka Buddhism',
    traditionDeva: 'माध्यमिक बौद्ध दर्शन',
    blurb: 'The Mūlamadhyamaka-Kārikā: the dialectic of śūnyatā (emptiness) that empties every position — including its own — and reorganised Mahāyāna philosophy.',
    works: ['Mūlamadhyamaka-Kārikā', 'Vigrahavyāvartanī'],
    href: '/nastika-darshanas/',
    detail: {
      intro:
        'Nāgārjuna is the founder of the Madhyamaka (“Middle Way”) school of Mahāyāna Buddhism and one of the most influential philosophers India produced. His dialectic of emptiness (śūnyatā) reorganised Buddhist thought and pressed every philosophical position to its breaking point.',
      contributions: [
        'Composed the Mūlamadhyamaka-Kārikā, the foundational verse text of Madhyamaka philosophy.',
        'Developed the doctrine of śūnyatā — that all things are empty of inherent existence (svabhāva), arising only in dependence.',
        'Wielded a reductio dialectic (prasaṅga) that exposes the contradictions in every fixed standpoint, including, reflexively, its own.',
        'Articulated the two-truths distinction between conventional and ultimate reality.',
      ],
      legacy:
        'Nāgārjuna’s emptiness became the philosophical core of Mahāyāna across Tibet, China and Japan, and his dialectical method is studied alongside the great logicians of the world. Few Indian thinkers have had so wide and so lasting an influence.',
    },
  },
  {
    id: 'kalidasa',
    name: 'Kālidāsa',
    deva: 'कालिदासः',
    seal: 'का',
    dates: 'c. 4th–5th c. CE',
    datesDeva: 'इ.स. ४–५ शतक',
    era: 'classical',
    tradition: 'Sanskrit kāvya · nāṭya',
    traditionDeva: 'संस्कृत काव्य · नाट्य',
    blurb: 'Abhijñāna-Śākuntalam, Raghuvaṃśa, Meghadūta, Kumārasambhava — the height of classical Sanskrit poetry, and the standard by which all later kāvya is judged.',
    works: ['Śākuntalam', 'Meghadūta', 'Raghuvaṃśa'],
    detail: {
      intro:
        'Kālidāsa is, by near-universal consent, the greatest poet and dramatist of classical Sanskrit. Little is known of his life, but his works set the standard of kāvya — the ideal of elegance, suggestion and emotional depth against which all later Sanskrit literature measures itself.',
      contributions: [
        'Wrote the play Abhijñāna-Śākuntalam, the most celebrated drama in Sanskrit and the first to be widely translated into European languages.',
        'Composed the great court epics (mahākāvya) Raghuvaṃśa and Kumārasambhava.',
        'Created the lyric Meghadūta (“The Cloud Messenger”), a perfect miniature of longing and landscape.',
        'Perfected the poetics of suggestion (dhvani) and the union of natural description with human emotion.',
      ],
      legacy:
        'Kālidāsa became the touchstone of literary taste for the whole tradition — “the kavi” without qualification. The European discovery of Śākuntalā in the eighteenth century, which moved Goethe to praise, helped spark the Western fascination with Indian literature.',
    },
  },
  {
    id: 'aryabhata',
    name: 'Āryabhaṭa',
    deva: 'आर्यभटः',
    seal: 'आ',
    dates: '476–550 CE',
    datesDeva: 'इ.स. ४७६–५५०',
    era: 'classical',
    tradition: 'Gaṇita · Jyotiṣa',
    traditionDeva: 'गणित · ज्योतिष',
    blurb: 'The Āryabhaṭīya: place-value notation, the sine table, π to four decimals, the day-length of the sidereal rotation, and the rotation of the Earth on its axis.',
    works: ['Āryabhaṭīya', 'Sūrya-siddhānta line'],
    href: '/vedangas/',
    detail: {
      intro:
        'Āryabhaṭa, writing at the age of twenty-three in 499 CE, produced in the Āryabhaṭīya a compact masterpiece of mathematics and astronomy that placed Indian science at the frontier of the ancient world.',
      contributions: [
        'Used a place-value system and a unique alphabetic notation for very large numbers.',
        'Gave an accurate value of π (3.1416) and the first Indian sine table, founding the trigonometry that would pass to the Islamic world and Europe.',
        'Proposed that the Earth rotates on its axis, explaining the apparent daily motion of the stars — a millennium before Copernicus.',
        'Computed the length of the sidereal day and year with remarkable accuracy and explained eclipses by the shadows of Earth and Moon.',
      ],
      legacy:
        'Āryabhaṭa’s work, translated into Arabic, fed the great flowering of medieval astronomy and reached Europe through that channel. India’s first satellite was named for him — a measure of his standing as the founder of the mathematical tradition.',
    },
  },
  {
    id: 'varahamihira',
    name: 'Varāhamihira',
    deva: 'वराहमिहिरः',
    seal: 'व',
    dates: '505–587 CE',
    datesDeva: 'इ.स. ५०५–५८७',
    era: 'classical',
    tradition: 'Jyotiṣa · samhitā',
    traditionDeva: 'ज्योतिष · संहिता',
    blurb: 'The Bṛhat-Saṃhitā — an encyclopaedia of jyotiṣa, omens, meteorology, gemmology and architecture — and the Pañca-siddhāntikā that compares five astronomical systems.',
    works: ['Bṛhat-Saṃhitā', 'Pañca-siddhāntikā', 'Bṛhat-Jātaka'],
    href: '/vedangas/',
    detail: {
      intro:
        'Varāhamihira was the great sixth-century polymath of Ujjain, a master of all three branches of jyotiṣa — mathematical astronomy, astrology and the lore of omens. His works are encyclopaedic in their range and unusually clear in their exposition.',
      contributions: [
        'Wrote the Pañca-siddhāntikā, a critical comparison of the five astronomical systems known in his day, preserving knowledge that would otherwise be lost.',
        'Composed the Bṛhat-Saṃhitā, an encyclopaedia covering astronomy, meteorology, agriculture, architecture, gemmology, omens and much else.',
        'Authored the Bṛhat-Jātaka, a foundational treatise of Indian astrology.',
        'Preserved Greek astronomical influence (the Romaka and Pauliśa systems) within the Indian tradition.',
      ],
      legacy:
        'Varāhamihira’s Bṛhat-Saṃhitā is a window onto the whole of sixth-century Indian science and society, and his astronomical works carried earlier Siddhānta knowledge forward. He remains one of the most cited authorities of the classical jyotiṣa tradition.',
    },
  },
  {
    id: 'adi-shankara',
    name: 'Ādi Śaṅkarācārya',
    deva: 'आदि शङ्कराचार्यः',
    seal: 'श',
    dates: '788–820 CE',
    datesDeva: 'इ.स. ७८८–८२०',
    era: 'classical',
    tradition: 'Advaita Vedānta',
    traditionDeva: 'अद्वैत वेदान्त',
    blurb: 'Bhāṣyas on the Upaniṣads, Brahma-Sūtra and Gītā (the prasthāna-trayī), and the four maṭhas at the four corners of the subcontinent — Advaita made institutional.',
    works: ['Brahma-Sūtra Bhāṣya', 'Vivekacūḍāmaṇi', 'Four maṭhas'],
    href: '/vedanta-schools/',
    detail: {
      intro:
        'Ādi Śaṅkara, in a life traditionally said to have lasted only thirty-two years, gave Advaita Vedānta its decisive philosophical form and its lasting institutional shape. He is the most influential of all the Vedānta ācāryas.',
      contributions: [
        'Wrote bhāṣyas (commentaries) on the prasthāna-trayī — the principal Upaniṣads, the Brahma-Sūtra and the Bhagavad-Gītā.',
        'Systematised the doctrine of Advaita (non-dualism): Brahman alone is real, the world is appearance (māyā), and the self (ātman) is identical with Brahman.',
        'Established four maṭhas at the cardinal corners of the subcontinent, founding a monastic order that endures to this day.',
        'Composed independent works such as the Vivekacūḍāmaṇi and a body of devotional hymns.',
      ],
      legacy:
        'Śaṅkara’s Advaita became the dominant philosophical strand of Hinduism and the reference point — whether to follow or to refute — for every later Vedāntin. Through the maṭhas and the Daśanāmī order he gave Hindu monasticism its enduring institutional frame.',
    },
  },

  // ────────────────────────────── Medieval Era ────────────────────────────────
  {
    id: 'abhinavagupta',
    name: 'Abhinavagupta',
    deva: 'अभिनवगुप्तः',
    seal: 'अ',
    dates: '950–1016 CE',
    datesDeva: 'इ.स. ९५०–१०१६',
    era: 'medieval',
    tradition: 'Kashmir Śaivism · aesthetics',
    traditionDeva: 'काश्मीर शैव · रससिद्धान्त',
    blurb: 'The Tantrāloka synthesises Kashmir Śaivism; the Abhinava-Bhāratī (commentary on the Nāṭyaśāstra) gives rasa-theory its final philosophical form.',
    works: ['Tantrāloka', 'Abhinava-Bhāratī', 'Locana'],
    detail: {
      intro:
        'Abhinavagupta is the towering genius of Kashmir — a philosopher, mystic, aesthetician and tantric master who synthesised the traditions of his region into a single grand system. He worked with equal mastery in metaphysics and in the theory of art.',
      contributions: [
        'Composed the Tantrāloka, the monumental synthesis of the monistic Trika (Kashmir) Śaivism.',
        'Developed the philosophy of recognition (pratyabhijñā) — that liberation is the recognition of one’s identity with Śiva, the universal consciousness.',
        'Wrote the Abhinava-Bhāratī, the great commentary on the Nāṭyaśāstra, giving rasa theory its definitive philosophical formulation.',
        'In the Locana, advanced the theory of dhvani (poetic suggestion) as the soul of poetry.',
      ],
      legacy:
        'Abhinavagupta unified Indian aesthetics and Śaiva metaphysics as no one before or since. His account of rasa as a form of self-luminous bliss remains the high point of Indian theory of art, and Kashmir Śaivism is undergoing a worldwide revival in his name.',
    },
  },
  {
    id: 'ramanuja',
    name: 'Rāmānujācārya',
    deva: 'रामानुजाचार्यः',
    seal: 'रा',
    dates: '1017–1137 CE',
    datesDeva: 'इ.स. १०१७–११३७',
    era: 'medieval',
    tradition: 'Viśiṣṭādvaita Vedānta',
    traditionDeva: 'विशिष्टाद्वैत वेदान्त',
    blurb: 'The Śrī-Bhāṣya argues that the soul is real and distinct yet inseparable from God. Reformed Śrīraṅgam temple worship and opened it across caste.',
    works: ['Śrī-Bhāṣya', 'Vedārtha-Saṅgraha', 'Gītā-Bhāṣya'],
    href: '/vedanta-schools/',
    detail: {
      intro:
        'Rāmānuja is the founder of Viśiṣṭādvaita (“qualified non-dualism”) and the greatest philosopher of the theistic Vedānta tradition. Against Śaṅkara’s austere monism he argued for a personal God in whom souls and the world are real, distinct, yet wholly dependent.',
      contributions: [
        'Wrote the Śrī-Bhāṣya, the authoritative Viśiṣṭādvaita commentary on the Brahma-Sūtra.',
        'Argued that the individual self and the world are real attributes (viśeṣaṇa) of Brahman — neither identical with God nor separate from him.',
        'Gave bhakti and prapatti (loving surrender) a rigorous philosophical foundation alongside knowledge.',
        'Reformed worship at the Śrīraṅgam temple and, by tradition, opened its teaching across barriers of caste.',
      ],
      legacy:
        'Rāmānuja gave devotional Hinduism its intellectual backbone; the great Vaiṣṇava bhakti movements that followed drew on his synthesis of philosophy and devotion. His Śrī Vaiṣṇava tradition remains a living force in south India and beyond.',
    },
  },
  {
    id: 'madhva',
    name: 'Madhvācārya',
    deva: 'मध्वाचार्यः',
    seal: 'म',
    epithet: 'Ānandatīrtha',
    epithetDeva: 'आनन्दतीर्थः',
    dates: '1238–1317 CE',
    datesDeva: 'इ.स. १२३८–१३१७',
    era: 'medieval',
    tradition: 'Dvaita Vedānta',
    traditionDeva: 'द्वैत वेदान्त',
    blurb: 'Pure dualism: God, soul and world are each fully real and irreducibly distinct. Thirty-seven works including bhāṣyas on every text of the prasthāna-trayī.',
    works: ['Brahma-Sūtra Bhāṣya', 'Anuvyākhyāna'],
    href: '/vedanta-schools/',
    detail: {
      intro:
        'Madhva, also called Ānandatīrtha, is the founder of Dvaita (“dualist”) Vedānta — the most uncompromising of the three great Vedānta schools. Against both Śaṅkara and Rāmānuja he held that God, souls and the world are each fully and eternally real and irreducibly distinct.',
      contributions: [
        'Composed thirty-seven works, including bhāṣyas on every text of the prasthāna-trayī.',
        'Argued for an absolute distinction (bheda) between God (Viṣṇu), the individual souls, and matter — five eternal differences in all.',
        'Defended a robust realism and the dependence of all beings on a wholly independent, supreme God.',
        'Founded the Dvaita tradition centred at Uḍupi, with its enduring system of monastic worship.',
      ],
      legacy:
        'Madhva’s uncompromising realism gave Vedānta its sharpest theistic alternative to Advaita, and his school shaped the Haridāsa devotional movement of Karnataka. The Uḍupi maṭhas he established continue his tradition unbroken to the present day.',
    },
  },
  {
    id: 'bhaskara-ii',
    name: 'Bhāskara II',
    deva: 'भास्कराचार्यः',
    seal: 'भा',
    dates: '1114–1185 CE',
    datesDeva: 'इ.स. १११४–११८५',
    era: 'medieval',
    tradition: 'Gaṇita · Jyotiṣa',
    traditionDeva: 'गणित · ज्योतिष',
    blurb: 'The Siddhānta-Śiromaṇi treats algebra, calculus precursors and planetary theory; the Līlāvatī teaches arithmetic in verse to a daughter.',
    works: ['Līlāvatī', 'Bījagaṇita', 'Siddhānta-Śiromaṇi'],
    detail: {
      intro:
        'Bhāskara II, known as Bhāskarācārya, is the greatest mathematician-astronomer of medieval India, working at the Ujjain observatory in the twelfth century. His Siddhānta-Śiromaṇi crowns the classical Indian tradition of gaṇita and jyotiṣa.',
      contributions: [
        'Composed the four-part Siddhānta-Śiromaṇi, covering arithmetic (Līlāvatī), algebra (Bījagaṇita), the sphere (Golādhyāya) and planetary mathematics (Grahagaṇita).',
        'Anticipated key ideas of calculus — the instantaneous rate of motion and a form of Rolle’s theorem — five centuries before Newton and Leibniz.',
        'Advanced the solution of indeterminate (Pell-type) equations through the cakravāla (cyclic) method.',
        'Wrote the Līlāvatī, a treatise on arithmetic in elegant verse, traditionally addressed to his daughter.',
      ],
      legacy:
        'Bhāskara’s work was the high-water mark of Indian mathematics before the colonial era, and the Līlāvatī remained a standard textbook for centuries. His intuitions about infinitesimals place him among the forerunners of the calculus.',
    },
  },
  {
    id: 'jnaneshwar',
    name: 'Jñāneśvar',
    deva: 'ज्ञानेश्वरः',
    seal: 'ज्ञा',
    epithet: 'Māuli',
    epithetDeva: 'माउली',
    dates: '1275–1296 CE',
    datesDeva: 'इ.स. १२७५–१२९६',
    era: 'medieval',
    tradition: 'Marathi bhakti · Nāth · Vārkarī',
    traditionDeva: 'मराठी भक्ती · नाथ · वारकरी',
    blurb: 'At nineteen he wrote the Bhāvārtha-Dīpikā — the Gītā translated and unfolded in Marathi ovis — and gave the Vārkarī tradition its first scripture.',
    works: ['Jñāneśvarī', 'Amṛtānubhava', 'Haripāṭh'],
    detail: {
      intro:
        'Jñāneśvar, affectionately called Māuli (“Mother”), is the founding saint of the Marathi Vārkarī tradition. In a life of barely twenty-one years he gave Maharashtra its first great work of philosophy and devotion in the people’s own language.',
      contributions: [
        'Wrote the Jñāneśvarī (Bhāvārtha-Dīpikā) at nineteen — a commentary on the Bhagavad-Gītā in flowing Marathi ovī verse.',
        'Composed the Amṛtānubhava, an original work of Advaitic philosophy independent of any Sanskrit base.',
        'Drew together the Nāth yogic lineage and Vārkarī devotion to Viṭṭhal of Pandharpur.',
        'Made the deepest teaching of the Gītā accessible to ordinary Marathi speakers for the first time.',
      ],
      legacy:
        'The Jñāneśvarī is the foundational scripture of the Vārkarī movement and a monument of Marathi literature. Jñāneśvar opened the path of vernacular bhakti in the Deccan that Nāmdev, Eknāth and Tukārām would walk after him.',
    },
  },
  {
    id: 'namdev',
    name: 'Nāmdev',
    deva: 'नामदेवः',
    seal: 'ना',
    dates: '1270–1350 CE',
    datesDeva: 'इ.स. १२७०–१३५०',
    era: 'medieval',
    tradition: 'Marathi bhakti · Vārkarī',
    traditionDeva: 'मराठी भक्ती · वारकरी',
    blurb: 'A tailor of Pandharpur whose abhangas became canon in two languages — Marathi and Gurmukhi. Sixty-one of his hymns sit in the Guru Granth Sāhib.',
    works: ['Marathi abhangas', 'Hindi pads in Granth Sāhib'],
    detail: {
      intro:
        'Nāmdev, a tailor of Pandharpur, is one of the earliest and best-loved of the Vārkarī sant-poets — and the rare saint whose voice became canon in two religious traditions and two languages.',
      contributions: [
        'Composed thousands of Marathi abhangas in devotion to Viṭṭhal, sung on the Vārkarī pilgrimage to this day.',
        'Wrote hymns in early Hindi/Gurmukhi, sixty-one of which are included in the Sikh Guru Granth Sāhib.',
        'Carried the message of nirguṇa and saguṇa bhakti across north India during long travels in the Punjab.',
        'Helped shape the communal, egalitarian style of Vārkarī devotion alongside Jñāneśvar.',
      ],
      legacy:
        'Nāmdev is a living bridge between the Marathi Vārkarī and the Sikh traditions, revered in both. His abhangas remain central to the Pandharpur pilgrimage, and his presence in the Guru Granth Sāhib makes him a saint of two faiths.',
    },
  },
  {
    id: 'vidyaranya',
    name: 'Vidyāraṇya',
    deva: 'विद्यारण्यः',
    seal: 'वि',
    dates: '1268–1386 CE',
    datesDeva: 'इ.स. १२६८–१३८६',
    era: 'medieval',
    tradition: 'Advaita · institution-building',
    traditionDeva: 'अद्वैत · संस्था-स्थापना',
    blurb: 'Pañcadaśī and Jīvanmukti-Viveka systematise Advaita for the householder. The intellectual force behind the founding of the Vijayanagara empire.',
    works: ['Pañcadaśī', 'Jīvanmukti-Viveka', 'Sarva-darśana-Saṅgraha'],
    detail: {
      intro:
        'Vidyāraṇya was a towering Advaitin scholar and statesman of the fourteenth century, head of the Śṛṅgeri maṭha, who combined the deepest learning with a decisive role in the politics of his age.',
      contributions: [
        'Wrote the Pañcadaśī, one of the clearest systematic manuals of Advaita Vedānta for the seeker.',
        'Composed the Jīvanmukti-Viveka on liberation while still living.',
        'Associated with the Sarva-darśana-Saṅgraha, the great compendium surveying all the philosophical schools of India.',
        'Served as the intellectual and spiritual force behind the founding of the Vijayanagara empire, a bulwark of Hindu culture in the south.',
      ],
      legacy:
        'Vidyāraṇya united contemplative depth with worldly purpose; his Pañcadaśī is still a standard text of Advaita, and the empire he helped found preserved south Indian temple culture, music and literature for two centuries.',
    },
  },
  {
    id: 'madhava-sangamagrama',
    name: 'Mādhava of Saṅgamagrāma',
    deva: 'माधवः',
    seal: 'मा',
    dates: '1340–1425 CE',
    datesDeva: 'इ.स. १३४०–१४२५',
    era: 'medieval',
    tradition: 'Kerala school · gaṇita',
    traditionDeva: 'केरळ गणित संप्रदाय',
    blurb: 'Founder of the Kerala school. Infinite-series expansions for π, sine and cosine — three centuries before Leibniz, Newton and Gregory.',
    works: ['Mādhava–Leibniz series', 'Sine & cosine series'],
    detail: {
      intro:
        'Mādhava of Saṅgamagrāma is the founder of the Kerala school of mathematics and astronomy — and, on the evidence of his results, one of the most original mathematicians of the pre-modern world. He arrived at the heart of mathematical analysis centuries before Europe.',
      contributions: [
        'Derived infinite-series expansions for π, the sine and the cosine — results known in Europe only with Newton, Leibniz and Gregory, three centuries later.',
        'Gave the series now called the Mādhava–Leibniz series for π, with methods to accelerate its convergence.',
        'Founded the Kerala school, whose lineage (Nīlakaṇṭha, Jyeṣṭhadeva) carried his analysis forward for generations.',
        'Effectively reached the threshold of the calculus through the study of infinite processes.',
      ],
      legacy:
        'Mādhava’s infinite series are among the most remarkable achievements of Indian mathematics, anticipating central tools of modern analysis. The Kerala school he founded shows the classical tradition still innovating at the highest level on the eve of the modern age.',
    },
  },
  {
    id: 'kabir',
    name: 'Kabīr',
    deva: 'कबीरः',
    seal: 'क',
    dates: '1440–1518 CE',
    datesDeva: 'इ.स. १४४०–१५१८',
    era: 'medieval',
    tradition: 'Nirguṇa bhakti · sant',
    traditionDeva: 'निर्गुण भक्ती · संत',
    blurb: 'A weaver of Banāras whose dohās scold Hindus and Muslims with equal sharpness. Read across three canons — Bījak, Granth Sāhib and Pañc-vāṇī.',
    works: ['Bījak', 'Pads in Granth Sāhib'],
    detail: {
      intro:
        'Kabīr, a weaver of Banāras, is the most arresting voice of the nirguṇa sant tradition — a poet who belonged fully to neither Hindu nor Muslim and rebuked the externals of both with unmatched force.',
      contributions: [
        'Composed dohās and pads in a plain, pointed vernacular that fused Hindu and Sufi devotional idiom.',
        'Preached a formless (nirguṇa) divine reality beyond temple and mosque, ritual and scripture.',
        'His verses are preserved across three canons — the Bījak of the Kabīr-panth, the Sikh Guru Granth Sāhib, and the Dādū-panthī Pañc-vāṇī.',
        'Attacked caste, idolatry and religious hypocrisy in language ordinary people could carry by heart.',
      ],
      legacy:
        'Kabīr is claimed by Hindus, Muslims and Sikhs alike and remains one of the most quoted poets of the subcontinent. His fearless, anti-sectarian voice continues to speak to every later movement for religious reform and social equality.',
    },
  },
  {
    id: 'guru-nanak',
    name: 'Guru Nānak',
    deva: 'गुरु नानकः',
    seal: 'ना',
    dates: '1469–1539 CE',
    datesDeva: 'इ.स. १४६९–१५३९',
    era: 'medieval',
    tradition: 'Sikh dharma',
    traditionDeva: 'सिख धर्म',
    blurb: 'First of the ten Sikh gurus. The Japjī Sāhib opens the Guru Granth Sāhib; the message of one nirguṇa Reality crossed every regional boundary.',
    works: ['Japjī Sāhib', 'Āsā dī Vār'],
    detail: {
      intro:
        'Guru Nānak is the founder of the Sikh tradition and the first of its ten Gurus. Born in the Punjab, he travelled widely and taught a path of devotion to one formless God, beyond the divisions of Hindu and Muslim.',
      contributions: [
        'Founded Sikhism, teaching devotion to one nirguṇa God (Ik Oṅkār) expressed through honest work, sharing and remembrance of the Name.',
        'Composed the Japjī Sāhib, the morning prayer that opens the Guru Granth Sāhib, and hymns such as the Āsā dī Vār.',
        'Rejected caste, ritualism and empty asceticism, establishing the communal meal (langar) as a practice of equality.',
        'Set the foundations of the institutions and lineage of Gurus that his successors would build into a full tradition.',
      ],
      legacy:
        'From Guru Nānak’s teaching grew one of the world’s major religions, with the Guru Granth Sāhib at its heart. His vision of one God, equality and service shaped the Punjab and the wider world of the Sikh diaspora.',
    },
  },
  {
    id: 'sūrdas',
    name: 'Sūrdās',
    deva: 'सूरदासः',
    seal: 'सू',
    dates: '1478–1583 CE',
    datesDeva: 'इ.स. १४७८–१५८३',
    era: 'medieval',
    tradition: 'Braj bhakti · Puṣṭimārga',
    traditionDeva: 'ब्रज भक्ती · पुष्टिमार्ग',
    blurb: 'The blind poet whose Sūrsāgar fills four thousand pads with the childhood of Kṛṣṇa — the lyric voice of Braj-bhāṣā devotion.',
    works: ['Sūrsāgar', 'Sāhitya-Laharī'],
    detail: {
      intro:
        'Sūrdās is the great poet of Braj-bhāṣā Kṛṣṇa devotion — traditionally remembered as blind, and as the most tender singer of the child Kṛṣṇa’s play in all of Hindi literature.',
      contributions: [
        'Composed the Sūrsāgar, a vast collection of pads on the life and play (līlā) of Kṛṣṇa, especially his childhood in Braj.',
        'Wrote in the Puṣṭimārga tradition of Vallabha, giving its devotion its most beloved lyric form.',
        'Perfected the vātsalya (parental tenderness) and śṛṅgāra (love) moods of Kṛṣṇa-bhakti.',
        'Shaped the literary register of Braj-bhāṣā as a language of devotional poetry.',
      ],
      legacy:
        'Sūrdās’s pads are sung in temples and homes across north India to this day; his portrait of the child Kṛṣṇa defined the devotional imagination of the Braj region and the Hindi-speaking world.',
    },
  },
  {
    id: 'vallabha',
    name: 'Vallabhācārya',
    deva: 'वल्लभाचार्यः',
    seal: 'व',
    dates: '1479–1531 CE',
    datesDeva: 'इ.स. १४७९–१५३१',
    era: 'medieval',
    tradition: 'Śuddhādvaita · Puṣṭimārga',
    traditionDeva: 'शुद्धाद्वैत · पुष्टिमार्ग',
    blurb: 'Founded the Puṣṭimārga path of divine grace. The Aṇu-Bhāṣya on the Brahma-Sūtra and the Subodhinī on the Bhāgavata anchor Śuddhādvaita.',
    works: ['Aṇu-Bhāṣya', 'Subodhinī', 'Ṣoḍaśa-Granthāḥ'],
    detail: {
      intro:
        'Vallabhācārya is the founder of the Puṣṭimārga (“path of grace”) and of Śuddhādvaita (“pure non-dualism”) Vedānta — a teacher who set devotion to Kṛṣṇa on a rigorous philosophical foundation.',
      contributions: [
        'Founded the Puṣṭimārga, the path of divine grace centred on loving service (sevā) to Kṛṣṇa as Śrī Nāthajī.',
        'Taught Śuddhādvaita, in which the world is a real, unillusory manifestation of Brahman (Kṛṣṇa).',
        'Wrote the Aṇu-Bhāṣya on the Brahma-Sūtra and the Subodhinī commentary on the Bhāgavata-Purāṇa.',
        'Composed the Ṣoḍaśa-Granthāḥ, sixteen short works guiding the devotee’s life.',
      ],
      legacy:
        'The Puṣṭimārga remains a major Vaiṣṇava tradition, especially among the merchant communities of western India, and shaped the great flowering of Braj devotional poetry and the temple culture of Nathdwara.',
    },
  },
  {
    id: 'caitanya',
    name: 'Caitanya Mahāprabhu',
    deva: 'चैतन्य महाप्रभुः',
    seal: 'चै',
    dates: '1486–1534 CE',
    datesDeva: 'इ.स. १४८६–१५३४',
    era: 'medieval',
    tradition: 'Gauḍīya Vaiṣṇavism · bhakti',
    traditionDeva: 'गौडीय वैष्णव · भक्ती',
    blurb: 'Founder of Gauḍīya Vaiṣṇavism. Saṅkīrtana — public chanting of the Name — turned bhakti into a mass devotional practice across Bengal and Odisha.',
    works: ['Śikṣāṣṭakam', 'Saṅkīrtana practice'],
    detail: {
      intro:
        'Caitanya Mahāprabhu is the founder of Gauḍīya Vaiṣṇavism and the saint who turned devotion to Kṛṣṇa into an ecstatic, public, congregational practice across Bengal and Odisha.',
      contributions: [
        'Founded the Gauḍīya (Bengali) Vaiṣṇava tradition centred on loving devotion to Rādhā-Kṛṣṇa.',
        'Popularised saṅkīrtana — communal singing and dancing in the Name of God — as the supreme practice of the age.',
        'Left the Śikṣāṣṭakam, eight verses that distil the whole of his teaching on devotion.',
        'Inspired the systematic theology of the Six Gosvāmīs of Vṛndāvana.',
      ],
      legacy:
        'Caitanya transformed bhakti into a mass movement that reshaped the religious life of eastern India. Through his lineage, his saṅkīrtana and the theology he inspired reached the modern world — including the global Hare Kṛṣṇa movement.',
    },
  },
  {
    id: 'mira',
    name: 'Mīrā Bāī',
    deva: 'मीराबाई',
    seal: 'मी',
    dates: '1498–1547 CE',
    datesDeva: 'इ.स. १४९८–१५४७',
    era: 'medieval',
    tradition: 'Rajasthani bhakti · Kṛṣṇa',
    traditionDeva: 'राजस्थानी भक्ती · कृष्ण',
    blurb: 'A Rajput princess who took Kṛṣṇa as her only husband. Her padas — in Rajasthani, Braj and Gujarati — refuse every other allegiance.',
    works: ['Padāvalī', 'Bhajans'],
    detail: {
      intro:
        'Mīrā Bāī, a Rajput princess of Mewar, is the most famous woman saint-poet of the bhakti age — remembered for renouncing royal life and worldly marriage for an all-consuming devotion to Kṛṣṇa as her only Lord.',
      contributions: [
        'Composed hundreds of padas (bhajans) of passionate devotion to Kṛṣṇa, sung in Rajasthani, Braj and Gujarati.',
        'Defied the conventions of caste, gender and royal duty in the name of her chosen devotion.',
        'Gave bhakti one of its most personal and emotionally direct voices.',
        'Became, in her own life, a symbol of devotion that overrides every social bond.',
      ],
      legacy:
        'Mīrā’s bhajans are among the best-loved devotional songs of India, sung from village to concert hall. She endures as a symbol of fearless love and of a woman’s spiritual autonomy against the weight of social expectation.',
    },
  },
  {
    id: 'eknath',
    name: 'Eknāth',
    deva: 'एकनाथः',
    seal: 'ए',
    dates: '1533–1599 CE',
    datesDeva: 'इ.स. १५३३–१५९९',
    era: 'medieval',
    tradition: 'Marathi bhakti · Vārkarī',
    traditionDeva: 'मराठी भक्ती · वारकरी',
    blurb: 'The Eknāthī Bhāgavata, the Bhāvārtha-Rāmāyaṇa and bhārūds in vernacular Marathi. The editor who restored Jñāneśvar’s text from corrupted copies.',
    works: ['Eknāthī Bhāgavata', 'Bhāvārtha-Rāmāyaṇa', 'Bhārūds'],
    detail: {
      intro:
        'Eknāth is the great sixteenth-century saint of the Marathi Vārkarī tradition — a householder-sage who was at once a devotional poet, a social reformer and the careful editor who rescued the tradition’s foundational text.',
      contributions: [
        'Wrote the Eknāthī Bhāgavata, a Marathi commentary on the eleventh book of the Bhāgavata-Purāṇa, and the Bhāvārtha-Rāmāyaṇa.',
        'Produced a critical edition of the Jñāneśvarī, restoring Jñāneśvar’s text from corrupted manuscripts.',
        'Composed bhārūds — dramatic, colloquial devotional songs that carried teaching to ordinary people.',
        'Challenged caste prejudice in his own conduct, insisting on the dignity of the marginalised.',
      ],
      legacy:
        'Eknāth links the founding age of Jñāneśvar and Nāmdev to the later flowering under Tukārām. His restored Jñāneśvarī, his Bhāgavata and his reforming example remain central to Marathi devotional and cultural life.',
    },
  },
  {
    id: 'tulsidas',
    name: 'Tulsīdās',
    deva: 'तुलसीदासः',
    seal: 'तु',
    dates: '1532–1623 CE',
    datesDeva: 'इ.स. १५३२–१६२३',
    era: 'medieval',
    tradition: 'Awadhi bhakti · Rāma',
    traditionDeva: 'अवधी भक्ती · राम',
    blurb: 'The Rāmcaritmānas told the Rāma story in Awadhi for everyone north India had ever read off a temple wall. The most recited text in Hindi-belt homes.',
    works: ['Rāmcaritmānas', 'Hanumān Cālīsā', 'Vinaya-Patrikā'],
    detail: {
      intro:
        'Tulsīdās is the supreme poet of north Indian Rāma devotion — the author of the Rāmcaritmānas, which placed the story of Rāma in the hearts and homes of the Hindi-speaking world.',
      contributions: [
        'Composed the Rāmcaritmānas, retelling the Rāma story in Awadhi for ordinary people, not only the Sanskrit-learned.',
        'Wrote the Hanumān Cālīsā, perhaps the most recited devotional hymn in all of north India.',
        'Composed the Vinaya-Patrikā and other works of Rāma-bhakti.',
        'Fused the highest devotion with a vision of dharma and the ideal social order (Rāma-rājya).',
      ],
      legacy:
        'The Rāmcaritmānas is the most influential text in the religious life of the Hindi belt — read, sung and enacted in the Rāmlīlā every year. Tulsīdās shaped the popular image of Rāma and Hanumān for hundreds of millions.',
    },
  },
  {
    id: 'tukaram',
    name: 'Tukārām',
    deva: 'तुकारामः',
    seal: 'तु',
    dates: '1608–1650 CE',
    datesDeva: 'इ.स. १६०८–१६५०',
    era: 'medieval',
    tradition: 'Marathi bhakti · Vārkarī',
    traditionDeva: 'मराठी भक्ती · वारकरी',
    blurb: 'Five thousand abhangas — the unsparing inner voice of Marathi bhakti. Sang of doubt and the absent God as honestly as of presence.',
    works: ['Tukārām-gāthā', 'Abhanga corpus'],
    detail: {
      intro:
        'Tukārām is the culminating saint of the Marathi Vārkarī tradition — a grocer of Dehu whose abhangas give Marathi bhakti its most honest and unsparing inner voice.',
      contributions: [
        'Composed some five thousand abhangas, the Tukārām-gāthā, ranging from ecstatic praise to raw doubt and self-reproach.',
        'Sang of the absent God and the struggle of faith with the same honesty as of divine presence.',
        'Voiced the devotion of the common householder against priestly privilege and empty ritual.',
        'Brought the Vārkarī tradition begun by Jñāneśvar to its emotional and literary height.',
      ],
      legacy:
        'Tukārām’s abhangas are sung on the Pandharpur pilgrimage and woven into everyday Marathi speech. He stands as the most beloved of the Vārkarī sants and one of the great devotional poets in any Indian language.',
    },
  },
  {
    id: 'ramdas',
    name: 'Samartha Rāmdās',
    deva: 'समर्थ रामदासः',
    seal: 'रा',
    dates: '1608–1681 CE',
    datesDeva: 'इ.स. १६०८–१६८१',
    era: 'medieval',
    tradition: 'Activist Vedānta · Rāma bhakti',
    traditionDeva: 'सक्रिय वेदान्त · राम भक्ती',
    blurb: 'Dāsbodh and Manāche Ślok — the gurū of activist Vedānta in the age of Śivājī. Renunciation joined to public reconstruction.',
    works: ['Dāsbodh', 'Manāche Ślok', 'Karuṇāṣṭakas'],
    detail: {
      intro:
        'Samartha Rāmdās is the saint of activist Vedānta in the age of Śivājī — a teacher who joined inner spiritual discipline to outward worldly action and the rebuilding of society.',
      contributions: [
        'Composed the Dāsbodh, a comprehensive manual of spiritual life and practical conduct in dialogue form.',
        'Wrote the Manāche Ślok, verses of moral counsel addressed to the mind, widely memorised in Maharashtra.',
        'Preached devotion to Rāma and Hanumān joined to strength, self-discipline and public service.',
        'Founded maṭhas and established Hanumān temples as centres of physical and spiritual vigour.',
      ],
      legacy:
        'Rāmdās gave Maharashtra a spirituality of action — renunciation turned toward the reconstruction of a society. His Dāsbodh and Manāche Ślok remain widely read, and his ideal of strength joined to devotion shaped Maratha self-understanding.',
    },
  },

  // ─────────────────────────────── Modern Era ─────────────────────────────────
  {
    id: 'rammohan',
    name: 'Rām Mohan Roy',
    deva: 'राम मोहन रॉय',
    seal: 'रा',
    dates: '1772–1833 CE',
    datesDeva: 'इ.स. १७७२–१८३३',
    era: 'modern',
    tradition: 'Reform · Brāhmo Samāj',
    traditionDeva: 'सुधारक · ब्राह्मो समाज',
    blurb: 'Founder of the Brāhmo Samāj. Translated the Upaniṣads into Bengali and English, and lobbied the colonial state into banning satī.',
    works: ['Translations of Upaniṣads', 'Tuhfat-ul-Muwahhidin'],
    detail: {
      intro:
        'Rām Mohan Roy is often called the father of the Indian Renaissance — a Bengali polymath who, at the dawn of the colonial encounter, set out to reform Hinduism from within and to reconcile its deepest insights with reason and modernity.',
      contributions: [
        'Founded the Brāhmo Samāj in 1828, a reformist movement teaching the worship of one formless God and rejecting idolatry and ritualism.',
        'Translated several Upaniṣads into Bengali and English, arguing that monotheism was the true core of the Vedānta.',
        'Campaigned successfully for the abolition of satī (widow-burning), which the colonial state banned in 1829.',
        'Championed women’s rights, modern education and a free press, and wrote the Tuhfat-ul-Muwahhidin against religious dogmatism.',
      ],
      legacy:
        'Rām Mohan Roy opened the age of modern Hindu reform; the Brāhmo Samāj shaped generations of Bengali thinkers, and his fusion of rational inquiry with the Upaniṣadic vision set the pattern for every later reformer.',
    },
  },
  {
    id: 'dayananda',
    name: 'Dayānanda Sarasvatī',
    deva: 'दयानन्द सरस्वती',
    seal: 'द',
    dates: '1824–1883 CE',
    datesDeva: 'इ.स. १८२४–१८८३',
    era: 'modern',
    tradition: 'Reform · Ārya Samāj',
    traditionDeva: 'सुधारक · आर्य समाज',
    blurb: 'Founder of the Ārya Samāj. Satyārtha Prakāś called for a return to the Vedas and against idol-worship, caste-by-birth and child marriage.',
    works: ['Satyārtha Prakāś', 'Ṛgveda Bhāṣya'],
    detail: {
      intro:
        'Dayānanda Sarasvatī was the fiery reformer who called Hindu India “back to the Vedas” — rejecting the accretions of later centuries in favour of what he held to be the pure, rational religion of the Vedic seers.',
      contributions: [
        'Founded the Ārya Samāj in 1875, a reform movement based on the sole authority of the Vedas.',
        'Wrote the Satyārtha Prakāś (“Light of Truth”), the manifesto of his reform.',
        'Attacked idol-worship, caste-by-birth, untouchability and child marriage, and championed women’s education and widow remarriage.',
        'Began a Vedic commentary (Ṛgveda Bhāṣya) and revived the study of the Saṃhitās.',
      ],
      legacy:
        'The Ārya Samāj became a powerful force for social reform and education across north India and the diaspora, and Dayānanda’s assertion of Vedic authority and Hindu self-confidence fed directly into the national awakening.',
    },
  },
  {
    id: 'tilak',
    name: 'Bāḷ Gaṅgādhar Tilak',
    deva: 'बाळ गंगाधर टिळक',
    seal: 'ती',
    epithet: 'Lokmānya',
    epithetDeva: 'लोकमान्य',
    dates: '1856–1920 CE',
    datesDeva: 'इ.स. १८५६–१९२०',
    era: 'modern',
    tradition: 'Karma-yoga · nationalism',
    traditionDeva: 'कर्मयोग · राष्ट्रवाद',
    blurb: 'Wrote the Gītā-Rahasya in a Mandalay prison. Read the Gītā as a manual of karma-yoga — a charter for action, not withdrawal.',
    works: ['Gītā-Rahasya', 'Orion', 'Arctic Home in the Vedas'],
    detail: {
      intro:
        'Bāḷ Gaṅgādhar Tilak, hailed as Lokmānya (“accepted by the people”), was the foremost radical leader of the early national movement — and a scholar who reread the Bhagavad-Gītā as a summons to action.',
      contributions: [
        'Wrote the Gītā-Rahasya in a Mandalay prison, interpreting the Gītā as a manual of karma-yoga — selfless action, not withdrawal.',
        'Declared that “Swaraj is my birthright and I shall have it,” galvanising the demand for self-rule.',
        'Revived public Gaṇeśa and Śivājī festivals as vehicles of national feeling.',
        'Wrote scholarly works on Vedic antiquity, Orion and The Arctic Home in the Vedas.',
      ],
      legacy:
        'Tilak transformed the freedom struggle from elite petitioning into a mass movement, and his karma-yoga reading of the Gītā gave Indian nationalism a spiritual charter. His call for Swaraj echoed through the entire independence movement.',
    },
  },
  {
    id: 'ramakrishna',
    name: 'Rāmakṛṣṇa Paramahaṃsa',
    deva: 'रामकृष्ण परमहंसः',
    seal: 'रा',
    dates: '1836–1886 CE',
    datesDeva: 'इ.स. १८३६–१८८६',
    era: 'modern',
    tradition: 'Bhakti · jñāna · universal religion',
    traditionDeva: 'भक्ती · ज्ञान · सर्व-धर्म-समभाव',
    blurb: 'The Bengali mystic of Dakṣiṇeśvar who practiced — to verify — Vaiṣṇava, Śākta, Advaita, Christian and Islamic paths in turn, and reported the same goal.',
    works: ['Gospel of Śrī Rāmakṛṣṇa', 'Kathāmṛta'],
    detail: {
      intro:
        'Rāmakṛṣṇa Paramahaṃsa was the Bengali mystic of the Dakṣiṇeśvar Kālī temple whose direct, experimental spirituality became the seed of a worldwide movement. He sought not to argue religions but to verify them in his own experience.',
      contributions: [
        'Practised in turn the paths of Vaiṣṇava devotion, Śākta worship, Advaita, Christianity and Islam — and reported that all led to the same Reality.',
        'Taught a religion of direct experience (anubhava) over doctrine, in vivid parables drawn from everyday Bengali life.',
        'His conversations were recorded in the Kathāmṛta (Gospel of Śrī Rāmakṛṣṇa), one of the great spiritual documents of modern India.',
        'Formed the circle of disciples, led by Vivekānanda, who would carry his message to the world.',
      ],
      legacy:
        'Rāmakṛṣṇa’s testimony that all religions reach the same goal became one of the most influential spiritual ideas of the modern age. Through his disciples and the Mission they founded, his life reshaped how Hinduism understood and presented itself abroad.',
    },
  },
  {
    id: 'vivekananda',
    name: 'Swāmī Vivekānanda',
    deva: 'स्वामी विवेकानन्द',
    seal: 'वि',
    dates: '1863–1902 CE',
    datesDeva: 'इ.स. १८६३–१९०२',
    era: 'modern',
    tradition: 'Practical Vedānta · seva',
    traditionDeva: 'प्रायोगिक वेदान्त · सेवा',
    blurb: 'The 1893 Chicago address. Founded the Rāmakṛṣṇa Mission. Recast Vedānta as a rational, this-worldly creed and made service of the human the worship of God.',
    works: ['Rāja-Yoga', 'Karma-Yoga', 'Chicago Addresses'],
    detail: {
      intro:
        'Swāmī Vivekānanda is the monk who carried Vedānta to the world and recast it for the modern age — the foremost disciple of Rāmakṛṣṇa and one of the most electrifying figures of the Indian awakening.',
      contributions: [
        'Electrified the 1893 Parliament of Religions in Chicago with his address on tolerance and universal religion.',
        'Founded the Rāmakṛṣṇa Mission, uniting spiritual practice with organised social service (sevā).',
        'Recast Vedānta as a rational, life-affirming, this-worldly creed — “practical Vedānta” — and taught the divinity of every human being.',
        'Wrote enduring expositions of Rāja-Yoga, Karma-Yoga, Bhakti-Yoga and Jñāna-Yoga.',
      ],
      legacy:
        'Vivekānanda gave modern India its spiritual self-confidence and the West its first compelling presentation of Vedānta and yoga. His vision of service as worship and his summons to national strength inspired generations of reformers and freedom-fighters.',
    },
  },
  {
    id: 'aurobindo',
    name: 'Aurobindo Ghose',
    deva: 'अरविन्द घोषः',
    seal: 'अ',
    epithet: 'Mahāyogī',
    epithetDeva: 'महायोगी',
    dates: '1872–1950 CE',
    datesDeva: 'इ.स. १८७२–१९५०',
    era: 'modern',
    tradition: 'Integral yoga · Pondicherry',
    traditionDeva: 'पूर्ण योग · पुदुच्चेरी',
    blurb: 'The Life Divine, the Essays on the Gītā and Savitrī — an integral yoga that reads the spiritual life as evolutionary and the body as the field of transformation.',
    works: ['The Life Divine', 'Essays on the Gītā', 'Savitrī'],
    detail: {
      intro:
        'Aurobindo Ghose was a revolutionary nationalist who became one of the most original spiritual philosophers of modern India — abandoning politics for a yoga aimed at nothing less than the transformation of human nature itself.',
      contributions: [
        'Wrote The Life Divine, a vast synthesis of Vedānta and an evolutionary vision of consciousness.',
        'Developed integral yoga (pūrṇa yoga), which seeks to bring the divine down into mind, life and body rather than escape the world.',
        'Composed Savitrī, an epic poem of some 24,000 lines, the fullest expression of his vision.',
        'Wrote the Essays on the Gītā, reading it as a gospel of divine action.',
      ],
      legacy:
        'Aurobindo’s evolutionary spirituality — the idea that humanity is a transitional being moving toward a higher consciousness — gave modern Indian thought one of its boldest visions. The Pondicherry āśrama and Auroville continue his work.',
    },
  },
  {
    id: 'ramana',
    name: 'Ramaṇa Maharṣi',
    deva: 'रमण महर्षिः',
    seal: 'र',
    dates: '1879–1950 CE',
    datesDeva: 'इ.स. १८७९–१९५०',
    era: 'modern',
    tradition: 'Advaita · ātma-vicāra',
    traditionDeva: 'अद्वैत · आत्म-विचार',
    blurb: 'On the hill of Aruṇācala, the silent revival of the one question — “Who am I?” The simplest possible method of self-inquiry, made universal.',
    works: ['Upadeśa Sāram', 'Forty Verses on Reality'],
    detail: {
      intro:
        'Ramaṇa Maharṣi was the silent sage of Aruṇācala — a teacher who, after a spontaneous awakening at sixteen, lived for over fifty years on the slopes of the holy hill, teaching mostly through his presence.',
      contributions: [
        'Revived the practice of self-inquiry (ātma-vicāra), centred on the single question “Who am I?”',
        'Taught the direct path to the Self in the simplest possible terms, beyond ritual, doctrine and sect.',
        'Composed the Upadeśa Sāram and the Forty Verses on Reality (Uḷḷadu Nāṟpadu).',
        'Drew seekers from every land to Tiruvaṇṇāmalai through the power of his silent abiding.',
      ],
      legacy:
        'Ramaṇa’s method of self-inquiry has become one of the most widely practised forms of Advaita in the modern world, East and West. He stands as living proof that the highest realisation can be expressed in a single, universal question.',
    },
  },
  {
    id: 'sivananda',
    name: 'Svāmī Śivānanda',
    deva: 'स्वामी शिवानन्दः',
    seal: 'शि',
    dates: '1887–1963 CE',
    datesDeva: 'इ.स. १८८७–१९६३',
    era: 'modern',
    tradition: 'Yoga · Vedānta · seva',
    traditionDeva: 'योग · वेदान्त · सेवा',
    blurb: 'Founded the Divine Life Society at Ṛṣikeśa. Three hundred books that taught yoga, Vedānta and a householder discipline accessible to the modern reader.',
    works: ['Divine Life Society', '300+ books'],
    detail: {
      intro:
        'Svāmī Śivānanda was a physician who became one of the great teaching saints of modern India — a tireless populariser of yoga and Vedānta who made the tradition accessible to the ordinary householder.',
      contributions: [
        'Founded the Divine Life Society at Ṛṣikeśa in 1936 and the Sivananda Ashram on the Ganges.',
        'Wrote more than three hundred books on yoga, Vedānta, ethics and daily spiritual practice in plain, practical language.',
        'Taught an integral “Yoga of Synthesis” combining karma, bhakti, rāja and jñāna yoga.',
        'Trained a worldwide network of disciples (including Vishnudevananda and Chinmayananda) who carried yoga across the globe.',
      ],
      legacy:
        'Through his vast output and his disciples, Śivānanda did more than almost anyone to bring yoga and Vedānta to a modern, global audience. The Divine Life Society and its offshoots remain active worldwide.',
    },
  },
  {
    id: 'radhakrishnan',
    name: 'Sarvepalli Rādhākrishnan',
    deva: 'सर्वपल्ली राधाकृष्णन्',
    seal: 'रा',
    dates: '1888–1975 CE',
    datesDeva: 'इ.स. १८८८–१९७५',
    era: 'modern',
    tradition: 'Philosophy · statecraft',
    traditionDeva: 'तत्त्वज्ञान · राजनीति',
    blurb: 'Philosopher-statesman. Indian Philosophy and translations of the Upaniṣads, Gītā and Brahma-Sūtra carried Vedānta into the academies of the world.',
    works: ['Indian Philosophy', 'Translations of prasthāna-trayī'],
    detail: {
      intro:
        'Sarvepalli Rādhākrishnan was the philosopher-statesman who interpreted Indian thought to the modern academic world and rose to become the second President of India. He bridged the worlds of Eastern wisdom and Western scholarship as few have done.',
      contributions: [
        'Wrote Indian Philosophy, the comprehensive survey that introduced the subject to the global academy.',
        'Produced scholarly translations and commentaries on the principal Upaniṣads, the Bhagavad-Gītā and the Brahma-Sūtra.',
        'Held chairs at Calcutta and Oxford and argued for the rational and experiential basis of religion.',
        'Served as India’s first Vice-President and second President; his birthday is observed as Teachers’ Day.',
      ],
      legacy:
        'Rādhākrishnan carried Vedānta into the universities of the world and won it intellectual respect on the global stage. His writings remain standard introductions, and he stands as a model of the scholar in public life.',
    },
  },
  {
    id: 'gandhi',
    name: 'Mahātmā Gāndhī',
    deva: 'महात्मा गांधी',
    seal: 'गा',
    dates: '1869–1948 CE',
    datesDeva: 'इ.स. १८६९–१९४८',
    era: 'modern',
    tradition: 'Satyāgraha · Gītā ethics',
    traditionDeva: 'सत्याग्रह · गीता नैतिकता',
    blurb: 'Hind Svarāj and the Anāsakti-Yoga commentary on the Gītā. Satyāgraha turned ahiṃsā into a political method that ended an empire.',
    works: ['Hind Svarāj', 'Anāsakti-Yoga', 'My Experiments with Truth'],
    detail: {
      intro:
        'Mohandas Karamchand Gāndhī, the Mahātmā, is the figure who turned a spiritual ethic into a method of mass political action — leading India to independence through truth and non-violence and reshaping the moral imagination of the twentieth century.',
      contributions: [
        'Developed satyāgraha (“holding firmly to truth”), a method of non-violent resistance tested in South Africa and India.',
        'Read the Bhagavad-Gītā as a guide to selfless, desireless action, expressed in his Anāsakti-Yoga commentary.',
        'Wrote Hind Svarāj, a critique of modern industrial civilisation, and the autobiography My Experiments with Truth.',
        'Led the Indian independence movement to success through ahiṃsā and constructive social work.',
      ],
      legacy:
        'Gāndhī demonstrated that ahiṃsā could be a force in history, ending an empire without an army. His method inspired Martin Luther King, Nelson Mandela and movements for justice across the world, and made him the moral conscience of the modern age.',
    },
  },
  {
    id: 'ambedkar',
    name: 'B. R. Ambedkar',
    deva: 'बाबासाहेब आंबेडकर',
    seal: 'आं',
    epithet: 'Bābāsāheb',
    epithetDeva: 'बाबासाहेब',
    dates: '1891–1956 CE',
    datesDeva: 'इ.स. १८९१–१९५६',
    era: 'modern',
    tradition: 'Jurisprudence · Navayāna Buddhism',
    traditionDeva: 'विधिशास्त्र · नवयान बौद्ध',
    blurb: 'Chief architect of the Indian Constitution. The Buddha and His Dhamma reframes Buddhism as a modern social ethic for the republic.',
    works: ['Indian Constitution', 'The Buddha and His Dhamma', 'Annihilation of Caste'],
    detail: {
      intro:
        'Bhimrao Ramji Ambedkar, known as Bābāsāheb, was the jurist, economist and social reformer who became the chief architect of independent India’s Constitution and the foremost champion of the country’s oppressed.',
      contributions: [
        'Chaired the drafting committee of the Indian Constitution, embedding equality, liberty and social justice in its foundations.',
        'Led the struggle against untouchability and caste, demanding the annihilation of caste itself.',
        'Wrote Annihilation of Caste and The Buddha and His Dhamma, reframing Buddhism as a rational social ethic.',
        'In 1956 led the mass conversion of his followers to Buddhism (Navayāna), offering a path of dignity outside the caste order.',
      ],
      legacy:
        'Ambedkar gave the Indian republic its constitutional framework and gave its most marginalised a voice, a method and a faith. His thought remains central to every debate on caste, equality and social justice in India today.',
    },
  },
  {
    id: 'yogananda',
    name: 'Paramahaṃsa Yogānanda',
    deva: 'परमहंस योगानन्दः',
    seal: 'यो',
    dates: '1893–1952 CE',
    datesDeva: 'इ.स. १८९३–१९५२',
    era: 'modern',
    tradition: 'Kriyā-yoga · global outreach',
    traditionDeva: 'क्रिया-योग · वैश्विक प्रसार',
    blurb: 'Autobiography of a Yogi opened kriyā-yoga to the West with a reach no earlier teacher matched. Founded the Self-Realization Fellowship.',
    works: ['Autobiography of a Yogi', 'God Talks with Arjuna'],
    detail: {
      intro:
        'Paramahaṃsa Yogānanda was the yogi who introduced kriyā-yoga and the science of meditation to the West on a scale no earlier teacher had reached — a bridge between the spiritual traditions of India and the modern world.',
      contributions: [
        'Wrote Autobiography of a Yogi, one of the most widely read spiritual books of the twentieth century.',
        'Founded the Self-Realization Fellowship to disseminate the techniques of kriyā-yoga.',
        'Taught meditation as a practical, verifiable science of inner experience accessible to all.',
        'Wrote God Talks with Arjuna, a commentary on the Bhagavad-Gītā for the modern seeker.',
      ],
      legacy:
        'Yogānanda’s Autobiography of a Yogi has drawn millions to meditation and the spiritual traditions of India, and the Self-Realization Fellowship continues his work worldwide. He is among the most influential of those who carried yoga to the global stage.',
    },
  },
];

export const CONTRIB_ERAS = ['vedic', 'classical', 'medieval', 'modern'] as const;
