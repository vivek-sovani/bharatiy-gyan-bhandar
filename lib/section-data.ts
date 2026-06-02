// Detail content for each section page.
// All copy is original synthesis for an educational platform.

export type Shloka = { deva: string; trans: string; cite: string };

export type SectionAspect = { name: string; deva?: string; desc: string };

export type SectionItem = {
  id: string;
  title: string;
  deva: string;
  epithet: string;
  meta: string[];
  summary: string;
  opening?: Shloka;
  facets?: string[];
  // Optional rich-detail fields rendered on the item detail page
  explanation?: string[];
  aspects?: SectionAspect[];
};

export type SectionDetail = {
  title: string;
  deva: string;
  crumb: string[];
  lede: string;
  layout: 'tabs' | 'grid' | 'primer';
  items?: SectionItem[];
};

export const SECTION_DETAILS: Record<string, SectionDetail> = {

  // ──────────────────────────────────────────────────────── Upavedas
  upavedas: {
    title: 'The Upavedas',
    deva: 'उपवेदाः',
    crumb: ['Collection', 'Smṛti', 'The Upavedas'],
    lede: 'Four applied sciences — one paired with each principal Veda. Where the Vedas record the rite, the Upavedas record what to do with the rest of life: a body to keep healthy, a polity to defend, a music to make, a building to raise.',
    layout: 'tabs',
    items: [
      {
        id: 'ayurveda',
        title: 'Āyurveda',
        deva: 'आयुर्वेद',
        epithet: 'The science of life',
        meta: ['Paired with Atharvaveda', 'Caraka · Suśruta · Vāgbhaṭa', 'Aṣṭāṅga — eight limbs'],
        summary: 'A complete medical system organised around three doṣas (vāta · pitta · kapha), seven dhātus and the daily and seasonal rhythm of the body. Its surviving compendia — the Caraka-saṃhitā, the Suśruta-saṃhitā, the Aṣṭāṅga-hṛdaya — are still in clinical use.',
        opening: { deva: 'आयुष्कामीयम् — आयुर्वेदयतीत्यायुर्वेदः ।', trans: '“On the desire for life — that which makes life known is Āyurveda.”', cite: 'Caraka-saṃhitā · Sūtrasthāna 1' },
        facets: ['Internal medicine', 'Surgery (śalya)', 'Toxicology', 'Paediatrics', 'Rasāyana · rejuvenation'],
      },
      {
        id: 'dhanurveda',
        title: 'Dhanurveda',
        deva: 'धनुर्वेद',
        epithet: 'The science of arms',
        meta: ['Paired with Yajurveda', 'Bow, sword, mace, war-elephant', 'Defensive yoga'],
        summary: 'The science of weaponry and warfare — archery, swordsmanship, the conduct of a kṣatriya in the field, and the ethics of when and how a war may be fought. Treated in the epics and codified in works like the Dhanurveda-saṃhitā.',
        opening: { deva: 'धनुर्वेदोऽधनुर्वेदः — चतुष्पादोऽयं वेदः ।', trans: '“Dhanurveda — the four-footed Veda — for the bow, the sword, the polearm and the hand.”', cite: 'Vasiṣṭha · Dhanurveda-saṃhitā' },
        facets: ['Archery (dhanurvidyā)', 'Bāhu-yuddha · unarmed combat', 'Yuddha-dharma'],
      },
      {
        id: 'gandharvaveda',
        title: 'Gāndharvaveda',
        deva: 'गान्धर्ववेद',
        epithet: 'The science of music',
        meta: ['Paired with Sāmaveda', 'Saṅgīta-ratnākara', 'Nāṭya-śāstra'],
        summary: 'The science of music, dance and dramatic performance — the disciplines descended from the chant of the Sāmaveda. Its surviving treatises are the Nāṭya-śāstra of Bharata and the Saṅgīta-ratnākara of Śāraṅgadeva, ancestors of every later Indian classical tradition.',
        opening: { deva: 'सप्त स्वराः षड्जादयो विज्ञेयाः ।', trans: '“The seven svaras — sa, ri, ga, ma, pa, dha, ni — are to be known.”', cite: 'Nāṭya-śāstra · 28' },
        facets: ['Saṅgīta · music', 'Nṛtya · dance', 'Nāṭya · drama'],
      },
      {
        id: 'sthapatyaveda',
        title: 'Sthāpatyaveda',
        deva: 'स्थापत्यवेद',
        epithet: 'The science of building',
        meta: ['Paired with Ṛgveda', 'Mānasāra · Mayamatam', 'Vāstu-puruṣa-maṇḍala'],
        summary: 'The science of architecture, temple-design, town-planning and sacred geometry. Its texts — the Mānasāra, the Mayamatam, the Samarāṅgaṇa-sūtradhāra — encode the ratios that govern everything from a doorway to a city.',
        opening: { deva: 'वास्तुपुरुषमण्डलं भूमिं विभजति ।', trans: '“The maṇḍala of the vāstu-puruṣa divides the site.”', cite: 'Mānasāra · 7' },
        facets: ['Vāstu-śāstra', 'Śilpa-śāstra', 'Town planning'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Vedangas
  vedangas: {
    title: 'The Six Vedāṅgas',
    deva: 'षड्वेदाङ्गानि',
    crumb: ['Collection', 'Auxiliary', 'The Six Vedāṅgas'],
    lede: 'The six limbs without which the Veda cannot be read — phonetics, ritual, grammar, etymology, prosody, astronomy. Every limb has its own sūtra literature; together they make the Veda intelligible.',
    layout: 'grid',
    items: [
      { id: 'shiksha', title: 'Śikṣā', deva: 'शिक्षा', epithet: 'The mouth — phonetics', meta: ['Pāṇinīya · Yājñavalkya', '6 vowels · 25 consonants'], summary: 'The science of pronunciation, accent, articulation and recitation. Treats each speech sound — its place of articulation, effort, duration — with a precision unmatched by any other ancient grammar.', facets: ['Mouth of the Veda', 'Vyākaraṇa-companion'] },
      { id: 'kalpa', title: 'Kalpa', deva: 'कल्प', epithet: 'The hand — ritual', meta: ['Śrauta · Gṛhya · Dharma', 'Sūtra literature'], summary: 'The science of ritual procedure — public yajña, household rite and the rules of dharma. The Kalpa-sūtras are among the oldest prose works in any Indo-European language.', facets: ['Śrauta-sūtra', 'Gṛhya-sūtra', 'Dharma-sūtra'] },
      { id: 'vyakarana', title: 'Vyākaraṇa', deva: 'व्याकरण', epithet: 'The face — grammar', meta: ['Pāṇini · Aṣṭādhyāyī', '3,959 sūtras'], summary: 'A complete formal grammar of Sanskrit. Pāṇini’s Aṣṭādhyāyī derives every Sanskrit word from rules — twenty-five centuries before modern formal grammar, and at finer resolution than any of its successors.', facets: ['Generative grammar', 'Pāṇinian model'] },
      { id: 'nirukta', title: 'Nirukta', deva: 'निरुक्त', epithet: 'The ear — etymology', meta: ['Yāska', '5 chapters · 14 sections'], summary: 'The science of word-meaning and derivation. Yāska’s Nirukta organises obscure Vedic terms into a working philological method — the closest classical antiquity ever came to a comparative dictionary.', facets: ['Nighaṇṭu glossary', 'Semantic theory'] },
      { id: 'chandas', title: 'Chandas', deva: 'छन्दस्', epithet: 'The foot — prosody', meta: ['Piṅgala · Chanda-sūtra', '7 vedic metres'], summary: 'The science of metre. Piṅgala’s Chanda-sūtra is the first known systematic treatment of metrical patterns — and contains the earliest description of what is now called Pascal’s triangle and the Fibonacci sequence.', facets: ['Gāyatrī · Anuṣṭubh', 'Combinatorics'] },
      { id: 'jyotisha', title: 'Jyotiṣa', deva: 'ज्योतिष', epithet: 'The eye — astronomy', meta: ['Vedāṅga-jyotiṣa', 'Lagadha · ~1400 BCE'], summary: 'The science of celestial timing — when a rite should be performed. Begins with a luni-solar calendar and the twenty-seven nakṣatras, and grows into a complete astronomy by the classical period.', facets: ['Calendar', 'Nakṣatras · ecliptic', 'Astrology — later'] },
    ],
  },

  // ──────────────────────────────────────────────────────── Upanishads
  upanishads: {
    title: 'The Upaniṣads',
    deva: 'उपनिषदः',
    crumb: ['Collection', 'Śruti', 'The Upaniṣads'],
    lede: 'The “sitting-down-near” — late-Vedic dialogues that turn from the outer rite toward the question of the self. Tradition counts 108; ten are conventionally called principal (mukhya). Together they form the source of every later Vedānta school.',
    layout: 'grid',
    items: [
      { id: 'isha', title: 'Īśa', deva: 'ईश', epithet: 'The seer everywhere', meta: ['18 verses', 'Śukla-Yajurveda'], summary: 'The shortest of the principal — eighteen verses on the world “covered by the Lord”, on action without grasping, and on the play of immanence and transcendence.', facets: ['Śānti-mantra', 'Karman & jñāna'] },
      { id: 'kena', title: 'Kena', deva: 'केन', epithet: 'By whom is the mind sent?', meta: ['4 chapters', 'Sāmaveda'], summary: 'A short dialogue on the ground of all faculties — the question “by whom?” pressed until the gods themselves do not know whose strength has just won the battle.', facets: ['Prose + verse', 'Indra & Umā'] },
      { id: 'katha', title: 'Kaṭha', deva: 'कठ', epithet: 'Naciketas and Death', meta: ['2 sections · 6 vallīs', 'Kṛṣṇa-Yajurveda'], summary: 'The boy Naciketas is sent to Yama and asks the secret of what survives. Yama answers in verse — the chariot of the body, the reins of the mind, the path “sharp as the razor’s edge.”', facets: ['Most quoted', 'Source of the Gītā imagery'] },
      { id: 'prashna', title: 'Praśna', deva: 'प्रश्न', epithet: 'Six questions', meta: ['6 questions', 'Atharvaveda'], summary: 'Six seekers approach the sage Pippalāda. Each asks a question; he answers in prose. The breath, the dream, the syllable Aum, and where the self abides while the body sleeps.', facets: ['Pippalāda', 'Q&A form'] },
      { id: 'mundaka', title: 'Muṇḍaka', deva: 'मुण्डक', epithet: 'Higher and lower knowledge', meta: ['3 muṇḍakas', 'Atharvaveda'], summary: 'The famous two-bird simile of the self and the witness, and the line that the modern Indian state took for its motto — satyam eva jayate, “truth alone triumphs.”', facets: ['Two-bird verse', 'State motto'] },
      { id: 'mandukya', title: 'Māṇḍūkya', deva: 'माण्डूक्य', epithet: 'The four states', meta: ['12 verses', 'Atharvaveda'], summary: 'The shortest principal Upaniṣad — twelve verses on the four states of consciousness (waking, dream, sleep, turīya) and the syllable Aum that contains them.', facets: ['Aum · A-U-M', 'Turīya'] },
      { id: 'taittiriya', title: 'Taittirīya', deva: 'तैत्तिरीय', epithet: 'The five sheaths', meta: ['3 vallīs', 'Kṛṣṇa-Yajurveda'], summary: 'Origin of the pañca-kośa model — the five sheaths of the self, from the gross body of food to the bliss-body — and the famous instruction to the departing student: speak truth, do dharma.', facets: ['Annamaya → ānandamaya'] },
      { id: 'aitareya', title: 'Aitareya', deva: 'ऐतरेय', epithet: 'Origin of beings', meta: ['3 chapters', 'Ṛgveda'], summary: 'Cosmogony in three short chapters — the self alone, the act of looking, and the emergence of speech, breath, eye, ear and mind from a single original being.', facets: ['Cosmogony'] },
      { id: 'chandogya', title: 'Chāndogya', deva: 'छान्दोग्य', epithet: 'Sat, the One', meta: ['8 chapters', 'Sāmaveda'], summary: 'Long, narrative, foundational. The dialogues of Uddālaka and Śvetaketu (“tat tvam asi — that thou art”), and the meditation on the syllable Aum that opens every later commentary.', facets: ['Tat tvam asi', 'Source mahāvākya'] },
      { id: 'brihad', title: 'Bṛhad-āraṇyaka', deva: 'बृहदारण्यक', epithet: 'The great forest', meta: ['6 chapters', 'Śukla-Yajurveda'], summary: 'The longest and arguably the deepest — Yājñavalkya and Maitreyī on what survives death, Yājñavalkya in the court of Janaka, the line “neti, neti — not this, not this.”', facets: ['Yājñavalkya', 'Neti neti'] },
    ],
  },

  // ──────────────────────────────────────────────────────── Darshanas (Āstika)
  darshanas: {
    title: 'The Āstika Darśanas',
    deva: 'षड्दर्शनानि',
    crumb: ['Collection', 'Smṛti', 'Āstika Darśanas'],
    lede: 'Six orthodox schools of Indic philosophy — orthodox in the technical sense that they accept the authority of the Veda. Paired in three couples, each pair sharing its method and each member countering the other. The classical opposing schools, the Nāstika Darśanas, sit beside them in the collection.',
    layout: 'tabs',
    items: [
      { id: 'nyaya', title: 'Nyāya', deva: 'न्याय', epithet: 'The school of logic',
        meta: ['Gautama · Nyāya-sūtras', '16 categories', 'Paired with Vaiśeṣika'],
        summary: 'The school of correct reasoning. Develops a complete theory of inference — five-membered syllogism, fallacies, debate — that became the standard tool of every later Indic argument, ours included.',
        opening: { deva: 'प्रमाण-प्रमेय-संशय-प्रयोजन-दृष्टान्त-सिद्धान्ता…', trans: 'The categories begin with pramāṇa (means of knowledge) and prameya (the knowable) — sixteen in all.', cite: 'Nyāya-sūtra · 1.1.1' },
        facets: ['Inference (anumāna)', 'Five-step syllogism', 'Fallacy theory'] },
      { id: 'vaisheshika', title: 'Vaiśeṣika', deva: 'वैशेषिक', epithet: 'The school of particulars',
        meta: ['Kaṇāda · Vaiśeṣika-sūtras', '7 categories', 'Atomism'],
        summary: 'The first Indian atomism. Reality is six (later seven) categories — substance, quality, action, generality, particularity, inherence — and matter is built from indivisible aṇus, an idea that pre-dates Democritus.',
        opening: { deva: 'अथातो धर्मं व्याख्यास्यामः ।', trans: 'Now therefore, we shall expound dharma.', cite: 'Vaiśeṣika-sūtra · 1.1.1' },
        facets: ['Aṇu — atom', 'Padārtha — categories', 'Naturalist'] },
      { id: 'sankhya', title: 'Sāṅkhya', deva: 'साङ्ख्य', epithet: 'The school of enumeration',
        meta: ['Kapila', '25 tattvas', 'Paired with Yoga'],
        summary: 'The oldest of the six. A strict dualism of puruṣa (consciousness) and prakṛti (nature), with twenty-three intermediate tattvas — the architecture every later Indian school argued with, including the Yoga-sūtras and the Bhagavad-gītā.',
        opening: { deva: 'मूलप्रकृतिरविकृतिः महदाद्याः प्रकृतिविकृतयः सप्त ।', trans: 'Root nature is unchanging; the seven beginning with mahat are both nature and modification.', cite: 'Sāṅkhya-kārikā · 3' },
        facets: ['Puruṣa & prakṛti', 'Three guṇas', 'Twenty-five tattvas'] },
      { id: 'yoga', title: 'Yoga', deva: 'योग', epithet: 'The school of practice',
        meta: ['Patañjali · Yoga-sūtras', '4 pādas · 196 sūtras', 'Aṣṭāṅga — eight limbs'],
        summary: 'The applied counterpart to Sāṅkhya. Patañjali’s 196 sūtras lay out an eight-limbed path from ethics (yama) to absorption (samādhi). “Yogaḥ citta-vṛtti-nirodhaḥ — yoga is the stilling of the modifications of the mind.”',
        opening: { deva: 'योगश्चित्तवृत्तिनिरोधः ॥', trans: 'Yoga is the stilling of the modifications of the mind.', cite: 'Yoga-sūtra · 1.2' },
        facets: ['Aṣṭāṅga', 'Samādhi', 'Iśvara-praṇidhāna'] },
      { id: 'mimamsa', title: 'Pūrva-Mīmāṃsā', deva: 'पूर्व-मीमांसा', epithet: 'The school of exegesis',
        meta: ['Jaimini · Mīmāṃsā-sūtras', 'Ritual-canonical', 'Paired with Vedānta'],
        summary: 'A rigorous theory of how a sentence in the Veda is to be read. Develops a doctrine of dharma derived not from a god but from the eternal authority of the Veda itself — and along the way invents most of Sanskrit semantic theory.',
        opening: { deva: 'अथातो धर्मजिज्ञासा ।', trans: 'Now therefore, the desire to know dharma.', cite: 'Mīmāṃsā-sūtra · 1.1.1' },
        facets: ['Apauruṣeya — unauthored', 'Sentence-meaning', 'Eternal Veda'] },
      { id: 'vedanta', title: 'Vedānta', deva: 'वेदान्त', epithet: 'The end of the Veda',
        meta: ['Bādarāyaṇa · Brahma-sūtras', 'Three streams', 'Advaita · Viśiṣṭādvaita · Dvaita'],
        summary: 'The “end of the Veda” — and, in a different sense, what comes at its end. Three classical streams: Advaita (Śaṅkara, non-dualism), Viśiṣṭādvaita (Rāmānuja, qualified non-dualism) and Dvaita (Madhva, dualism), all reading the same Upaniṣads.',
        opening: { deva: 'अथातो ब्रह्मजिज्ञासा ।', trans: 'Now therefore, the desire to know Brahman.', cite: 'Brahma-sūtra · 1.1.1' },
        facets: ['Brahman & ātman', 'Upaniṣad → Brahma-sūtra → Gītā', 'Three classical commentators'] },
    ],
  },

  // ──────────────────────────────────────────────────────── Agamas
  agamas: {
    title: 'Āgamas & Tantra',
    deva: 'आगमाः · तन्त्रम्',
    crumb: ['Collection', 'Tantra', 'Āgamas & Tantra'],
    lede: 'Three vast streams of ritual and esoteric literature — Śaiva, Vaiṣṇava and Śākta — that handed Indic religious life its working manuals. Where Vedic śruti speaks of yajña around the fire, the Āgamas speak of pratimā in the temple, mantra in the mouth, and yantra on the wall.',
    layout: 'tabs',
    items: [
      { id: 'shaiva', title: 'Śaiva-āgama', deva: 'शैव आगम', epithet: 'The Śaiva stream',
        meta: ['28 Śaiva-siddhānta āgamas', 'Kashmir Śaivism', '64 Bhairava-tantras'],
        summary: 'The oldest and best-organised of the three. Two principal sub-streams: the dualist Śaiva-siddhānta of the Tamil south, and the non-dual Trika of Kashmir — whose Spanda and Pratyabhijñā schools form some of the most sophisticated philosophy in the Indic record.',
        opening: { deva: 'चैतन्यमात्मा ॥', trans: '“Consciousness is the self.”', cite: 'Śiva-sūtra · 1.1' },
        facets: ['Trika of Kashmir', 'Pratyabhijñā', 'Temple liturgy'] },
      { id: 'vaishnava', title: 'Vaiṣṇava-āgama', deva: 'वैष्णव आगम', epithet: 'The Vaiṣṇava stream',
        meta: ['Pāñcarātra', 'Vaikhānasa', '108 saṃhitās'],
        summary: 'The Pāñcarātra and Vaikhānasa traditions govern the worship of Viṣṇu — temple iconography, daily ritual, the structure of vimāna and gopura. Most surviving Viṣṇu and Kṛṣṇa temples are run on Pāñcarātra lines.',
        opening: { deva: 'ॐ नमो नारायणाय ॥', trans: '“Aum — salutation to Nārāyaṇa.”', cite: 'Aṣṭākṣara-mantra' },
        facets: ['Pratimā · iconography', 'Mantra & mudrā', 'Aṣṭākṣara'] },
      { id: 'shakta', title: 'Śākta-tantra', deva: 'शाक्त तन्त्र', epithet: 'The Śākta stream',
        meta: ['Śrī-vidyā · Kālī-kula', 'Saundarya-laharī', 'Yantra-centric'],
        summary: 'The worship of the Goddess as ultimate reality — Śakti, the dynamic ground of consciousness. Its central yantra is the Śrī-cakra; its central text-cluster includes the Saundarya-laharī and the Devī-māhātmya.',
        opening: { deva: 'शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुम् ।', trans: 'Śiva, only when joined with Śakti, has the power to act.', cite: 'Saundarya-laharī · 1' },
        facets: ['Śrī-cakra', 'Mantra · yantra · mudrā', 'Daśa-mahāvidyā'] },
    ],
  },

  // ──────────────────────────────────────────────────────── Itihasa
  itihasa: {
    title: 'Itihāsa',
    deva: 'इतिहासः',
    crumb: ['Collection', 'Smṛti', 'Itihāsa'],
    lede: 'Itihāsa — literally “thus indeed it was.” Two great narrative encyclopaedias, transmitted as the people’s Veda: the Rāmāyaṇa of Vālmīki and the Mahābhārata of Vyāsa. Between them they contain the Indic theory of dharma in story form.',
    layout: 'tabs',
    items: [
      { id: 'ramayana', title: 'Rāmāyaṇa', deva: 'रामायण', epithet: 'The way of Rāma',
        meta: ['Vālmīki', '24,000 verses', '7 kāṇḍas'],
        summary: 'The earlier of the two — Vālmīki’s ādi-kāvya, the first poem. The story of Rāma’s exile, the abduction of Sītā, the war at Laṅkā, and the return. The Hindu world has retold it ever since: Tulsidās in Avadhī, Kamban in Tamil, the shadow-puppets of Bali, the Ramakien in Thai.',
        opening: { deva: 'तपः स्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।', trans: 'Devoted to austerity and recitation, the foremost of speakers — to him Vālmīki put the question…', cite: 'Rāmāyaṇa · Bāla-kāṇḍa 1.1' },
        facets: ['Seven kāṇḍas', 'Ādi-kāvya', 'Vālmīki'] },
      { id: 'mahabharata', title: 'Mahābhārata', deva: 'महाभारत', epithet: 'The great Bhārata',
        meta: ['Vyāsa', '1,00,000+ verses', '18 parvas'],
        summary: 'Eight times the size of the Iliad and Odyssey combined. Within it: the war of the Kuru cousins, the entire Bhagavad-gītā, the Anuśāsana-parvan’s catalogue of dharma, the Yakṣa-praśna, and the saying — what is not here is nowhere.',
        opening: { deva: 'यतो धर्मस्ततो जयः ॥', trans: '“Where dharma is, there is victory.”', cite: 'Mahābhārata · Udyoga-parva' },
        facets: ['Bhagavad-gītā', '18 parvans', 'Pañcama-veda'] },
    ],
  },

  // ──────────────────────────────────────────────────────── Lifestyle
  lifestyle: {
    title: 'Dinacaryā & Living',
    deva: 'दिनचर्या',
    crumb: ['Collection', 'Practice', 'Dinacaryā & Living'],
    lede: 'How the day is structured — and the week, the season, the lifetime — when the science of life is taken seriously at the scale of a single morning. Four interlocking calendars: the day (dinacaryā), the season (ṛtucaryā), the four ages of a person (āśrama), and the four ends of life (puruṣārtha).',
    layout: 'grid',
    items: [
      {
        id: ‘dinacharya’, title: ‘Dinacaryā’, deva: ‘दिनचर्या’, epithet: ‘The daily rhythm’,
        meta: [‘Six segments’, ‘Brāhma muhūrta’, ‘Doṣa-clock’],
        summary: ‘The day divided into six tri-doṣic windows. Wake before sunrise, oil the body, sit, the principal meal at noon, light supper before dusk, sleep before the Pitta hours of the night begin again.’,
        facets: [‘Wake · 04:30’, ‘Mid-meal · noon’, ‘Sleep · 22:00’],
        explanation: [
          ‘Dinacaryā is the Indic practice of sequencing the twenty-four hours of the day against the body\’s own clock — the cyclical rise and fall of the three doṣas. The Caraka-saṃhitā and Aṣṭāṅga-hṛdaya both open with chapters on it, treating it not as a recommendation but as the precondition for everything else medicine does. Get the day wrong, and no diet or treatment will fully take.’,
          ‘The principle is mechanical: each pair of four-hour windows is dominated by one doṣa (Kapha at sunrise, Pitta at noon, Vāta in the late afternoon, then back round through the night). Eating, working, exercising and sleeping are placed where they cooperate with the dominant doṣa rather than fight it. The result is a structure most people now recover only by accident — early bedtime, principal meal at midday, light supper, fasted morning movement.’,
          ‘The morning\’s first hour is itself a precise sequence. Caraka\’s sūtra-sthāna prescribes it in order: wake, evacuate, clean the teeth with a herbal twig (danta-kaṣṭha), scrape the tongue (jihvā-nirlekhana) to remove overnight accumulation, pull medicated oil through the teeth (kavala or ganduṣa), then oil the whole body (abhyaṅga) before exercise and bath. Each step prepares the next: the purified mouth before the body is fed, the oiled body before it is moved. Vyāyāma — exercise — follows the body preparation but precedes the bath, performed at half the body\’s maximum capacity (ardha-bala). Caraka\’s rule for stopping: when sweat appears on the forehead and armpits and the breath becomes laboured, the half-strength mark has been found. Exercise beyond this point depletes rather than builds.’,
        ],
        aspects: [
          { name: ‘Brāhma muhūrta’, deva: ‘ब्राह्म मुहूर्त’, desc: ‘The ninety-six minutes before sunrise — when sattva is highest in the atmosphere and the mind takes its colour from the day to come. Recommended for waking, study and contemplative practice. What abhyaṅga does for the body, the brāhma muhūrta does for the mind: it sets the register for everything that follows.’ },
          { name: ‘Mukha-śuddhi’, deva: ‘मुख-शुद्धि’, desc: ‘The morning oral sequence — herbal twig brushing (danta-kaṣṭha), tongue scraping (jihvā-nirlekhana) and oil pulling (kavala or ganduṣa). The mouth is the first gate of agni; Caraka treats its morning purification as the threshold of the entire day\’s digestion.’ },
          { name: ‘Abhyaṅga’, deva: ‘अभ्यङ्ग’, desc: ‘Self-oil massage with warm sesame or coconut, performed before exercise and bath. The skin is treated as an absorptive organ. Caraka states that daily abhyaṅga counteracts vāta aggravation, improves vision, nourishes the body and produces resistance to fatigue — the single most-recommended daily intervention.’ },
          { name: ‘Vyāyāma’, deva: ‘व्यायाम’, desc: ‘Physical exercise performed in the Kapha window (roughly 6–10 a.m.) when the body most needs movement. The classical rule is ardha-bala — half-strength, not exhaustion. Caraka\’s sign to stop: sweat at the forehead and under the arms, breath becoming laboured. Beyond this point exercise produces āma rather than building ojas.’ },
          { name: ‘Madhyāhna-bhojana’, deva: ‘मध्याह्न-भोजन’, desc: ‘The principal meal taken between 10 a.m. and 2 p.m., when Pitta — the digestive fire — is at its strongest. The tradition\’s rule: eat only when hungry, eat until three-quarters full, leave one quarter for air. The body cannot fully process a heavy meal taken in the evening Kapha window.’ },
          { name: ‘Pradoṣa-kāla’, deva: ‘प्रदोष-काल’, desc: ‘The dusk transition — light food, the senses gradually withdrawn, no stimulating mental work. The Caraka instruction is that the night\’s quality of sleep is built in the hour before sundown: a heavy meal or excitement at this juncture delays the nervous system\’s settling and corrupts the Vāta–Kapha handover at midnight.’ },
        ],
      },
      {
        id: 'ritucharya', title: 'Ṛtucaryā', deva: 'ऋतुचर्या', epithet: 'The seasonal rhythm',
        meta: ['Six seasons', 'Ādāna · visarga', 'Doṣa-shift'],
        summary: 'Six Indian seasons, paired into solstice-halves. What to eat, what to wear, when to fast, when to be still — calibrated against the way the body’s doṣas shift over the year.',
        facets: ['Vasanta → Hemanta', 'Six-fold calendar', 'Seasonal diet'],
        explanation: [
          'Ṛtucaryā extends dinacaryā outward — the same logic of cooperating with the body’s rhythms, but applied across a twelve-month arc. The Indic year is read as six ṛtus, not four: Vasanta (spring), Grīṣma (summer), Varṣā (monsoon), Śarad (early autumn), Hemanta (early winter) and Śiśira (late winter). They cluster into two solstice-halves — Ādāna-kāla, when the sun is taking strength out of the body, and Visarga-kāla, when it gives strength back.',
          'In each season one doṣa accumulates, another aggravates, and a third pacifies. The classical advice is exact: take the bitter foods at the start of spring before Kapha thaws, eat the sweet fruits of summer with cool water, take ghee and warming spices through the long monsoon, and use late winter for the body’s heaviest building food. Modern Indian seasonal cooking — and most Indian fasts — are still calibrated to this map.',
        ],
        aspects: [
          { name: 'Ādāna-kāla', deva: 'आदान-काल', desc: 'The northern-solstice half — Śiśira, Vasanta, Grīṣma. The sun “takes away” strength from the body; foods should be cool, light, and easily digested. The classic cleansing season.' },
          { name: 'Visarga-kāla', deva: 'विसर्ग-काल', desc: 'The southern-solstice half — Varṣā, Śarad, Hemanta. The sun “gives back” to the body; the digestive fire is strongest, the heaviest building foods are taken in this half of the year.' },
          { name: 'Ṛtu-sandhi', deva: 'ऋतु-संधि', desc: 'The two-week junctures between seasons. The body is most vulnerable to disorder here. The classical rule is a slow transition — gradually adopt the new season’s diet over fifteen days rather than switching all at once.' },
          { name: 'Vamana, virecana, basti', deva: 'वमन · विरेचन · वस्ति', desc: 'Three of the five pañcakarma procedures, each indexed to a particular season — vomiting in spring, purgation in autumn, medicated enema in monsoon. Seasonal cleansing as preventive medicine.' },
        ],
      },
      {
        id: 'ashrama', title: 'Āśrama', deva: 'आश्रम', epithet: 'The four stages of life',
        meta: ['Brahmacarya · Gārhasthya', 'Vānaprastha · Sannyāsa'],
        summary: 'A life sketched in four parts — the student, the householder, the forest-dweller and the renunciate. Each has its own dharma, its own practice, its own measure of success.',
        facets: ['Four stages', 'Sva-dharma', 'Phase-aware'],
        explanation: [
          'The āśrama scheme divides a complete human life into four quarters, each with its own purpose, its own duties, and its own measure of fulfilment. The structure assumes a long life — roughly twenty-five years per stage, ideally a hundred years total (śatāyuḥ) — and asks the person to take up the priorities suited to each age rather than mixing them.',
          'The student studies and abstains; the householder marries, builds wealth, raises children, performs the public yajña; the forest-dweller hands over the household to the next generation and begins withdrawing from active obligation; the renunciate gives up all property and social identity to pursue mokṣa alone. The point is not that every individual must follow all four, but that the goals appropriate to one stage become a hindrance in another.',
          'Behind the scheme lies the doctrine of ṛṇa-traya — three inherited debts every person is born carrying. The debt to the ṛṣis (the sages whose transmitted learning sustains the tradition) is discharged by study: brahmacarya is fundamentally a debt-payment to those who preserved knowledge across generations. The debt to the pitṛs (ancestors) is discharged by producing children and sustaining the household lineage: gārhasthya is the stage at which this debt is settled. The debt to the devas is discharged by correct ritual observance — running across all stages but centred in the householder\'s sacred fire. Only when the three debts are discharged is a person considered to have genuinely earned the right to pursue mokṣa. Sannyāsa taken before the debts are settled is, in classical terms, an evasion rather than a renunciation. Each āśrama threshold is also a saṃskāra: the upanayana ceremony initiates brahmacarya, the vivāha (marriage) initiates gārhasthya, the deliberate handover of the household fire marks the entry into vānaprastha.',
        ],
        aspects: [
          { name: 'Brahmacarya', deva: 'ब्रह्मचर्य', desc: 'The student stage. Years 0–25. Study under a guru, mastery of Veda or chosen śāstra, celibacy, and cultivation of disciplines (vrata) that the householder stage will need. Brahmacarya discharges the first of the three inherited debts — to the ṛṣis whose learning is being received.' },
          { name: 'Gārhasthya', deva: 'गार्हस्थ्य', desc: 'The householder stage. Years 25–50. Marriage, children, the running of a household, the practice of artha and kāma within the frame of dharma. The single stage on which the other three depend materially — the Mahābhārata calls it the greatest of the four, for it alone supports all the others.' },
          { name: 'Vānaprastha', deva: 'वानप्रस्थ', desc: 'The forest-dweller stage. Years 50–75. The household is handed over to the next generation; the person withdraws from public life, takes up deeper contemplative practice, and begins to loosen the ties of role and identity that gārhasthya required. The name means moving toward the forest — literally or figuratively.' },
          { name: 'Sannyāsa', deva: 'संन्यास', desc: 'The renunciate stage. Years 75 onward — or earlier for the rare few in whom vairāgya arises before the debts are settled. All property, status and family attachment are given up. The single remaining puruṣārtha is mokṣa. The renunciate has no home, no fire, no fixed identity.' },
          { name: 'Upanayana', deva: 'उपनयन', desc: 'The initiation ceremony that opens brahmacarya — the "second birth" that makes a person dvija, twice-born. The student receives the sacred thread (yajñopavīta) and the Gāyatrī mantra; the teacher becomes a second father. Without upanayana, study in the formal sense cannot begin; with it, the first debt is formally acknowledged.' },
          { name: 'Ṛṇa-traya', deva: 'ऋण-त्रय', desc: 'The three inherited debts — to the ṛṣis (discharged by study), to the pitṛs/ancestors (discharged by marriage and offspring), and to the devas (discharged by ritual). The āśrama system is a discharge schedule: mokṣa pursued before the debts are cleared is liberation built on unpaid obligation.' },
        ],
      },
      {
        id: 'purushartha', title: 'Puruṣārtha', deva: 'पुरुषार्थ', epithet: 'The four ends of life',
        meta: ['Dharma · Artha', 'Kāma · Mokṣa'],
        summary: 'Four legitimate human goals, in order — duty (dharma), prosperity (artha), pleasure (kāma) and liberation (mokṣa). Tradition does not ask anyone to choose only one; it asks they be ordered.',
        facets: ['Four ends', 'Ordering principle'],
        explanation: [
          'The puruṣārthas are the four ends a human being is permitted, even encouraged, to pursue: dharma (right conduct), artha (the material means to live well), kāma (legitimate pleasure and desire) and mokṣa (release from the cycle of rebirth). The Indic ethical tradition is not ascetic by default — it explicitly accepts artha and kāma as ends in their own right.',
          'What it asks is that they be ordered. Dharma is the frame within which artha and kāma are pursued; mokṣa is the end behind all three. A life that pursues kāma at the cost of dharma collapses; a life that pursues only mokṣa skips three quarters of legitimate human experience. The śāstras devoted to each end — the dharma-śāstras, the artha-śāstras, the Kāma-sūtra, the Upaniṣads — together form a complete textbook of how a person lives.',
        ],
        aspects: [
          { name: 'Dharma', deva: 'धर्म', desc: 'Right conduct. The order-preserving principle in person and society — what is owed to one’s family, one’s station, one’s teachers, and to the unseen. The frame inside which the other three goals are pursued.' },
          { name: 'Artha', deva: 'अर्थ', desc: 'Material welfare — wealth, security, the resources without which dharma cannot be practised and kāma cannot be enjoyed. Subject of the Artha-śāstra of Kauṭilya and the rāja-dharma sections of the smṛtis.' },
          { name: 'Kāma', deva: 'काम', desc: 'Pleasure, desire, the aesthetic life. Not opposed to dharma but ordered by it. The Kāma-sūtra of Vātsyāyana is one of three principal sciences acknowledged by the tradition.' },
          { name: 'Mokṣa', deva: 'मोक्ष', desc: 'Release from the cycle of rebirth — the realisation that the self is not in the end identical with the role it plays. The terminal end behind the other three; the subject of the Upaniṣads, the Brahma-sūtras and the Gītā.' },
        ],
      },
      {
        id: 'dharma', title: 'Dharma', deva: 'धर्म', epithet: 'The living order',
        meta: ['Ṛtam · Satyam', 'Sva-dharma · Vivechan', 'Order in conduct'],
        summary: 'Dharma is ṛtam — the Vedic cosmic order — brought into human conduct through satyam. Where ṛtam governs the turning of seasons and the arc of the sun, dharma governs how a person moves within that same order: what is owed, what is timely, what restores rather than disrupts. Vivechan — discriminative discernment — is the faculty by which one reads the moment and names what dharma requires, from this person, now.',
        facets: ['Ṛtam · ground', 'Satyam · alignment', 'Sva-dharma', 'Vivechan'],
        explanation: [
          'The Ṛgveda pairs ṛtam and satyam as the two faces of a single order — ṛtaṃ ca satyaṃ ca, cosmic regularity and truth, never apart. Ṛtam is the deep grammar of the universe: the sun\'s circuit, the river\'s course, the wheeling of the year. Its violation is anṛtam — disorder, falsehood, the unravelling of the compact. Satyam is what ṛtam looks like in human speech and action: word brought into alignment with what is real, the refusal to falsify. As the tradition matures, ṛtam bifurcates: satyam inherits its moral-verbal face, dharma its normative-conduct face. The Taittirīya Upaniṣad encodes this relationship in its parting charge to the student: satyam vada, dharmaṃ cara — speak truth, walk in dharma. Two words, one order. Manu\'s ten marks of dharma (dharma-lakṣaṇa) — steadiness, patience, self-restraint, non-theft, purity, sense-control, wisdom, knowledge, satyam, and freedom from anger — place satyam itself inside the definition, weaving ṛtam\'s original pairing back into the daily texture of right conduct.',
          'Dharma as a lived practice is not a fixed rule-list but a relational demand. The Mahābhārata is precise: sūkṣmo dharmasya tattvam — the essence of dharma is subtle. Subtle because it shifts by station, relationship and moment: the same ṛtam that asks a warrior to stand firm asks a teacher to question, a parent to shelter, a student to listen. This contextual specificity is not relativism; it is the recognition that ṛtam runs through every situation differently, and dharma is its local form. The faculty that reads the situation and names what dharma requires is vivechan — discriminative discernment. Its opposite is moha — the confusion that made Arjuna lower his bow not from compassion but from failure to see clearly; Kṛṣṇa\'s eighteen chapters are the restoration of vivechan, not a new rule but a sharpened perception. The Mahābhārata\'s further line is the reward: dharma eva hato hanti, dharmo rakṣati rakṣitaḥ — dharma slain slays; dharma protected protects. The reciprocity is total: the person who sustains the order is sustained by it.',
        ],
        aspects: [
          { name: 'Ṛtam', deva: 'ऋतम्', desc: 'The cosmic order — the deep regularity by which the universe holds together. Older than the gods, who serve it rather than command it. Varuṇa is its guardian (gopā ṛtasya) in the Ṛgveda. Dharma is ṛtam refracted into the human sphere.' },
          { name: 'Satyam', deva: 'सत्यम्', desc: 'Truth — the moral and verbal face of ṛtam. Paired with it in the Ṛgveda as ṛtaṃ ca satyaṃ ca. To speak satyam is to keep word in alignment with what is real, sustaining the cosmic compact rather than breaking it. One of the ten marks of dharma in Manu.' },
          { name: 'Sva-dharma', deva: 'स्वधर्म', desc: 'The dharma specific to one\'s own station and moment. The Gītā\'s insistence — that one\'s own dharma, even imperfectly performed, is better than another\'s done perfectly — is the tradition\'s answer to every temptation to borrow another\'s obligations.' },
          { name: 'Vivechan', deva: 'विवेचन', desc: 'Discriminative discernment — the trained capacity to see a situation clearly, stripped of desire and fear, and read what the order of things requires in response. Neither mere opinion nor mechanical rule-following, vivechan is the inner faculty that makes dharma a living practice rather than a catechism.' },
        ],
      },
      {
        id: 'yoga', title: 'Yoga', deva: 'योग', epithet: 'Internal practice',
        meta: ['Aṣṭāṅga', 'Pātañjala', '8 limbs'],
        summary: 'Yoga as the inner counterpart of dinacaryā — yama and niyama before āsana, āsana before prāṇāyāma, prāṇāyāma before pratyāhāra. A path, not a workout.',
        facets: ['Yama · niyama', 'Āsana · prāṇāyāma', 'Dhyāna · samādhi'],
        explanation: [
          'Yoga, in the sense that the Yoga-sūtras of Patañjali give it, is a complete inner discipline arranged into eight successive limbs (aṣṭāṅga). The famous physical practice — āsana — is the third limb, not the first. Before any āsana can do what it is meant to do, the first two limbs — ethical restraints (yama) and personal observances (niyama) — must be in place.',
          'The sequence is not optional. Patañjali’s claim is that each limb prepares the field for the next, and skipping ahead does not deliver the next stage’s fruit. Āsana stabilises the body so prāṇāyāma can regulate breath; prāṇāyāma settles the breath so pratyāhāra can withdraw the senses; pratyāhāra cleared, the inward stages (dhāraṇā, dhyāna, samādhi) become possible. The Indian word for the discipline is the same as its goal.',
        ],
        aspects: [
          { name: 'Yama', deva: 'यम', desc: 'The five outer restraints — ahiṃsā (non-injury), satya (truth), asteya (non-stealing), brahmacarya (continence), aparigraha (non-grasping). The ethical floor of any further practice.' },
          { name: 'Niyama', deva: 'नियम', desc: 'The five inner observances — śauca (purity), santoṣa (contentment), tapas (discipline), svādhyāya (self-study), īśvara-praṇidhāna (surrender to the supreme). The practitioner’s daily kit.' },
          { name: 'Āsana, prāṇāyāma, pratyāhāra', deva: 'आसन · प्राणायाम · प्रत्याहार', desc: 'The middle three — bodily posture, regulated breath, withdrawal of the senses. The bridge from outer to inner.' },
          { name: 'Dhāraṇā, dhyāna, samādhi', deva: 'धारणा · ध्यान · समाधि', desc: 'The three inner stages — concentration on a single object, sustained meditation, absorption. The destination Patañjali defines yoga by.' },
        ],
      },
      {
        id: 'ayurveda', title: 'Āyurveda', deva: 'आयुर्वेद', epithet: 'Applied medicine',
        meta: ['Tridoṣa · saptadhātu', 'Diet · cleansing', 'Pañcakarma'],
        summary: 'The clinical side of the lifestyle — diagnosis by doṣa-balance, food as the principal medicine, seasonal cleansing (pañcakarma), and the rejuvenative protocols (rasāyana) that close the loop.',
        facets: ['Diet', 'Pañcakarma', 'Rasāyana'],
        explanation: [
          'Āyurveda treats lifestyle and medicine as continuous with one another — dinacaryā and ṛtucaryā are not adjuncts to the medical system, they are its first chapters. A person who follows them rarely needs the clinical intervention that comes next; a person who does not will need increasingly sharp treatment to compensate. The Caraka-saṃhitā opens with the line that food, sleep and continence are the three pillars (trayopastambha) of life.',
          'When the lifestyle is not enough, Āyurveda intervenes in three rising orders of strength: food first, then medicinal herbs, then the pañcakarma cleansing protocols. The final layer — rasāyana — is restorative; it puts back what disease and time have taken out. The classical claim is preventive: the system measures itself by how few people need its sharper interventions.',
        ],
        aspects: [
          { name: 'Tridoṣa', deva: 'त्रिदोष', desc: 'The three biological humours — Vāta (air, ether), Pitta (fire, water), Kapha (water, earth) — whose ratio in a person constitutes that person’s constitution (prakṛti) and whose imbalance is the proximate cause of disease.' },
          { name: 'Saptadhātu', deva: 'सप्तधातु', desc: 'The seven bodily tissues — rasa, rakta, māṃsa, medas, asthi, majjā, śukra (plasma, blood, muscle, fat, bone, marrow, reproductive). Built sequentially from digested food; each takes about five days to form the next.' },
          { name: 'Pañcakarma', deva: 'पञ्चकर्म', desc: 'The five cleansing therapies — vamana (emesis), virecana (purgation), basti (medicated enema), nasya (nasal), rakta-mokṣa (blood-letting). Indexed to seasons and doṣa-imbalances; the deepest preventive layer in Āyurveda.' },
          { name: 'Rasāyana', deva: 'रसायन', desc: 'The rejuvenation branch — herbs, regimens and practices intended to restore tissue, prolong life and improve memory and immunity. The closing chapter of every classical Āyurvedic text.' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Nāstika Darśanas
  'nastika-darshanas': {
    title: 'The Nāstika Darśanas',
    deva: 'नास्तिक दर्शनानि',
    crumb: ['Collection', 'Philosophy', 'Nāstika Darśanas'],
    lede: 'Three schools — Cārvāka, Bauddha and Jaina — that decline the authority of the Veda and were therefore classed nāstika by their orthodox opponents. The word does not mean “atheist”; it means “those who say na — those who do not accept.” Indic philosophy as argued by its sharpest counter-positions.',
    layout: 'tabs',
    items: [
      { id: 'carvaka', title: 'Cārvāka', deva: 'चार्वाक', epithet: 'The school of materialism',
        meta: ['Bṛhaspati (legendary)', 'Lokāyata · “of the world”', 'Pratyakṣa-only'],
        summary: 'A consistent materialism: only the directly perceived is real, the body is the self, consciousness arises from the four elements as wine arises from grain, and the categories of soul, rebirth, karma and merit are inferences made on insufficient evidence. The school’s own texts are lost; we know it almost entirely through the careful refutations of its opponents — and through the late Tattvopaplava-siṃha.',
        opening: { deva: 'यावज्जीवेत् सुखं जीवेत् ऋणं कृत्वा घृतं पिबेत् ।', trans: '“While one lives, let one live happily — even if one must take a loan to drink ghee. For once the body is reduced to ashes, how can it return?”', cite: 'Attributed to Cārvāka · Sarva-darśana-saṅgraha 1' },
        facets: ['Materialism', 'Perception only', 'Refused inference', 'Refused śabda'] },
      { id: 'bauddha', title: 'Bauddha', deva: 'बौद्ध', epithet: 'The Buddhist school',
        meta: ['Gautama Buddha · 5th c. BCE', 'Four Noble Truths · Eightfold Path', 'Theravāda · Mahāyāna · Vajrayāna'],
        summary: 'Born of the Buddha’s teaching at Sarnath. Reality is impermanent (anitya), unsatisfactory (duḥkha), and without a fixed self (anātman). All things arise in dependence (pratītya-samutpāda). Across two and a half millennia the school splits into the Theravāda, the Mahāyāna and the Vajrayāna, and inside the Mahāyāna into the Mādhyamaka of Nāgārjuna and the Yogācāra of Asaṅga and Vasubandhu — schools that argue with each other as sharply as with anyone outside Buddhism.',
        opening: { deva: 'इदं दुःखं आर्यसत्यम् ।', trans: '“This is the noble truth of suffering. This is its arising. This is its cessation. This is the path leading to cessation.”', cite: 'Dhamma-cakka-pavattana-sutta · paraphrase' },
        facets: ['Anātman · no-self', 'Pratītya-samutpāda', 'Madhyamaka', 'Yogācāra'] },
      { id: 'jaina', title: 'Jaina', deva: 'जैन', epithet: 'The Jain school',
        meta: ['Mahāvīra · 24th tīrthaṅkara', 'Digambara · Śvetāmbara', 'Tattvārtha-sūtra · Umāsvāti'],
        summary: 'A radical pluralism. Reality has infinitely many aspects (anekānta), every statement is true only from a standpoint (syādvāda), and any single description is partial. From these flow the central Jain commitments: rigorous ahiṃsā in thought, speech and act; a clear ontology of jīva (soul) and ajīva (matter); and a programme of liberation through right view, right knowledge and right conduct.',
        opening: { deva: 'अहिंसा परमो धर्मः ।', trans: '“Non-injury is the supreme dharma.”', cite: 'Mahābhārata · Anuśāsana-parva 116, echoed in every Jain school' },
        facets: ['Ahiṃsā', 'Anekānta · syādvāda', 'Jīva & ajīva', 'Two schools'] },
    ],
  },

  // ──────────────────────────────────────────────────────── Puranas
  puranas: {
    title: 'The Purāṇas',
    deva: 'पुराणानि',
    crumb: ['Collection', 'Smṛti', 'The Purāṇas'],
    lede: 'Eighteen great Purāṇas — and another eighteen sub-Purāṇas — taken together as a kind of people’s Veda. By the classical period they were sorted into three groups according to the predominant guṇa: Vaiṣṇava (sattva), Brāhma (rajas) and Śaiva (tamas). Every Purāṇa is in principle expected to treat five subjects: creation, dissolution, dynasties, the manvantaras, and royal genealogies.',
    layout: 'tabs',
    items: [
      { id: 'vaishnava', title: 'Vaiṣṇava (sattva)', deva: 'वैष्णव', epithet: 'Six Purāṇas of Viṣṇu',
        meta: ['Viṣṇu · Bhāgavata · Nāradīya', 'Garuḍa · Padma · Varāha', 'Sattva-pradhāna'],
        summary: 'The six Purāṇas in which Viṣṇu is the supreme deity. The Bhāgavata, with its account of Kṛṣṇa, is the single most influential of all eighteen — the source of every later bhakti tradition from the Tamil ālvārs to Caitanya.',
        opening: { deva: 'धर्मः प्रोज्झितकैतवोऽत्र परमो निर्मत्सराणां सताम् ।', trans: '“The supreme dharma — freed of every motive but truth — is set forth here for the good who bear no envy.”', cite: 'Bhāgavata-purāṇa · 1.1.2' },
        facets: ['Bhāgavata-purāṇa', 'Avatāra theology', 'Source of bhakti'] },
      { id: 'brahma', title: 'Brāhma (rajas)', deva: 'ब्राह्म', epithet: 'Six Purāṇas of Brahmā',
        meta: ['Brahma · Brahmāṇḍa · Brahmavaivarta', 'Mārkaṇḍeya · Bhaviṣya · Vāmana', 'Rajas-pradhāna'],
        summary: 'The middle group, centred on Brahmā. The Mārkaṇḍeya-purāṇa contains the Devī-māhātmya — the seven-hundred-verse hymn to the Goddess that is recited at every Navarātri. The Bhaviṣya-purāṇa preserves a striking layer of late material on what the tradition called “future” history.',
        opening: { deva: 'या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता ।', trans: '“She who abides in all beings as power — to her, salutation; to her, salutation.”', cite: 'Devī-māhātmya · 5.14 (Mārkaṇḍeya-purāṇa)' },
        facets: ['Devī-māhātmya', 'Cosmogony', 'Royal genealogies'] },
      { id: 'shaiva', title: 'Śaiva (tamas)', deva: 'शैव', epithet: 'Six Purāṇas of Śiva',
        meta: ['Śiva · Liṅga · Skanda', 'Agni · Matsya · Kūrma', 'Tamas-pradhāna'],
        summary: 'The six Purāṇas in which Śiva is supreme. The Skanda is the longest of all eighteen; the Liṅga organises the metaphysics of Śaiva-Siddhānta; the Agni and the Matsya read like encyclopaedias — covering everything from temple-building to grammar.',
        opening: { deva: 'ॐ नमः शिवाय ।', trans: '“Aum — salutation to Śiva.”', cite: 'Pañcākṣara-mantra · pan-Śaiva' },
        facets: ['Skanda · longest', 'Encyclopaedic', 'Pīṭhas & tīrthas'] },
    ],
  },

  // ──────────────────────────────────────────────────────── Dharma-śāstra
  dharmashastra: {
    title: 'Dharma-śāstra',
    deva: 'धर्मशास्त्र',
    crumb: ['Collection', 'Smṛti', 'Dharma-śāstra'],
    lede: 'The codes — smṛti texts that translate dharma into a working civil law for the householder, the king and the court. The largest of them, the Manusmṛti, ran for centuries as the operating manual of brahmanical society; the others tightened, contested and updated it.',
    layout: 'tabs',
    items: [
      {
        id: 'manu', title: 'Manusmṛti', deva: 'मनुस्मृति', epithet: 'The first of the codes',
        meta: ['12 chapters · 2,694 verses', '~2nd c. BCE – 2nd c. CE', 'Most-cited dharma-text'],
        summary: 'The foundational dharma-text. Twelve chapters cover the origin of the world, the four varṇas, the duties of each, the law of marriage and inheritance, the duties of the king, criminal and civil procedure, and the soul’s journey after death. Read continuously and continuously argued with for two thousand years.',
        opening: { deva: 'विद्वद्भिः सेवितः सद्भिर्नित्यमद्वेषरागिभिः ।\nहृदयेनाभ्यनुज्ञातो यो धर्मस्तं निबोधत ॥', trans: '“Hear that dharma which is followed by the wise and the good, ever free of envy and attachment, and which the heart itself approves.”', cite: 'Manusmṛti · 2.1' },
        facets: ['12 adhyāyas', 'Varṇa-dharma', 'Rāja-dharma', 'Most-commented'],
        explanation: [
          'The Manusmṛti is the oldest and largest of the dharma-śāstras, and the single most-cited Indic text in legal and ethical argument for the better part of two thousand years. Its twelve adhyāyas open with the origin of the world and close with the soul’s journey after death — in between, they lay down a working code for every social role: the student, the householder, the king, the judge, the merchant, the renunciate.',
          'It is also the text most fiercely contested. The same chapters that codify the duties of the four varṇas have served, in the modern period, both as the document defenders of caste-society have appealed to and as the document Ambedkar publicly burned in 1927. Read seriously, the Manusmṛti is the indispensable document for understanding what brahmanical society took itself to be — and also the indispensable document for understanding everything that Indic reform movements have argued against.',
        ],
        aspects: [
          { name: 'Varṇa-dharma', deva: 'वर्ण-धर्म', desc: 'The duties proper to each of the four varṇas — brāhmaṇa, kṣatriya, vaiśya, śūdra. The most-quoted (and most-disputed) doctrine of the text.' },
          { name: 'Āśrama-dharma', deva: 'आश्रम-धर्म', desc: 'The duties proper to each of the four life-stages — student, householder, forest-dweller, renunciate. Treated as the personal counterpart to varṇa-dharma.' },
          { name: 'Rāja-dharma', deva: 'राज-धर्म', desc: 'The duties of the king — protection, taxation, the four expedients of statecraft (sāma-dāna-bheda-daṇḍa), the running of the court. Chapters 7 and 8 are themselves a miniature artha-śāstra.' },
          { name: 'Prāyaścitta', deva: 'प्रायश्चित्त', desc: 'The system of expiation. When a person has broken a rule, the text prescribes the practice (fast, gift, recitation) that restores them to the community. Penalty and rehabilitation in one.' },
        ],
      },
      {
        id: 'yajnavalkya', title: 'Yājñavalkya-smṛti', deva: 'याज्ञवल्क्यस्मृति', epithet: 'The lawyer’s code',
        meta: ['3 kāṇḍas · ~1,000 verses', '~3rd – 5th c. CE', 'Mitākṣarā commentary'],
        summary: 'A tighter, more lawyerly successor to Manu. Three sections — ācāra (custom), vyavahāra (procedure), prāyaścitta (expiation). The mediaeval Mitākṣarā commentary on this text became the operative law of inheritance across most of India until 1956.',
        opening: { deva: 'यज्ञवल्क्यं मुनिश्रेष्ठं याज्ञिकाः पर्युपासते ।', trans: '“The yajña-priests sit at the feet of Yājñavalkya, foremost of sages, and ask him: pray, recite the laws of the four varṇas.”', cite: 'Yājñavalkya-smṛti · 1.1' },
        facets: ['Three kāṇḍas', 'Mitākṣarā', 'Inheritance law'],
        explanation: [
          'The Yājñavalkya-smṛti is the most elegantly organised of the dharma-śāstras. Where Manu’s twelve chapters mix everything together, Yājñavalkya partitions the whole field cleanly into three: ācāra (the rules of conduct), vyavahāra (legal procedure), and prāyaścitta (expiation). The format made the text easier to consult, and by the seventh century it had largely displaced Manu in the courtrooms of upper India.',
          'Its real influence is mediated by the Mitākṣarā — Vijñāneśvara’s twelfth-century commentary, which converted Yājñavalkya’s rules on partition and inheritance into the operative civil law of large parts of the subcontinent. The Mitākṣarā tradition governed inheritance in most of India until the Hindu Succession Act of 1956 finally replaced it.',
        ],
        aspects: [
          { name: 'Ācāra-kāṇḍa', deva: 'आचार-काण्ड', desc: 'The first section — daily and life-cycle rituals, varṇa duties, the householder’s code, the rules of food, marriage and the saṃskāras.' },
          { name: 'Vyavahāra-kāṇḍa', deva: 'व्यवहार-काण्ड', desc: 'The second section — civil and criminal law. Procedure for plaints, witnesses, evidence, judgement, debt, sale, deposit, partnership, inheritance. The single most influential piece of the text.' },
          { name: 'Prāyaścitta-kāṇḍa', deva: 'प्रायश्चित्त-काण्ड', desc: 'The third section — expiation for transgressions. Less harsh than the corresponding chapters in Manu; subdivides the rules by deliberate vs accidental fault.' },
          { name: 'Mitākṣarā commentary', deva: 'मिताक्षरा', desc: 'Vijñāneśvara’s commentary (c. 1100 CE) on the inheritance rules of the vyavahāra section became the operative Hindu inheritance law for nine centuries.' },
        ],
      },
      {
        id: 'narada', title: 'Nārada-smṛti', deva: 'नारदस्मृति', epithet: 'A code for litigation',
        meta: ['~5th c. CE', '18 titles of law', 'Procedural focus'],
        summary: 'The most purely juridical of the smṛtis — almost entirely procedural. Eighteen titles of law (vyavahāra-padas) for the courtroom: debt, deposit, partnership, sale, theft, defamation, inheritance. The first Indian text to treat written contracts and witnesses as a system.',
        facets: ['Vyavahāra-pada', 'Written contract', 'Witness law'],
        explanation: [
          'The Nārada-smṛti is the most lawyerly text in the dharma-canon. Where Manu and Yājñavalkya cover the whole life of the householder, Nārada is almost entirely about what happens in court. It opens directly with the rules of the legal forum and works systematically through eighteen titles of law (vyavahāra-padas) — debt-recovery, deposit, partnership, sale, theft, assault, defamation, inheritance — each with its own procedure, evidence rules and sanctions.',
          'It is also the first Indic text to treat written instruments as a separate category of evidence — earlier texts treated speech (witness testimony) as primary and writing as a derivative aid. Nārada inverts that: a properly drawn written contract, attested by witnesses, takes precedence. The text is short, sharp and practical, and was probably composed for active use rather than for theological commentary.',
        ],
        aspects: [
          { name: 'Eighteen vyavahāra-padas', deva: 'अष्टादश व्यवहार-पद', desc: 'The classical list of eighteen titles of law — from non-payment of debt to gambling and assault. Each title is given its own set of procedural and substantive rules.' },
          { name: 'Likhita (written evidence)', deva: 'लिखित', desc: 'Nārada classifies evidence as divine (oath, ordeal) and human (witnesses, documents, possession). His ranking of properly attested written documents above oral witness is unprecedented in earlier dharma-śāstra.' },
          { name: 'Sākṣin (witness law)', deva: 'साक्षी', desc: 'Detailed rules on who may testify, who may not, how testimony is taken, and what disqualifies a witness. The most-cited single source on Indic witness law.' },
          { name: 'Daiva-pramāṇa (ordeal)', deva: 'दैव-प्रमाण', desc: 'Nārada also catalogues the divine modes of evidence — ordeal by fire, water, balance, poison. He restricts their use to cases where ordinary human evidence has failed.' },
        ],
      },
      {
        id: 'brihaspati', title: 'Bṛhaspati-smṛti', deva: 'बृहस्पतिस्मृति', epithet: 'On evidence and procedure',
        meta: ['~6th – 7th c. CE', 'Survives only in citation', 'Successor of Nārada'],
        summary: 'A later, finer-grained refinement of legal procedure — only fragments survive directly, but it is quoted by every later commentator and reconstructed from the digests. The first dharma-text to make a clear hierarchy between written, witnessed and inferred evidence.',
        facets: ['Reconstructed text', 'Evidence-hierarchy', 'Procedural code'],
        explanation: [
          'No complete manuscript of the Bṛhaspati-smṛti survives — what we have is reconstructed from the citations of mediaeval commentators, who quote it constantly. From these fragments scholars have rebuilt a procedural code of perhaps two thousand verses, sharper and more specialised than either Yājñavalkya or Nārada.',
          'Bṛhaspati’s lasting contribution is a hierarchy of evidence: written documents first, then witnesses, then possession, then circumstantial inference, with the divine ordeals demoted to a last resort. He also distinguishes for the first time between civil and criminal procedure, and gives detailed rules for appellate review — a court can be wrong, and its judgement can be re-examined. The text is the closest classical India came to a procedure code in the modern sense.',
        ],
        aspects: [
          { name: 'Evidence-hierarchy', deva: 'प्रमाण-क्रम', desc: 'Bṛhaspati’s ordering — likhita (written), sākṣin (witnesses), bhukti (possession), yukti (inference). The first explicit ranking in the dharma-śāstra tradition.' },
          { name: 'Civil vs criminal', deva: 'व्यवहार-दण्ड', desc: 'The text distinguishes the procedures of compensation (vyavahāra proper) from the procedures of punishment (daṇḍa) — separating what later jurists would call civil and criminal jurisdiction.' },
          { name: 'Appellate review', deva: 'अनुयोग', desc: 'A wrongful judgement can be challenged before a higher tribunal. Bṛhaspati names the steps — the king’s court is the final forum, with detailed rules on when a lower decision can be overturned.' },
          { name: 'Reconstructed text', deva: 'पुनःसंकलित', desc: 'The Bṛhaspati-smṛti exists only as a modern scholarly reconstruction from quoted fragments — assembled most influentially by Julius Jolly (1889) and K. V. Rangaswami Aiyangar (1941).' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Artha-śāstra
  arthashastra: {
    title: 'Artha-śāstra',
    deva: 'अर्थशास्त्र',
    crumb: ['Collection', 'Applied', 'Artha-śāstra'],
    lede: 'The science of artha — material welfare, polity, statecraft, war, espionage and the running of an economy. Kauṭilya’s Arthaśāstra is the central text; the later nīti-tradition trimmed and updated it for the medieval court.',
    layout: 'tabs',
    items: [
      {
        id: 'kautilya', title: 'Kauṭilīya Arthaśāstra', deva: 'कौटिलीयार्थशास्त्र', epithet: 'Kauṭilya’s manual of state',
        meta: ['15 adhikaraṇas · 150 chapters', '~4th c. BCE (Mauryan)', 'Rediscovered 1905'],
        summary: 'A manual for the running of a state by a chief minister — almost certainly Kauṭilya (also Cāṇakya), the strategist of the Mauryan empire. Fifteen books cover the training of the prince, the appointment of officers, civil and criminal law, taxation, foreign relations, war, and the management of intelligence networks. Rediscovered in a Mysore library in 1905 after centuries of being known only through citation.',
        opening: { deva: 'पृथिव्या लाभे पालने च यावन्त्यर्थशास्त्राणि पूर्वाचार्यैः प्रस्थापितानि प्रायशस्तानि संहृत्यैकमिदमर्थशास्त्रं कृतम् ।', trans: '“This single Arthaśāstra has been composed by drawing together the science as the earlier teachers set it down — for the acquisition and the keeping of the earth.”', cite: 'Arthaśāstra · 1.1' },
        facets: ['15 adhikaraṇas', 'Maṇḍala theory', 'Intelligence-state'],
        explanation: [
          'The Kauṭilīya Arthaśāstra is the central Indic text on the running of a state. Composed almost certainly by Kauṭilya — also called Cāṇakya, chief minister to Candragupta Maurya in the late fourth century BCE — it sets out, in fifteen books and roughly six thousand sūtras, every operation a working government needs to undertake: how a prince is trained, how officers are appointed and supervised, how taxes are collected, how borders are defended, how an intelligence apparatus is built and how war is decided on, fought and concluded.',
          'The text was effectively lost for many centuries — known only through quotation in later works — until a complete manuscript was identified in 1905 by R. Shamasastry in a Mysore library. Its publication overturned what European scholarship had assumed about the sophistication of ancient Indic political thought. Seventeen centuries before Machiavelli wrote The Prince, Kauṭilya had written something both wider in scope and harder in execution.',
        ],
        aspects: [
          { name: 'Saptāṅga theory', deva: 'सप्ताङ्ग', desc: 'The seven limbs of the state — svāmin (the ruler), amātya (the ministry), janapada (territory and people), durga (the fortified capital), kośa (the treasury), daṇḍa (the army), mitra (allies). The text’s organising frame for political analysis.' },
          { name: 'Maṇḍala of states', deva: 'राज-मण्डल', desc: 'The famous geometric model — your immediate neighbour is naturally a rival; your neighbour’s neighbour is naturally your friend. Four concentric rings of state-actors, with the six policies (saṃdhi, vigraha, yāna, āsana, dvaidhī-bhāva, saṃśraya) plotted across them.' },
          { name: 'Daṇḍa-nīti', deva: 'दण्ड-नीति', desc: 'The science of coercion — how punishment is calibrated, when it is excessive, when it is too lenient. Kauṭilya’s claim is that the danda alone is the foundation on which all four puruṣārthas finally rest.' },
          { name: 'Intelligence apparatus', deva: 'गुप्त-तन्त्र', desc: 'The thirteen-chapter treatment of espionage, surveillance, deniable operations and counter-intelligence — applied both inward (at the king’s own officers) and outward (at neighbouring states). Unique in the world literature of its period.' },
        ],
      },
      {
        id: 'kamandaka', title: 'Kāmandakīya Nītisāra', deva: 'कामन्दकीय नीतिसारः', epithet: 'A medieval abridgement',
        meta: ['~7th – 8th c. CE', '20 sargas · ~1,500 verses', 'Versified Kauṭilya'],
        summary: 'Kāmandaka condenses the Arthaśāstra into elegant verse for a courtly audience — the seven limbs of the state (svāmin, amātya, janapada, durga, kośa, daṇḍa, mitra), the six modes of policy (saṃdhi, vigraha, yāna, āsana, dvaidhī-bhāva, saṃśraya), and the maṇḍala of friend and enemy.',
        facets: ['Saptāṅga', 'Ṣāḍguṇya', 'Maṇḍala'],
        explanation: [
          'By the seventh century the Arthaśāstra had grown unwieldy for routine courtly consultation: long, prose-dense, full of administrative detail that mediaeval courts no longer needed. Kāmandaka’s Nītisāra is the elegant abridgement. He compresses the same theoretical core — the seven limbs, the six policies, the maṇḍala — into twenty sargas of polished Sanskrit verse that could be quoted, memorised and applied without consulting Kauṭilya directly.',
          'It is the version that travelled. The Nītisāra is the source most widely cited in mediaeval Indic political literature, from the Hindu courts of the Deccan to Bali and Java in southeast Asia. The text is also more openly normative than Kauṭilya — it insists that political conduct stay within dharma even where Kauṭilya is content to discuss what merely works.',
        ],
        aspects: [
          { name: 'Ṣāḍguṇya (six policies)', deva: 'षाड्गुण्य', desc: 'Saṃdhi (treaty), vigraha (war), yāna (marching), āsana (waiting), dvaidhī-bhāva (dual policy), saṃśraya (seeking shelter). The classical Indic vocabulary for foreign policy.' },
          { name: 'Versified for memorisation', deva: 'पद्य-बद्ध', desc: 'Where Kauṭilya is prose, Kāmandaka is verse. The format was designed for courtiers and princes to commit to memory — the Nītisāra became a standard ornament of the mediaeval Indic education.' },
          { name: 'Saptāṅga restated', deva: 'सप्ताङ्ग', desc: 'The seven limbs of the state are taken over from Kauṭilya, but with new emphasis on the moral qualifications of the ruler and the ministry. Statecraft is read more explicitly as a branch of dharma.' },
          { name: 'Pan-Indic transmission', deva: 'पुरातन-प्रसार', desc: 'Manuscripts of the Nītisāra survive across India and into Java and Bali. The text outlived the working memory of the Arthaśāstra and was the principal Indic political handbook from the eighth century onward.' },
        ],
      },
      {
        id: 'shukra', title: 'Śukra-nīti', deva: 'शुक्रनीति', epithet: 'The mythical kingbook',
        meta: ['Attributed to Śukrācārya', '4 chapters', 'Practical breadth'],
        summary: 'A late compendium that opens the catalogue beyond Kauṭilya — covers everything from town-planning to the assay of metals, from the duties of physicians to the management of elephants and horses. Its precise date is contested; its practical breadth is not.',
        facets: ['Late compendium', 'Civic admin', 'Town & guild'],
        explanation: [
          'The Śukra-nīti is attributed to Śukrācārya, the mythical preceptor of the asuras, but its real composition is much later — the surviving recension is probably mediaeval, with much earlier material folded in. The text reads as a working encyclopedia of administrative practice: how a town is laid out, how guilds are regulated, how physicians and metallurgists are licensed, how horses and elephants are bought, examined and maintained.',
          'Where Kauṭilya is precise about statecraft and Kāmandaka about foreign policy, the Śukra-nīti is broad. Its concerns include the everyday governance that the older texts often skip — the assay of coins, the inspection of wells, the regulation of physicians’ fees, the qualifications of artisans. Its date and authorship remain disputed; its practical reach as a courtly handbook does not.',
        ],
        aspects: [
          { name: 'Civic administration', deva: 'नगर-शासन', desc: 'Town-planning, the layout of roads and markets, the regulation of guilds, the operation of municipal officers. The fullest treatment of urban government in the Indic political corpus.' },
          { name: 'Technical inspection', deva: 'परीक्षा', desc: 'Detailed protocols for examining the qualifications of physicians, the purity of metals, the soundness of horses and elephants, the workmanship of artisans. The text treats licensure as a state function.' },
          { name: 'Disputed dating', deva: 'विवादित-काल', desc: 'The text’s composition has been placed anywhere from the seventh to the nineteenth century. Most modern scholars accept a mediaeval core with significant later interpolation.' },
          { name: 'Ethics of office', deva: 'राज-धर्म', desc: 'The opening chapter is a sustained meditation on the moral qualifications of rulers and officials — bribery, favouritism, abuse of office and their remedies. Closer in tone to dharma-śāstra than Kauṭilya.' },
        ],
      },
      {
        id: 'manu-raja', title: 'Manusmṛti — Rāja-dharma', deva: 'राज-धर्म', epithet: 'Polity within the dharma-code',
        meta: ['Manu · chs 7 & 8', '~600 verses', 'Polity as dharma'],
        summary: 'Manu’s seventh and eighth chapters are themselves a complete miniature arthaśāstra. The king as protector, the fourfold expedient (sāma · dāna · bheda · daṇḍa), the law of taxation, the duty of fining the strong before the weak — read as the bridge between dharma-śāstra and polity proper.',
        facets: ['Sāma–dāna–bheda–daṇḍa', 'Daṇḍa-nīti', 'Mahā-pātakas'],
        explanation: [
          'The seventh and eighth chapters of the Manusmṛti together form a free-standing manual of polity inside the larger dharma-code. Chapter seven sets out the king’s origin, his protection-function, the seven limbs of the state (taken into Kauṭilya as well), the duties of ministers, the principles of war and the maṇḍala. Chapter eight is the longest in Manu and is essentially a complete civil and criminal code — eighteen titles of law, evidence rules, punishment-schedules, and the standard for judicial decision.',
          'These chapters are the bridge between Indic ethical theory and Indic political practice. They argue that polity is not separate from dharma but a branch of it — the king governs because someone must, and his daṇḍa exists to protect the weak rather than to discipline them. The same chapters were taken into the operative law of brahmanical India for two thousand years.',
        ],
        aspects: [
          { name: 'Four expedients', deva: 'सामदानभेददण्ड', desc: 'Sāma (conciliation), dāna (gift), bheda (sowing discord), daṇḍa (coercion). The classical sequence in which a king is to address conflict — escalate only when the prior expedient has failed.' },
          { name: 'Daṇḍa as dharma', deva: 'दण्ड', desc: 'Manu’s line that daṇḍa itself is dharma — the king’s coercive power exists for the preservation of order, not the assertion of will. The same insight reappears in later rāja-dharma literature.' },
          { name: 'Taxation principle', deva: 'कर-धर्म', desc: 'The famous image of taxation as the cow that gives milk only when she is fed. The king takes the surplus, never the substance; the schedule of taxes is calibrated to leave the producer better off.' },
          { name: 'Eighteen titles of law', deva: 'अष्टादश-व्यवहार', desc: 'The chapter-eight enumeration that later jurists (Nārada, Bṛhaspati) inherit — the standard classical taxonomy of civil and criminal cases, from debt to defamation to inheritance.' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Kāvya & Nāṭya
  kavya: {
    title: 'Kāvya & Nāṭya',
    deva: 'काव्य · नाट्य',
    crumb: ['Collection', 'Literature', 'Kāvya & Nāṭya'],
    lede: 'Classical Sanskrit literature — the kāvya of the courtly poets and the nāṭya of the dramatic stage, the long mahākāvyas, the wandering messenger-poems, and the prose tale of the fox and the lion. Where Indic literary art reaches its self-aware peak.',
    layout: 'tabs',
    items: [
      {
        id: 'mahakavya', title: 'Mahākāvya', deva: 'महाकाव्य', epithet: 'The great court-poems',
        meta: ['Kālidāsa · Bhāravi · Māgha', 'Śrīharṣa · Aśvaghoṣa', 'Five canonical mahākāvyas'],
        summary: 'The long courtly epic in elaborately ornamented verse. The five canonical mahākāvyas — Kālidāsa’s Raghuvaṃśa and Kumārasambhava, Bhāravi’s Kirātārjunīya, Māgha’s Śiśupālavadha, Śrīharṣa’s Naiṣadhīyacarita — set the bar that every later Sanskrit poet aimed for.',
        opening: { deva: 'वागर्थाविव सम्पृक्तौ वागर्थप्रतिपत्तये ।\nजगतः पितरौ वन्दे पार्वतीपरमेश्वरौ ॥', trans: '“Joined as speech and meaning are joined — for the gaining of speech and meaning — I bow to the parents of the world, Pārvatī and Parameśvara.”', cite: 'Kālidāsa · Raghuvaṃśa 1.1' },
        facets: ['Kālidāsa', 'Five canonical', 'Ornamented verse'],
        explanation: [
          'The mahākāvya is the long courtly epic in elaborately ornamented verse — the form Sanskrit literary theory takes as the peak of the kāvya art. The classical canon recognises five: Kālidāsa’s Raghuvaṃśa and Kumārasambhava, Bhāravi’s Kirātārjunīya, Māgha’s Śiśupālavadha, and Śrīharṣa’s Naiṣadhīyacarita. Each runs to ten or more cantos, takes a single heroic subject (often drawn from the epics), and saturates every line with figures of sense and sound.',
          'These poems are not casual reading even for native speakers — the Naiṣadhīyacarita is famously dense, and Māgha was said to contain every figure of speech the Alaṅkāra-śāstra recognises. They were written for a courtly audience trained to hear what they were doing, and they set the standard against which every later Sanskrit poet measured their own work. The form continued to be composed actively into the eighteenth century.',
        ],
        aspects: [
          { name: 'Kālidāsa', deva: 'कालिदास', desc: 'The single most influential figure in the tradition. The Raghuvaṃśa traces the solar dynasty in nineteen cantos; the Kumārasambhava narrates the birth of Kumāra. The Sanskrit-tradition adage — “upamā Kālidāsasya” — names him the master of the simile.' },
          { name: 'Bhāravi · Māgha', deva: 'भारवि · माघ', desc: 'The “great two” after Kālidāsa. Bhāravi’s Kirātārjunīya retells the encounter of Arjuna with Śiva-as-hunter; Māgha’s Śiśupālavadha is famous for its formal virtuosity — palindromes, verses readable forward and backward, every alaṃkāra demonstrated.' },
          { name: 'Naiṣadhīyacarita', deva: 'नैषधीयचरित', desc: 'Śrīharṣa’s twelfth-century poem on Nala and Damayantī. The most demanding mahākāvya — saturated with technical philosophy and abstruse vocabulary; later poets cite its second canto as a benchmark of difficulty.' },
          { name: 'Aśvaghoṣa', deva: 'अश्वघोष', desc: 'The Buddhist mahākāvya tradition — Aśvaghoṣa’s Buddha-carita (first century CE) is the earliest surviving complete mahākāvya, narrating the life of the Buddha in twenty-eight cantos.' },
        ],
      },
      {
        id: 'natya', title: 'Nāṭya', deva: 'नाट्य', epithet: 'Sanskrit drama',
        meta: ['Bhāsa · Śūdraka · Kālidāsa', 'Daśarūpaka — 10 forms', 'Bharata · Nāṭya-śāstra'],
        summary: 'The classical theatre — Bhāsa’s Svapnavāsavadattam, Śūdraka’s Mṛcchakaṭika, Kālidāsa’s Śakuntalā, Bhavabhūti’s Uttara-rāma-carita, Viśākhadatta’s Mudrārākṣasa. Governed by Bharata’s Nāṭya-śāstra — the world’s oldest surviving treatise on dramaturgy.',
        opening: { deva: 'या सृष्टिः स्रष्टुराद्या वहति विधिहुतं या हविर्या च होत्री ।', trans: 'The opening invocation of Kālidāsa’s Abhijñāna-Śākuntalam — calling the eight forms of Śiva as benediction before the play begins.', cite: 'Kālidāsa · Abhijñāna-Śākuntalam · Nāndī 1' },
        facets: ['Nāṭya-śāstra', 'Daśa-rūpaka', 'Rasa-theory'],
        explanation: [
          'Sanskrit drama is the second great branch of kāvya. Its theoretical foundation is the Nāṭya-śāstra of Bharata — possibly the oldest complete treatise on dramaturgy anywhere in the world, dated to between the second century BCE and the second century CE. Bharata classifies plays into ten forms (the daśarūpaka), legislates the rules of stage, costume and gesture, and works out the famous rasa theory of aesthetic emotion.',
          'The surviving plays are some of the finest in any classical literature. Kālidāsa’s Abhijñāna-Śākuntalam — Sir William Jones’s translation of which startled Goethe in 1789 — is the most-celebrated. Beside it stand Bhāsa’s short, vivid dramas (probably the earliest surviving), Śūdraka’s Mṛcchakaṭika (urban, comic, sceptical of class), Bhavabhūti’s tragic Uttara-rāma-carita, and Viśākhadatta’s Mudrārākṣasa, the political thriller of Cāṇakya and the Mauryan succession.',
        ],
        aspects: [
          { name: 'Daśa-rūpaka', deva: 'दशरूपक', desc: 'Bharata’s ten forms of drama, ranging from the full ten-act nāṭaka to the single-act bhāṇa monologue. The form chosen determines the rasa, the cast and the length.' },
          { name: 'Rasa-theory', deva: 'रस-सिद्धान्त', desc: 'The doctrine that a play succeeds by evoking one of the eight (or nine) rasas — emotional flavours such as love (śṛṅgāra), heroism (vīra), pity (karuṇa), wonder (adbhuta). The single most influential idea in Indic aesthetics.' },
          { name: 'Sanskrit + Prakrit', deva: 'संस्कृत + प्राकृत', desc: 'Classical drama uses Sanskrit for upper-class characters, Prakrit (and sub-Prakrits) for women, servants and lower-caste roles. The convention is rigid and gives the plays an unusual sociolinguistic texture.' },
          { name: 'Bhavabhūti · Bhāsa', deva: 'भवभूति · भास', desc: 'Bhavabhūti’s tragic intensity (Uttara-rāma-carita, Mālatīmādhava) and Bhāsa’s short dramatic compression — both are read as Kālidāsa’s most serious rivals in the dramatic line.' },
        ],
      },
      {
        id: 'khanda', title: 'Khaṇḍa-kāvya', deva: 'खण्डकाव्य', epithet: 'The shorter lyric',
        meta: ['Meghadūta', 'Ṛtusaṃhāra', 'Caurapañcāśikā'],
        summary: 'The shorter lyric — a single mood, a single voyage. Kālidāsa’s Meghadūta sends a yakṣa’s message on a cloud across India; his Ṛtusaṃhāra is a six-season cycle; Bilhaṇa’s Caurapañcāśikā is the fifty stanzas a condemned poet writes about his lover the night before his execution.',
        opening: { deva: 'कश्चित्कान्ताविरहगुरुणा स्वाधिकारात्प्रमत्तः शापेनास्तंगमितमहिमा वर्षभोग्येण भर्तुः ।', trans: '“A certain yakṣa, neglectful of his charge — heavy with his beloved’s absence, his glory dimmed by his master’s curse for the term of a year…”', cite: 'Kālidāsa · Meghadūta · Pūrva-megha 1' },
        facets: ['Messenger-poem', 'Season-cycle', 'Single mood'],
        explanation: [
          'The khaṇḍa-kāvya is the “fragment poem” — the shorter, lyric counterpart of the mahākāvya. It does not narrate a multi-canto epic; it holds a single mood, a single voyage, a single image, and works it out across between fifty and a few hundred stanzas. The form is where Sanskrit poetry comes closest to what later European literature calls lyric.',
          'The masterpieces are short. Kālidāsa’s Meghadūta sends a banished yakṣa’s message to his wife on the back of a passing cloud, and uses the route as a pretext for a poetic map of north India. His Ṛtusaṃhāra cycles through the six Indian seasons. Bilhaṇa’s Caurapañcāśikā gives us fifty stanzas a condemned royal poet reportedly composed about his love affair on the night before his execution. The form is hospitable both to elegant melancholy and to dense erotic compression.',
        ],
        aspects: [
          { name: 'Sandeśa-kāvya', deva: 'सन्देश-काव्य', desc: 'The messenger-poem subgenre. After Kālidāsa’s Meghadūta launched it, the form was endlessly imitated — messenger-clouds, hamsas, parrots and peacocks carry love-notes across India in dozens of later khaṇḍa-kāvyas.' },
          { name: 'Ṛtu-kāvya', deva: 'ऋतु-काव्य', desc: 'The seasonal cycle — six (sometimes twelve) stanza-groups, one per Indian season. Kālidāsa’s Ṛtusaṃhāra is the model; the form lets the poet braid landscape, mood and erotic suggestion.' },
          { name: 'Aṣṭapadī · Stotra', deva: 'अष्टपदी · स्तोत्र', desc: 'Hymn-form khaṇḍa-kāvya — Jayadeva’s Gītagovinda is the most famous example, twenty-four eight-line songs on Rādhā and Kṛṣṇa that re-shaped both Sanskrit poetry and Indian classical music.' },
          { name: 'Erotic compression', deva: 'शृङ्गार', desc: 'The śṛṅgāra-rasa concentrated into very short stanza-groups — Amaru’s Amaruśataka, Bilhaṇa’s Caurapañcāśikā — where each stanza is an entire dramatic moment.' },
        ],
      },
      {
        id: 'katha', title: 'Kathā & Ākhyāyikā', deva: 'कथा · आख्यायिका', epithet: 'The prose tale',
        meta: ['Pañcatantra', 'Hitopadeśa', 'Daśakumāracarita · Kādambarī'],
        summary: 'The prose tale — Viṣṇuśarman’s Pañcatantra (the most-translated Indic book in the world), Nārāyaṇa’s Hitopadeśa, Daṇḍin’s Daśakumāracarita and Bāṇa’s Kādambarī. Stories told to teach polity, or for sheer narrative pleasure.',
        opening: { deva: 'अथेदं प्रथमं तन्त्रं मित्रभेदो नाम ।', trans: '“And now this first book, called Mitra-bheda — the splitting of friends.”', cite: 'Pañcatantra · Book I' },
        facets: ['Pañcatantra', 'Nesting-frame', 'Animal fable'],
        explanation: [
          'The Sanskrit prose tradition is the form most easily transported across cultures. Where the mahākāvya stays in Sanskrit and is read by initiates, the prose tales — kathā and ākhyāyikā — have travelled the world. Viṣṇuśarman’s Pañcatantra is the single most-translated Indic literary work in history: from Sanskrit through Middle Persian (Burzōē, sixth century) into Arabic (Ibn al-Muqaffaʿ’s Kalīla wa Dimna), Syriac, Greek, Latin, every European vernacular and on into modern English.',
          'The tradition also has a high-literary wing. Bāṇa’s Kādambarī and Daṇḍin’s Daśakumāracarita are some of the most elaborate prose works in any ancient literature — long, framed narratives in periods of single sentences that stretch a page. The form combines the moral-instruction function (kathā as polity-by-fable) with the pure narrative pleasure of the romance.',
        ],
        aspects: [
          { name: 'Pañcatantra', deva: 'पञ्चतन्त्र', desc: 'Viṣṇuśarman’s five-book frame-tale, written to teach three foolish princes the running of a kingdom. The single most-translated Indic text in history — known across the Islamic world as Kalīla wa Dimna.' },
          { name: 'Hitopadeśa', deva: 'हितोपदेश', desc: 'Nārāyaṇa’s tenth- or eleventh-century rewrite of the Pañcatantra material — somewhat shorter, more polished, the standard text used to teach Sanskrit prose in Indian schools for centuries.' },
          { name: 'Kādambarī', deva: 'कादम्बरी', desc: 'Bāṇa’s seventh-century prose romance — left unfinished at the author’s death, completed by his son. One of the longest and most rhetorically ornate prose works in any pre-modern literature.' },
          { name: 'Daśakumāracarita', deva: 'दशकुमारचरित', desc: 'Daṇḍin’s seventh-century “tales of the ten princes” — picaresque, satirical, full of sharp observation of urban life and the criminal underworld. The single most readable classical Sanskrit prose work.' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Indic Sciences & Mathematics
  sciences: {
    title: 'Indic Sciences & Mathematics',
    deva: 'गणितम् · ज्योतिषम्',
    crumb: ['Collection', 'Applied', 'Sciences & Mathematics'],
    lede: 'A long arc — from the geometric altars of the Śulba-sūtras, through the decimal system with zero, the trigonometry of Āryabhaṭa, the algebra of Brahmagupta and Bhāskara, to the infinite-series calculus of the Kerala school. Older, longer, and more continuous than the credit it usually receives.',
    layout: 'grid',
    items: [
      {
        id: 'shulba', title: 'Śulba-sūtras', deva: 'शुल्बसूत्राणि', epithet: 'Geometry of the altar',
        meta: ['~800 – 200 BCE', 'Baudhāyana · Āpastamba', 'Kalpa-sūtra appendix'],
        summary: 'The earliest surviving Indic mathematics — manuals for the precise geometric construction of fire-altars. Baudhāyana states the “Pythagorean” theorem two centuries before Pythagoras, and includes the first known explicit value of √2 to five decimal places.',
        facets: ['Earliest Indic math', 'Altar-geometry', '√2 to 5 places'],
        explanation: [
          'The Śulba-sūtras are the earliest surviving Indic mathematics, attached as appendices to the Kalpa-sūtra literature of the Vedic ritual schools. Their stated purpose is practical: every Vedic fire-altar (śyenacit, gārhapatya, āhavanīya) must be built to precise geometric specifications, and the altar — once laid — must equal a specified area, often itself transformed from a square into a circle or vice versa.',
          'The text accomplishes this with a working mathematical apparatus that is older than the corresponding Greek material. Baudhāyana (the oldest surviving Śulba author, c. eighth century BCE) states clearly what later Europe would call the Pythagorean theorem, gives a value of √2 accurate to five decimal places, and works out the precise rules for transforming a circle into a square of equal area. He attributes none of this to himself — it is presented as already-known geometric craft, the working knowledge of the Vedic altar-builders.',
        ],
        aspects: [
          { name: 'Baudhāyana sūtra', deva: 'बौधायन सूत्र', desc: 'The oldest of the four surviving Śulba-sūtras. Contains the earliest known statement of the “Pythagorean” theorem and the earliest explicit √2 ≈ 577/408 (accurate to five decimal places).' },
          { name: 'Āpastamba · Kātyāyana', deva: 'आपस्तम्ब · कात्यायन', desc: 'The two later Śulba authors. Āpastamba’s sūtra extends Baudhāyana’s with finer constructions; Kātyāyana adds detailed rules for the agnicayana and area-preserving transformations.' },
          { name: 'Altar-geometry', deva: 'वेदी-निर्माण', desc: 'The practical task: lay out a śyenacit (falcon-shaped altar) of exactly 7½ square puruṣas, or transform a square gārhapatya altar into a circle of equal area. The geometry is presented as recipe.' },
          { name: 'Square-circling', deva: 'वर्ग-वृत्त-समीकरण', desc: 'The classical problem of squaring the circle (and circling the square) appears in the Śulba-sūtras as an explicit ritual requirement, with working approximations accurate enough for altar-construction.' },
        ],
      },
      {
        id: 'aryabhata', title: 'Āryabhaṭa', deva: 'आर्यभट', epithet: 'The first dated astronomer',
        meta: ['476 – c. 550 CE', 'Āryabhaṭīya · 121 verses', 'Kusumapura'],
        summary: 'A single short text — 121 verses — sets out a complete astronomy and a complete mathematics. The earth is a sphere that rotates; the sine table is given (Āryabhaṭa coins jyā); π is approximated to 3.1416; the algorithm for solving the “pulveriser” (kuṭṭaka) equation is laid down.',
        facets: ['Rotating earth', 'Sine table', 'π ≈ 3.1416'],
        explanation: [
          'Āryabhaṭa is the first Indic mathematician we can date with confidence — his Āryabhaṭīya (499 CE) gives the year of his own composition. The text is astonishingly compact: 121 verses, divided into four pādas, set out a complete arithmetic, a complete astronomy and a complete trigonometry. It was written when Āryabhaṭa was twenty-three years old.',
          'The astronomy is the strangest part for modern readers. Āryabhaṭa argues clearly that the earth is a sphere; that it rotates on its axis; and that the apparent motion of the stars is therefore relative. The mathematics is no less ambitious — π is given as 3.1416 (described as approximate, āsanna), the sine table is laid down (Āryabhaṭa coins the term jyā, which travelled through Arabic jaib to Latin sinus and finally English sine), and the kuṭṭaka algorithm for indeterminate linear equations is set out in full.',
        ],
        aspects: [
          { name: 'Rotating earth', deva: 'भू-भ्रमण', desc: 'Verse 4.9: the stars only appear to move because the earth rotates — “as one sailing in a boat sees the trees on the shore moving backward.” The clearest pre-modern Indic statement of this idea.' },
          { name: 'Jyā (sine)', deva: 'ज्या', desc: 'Āryabhaṭa coins jyā for the sine function and lays down a table of 24 sine values at 3¾° intervals. The word jyā became Arabic jaib became Latin sinus became English “sine.”' },
          { name: 'Value of π', deva: 'पाई', desc: 'Āryabhaṭa gives π ≈ 62832 / 20000 = 3.1416 — and is honest about it, calling the value āsanna (approximate). The clearest explicit statement of π anywhere in the world at that date.' },
          { name: 'Kuṭṭaka algorithm', deva: 'कुट्टक', desc: 'The first general algorithm for solving indeterminate linear equations of the form ax + by = c. Used by every later Indian astronomer; closely related to what Europe would later call the Euclidean algorithm.' },
        ],
      },
      {
        id: 'brahmagupta', title: 'Brahmagupta', deva: 'ब्रह्मगुप्त', epithet: 'The author of zero',
        meta: ['c. 598 – 668 CE', 'Brāhma-sphuṭa-siddhānta', 'Bhinnamāla, Rajasthan'],
        summary: 'The first mathematician anywhere to give the rules of arithmetic with zero and negative numbers — treating positives as “fortunes” and negatives as “debts.” His Brāhma-sphuṭa-siddhānta also gives the general solution to ax² + bx + c = 0 and the cyclic quadrilateral formula that bears his name.',
        facets: ['Zero & negatives', 'Pell equation', 'Cyclic quadrilateral'],
        explanation: [
          'Brahmagupta is the first mathematician anywhere in the world to treat zero and the negative numbers as full first-class arithmetic objects. The Brāhma-sphuṭa-siddhānta (628 CE) opens with the rules of operation on “fortunes” (dhana, positive numbers), “debts” (ṛṇa, negatives), and “the empty” (śūnya, zero). The arithmetic he lays down is — with one well-known slip about division by zero — the same arithmetic we use today.',
          'The text’s reach is much wider. Brahmagupta gives the general solution to the quadratic equation in essentially the form modern students learn it; works out the area of a cyclic quadrilateral by the formula that now bears his name; and lays down the chakravāla method for what Europe would later call the Pell equation — a method Joseph-Louis Lagrange did not match until the eighteenth century. His work was carried west by Arab mathematicians and shaped the medieval Islamic mathematical tradition.',
        ],
        aspects: [
          { name: 'Zero and negatives', deva: 'शून्य · ऋण-धन', desc: 'The Brāhma-sphuṭa-siddhānta opens with eighteen rules for arithmetic on positives, negatives and zero — the first complete such rules anywhere in the world. Includes the famous (incorrect) rule that 0/0 = 0.' },
          { name: 'Quadratic equation', deva: 'वर्ग-समीकरण', desc: 'The general solution to ax² + bx = c is given in a form essentially equivalent to the modern formula — three and a half centuries before al-Khwārizmī.' },
          { name: 'Brahmagupta’s theorem', deva: 'चक्रीय-चतुर्भुज', desc: 'The area of a cyclic quadrilateral with sides a, b, c, d is given by the formula √[(s−a)(s−b)(s−c)(s−d)] where s is the semi-perimeter — exact for the cyclic case, an extension of Heron’s formula for the triangle.' },
          { name: 'Chakravāla method', deva: 'चक्रवाल', desc: 'Brahmagupta’s and Bhāskara II’s algorithm for solving the Pell equation Nx² + 1 = y² — proven only in the twentieth century to terminate for all valid N. The single most sophisticated piece of pre-modern Indic mathematics.' },
        ],
      },
      {
        id: 'bhaskara', title: 'Bhāskara II', deva: 'भास्कराचार्य', epithet: 'Līlāvatī · Bījagaṇita',
        meta: ['1114 – c. 1185 CE', 'Siddhānta-śiromaṇi', 'Vijjadavīḍa, Karnataka'],
        summary: 'The Siddhānta-śiromaṇi gathers the whole arc in four parts — Līlāvatī on arithmetic (still taught from in Sanskrit schools), Bījagaṇita on algebra, and two siddhāntas on planetary astronomy. Contains a clear conceptual precursor of the differential calculus, six centuries before Newton.',
        facets: ['Līlāvatī', 'Algebra (bīja)', 'Pre-calculus'],
        explanation: [
          'Bhāskara II — also called Bhāskarācārya — is the synthesising figure of the Indic mathematical tradition. His Siddhānta-śiromaṇi (“Crown of Treatises,” 1150 CE) gathers the whole inheritance into four parts: Līlāvatī on arithmetic (named, traditionally, after his daughter), Bījagaṇita on algebra, and two long sections on planetary astronomy. The text is the standard Indic mathematical curriculum from the twelfth century until colonial-era reform.',
          'Bhāskara’s most striking single contribution is a clear conceptual precursor of the differential calculus. In working out the instantaneous motion of a planet on its epicycle, he distinguishes the average motion over an interval from the motion at a given instant, and computes the latter as a limit of the former as the interval shrinks. He is doing — without the modern formalism — what Newton and Leibniz would more rigorously formulate six centuries later.',
        ],
        aspects: [
          { name: 'Līlāvatī', deva: 'लीलावती', desc: 'Bhāskara’s arithmetic text, written as a poem addressed to his daughter Līlāvatī. Still actively used in Sanskrit schools across India; contains some of the most charming worked examples in any classical mathematical writing.' },
          { name: 'Bījagaṇita', deva: 'बीजगणित', desc: 'The algebra companion — the technical core. Treats positive and negative roots explicitly, gives the chakravāla solution to the Pell equation, and works out a complete theory of indeterminate quadratic equations.' },
          { name: 'Pre-calculus', deva: 'पूर्व-कलन', desc: 'In the Goladhyāya (the spherical-astronomy section) Bhāskara distinguishes instantaneous from average velocity in planetary motion — and computes the former as a limit. The clearest pre-Newtonian statement of a derivative.' },
          { name: 'Siddhānta-śiromaṇi', deva: 'सिद्धान्त-शिरोमणि', desc: 'The four-part frame that holds it all together. The Grahagaṇita and Goladhyāya sections cover planetary astronomy and spherical geometry; the text was the standard advanced mathematics curriculum for seven centuries.' },
        ],
      },
      {
        id: 'kerala', title: 'Kerala school', deva: 'केरल-गणित-सम्प्रदायः', epithet: 'Mādhava and his lineage',
        meta: ['14th – 16th c. CE', 'Mādhava · Nīlakaṇṭha · Jyeṣṭhadeva', 'Yuktibhāṣā'],
        summary: 'A lineage of mathematicians in fourteenth-to-sixteenth-century Kerala — Mādhava of Saṅgamagrāma and his students — who derived the infinite-series expansions for sine, cosine and arctangent two centuries before Newton and Leibniz. The Yuktibhāṣā is the first known prose mathematics in any Indic language.',
        facets: ['Infinite series', 'sin · cos · arctan', 'Yuktibhāṣā'],
        explanation: [
          'The Kerala school is the most remarkable single chapter in pre-modern Indic mathematics. A lineage of teachers and students centred on Mādhava of Saṅgamagrāma (c. 1340–1425) — and continued by Parameśvara, Nīlakaṇṭha, Jyeṣṭhadeva and Acyuta Piṣārati — independently derived the infinite-series expansions for the sine, cosine and arctangent functions almost two centuries before Newton and Leibniz arrived at the same results in Europe.',
          'The Mādhava–Leibniz series π/4 = 1 − 1/3 + 1/5 − 1/7 + … is the most famous single result; it appears explicitly in Mādhava’s work, demonstrated with what Jyeṣṭhadeva’s 1530 Yuktibhāṣā treats as a complete rigorous proof. The Yuktibhāṣā itself is unique in another way: it is the first surviving mathematical text composed in prose rather than sūtra-verse, and the first in any Indic vernacular (Malayalam).',
        ],
        aspects: [
          { name: 'Mādhava', deva: 'माधव', desc: 'The founder of the lineage — “the one who saw the moon’s motion through the eye of mathematics.” The infinite-series results for sine, cosine and π are attributed to him, though most survive only through his students’ citations.' },
          { name: 'Nīlakaṇṭha · Tantra-saṅgraha', deva: 'नीलकण्ठ · तन्त्र-सङ्ग्रह', desc: 'Nīlakaṇṭha Somayāji’s 1500 CE Tantra-saṅgraha is the most important single text of the school after Mādhava — sets out a partially-heliocentric model of the inner planets two centuries before Tycho Brahe.' },
          { name: 'Yuktibhāṣā', deva: 'युक्तिभाषा', desc: 'Jyeṣṭhadeva’s 1530 prose treatise — the first major mathematical work in any Indian vernacular, written in Malayalam. Provides rigorous demonstrations (yukti) of the Kerala school’s analytical results.' },
          { name: 'Pre-Newtonian calculus', deva: 'पूर्व-कलन', desc: 'The infinite-series treatment of trigonometric functions, term-by-term, with explicit error-bound estimates — recognisably the mathematics of the calculus, two centuries before its European formulation.' },
        ],
      },
      {
        id: 'pingala', title: 'Piṅgala’s combinatorics', deva: 'पिङ्गल-छन्दःसूत्राणि', epithet: 'Binary, before binary',
        meta: ['~3rd – 2nd c. BCE', 'Chanda-sūtra · 8 chapters', 'Counted metres'],
        summary: 'The Chanda-sūtra’s combinatorial machinery — how many distinct metres of a given length are possible — gives the earliest known description of what is now called Pascal’s triangle (the mātrā-meru), an explicit rule for binary representation of numbers, and the recurrence we now call Fibonacci.',
        facets: ['Mātrā-meru ≈ Pascal’s Δ', 'Binary numerals', 'Fibonacci'],
        explanation: [
          'Piṅgala’s Chanda-sūtra is the Vedāṅga text on prosody — the rules of Sanskrit metre. To do its job it has to count: given a verse-line of length n, how many distinct metres of light and heavy syllables can be formed? Piṅgala’s answer requires him to develop, in compressed sūtra form, almost the entire toolkit of elementary combinatorics: binary representation of integers, the binomial coefficients, and what would later be called the Fibonacci recurrence.',
          'Two of the eight chapters lay down the mātrā-meru — what was rediscovered in Europe as Pascal’s triangle — for computing the number of metres of given total weight. The same chapters give an explicit algorithm for converting any positive integer to its binary representation. The Fibonacci recurrence appears as the count of metres of given mātrā-length. All of this is composed two thousand years before its European counterparts.',
        ],
        aspects: [
          { name: 'Mātrā-meru', deva: 'मात्रा-मेरु', desc: 'The triangle of binomial coefficients — what was rediscovered in early-modern Europe as Pascal’s triangle. Piṅgala uses it to count metres of given total syllabic weight.' },
          { name: 'Binary representation', deva: 'द्व्यङ्क-निरूपण', desc: 'An explicit algorithm to convert any positive integer into a string of laghu (light) and guru (heavy) syllables — i.e., into binary. The earliest known systematic binary representation.' },
          { name: 'Fibonacci recurrence', deva: 'फिबोनाची-क्रम', desc: 'The count of metres of mātrā-length n satisfies M(n) = M(n−1) + M(n−2) — the Fibonacci recurrence. Stated explicitly in Piṅgala’s sūtra and worked out further by the commentator Virahāṅka in the seventh century.' },
          { name: 'Combinatorics of metre', deva: 'छन्दः-गणित', desc: 'Piṅgala asks and answers: how many distinct metres of n syllables are there? How many contain exactly k guru syllables? The combinatorial vocabulary is built from the prosody problem outward.' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Subhāṣita & Nīti
  subhashita: {
    title: 'Subhāṣita & Nīti',
    deva: 'सुभाषित · नीति',
    crumb: ['Collection', 'Literature', 'Subhāṣita & Nīti'],
    lede: 'The aphoristic tradition — the wit-literature that distils the rest of the canon into single verses you can quote across a dinner table. Where the dharma-śāstras prescribe and the kāvyas describe, the subhāṣitas observe.',
    layout: 'tabs',
    items: [
      {
        id: 'bhartrihari', title: 'Bhartṛhari · Trishataka', deva: 'भर्तृहरि-त्रिशतकम्', epithet: 'Three hundreds on three lives',
        meta: ['~5th c. CE', '3 śatakas · 300+ verses', 'Nīti · Śṛṅgāra · Vairāgya'],
        summary: 'Three sets of a hundred verses — one on worldly conduct (nīti), one on love (śṛṅgāra), one on renunciation (vairāgya). The same Bhartṛhari is also credited with the Vākyapadīya, one of the most important works of Indic philosophy of language.',
        opening: { deva: 'दिक्कालाद्यनवच्छिन्नानन्तचिन्मात्रमूर्तये ।\nस्वानुभूत्येकमानाय नमः शान्ताय तेजसे ॥', trans: '“To the boundless self-cognising radiance, by space and time uncircumscribed, knowable only in its own experience — to that quiet brilliance, salutation.”', cite: 'Bhartṛhari · Nīti-śataka · maṅgala' },
        facets: ['Three śatakas', 'Three rasas', 'Most-quoted'],
        explanation: [
          'Bhartṛhari’s three śatakas — Nītiśataka, Śṛṅgāraśataka and Vairāgyaśataka, roughly “hundred verses each on worldly wisdom, love and renunciation” — are the most-quoted single work in the Indic aphoristic tradition. Composed somewhere in the fifth to seventh century CE, they read as the three successive phases of a single life: the man learning the rules of society, the man caught in desire, and the man stepping past both.',
          'The legend says the same Bhartṛhari was a king who renounced his throne — and the same Bhartṛhari is credited with the Vākyapadīya, one of the most subtle works of Indic philosophy of language. Whether or not the figures are historically the same person, the three śatakas are read together: each provides a stage of life, and together they constitute a small theology of the puruṣārthas.',
        ],
        aspects: [
          { name: 'Nītiśataka', deva: 'नीतिशतक', desc: 'A hundred verses on worldly conduct — how to recognise fools, how to deal with the powerful, when to speak and when to keep silent. The most quoted single śataka in the Indic subhāṣita tradition.' },
          { name: 'Śṛṅgāraśataka', deva: 'शृङ्गारशतक', desc: 'A hundred verses on love and desire — the pleasures of erotic life and, behind them, the slow recognition that desire is itself the problem. The text moves the reader toward the third śataka.' },
          { name: 'Vairāgyaśataka', deva: 'वैराग्यशतक', desc: 'A hundred verses on renunciation — the culmination. The bitter clarity that no worldly satisfaction is final, paired with sketches of the contemplative life that begins where the worldly life ends.' },
          { name: 'Vākyapadīya', deva: 'वाक्यपदीय', desc: 'The same name attaches to one of the most important Indic works on philosophy of language — the Vākyapadīya develops the famous śabda-brahman doctrine that the ultimate is language itself.' },
        ],
      },
      {
        id: 'chanakya', title: 'Cāṇakya-nīti', deva: 'चाणक्य-नीति', epithet: 'The minister’s aphorisms',
        meta: ['Attributed to Kauṭilya', '17 chapters', 'Householder-counsel'],
        summary: 'A loosely-organised collection of practical aphorisms attributed to Kauṭilya — on choosing friends, raising children, recognising fools, judging companions. Probably not by Kauṭilya himself, but a worthy successor to his Arthaśāstra in tone.',
        facets: ['Household-nīti', 'Practical aphorisms'],
        explanation: [
          'The Cāṇakya-nīti is a popular compilation of practical aphorisms attributed to Kauṭilya — the strategist of the Mauryan court and author of the Arthaśāstra. Modern scholarship is sceptical of the direct attribution: the surviving text is almost certainly a mediaeval compilation, drawing on Kauṭilya’s reputation and his characteristic tone. The verses move through seventeen chapters covering family, friends, work, money, the management of fools, and the rules of trustworthy companionship.',
          'What makes the text important is not its scholarly pedigree but its circulation. The verses are repeatedly quoted across the Hindi-speaking belt as cultural common sense; they appear in school recitation, in newspaper columns, in family conversation. Where the Arthaśāstra is a technical treatise for ministers, the Cāṇakya-nīti is the same political wisdom condensed for the householder.',
        ],
        aspects: [
          { name: 'Householder-nīti', deva: 'गृहस्थ-नीति', desc: 'Most of the text is addressed to the householder’s daily life — how to choose a friend, when to part from one, how to recognise a deceitful person before transacting with them.' },
          { name: 'Authorship', deva: 'कर्तृत्व', desc: 'The attribution to Kauṭilya is traditional but uncertain. Most modern scholars place the compilation between the eighth and the twelfth century CE; the verses draw on much older material.' },
          { name: 'Versification', deva: 'पद्य-बद्ध', desc: 'The verses are short, almost always one or two ślokas, and are designed for memorisation. The text functions less as a treatise and more as a memorable handbook the user carries in the head.' },
          { name: 'Tonal continuity with Kauṭilya', deva: 'अर्थशास्त्र-सम्बन्ध', desc: 'Even if the direct attribution is doubtful, the tone is recognisably Kauṭilyan — sceptical of human motive, ruthlessly practical, more concerned with how the world actually works than with how it should.' },
        ],
      },
      {
        id: 'vidura', title: 'Vidura-nīti', deva: 'विदुर-नीति', epithet: 'Counsel in the Mahābhārata',
        meta: ['Mahābhārata · Udyoga-parva 33–40', '~8 chapters', 'Royal counsel'],
        summary: 'Embedded inside the Mahābhārata — Vidura, half-brother of the blind king Dhṛtarāṣṭra, is asked through the night for the rule of polity and dharma. His answer is a small free-standing classic on the conduct of kings, the management of fools, and what makes a man trustworthy.',
        facets: ['Inside Mahābhārata', 'Royal counsel', 'Night-dialogue'],
        explanation: [
          'The Vidura-nīti is embedded inside the Udyoga-parva of the Mahābhārata — chapters 33 through 40, just before the war begins. Vidura, the half-brother of the blind king Dhṛtarāṣṭra (born of a servant-woman and so disqualified from the throne, but the wisest counsellor in the court), is summoned in the night. The king cannot sleep; he asks Vidura to speak. The eight chapters that follow constitute a complete small treatise on polity and dharma.',
          'The text has been excerpted out of the Mahābhārata since at least the mediaeval period and read on its own. Its concerns are the perennial ones of nīti literature — what makes a king trustworthy, how a wise counsellor advises, when silence is the right answer, what marks a fool — but Vidura’s position gives them special weight: he is speaking truth to a man who has refused, all his life, to hear it.',
        ],
        aspects: [
          { name: 'Night-dialogue frame', deva: 'रात्रि-संवाद', desc: 'The whole exchange takes place at night, between a sleepless king and his estranged counsellor. The frame gives the speech its unusual moral force — Vidura speaks because no one else will.' },
          { name: 'Royal counsel', deva: 'राज-नीति', desc: 'The classical concerns of nīti — the qualities of a wise king, the management of ministers, the signs of impending disaster, the conduct of negotiation — laid out as warning against the war Dhṛtarāṣṭra’s sons are about to begin.' },
          { name: 'The wise person', deva: 'पण्डित-लक्षण', desc: 'Famous chapters define what marks a paṇḍita (a person of wisdom) and what marks a fool. Vidura’s list — controls the senses, plans before acting, finishes what is started, does not boast — is among the most quoted in the tradition.' },
          { name: 'Truth-telling', deva: 'सत्य-वचन', desc: 'The Vidura-nīti is one of the Mahābhārata’s clearest defences of the duty of the wise counsellor to speak truth to power, even at personal cost. The duty has been read into Indian political life ever since.' },
        ],
      },
      {
        id: 'panchatantra', title: 'Pañcatantra', deva: 'पञ्चतन्त्र', epithet: 'Nīti by animal fable',
        meta: ['Viṣṇuśarman · ~3rd c. CE', '5 books · 84 stories', 'Most-translated Indic text'],
        summary: 'Five interlocking books of animal-fable, framed as a tutor’s programme to teach three foolish princes the running of a kingdom in six months. Travelled from Sanskrit through Middle Persian into Arabic (Kalīla wa Dimna), Greek, Latin, every major European vernacular — the most widely translated work of Indic literature ever written.',
        facets: ['Five books', 'Frame-tale', 'World-circulating'],
        explanation: [
          'Viṣṇuśarman’s Pañcatantra is the most widely translated work of Indic literature in history. The frame-story is simple: a king despairs of his three foolish sons; the elderly brahmin Viṣṇuśarman undertakes to teach them statecraft and nīti in six months. He does it not by lecture but by interlocking stories — five books, eighty-odd nested tales of animals out-thinking, betraying and forgiving each other.',
          'The route the text took out of India is itself one of the great stories of world literature. Translated into Middle Persian by Burzōē in the sixth century; from Persian into Arabic as Kalīla wa Dimna by Ibn al-Muqaffaʿ in the eighth; from Arabic into Syriac, Greek, Hebrew, Old Spanish, Latin (as the Directorium humanae vitae of John of Capua), German, English, French, Italian. The Pañcatantra is the most-translated Indic book ever written, and its stories — the crane and the crab, the monkey and the crocodile, the brahmin and the mongoose — circulated across three continents for a thousand years before the modern novel was invented.',
        ],
        aspects: [
          { name: 'Mitra-bheda', deva: 'मित्र-भेद', desc: 'Book I — “the splitting of friends.” The longest of the five; the jackal Damanaka’s scheming separates the lion Piṅgalaka from his friend the bull Sañjīvaka. A handbook of political destabilisation.' },
          { name: 'Mitra-prāpti', deva: 'मित्र-प्राप्ति', desc: 'Book II — “the gaining of friends.” Five animals — a crow, a mouse, a turtle, a deer and a poet — discover that what one cannot do alone, the five together can. The book is a small theology of alliance.' },
          { name: 'Kākolūkīya', deva: 'काकोलूकीय', desc: 'Book III — “of crows and owls.” The most strategic of the five; a war between crows and owls is won not by force but by a single covert operation. Read by mediaeval Indic strategists as a primer in intelligence.' },
          { name: 'Frame-tale technique', deva: 'कथा-सरित्', desc: 'The Pañcatantra’s nested narrative — story inside story inside story, with characters from outer frames returning into inner ones — is one of the foundational forms of world literature. The Arabian Nights and the Decameron both descend from it.' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Modern Indic Thought
  modern: {
    title: 'Modern Indic Thought',
    deva: 'आधुनिक भारतीय चिन्तनम्',
    crumb: ['Collection', 'Philosophy', 'Modern Indic Thought'],
    lede: 'The long nineteenth and twentieth centuries — how the Indic corpus was reread, contested and remade under colonial rule and after independence. Reformers, mystics, poets, jurists; men and women who took the canon apart and tried to put it back together for a country that had become a republic.',
    layout: 'grid',
    items: [
      {
        id: 'rammohan', title: 'Rammohan Roy', deva: 'राममोहन राय', epithet: 'The first reformer',
        meta: ['1772 – 1833', 'Brāhmo Samāj · 1828', 'Sati abolition · 1829'],
        summary: 'The opening figure. Translated the principal Upaniṣads into Bengali and English, founded the Brāhmo Samāj as a reformed monotheistic congregation, and led the campaign that ended sati. A Sanskritist, an Arabicist, and the first Indian to argue for liberal reform on Indic philosophical grounds.',
        facets: ['Brāhmo Samāj', 'Upaniṣad translations', 'Sati abolition'],
        explanation: [
          'Rammohan Roy is the founding figure of nineteenth-century Indic reform — and almost certainly the first Indian to think systematically about what the European Enlightenment and the Indic tradition had to say to each other. A Sanskritist, an Arabicist, and a fluent Persian writer, he produced the first English-language translations of the principal Upaniṣads in 1816–1819 and argued in his own polemical works that the Vedānta itself supported a strictly monotheistic, image-free worship.',
          'The Brāhmo Samāj he founded in 1828 was the first attempt at a reformed Indic congregational worship — without image, without priesthood, drawing on the Upaniṣads as its scripture. His public campaign against sati culminated in Lord Bentinck’s 1829 abolition. He died in Bristol in 1833, on a mission to argue the case for Indian reform before the British Parliament.',
        ],
        aspects: [
          { name: 'Brāhmo Samāj', deva: 'ब्राह्मो समाज', desc: 'Founded in Calcutta in 1828 as a reformed monotheistic congregation drawing on the Upaniṣads. The institutional ancestor of every later Indic reform movement of the nineteenth century.' },
          { name: 'Upaniṣad translations', deva: 'उपनिषद्-अनुवाद', desc: 'Rammohan’s English and Bengali translations of the Īśa, Kena, Kaṭha, Muṇḍaka and Māṇḍūkya Upaniṣads — the first attempt to make the texts available to a broader public, both Indian and European.' },
          { name: 'Sati abolition', deva: 'सती-निषेध', desc: 'Rammohan led the public campaign in Bengal against the practice of widow immolation. His pamphlets won over the British administration; Bentinck’s 1829 regulation prohibited the practice across British India.' },
          { name: 'Liberal vernacular', deva: 'आधुनिक-भाषा', desc: 'His Bengali prose — direct, secular, argumentative — is the first sustained piece of modern Indian-language journalism. The vernacular public sphere of nineteenth-century India effectively begins with him.' },
        ],
      },
      {
        id: 'vivekananda', title: 'Swami Vivekananda', deva: 'स्वामी विवेकानन्द', epithet: 'Practical Vedānta',
        meta: ['1863 – 1902', 'Disciple of Ramakrishna', 'Chicago address · 1893'],
        summary: 'Took the Advaita-Vedānta of Śaṅkara out of the monastery and made it a public philosophy of work, service and self-reliance. The Chicago address of 1893 is the conventional date for the modern Indic tradition stepping onto the world stage; the Rāmakṛṣṇa Mission carried it forward.',
        facets: ['Practical Vedānta', 'Rāmakṛṣṇa Mission', 'World’s Parliament'],
        explanation: [
          'Vivekananda is the figure who took Vedānta — until then almost entirely a monastic discipline — and made it a public ethics of work, service and self-reliance. As the chief disciple of Ramakrishna, the Bengali mystic of Dakshineswar, he inherited a non-sectarian theism that saw every religion as a valid path; he extended it outward into a programme of social reform aimed at restoring Indian self-confidence.',
          'The conventional date for the modern Indic tradition stepping onto the world stage is 11 September 1893, when Vivekananda addressed the World’s Parliament of Religions in Chicago. His Rāmakṛṣṇa Mission — founded in 1897 on the principle that service to humanity is service to God — became the institutional vehicle for his reading of Vedānta, and is still active across India and abroad.',
        ],
        aspects: [
          { name: 'Practical Vedānta', deva: 'व्यवहार-वेदान्त', desc: 'The reading that took the Advaita identity of self and Brahman as warrant for fearless action and service — not as an excuse for monastic withdrawal. The single most-quoted Vivekananda phrase.' },
          { name: 'Chicago address', deva: 'शिकागो भाषण', desc: 'The September 1893 speech at the World’s Parliament of Religions. Opened with “Sisters and brothers of America”; argued for the validity of every religion and the unique Indic contribution of universal acceptance.' },
          { name: 'Rāmakṛṣṇa Mission', deva: 'रामकृष्ण मिशन', desc: 'Founded 1897. The institutional Vivekananda — hospitals, schools, disaster-relief, monastic centres. Still one of the largest Hindu social-service organisations in the world.' },
          { name: 'Karma-yoga', deva: 'कर्मयोग', desc: 'Vivekananda’s 1896 lectures on the Bhagavad-gītā’s karma-yoga — reinterpreted for the modern world as a programme of work-as-spiritual-practice. The most-read of his shorter books.' },
        ],
      },
      {
        id: 'aurobindo', title: 'Sri Aurobindo', deva: 'श्रीअरविन्दः', epithet: 'Integral Yoga',
        meta: ['1872 – 1950', 'Pondicherry · 1910', 'The Life Divine'],
        summary: 'Cambridge-educated revolutionary turned mystic philosopher. The Life Divine is a five-thousand-page rereading of the Upaniṣads and the Gītā as a single evolutionary process — matter, life, mind, and the “supermind” still to come. His Pondicherry ashram became the seedbed of Integral Yoga.',
        facets: ['Integral Yoga', 'The Life Divine', 'Supermind'],
        explanation: [
          'Aurobindo Ghose was educated entirely in England — Cambridge classics, a Latin medal, the Indian Civil Service examination which he passed but refused to take up. Returning to India in 1893 he became one of the first leaders of the revolutionary nationalist movement in Bengal, was imprisoned in the Alipore Bomb Case (1908–09), and during the year-long detention had a series of inner experiences that turned him from revolution toward mystical philosophy.',
          'He moved to French Pondicherry in 1910 and spent the next forty years working out a philosophical system — set out in The Life Divine, The Synthesis of Yoga, and Savitri — that reads the Upaniṣads and the Gītā as the description of a single evolutionary process: matter, life, mind, and a further “supermind” still to come. The Pondicherry ashram he founded with Mirra Alfassa (the Mother) became the seedbed of Integral Yoga and, after his death, of the experimental township of Auroville.',
        ],
        aspects: [
          { name: 'The Life Divine', deva: 'दिव्य-जीवन', desc: 'Aurobindo’s 1939–40 magnum opus. A philosophical treatise of roughly a thousand pages, rereading the Upaniṣads as the description of consciousness evolving from matter through life and mind toward what he calls the supermind.' },
          { name: 'Supermind', deva: 'अतिमानस', desc: 'The distinctive Aurobindonian term — a further stage of consciousness beyond mind, in which truth is grasped directly rather than discursively. The descent of supermind into earth-consciousness is the goal of Integral Yoga.' },
          { name: 'Savitri', deva: 'सावित्री', desc: 'Aurobindo’s 24,000-line spiritual epic — the longest poem in English. A retelling of the Mahābhārata episode of Savitri and Satyavān as the inner journey of the soul.' },
          { name: 'Pondicherry · Auroville', deva: 'पॉण्डिचेरी · ओरोविल्', desc: 'The Pondicherry ashram, founded 1926; Auroville, the experimental township founded in 1968 by Mirra Alfassa as an attempt to embody Integral Yoga in collective life.' },
        ],
      },
      {
        id: 'tagore', title: 'Rabindranath Tagore', deva: 'रवीन्द्रनाथ ठाकुर', epithet: 'Poet of the universal',
        meta: ['1861 – 1941', 'Nobel Prize · 1913', 'Śāntiniketan · 1901'],
        summary: 'Bengali poet, novelist, painter, educator. First non-European Nobel laureate in literature. Reread the Upaniṣads as a poetics of the universal self, founded Śāntiniketan as an experiment in a kind of education that was neither colonial nor narrowly indigenous, and renounced his knighthood after Jallianwala Bagh.',
        facets: ['Gītāñjali', 'Śāntiniketan', 'Universalist'],
        explanation: [
          'Rabindranath Tagore was the central cultural figure of Bengal in his lifetime and the first non-European awarded the Nobel Prize in Literature (1913, for the English Gītāñjali). His output is staggering — over two thousand songs (Rabīndra-saṅgīt), the entire later half of which form a still-active musical tradition, plus poetry, novels, short stories, plays, essays, paintings, and the national anthems of India and Bangladesh.',
          'He read the Upaniṣads not as a treatise but as a poetics of the universal self — a vocabulary for the moments at which the individual recognises themselves in everything. The school he founded at Śāntiniketan in 1901 was his most concentrated experiment: an attempt to build an education that was neither colonial nor narrowly indigenous, that took the arts seriously, and that grew up outdoors. After the Jallianwala Bagh massacre of 1919 he publicly returned his British knighthood.',
        ],
        aspects: [
          { name: 'Gītāñjali', deva: 'गीताञ्जलि', desc: 'The 1910 Bengali poetry collection and its 1912 English self-translation. W. B. Yeats wrote the preface to the English edition; the book won the Nobel Prize the following year.' },
          { name: 'Rabīndra-saṅgīt', deva: 'रवीन्द्र-संगीत', desc: 'Tagore’s 2,232 songs — words and melodies. Constitute a distinct genre of Indian music still actively performed; “Jana Gana Mana” (India’s national anthem) and “Amar Sonar Bangla” (Bangladesh’s) are both Tagore compositions.' },
          { name: 'Śāntiniketan', deva: 'शान्तिनिकेतन', desc: 'Founded 1901 as an experimental school, expanded after the Nobel Prize into Viśva-Bhāratī University in 1921. Tagore’s practical statement of an Indic-universal education.' },
          { name: 'Knighthood renunciation', deva: 'सर-पद-त्याग', desc: 'Tagore returned his British knighthood in May 1919 in protest at the Jallianwala Bagh massacre. The letter to the Viceroy is one of the most quoted documents of the Indian independence movement.' },
        ],
      },
      {
        id: 'gandhi', title: 'Mohandas Gandhi', deva: 'मोहनदास गान्धी', epithet: 'Satya & ahiṃsā',
        meta: ['1869 – 1948', 'Satyāgraha · 1906', 'Independence · 1947'],
        summary: 'Rebuilt ahiṃsā as a mass political method. Combined the Jain inheritance of non-injury, the Bhagavad-gītā’s teaching on detached action, and Tolstoy’s Christian anarchism into satyāgraha — “holding firmly to the truth.” The Salt March of 1930 made it a method any colonised people could attempt.',
        facets: ['Satyāgraha', 'Ahiṃsā', 'Sarvodaya'],
        explanation: [
          'Gandhi is the figure who turned the Indic ethical inheritance of ahiṃsā into a working political method. He brought together three sources — the Jain commitment to non-injury he had inherited from his mother, the Bhagavad-gītā’s teaching on detached action which he read as a practical handbook, and the Christian anarchism of Tolstoy and the Sermon on the Mount — and produced satyāgraha: “holding firmly to the truth.”',
          'The method was tested first against the South African government from 1906 onward, then in India after his return in 1915. The Salt March of 1930 made it a method any colonised people could attempt. He never held office; he insisted his real project was the moral reconstruction of village India (Sarvodaya) and not merely the transfer of state power. His assassination by a Hindu nationalist in January 1948 was a direct response to that insistence.',
        ],
        aspects: [
          { name: 'Satyāgraha', deva: 'सत्याग्रह', desc: 'The composite Gandhi coined — satya (truth) + āgraha (holding fast). Not passive resistance but active non-violent confrontation that refuses to surrender the truth even under physical force.' },
          { name: 'Ahiṃsā', deva: 'अहिंसा', desc: 'Non-injury — in thought, word and act. Gandhi extended its scope from the Jain ethical commitment to a programme of political conduct, including the conduct of armed colonial opponents.' },
          { name: 'Sarvodaya', deva: 'सर्वोदय', desc: '“The uplift of all.” Gandhi’s alternative to both capitalism and state socialism — an economy of self-sufficient village republics, hand-spinning, and trusteeship of wealth.' },
          { name: 'Salt March', deva: 'दांडी-यात्रा', desc: 'The 240-mile march from Sabarmati Ashram to the coast at Dandi, March–April 1930, to break the British salt monopoly. The single most photographed episode of the Indian freedom movement.' },
        ],
      },
      {
        id: 'ambedkar', title: 'B. R. Ambedkar', deva: 'भीमराव अम्बेडकर', epithet: 'Architect of the Constitution',
        meta: ['1891 – 1956', 'Chair, Drafting Committee', 'Conversion to Buddhism · 1956'],
        summary: 'Economist, jurist, and the principal author of the Indian Constitution. A Dalit who took two doctorates at Columbia and the LSE, then turned them on the Indic canon — reading Manu against Manu, the Buddha against Brahminism. Converted publicly to Buddhism in 1956 with half a million followers.',
        facets: ['Constitution of India', 'Annihilation of Caste', 'Navayāna Buddhism'],
        explanation: [
          'Bhimrao Ramji Ambedkar was the most rigorously trained Indian thinker of the twentieth century — doctorates at Columbia (1916, economics) and the London School of Economics (1923), barrister at Gray’s Inn, professor of economics in Bombay, and from 1947 the chair of the Constituent Assembly’s Drafting Committee. He is the principal author of the Indian Constitution.',
          'A Dalit himself, he turned the full force of that training against the Indic tradition that had excluded him. The Annihilation of Caste (1936, undelivered as a speech because the organisers refused to drop the caste reference) is the single most powerful Indian-language attack on varṇa orthodoxy. He read Manu against Manu, the Buddha against Brahminism, and on 14 October 1956 — months before his death — he converted publicly to Buddhism in Nagpur, taking some half a million followers with him.',
        ],
        aspects: [
          { name: 'Constitution of India', deva: 'भारतीय संविधान', desc: 'Drafted under Ambedkar’s chairmanship between 1947 and 1949. The longest written constitution of any nation; built the legal scaffolding of Indian democracy, fundamental rights, and the abolition of untouchability.' },
          { name: 'Annihilation of Caste', deva: 'जातिप्रथा-नाश', desc: 'The 1936 undelivered speech — published the same year. The single most influential Indian critique of varṇa-orthodoxy and the brahmanical justification of caste.' },
          { name: 'Navayāna Buddhism', deva: 'नवयान बौद्ध-धर्म', desc: 'Ambedkar’s 1956 reading of Buddhism — emphasising the social-egalitarian dimensions of the Buddha’s teaching, with the four noble truths reframed against caste-based suffering. The Dīkṣā-bhūmi conversion was its founding act.' },
          { name: 'Buddha and his Dhamma', deva: 'बुद्ध आणि त्याचा धम्म', desc: 'Ambedkar’s 1957 (posthumous) reading of the Buddha’s life and teaching. The canonical text of Navayāna Buddhism — read in Ambedkarite households across Maharashtra to this day.' },
        ],
      },
      {
        id: 'krishnamurti', title: 'J. Krishnamurti', deva: 'जिड्डु कृष्णमूर्ति', epithet: 'Without a tradition',
        meta: ['1895 – 1986', 'Dissolution of the Order · 1929', 'Saanen · Brockwood Park'],
        summary: 'Selected as a child to lead the Theosophists’ World-Teacher project; dissolved that project at age 34 and spent the next fifty-seven years arguing, in unrhetorical English, that no method, guru or tradition can deliver the kind of seeing he meant. The most influential anti-traditional voice the tradition produced.',
        facets: ['Anti-method', 'Choiceless awareness', '“Pathless land”'],
        explanation: [
          'Jiddu Krishnamurti was selected as a boy by Annie Besant and the Theosophical Society and groomed throughout his teens to lead a worldwide spiritual project — the Order of the Star, with Krishnamurti as the awaited “World Teacher.” On 3 August 1929, at the age of thirty-four, he dissolved the Order in a brief speech to its thousands of members and walked away. “Truth is a pathless land. You cannot approach it by any path whatsoever, by any religion, by any sect.”',
          'For the next fifty-seven years he travelled the world giving talks and engaging in dialogues — including a long series with the physicist David Bohm. His subject was always the same: the limitations of thought, the conditioning of mind by tradition and culture, and the possibility of an immediate non-acquisitive seeing. He refused to be called a guru, refused to systematise his teaching, and remains the most influential anti-traditional voice the Indic tradition has produced.',
        ],
        aspects: [
          { name: '“Pathless land”', deva: 'मार्ग-रहित', desc: 'The 1929 dissolution speech — the single most-quoted statement of Krishnamurti’s anti-method position. No system, guru, technique or tradition can deliver the seeing in question.' },
          { name: 'Choiceless awareness', deva: 'विकल्प-रहित बोध', desc: 'The closest thing to a Krishnamurti technical term — the bare observation of what is, without the secondary movement of judgement, comparison or interpretation that thought immediately interposes.' },
          { name: 'Krishnamurti–Bohm dialogues', deva: 'बोम-संवाद', desc: 'A multi-decade series of recorded conversations with the physicist David Bohm — extending Krishnamurti’s themes into the relation between thought, language and physical reality. Some of the most demanding philosophical dialogues of the twentieth century.' },
          { name: 'Saanen · Brockwood Park · Rishi Valley', deva: 'सानेन · ब्रोकवुड पार्क · ऋषि-वैली', desc: 'The annual Saanen gatherings in Switzerland (1961–1985), the educational centres at Brockwood Park (England) and Rishi Valley (Andhra Pradesh) — the institutional remainder of an explicitly anti-institutional teacher.' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Bhagavad Gītā
  gita: {
    title: 'Bhagavad Gītā',
    deva: 'भगवद्गीता',
    crumb: ['Collection', 'Smṛti', 'Bhagavad Gītā'],
    lede: 'Seven hundred verses spoken between Kṛṣṇa and Arjuna on the battlefield of Kurukṣetra — eighteen chapters embedded in the Mahābhārata that became, by the classical period, a self-contained scripture in its own right. The most-commented Indic text outside the Upaniṣads.',
    layout: 'tabs',
    items: [
      {
        id: 'karma', title: 'Karma-yoga', deva: 'कर्मयोग', epithet: 'The path of action',
        meta: ['Chapters 2 – 6', 'Niṣkāma-karma', 'Action without grasping'],
        summary: 'The first of the three classical paths the Gītā lays out. Act without attachment to the fruit of action — the work is yours; its result is not. The teaching that resolves Arjuna’s opening refusal to fight, and the heart of Gandhi’s reading of the text.',
        opening: { deva: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥', trans: '“Yours is the right to action alone, never to its fruits. Be not the cause of the fruit of action — and let not your attachment be to inaction.”', cite: 'Bhagavad Gītā · 2.47' },
        facets: ['Niṣkāma-karma', 'Sva-dharma', 'Action without grasping'],
        explanation: [
          'Karma-yoga is the Gītā’s direct response to Arjuna’s opening refusal to fight. Arjuna, faced with the prospect of killing his kinsmen, drops his bow; Kṛṣṇa’s first answer is not to argue for or against the war but to reframe action itself. The right of a person is over the doing of an action, never over the result the action produces. Once the fruit is released, the action returns to its proper place — as an offering, not a transaction.',
          'The teaching is more radical than it first sounds. It is not asking the actor to be passive or detached from the work itself — Karma-yoga insists on doing one’s svadharma fully. What it asks is that the doer not contract around the outcome. The same insight reappears in twentieth-century India as Gandhi’s satyāgraha; it is read by Vivekananda as practical Vedānta and by Tilak as the central message of the text.',
        ],
        aspects: [
          { name: 'Niṣkāma-karma', deva: 'निष्काम कर्म', desc: 'Action without grasping at the fruit — the central technical term. Not action without effort, but action without the inner contraction that says “this had better turn out the way I want.”' },
          { name: 'Svadharma', deva: 'स्वधर्म', desc: 'The duty proper to one’s own station and capacity. The Gītā’s line — that one’s own dharma done imperfectly is better than another’s done perfectly — is the answer to Arjuna’s temptation to walk away.' },
          { name: 'Yajña as model', deva: 'यज्ञ', desc: 'The Gītā extends the Vedic notion of yajña: every action done as an offering, with the fruit released into something larger than the actor, becomes itself a sacrifice and a path to liberation.' },
          { name: 'Equanimity (samatva)', deva: 'समत्व', desc: 'The disposition that Karma-yoga produces — equal-mindedness in success and failure, gain and loss. “Samatvaṃ yoga ucyate — equanimity itself is called yoga.”' },
        ],
      },
      {
        id: 'bhakti', title: 'Bhakti-yoga', deva: 'भक्तियोग', epithet: 'The path of devotion',
        meta: ['Chapters 7 – 12', 'Prapatti · surrender', 'Twelfth chapter pre-eminent'],
        summary: 'The second path. Devotion to the personal lord (Iśvara) as the most accessible discipline for the embodied human — the teaching that fuelled every later bhakti tradition, from the Ālvārs of Tamil country to the Sants of the north.',
        opening: { deva: 'मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु ।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ॥', trans: '“Fix your mind on me, devote yourself to me, sacrifice to me, bow to me. To me alone you shall come — this I truly promise you, for you are beloved to me.”', cite: 'Bhagavad Gītā · 18.65' },
        facets: ['Iśvara-praṇidhāna', 'Most accessible path', 'Bhakti as surrender'],
        explanation: [
          'Where Karma-yoga gives a discipline of action and Jñāna-yoga gives a discipline of insight, Bhakti-yoga gives a discipline of relationship. The Gītā treats devotion to a personal Lord (Iśvara) as the most accessible discipline for an embodied human being — not a second-best for those unsuited to philosophy, but the one path that requires no special preparation and reaches the same end.',
          'The twelfth chapter — the Bhakti-yoga proper — sets out the marks of the true devotee: equanimous, free from hatred, friendly to all beings, not grasping at possession, content in joy and sorrow alike. Every later bhakti movement, from the Tamil Ālvārs to the medieval Sants to Caitanya in Bengal, reads itself back into this chapter.',
        ],
        aspects: [
          { name: 'Prapatti', deva: 'प्रपत्ति', desc: 'Surrender — the moment when the devotee gives up the project of liberation by their own effort and accepts that grace alone delivers the final stage. The doctrine becomes central to Rāmānuja’s Viśiṣṭādvaita.' },
          { name: 'Iṣṭa-devatā', deva: 'इष्ट-देवता', desc: 'The chosen form of the Lord — the particular face through which the devotee approaches the formless. The Gītā explicitly endorses choosing whatever form is loved; the destination is the same.' },
          { name: 'Nine forms of bhakti', deva: 'नवविधा भक्ति', desc: 'The Bhāgavata-purāṇa later elaborates nine — listening, singing, remembering, serving, worshipping, praising, attending, befriending, surrendering the self — each one a complete path in itself.' },
          { name: 'Charama-śloka', deva: 'चरम-श्लोक', desc: 'The Gītā’s “final verse” (18.66) — “abandon all dharmas and take refuge in me alone” — read by the Vaiṣṇava traditions as the single most important line in the text.' },
        ],
      },
      {
        id: 'jnana', title: 'Jñāna-yoga', deva: 'ज्ञानयोग', epithet: 'The path of knowledge',
        meta: ['Chapters 13 – 18', 'Sāṅkhya-yoga', 'Discrimination of kṣetra/kṣetrajña'],
        summary: 'The third path. The discrimination of the field (kṣetra, prakṛti) from its knower (kṣetrajña, puruṣa) — a Sāṅkhya-rooted analysis of body, mind, the three guṇas, and the witness that is none of them. Śaṅkara’s Advaita reading reads the whole Gītā through this final third.',
        opening: { deva: 'इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते ।\nएतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः ॥', trans: '“This body, son of Kuntī, is called the field. The one who knows it — him the knowers call the knower-of-the-field.”', cite: 'Bhagavad Gītā · 13.1' },
        facets: ['Kṣetra–kṣetrajña', 'Three guṇas', 'Witness-consciousness'],
        explanation: [
          'The final third of the Gītā unfolds as a clean Sāṅkhya analysis. Kṛṣṇa names the body and everything that constitutes it — the senses, the mind, the elements, even the ego itself — as kṣetra, the field. The witness of the field, the one in whom all this is presented, is the kṣetrajña: the knower-of-the-field. The discipline of Jñāna-yoga is the patient disentangling of one from the other.',
          'The three guṇas (sattva, rajas, tamas) are then introduced as the three threads from which the field is woven, and the liberated person is described as the one who has seen through them. Śaṅkara’s eighth-century commentary reads the whole Gītā retrospectively through these chapters; for Advaita Vedānta, every other path is finally folded into this one.',
        ],
        aspects: [
          { name: 'Kṣetra–kṣetrajña viveka', deva: 'क्षेत्र-क्षेत्रज्ञ विवेक', desc: 'The central discrimination: the body and mind are the field; the witnessing consciousness is the knower. Confusion of one with the other is precisely what binds; clear sight is what frees.' },
          { name: 'Three guṇas', deva: 'त्रिगुण', desc: 'Sattva (luminosity, balance), rajas (passion, motion), tamas (inertia, dullness). The chapters analyse human food, action, knowledge and personality by which guṇa predominates.' },
          { name: 'Sthitaprajña', deva: 'स्थितप्रज्ञ', desc: 'The “person of settled wisdom” — described first at 2.55 and again in the final chapters. The Gītā’s portrait of what realisation actually looks like: equanimous, undisturbed, free of grasping.' },
          { name: 'Avidyā as bondage', deva: 'अविद्या', desc: 'Bondage is misidentification — taking oneself to be what one is not. Jñāna-yoga removes the misidentification; nothing is added, only the false superimposition removed.' },
        ],
      },
      {
        id: 'vishvarupa', title: 'Viśva-rūpa', deva: 'विश्वरूप-दर्शन', epithet: 'The eleventh chapter',
        meta: ['Chapter 11', 'Theophany', 'Cosmic-form vision'],
        summary: 'The mid-point and the climax. Arjuna asks to see Kṛṣṇa’s true form; Kṛṣṇa grants divine sight and reveals himself as the universal form — every being, every direction, beginning, middle and end. The verse Oppenheimer recited at Trinity comes from this chapter.',
        opening: { deva: 'पश्य मे पार्थ रूपाणि शतशोऽथ सहस्रशः ।\nनानाविधानि दिव्यानि नानावर्णाकृतीनि च ॥', trans: '“Behold, Pārtha, my forms — in their hundreds, in their thousands — diverse and divine, of varied colours and shapes.”', cite: 'Bhagavad Gītā · 11.5' },
        facets: ['Theophany', 'Mid-text climax', 'Time the destroyer'],
        explanation: [
          'The eleventh chapter is the structural climax of the Gītā and the only place where the dialogue breaks out of conversation into vision. Arjuna, having heard ten chapters of teaching, asks to be shown what Kṛṣṇa has been describing. Kṛṣṇa grants him divine sight (divya-cakṣus) and reveals the viśva-rūpa — the universal form in which every being, every direction, every age past and to come is present at once.',
          'The vision is terrible as much as beautiful. Arjuna sees warriors of both armies rushing into Kṛṣṇa’s mouths and being ground to pieces — and the same Kṛṣṇa who has been his charioteer says, “Time am I, world-destroying, grown mature, come hither to consume the worlds.” Oppenheimer, watching the first nuclear test in 1945, recited this verse. The chapter is the Gītā’s acknowledgement that the divine is not finally domesticated by any of its three paths.',
        ],
        aspects: [
          { name: 'Divya-cakṣus', deva: 'दिव्य-चक्षुस्', desc: 'The “divine eye” granted to Arjuna so that he can see what ordinary sight cannot present. The chapter is explicit: without this faculty the form is invisible.' },
          { name: 'Kāla as destroyer', deva: 'काल', desc: 'Time, in this chapter, is not the abstract dimension but a person — the cosmic consumer of all forms. The Gītā insists that destruction is one of the divine functions, not an external interruption of it.' },
          { name: 'Saumya-rūpa', deva: 'सौम्य रूप', desc: 'After the terrifying vision Arjuna begs to see the “peaceful form” again, and Kṛṣṇa resumes the four-armed and then the human Kṛṣṇa form. The chapter closes by returning the cosmos to ordinary scale.' },
          { name: 'Bhakti as access', deva: 'भक्तिः', desc: 'In verses 53–55 Kṛṣṇa says the viśva-rūpa cannot be reached by Veda-study, by austerity, by gifts or by sacrifice — only by undivided devotion. Bhakti is the only key.' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Bhakti Traditions
  bhakti: {
    title: 'Bhakti Traditions',
    deva: 'भक्ति-परम्परा',
    crumb: ['Collection', 'Practice', 'Bhakti Traditions'],
    lede: 'The devotional turn — a long, plural movement that begins in the Tamil country around the seventh century and rolls northward over the next thousand years. Vernacular poetry, personal address to the Lord, the dignity of every singer regardless of caste, the temple as a community more than a precinct.',
    layout: 'tabs',
    items: [
      {
        id: 'alvars', title: 'Ālvārs', deva: 'आऴ्वार्', epithet: 'Tamil Vaiṣṇava poet-saints',
        meta: ['6th – 9th c. CE', '12 ālvārs · 4,000 hymns', 'Divya-prabandham'],
        summary: 'Twelve Tamil poet-saints — including the woman Āṇṭāḷ — whose 4,000-verse Divya-prabandham forms the Tamil counterpart of the Veda for Śrīvaiṣṇavas. Sang Viṣṇu in personal, intimate Tamil; opened the temple to the devotional aesthetics that Rāmānuja would later systematise.',
        opening: { deva: 'மணிவண்ணா எங்ஙே மறைந்திருந்தாய்', trans: '“Jewel-hued Lord — where do you hide?” (Āṇṭāḷ, Nācciyār Tirumoḻi)', cite: 'Āṇṭāḷ · Tamil source · 9th c.' },
        facets: ['Tamil śruti', 'Āṇṭāḷ', 'Source of Śrīvaiṣṇavism'],
        explanation: [
          'The Ālvārs are the earliest extant voices of the bhakti movement. Twelve poet-saints, active between roughly the sixth and the ninth centuries in the Tamil country, who walked from one Viṣṇu temple to another singing the deity in personal, intimate Tamil. Their compositions were collected in the tenth century as the Nālāyira Divya-prabandham — “the four thousand divine compositions” — and assigned the canonical status of a Tamil counterpart to the Veda among Śrīvaiṣṇavas.',
          'They include some of the most striking individual voices in any classical literature: Nammāḻvār the contemplative, Periyāḻvār the householder-mystic, and most strikingly Āṇṭāḷ, the only woman among them, whose Tiruppāvai is recited in temples across south India every Mārkaḻi month. Their personal address to a personal Lord became the aesthetic and theological foundation that Rāmānuja systematised in the eleventh century as Viśiṣṭādvaita.',
        ],
        aspects: [
          { name: 'Divya-prabandham', deva: 'दिव्य-प्रबन्धम्', desc: 'The 4,000-verse Tamil canon, collected by Nāthamuni in the tenth century. Functions as Tamil śruti for the Śrīvaiṣṇava community — recited in temple, taught in schools, commented on across centuries.' },
          { name: 'Āṇṭāḷ', deva: 'आण्डाल', desc: 'The only woman among the twelve. Her Tiruppāvai (the “sacred vow”) — thirty stanzas a young girl sings to wake Kṛṣṇa for the dawn vrata — is recited across south India every Mārkaḻi (December–January).' },
          { name: 'Nammāḻvār', deva: 'नम्माऴ्वार्', desc: 'The contemplative centre of the corpus. His Tiruvāymoḻi (“the holy words from the mouth”) is read by Śrīvaiṣṇavas as the Tamil Sāma-veda — the most theologically dense of the Ālvār writings.' },
          { name: 'Foundation of Śrīvaiṣṇavism', deva: 'श्रीवैष्णवम्', desc: 'Rāmānuja’s eleventh-century philosophy and the ritual tradition of the south-Indian Viṣṇu temples both trace their devotional vocabulary directly to the Ālvārs. The temple’s daily liturgy is built around Divya-prabandham recitation.' },
        ],
      },
      {
        id: 'nayanars', title: 'Nāyaṉārs', deva: 'नायन्मार्', epithet: 'Tamil Śaiva poet-saints',
        meta: ['6th – 9th c. CE', '63 nāyaṉārs', 'Tēvāram'],
        summary: 'Sixty-three Śaiva counterparts to the Ālvārs. The Tēvāram of Appar, Sambandar and Sundarar, and Māṇikkavācakar’s Tiruvācakam, are the foundational corpus of Tamil Śaiva-Siddhānta. Walked from temple to temple singing Śiva in the local language; the same century the Ālvārs were walking the same paths.',
        opening: { deva: 'பித்தா பிறை சூடி', trans: '“Mad one — wearer of the crescent moon, lord of bull and bow…” (Sundarar)', cite: 'Sundarar · Tēvāram · 9th c.' },
        facets: ['63 nāyaṉārs', 'Tēvāram', 'Tamil Śaiva foundation'],
        explanation: [
          'The Nāyaṉārs are the Śaiva counterparts of the Ālvārs — sixty-three poet-saints who walked the Tamil country between the sixth and ninth centuries singing Śiva in his local temples. Their hymns are gathered in the twelve-book Tirumuṟai, the foundational Tamil Śaiva canon. The first seven books form the Tēvāram — the work of Appar (the convert from Jainism), Sambandar (the boy-saint) and Sundarar (the lover and friend of god).',
          'The corpus is rounded out by Māṇikkavācakar’s Tiruvācakam — a single small book that Śaiva tradition regards as so direct an utterance of god-experience that “he who is not moved by Tiruvācakam can be moved by nothing.” Together the Nāyaṉārs gave Tamil Śaivism its devotional core; the philosophical superstructure built on top — Śaiva-Siddhānta — was systematised in the thirteenth and fourteenth centuries by Meykaṇḍār and his successors.',
        ],
        aspects: [
          { name: 'Tirumuṟai', deva: 'तिरुमुऱै', desc: 'The twelve-book Tamil Śaiva canon, compiled by Nambi Ānṭār Nambi in the eleventh century. The hymns of the Nāyaṉārs occupy the first eleven books; the twelfth is the Periya-purāṇam — the lives of the sixty-three saints.' },
          { name: 'Tēvāram', deva: 'तेवारम्', desc: 'The first seven books of the Tirumuṟai — the hymns of Appar, Sambandar and Sundarar. The single most important Tamil Śaiva text; the Tamil-speaking Śaiva tradition is unintelligible without it.' },
          { name: 'Tiruvācakam', deva: 'तिरुवाचकम्', desc: 'Māṇikkavācakar’s “sacred utterance” — the eighth book, a single sustained outpouring of mystical love poetry. Considered by tradition the most directly god-spoken of the entire Tirumuṟai.' },
          { name: 'Periya-purāṇam', deva: 'पेरिय-पुराणम्', desc: 'Cēkkiḻār’s twelfth-century biography of all sixty-three Nāyaṉārs in verse — the twelfth Tirumuṟai. The vehicle through which the saints’ stories entered Tamil popular culture.' },
        ],
      },
      {
        id: 'sants', title: 'Northern Sants', deva: 'सन्त-परम्परा', epithet: 'Vernacular nirguṇa-bhakti',
        meta: ['14th – 17th c. CE', 'Kabīr · Ravidās · Nāmdev', 'Pan-North, pan-religious'],
        summary: 'A confederation more than a school — Kabīr the weaver, Ravidās the leather-worker, Nāmdev the tailor, Mīrā the Rajput princess, Tulsīdās the brahmin. Sang in Hindi-Avadhī-Braj-Marathi-Punjabi, often refused all temples and all images, addressed an attribute-less divine they each named differently.',
        opening: { deva: 'मन लागो मेरो यार फकीरी में', trans: '“My heart is set, friend, on the dervish life — what use to me are silk and palace?” (Kabīr · paraphrase)', cite: 'Kabīr · Hindi · 15th c.' },
        facets: ['Nirguṇa', 'Vernacular', 'Cross-caste'],
        explanation: [
          'The Sant tradition of northern India is a confederation more than a school. It begins to take shape in the thirteenth and fourteenth centuries — with Nāmdev in Maharashtra and the brief poems of Jaydev gradually being heard further north — and crystallises in the fifteenth and sixteenth in the great voices of Kabīr (the weaver of Banaras), Ravidās (the leather-worker), Mīrā (the Rajput princess), Sūrdās (the blind poet of Braj), and Tulsīdās (whose Rāmcaritamānas became Hindi’s most-read religious work).',
          'What unites them is less a doctrine than a stance. They sang in vernacular — Hindi, Avadhī, Braj, Marathi, Punjabi — never Sanskrit. Most addressed a nirguṇa divine, without image and without temple. Many were from outside the brahmanical élite. And many were as critical of Hindu ritualism as they were of the contemporary Islamic ritual that surrounded them — the Sant utterance is the place where India worked out a vocabulary of God-talk that was neither.',
        ],
        aspects: [
          { name: 'Kabīr', deva: 'कबीर', desc: 'The fifteenth-century weaver of Banaras. His Bījak survives in three branch-recensions; his couplets and pads are quoted in Hindi-speaking households to this day. Refused both Hindu and Muslim ritual; addressed a Lord called Rām he insisted was neither.' },
          { name: 'Ravidās · Nāmdev', deva: 'रविदास · नामदेव', desc: 'Ravidās, the leather-worker, and Nāmdev, the Marathi tailor — two Dalit Sants whose hymns enter the Gurū Granth Sāhib alongside the writings of the Sikh gurus. Their inclusion is the canonical Sikh statement of caste-equality.' },
          { name: 'Mīrā · Sūrdās', deva: 'मीरा · सूरदास', desc: 'Mīrā the Rajput princess who would not be parted from Kṛṣṇa, and Sūrdās the blind poet of Braj. Two of the principal saguṇa voices in the broader Sant constellation, sung across the Hindi belt for five centuries.' },
          { name: 'Tulsīdās · Rāmcaritamānas', deva: 'तुलसीदास · रामचरितमानस', desc: 'Tulsīdās’s sixteenth-century Avadhi rendering of the Rāmāyaṇa — the single most-recited text in north Indian devotional Hinduism, performed every autumn as Rām-līlā across the Hindi-speaking region.' },
        ],
      },
      {
        id: 'gaudiya', title: 'Gauḍīya & Vārkarī', deva: 'गौडीय · वारकरी', epithet: 'Caitanya · Tukārām',
        meta: ['16th c. CE', 'Caitanya · Tukārām · Jñāneśvar', 'Saguṇa devotion'],
        summary: 'Two of the great regional crystallisations. The Gauḍīya tradition of Caitanya in Bengal — Kṛṣṇa as the supreme rasa, the saṃkīrtana of the divine names. The Vārkarī tradition of Maharashtra — Viṭṭhal at Paṇḍharpur, Jñāneśvar’s Marathi commentary on the Gītā, the abhaṅgas of Tukārām.',
        facets: ['Bengali · Marathi', 'Caitanya', 'Vārkarī pilgrimage'],
        explanation: [
          'Where the Sant tradition tilts toward the nirguṇa divine, the Gauḍīya tradition of Bengal and the Vārkarī tradition of Maharashtra tilt toward the saguṇa — Kṛṣṇa in his full embodied form, with name, story and image. The Gauḍīya stream is associated above all with Caitanya Mahāprabhu (1486–1534), who took the saṃkīrtana of the divine names into the streets of Navadvīpa and made it a public devotional practice that has not stopped since.',
          'The Vārkarī tradition is older and more textured. Its central deity is Viṭṭhal of Paṇḍharpur; its founding text is Jñāneśvar’s late-thirteenth-century Marathi commentary on the Gītā (the Jñāneśvarī, also called Bhāvārtha-dīpikā); its annual practice is the Āṣāḍhī Vāri — the foot-pilgrimage of millions to Paṇḍharpur every monsoon. Tukārām’s seventeenth-century abhaṅgas remain the standard devotional songbook of Marathi-speaking households.',
        ],
        aspects: [
          { name: 'Caitanya Mahāprabhu', deva: 'चैतन्य महाप्रभु', desc: 'The founder of the Gauḍīya school. His own writings are slight — eight verses survive — but his teaching, transmitted through the “six gosvāmīs” of Vṛndāvana, became the most sophisticated theology of Kṛṣṇa-bhakti in the tradition.' },
          { name: 'Saṃkīrtana', deva: 'संकीर्तन', desc: 'The public, congregational singing of the divine names. Caitanya’s public practice; preserved across centuries by the Bengali tradition; the parent of the modern Hare Krishna movement.' },
          { name: 'Jñāneśvarī', deva: 'ज्ञानेश्वरी', desc: 'Jñāneśvar’s 1290 CE Marathi commentary on the Bhagavad-gītā — nine thousand verses in the ovi metre. The first major Marathi philosophical work and the founding text of the Vārkarī tradition.' },
          { name: 'Tukārām · Vāri', deva: 'तुकाराम · वारी', desc: 'The seventeenth-century Tukārām’s abhaṅgas — short, sharp, conversationally addressed to Viṭṭhal — and the annual Āṣāḍhī Vāri foot-pilgrimage to Paṇḍharpur, which still draws between half a million and a million walkers every monsoon.' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Parallel Canons
  parallel: {
    title: 'Parallel Canons',
    deva: 'इतर परम्पराः',
    crumb: ['Collection', 'Parallel', 'Other canons'],
    lede: 'Three vast bodies of text that share Indic ground while standing outside the Vedic line. Each runs on its own languages, its own scripts, its own apparatus of commentary; each shaped, and was shaped by, the corpus described in the rest of the collection.',
    layout: 'tabs',
    items: [
      {
        id: 'jain', title: 'Jain Āgamas', deva: 'जैन-आगमाः', epithet: 'In Ardhamāgadhī Prakrit',
        meta: ['Mahāvīra · 6th c. BCE', '12 (or 45) aṅgas', 'Digambara · Śvetāmbara'],
        summary: 'The teachings of the Tīrthaṅkaras, transmitted orally for centuries and finally committed to writing at the council of Valabhī in the fifth century CE. The Tattvārtha-sūtra of Umāsvāti is the rare text accepted by both Digambara and Śvetāmbara schools — a Jain analogue of the Brahma-sūtras.',
        opening: { deva: 'अहिंसा-संयम-तपो धर्मः', trans: '“Dharma is non-injury, restraint, and austerity.”', cite: 'Daśavaikālika-sūtra · 1.1' },
        facets: ['Ardhamāgadhī', 'Tattvārtha-sūtra', 'Two schools'],
        explanation: [
          'The Jain Āgamas are the canonical scriptures of the Jain tradition — the teachings of Mahāvīra and his predecessor Tīrthaṅkaras, transmitted orally for almost a thousand years before being committed to writing at the council of Valabhī in roughly the fifth century CE. The language of composition is Ardhamāgadhī, a Prakrit closely tied to the eastern Indian region where Mahāvīra taught.',
          'The two principal Jain schools — Digambara and Śvetāmbara — disagree about exactly which texts count as canonical. The Śvetāmbaras accept a forty-five-text canon (the eleven surviving aṅgas plus subsidiary literature); the Digambaras hold that the original aṅgas were lost in the post-Mahāvīra famines and accept only later treatises. The one text both schools accept is Umāsvāti’s second-century Tattvārtha-sūtra — the Jain analogue of the Brahma-sūtras.',
        ],
        aspects: [
          { name: 'Tattvārtha-sūtra', deva: 'तत्त्वार्थ-सूत्र', desc: 'Umāsvāti’s c. 200 CE compendium in 350 sūtras — the only Jain text accepted as canonical by both Digambara and Śvetāmbara schools. Sets out the seven (or nine) tattvas: jīva, ajīva, āsrava, bandha, saṃvara, nirjarā, mokṣa.' },
          { name: 'Twelve aṅgas', deva: 'द्वादशाङ्ग', desc: 'The original Śvetāmbara canon — twelve “limbs.” The twelfth (the Dṛṣṭi-vāda) is held to be lost; the surviving eleven contain the bulk of Mahāvīra’s teachings on doctrine, ethics, and monastic discipline.' },
          { name: 'Anekānta · Syādvāda', deva: 'अनेकान्त · स्याद्वाद', desc: 'The distinctive Jain epistemology — that reality has infinitely many aspects (anekānta), so every statement is true only from a standpoint (syādvāda). Among the most sophisticated theories of perspectival truth in any pre-modern tradition.' },
          { name: 'Ahiṃsā', deva: 'अहिंसा', desc: 'Non-injury — the central Jain ethical commitment, extended to every form of life with a strictness no other Indic school matches. The discipline shapes Jain diet, livelihood, monasticism and (through Gandhi) modern Indian political ethics.' },
        ],
      },
      {
        id: 'buddhist', title: 'Buddhist Tipiṭaka', deva: 'त्रिपिटक', epithet: 'In Pali',
        meta: ['Buddha · 5th c. BCE', 'Tipiṭaka — three baskets', 'Theravāda canon'],
        summary: 'The Pali canon — three baskets (piṭakas): Vinaya (the monastic code), Sutta (the Buddha’s discourses), Abhidhamma (the systematic analysis of mind and phenomena). Later Mahāyāna sūtras — the Lotus, the Perfection of Wisdom, the Laṅkāvatāra — were composed in Sanskrit and survive principally in Tibetan and Chinese translation.',
        opening: { deva: 'सब्बे संखारा अनिच्चा', trans: '“All conditioned things are impermanent. All conditioned things are unsatisfactory. All things — conditioned and unconditioned — are not-self.”', cite: 'Dhammapada · 20.5 – 7' },
        facets: ['Vinaya · Sutta · Abhidhamma', 'Theravāda · Mahāyāna', 'Pali · Sanskrit'],
        explanation: [
          'The Buddhist canon is organised, in its Pali form, as a Tipiṭaka — “three baskets.” The Vinaya-piṭaka contains the rules of monastic discipline; the Sutta-piṭaka contains the Buddha’s discourses, including the Dīgha- and Majjhima-nikāyas and the much-loved Dhammapada; the Abhidhamma-piṭaka contains the systematic analysis of mind, phenomena and causation that Buddhist scholastics developed into a complete philosophical psychology.',
          'The Pali Tipiṭaka is the canonical text of the Theravāda school of southeast Asia. The northern Mahāyāna tradition added a vast further corpus, composed in Sanskrit and surviving principally in Chinese and Tibetan translation: the Prajñāpāramitā sūtras, the Lotus Sūtra, the Laṅkāvatāra-sūtra, and the Tibetan tantras. Together they form a canonical literature larger in volume than any other religious tradition produced before printing.',
        ],
        aspects: [
          { name: 'Vinaya · Sutta · Abhidhamma', deva: 'विनय · सुत्त · अभिधम्म', desc: 'The three baskets — monastic code, discourses, philosophical analysis. Composed (in Pali) over several centuries after the Buddha; committed to writing at the fourth Buddhist council in Sri Lanka in the first century BCE.' },
          { name: 'Theravāda · Mahāyāna · Vajrayāna', deva: 'थेरवाद · महायान · वज्रयान', desc: 'The three principal historical streams. Theravāda preserves the Pali canon in southeast Asia; Mahāyāna develops the bodhisattva path in north and east Asia; Vajrayāna adds the tantric corpus in Tibet and the Himalayas.' },
          { name: 'Madhyamaka · Yogācāra', deva: 'माध्यमक · योगाचार', desc: 'The two principal Mahāyāna philosophical schools — Nāgārjuna’s middle-way of emptiness and Asaṅga–Vasubandhu’s consciousness-only analysis. Two of the most sophisticated philosophical projects in the Indic record.' },
          { name: 'Dhammapada', deva: 'धम्मपद', desc: 'The single most-translated Buddhist text — 423 verses in twenty-six chapters, drawn from the larger Sutta-piṭaka. The Buddhist counterpart of the Gītā in popular reach.' },
        ],
      },
      {
        id: 'sikh', title: 'Gurū Granth Sāhib', deva: 'गुरु ग्रन्थ साहिब', epithet: 'The Ādi Granth',
        meta: ['Compiled 1604 · Final 1708', 'Gurmukhī script', '1,430 aṅgas'],
        summary: 'The scripture of the Sikhs, compiled by the fifth Sikh guru, Arjun, and given final form by the tenth, Gobind Singh, who installed it as the eternal guru. Includes the compositions of the first ten gurus along with hymns by Kabīr, Ravidās, Nāmdev, Farīd and other bhagats from across the religious spectrum.',
        opening: { deva: 'ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ।', trans: '“One — the eternal — whose name is Truth, the doer, the formless.”', cite: 'Mūl Mantra · Gurū Granth Sāhib · 1' },
        facets: ['Mūl Mantra', '1,430 aṅgas', 'Pan-religious hymns'],
        explanation: [
          'The Gurū Granth Sāhib is the central scripture of the Sikhs and — uniquely among major world scriptures — was installed not as a book but as a living guru. The fifth Sikh guru, Arjun, compiled the Ādi Granth in 1604 at Amritsar; the tenth, Gobind Singh, completed the final recension in 1708 and declared that on his death the book itself would be the eleventh and eternal guru. There has been no human guru since.',
          'The 1,430-page (aṅga) text is in many ways an Indic religious anthology. Alongside the compositions of the Sikh gurus themselves, it contains hymns by Kabīr, Ravidās, Nāmdev, Sheikh Farīd, and other bhagats from across the religious spectrum — both Hindu and Muslim. The principle that the divine speaks through many voices was built into the canon at the moment of its compilation.',
        ],
        aspects: [
          { name: 'Mūl Mantra', deva: 'मूल मन्त्र', desc: 'The opening line of the Granth, composed by Gurū Nānak — Ik Onkār Sat Nām Karta Purakh. One eternal, whose name is truth, the doer, formless. The single most-recited line in the Sikh tradition.' },
          { name: 'Pan-religious anthology', deva: 'सर्व-धर्म', desc: 'Hymns by Kabīr, Ravidās, Nāmdev, Sheikh Farīd, Jayadeva, Trilochan and other Hindu and Muslim bhagats are included alongside the writings of the Sikh gurus. The structural statement of Sikh universalism.' },
          { name: 'Gurmukhī script', deva: 'गुरुमुखी', desc: 'The script — created or standardised by the second guru, Aṅgad — in which the text is written. Allows the recording of both the Punjabi and the wider literary languages of mediaeval north India.' },
          { name: 'Eternal Guru', deva: 'शब्द-गुरु', desc: 'The 1708 declaration that the Granth itself is the guru. The unique Sikh doctrine of the śabda-guru — the word as living teacher — and the foundation of every later Sikh devotional practice.' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────── Śruti & Smṛti (primer)
  'shruti-smriti': {
    title: 'Śruti & Smṛti',
    deva: 'श्रुति · स्मृति',
    crumb: ['Collection', 'Field guide', 'Śruti & Smṛti'],
    lede: 'A two-tier distinction that holds the entire Indic corpus together — and has no exact European parallel. The field guide.',
    layout: 'primer',
  },
};
