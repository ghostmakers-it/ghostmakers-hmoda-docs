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
    "revision": "183b63f4006d74f2cc84b35ef3d951aa"
  },
  {
    "url": "assets/css/0.styles.30b5e7d7.css",
    "revision": "58272c72652c01e166456eb8f38142b2"
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
    "url": "assets/js/4.e959d53f.js",
    "revision": "d9fbf53bfc761520fd47b3c4370d4d7f"
  },
  {
    "url": "assets/js/5.f88975d4.js",
    "revision": "605204b136b687c00e952a0937b7b4e6"
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
    "url": "assets/js/app.f97fdcbd.js",
    "revision": "541a23d4d0d901774ab380738dc63bba"
  },
  {
    "url": "general/history.html",
    "revision": "fe9315bbc8812bef0c728093b68d0155"
  },
  {
    "url": "general/improvements.html",
    "revision": "7f4fd08356a86e2bac9f43bb5f6db665"
  },
  {
    "url": "general/index.html",
    "revision": "4be36a0212203e7766a73b93ed5da358"
  },
  {
    "url": "general/infrastructure.html",
    "revision": "f46cac6bf660b260b98095ab6fa8d951"
  },
  {
    "url": "general/people.html",
    "revision": "62e032ce53e073aff615f41df707955d"
  },
  {
    "url": "general/performance.html",
    "revision": "3212cf9205231ee69f1e3730fd45b002"
  },
  {
    "url": "hero-image.jpg",
    "revision": "ae939a9dee9ccd4990c84d0ff23bfd4c"
  },
  {
    "url": "index.html",
    "revision": "7700e3af3b94a93668d22e36f488d872"
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
