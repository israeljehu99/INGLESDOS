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
  

  
  

  let boton = document.getElementById("boton");
  boton.addEventListener('click',e=>{
    //fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits').then(e=>e.json()).then(e=>{console.log(e)});
  });
  