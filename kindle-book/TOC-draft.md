# Bhāratīya Jñāna Bhaṇḍāra — the Book
### Draft table of contents (English + Marathi editions, same structure)

Built on the site's own `lib/journeys-data.ts` — the five journeys are lifted directly from
the site (title, Devanāgarī, tagline, audience), extended with a sixth Part so the book runs
all the way to the modern era. Every one of the 28 corpus sections appears exactly once, as a
chapter inside the Part where it reads best; a couple of sections (Gītā, Bhakti) are *introduced*
in one Part and cross-referenced, not duplicated, where a second journey would otherwise revisit them.

Each chapter is built from the site's existing item-level content (`lib/section-data.ts` and
friends) — summaries, opening śloka, explanations, aspects — reflowed into book prose, not
rewritten from scratch. Every chapter closes on a footer verse (a mahāvākya or subhāṣita) that
links to its full explanation, collected in the back matter.

---

**Front matter** — Cover · Title page · Colophon (CC BY-SA 4.0, author) · Table of Contents

**Preface — The Living Tree** *(from `lib/intro-data.ts`, reflowed as the book's origin essay)*

---

## Part I — First Steps · प्रथम पदानि
*The vedic era. No prior knowledge needed.*
1. Śruti & Smṛti — the map
2. The Four Vedas
3. The Upavedas
4. The Six Vedāṅgas
5. The Upaniṣads
6. Bhagavad Gītā
7. Subhāṣita & Nīti
8. Dinacaryā & Living

## Part II — The Philosophy Path · दर्शन-मार्गः
*The six orthodox schools, their split readings, and the case against them.*
9. The Āstika Darśanas
10. Vedānta Schools
11. Philosophy of Language
12. The Nāstika Darśanas *(the loyal opposition)*

## Part III — Stories First · कथा-मार्गः
*All ages, all families — epic, purāṇa, poetry, and the turn to song.*
13. Itihāsa (Rāmāyaṇa & Mahābhārata) *— cross-refs the Gītā, Part I*
14. Purāṇas
15. Kāvya & Nāṭya
16. The Kāvya Poets
17. Bhakti Traditions *(the bridge to Part V)*

## Part IV — The Scientific Mind · विज्ञान-मार्गः
*Mathematics, astronomy, statecraft, and the applied śāstras — on their own terms.*
18. Indic Sciences & Mathematics
19. Dharma-śāstra
20. Artha-śāstra
21. Kāma-śāstra
22. Āgamas & Tantra
23. Tantra & Āgama Texts
24. Yantra & Maṇḍala
25. Rangoli & Ritual Art

## Part V — The Sant Path · संत-वाट
*The Vārkarī lineage, Marathi-first.*
26. Marathi Sants *(Jñāneśvar, Nāmdev, Eknāth, Tukārām, Rāmdās, the sant circle)*
    *— opens with a cross-ref back to Bhakti Traditions, Part III*

## Part VI — The Modern Mind *(new — carries the arc to the present)*
*Beyond the vedic line, and the long re-reading.*
27. Parallel Canons (Jain · Buddhist · Sikh)
28. Modern Indic Thought (Rammohan Roy → Krishnamurti)

---

## Appendix A — Concepts
~30 entries across 7 domains (order, ethics, liberation, mind, knowledge, heterodox, aesthetics) — from `lib/concepts-data.ts`.

## Appendix B — Contributors
~55 figures across four eras (Vedic, Classical, Medieval, Modern) — from `lib/contributors-data.ts`.

## Back matter — Verse Explanations
Every footer mahāvākya / subhāṣita used in the book, in order of first appearance, with its full
explanation — what the footer links point to.

## Colophon
License (CC BY-SA 4.0), author's note, edition details.

---

**Open questions for you:**
- Any chapters you want *split out* on their own (e.g. Rāmāyaṇa and Mahābhārata as two chapters
  instead of one, or each principal Upaniṣad as its own chapter)? Section-data.ts has the material
  for it — it would mean a longer book (150+ short chapters instead of 28 medium ones).
- Order of Parts IV and V (Scientific Mind vs. Sant Path) — happy to swap if you'd rather keep the
  five site-native journeys in their original relative order and slot the Modern Mind in earlier.
