// The hand-written daily WhatsApp posts, one per reading step, keyed by step path. They are split over
// several files only to keep each one a manageable size.
import type { DailyPosts } from './daily-post-types';
import { POSTS_1 } from './daily-posts-1';
import { POSTS_2 } from './daily-posts-2';
import { POSTS_3 } from './daily-posts-3';
import { POSTS_4 } from './daily-posts-4';
import { POSTS_5 } from './daily-posts-5';
import { POSTS_6 } from './daily-posts-6';
import { POSTS_7 } from './daily-posts-7';
import { POSTS_8 } from './daily-posts-8';
import { POSTS_9 } from './daily-posts-9';

export const DAILY_POSTS: DailyPosts = {
  ...POSTS_1, ...POSTS_2, ...POSTS_3, ...POSTS_4, ...POSTS_5, ...POSTS_6, ...POSTS_7, ...POSTS_8, ...POSTS_9,
};
