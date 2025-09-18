
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('odoo-cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/shop',
                '/contactus',
                '/icon-192.png',
                '/icon-512.png'
            ]);
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
