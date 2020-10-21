/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","c107868c34ddf8fc49ff8bb6b389793d"],["D:/Hexo/public/2020/08/17/华为/index.html","79ef3aeed2d2de1311c71d61964ea185"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","b346f91a38f51d3cb60f9cd585310cfb"],["D:/Hexo/public/2020/09/06/表情/index.html","d83d680caebb36f9cf18da6362e0783f"],["D:/Hexo/public/2020/09/07/热榜/index.html","0ee692903632f72ccd0937973e2688f5"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","7a2116158d853e3e5e8ba6a52a45e298"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","0e71cea31205de037812a98d519baf45"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","5872f48f848d12f0aa752da3af8956df"],["D:/Hexo/public/2020/10/02/微小说/index.html","32e262d5771eb4433c864d1548b9db03"],["D:/Hexo/public/2020/10/12/lyf/index.html","c9e19449d0930282e143eab2011d5d02"],["D:/Hexo/public/2020/10/17/屋顶告白大会/index.html","1dcc5f6d1caf34ce34a2064cb0d9e463"],["D:/Hexo/public/2020/10/18/gs1/index.html","95229d8c64f8c4d6b0826d695ca459bf"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","ece2ff8d752df8fe349aaff7f1b2f3d8"],["D:/Hexo/public/JLU/index.html","7c27c6fcfc95c0d5c84839cdb2ce5d04"],["D:/Hexo/public/about/index.html","e5f55c6d3dc870aa9e2812ac31768820"],["D:/Hexo/public/archives/2018/03/index.html","cf685f452dd70a136ca601aa219f19d8"],["D:/Hexo/public/archives/2018/index.html","65cbb2d6aecc6bff846d41efb464f7a0"],["D:/Hexo/public/archives/2020/08/index.html","938ea1accefac6fa4f7f256ad3a7be88"],["D:/Hexo/public/archives/2020/09/index.html","b831edb7dede12a289f1343f96c2650c"],["D:/Hexo/public/archives/2020/10/index.html","0977008669ffad60f88d0d04d25a07cc"],["D:/Hexo/public/archives/2020/index.html","fabcde92fc29d9ae00bdddedf8ee2d69"],["D:/Hexo/public/archives/2020/page/2/index.html","30c8427a1a9658957bc160a46a70d93a"],["D:/Hexo/public/archives/index.html","2e00aebab68fe1ed7b3771afa104f99f"],["D:/Hexo/public/archives/page/2/index.html","76162c13bc943a046a6107d3481fe114"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","6ee8d8ae984c3728e92ea9abe5cd7762"],["D:/Hexo/public/categories/gallery/index.html","566eeb697a27acf2a18a6758e0c32bed"],["D:/Hexo/public/categories/index.html","dc03b6b5c1f7ce75bf79babc69e2768b"],["D:/Hexo/public/categories/music/index.html","9e6cef3a861c08bb71eda779c52683c5"],["D:/Hexo/public/categories/video/index.html","f94d86b4af21f3f4b74edb275c55f500"],["D:/Hexo/public/categories/情感/index.html","bd624385101ecfa78e1b36ad338d88ba"],["D:/Hexo/public/categories/文章/index.html","cf4c24d877e94264538c458112a25139"],["D:/Hexo/public/categories/网站/index.html","4d5d7012eb5b7ea6e17ed4926f25bc22"],["D:/Hexo/public/categories/音乐/index.html","42f504baab02ab1639065914da53b9df"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","661bb8dbfe3951e262326cb4ce523a3f"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","8be321b6f492e950e606b290a65436bd"],["D:/Hexo/public/favorite/index.html","a295e25bd6d67d91412cd604a80f3af6"],["D:/Hexo/public/fun1/index.html","ead2ee56bf5d3252f0bc9d295386505a"],["D:/Hexo/public/fun2/index.html","6c169fec117daf4d143b25b356fe7991"],["D:/Hexo/public/fun3/index.html","9ab60db22fcf59f30e87ff4e17b3b873"],["D:/Hexo/public/fun4/index.html","4a6a76c2962a5c101fe7a214f4353133"],["D:/Hexo/public/fun5/index.html","59ab7b87cb5aaa8bb0cbdbb49f724fd7"],["D:/Hexo/public/fun6/index.html","7127f074dc3c907d99ffbf824a293edc"],["D:/Hexo/public/fun7/index.html","831d15bf59c9816a75c37caf7a9dea07"],["D:/Hexo/public/fun8/index.html","390a6472fafd2c2590d30329228f09bf"],["D:/Hexo/public/gallery/index.html","a574305cff9ef72180d8069f563051a4"],["D:/Hexo/public/gzsh/index.html","0730fb8d707d396abd311cc6588cce43"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","2dcfebcc3429db76f749e5276941af09"],["D:/Hexo/public/index.html","951092eff7b5877883c1f933397b2e8b"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","357ec8f44564ce03ba3cf32d9230656b"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/page/2/index.html","323915d11bddfa19d4a24f34a45edff2"],["D:/Hexo/public/pan/index.html","c72d706f9ad142cd57a0cd981dc7141b"],["D:/Hexo/public/private/index.html","dd11f7638263507b48d67bdb508535d8"],["D:/Hexo/public/sjbz/index.html","d70ca354217bc6ff3230d9a249a6c59e"],["D:/Hexo/public/sjsy/index.html","bab85ec2c2cfe08ce785bf5e493e53a2"],["D:/Hexo/public/tags/bupt/index.html","e9b535903847ffd7e6bca5d8dcc595f0"],["D:/Hexo/public/tags/index.html","041b63e0a6f019b7bfd49345e84f8ac7"],["D:/Hexo/public/tags/信息/index.html","e66f590b7faf500d07fdd1306a8866bb"],["D:/Hexo/public/tags/吐槽/index.html","e68106f26640e46031e89734a1af1a6a"],["D:/Hexo/public/tags/娱乐/index.html","3d1b8a1b33d8c5d6876869c0db07761c"],["D:/Hexo/public/tags/故事/index.html","b1438db5a8b3cb8675905177d007bbf6"],["D:/Hexo/public/tags/数码/index.html","e6973d0ff5d7176b8d4595f712ba43d1"],["D:/Hexo/public/tags/网易云/index.html","c8d66d33434ec90a585c631272186aa9"],["D:/Hexo/public/tags/翻唱/index.html","c41d23e823e35ae8be39a9a4758053be"],["D:/Hexo/public/talk/index.html","a06a8bdcb6cbe70eb734a06eabc5f87e"],["D:/Hexo/public/video/index.html","b58f2298fe5491572df38c086f061926"],["D:/Hexo/public/zipai/index.html","02f26c9a1952fe1c5417894cb897b9a0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







