importScripts('./sw-toolbox.js');

const ONE_WEEK = 604800;
const ONE_HOUR = 3600;
const CACHE_VERSION = 'v1.0';
const PREFIX = 'news';

const preCacheFiles = [
  '/',
  '/favicon.ico',
  '/manifest.json',
];

toolbox.precache(preCacheFiles);

const apiOptions = {
  cache: {
    name: 'api-cache-' + CACHE_VERSION,
    maxEntries: 200,
    maxAgeSeconds: ONE_HOUR,
  }
};

const newsOptions = {
  cache: {
    name: PREFIX + '-cache-' + CACHE_VERSION,
    maxEntries: 200,
    maxAgeSeconds: ONE_WEEK,
  }
};

// Install and Activate events
self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// runtime cache
// cache api
toolbox.router.get(/^https?:\/\/(newsapi.org)\/v1/, toolbox.fastest, apiOptions);

// cache local
toolbox.router.get(/^https?:\/\/localhost/, toolbox.networkFirst, newsOptions);
