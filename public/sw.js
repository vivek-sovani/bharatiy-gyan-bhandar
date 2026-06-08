// Service worker for Indian Knowledge Bank PWA
// Strategy: network-first for HTML, cache-first for static assets, cache Google Fonts.

const CACHE = 'bgb-v4';

// Derive the base path from the SW's own URL so this works on both
// localhost (served at /) and GitHub Pages (served at /bharatiy-gyan-bhandar/).
const BASE = self.location.pathname.replace(/\/sw\.js$/, '');
const ROOT = BASE + '/';

// ── Install: precache the app shell ──────────────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    fetch(ROOT)
      .then(async res => {
        const cache = await caches.open(CACHE);
        const html = await res.clone().text();
        await cache.put(ROOT, res);
        // Extract and precache all /_next/static/ assets (CSS, JS) listed in the HTML
        const urls = [...new Set(
          [...html.matchAll(/["']([^"']*\/_next\/static\/[^"'?#\s]+)/g)].map(m => m[1])
        )];
        await Promise.allSettled(
          urls.map(u => fetch(u).then(r => { if (r.ok) cache.put(u, r); }))
        );
      })
      .catch(() => {}) // if offline during install, assets will cache on first online visit
      .then(() => self.skipWaiting())
  );
});

// ── Activate: delete stale caches ────────────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

// ── Fetch ────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isGoogleFont =
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com';

  if (!isSameOrigin && !isGoogleFont) return;

  // HTML pages — network first, fall back to cached version or root
  if (e.request.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        })
        .catch(() =>
          caches.match(e.request).then(cached => cached || caches.match(ROOT))
        )
    );
    return;
  }

  // Static assets & fonts — cache first, populate on miss
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      });
    })
  );
});
