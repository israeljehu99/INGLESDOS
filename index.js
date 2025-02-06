if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('✅ Service Worker registrado', reg))
      .catch(err => console.error('❌ Error al registrar SW', err));
  }

  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // Evita que el navegador muestre la instalación automáticamente
    deferredPrompt = e; // Guarda el evento para usarlo más tarde
    document.getElementById('install-btn').style.display = 'block'; // Muestra el botón de instalación
  });
  

  document.getElementById('install-btn').addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Muestra la ventana de instalación
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación');
        } else {
          console.log('El usuario canceló la instalación');
        }
        deferredPrompt = null; // Resetea el evento
      });
    }
  });
  
  window.addEventListener('appinstalled', () => {
    console.log('PWA instalada');
    document.getElementById('install-btn').style.display = 'none'; // Ocultar el botón después de instalar
  });
  

  let boton = document.getElementById("boton");
  boton.addEventListener('click',e=>{
    //fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits').then(e=>e.json()).then(e=>{console.log(e)});
  });
  