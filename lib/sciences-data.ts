// C1 — Sciences with Real Mathematics (IMPLEMENTATION_PLAN.md Part C1).
// Each item shows the actual mathematics, not just a claim about it.
// Renders with inline SVG (components/figures) + Unicode — no KaTeX/MathJax,
// keeping the static export lean.

export type MathBlock = {
  heading: string;
  body: string[];
  figure?: string; // key into FIGURES in components/figures/ScienceFigures.tsx
};

export type ScienceItem = {
  id: string;
  title: string;
  deva: string;
  epithet: string;
  era: string;
  tldr: string;
  narrative: string[];
  theMath: MathBlock[];
  source: { text: string; trans: string; citation: string };
  interactive?: 'kuttaka' | 'madhava';
};

export const SCIENCES: ScienceItem[] = [
  {
    id: 'shulba',
    title: 'Śulba-sūtras',
    deva: 'शुल्बसूत्राणि',
    epithet: '√2 to five decimal places, by hand',
    era: '~800–600 BCE',
    tldr: 'A verse that computes √2 accurate to five decimal places, eleven centuries before decimal fractions existed anywhere.',
    narrative: [
      'The Śulba-sūtras are manuals for building Vedic fire-altars to exact geometric specification — practical geometry in service of ritual. Baudhāyana, their oldest surviving author, needed the diagonal of a unit square: the value we call √2. What he gives is not a measurement but a computed approximation, built as a sum of fractions with no concept of a decimal point to help him.',
      'The rule is a nested correction: start with 1, add a third, add a further correction of a third of a quarter, then subtract a small remainder. Each term refines the last. The result is correct to five decimal places — a level of precision that would not be bettered in the Mediterranean world for another thousand years.',
    ],
    theMath: [
      {
        heading: 'The rule, decoded',
        body: [
          'Baudhāyana\'s instruction, verse by verse: increase the side by a third; increase that by a fourth of the third, less a thirty-fourth of that fourth.',
          '1 + 1/3 + 1/(3·4) − 1/(3·4·34) = 1 + 0.333333 + 0.083333 − 0.002451 = 1.4142157',
          'The true value of √2 is 1.4142136. Baudhāyana\'s figure matches it through five decimal places (1.41421…) before diverging at the sixth — an error of about two parts in a million, reached with three fractions and no positional decimal notation.',
        ],
        figure: 'sqrtTwo',
      },
    ],
    source: {
      text: 'samasya dvikaraṇī | pramāṇaṃ tṛtīyena vardhayet tac ca caturthenātma-catustriṃśonena saviśeṣaḥ',
      trans: '"The diagonal of a square [in relation to its side]: the measure is to be increased by its third, and this again by its own fourth, less the thirty-fourth part of that fourth — this is the value, with a small excess."',
      citation: 'Baudhāyana Śulba-sūtra 1.61',
    },
  },
  {
    id: 'altar-geometry',
    title: 'Circling the Square',
    deva: 'वर्ग-वृत्त-समीकरणम्',
    epithet: 'The vedi problem: two altars, one area',
    era: '~800–600 BCE',
    tldr: 'A working construction for turning a square altar into a circular one of equal area — off by under 2%, using only a straightedge and a length of cord.',
    narrative: [
      'A recurring problem in altar-building: a square altar and a circular altar are both required at different stages of a rite, and their areas must match exactly — no shortfall in the offering. This is a version of the ancient "squaring the circle" problem, and the Śulba-sūtras answer it with a direct, buildable construction rather than a formal proof.',
      'The method starts from the square\'s half-diagonal and adjusts it by a third of the excess over the half-side. The result is a radius that gives a circle whose area is startlingly close to the square\'s — accurate enough that no priest supervising the actual construction would ever notice the gap.',
    ],
    theMath: [
      {
        heading: 'The construction',
        body: [
          'For a square of side a: take half the side (a/2) and half the diagonal (a√2/2 ≈ 0.7071a). The prescribed radius is r = a/2 + (a√2/2 − a/2)/3.',
          'For a = 1: r = 0.5 + (0.7071 − 0.5)/3 = 0.5 + 0.0690 = 0.5690.',
          'Circle area = πr² = π × 0.3238 = 1.0173 — against a square area of exactly 1. The error is under 2%. Run the arithmetic backward and this construction implicitly treats π as ≈ 3.088, a value good enough for load-bearing masonry, if not for a modern proof.',
        ],
        figure: 'altarSquareCircle',
      },
    ],
    source: {
      text: '(rule for circling the square, Baudhāyana Śulba-sūtra 2.9, paraphrased from the Sanskrit)',
      trans: '"If you wish to turn a square into a circle: [draw the diagonal;] the circle is described with a cord equal to the half-side plus a third of the excess of the half-diagonal over the half-side."',
      citation: 'Baudhāyana Śulba-sūtra 2.9',
    },
  },
  {
    id: 'pingala',
    title: 'Piṅgala\'s Combinatorics',
    deva: 'पिङ्गल-छन्दःसूत्राणि',
    epithet: 'Binary numbers and Pascal\'s triangle, from poetry',
    era: '~3rd–2nd c. BCE',
    tldr: 'Counting Sanskrit verse-metres led Piṅgala to binary representation, the binomial triangle, and the Fibonacci recurrence — all two thousand years early.',
    narrative: [
      'Piṅgala\'s Chanda-sūtra is a manual of Sanskrit prosody: it classifies verse-metres built from light (laghu) and heavy (guru) syllables. To answer "how many distinct metres of length n exist?" Piṅgala had to invent, in compressed sūtra form, the core machinery of combinatorics — machinery that happens to be identical to work rediscovered independently in early-modern Europe.',
      'Three results fall out of the same counting problem: representing a number as a string of two symbols is binary notation; counting metres by how many guru syllables they contain builds the triangle of binomial coefficients; and counting metres by total syllabic weight (laghu = 1 unit, guru = 2 units) produces exactly the Fibonacci sequence.',
    ],
    theMath: [
      {
        heading: 'The mātrā-meru (Pascal\'s triangle)',
        body: [
          'Piṅgala\'s "mountain of syllable-counts" tabulates, row by row, how many n-syllable metres contain exactly k guru syllables. Row n, position k is the binomial coefficient C(n, k) — identical to the triangle attributed to Pascal roughly 1,800 years later.',
          'Row 0: 1 · Row 1: 1 1 · Row 2: 1 2 1 · Row 3: 1 3 3 1 · Row 4: 1 4 6 4 1 — each entry the sum of the two above it, exactly as in the later European construction.',
        ],
        figure: 'meruTriangle',
      },
      {
        heading: 'Binary notation, before "binary"',
        body: [
          'Piṅgala gives an explicit procedure to convert any count into a sequence of two symbols — precisely the algorithm for binary representation, applied to laghu/guru rather than 0/1.',
          'Example: the number 13 converts to 1101 in binary (8+4+0+1). Read as syllables: guru-guru-laghu-guru. The mechanism — repeated halving, recording the remainder — is the one every computer still runs today.',
        ],
      },
      {
        heading: 'The Fibonacci recurrence',
        body: [
          'Counting metres of total weight n (laghu = 1 mātrā, guru = 2 mātrā) gives M(n) = M(n−1) + M(n−2) — a metre of weight n either ends in a laghu (leaving a weight-(n−1) metre before it) or a guru (leaving weight n−2).',
          'M(1)=1, M(2)=2, M(3)=3, M(4)=5, M(5)=8, M(6)=13 — the Fibonacci sequence, stated in Piṅgala\'s sūtra and made fully explicit by the commentator Virahāṅka roughly a thousand years before Fibonacci\'s Liber Abaci (1202).',
        ],
      },
    ],
    source: {
      text: 'dvirardhe | rūpe śūnyam | (chandaḥ-sūtra 8.28–8.34, paraphrased)',
      trans: '"[To find the count:] on an even [remaining length], double; on a unit, [start from] one." — the terse halving-and-doubling algorithm underlying both the binary conversion and the meru construction.',
      citation: 'Piṅgala, Chanda-sūtra, chapter 8',
    },
  },
  {
    id: 'aryabhata',
    title: 'Āryabhaṭa',
    deva: 'आर्यभट',
    epithet: 'π to four decimal places, and a rotating earth',
    era: '476 – c. 550 CE',
    tldr: 'One 23-year-old, 121 verses: a value of π correct to four decimals, a 24-entry sine table, and the plain statement that the earth spins.',
    narrative: [
      'The Āryabhaṭīya (499 CE) is barely long enough to be called a book — 121 verses — and yet it contains a complete arithmetic, trigonometry and astronomy. Āryabhaṭa was twenty-three when he wrote it, and dates his own work in the text, which is why he is the first Indic mathematician historians can place with confidence.',
      'Two results stand out. He states, and is honest about the fact that it is an approximation (āsanna), a value of π good to four decimal places — arrived at without any of the infinite-series machinery later Kerala mathematicians would use. And he builds a 24-value table of the sine function, coining the term jyā for it — a word that travelled through Arabic jaib into Latin sinus, and from there into English as "sine."',
    ],
    theMath: [
      {
        heading: 'π, decoded from the verse',
        body: [
          'Āryabhaṭa\'s instruction: add four to one hundred, multiply by eight, then add sixty-two thousand. The result is approximately the circumference of a circle of diameter twenty thousand.',
          '(100 + 4) × 8 + 62,000 = 832 + 62,000 = 62,832. Divide by the diameter: 62,832 / 20,000 = 3.1416 — correct to four decimal places (true π = 3.14159265…).',
        ],
        figure: 'sineTable',
      },
      {
        heading: 'The sine table (jyā)',
        body: [
          'Āryabhaṭa tabulates the sine function at 24 points, 3.75° apart, covering a quarter-circle from 0° to 90° — the first such table anywhere. Modern trigonometric tables are direct descendants of this one.',
        ],
      },
    ],
    source: {
      text: 'caturadhikaṃ śatamaṣṭaguṇaṃ dvāṣaṣṭistathā sahasrāṇām | ayutadvayaviṣkambhasyāsanno vṛttapariṇāhaḥ ||',
      trans: '"Add four to one hundred, multiply by eight, and then add sixty-two thousand: the result is approximately [āsanna] the circumference of a circle of which the diameter is twenty thousand."',
      citation: 'Āryabhaṭīya, Gaṇitapāda, verse 10',
    },
  },
  {
    id: 'brahmagupta',
    title: 'Brahmagupta',
    deva: 'ब्रह्मगुप्त',
    epithet: 'The rules of zero, spelled out for the first time',
    era: 'c. 598 – 668 CE',
    tldr: 'The first known complete set of arithmetic rules for zero and negative numbers, plus an exact formula for the area of any cyclic quadrilateral.',
    narrative: [
      'Every arithmetic rule involving zero and negative numbers that a student learns today — a negative times a negative is a positive, a debt subtracted from nothing is a debt — was written down, completely and for the first time anywhere, by Brahmagupta in 628 CE. He calls positive numbers "fortunes" (dhana), negative numbers "debts" (ṛṇa), and zero "the empty" (śūnya), and lays out how each behaves under addition, subtraction, multiplication and division.',
      'He also solved a much older geometric problem: given the four sides of a quadrilateral inscribed in a circle, find its area without knowing the angles. His formula, still called Brahmagupta\'s theorem, does exactly that — and reduces to Heron\'s ancient formula for the triangle as a special case.',
    ],
    theMath: [
      {
        heading: 'Arithmetic with zero and debts',
        body: [
          'A debt minus zero is a debt; a fortune minus zero is a fortune; zero minus zero is zero. A debt subtracted from zero is a fortune; a fortune subtracted from zero is a debt.',
          'The product of two fortunes, or two debts, is a fortune; the product of a fortune and a debt is a debt. In modern notation: (−a)×(−b) = ab — stated as a general rule fourteen centuries ago, alongside the one famous slip: Brahmagupta gives 0/0 = 0, which is not correct by modern convention.',
        ],
      },
      {
        heading: 'The cyclic quadrilateral',
        body: [
          'For a quadrilateral with sides a, b, c, d inscribed in a circle, and semi-perimeter s = (a+b+c+d)/2, the area is exactly √[(s−a)(s−b)(s−c)(s−d)].',
          'Shrink one side to zero and this collapses to Heron\'s formula for a triangle\'s area — Brahmagupta\'s result is the more general case, proved a millennium before it appears in European geometry.',
        ],
        figure: 'cyclicQuad',
      },
    ],
    source: {
      text: 'ṛṇaṃ ṛṇāt śodhyaṃ dhanaṃ dhanāt tayor viyuti-śeṣam | ... śūnya-vihīnaṃ dhanam ṛṇam ṛṇam eva',
      trans: '"A debt subtracted from a debt, or a fortune from a fortune, is their difference... a fortune diminished by zero is a fortune, a debt diminished by zero is a debt."',
      citation: 'Brāhma-sphuṭa-siddhānta 18.30–33',
    },
  },
  {
    id: 'bhaskara',
    title: 'Bhāskara II',
    deva: 'भास्कराचार्य',
    epithet: 'The pulverizer: solving equations with no unique answer',
    era: '1114 – c. 1185 CE',
    tldr: 'A step-by-step algorithm — the kuṭṭaka, "the pulverizer" — for solving equations that have infinitely many whole-number solutions, and finding the smallest one.',
    narrative: [
      'Some problems are genuinely underdetermined: "find a number that leaves remainder 6 when divided by 15, and remainder 3 when divided by 11" has infinitely many answers, spaced regularly apart. The kuṭṭaka — literally "the pulverizer," refined by Āryabhaṭa and brought to its classical form by Bhāskara II in his Bījagaṇita — finds the smallest one, by repeatedly dividing the two numbers into each other until nothing is left, then reconstructing the answer on the way back up.',
      'The method is a close cousin of the Euclidean algorithm for the greatest common divisor, run in reverse to build a solution rather than just a remainder. It is exactly what the Chinese Remainder Theorem solves in a different guise — worked out independently, and applied routinely, centuries earlier.',
    ],
    theMath: [
      {
        heading: 'Try it: the pulverizer, step by step',
        body: [
          'Problem: find the smallest whole number that leaves remainder 6 when divided by 15, and remainder 3 when divided by 11.',
          'Tap to see Bhāskara\'s method work through it — the mutual division ladder, and the answer it builds.',
        ],
        figure: 'kuttakaLadder',
      },
    ],
    source: {
      text: 'kuṭṭākāraḥ | anyonya-bhājita-rāśyoḥ śeṣāṇāṃ ... labdhaṃ pūrva-guṇākāraḥ',
      trans: '"The pulverizer: divide the two given quantities mutually [as in finding their gcd]; the quotients obtained are then used, in reverse order, to reconstruct the multiplier that solves the equation."',
      citation: 'Bhāskarācārya, Bījagaṇita, Kuṭṭaka chapter',
    },
    interactive: 'kuttaka',
  },
  {
    id: 'kerala',
    title: 'Mādhava & the Kerala School',
    deva: 'माधव · केरल-गणित-सम्प्रदायः',
    epithet: 'An infinite series for π, two centuries before Leibniz',
    era: '14th–16th c. CE',
    tldr: 'The exact infinite series for π that Europe would credit to Leibniz — derived, proved, and numerically refined in Kerala two hundred years earlier.',
    narrative: [
      'Mādhava of Saṅgamagrāma (c. 1340–1425) and the lineage of mathematicians who followed him — Parameśvara, Nīlakaṇṭha, and Jyeṣṭhadeva, who wrote it all up in the 1530 Yuktibhāṣā — derived infinite-series expansions for sine, cosine, and the arctangent function. Set θ = 1 in the arctangent series and it collapses to a beautifully simple formula for π.',
      'The series converges slowly — reaching a good approximation from raw partial sums alone takes a great many terms. What is remarkable is that Mādhava did not stop there: the Yuktibhāṣā works out correction terms for the tail of the series, converting a slow trickle of digits into a fast, controlled approximation. The 1530 Yuktibhāṣā is also the first surviving mathematical text written in prose, in a vernacular (Malayalam), rather than terse Sanskrit sūtra-verse.',
    ],
    theMath: [
      {
        heading: 'The series',
        body: [
          'π/4 = 1 − 1/3 + 1/5 − 1/7 + 1/9 − 1/11 + …',
          'Multiply both sides by 4 and the partial sums should approach π = 3.14159265… Watch how slowly, term by term, below.',
        ],
        figure: 'madhavaSeries',
      },
    ],
    source: {
      text: 'vyāse vāridhi-nihate rūpahṛte vyāsa-sāgarābdhihate | rūpādi-viṣama-saṅkhyā-bhaktam ṛṇaṃ svaṃ pṛthak kramāt kuryāt ||',
      trans: '"Multiply the diameter by four and divide by one; then multiply the diameter by four and divide successively by the odd numbers three, five, seven…, alternately subtracting and adding, to get a close approximation to the circumference."',
      citation: 'Attributed to Mādhava, preserved in Nīlakaṇṭha\'s Tantrasaṅgraha and Jyeṣṭhadeva\'s Yuktibhāṣā',
    },
    interactive: 'madhava',
  },
];
