const CACHE_NAME = 'version-10';
const URLS_A_CACHEAR = [
  '/',
  '/index.html',
  '/index.js',
  '/index.css',
  '/imagen/hogar.png'
];

// 📥 Evento de instalación: almacena en caché los recursos estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('📦 Cache creada y recursos guardados');
      return cache.addAll(URLS_A_CACHEAR);
    })
  );
});

// ✅ Evento de activación: limpiar cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {     
            console.log('🗑️ Borrando caché antigua:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// 🔄 Evento de fetch: intercepta peticiones y sirve desde la caché si es posible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
