// Vikram Samvat panchanga computation, built on top of mhah-panchang.
// Returns bilingual (EN + MR) labels for tithi, paksha, masa, vara, and samvat year.
//
// Uses Ujjain coordinates — the canonical reference point for Vikram Samvat
// (Mahakaleshwar / Vikramaditya) — for the sunrise-anchored Masa calculation.

import { MhahPanchang } from 'mhah-panchang';

// Ujjain (Mahakaleshwar) — canonical reference for Vikram era
const UJJAIN_LAT = 23.1765;
const UJJAIN_LNG = 75.7885;

// Tithi names — keyed by mhah-panchang's name_en_IN, which uses Telugu-style
// names (Padyami, Vidhiya, Thadiya, …) without a paksha prefix. We map each to
// its standard Sanskrit transliteration and Marathi Devanāgarī. A few Sanskrit
// aliases are kept too in case the library output ever changes.
const TITHI_NAMES: Record<string, { en: string; mr: string }> = {
  // mhah-panchang names (name_en_IN)
  Padyami:     { en: 'Pratipadā',   mr: 'प्रतिपदा' },
  Vidhiya:     { en: 'Dvitīyā',     mr: 'द्वितीया' },
  Thadiya:     { en: 'Tṛtīyā',      mr: 'तृतीया' },
  Chavithi:    { en: 'Caturthī',    mr: 'चतुर्थी' },
  Chaviti:     { en: 'Caturthī',    mr: 'चतुर्थी' },
  Panchami:    { en: 'Pañcamī',     mr: 'पंचमी' },
  Shasti:      { en: 'Ṣaṣṭhī',      mr: 'षष्ठी' },
  Sapthami:    { en: 'Saptamī',     mr: 'सप्तमी' },
  Ashtami:     { en: 'Aṣṭamī',      mr: 'अष्टमी' },
  Navami:      { en: 'Navamī',      mr: 'नवमी' },
  Dasami:      { en: 'Daśamī',      mr: 'दशमी' },
  Ekadasi:     { en: 'Ekādaśī',     mr: 'एकादशी' },
  Dvadasi:     { en: 'Dvādaśī',     mr: 'द्वादशी' },
  Trayodasi:   { en: 'Trayodaśī',   mr: 'त्रयोदशी' },
  Chaturdasi:  { en: 'Caturdaśī',   mr: 'चतुर्दशी' },
  Punnami:     { en: 'Pūrṇimā',     mr: 'पौर्णिमा' },
  Amavasya:    { en: 'Amāvāsyā',    mr: 'अमावस्या' },
  // Sanskrit aliases (defensive)
  Prathama:    { en: 'Pratipadā',   mr: 'प्रतिपदा' },
  Pratipada:   { en: 'Pratipadā',   mr: 'प्रतिपदा' },
  Dvitiya:     { en: 'Dvitīyā',     mr: 'द्वितीया' },
  Tritiya:     { en: 'Tṛtīyā',      mr: 'तृतीया' },
  Chaturthi:   { en: 'Caturthī',    mr: 'चतुर्थी' },
  Sasthi:      { en: 'Ṣaṣṭhī',      mr: 'षष्ठी' },
  Saptami:     { en: 'Saptamī',     mr: 'सप्तमी' },
  Astami:      { en: 'Aṣṭamī',      mr: 'अष्टमी' },
  Purnima:     { en: 'Pūrṇimā',     mr: 'पौर्णिमा' },
  Pournami:    { en: 'Pūrṇimā',     mr: 'पौर्णिमा' },
};

// Vāra (day of week) — keyed by mhah-panchang's English name
const VARA_NAMES: Record<string, { en: string; mr: string }> = {
  Sunday:    { en: 'Ravivāra',   mr: 'रविवार' },
  Monday:    { en: 'Somavāra',   mr: 'सोमवार' },
  Tuesday:   { en: 'Maṅgaḷavāra', mr: 'मंगळवार' },
  Wednesday: { en: 'Budhavāra',  mr: 'बुधवार' },
  Thursday:  { en: 'Guruvāra',   mr: 'गुरुवार' },
  Friday:    { en: 'Śukravāra',  mr: 'शुक्रवार' },
  Saturday:  { en: 'Śanivāra',   mr: 'शनिवार' },
};

