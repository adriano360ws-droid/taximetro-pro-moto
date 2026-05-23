

const CACHE_NAME = "taximetro-moto-v1";

const urlsToCache = [
  "/taximetro-pro-moto/",
  "/taximetro-pro-moto/index.html",
  "/taximetro-pro-moto/manifest.json",
  "/taximetro-pro-moto/icone-192.png",
  "/taximetro-pro-moto/icone-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});