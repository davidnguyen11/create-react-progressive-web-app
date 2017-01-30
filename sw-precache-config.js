module.exports = {
  development: {
    stripPrefix: 'public/',
    staticFileGlobs: [
      'public/**.html',
      'public/**.json',
      'public/**.jpg',
      'public/**.png',
      'public/**.css',
      'public/**.js',
      '*.png',
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'public/sw.js',
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/newsapi\.org\/v1/,
        handler: 'networkFirst'
      },
      {
        urlPattern: /\/articles\//,
        handler: 'fastest',
        options: {
          cache: {
            maxEntries: 10,
            name: 'articles-cache'
          }
        }
      },
      {
        urlPattern: /^http:\/\/localhost\:3000\/static\/js\/bundle.js/,
        handler: 'networkFirst'
      },
      {
        urlPattern: /^http:\/\/localhost\:3000\//,
        handler: 'networkFirst'
      },
      {
        urlPattern: /^http:\/\/localhost\:3000\/tnw/,
        handler: 'networkFirst'
      },
      {
        urlPattern: /^http:\/\/localhost\:3000\/techcrunch/,
        handler: 'networkFirst'
      },
      {
        urlPattern: /^http:\/\/localhost\:3000\/ars-technica/,
        handler: 'networkFirst'
      }
    ]
  },
  production: {
    stripPrefix: 'build/',
    staticFileGlobs: [
      'build/*.html',
      'build/manifest.json',
      'build/static/**/!(*map*)',
      'build/static/**/!(*js*)',
      'build/static/**/!(*css*)',
      'build/*.png',
      'build/*.jpg',
      'build/*.css',
      'build/*.js',
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/sw.js',
    runtimeCaching: [
      {
        urlPattern: /^http:\/\/localhost\:9001\/api/,
        handler: 'networkFirst'
      },
      {
        urlPattern: /\/get-todo-items\//,
        handler: 'fastest',
        options: {
          cache: {
            maxEntries: 10,
            name: 'articles-cache'
          }
        }
      },
      {
        urlPattern: /^https:\/\/newsapi\.org\/v1/,
        handler: 'networkFirst'
      },
      {
        urlPattern: /\/articles\//,
        handler: 'fastest',
        options: {
          cache: {
            maxEntries: 10,
            name: 'articles-cache'
          }
        }
      },
      {
        urlPattern: /^http:\/\/localhost\:9000\//,
        handler: 'networkFirst'
      },
      {
        urlPattern: /^http:\/\/localhost\:9000\/tnw/,
        handler: 'networkFirst'
      },
      {
        urlPattern: /^http:\/\/localhost\:9000\/techcrunch/,
        handler: 'networkFirst'
      },
      {
        urlPattern: /^http:\/\/localhost\:9000\/ars-technica/,
        handler: 'networkFirst'
      }
    ]
  }
}[process.env.NODE_ENV || 'development'];
