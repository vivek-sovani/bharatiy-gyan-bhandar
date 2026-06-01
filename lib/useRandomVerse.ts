'use client';

import { useCallback, useEffect, useState } from 'react';

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
