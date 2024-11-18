self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('pwa-cache').then((cache) => {
          return cache.addAll([
              'src/assets/fonts/poppins/Poppins-Medium.ttf',
              
              // Weitere Dateien hinzufügen
          ]);
      })
  );
});
