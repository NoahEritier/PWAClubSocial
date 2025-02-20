self.addEventListener("install", event => {
  console.log("Service Worker instalado");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker activado");
});

self.addEventListener("fetch", event => {
  // Permite que la app funcione sin interferencias con la web original
  event.respondWith(fetch(event.request));
});
