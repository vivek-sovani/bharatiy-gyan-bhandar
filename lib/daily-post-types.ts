// One daily WhatsApp post, written by hand per reading step (see daily-posts.ts). The day number,
// reading time and link are added by buildWhatsAppMessage, so they are not part of the text here.
export type PostText = {
  title: string;
  tagline: string;
  // Paragraphs separated by a blank line. WhatsApp markup: *bold*, _italic_.
  body: string;
  thought: string;
};

export type DailyPost = { mr: PostText; en: PostText };
export type DailyPosts = Record<string, DailyPost>;
