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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","1d92cce26369fb170d01aa60d0f32725"],["D:/Hexo/public/2020/08/17/华为/index.html","79ef3aeed2d2de1311c71d61964ea185"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","96602db91ee89aa9b6922a7a919eab9d"],["D:/Hexo/public/2020/09/06/表情/index.html","d83d680caebb36f9cf18da6362e0783f"],["D:/Hexo/public/2020/09/07/热榜/index.html","0ee692903632f72ccd0937973e2688f5"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","220704d15be89f10c93b878693aa9f8e"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","a9abc76edcfd411c2db625629fe647a5"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","89f80349891566e95f857f2966fe8ffc"],["D:/Hexo/public/2020/10/02/微小说/index.html","81374f5a510dc094f581131ff7d295fa"],["D:/Hexo/public/2020/10/12/lyf/index.html","bf0f6211e6751af38a896b289ac2f32d"],["D:/Hexo/public/2020/10/17/屋顶告白大会/index.html","f83c6e37e03d62570f533e6d91d9e8f6"],["D:/Hexo/public/2020/10/18/gs1/index.html","908222ed11b8d3ed1001be43b2efdb8a"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","3327c2ee10bd4fb761f47134f2ada252"],["D:/Hexo/public/JLU/index.html","7c27c6fcfc95c0d5c84839cdb2ce5d04"],["D:/Hexo/public/about/index.html","e5f55c6d3dc870aa9e2812ac31768820"],["D:/Hexo/public/archives/2018/03/index.html","ad7eddd20bbfedfc942c3fe97f873fd9"],["D:/Hexo/public/archives/2018/index.html","96b4d21c9220890c5057a84885aeabeb"],["D:/Hexo/public/archives/2020/08/index.html","82efb34a0d27c470be16a283ce3c660e"],["D:/Hexo/public/archives/2020/09/index.html","554da8086fccb477365aff5658a22b43"],["D:/Hexo/public/archives/2020/10/index.html","eb39df0a21316c5e6fc979426210017d"],["D:/Hexo/public/archives/2020/index.html","949792a7691be4b62ccf29e96db31360"],["D:/Hexo/public/archives/2020/page/2/index.html","96ff350b5c65bae0bbdded2963d0da39"],["D:/Hexo/public/archives/index.html","a82ccc1cd9e9a2eb771e8cafe194fc96"],["D:/Hexo/public/archives/page/2/index.html","d8294561e2d20aefb10141fa37685a04"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","6ee8d8ae984c3728e92ea9abe5cd7762"],["D:/Hexo/public/categories/gallery/index.html","06999f8038f3978782e25cca5cf25c34"],["D:/Hexo/public/categories/index.html","04253cd536d8dd36989c379bd7dda9fc"],["D:/Hexo/public/categories/music/index.html","8bad5d7fd3458a63eb9498e321983a33"],["D:/Hexo/public/categories/video/index.html","4407eeb472505a306d6c3f253e4f5a66"],["D:/Hexo/public/categories/情感/index.html","7a9ad3097fb48ef44c09314e155cac5d"],["D:/Hexo/public/categories/文章/index.html","d10b090ea1d3ccd561cae3c8193dd700"],["D:/Hexo/public/categories/网站/index.html","133877435a2700a28e90634c0c8fde50"],["D:/Hexo/public/categories/音乐/index.html","1e31bbab6ab378611791cf5825e0c91e"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","661bb8dbfe3951e262326cb4ce523a3f"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","b6f7ec8c6810306f3bf0addc5acdf215"],["D:/Hexo/public/favorite/index.html","27ca1ed9ab2d8b460cf534906fb01af7"],["D:/Hexo/public/fun1/index.html","be1821265d3bc26d86b69ec280149c29"],["D:/Hexo/public/fun2/index.html","c70e62c3ff3772f7479a6bfe8b73461f"],["D:/Hexo/public/fun3/index.html","dbbcd8cbbccdcf358bc48a17d002eae4"],["D:/Hexo/public/fun4/index.html","f34f0edbf208912a4b15357b6348a08c"],["D:/Hexo/public/fun5/index.html","ec50f412e41503d507bb64d5e77e065e"],["D:/Hexo/public/fun6/index.html","ec3dc719a2035455a235e577cb1ae6f1"],["D:/Hexo/public/fun7/index.html","8920a5f0c56e592267d6065081208786"],["D:/Hexo/public/fun8/index.html","a48f58399cc171d2dfc6211533ed4e37"],["D:/Hexo/public/gallery/index.html","ff639e8a666ab290679b03ceeefddeb9"],["D:/Hexo/public/gzsh/index.html","0730fb8d707d396abd311cc6588cce43"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","95fba48236d6c3957514a4919b6175f9"],["D:/Hexo/public/index.html","fa2ddab66021ab5cfbe72ee1cb063081"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","a7ce15cc6e8fb8f17704a66ed00416d3"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/page/2/index.html","a28243fa607277ddafd18e0d5a9f577f"],["D:/Hexo/public/pan/index.html","16fd44a076f7f9211a7efcb7134bd7ed"],["D:/Hexo/public/private/index.html","dd11f7638263507b48d67bdb508535d8"],["D:/Hexo/public/sjbz/index.html","d70ca354217bc6ff3230d9a249a6c59e"],["D:/Hexo/public/sjsy/index.html","bab85ec2c2cfe08ce785bf5e493e53a2"],["D:/Hexo/public/tags/bupt/index.html","23106ca8d6c9d03b4ed2444b781c930e"],["D:/Hexo/public/tags/index.html","c7ec9218a7ae60a7c6c01274028ce8f5"],["D:/Hexo/public/tags/信息/index.html","e41cc1e53911f74f1477c368581ad44c"],["D:/Hexo/public/tags/吐槽/index.html","a53b6d961a70adfdf8bf6404a973e2d4"],["D:/Hexo/public/tags/娱乐/index.html","112ddbce81778940980500541112b432"],["D:/Hexo/public/tags/故事/index.html","d95bf397f0e5e408c61ac00d9e12f1d0"],["D:/Hexo/public/tags/数码/index.html","1a2c5d7393fc8e4dd03e85611ccae218"],["D:/Hexo/public/tags/网易云/index.html","225657459a76ac2bff36f0ef620d61f4"],["D:/Hexo/public/tags/翻唱/index.html","fa56e0579e8502d772b0dbe004c38131"],["D:/Hexo/public/talk/index.html","a06a8bdcb6cbe70eb734a06eabc5f87e"],["D:/Hexo/public/video/index.html","b58f2298fe5491572df38c086f061926"],["D:/Hexo/public/zipai/index.html","4d6cabe27ac290009ffab30a510f133c"]];
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







