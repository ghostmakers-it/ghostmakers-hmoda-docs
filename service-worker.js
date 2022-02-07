/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8e61e1c5006d39f907a1fe80376d67f5"
  },
  {
    "url": "assets/css/0.styles.28077cdb.css",
    "revision": "9dddde4ef8fe9d835a0cef0dc9b4cd78"
  },
  {
    "url": "assets/img/performance.0fcaee80.png",
    "revision": "0fcaee80e2ae780432e68dc5d2fa68b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bf5142d6.js",
    "revision": "a5f88551b94a23dd15b5ca9ae42171ee"
  },
  {
    "url": "assets/js/11.3d0a0008.js",
    "revision": "a25e1f40eaae6718e860a6cc5ab7a855"
  },
  {
    "url": "assets/js/12.27b14f93.js",
    "revision": "c4701794e16bd0622af2ce351e7156a6"
  },
  {
    "url": "assets/js/13.16ae6965.js",
    "revision": "9d0d5bc0a6927c49ac769c94e1e3f4da"
  },
  {
    "url": "assets/js/14.a954bfd1.js",
    "revision": "9c7a95d5603d93f3ed3d865395d3aebc"
  },
  {
    "url": "assets/js/2.2e70c34f.js",
    "revision": "e6ae8006a9db0d4cb390e047ec29139a"
  },
  {
    "url": "assets/js/3.b5e0290e.js",
    "revision": "3de67d1759e473d30190cb070918a026"
  },
  {
    "url": "assets/js/4.85a67b73.js",
    "revision": "855e0da75dcc94c4e043a756306b1be8"
  },
  {
    "url": "assets/js/5.27f04a12.js",
    "revision": "1010f6beca3e35c17245fb89d8e8668d"
  },
  {
    "url": "assets/js/6.a4600efe.js",
    "revision": "2bf5177d8aff4f4dc236b7cdabf77819"
  },
  {
    "url": "assets/js/7.6878b2e8.js",
    "revision": "e202b64f4ce880def59165f206036cb0"
  },
  {
    "url": "assets/js/8.046b5152.js",
    "revision": "3bc9447c2166fa7f43cb77e75c6d37df"
  },
  {
    "url": "assets/js/9.311a692c.js",
    "revision": "67c253d1ff0c49cd2ea2814bfdf28602"
  },
  {
    "url": "assets/js/app.5f02ee91.js",
    "revision": "95e659cb59717d7f031905af83b631cd"
  },
  {
    "url": "general/history.html",
    "revision": "ddfef1c87e8018c00cf3e593afa1ebc0"
  },
  {
    "url": "general/improvements.html",
    "revision": "c98f585edad32d464496116537569285"
  },
  {
    "url": "general/index.html",
    "revision": "cf05ef2fd6cb8c59cafbb32ef01600a3"
  },
  {
    "url": "general/infrastructure.html",
    "revision": "92f896381b3062539f7836ab80260535"
  },
  {
    "url": "general/people.html",
    "revision": "d3e06a9a6f171d857961a807223933e6"
  },
  {
    "url": "general/performance.html",
    "revision": "6af11fab4277d3ae64657c70d242e1a6"
  },
  {
    "url": "hero-image.jpg",
    "revision": "ae939a9dee9ccd4990c84d0ff23bfd4c"
  },
  {
    "url": "index.html",
    "revision": "61efd1d2804ff3662a3579f4a8f5ff07"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
