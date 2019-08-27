importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('rbxacademy').then(function(cache) {
     return cache.addAll([
       '/',
       '/home.html',
       '/animate.css',
       '/?homescreen=1',
       '/css/footer.css',
       '/js/wow.min.js',
       '/js/nav.js',
       '/js/wow.js',
       'favicon.ico',
       'LICENSE.txt',
       '/img/RobloxAcademyLogo.png'
     ]);
   })
 );
});