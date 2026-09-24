// Service worker: lets the app open offline and load fast.
const V = 'study-timer-v2';
const SHELL = ['./', './index.html', './firebase-config.js', './manifest.json', './icon.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET') return;
  const own = u.origin === location.origin;
  const sdk = u.hostname === 'www.gstatic.com' && u.pathname.startsWith('/firebasejs/');
  if (!own && !sdk) return; // Firestore / Auth calls go straight to the network
  const store = res => { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); return res; };
  if (sdk) { // versioned Firebase SDK files: cache first
    e.respondWith(caches.match(r).then(h => h || fetch(r).then(store)));
    return;
  }
  // own files: network first (so updates arrive), cache as offline fallback
  e.respondWith(fetch(r,{cache:'reload'}).then(store).catch(() => caches.match(r).then(h => h || caches.match('./index.html'))));
});
