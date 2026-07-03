'use client';

import { useCallback, useEffect, useState } from 'react';

// djb2 hash over the local date string — MUST stay identical to the
// Kotlin implementation in the Android widget (IMPLEMENTATION_PLAN.md Part 3.4).
// Hashing the date (rather than dayOfYear % n) keeps the Mahāvākya and
// Subhāṣita pools from marching in lockstep.
export function dailyIndex(poolSize: number, date = new Date()): number {
  const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  let h = 5381;
  for (let i = 0; i < key.length; i++) h = ((h * 33) ^ key.charCodeAt(i)) >>> 0;
  return h % poolSize;
}

// Verse of the day: every visitor sees the same index on the same date.
// Renders item 0 until the post-mount pick lands (same SSR-safety pattern
// as useRandomVerse). `next()` re-rolls randomly for manual browsing;
// `isToday` is true while the daily verse is still showing.
export function useDailyVerse(count: number) {
  const [index, setIndex] = useState(0);
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    setIndex(dailyIndex(count));
    setIsToday(true);
  }, [count]);

  const next = useCallback(() => {
    setIsToday(false);
    setIndex((cur) => {
      if (count <= 1) return 0;
      let n = cur;
      while (n === cur) n = Math.floor(Math.random() * count);
      return n;
    });
  }, [count]);

  return { index, next, isToday };
}

// Picks a random index on mount (client-side, to avoid SSR/hydration mismatch
// with Math.random) and exposes a `next()` that re-rolls to a *different* item.
// Renders item 0 deterministically until the post-mount pick lands.
export function useRandomVerse(count: number) {
  const [index, setIndex] = useState(0);

  const roll = useCallback(
    (avoid: number) => {
      if (count <= 1) return 0;
      let n = avoid;
      while (n === avoid) n = Math.floor(Math.random() * count);
      return n;
    },
    [count]
  );

  useEffect(() => {
    setIndex(Math.floor(Math.random() * count));
  }, [count]);

  const next = useCallback(() => {
    setIndex((cur) => roll(cur));
  }, [roll]);

  return { index, next };
}
