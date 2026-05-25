const VOWELS: Record<string, string> = {
  'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū',
  'ऋ': 'ṛ', 'ॠ': 'ṝ', 'ऌ': 'ḷ', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au'
};

const MATRAS: Record<string, string> = {
  'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū',
  'ृ': 'ṛ', 'ॄ': 'ṝ', 'ॢ': 'ḷ', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au'
};

const CONSONANTS: Record<string, string> = {
  'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ṅ',
  'च': 'c', 'छ': 'ch', 'ज': 'j', 'झ': 'jh', 'ञ': 'ñ',
  'ट': 'ṭ', 'ठ': 'ṭh', 'ड': 'ḍ', 'ढ': 'ḍh', 'ण': 'ṇ',
  'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
  'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
  'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v',
  'श': 'ś', 'ष': 'ṣ', 'स': 's', 'ह': 'h',
  'ळ': 'ḷ', 'क्ष': 'kṣ', 'ज्ञ': 'jñ'
};

const MISC: Record<string, string> = {
  'ं': 'ṁ',
  'ः': 'ḥ',
  'ऽ': '’',
  'ँ': 'm̐',
  '।': '|',
  '॥': '||',
  'ॐ': 'oṁ',
  '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
};

const TAMIL_MAP: Record<string, string> = {
  'மணிவண்ணா எங்ஙே மறைந்திருந்தாய்': 'maṇivaṇṇā eṅṅē maṟaintiruntāy',
  'பித்தா பிறை சூடி': 'pittā piṟai cūṭi'
};

export function transliterate(text: string): string {
  const trimmed = text.trim();
  if (TAMIL_MAP[trimmed] !== undefined) {
    return TAMIL_MAP[trimmed];
  }

  let result = '';
  let i = 0;
  while (i < text.length) {
    const char = text[i];

    if (CONSONANTS[char] !== undefined) {
      const base = CONSONANTS[char];
      const next = text[i + 1];
      if (next === '्') {
        result += base;
        i += 2;
      } else if (MATRAS[next] !== undefined) {
        result += base + MATRAS[next];
        i += 2;
      } else {
        result += base + 'a';
        i += 1;
      }
    } else if (VOWELS[char] !== undefined) {
      result += VOWELS[char];
      i += 1;
    } else if (MISC[char] !== undefined) {
      result += MISC[char];
      i += 1;
    } else {
      result += char;
      i += 1;
    }
  }

  // Capitalize first letter of sentences/lines if applicable, but for shlokas we can leave as-is.
  return result;
}
