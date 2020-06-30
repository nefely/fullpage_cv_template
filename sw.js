self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      
      return cache.add('index.html');

      return cache.add('js/jquery-3.1.1.min.js');
      return cache.add('js/script.js');

      return cache.add('css/preloader.css');
      return cache.add('css/style-custom.css');
      return cache.add('css/style.css');
      
    })
  );
});
 
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});