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
    "revision": "85369a1758840f77832924a9b1f0b36d"
  },
  {
    "url": "assets/css/0.styles.0dbace68.css",
    "revision": "692cbebd2dc8a8f09aaaff6834482b86"
  },
  {
    "url": "assets/img/performance.0fcaee80.png",
    "revision": "0fcaee80e2ae780432e68dc5d2fa68b3"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.d53621e1.js",
    "revision": "c678bde41b3c5e42f7d7c2865089cd57"
  },
  {
    "url": "assets/js/11.bdf3310d.js",
    "revision": "ec5b1b6aba96c651d20bda4bcb0c792f"
  },
  {
    "url": "assets/js/12.9334386a.js",
    "revision": "b56f852d6c7b309261085c71180abafc"
  },
  {
    "url": "assets/js/13.81c1a34e.js",
    "revision": "0847663c80ef59cfdd9e972317aecedb"
  },
  {
    "url": "assets/js/14.c71186a6.js",
    "revision": "05659d3323d0504cf74213e61c047c89"
  },
  {
    "url": "assets/js/2.99dc80cf.js",
    "revision": "0e3387d0d00b4e5d8f83b8a9c7204b9c"
  },
  {
    "url": "assets/js/3.9738772f.js",
    "revision": "f523cb311990dcbbb7c8f93daccf0f12"
  },
  {
    "url": "assets/js/4.7a963fb3.js",
    "revision": "ed8c4ce78642b9996e11b17e954ae4db"
  },
  {
    "url": "assets/js/5.16add1a5.js",
    "revision": "c3eac59cbc1b8bfe406724d9448a3b8b"
  },
  {
    "url": "assets/js/6.1108be47.js",
    "revision": "432e12a13eb49d5cbf7d024eceaca31d"
  },
  {
    "url": "assets/js/7.8b4ef05c.js",
    "revision": "ae6ed24ab3dda0b0a3fec1b3a11665d5"
  },
  {
    "url": "assets/js/8.baf06124.js",
    "revision": "45bcd50afd58a573c1379c27e17809d8"
  },
  {
    "url": "assets/js/9.0e78596e.js",
    "revision": "0a85a0f9ce796ec9e086b01e90100459"
  },
  {
    "url": "assets/js/app.4382d49c.js",
    "revision": "ea254bebba8669f3f7fe0df3bdf89beb"
  },
  {
    "url": "general/history.html",
    "revision": "7191c1065197491be868b42e883a7689"
  },
  {
    "url": "general/improvements.html",
    "revision": "1ede6c25cd38050cd9ee97f381a4ce69"
  },
  {
    "url": "general/index.html",
    "revision": "424ab0b49be0a35200bcb4163c0b5b8d"
  },
  {
    "url": "general/infrastructure.html",
    "revision": "6442a43ffbbe7a65b9e716872ebb53ab"
  },
  {
    "url": "general/people.html",
    "revision": "0a3f509b3434460de28f520e3a5827fb"
  },
  {
    "url": "general/performance.html",
    "revision": "04d4ebd33d1bfae303448e70d3288736"
  },
  {
    "url": "hero-image.jpg",
    "revision": "ae939a9dee9ccd4990c84d0ff23bfd4c"
  },
  {
    "url": "index.html",
    "revision": "00d6f43b80f1e0635c8ce9ccce7267f1"
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
