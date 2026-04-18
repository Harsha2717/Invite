const CACHE_NAME = "wedding-video-cache-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", event => {
  const req = event.request;

  // cache videos
  if (
    req.url.includes(".mp4") ||
    req.url.includes(".webm") ||
    req.destination === "video"
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(req).then(cached => {
          if (cached) {
            return cached;
          }

          return fetch(req).then(networkRes => {
            cache.put(req, networkRes.clone());
            return networkRes;
          });
        })
      )
    );
  }
});