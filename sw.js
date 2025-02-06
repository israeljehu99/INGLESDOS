const CACHE_NAME = 'version-5';
const URLS_A_CACHEAR = [
  '/',
  '/index.html',
  '/index.js',
  '/index.css',
  '/imagen/hogar.png'
];

// 📥 Evento de instalación: almacena en caché los recursos estáticos
self.addEventListener('install', event => {
  caches.open(CACHE_NAME).then(cache=>{
    cache.addAll(URLS_A_CACHEAR);
  })
});

// ✅ Evento de activación: limpiar cachés antiguas
self.addEventListener('activate', event => {
  caches.keys().then(cache=>{
    cache.forEach(recorre=>{
      if (recorre!==CACHE_NAME) {
       caches.delete(recorre).then(e=>console.log('eliminado con exito'));
      }
    });
  });
});

// 🔄 Evento de fetch: intercepta peticiones y sirve desde la caché si es posible
self.addEventListener('fetch', event => {
  console.log('se ha realizado una peticion')
});

self.addEventListener('sync', event => {
  if (event.tag === 'sync-tarea') {
    event.waitUntil(
      fetch('/api/sincronizar', { method: 'POST' }) 
        .then(response => response.json())
        .then(data => console.log('🔄 Datos sincronizados:', data))
        .catch(err => console.error('❌ Error en la sincronización:', err))
    );
  }
});


self.addEventListener('push', event => {
  const opciones = {
    body: 'Tienes un nuevo mensaje 📩',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-192x192.png',
    vibrate: [200, 100, 200],
    actions: [
      { action: 'open', title: 'Abrir App' },
      { action: 'dismiss', title: 'Cerrar' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('📢 Notificación PWA', opciones)
  );
});
