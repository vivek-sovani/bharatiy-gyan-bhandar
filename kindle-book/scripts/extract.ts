// Extracts all lib/*.ts data used by the book build into plain JSON.
// Run with: npx tsx extract.ts   (from this scripts/ directory)
import { writeFileSync, mkdirSync } from 'fs';
import { SECTIONS, TREE, FILTERS } from '../../lib/data';
import { SECTIONS as SECTIONS_MR } from '../../lib/data_mr';
import { SECTION_DETAILS } from '../../lib/section-data';
import { SECTION_DETAILS as SECTION_DETAILS_MR } from '../../lib/section-data_mr';
import { SHAKHAS_DATA, SUKTAS_DATA, BRAHMANAS_DATA, BRAHMANAS_TEACHINGS_DATA, ARANYAKAS_DATA, ARANYAKAS_TEACHINGS_DATA, UPANISHADS_DATA, UPANISHADS_TEACHINGS_DATA } from '../../lib/vedasData';
import { CONCEPTS } from '../../lib/concepts-data';
import { CONCEPTS as CONCEPTS_MR } from '../../lib/concepts-data_mr';
import { CONTRIBUTORS } from '../../lib/contributors-data';
import { CONTRIBUTORS as CONTRIBUTORS_MR } from '../../lib/contributors-data_mr';
import { MAHAVAKYAS } from '../../lib/mahavakya-data';
import { SUBHASHITS } from '../../lib/subhashit-data';
import { INTRO } from '../../lib/intro-data';
import { INTRO as INTRO_MR } from '../../lib/intro-data_mr';
import { JOURNEYS } from '../../lib/journeys-data';
import { JOURNEYS as JOURNEYS_MR } from '../../lib/journeys-data_mr';
import { UPANISHADS_DETAILS } from '../../lib/upanishads-data';
import { UPANISHADS_DETAILS as UPANISHADS_DETAILS_MR } from '../../lib/upanishads-data_mr';
import { DARSHANAS_DETAILS } from '../../lib/darshanas-data';
import { DARSHANAS_DETAILS as DARSHANAS_DETAILS_MR } from '../../lib/darshanas-data_mr';
import { AGAMAS_DETAILS } from '../../lib/agamas-data';
import { AGAMAS_DETAILS as AGAMAS_DETAILS_MR } from '../../lib/agamas-data_mr';
import { ITIHASA_DETAILS } from '../../lib/itihasa-data';
import { ITIHASA_DETAILS as ITIHASA_DETAILS_MR } from '../../lib/itihasa-data_mr';
import { NASTIKA_DETAILS } from '../../lib/nastika-data';
import { NASTIKA_DETAILS as NASTIKA_DETAILS_MR } from '../../lib/nastika-data_mr';
import { PURANAS_DETAILS } from '../../lib/puranas-data';
import { PURANAS_DETAILS as PURANAS_DETAILS_MR } from '../../lib/puranas-data_mr';
import { SCIENCES } from '../../lib/sciences-data';
import { SCIENCES as SCIENCES_MR } from '../../lib/sciences-data_mr';
import { UPAVEDAS_DETAILS } from '../../lib/upavedas-data';
import { UPAVEDAS_DETAILS as UPAVEDAS_DETAILS_MR } from '../../lib/upavedas-data_mr';
import { VEDANGAS_DETAILS } from '../../lib/vedangas-data';
import { VEDANGAS_DETAILS as VEDANGAS_DETAILS_MR } from '../../lib/vedangas-data_mr';
import { LIVING_KNOWLEDGE, LK_DOMAIN_META } from '../../lib/living-knowledge-data';
import { LIVING_KNOWLEDGE as LIVING_KNOWLEDGE_MR, LK_DOMAIN_META as LK_DOMAIN_META_MR } from '../../lib/living-knowledge-data_mr';

mkdirSync('../data', { recursive: true });

const out = {
  SECTIONS, SECTIONS_MR,
  TREE, FILTERS,
  SECTION_DETAILS, SECTION_DETAILS_MR,
  VEDAS_ITEMS: {
    SHAKHAS_DATA, SUKTAS_DATA, BRAHMANAS_DATA, BRAHMANAS_TEACHINGS_DATA,
    ARANYAKAS_DATA, ARANYAKAS_TEACHINGS_DATA, UPANISHADS_DATA, UPANISHADS_TEACHINGS_DATA,
  },
  CONCEPTS, CONCEPTS_MR,
  CONTRIBUTORS, CONTRIBUTORS_MR,
  MAHAVAKYAS, SUBHASHITS,
  INTRO, INTRO_MR,
  JOURNEYS, JOURNEYS_MR,
  UPANISHADS_DETAILS, UPANISHADS_DETAILS_MR,
  DARSHANAS_DETAILS, DARSHANAS_DETAILS_MR,
  AGAMAS_DETAILS, AGAMAS_DETAILS_MR,
  ITIHASA_DETAILS, ITIHASA_DETAILS_MR,
  NASTIKA_DETAILS, NASTIKA_DETAILS_MR,
  PURANAS_DETAILS, PURANAS_DETAILS_MR,
  SCIENCES, SCIENCES_MR,
  UPAVEDAS_DETAILS, UPAVEDAS_DETAILS_MR,
  VEDANGAS_DETAILS, VEDANGAS_DETAILS_MR,
  LIVING_KNOWLEDGE, LK_DOMAIN_META, LIVING_KNOWLEDGE_MR, LK_DOMAIN_META_MR,
};

writeFileSync('../data/site-data.json', JSON.stringify(out, null, 1));
console.log('Wrote ../data/site-data.json');
for (const [k, v] of Object.entries(out)) {
  const n = Array.isArray(v) ? v.length : (v && typeof v === 'object' ? Object.keys(v).length : 'n/a');
  console.log(`  ${k}: ${n}`);
}
