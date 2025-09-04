const CACHE_NAME = 'vibe-shop-v1';
const urlsToCache = [
    '/',
    '/style.css',
    '/script.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Установка Service Worker и кэширование ресурсов
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Активация Service Worker и очистка старых кэшей
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Обработка fetch запросов
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Возвращаем кэшированный файл если он есть
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Если нет в кэше, идем в сеть
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Проверяем, валидный ли ответ и можно ли его кэшировать
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Клонируем ответ и добавляем в кэш для будущих запросов
                        const responseToCache = networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    })
                    .catch(() => {
                        // Можно вернуть fallback-ресурс если запрос не удался
                        // Например: return caches.match('/offline.html');
                        return new Response('Network error occurred', {
                            status: 408,
                            statusText: 'Network error'
                        });
                    });
            })
    );
});