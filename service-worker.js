const CACHE_NAME = 'banwol-app-v1';
const urlsToCache = [
  '/bap/',
  '/bap/index.html',
  '/bap/manifest.json',
  '/bap/icons/icon-192x192.png',
  '/bap/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 