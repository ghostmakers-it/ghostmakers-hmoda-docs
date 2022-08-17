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
    "revision": "ab032d846045bc6f12b18d2bfe1f22e9"
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
    "url": "assets/js/10.007bd8ae.js",
    "revision": "eacc2e8a0cdd3b383bd6e5dcb89f47dd"
  },
  {
    "url": "assets/js/11.9fd3d326.js",
    "revision": "8d6780ca27c73b5804b38e6b8e688a00"
  },
  {
    "url": "assets/js/12.911306bd.js",
    "revision": "ca314cfed9fe11ae7513f7d309b37682"
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
    "url": "assets/js/9.1c4962e9.js",
    "revision": "98d8b322f919eefa7db8f3234aac8c91"
  },
  {
    "url": "assets/js/app.3d3edba6.js",
    "revision": "03a1dfac25c86823b99e63f48c547a3f"
  },
  {
    "url": "general/history.html",
    "revision": "5600eadb6e41fbf2ce307cb493e7f0c2"
  },
  {
    "url": "general/improvements.html",
    "revision": "3b30399565e632e8f7bf86f000c5241a"
  },
  {
    "url": "general/index.html",
    "revision": "91e880190a7efddd25be13fcb3ab8349"
  },
  {
    "url": "general/infrastructure.html",
    "revision": "b341b7c09bf6426efe80ee99685d8ead"
  },
  {
    "url": "general/people.html",
    "revision": "fcc9823de3038526e1b113c562584b9a"
  },
  {
    "url": "general/performance.html",
    "revision": "c90d7496c0c8455eaba24c0dea6ae077"
  },
  {
    "url": "hero-image.jpg",
    "revision": "ae939a9dee9ccd4990c84d0ff23bfd4c"
  },
  {
    "url": "index.html",
    "revision": "37a347c39a0b0d7962e4f03e1b6aa6b2"
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