// Hindu lunar months — keyed by mhah-panchang's name_en_IN
const MASA_NAMES: Record<string, { en: string; mr: string; gregorianStart: number }> = {
  Chaitra:    { en: 'Caitra',     mr: 'चैत्र',     gregorianStart: 3 },  // ~March-April
  Vaisakha:   { en: 'Vaiśākha',   mr: 'वैशाख',     gregorianStart: 4 },
  Jyestha:    { en: 'Jyeṣṭha',    mr: 'ज्येष्ठ',    gregorianStart: 5 },
  Ashadha:    { en: 'Āṣāḍha',     mr: 'आषाढ',     gregorianStart: 6 },
  Sravana:    { en: 'Śrāvaṇa',    mr: 'श्रावण',    gregorianStart: 7 },
  Bhadrapada: { en: 'Bhādrapada', mr: 'भाद्रपद',   gregorianStart: 8 },
  Ashwina:    { en: 'Āśvina',     mr: 'आश्विन',    gregorianStart: 9 },
  Karthika:   { en: 'Kārtika',    mr: 'कार्तिक',   gregorianStart: 10 },
  Margasira:  { en: 'Mārgaśīrṣa', mr: 'मार्गशीर्ष', gregorianStart: 11 },
  Pausha:     { en: 'Pauṣa',      mr: 'पौष',      gregorianStart: 12 },
  Magha:      { en: 'Māgha',      mr: 'माघ',      gregorianStart: 1 },
  Phalguna:   { en: 'Phālguna',   mr: 'फाल्गुन',   gregorianStart: 2 },
};

function devNum(n: number): string {
  return String(n).replace(/[0-9]/g, (d) => '०१२३४५६७८९'[+d]);
}

// Vikram Samvat year — starts on Chaitra Śukla 1 (typically around 21–25 March).
// Before Chaitra Śukla 1: VS = Gregorian + 56. After: VS = Gregorian + 57.
function computeSamvatYear(date: Date): number {
  const y = date.getFullYear();
  const m = date.getMonth() + 1; // 1..12
  const d = date.getDate();
  // Conservative threshold — Chaitra Śukla 1 always falls between Mar 21 and Apr 19.
  // For dates in this transition window we lean toward the later VS (+57) only after Mar 22.
  if (m > 3) return y + 57;
  if (m === 3 && d >= 22) return y + 57;
  return y + 56;
}

export type PanchangaPart = { en: string; mr: string };

export type PanchangaInfo = {
  tithi: PanchangaPart;
  paksha: PanchangaPart;
  masa: PanchangaPart & { isAdhik: boolean };
  vara: PanchangaPart;
  samvat: PanchangaPart;
};

export function getPanchanga(date: Date = new Date()): PanchangaInfo {
  const p = new MhahPanchang();

  // calculate() is anchored to the actual moment — best for "what tithi is it RIGHT NOW".
  // calendar(lat, lng) is sunrise-anchored at the given location — best for masa + leap-month detection.
  const c = p.calculate(date);
  const cal = p.calendar(date, UJJAIN_LAT, UJJAIN_LNG);

  // Tithi
  const tithiRaw = (c.Tithi?.name_en_IN as string) || '';
  const tithi = TITHI_NAMES[tithiRaw] || { en: tithiRaw, mr: tithiRaw };

  // Paksha — name_en_IN is "Shukla" or "Krishna"
  const pakshaRaw = (c.Paksha?.name_en_IN as string) || '';
  const paksha: PanchangaPart =
    pakshaRaw === 'Shukla'
      ? { en: 'Śukla Pakṣa', mr: 'शुक्ल पक्ष' }
      : { en: 'Kṛṣṇa Pakṣa', mr: 'कृष्ण पक्ष' };

  // Vāra — day of week
  const dayRaw = (c.Day?.name_en_UK as string) || '';
  const vara = VARA_NAMES[dayRaw] || { en: dayRaw, mr: dayRaw };

  // Masa with leap (adhik) detection
  const isAdhik = Boolean(cal.MoonMasa?.isLeapMonth);
  const masaRaw = (cal.MoonMasa?.name_en_IN as string) || (cal.Masa?.name_en_IN as string) || '';
  const masaBase = MASA_NAMES[masaRaw] || { en: masaRaw, mr: masaRaw };
  const masa = {
    en: isAdhik ? `Adhika ${masaBase.en}` : masaBase.en,
    mr: isAdhik ? `अधिक ${masaBase.mr}` : masaBase.mr,
    isAdhik,
  };

  // Vikram Samvat year
  const samvatNum = computeSamvatYear(date);
  const samvat: PanchangaPart = {
    en: String(samvatNum),
    mr: devNum(samvatNum),
  };

  return { tithi, paksha, masa, vara, samvat };
}
