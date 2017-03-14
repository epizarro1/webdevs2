importScripts('./cache-polyfill.js');
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('airhorner').then(function(cache) {
return cache.addAll([
'/webdevs2/labs/8/',
'/webdevs2/labs/8/index.html',
'/webdevs2/labs/8/index.html?homescreen=1',
'/webdevs2/labs/8/?homescreen=1',
'/webdevs2/labs/8/styles/main.css',
'/webdevs2/labs/8/scripts/main.min.js',
'/webdevs2/labs/8/sounds/airhorn.mp3'
]);
})
);
});
self.addEventListener('fetch', function(event) {
console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});