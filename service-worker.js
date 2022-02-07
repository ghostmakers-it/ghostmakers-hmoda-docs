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
    "revision": "af09f041b803a922f808c653427447f2"
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
    "url": "assets/js/10.00dc53d3.js",
    "revision": "0a2dca7be3e8d91c4e8ac9bbab01480c"
  },
  {
    "url": "assets/js/11.9fd3d326.js",
    "revision": "8d6780ca27c73b5804b38e6b8e688a00"
  },
  {
    "url": "assets/js/12.3d25d304.js",
    "revision": "3826994cb178df491e05f2ad021882d9"
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
    "url": "assets/js/app.609066db.js",
    "revision": "7a17c3543bbabdccfbf6f088a0f6d4f9"
  },
  {
    "url": "general/history.html",
    "revision": "4ef02593a6e06e7572b91b7e6e3fbb1c"
  },
  {
    "url": "general/improvements.html",
    "revision": "0d7012956c39def27d60c8f8ca8091b5"
  },
  {
    "url": "general/index.html",
    "revision": "1335b598d9a159b977c51c4bce949725"
  },
  {
    "url": "general/infrastructure.html",
    "revision": "76cd07c0ebbd350942790e95b1c808eb"
  },
  {
    "url": "general/people.html",
    "revision": "9e848b4641db4d6d074170d798b7056b"
  },
  {
    "url": "general/performance.html",
    "revision": "b1232dd0a4010c06df6b80768384528a"
  },
  {
    "url": "hero-image.jpg",
    "revision": "ae939a9dee9ccd4990c84d0ff23bfd4c"
  },
  {
    "url": "index.html",
    "revision": "0d6fd84fa79540253f41119437a9990b"
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
