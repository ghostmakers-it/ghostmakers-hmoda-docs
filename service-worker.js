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
    "revision": "ba54ad569380111d969c1297db2df152"
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
    "url": "assets/js/app.4c72d9c5.js",
    "revision": "df90fe22fd113db5cce269727bd74ff8"
  },
  {
    "url": "general/history.html",
    "revision": "97f8916ed3b652d6cb9b911609ec4214"
  },
  {
    "url": "general/improvements.html",
    "revision": "4f5f896abe0576b293789c434a92bf37"
  },
  {
    "url": "general/index.html",
    "revision": "8fb09d644017be3b407b8f7005b7e799"
  },
  {
    "url": "general/infrastructure.html",
    "revision": "f7703e454fc20cb799c6ac5525eec311"
  },
  {
    "url": "general/people.html",
    "revision": "0f0f859c7d4679b921dfd8ff4e6f73a5"
  },
  {
    "url": "general/performance.html",
    "revision": "3b93f74abfd2af5c825ed3b5e2ecb014"
  },
  {
    "url": "hero-image.jpg",
    "revision": "ae939a9dee9ccd4990c84d0ff23bfd4c"
  },
  {
    "url": "index.html",
    "revision": "1e7112e9751ee66ab0e2810e1301f497"
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