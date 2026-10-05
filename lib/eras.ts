import { SECTIONS } from './data';

// The five groupings used to arrange the collection by period. `all` holds the living
// traditions that don't belong to one era.

export type EraId = 'vedic' | 'classical' | 'medieval' | 'modern' | 'all';

export const ERAS: { id: EraId; en: string; mr: string; dates: { en: string; mr: string }; color: string }[] = [
  { id: 'vedic', en: 'Vedic', mr: 'वैदिक', dates: { en: 'c. 1500–600 BCE', mr: 'इ.स.पू. १५००–६००' }, color: 'var(--ac-vedic)' },
  { id: 'classical', en: 'Classical', mr: 'शास्त्रीय', dates: { en: '600 BCE – 900 CE', mr: 'इ.स.पू. ६०० – इ.स. ९००' }, color: 'var(--ac-classical)' },
  { id: 'medieval', en: 'Medieval', mr: 'मध्ययुगीन', dates: { en: '900 – 1750 CE', mr: 'इ.स. ९०० – १७५०' }, color: 'var(--ac-medieval)' },
  { id: 'modern', en: 'Modern', mr: 'आधुनिक', dates: { en: '1750 CE onward', mr: 'इ.स. १७५० पासून' }, color: 'var(--ac-modern)' },
  { id: 'all', en: 'Across all eras', mr: 'सर्व कालखंडांत', dates: { en: 'Living traditions', mr: 'जिवंत परंपरा' }, color: 'var(--ac-mind)' },
];

// Which era a reading step belongs to: its section's era. Anything outside the 28 sections
// (Living Knowledge pages) belongs to "all".
export function eraOfPath(path: string): EraId {
  const sectionId = path.split('/').filter(Boolean)[0];
  const e = SECTIONS.find((s) => s.id === sectionId)?.era;
  return (ERAS.some((x) => x.id === e) ? e : 'all') as EraId;
}
