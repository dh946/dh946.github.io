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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","598445bb752fb970dcd40996aa784b80"],["D:/Hexo/public/2020/08/17/201万年薪的华为“天才少年”真面目曝光，我们都被骗了：醒醒吧，什么天才！/index.html","b72aafdb97c5496471c0188a0b6c152d"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","df10aef6e8c58e54c0246098b83f56a1"],["D:/Hexo/public/2020/09/06/表情/index.html","78657f9ab5e752a24469ec25b85fbd8f"],["D:/Hexo/public/2020/09/07/热榜/index.html","118613cde737e5b9c08bb3dfbce9a53f"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","a6800710584e9b64358155654d49af8f"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","966311ec717cf6703489db5334d88869"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","25cece9317fc1631eb2d85321f307c84"],["D:/Hexo/public/JLU/index.html","0a301e090ffa65bc0d45ff6189ac3b47"],["D:/Hexo/public/Jay/index.html","029c3152fe99deb19d7de7fe0fdc6ba3"],["D:/Hexo/public/about/index.html","5aa6118843fc765b8a69169d7ec4263f"],["D:/Hexo/public/archives/2018/03/index.html","9d4b87e34f8324feb7e0430b9e2b26cf"],["D:/Hexo/public/archives/2018/index.html","d6565752af00cad2b3e1c3652cb25cae"],["D:/Hexo/public/archives/2020/08/index.html","fc8326f9a577a90b7d6dc4a45f7a62a0"],["D:/Hexo/public/archives/2020/09/index.html","9e3f2a64be6c6d108f95fe21d0233a79"],["D:/Hexo/public/archives/2020/index.html","dc3657daf3ffec9e7cd3660c497f344c"],["D:/Hexo/public/archives/index.html","28d37d3163ea57d6b9ccfcee0ceec125"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","b767a8555e597a11019fc99dc8a438bb"],["D:/Hexo/public/categories/article/index.html","f590aab6cf8a773b8b53f3276ef2dc38"],["D:/Hexo/public/categories/index.html","ba8e0bcfcfbdbea199982e9113df856f"],["D:/Hexo/public/categories/网站/index.html","dc5018d14acd9628ec43e08287802dc9"],["D:/Hexo/public/categories/音乐/index.html","95c118b98ee806fb1094d52f2b6f0031"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","c0b1c54c1491c0cd87745d1a3cbe1cfa"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","8c9cbea0ad587aa1c7f019da6bde881d"],["D:/Hexo/public/fun1/index.html","0a43be1ca6f237b65e596b58a714bd16"],["D:/Hexo/public/fun2/index.html","39f760a2c75c6527203f0512402c689c"],["D:/Hexo/public/fun3/index.html","318b88e8fdd58f8e62afd57a97b2d5fd"],["D:/Hexo/public/fun4/index.html","6225365d2952a41995d56217509c115f"],["D:/Hexo/public/fun5/index.html","1547e309a2b5ad4fa171a08b205d9a45"],["D:/Hexo/public/fun6/index.html","1bef4e476aa97d0e5e3abd0b447a9e1f"],["D:/Hexo/public/fun7/index.html","6ce93daf7fc23de9d1578ce8ada1430a"],["D:/Hexo/public/fun8/index.html","921c772cac6c74ec563f70d78fcf26bf"],["D:/Hexo/public/gallery/index.html","d1066962de46d4898164732c9e941cf2"],["D:/Hexo/public/gzsh/index.html","ddc63df450d4bfb28da94a3c2b91d809"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","8fd15676cd97b8b0717835070aaf1740"],["D:/Hexo/public/index.html","c51e105f3bd510b5d7e10f6514b1fe14"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","1eeda9ad394b7ed116e47f23e6a17adb"],["D:/Hexo/public/movieku/index.html","d21e0bd848243cfe0f1504e0e6529f09"],["D:/Hexo/public/movies/index.html","c212b617bcf19598bf0e4664231c4840"],["D:/Hexo/public/pan/index.html","ca60f960cf30996379fde659e19ee077"],["D:/Hexo/public/private/index.html","260b1549f96c31df79d0b676a01e159b"],["D:/Hexo/public/sjbz/index.html","c064a9b2e18b743c1b3385c314560889"],["D:/Hexo/public/sjsy/index.html","1ab10b942eaff30884814ca8a895b572"],["D:/Hexo/public/tags/bupt/index.html","f8fd59e04e865c1ba54ad5e4a70252f8"],["D:/Hexo/public/tags/index.html","5436c993aecddb69b583c8fca9986ba0"],["D:/Hexo/public/tags/信息/index.html","a84c34b0ed965d88f8e45d4604ab5165"],["D:/Hexo/public/tags/数码/index.html","78cdfbbe39ae1c27f570166cabb37bd9"],["D:/Hexo/public/tags/网易云/index.html","f40ae2fc88fdb2c33b156359b99fc15d"],["D:/Hexo/public/talk/index.html","772cba1dfb666954b94b804ee704367f"],["D:/Hexo/public/video/index.html","17e55c9778bf0b47c289efe9e67a3632"],["D:/Hexo/public/zipai/index.html","a3549f7356eba3f0753e7fe366ca3940"]];
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







