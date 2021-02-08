//Name the cache to be saved
const CACHE_NAME = "version-1";
//List URLs to be saved
const urlsToCache = ["index.html", "offline.html"];

//Install SW
this.addEventListener("install", (event) => {
    /**
     * In service workers, waitUntil() tells the browser that work is ongoing
     * until the promise settles, and it shouldn't terminate the service worker
     * if it wants that work to complete.
     * 
     * The install events in service workers use waitUntil() to hold the service
     * worker in the installing phase until tasks complete. If the promise passed
     * to waitUntil() rejects, the install is considered a failure, and the installing
     * service worker is discarded.
     * 
     * This is primarily used to ensure that a service worker is not considered
     * installed until all of the core caches it depends on are successfully populated.
     * 
     */
    event.waitUntil(
        /**
         * "caches" is a property of the ServiceWorkerGlobalScope.
         * It holds the CacheStorage object, by which it can access the 
         * CacheStorage interface. 
         * 
         * The open() method of the CacheStorage interface returns a Promise
         * that resolves to the Cache object matching the cacheName.
         * 
         */
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("Opened Cache");
                return cache.addAll(urlsToCache);
            })
    )
})

//Listen for Requests
// this.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(() => {
//                 return fetch(event.request)
//                     .catch(() => {
//                         return caches.match("offline.html")
//                     })
//             })
//     )
// })

//Activate SW
this.addEventListener("activate", (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if(!cacheWhiteList.includes(cacheName)){
                            return caches.delete(cacheName);
                        }
                    })
                )
            })
    )
})