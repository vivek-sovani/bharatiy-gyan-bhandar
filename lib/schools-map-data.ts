// Relationships between the darśanas for the Jñāna Map "Schools" view.
// Node content (titles, founders, concepts) comes from darshanas-data / nastika-data;
// this file only holds the arrangement and how the schools relate to each other.

export type SchoolGroup = 'astika' | 'nastika';

export const SCHOOL_PAIRS: { id: string; members: [string, string]; en: string; mr: string }[] = [
  { id: 'logic', members: ['nyaya', 'vaisheshika'], en: 'Logic + Physics', mr: 'तर्क + पदार्थविज्ञान' },
  { id: 'theory', members: ['sankhya', 'yoga'], en: 'Theory + Practice', mr: 'सिद्धांत + साधना' },
  { id: 'veda', members: ['mimamsa', 'vedanta'], en: 'Ritual + Knowledge', mr: 'कर्म + ज्ञान' },
];

export const NASTIKA_SCHOOLS = ['carvaka', 'bauddha', 'jaina'] as const;

export const SCHOOL_GROUP: Record<string, SchoolGroup> = {
  nyaya: 'astika',
  vaisheshika: 'astika',
  sankhya: 'astika',
  yoga: 'astika',
  mimamsa: 'astika',
  vedanta: 'astika',
  carvaka: 'nastika',
  bauddha: 'nastika',
  jaina: 'nastika',
};

export type EdgeKind = 'pair' | 'debate' | 'influence';

export type SchoolEdge = {
  a: string;
  b: string;
  kind: EdgeKind;
  en: string;
  mr: string;
};

export const SCHOOL_EDGES: SchoolEdge[] = [
  {
    a: 'nyaya', b: 'vaisheshika', kind: 'pair',
    en: 'Sister schools: Nyāya supplies the logic and debate, Vaiśeṣika the atomist physics; later fused as Navya-Nyāya.',
    mr: 'भगिनी-दर्शने: न्याय तर्क व वादपद्धती देतो, वैशेषिक परमाणुवादी भौतिकी; पुढे नव्य-न्यायात एकत्र.',
  },
  {
    a: 'sankhya', b: 'yoga', kind: 'pair',
    en: 'Same map of reality (puruṣa and prakṛti, the guṇas); Sāṅkhya gives the theory, Yoga the discipline and a place for Īśvara.',
    mr: 'वास्तवाचा एकच नकाशा (पुरुष-प्रकृती, गुण); सांख्य सिद्धांत देते, योग साधना व ईश्वराला स्थान.',
  },
  {
    a: 'mimamsa', b: 'vedanta', kind: 'pair',
    en: 'Pūrva (earlier) and Uttara (later) Mīmāṃsā: the Veda read as ritual duty, and the same Veda read as knowledge of Brahman.',
    mr: 'पूर्व व उत्तर मीमांसा: वेद कर्तव्यरूप विधी म्हणून, आणि तोच वेद ब्रह्मज्ञान म्हणून.',
  },
  {
    a: 'nyaya', b: 'bauddha', kind: 'debate',
    en: 'Centuries of debate over perception, inference and universals — Dignāga and Dharmakīrti against Uddyotakara and later Naiyāyikas.',
    mr: 'प्रत्यक्ष, अनुमान व सामान्य यांवर शतकानुशतके वाद — दिङ्नाग-धर्मकीर्ती विरुद्ध उद्योतकर व पुढील नैयायिक.',
  },
  {
    a: 'nyaya', b: 'carvaka', kind: 'debate',
    en: 'Cārvāka accepts only perception and rejects inference; Nyāya builds its whole method on defending inference.',
    mr: 'चार्वाक केवळ प्रत्यक्ष मानतो व अनुमान नाकारतो; न्यायाची संपूर्ण पद्धती अनुमानाच्या समर्थनावर उभी आहे.',
  },
  {
    a: 'mimamsa', b: 'bauddha', kind: 'debate',
    en: 'Kumārila and Prabhākara defend the Veda\'s authority and ritual against the Buddhist rejection of both.',
    mr: 'कुमारिल व प्रभाकर वेदप्रामाण्य व यज्ञाचे समर्थन करतात; बौद्ध दोन्ही नाकारतात.',
  },
  {
    a: 'mimamsa', b: 'jaina', kind: 'debate',
    en: 'Jaina ahiṃsā challenges Vedic animal sacrifice; Mīmāṃsā answers by defending the ritual tradition.',
    mr: 'जैन अहिंसा वैदिक पशुयज्ञाला आव्हान देते; मीमांसा यज्ञपरंपरेचे समर्थन करते.',
  },
  {
    a: 'vedanta', b: 'bauddha', kind: 'debate',
    en: 'Ātman against anātman, and Brahman against emptiness (śūnyatā) — a long and mutually shaping dialogue.',
    mr: 'आत्मा विरुद्ध अनात्मा, ब्रह्म विरुद्ध शून्यता — परस्परांना आकार देणारा दीर्घ संवाद.',
  },
  {
    a: 'sankhya', b: 'vedanta', kind: 'influence',
    en: 'Vedānta inherits Sāṅkhya\'s vocabulary (guṇas, puruṣa, prakṛti) while rejecting its dualism — Śaṅkara argues against the pradhāna directly.',
    mr: 'वेदान्त सांख्याची परिभाषा (गुण, पुरुष, प्रकृती) घेतो पण द्वैत नाकारतो — शंकर प्रधानवादाचे थेट खंडन करतात.',
  },
  {
    a: 'yoga', b: 'bauddha', kind: 'influence',
    en: 'Shared meditative technique (dhyāna, samādhi) and ethical restraints; the traditions drew on a common contemplative culture.',
    mr: 'ध्यान, समाधी व नैतिक संयम यांतील समान साधना; दोन्ही परंपरा समान चिंतनशील संस्कृतीतून घडल्या.',
  },
  {
    a: 'yoga', b: 'jaina', kind: 'influence',
    en: 'Yama and niyama echo Jaina vows — ahiṃsā and aparigraha appear in both.',
    mr: 'यम-नियम जैन व्रतांशी जुळतात — अहिंसा व अपरिग्रह दोन्हींत आढळतात.',
  },
];
