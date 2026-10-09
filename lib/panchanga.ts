// Vikram Samvat panchanga computation, built on top of mhah-panchang.
// Returns bilingual (EN + MR) labels for tithi, paksha, masa, vara, and samvat year.
//
// The lunar month follows the amānta reckoning (see amantaMasa).

import { MhahPanchang } from 'mhah-panchang';

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

export type PanchangaPart = { en: string; mr: string };

// The twelve lunar months in order from Caitra.
const LUNAR_MONTHS: PanchangaPart[] = [
  { en: 'Caitra',     mr: 'चैत्र' },
  { en: 'Vaiśākha',   mr: 'वैशाख' },
  { en: 'Jyeṣṭha',    mr: 'ज्येष्ठ' },
  { en: 'Āṣāḍha',     mr: 'आषाढ' },
  { en: 'Śrāvaṇa',    mr: 'श्रावण' },
  { en: 'Bhādrapada', mr: 'भाद्रपद' },
  { en: 'Āśvina',     mr: 'आश्विन' },
  { en: 'Kārtika',    mr: 'कार्तिक' },
  { en: 'Mārgaśīrṣa', mr: 'मार्गशीर्ष' },
  { en: 'Pauṣa',      mr: 'पौष' },
  { en: 'Māgha',      mr: 'माघ' },
  { en: 'Phālguna',   mr: 'फाल्गुन' },
];

const RAD = Math.PI / 180;
const norm360 = (x: number) => ((x % 360) + 360) % 360;
const norm180 = (x: number) => norm360(x + 180) - 180;
const centuries = (date: Date) => (date.getTime() / 86400000 + 2440587.5 - 2451545.0) / 36525;

// Low-precision solar and lunar longitudes (Meeus' truncated series). They are good to a few arc-minutes
// for the Sun and about 0.2° for the Moon, so a new moon is placed within roughly half an hour. That is
// ample here: the month is decided by which day a new moon or a saṅkrānti falls on.
function sunTropicalLongitude(date: Date): number {
  const T = centuries(date);
  const L0 = 280.46646 + 36000.76983 * T;
  const M = (357.52911 + 35999.05029 * T) * RAD;
  const C = (1.914602 - 0.004817 * T) * Math.sin(M) + 0.019993 * Math.sin(2 * M) + 0.000289 * Math.sin(3 * M);
  return norm360(L0 + C);
}

function moonTropicalLongitude(date: Date): number {
  const T = centuries(date);
  const L = 218.3164477 + 481267.88123421 * T;
  const D = (297.8501921 + 445267.1114034 * T) * RAD;
  const M = (357.5291092 + 35999.0502909 * T) * RAD;
  const Mp = (134.9633964 + 477198.8675055 * T) * RAD;
  const F = (93.272095 + 483202.0175233 * T) * RAD;
  const lon =
    L +
    6.288774 * Math.sin(Mp) +
    1.274027 * Math.sin(2 * D - Mp) +
    0.658314 * Math.sin(2 * D) +
    0.213618 * Math.sin(2 * Mp) -
    0.185116 * Math.sin(M) -
    0.114332 * Math.sin(2 * F) +
    0.058793 * Math.sin(2 * D - 2 * Mp) +
    0.057066 * Math.sin(2 * D - M - Mp) +
    0.053322 * Math.sin(2 * D + Mp) +
    0.045758 * Math.sin(2 * D - M) -
    0.040923 * Math.sin(M - Mp) -
    0.034720 * Math.sin(D) -
    0.030383 * Math.sin(M + Mp);
  return norm360(lon);
}

// Lahiri ayanāṃśa (about 24.2° in 2026).
const sunSiderealLongitude = (date: Date) => norm360(sunTropicalLongitude(date) - (23.853 + 0.013969 * centuries(date) * 100));

// Moon minus Sun, in degrees (-180..180]; it passes through zero at a new moon.
const elongation = (date: Date) => norm180(moonTropicalLongitude(date) - sunTropicalLongitude(date));

// The new moon nearest to `guess`, refined by Newton steps on the elongation (the Moon gains about 12° a day).
function newMoonNear(guess: Date): Date {
  let ms = guess.getTime();
  for (let i = 0; i < 6; i++) ms -= (elongation(new Date(ms)) / 12.19) * 86400000;
  return new Date(ms);
}

// The lunar month by the amānta reckoning used in Maharashtra: a month runs from one new moon to the
// next, and takes its name from the solar sign the Sun is in when it begins (Caitra begins with the Sun
// in Mīna). A month that begins and ends in the same sign has no saṅkrānti and is the adhika (leap)
// month. mhah-panchang's own month name does not follow this rule, so only its tithis are used here.
function amantaMasa(date: Date): PanchangaPart & { isAdhik: boolean } {
  const DAY = 86400000;
  // Elongation measured forward from the last new moon says how long ago it was.
  const sinceNew = (((elongation(date) % 360) + 360) % 360) / 12.19;
  let start = newMoonNear(new Date(date.getTime() - sinceNew * DAY));
  if (start.getTime() > date.getTime()) start = newMoonNear(new Date(start.getTime() - 29.53 * DAY));
  let end = newMoonNear(new Date(start.getTime() + 29.53 * DAY));
  if (end.getTime() <= date.getTime()) {
    start = end;
    end = newMoonNear(new Date(start.getTime() + 29.53 * DAY));
  }

  const r1 = Math.floor(sunSiderealLongitude(start) / 30);
  const r2 = Math.floor(sunSiderealLongitude(end) / 30);
  return { ...LUNAR_MONTHS[(r1 + 1) % 12], isAdhik: r1 === r2 };
}

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
  const c = p.calculate(date);

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

  // Masa (amānta) with leap (adhik) detection
  const base = amantaMasa(date);
  const masa = {
    en: base.isAdhik ? `Adhika ${base.en}` : base.en,
    mr: base.isAdhik ? `अधिक ${base.mr}` : base.mr,
    isAdhik: base.isAdhik,
  };

  // Vikram Samvat year
  const samvatNum = computeSamvatYear(date);
  const samvat: PanchangaPart = {
    en: String(samvatNum),
    mr: devNum(samvatNum),
  };

  return { tithi, paksha, masa, vara, samvat };
}
