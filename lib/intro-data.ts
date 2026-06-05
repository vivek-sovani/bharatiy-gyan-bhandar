// "The Living Tree" — the narrative introduction to the knowledge tree.
// Original synthesis written as source material for Bhāratīya Jñāna Bhaṇḍāra.
// Editorial "Map note" lines from the source essay are intentionally omitted —
// only reader-facing prose ships here. Paragraph strings may carry inline
// <strong>/<em> markup and are rendered with dangerouslySetInnerHTML.

export type IntroSection = {
  id: string;
  number: string;
  tabLabel: string;
  title: string;
  paragraphs: string[];
  pullQuote?: string;
};

export type IntroThread = { label: string; text: string };

export type IntroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
  lede: string[];
  sections: IntroSection[];
  conclusion: {
    title: string;
    intro: string;
    threads: IntroThread[];
  };
  closing: string;
  // Bridge line that leads from the essay's close into the "How to explore" guide.
  guideBridge: string;
  guideEyebrow: string;
};

export const INTRO: IntroContent = {
  eyebrow: 'The introduction',
  title: 'The Living Tree',
  subtitle: 'How Indian knowledge grew from the Vedas into the classical corpus',
  note: 'Original synthesis for Bhāratīya Jñāna Bhaṇḍāra. Dates are scholarly approximations; the tradition itself is more interested in continuity than in calendars.',

  lede: [
    'A library can show you <em>what</em> a civilization knew. It is harder to show <em>how</em> it came to know it — and harder still to convey the most interesting thing of all: that none of this was planned. No committee sat down to design Āyurveda, or grammar, or algebra, or the philosophy of the self. Each grew out of the one before it, often as a by-product of solving a much smaller, more practical problem. The story of the Indic corpus is the story of a single thread of curiosity that never broke — and that, every few centuries, branched into something the previous generation could not have imagined.',
    'This is a map of that branching. Read it, and the catalogue below stops being a list of unfamiliar Sanskrit titles and becomes what it actually is: the record of a three-thousand-year conversation that human beings were having with the cosmos, with each other, and with themselves.',
  ],

  sections: [
    {
      id: 'wonder',
      number: '1',
      tabLabel: 'Wonder, not religion',
      title: 'The beginning was wonder, not religion',
      paragraphs: [
        'The oldest layer, the <strong>Ṛgveda</strong>, does not read like a holy book. It reads like the notebook of people who could not stop looking up. Dawn (<em>Uṣas</em>) arrives and someone needs to say what it is like. Fire (<em>Agni</em>) is the one thing that turns the raw into the cooked and carries the offering upward, so it deserves the first hymn. There is a verse — the <em>Nāsadīya Sūkta</em> — that asks how the universe began and then, astonishingly, admits that perhaps no one knows, perhaps not even the gods, perhaps not even <em>that</em> one who looks down from the highest heaven.',
        'That is the founding gesture of the whole tradition: <strong>a question held open rather than closed.</strong> The motive at the root was not obedience. It was <em>comprehension</em> — the wish to stand in a right relationship with forces vastly larger than oneself, and to articulate that relationship in language exact enough to be worth repeating.',
        'The other three Vedas are already specialisations of that single impulse. The <strong>Yajurveda</strong> is the working handbook of the ritual — what to say and do, and in what order. The <strong>Sāmaveda</strong> sets the hymns to melody and is, quite literally, the oldest surviving musical notation on earth. The <strong>Atharvaveda</strong> comes down from the priests to the household: it is medicine, charm, anxiety and cure, the distant ancestor of every later Indic science of healing.',
      ],
      pullQuote: 'The four Vedas are not four books but four uses of one impulse — knowing, doing, singing, healing.',
    },
    {
      id: 'branching',
      number: '2',
      tabLabel: 'The first branching',
      title: 'How preservation accidentally invented the sciences',
      paragraphs: [
        'Here is the pivot that almost no popular account gets right, and it is the most interesting part of the entire story. The Veda was <strong>oral.</strong> It had to be transmitted across centuries with not a single syllable lost — because a mispronounced mantra was thought to be not merely incorrect but ineffective, even dangerous. This is an extraordinary engineering problem: <em>how do you transmit a large body of text, perfectly, for a thousand years, with no paper?</em>',
        'Solving that one problem set off a chain reaction. To preserve the Veda, you had to build the disciplines that <em>guard</em> it — the six <strong>Vedāṅgas</strong>, the “limbs of the Veda.” And in building them, the tradition stumbled into the sciences: phonetics (<strong>Śikṣā</strong>), the most rigorous the pre-modern world would see; ritual geometry (<strong>Kalpa</strong> and the <strong>Śulba-sūtras</strong>), the oldest Indian mathematics, including the relation we now call Pythagoras’ theorem; grammar (<strong>Vyākaraṇa</strong>), which produced Pāṇini’s <em>Aṣṭādhyāyī</em>, a complete generative grammar of Sanskrit twenty-five centuries before Chomsky; etymology (<strong>Nirukta</strong>); prosody (<strong>Chandas</strong>), whose analysis of metre gave the world a binary notation and the sequence Europe would later call Fibonacci’s; and astronomy (<strong>Jyotiṣa</strong>), from which came the calendar and eclipse prediction.',
        'This is the through-line worth pressing on: <strong>in India, the empirical sciences were born as the servants of the sacred, and then quietly outgrew their master.</strong> Geometry began as altar-building. Astronomy began as ritual timekeeping. Linguistics began as the wish to say a prayer correctly. The practical and the profound were never separated — which is exactly why the knowledge stayed connected to life.',
      ],
      pullQuote: 'Six disciplines invented to protect a text — and one of them turned out to be the first formal grammar in human history.',
    },
    {
      id: 'inward',
      number: '3',
      tabLabel: 'The inward turn',
      title: 'From the altar to the self',
      paragraphs: [
        'By roughly the middle of the first millennium BCE, the conversation changed direction. The <strong>Upaniṣads</strong> — literally “sitting down near” a teacher — are the end of the Veda (<em>Vedānta</em>), and they turn away from the ritual fire toward an even harder fire: the questioner himself.',
        'The motive shifts from prosperity to <strong>liberation</strong> (<em>mokṣa</em>). The questions are no longer “how do I perform the sacrifice?” but “who is the one performing it?” <em>Who am I, beneath the name and the body? What is real when everything changes?</em> The answer the Upaniṣads keep circling — <em>tat tvam asi</em>, “you are that” — is among the boldest claims any culture has made: that the innermost self (<em>ātman</em>) and the ultimate reality (<em>brahman</em>) are one.',
        'What matters for the <em>story</em> is the method. These are <strong>dialogues</strong> — a boy and his father, a king and a sage, a woman, Gārgī, pressing a teacher until he tells her to stop or her head will fall off. Knowledge here is not handed down; it is <em>won</em>, by argument, in conversation. That habit of disciplined disagreement is about to become the engine of everything that follows.',
      ],
      pullQuote: 'Knowledge here is not handed down; it is won, by argument, in conversation.',
    },
    {
      id: 'classical',
      number: '4',
      tabLabel: 'Wisdom made science',
      title: 'The classical systematisation',
      paragraphs: [
        'The Upaniṣads ask the great questions but do not answer them systematically. The <strong>classical era</strong> — roughly the centuries on either side of the start of the Common Era — is when the tradition decided that questions this important deserved <em>rigour</em>. The result is the six <strong>āstika darśanas</strong>, the “viewpoints” or schools of philosophy, and they read like a faculty of a single ancient university:',
        '<strong>Nyāya</strong>, logic and epistemology — what counts as valid knowledge, and how do you prove anything? <strong>Vaiśeṣika</strong>, natural philosophy — matter made of indivisible atoms (<em>aṇu</em>). <strong>Sāṅkhya</strong>, a complete enumeration of reality into consciousness (<em>puruṣa</em>) and nature (<em>prakṛti</em>). <strong>Yoga</strong>, the laboratory that takes Sāṅkhya’s map and walks it. <strong>Mīmāṃsā</strong>, the science of interpretation — the ancestor of Indian legal reasoning. And <strong>Vedānta</strong>, the return to the Upaniṣadic question of the self, now argued school by school.',
        'What <em>drove</em> this systematisation was a culture of <strong>public debate</strong> (<em>śāstrārtha</em>). Schools, including the dissenting ones, met and argued in the open, and the loser was expected to concede. You cannot win such debates with assertion; you need airtight definitions, rules of evidence, theories of error. So India produced one of the world’s great traditions of logic and epistemology — not in spite of its spirituality, but <em>because</em> its spirituality was willing to be questioned.',
      ],
      pullQuote: 'Six schools, one debating hall. Disagreement was not a threat to the tradition — it was the method.',
    },
    {
      id: 'dissenters',
      number: '5',
      tabLabel: 'The dissenters',
      title: 'The dissenters who made the tradition stronger',
      paragraphs: [
        'No account is honest if it pretends the corpus was a single harmonious voice. Running alongside the orthodox schools were the <strong>nāstika darśanas</strong> — the three that declined the authority of the Veda: <strong>Cārvāka</strong>, thoroughgoing materialists who insisted on the evidence of the senses and laughed at the afterlife; <strong>Bauddha</strong>, the vast intellectual world of Buddhism, which produced in Dignāga and Dharmakīrti some of the sharpest logicians the subcontinent ever saw; and <strong>Jaina</strong>, the Jains, whose doctrine of <em>anekāntavāda</em> — “many-sidedness” — is a remarkable early theory of intellectual humility: every viewpoint is partial, so hold your own with a <em>syāt</em>, a “perhaps.”',
        'This is the part to celebrate rather than hide. <strong>The dissent enriched the whole.</strong> Buddhist logic forced Hindu logic to become more precise; the Jain insistence on non-violence and many-sidedness pushed an entire civilization toward tolerance and vegetarian ethics; the Cārvāka materialists kept everyone honest about evidence. A tradition that can argue with itself for two thousand years and stay in one conversation is not fragile. It is alive.',
      ],
      pullQuote: 'A tradition that can argue with itself for two thousand years and stay in one conversation is not fragile. It is alive.',
    },
    {
      id: 'living',
      number: '6',
      tabLabel: 'Knowledge for living',
      title: 'Knowledge turned to living — the applied sciences and the śāstras',
      paragraphs: [
        'Once the philosophical foundations were laid, the same rigour was pointed back at ordinary life. The <strong>Upavedas</strong> are the applied sciences, each attached to one of the four Vedas: <strong>Āyurveda</strong>, medicine — Caraka and Suśruta turning healing into a system of diagnosis, surgery and prevention; <strong>Dhanurveda</strong>, the science of war and the disciplined body; <strong>Gāndharvaveda</strong>, music and the performing arts; <strong>Sthāpatyaveda</strong>, architecture and the ordering of built space.',
        'And the <strong>śāstras</strong> are the manuals for living well together: <strong>Dharma-śāstra</strong>, ethics and civil law (Manu, Yājñavalkya); <strong>Artha-śāstra</strong>, Kauṭilya’s coldly brilliant manual of statecraft, economics, taxation and intelligence; <strong>Kāma-śāstra</strong>, pleasure, relationship and the art of living, treated as a subject worthy of study; and the <strong>Nāṭya-śāstra</strong> with the <strong>Kāvya</strong> poets — a complete science of drama, beauty and <em>rasa</em>, the emotion a work of art evokes.',
        'Behind all of this sits the most quietly radical idea of the tradition: the four <strong>puruṣārthas</strong>, the legitimate aims of a human life — <em>dharma</em> (ethics), <em>artha</em> (prosperity), <em>kāma</em> (pleasure and love), and <em>mokṣa</em> (freedom). A culture that gives prosperity and pleasure their own sciences, alongside ethics and liberation, is not world-denying. It is trying to teach you how to live a <em>whole</em> life.',
      ],
      pullQuote: 'A culture that gives prosperity and pleasure their own sciences is not world-denying. It is trying to teach you how to live a whole life.',
    },
    {
      id: 'democratisation',
      number: '7',
      tabLabel: 'Epic, story & song',
      title: 'The democratisation of wisdom',
      paragraphs: [
        'So far this is a tradition of specialists, conducted largely in Sanskrit. The genius of the next phase is that it gave the same wisdom to <em>everyone.</em> The <strong>Itihāsa</strong> — the two epics, <strong>Rāmāyaṇa</strong> and <strong>Mahābhārata</strong> — and the <strong>Purāṇas</strong> took the abstractions of philosophy and dissolved them into story, so that a farmer who would never read the Upaniṣads could absorb their ethics over a lifetime of evenings. Inside the Mahābhārata sits the <strong>Bhagavad-gītā</strong>, which gathers the rival paths — action, knowledge, devotion — and shows they are one mountain climbed from different sides.',
        'Then, from around the sixth century, came the <strong>Bhakti</strong> movements — the moral high point of the whole story. The Ālvārs and Nāyanārs in the Tamil south, the Vārkarī tradition in Maharashtra, the Sants of the north, all made the same revolutionary move: they sang of the divine <strong>in the language of ordinary people</strong>, and declared that liberation was open to all — regardless of caste, of gender, of learning. In Maharashtra, <strong>Dnyaneshwar</strong> poured the Sanskrit Gītā into living Marathi so that his neighbours could drink from it; <strong>Tukaram</strong>, <strong>Janabai</strong> and <strong>Namdev</strong> turned the highest metaphysics into songs you could sing while grinding grain.',
        'This is what “progressive and enriching” actually looks like in history: a body of knowledge that began as the closely guarded property of a priesthood, and over two thousand years deliberately handed itself down — to the philosopher, then to the storyteller’s audience, then to the unlettered devotee singing in her own tongue.',
      ],
      pullQuote: 'The arc is Sanskrit → vernacular → everyone. This is the emotional core of the library.',
    },
    {
      id: 'golden',
      number: '8',
      tabLabel: 'Golden age & re-reading',
      title: 'The scientific golden age, and the long re-reading',
      paragraphs: [
        'Two final movements complete the tree. During the same classical and early-medieval centuries, the abstract love of number matured into a <strong>golden age of mathematics and astronomy</strong>. Āryabhaṭa proposed that the earth turns; Brahmagupta gave the world its rules for zero and negative numbers; Bhāskara wrote of the infinitely small; and the <strong>Kerala school</strong>, centuries before Newton, summed infinite series for the trigonometric functions. The decimal place-value system and the numeral for zero — arguably India’s single largest gift to the practical life of every human being now alive — flowed out from here to the Arab world and then to Europe.',
        'And then, under colonial rule and after, came the <strong>modern re-reading</strong> — Rammohan Roy, Vivekananda, Tagore, Aurobindo, Gandhi, Ambedkar, Krishnamurti — thinkers who took the entire inherited corpus and read it again, critically, for a new age: keeping what gives life, challenging what does not. That re-reading is not the end of the tradition. It is simply its latest branch, and it proves the thing this whole map has been arguing: <strong>the tree is still growing.</strong>',
      ],
      pullQuote: 'The modern thinkers are participants in the same conversation, not a break from it.',
    },
  ],

  conclusion: {
    title: 'Why it kept enriching human life',
    intro: 'If you take only four things from this, let them be these.',
    threads: [
      {
        label: 'One — knowledge was never cut off from life.',
        text: 'Geometry served the altar, medicine served the body, ethics served the village. Even the most rarefied metaphysics was meant to be <em>practised</em>, not merely believed. A tradition built this way does not produce knowledge that gathers dust.',
      },
      {
        label: 'Two — it advanced by argument, not by decree.',
        text: 'From Gārgī’s questions to the open debating halls of the classical schools to the materialists who denied the afterlife, disagreement was the engine. The corpus is large precisely because it refused to settle.',
      },
      {
        label: 'Three — it kept opening its doors.',
        text: 'The long movement from priestly Sanskrit to the devotional song of an unlettered saint is one of the great democratisations of wisdom in world history — and it happened from within, by choice.',
      },
      {
        label: 'Four — it held the whole human being in view.',
        text: 'Prosperity, pleasure, ethics and freedom each got their own science. The aim was never renunciation alone, nor success alone, but a life lived fully on every level at once — which is, in the end, simply another word for happiness.',
      },
    ],
  },

  closing: 'That is the invitation of this library. Not a museum of a finished past, but the living record of people who asked the largest questions they could, refused easy answers, and passed the conversation forward — to us.',

  guideBridge: 'Here is how to explore it.',
  guideEyebrow: 'How to explore',
};
