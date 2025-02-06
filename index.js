if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('✅ Service Worker registrado', reg))
      .catch(err => console.error('❌ Error al registrar SW', err));
  }


  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready.then(reg => {
      return reg.sync.register('sync-tarea');
    }).then(() => {
      console.log('✅ Sincronización en segundo plano registrada');
    }).catch(err => console.error('❌ Error al registrar sync', err));
  }


  if ('Notification' in window && 'serviceWorker' in navigator) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('🔔 Notificaciones permitidas');
      } else {
        console.log('❌ Notificaciones denegadas');
      }
    });
  }
  
  
  

  let boton = document.getElementById("boton");
  boton.addEventListener('click',e=>{
    //fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits').then(e=>e.json()).then(e=>{console.log(e)});
  });
  