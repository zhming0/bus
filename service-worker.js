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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "10806bf833f904a80882eb1ba8f21ef6"
  },
  {
    "url": "assets/css/0.styles.e5b324c2.css",
    "revision": "3d82ff75053826be14094b300834eee3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/workflow.b5a41b85.png",
    "revision": "b5a41b858c6664e7d8eae06cf35413c1"
  },
  {
    "url": "assets/js/10.df59cb5e.js",
    "revision": "68dcb0bf2185488f10ff8f9b2b83cf11"
  },
  {
    "url": "assets/js/11.053fff12.js",
    "revision": "dba3bafe3a2575eb97e73db00eae27ee"
  },
  {
    "url": "assets/js/12.e52461bd.js",
    "revision": "7f6d1f2b6cd0bed69ede7dd8d67fa2b7"
  },
  {
    "url": "assets/js/13.51605591.js",
    "revision": "76989761b14e69fc5c51e404578bc187"
  },
  {
    "url": "assets/js/14.ead65cb8.js",
    "revision": "e4184310d1ef37624ff20bbf5221b4b8"
  },
  {
    "url": "assets/js/15.03c70588.js",
    "revision": "62ac24749753b39a791fdd7881257008"
  },
  {
    "url": "assets/js/16.1d8f5c30.js",
    "revision": "52d680bf4473db5231dce83f53a798b5"
  },
  {
    "url": "assets/js/17.dee4e52f.js",
    "revision": "f1f00e066539e77f65e8e2c6f38a7cd9"
  },
  {
    "url": "assets/js/18.aad36138.js",
    "revision": "36ea2da3a637bfb211e6361a31e026b2"
  },
  {
    "url": "assets/js/2.afc26b7e.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/3.a254d9fb.js",
    "revision": "3907a5fc903d9186df47dab7bdae5459"
  },
  {
    "url": "assets/js/4.bef9ce78.js",
    "revision": "69f40b84d7b9578a35208720f6d2648d"
  },
  {
    "url": "assets/js/5.a22c922c.js",
    "revision": "2e7fd5b3862af050b172f81858468d27"
  },
  {
    "url": "assets/js/6.e323f766.js",
    "revision": "a10bdab8d7794fcf45b35a03ca9cf2a5"
  },
  {
    "url": "assets/js/7.d60115d1.js",
    "revision": "a77f7365d40b121d21d807f994bc3056"
  },
  {
    "url": "assets/js/8.559dd821.js",
    "revision": "a028412837b215f370c1d4d3a4149c9e"
  },
  {
    "url": "assets/js/9.25fc9bcf.js",
    "revision": "4a3c783f95a3afcef11a692f8299857f"
  },
  {
    "url": "assets/js/app.a26ebe03.js",
    "revision": "9b4e298f870c29228e7173fb9ea4556c"
  },
  {
    "url": "index.html",
    "revision": "4c3e93fc24576ad232ce3ce8ed7866cf"
  },
  {
    "url": "packages/bus-core/index.html",
    "revision": "9303dc62741ce19277ea13b6be357a62"
  },
  {
    "url": "packages/bus-core/src/handler/index.html",
    "revision": "75428cc587e7ec2e12c6cf7c72371afe"
  },
  {
    "url": "packages/bus-core/src/transport/index.html",
    "revision": "1c3a289cb4bb65d7d90e845594a29996"
  },
  {
    "url": "packages/bus-messages/index.html",
    "revision": "a189bc8d13e4866748e567d7079aade9"
  },
  {
    "url": "packages/bus-postgres/index.html",
    "revision": "4818ffc07ec46b82ea8a47813c9b0472"
  },
  {
    "url": "packages/bus-rabbitmq/index.html",
    "revision": "48eb052c39f5bdc0af40fc4a4b354b60"
  },
  {
    "url": "packages/bus-sqs/index.html",
    "revision": "0d00cef8db31bd8abed72404a28ad46c"
  },
  {
    "url": "packages/bus-workflow/index.html",
    "revision": "4d7e2ed7eb0ef3019f243df7b0399a22"
  },
  {
    "url": "packages/bus-workflow/src/workflow/persistence/index.html",
    "revision": "1269d5d3a3eb857203c70daedad4e34d"
  },
  {
    "url": "pages/service-integration/index.html",
    "revision": "0a7eddf8761e8cfb70e65a72efeefe89"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
