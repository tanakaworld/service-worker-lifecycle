console.log('===== service worker');

const CACHE_NAME = 'v1';
const urlsToCache = [
    'index.css',
    'index.js'
];

self.addEventListener('install', (event) => {
    console.log('>>>>> install');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    const path = new URL(event.request.url).pathname;
    console.log('>>>>> fetch', path);
    if (path === '/test') {
        event.respondWith(new Response('test'));
    }
    return;
    // event.respondWith(
    //     caches.match(event.request).then((response) => {
    //         if (response) return response;
    //         return fetch(event.request);
    //     })
    // );
});
