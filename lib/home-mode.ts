// The home page opens "path-first": a visitor sees the reading-path chooser, and the full
// library (sections, concepts, contributors...) only after asking for it. The choice is
// remembered, and any link into a library section opens it.

export const HOME_KEY = 'bgb-home';

export function enterLibrary() {
  try { localStorage.setItem(HOME_KEY, 'library'); } catch { /* storage unavailable: lasts for this page view only */ }
  document.documentElement.setAttribute('data-home', 'library');
}

export function leaveLibrary() {
  try { localStorage.removeItem(HOME_KEY); } catch { /* ignore */ }
  document.documentElement.removeAttribute('data-home');
}

// The opening material (About + "The Living Tree") is shown until it has been read once.
export const PREFACE_KEY = 'bgb-preface';

export function isPrefaceRead(): boolean {
  try { return localStorage.getItem(PREFACE_KEY) === 'read'; } catch { return false; }
}

// Remembers the preface as read for the next visit; the page itself does not jump while it is being read.
export function markPrefaceRead() {
  try { localStorage.setItem(PREFACE_KEY, 'read'); } catch { /* ignore */ }
}

export function foldPreface() {
  markPrefaceRead();
  document.documentElement.setAttribute('data-preface', 'read');
}

export function unfoldPreface() {
  try { localStorage.removeItem(PREFACE_KEY); } catch { /* ignore */ }
  document.documentElement.removeAttribute('data-preface');
}
