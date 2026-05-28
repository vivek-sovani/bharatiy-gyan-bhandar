'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { TREE as TREE_EN } from '@/lib/data';
import { TREE as TREE_MR } from '@/lib/data_mr';
import { treeNodePath } from '@/lib/routes';
import { useLanguage } from '@/lib/LanguageContext';

interface Era {
  id: string;
  label: string;
  deva: string;
  period: string;
  periodDeva: string;
  gloss: string;
  glossDeva: string;
  childrenIds: string[];
}

const ERAS: Era[] = [
  {
    id: 'vedic',
    label: 'Vedic Era',
    deva: 'वैदिक कालखंड',
    period: 'c. 1500 – 500 BCE',
    periodDeva: 'इ.स.पूर्व १५०० – ५००',
    gloss: 'The foundational era of revelation, oral chanting, and linguistic structure.',
    glossDeva: 'सृष्टीचा प्रारंभ, मंत्रांचे सस्वर मौखिक पठण आणि भाषिक नियमांचा पाया घालणारा मूलभूत कालखंड.',
    childrenIds: ['rig', 'yajur', 'sama', 'atharva', 'upaved', 'vedang'],
  },
  {
    id: 'classical',
    label: 'Classical Era',
    deva: 'अभिजात कालखंड',
    period: 'c. 500 BCE – 800 CE',
    periodDeva: 'इ.स.पूर्व ५०० – इ.स. ८००',
    gloss: 'The flowering of philosophy, logic, civil law, statecraft, literature, and temple ritual systems.',
    glossDeva: 'दर्शने, तर्कशास्त्र, नागरिक कायदे, राजधर्म, नाटक-महाकाव्य आणि मंदिर विधी प्रणालींचा सुवर्णकाळ.',
    childrenIds: ['upani', 'nastika', 'artha', 'itih', 'dharma', 'darsh', 'science', 'kavya', 'puran', 'subhash', 'agam'],
  },
  {
    id: 'medieval',
    label: 'Medieval Era',
    deva: 'मध्ययुगीन कालखंड',
    period: 'c. 800 – 1800 CE',
    periodDeva: 'इ.स. ८०० – १८००',
    gloss: 'The shift toward personal devotion, vernacular poetry, and the integration of parallel spiritual lines.',
    glossDeva: 'स्थानिक लोकभाषांमध्ये व्यक्त झालेली वैयक्तिक भक्ती, संतांचे वाङ्मय आणि समांतर आध्यात्मिक मार्गांचा उदय.',
    childrenIds: ['bhakti', 'parallel'],
  },
  {
    id: 'modern',
    label: 'Modern Era',
    deva: 'आधुनिक कालखंड',
    period: 'c. 1800 CE – Present',
    periodDeva: 'इ.स. १८०० – वर्तमान',
    gloss: 'The critical re-reading, interpretation, and revival of the Indic corpus in the modern world.',
    glossDeva: 'आधुनिक जगामध्ये प्राचीन भारतीय ज्ञानप्रणालीचे नवीन संदर्भात केलेले पुनरुज्जीवन आणि विश्लेषण.',
    childrenIds: ['modern'],
  },
];

export default function Timeline() {
  const { lang, t } = useLanguage();
  const [expandedNode, setExpandedNode] = useState<string | null>(null);

  const TREE = lang === 'mr' ? TREE_MR : TREE_EN;
  const allNodes = Object.values(TREE.children).flat();

  const toggleNode = (id: string) => {
    setExpandedNode(expandedNode === id ? null : id);
  };

  return (
    <div className="timeline-container">
      {ERAS.map((era) => {
        const eraTitle = lang === 'mr' ? era.deva : era.label;
        const eraPeriod = lang === 'mr' ? era.periodDeva : era.period;
        const eraGloss = lang === 'mr' ? era.glossDeva : era.gloss;

        return (
          <div key={era.id} className="timeline-era">
            {/* Era Indicator Header */}
            <div className="era-header-card">
              <CornerOrn className="tl" />
              <CornerOrn className="tr" />
              <CornerOrn className="bl" />
              <CornerOrn className="br" />
              <div className="era-meta">
                <span className="era-period">{eraPeriod}</span>
              </div>
              <h3 className="era-title">
                <span className="deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', marginRight: '0.4em' }}>
                  {era.deva}
                </span>
                {era.label}
              </h3>
              <p className="era-desc">{eraGloss}</p>
            </div>

            {/* List of nodes along the vertical line */}
            <div className="era-nodes-list">
              {era.childrenIds.map((childId) => {
                const node = allNodes.find((n) => n.id === childId);
                if (!node) return null;

                const isExpanded = expandedNode === childId;
                const path = treeNodePath(childId);

                return (
                  <div
                    key={childId}
                    className={`timeline-node-item ${isExpanded ? 'is-expanded' : ''}`}
                    onClick={() => toggleNode(childId)}
                  >
                    {/* Visual connection dot to the line */}
                    <div className="node-connector">
                      <div className="connector-dot" />
                    </div>

                    {/* Node details card */}
                    <div className="node-card">
                      <div className="node-header">
                        <div className="node-title-group">
                          <h4 className="node-title">
                            {lang === 'mr' ? node.label : node.label}
                          </h4>
                          <span className="node-deva deva-only">{node.deva}</span>
                        </div>
                        <span className="expand-indicator">{isExpanded ? '▲' : '▼'}</span>
                      </div>

                      {/* Expandable content area */}
                      <div className={`node-body ${isExpanded ? 'show' : ''}`}>
                        <p className="node-gloss">{node.gloss}</p>
                        {path && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <Link href={path} className="node-link">
                              {t('tree.open_page')}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
