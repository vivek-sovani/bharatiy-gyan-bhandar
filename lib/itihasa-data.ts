export type ItihasaConcept = {
  name: string;
  deva: string;
  desc: string;
};

export type ItihasaChapter = {
  name: string;
  desc: string;
};

export type ItihasaVerse = {
  deva: string;
  translit: string;
  trans: string;
  cite: string;
};

export interface ItihasaDetails {
  id: string;
  title: string;
  deva: string;
  author: string;
  verses: string;
  structure: string;
  message: string;
  chapters: ItihasaChapter[];
  concepts: ItihasaConcept[];
  explanation: string[];
  verse: ItihasaVerse;
}

export const ITIHASA_DETAILS: Record<string, ItihasaDetails> = {
  ramayana: {
    id: 'ramayana',
    title: 'Rāmāyaṇa',
    deva: 'रामायण',
    author: 'Sage Vālmīki (Ādi Kavi)',
    verses: '24,000 Verses',
    structure: '7 Kāṇḍas (Books)',
    message: 'Maryādā (Ideal conduct, duty, and righteousness under trial)',
    chapters: [
      { name: 'Bāla Kāṇḍa', desc: 'Recounts the birth and early education of Rāma, his heroic breaking of Śiva\'s bow, and his marriage to Sītā.' },
      { name: 'Ayodhyā Kāṇḍa', desc: 'Focuses on the preparation for Rāma\'s coronation, the court intrigues of Kaikeyī, and Rāma\'s voluntary exile into the forest.' },
      { name: 'Āraṇya Kāṇḍa', desc: 'Describes the forest life of the exiles, their encounters with sages and demons, and the abduction of Sītā by the demon king Rāvaṇa.' },
      { name: 'Kiṣkindhā Kāṇḍa', desc: 'Details the alliance with the Vānara (monkey) kingdom, the slaying of Vālī, and the gathering of troops to search for Sītā.' },
      { name: 'Sundara Kāṇḍa', desc: 'Dedicated to the heroic exploits of Hanumān, his flight to Laṅkā, finding Sītā, and laying waste to Rāvaṇa\'s gardens.' },
      { name: 'Yuddha Kāṇḍa', desc: 'Covers the construction of the ocean bridge, the epic siege of Laṅkā, the slaying of Rāvaṇa, and Rāma\'s triumphant return and coronation.' },
      { name: 'Uttara Kāṇḍa', desc: 'Details the post-war reign, the painful second exile of Sītā, the birth of Lava and Kuśa, and the final departure of the incarnations.' }
    ],
    concepts: [
      { name: 'Maryādā-Puruṣottama', deva: 'मर्यादा पुरुषोत्तम', desc: 'The ideal supreme human who represents the highest standard of moral discipline, filial duty, and righteous kingship.' },
      { name: 'Ādi-Kāvya (First Poem)', deva: 'आदिकाव्य', desc: 'The very first structured and metered poem in Sanskrit, born from Vālmīki\'s spontaneous grief and compassion (Śloka from Śoka).' },
      { name: 'Dharma-Grahaṇa (Duty Realization)', deva: 'धर्मग्रहण', desc: 'The study of how filial, marital, fraternal, and royal duties interact and conflict under intense pressure.' }
    ],
    explanation: [
      'The Rāmāyaṇa, composed by Sage Vālmīki, is celebrated as the Ādi-Kāvya (the first poem) of Indian literature. Spanning 24,000 verses across seven books, it tells the story of Rāma, prince of Ayodhyā, whose life serves as the prototype of ideal human conduct (Maryādā).',
      'The epic is not merely a mythological tale of good defeating evil, but a deep exploration of personal ethics, family bonds, and the duties of a ruler. Rāma chooses exile to uphold his father\'s word, Sītā voluntarily joins him in the wilderness, and Lakṣmaṇa stands as the embodiment of brotherly devotion. The text has been retold across South and Southeast Asia, shaping the cultural identity of millions.'
    ],
    verse: {
      deva: 'तपःस्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ॥',
      translit: 'tapaḥsvādhyāyanirataṃ tapasvī vāgvidāṃ varam |\nnāradaṃ paripapraccha vālmīkirmunipuṅgavam ||',
      trans: 'Sage Vālmīki, devoted to austerity and the study of scripture, inquired of the celestial sage Nārada, the foremost among the eloquent and the chief of sages...',
      cite: 'Rāmāyaṇa · Bāla Kāṇḍa 1.1'
    }
  },
  mahabharata: {
    id: 'mahabharata',
    title: 'Mahābhārata',
    deva: 'महाभारत',
    author: 'Sage Kṛṣṇa Dvaipāyana Vyāsa',
    verses: '100,000+ Verses',
    structure: '18 Parvas (Books)',
    message: 'Dharma-Vigraha (The complex, tragic, and multi-dimensional nature of ethics)',
    chapters: [
      { name: 'Ādi Parva', desc: 'Introduces the origins of the Kuru dynasty, the birth and childhood of the Pāṇḍava and Kaurava princes, and draupadī\'s marriage.' },
      { name: 'Sabhā Parva', desc: 'Details the rising wealth of the Pāṇḍavas, the fateful game of dice engineered by Śakuni, and the subsequent humiliation of Draupadī.' },
      { name: 'Vana Parva', desc: 'The longest book, covering the Pāṇḍavas\' twelve-year exile in the forest, their spiritual trials, and major nested legends.' },
      { name: 'Bhīṣma Parva', desc: 'Covers the first ten days of the war under Bhīṣma\'s command; contains the entire Bhagavad Gītā.' },
      { name: 'Śānti Parva', desc: 'The post-war book of peace, containing the extensive discourse on statecraft, ethics, and liberation given by Bhīṣma on the bed of arrows.' },
      { name: 'Svargārohaṇa Parva', desc: 'Recounts the final pilgrimage of Yudhiṣṭhira and his brothers up the Himālayas, Yudhiṣṭhira\'s test in the underworld, and entry into heaven.' }
    ],
    concepts: [
      { name: 'Dharma-Saṅkaṭa', deva: 'धर्मसङ्कट', desc: 'Ethical dilemmas where two righteous duties conflict (e.g., Bhīṣma\'s oath vs. protecting Draupadī), showing that moral choices are rarely simple.' },
      { name: 'Pañcama Veda (Fifth Veda)', deva: 'पञ्चम वेद', desc: 'The traditional status given to the epic because it translates high Vedic philosophy into narratives accessible to all levels of society.' },
      { name: 'Bhagavad Gītā', deva: 'भगवद्गीता', desc: 'The 700-verse dialogue between Kṛṣṇa and Arjuna on the battlefield of Kurukṣetra, acting as the ultimate synthesis of Jñāna, Karma, and Bhakti Yoga.' }
    ],
    explanation: [
      'The Mahābhārata, attributed to Sage Vyāsa, is the longest epic in world literature, containing over 100,000 verses divided into 18 Parvas. It is a vast narrative universe centered on the devastating Kurukṣetra war between Pandava and Kaurava cousins, serving as an encyclopedia of Indian civilization.',
      'The core theme of the Mahābhārata is the complexity of Dharma (ethics). Unlike the clear-cut morality of the Rāmāyaṇa, the characters in the Mahābhārata are deeply human and flawed, constantly trapped in Dharma-saṅkaṭas (moral dilemmas). Every victory is tainted with tragedy, and every character must bear the consequences of their actions, illustrating the complex karmic fabric of reality.'
    ],
    verse: {
      deva: 'धर्मे चार्थे च कामे च मोक्षे च भरतर्षभ ।\nयदिहास्ति तदन्यत्र यन्नेहास्ति न तत्क्वचित् ॥',
      translit: 'dharme cārthe ca kāme ca mokṣe ca bharatarṣabha |\nyadihāsti tadanyatra yannehāsti na tatkvacit ||',
      trans: 'O bull among the Bhāratas, regarding Dharma, Artha (prosperity), Kāma (pleasure), and Mokṣa (liberation): whatever is found here may be found elsewhere, but what is not here is nowhere else.',
      cite: 'Mahābhārata · Ādi Parva 62.53'
    }
  }
};
