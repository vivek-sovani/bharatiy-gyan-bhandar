// Maps the design's flat `*.html` links onto clean Next.js routes.

import type { Section } from './data';

// A section's page lives at /<id>/ (e.g. /vedas/, /upanishads/).
export function sectionPath(section: Pick<Section, 'id' | 'href'>): string {
  // Prefer the explicit href if present (strip the .html the prototype used).
  if (section.href) return '/' + section.href.replace(/\.html$/, '') + '/';
  return '/' + section.id + '/';
}

// Knowledge-tree leaf nodes map onto the section pages they belong to.
const TREE_NODE_ROUTE: Record<string, string> = {
  rig: '/vedas/',
  yajur: '/vedas/',
  sama: '/vedas/',
  atharva: '/vedas/',
  upani: '/upanishads/',
  vedang: '/vedangas/',
  upaved: '/upavedas/',
  darsh: '/darshanas/',
  itih: '/itihasa/',
  puran: '/puranas/',
  agam: '/agamas/',
  dharma: '/dharmashastra/',
  artha: '/arthashastra/',
  kavya: '/kavya/',
  subhash: '/subhashita/',
  science: '/sciences/',
  bhakti: '/bhakti/',
  nastika: '/nastika-darshanas/',
  parallel: '/parallel/',
  modern: '/modern/',
};

export function treeNodePath(id: string): string | null {
  return TREE_NODE_ROUTE[id] || null;
}
