const CACHE_NAME = 'diary-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://a-habib.github.io/font/almohanad-bold.ttf'
];

// تثبيت ملفات التخزين المؤقت
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// استرجاع البيانات من الكاش عند انقطاع الشبكة
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
