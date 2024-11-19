self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('pwa-cache').then((cache) => {
          return cache.addAll([
              '/assets/fonts/poppins/Poppins-Regular.woff2',
              '/assets/fonts/poppins/Poppins-Bold.woff2',
              // Weitere Dateien
          ]);
      })
  );
});
