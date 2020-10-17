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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","b8b34fb2bf9ff6c1c08ebb1a3ecd8976"],["D:/Hexo/public/2020/08/17/华为/index.html","fc53c88490030c19086ce28fc3d70e15"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","6a7ec57a5a711502dfdb52a3a55becf6"],["D:/Hexo/public/2020/09/06/表情/index.html","fba82dcb086a0dea527cccb69cc52f33"],["D:/Hexo/public/2020/09/07/热榜/index.html","fc0f1e1e796d45548c113018e865a78e"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","f5865245c89dd1010004160826bb1768"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","0ef42decbffef138456f039ee8861650"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","16421692d171bb7f100cc0eb1137680e"],["D:/Hexo/public/2020/10/02/微小说/index.html","1df91a45b06879879886734356d70061"],["D:/Hexo/public/2020/10/12/lyf/index.html","d261df051c3946f23d00ade62fcb317a"],["D:/Hexo/public/JLU/index.html","144cb9f8725b0712be59a4e4d00c3b57"],["D:/Hexo/public/about/index.html","ddc5b9a3ce81ca310fc7c3807de32332"],["D:/Hexo/public/archives/2018/03/index.html","35d874f5cb06dcc62f293b14f8070952"],["D:/Hexo/public/archives/2018/index.html","da322e5484ac281c324b1f11eabe2287"],["D:/Hexo/public/archives/2020/08/index.html","07a7a4a88b9c07d0999528bf73979751"],["D:/Hexo/public/archives/2020/09/index.html","7ab99431d452241a54130e0262002adf"],["D:/Hexo/public/archives/2020/10/index.html","93bda144a40caba32626cd2b7e783a6d"],["D:/Hexo/public/archives/2020/index.html","445477ce397b9dabc47063cc7a4e43d2"],["D:/Hexo/public/archives/index.html","234996a639a02e4e1bcd9d991962a117"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","f3226115b30fb9f9e052943a75d3bc3f"],["D:/Hexo/public/categories/gallery/index.html","277a5ae593a3e044b3ed98b0a0ce7a62"],["D:/Hexo/public/categories/index.html","b0c7011b96cf1ec76415169849842930"],["D:/Hexo/public/categories/情感/index.html","aff28115acbf0f78dfd34e1d1ea1a531"],["D:/Hexo/public/categories/文章/index.html","ee6d3922950e8fc1592d88e90856b7ff"],["D:/Hexo/public/categories/网站/index.html","aace9eb29c03e2a75fe1f42195a31aee"],["D:/Hexo/public/categories/音乐/index.html","e331ed08d3a19a108dc5349d71279518"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","661bb8dbfe3951e262326cb4ce523a3f"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","1e5217e11b13e09f333fdc2dba0f4ec4"],["D:/Hexo/public/favorite/index.html","6647338bf26f22f037e3eca6905bdff6"],["D:/Hexo/public/fun1/index.html","4e496224cf93b2a314ea638c51ca2c65"],["D:/Hexo/public/fun2/index.html","1b964f5a40902440c8035dd2402876a7"],["D:/Hexo/public/fun3/index.html","1f26873639929ebb765edb9aeb83a26e"],["D:/Hexo/public/fun4/index.html","d13a27e9cb6208320bceb744aa511a66"],["D:/Hexo/public/fun5/index.html","81942b13acfae78a5030db7701df9520"],["D:/Hexo/public/fun6/index.html","ecd727a71060243e37ecc1454d3f2dc7"],["D:/Hexo/public/fun7/index.html","966fd9b2b420b1bb81a680f3559641b8"],["D:/Hexo/public/fun8/index.html","590167e62e0a0dec16bea4614c002e84"],["D:/Hexo/public/gallery/index.html","a43906457d2305bb441dc4c747c1e827"],["D:/Hexo/public/gzsh/index.html","a29bfb1684ff1821068eb4e36321c91d"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","3bd3df0592607e461f8edb26382b17f3"],["D:/Hexo/public/index.html","e327d94099a7c5025e5ba7c95c5dfa70"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","cc6efc0dd8d7d0576a6a9f3391c07e94"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/pan/index.html","fc54a2dcdc97e6ddef20c2415cf34fe8"],["D:/Hexo/public/private/index.html","bd205706af2de98c2caf8dcd87d87467"],["D:/Hexo/public/sjbz/index.html","eb801c2884056105e0e1a917b2d7ec7d"],["D:/Hexo/public/sjsy/index.html","b263bd154173c8035d2efe21e19d7377"],["D:/Hexo/public/tags/bupt/index.html","71f1f68e5d9d0b6439e3011363399cca"],["D:/Hexo/public/tags/index.html","99b62b646326efa4315a8d1f14c7ba16"],["D:/Hexo/public/tags/信息/index.html","55afe96d2a6124f2eba071cc9e6520be"],["D:/Hexo/public/tags/吐槽/index.html","df04c81055c86d17b7d6b8b02a17708e"],["D:/Hexo/public/tags/娱乐/index.html","5fb474e8c45b04f2591920bd3ff7a498"],["D:/Hexo/public/tags/故事/index.html","b1e24400dcf7cf58d0ea2ceb0e2ff67e"],["D:/Hexo/public/tags/数码/index.html","5b5eee7e2326698bacd83d21587c5594"],["D:/Hexo/public/tags/网易云/index.html","fcf66981a99ebd61b9fbe03011facb3d"],["D:/Hexo/public/talk/20201001090507.html","a2e50baae348295f95f7303f668d926a"],["D:/Hexo/public/talk/index.html","3a7758524baa8feb7b257e16164cc7aa"],["D:/Hexo/public/video/index.html","7e34b04a8bd8f219241ac07591f0fb40"],["D:/Hexo/public/zipai/index.html","293e5a1efcf3c6dd20fd5c4caaba088f"]];
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







