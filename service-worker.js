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
    "revision": "212fc0a2844e71dc0e1d1a0a3527d493"
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
    "url": "assets/js/9.0e78596e.js",
    "revision": "0a85a0f9ce796ec9e086b01e90100459"
  },
  {
    "url": "assets/js/app.2efd76ad.js",
    "revision": "c64fe5f4ab5b8051d0b71a2539b4085b"
  },
  {
    "url": "general/history.html",
    "revision": "d71fbf332c854ef4f79f0aaaa9bc790a"
  },
  {
    "url": "general/improvements.html",
    "revision": "bb690d6a3c2d417d766089a730a81e87"
  },
  {
    "url": "general/index.html",
    "revision": "9981a13df8785988152c511c7d30acbc"
  },
  {
    "url": "general/infrastructure.html",
    "revision": "e0a511a11613694fd9154eb1363a1049"
  },
  {
    "url": "general/people.html",
    "revision": "5ca2c4a7e12cf07f5cc5461956cdff0a"
  },
  {
    "url": "general/performance.html",
    "revision": "ced55d02be0b2145cfb21155f5efd390"
  },
  {
    "url": "hero-image.jpg",
    "revision": "ae939a9dee9ccd4990c84d0ff23bfd4c"
  },
  {
    "url": "index.html",
    "revision": "d86c3bfbaf1bf58b6c00e4c9ec7e7161"
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
