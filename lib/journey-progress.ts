'use client';

import type { Journey } from './journeys-data';

// Per-journey reading progress, tracked client-side only (IMPLEMENTATION_PLAN.md §4.4).
// Steps can be visited out of order; a step counts as done the moment its page
// is opened via the journey (no "mark as done" homework).

export type JourneyProgressEntry = {
  visited: string[]; // step paths, in visit order
  startedAt: number;
  lastAt: number;
};

export type JourneyProgressMap = Record<string, JourneyProgressEntry>;

const KEY = 'bgb-journeys';

export function getProgressMap(): JourneyProgressMap {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}

function saveProgressMap(map: JourneyProgressMap) {
  try {
    localStorage.setItem(KEY, JSON.stringify(map));
  } catch {}
}

export function markVisited(journeyId: string, stepPath: string) {
  const map = getProgressMap();
  const now = Date.now();
  const entry = map[journeyId] || { visited: [], startedAt: now, lastAt: now };
  if (!entry.visited.includes(stepPath)) entry.visited = [...entry.visited, stepPath];
  entry.lastAt = now;
  map[journeyId] = entry;
  saveProgressMap(map);
}

export function isStepVisited(journeyId: string, stepPath: string): boolean {
  return getProgressMap()[journeyId]?.visited.includes(stepPath) ?? false;
}

export function journeyStats(journey: Journey) {
  const entry = getProgressMap()[journey.id];
  const visitedCount = entry
    ? journey.steps.filter((s) => entry.visited.includes(s.path)).length
    : 0;
  const total = journey.steps.length;
  const nextIndex = journey.steps.findIndex((s) => !entry?.visited.includes(s.path));
  return {
    visitedCount,
    total,
    percent: total > 0 ? Math.round((visitedCount / total) * 100) : 0,
    isStarted: visitedCount > 0,
    isComplete: visitedCount === total,
    // First unvisited step, or the last step if everything is already visited.
    nextIndex: nextIndex === -1 ? total - 1 : nextIndex,
  };
}
