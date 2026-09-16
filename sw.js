/* Dojo DevSkills — service worker
   Guarda la app en el celular para que abra sin internet.
   Sube el número de CACHE cada vez que cambies archivos. */

const CACHE = "dojo-v1";

// lo que se guarda en la primera visita
const ARCHIVOS = [
  "./",
  "./index.html",
  "./datos.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png"
];

// 1) install: llenar el cajón
self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE).then((cajon) => cajon.addAll(ARCHIVOS))
  );
  self.skipWaiting();
});

// 2) activate: botar los cajones viejos
self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((nombres) =>
      Promise.all(
        nombres.filter((n) => n !== CACHE).map((n) => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

// 3) fetch: red primero para el HTML y los datos (así ves la clase nueva),
//    caché primero para lo demás (íconos, fuentes).
self.addEventListener("fetch", (evento) => {
  const pedido = evento.request;
  if (pedido.method !== "GET") return;

  const esContenido =
    pedido.mode === "navigate" ||
    pedido.url.endsWith("datos.js") ||
    pedido.url.endsWith("index.html");

  if (esContenido) {
    evento.respondWith(
      fetch(pedido)
        .then((respuesta) => {
          const copia = respuesta.clone();
          caches.open(CACHE).then((cajon) => cajon.put(pedido, copia));
          return respuesta;
        })
        .catch(() => caches.match(pedido).then((g) => g || caches.match("./index.html")))
    );
    return;
  }

  evento.respondWith(
    caches.match(pedido).then((guardado) => guardado || fetch(pedido))
  );
});
