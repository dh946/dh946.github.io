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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","d28ce8d00fb9374876f541615a197cfe"],["D:/Hexo/public/2020/08/17/201万年薪的华为“天才少年”真面目曝光，我们都被骗了：醒醒吧，什么天才！/index.html","f583e1685245337fbd6949198884aa42"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","43e03a05bd8b82c6613180252378584c"],["D:/Hexo/public/2020/09/06/表情/index.html","b1a5aefa2b1e235fb42b7be30002a1e7"],["D:/Hexo/public/2020/09/07/热榜/index.html","df5fef97e5d87de6b84fdf9fee2b3ec5"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","198959038d07f9be0b83a1a142ff941a"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","1f4e6111001d5e49f8a949724b1d42c1"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","ea99b68d8ed1961893f2237670deb3e6"],["D:/Hexo/public/JLU/index.html","3446499d47a8071c6c55fc575c3fad74"],["D:/Hexo/public/Jay/index.html","bef4c7d8dd746cc436a857547026e6e1"],["D:/Hexo/public/about/index.html","a84b50644ea40a94ca551840860f5f2f"],["D:/Hexo/public/archives/2018/03/index.html","249b4b03c4131e0a85048c46c8e4b5c9"],["D:/Hexo/public/archives/2018/index.html","4d77337d0f036ab66df3221e77d4159a"],["D:/Hexo/public/archives/2020/08/index.html","5635ee1598ace2499c79d405654e9cb6"],["D:/Hexo/public/archives/2020/09/index.html","fb4cca9c7f6393db5367dec1c477ad5c"],["D:/Hexo/public/archives/2020/index.html","ec98b0349e39fce2ddf68cc11f3394eb"],["D:/Hexo/public/archives/index.html","f48c05f50710769bb2495da765ce1227"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","41f322ad88338827bdc98e8440b2e653"],["D:/Hexo/public/categories/article/index.html","8384f3b6ff55202c39705282ffb1b89e"],["D:/Hexo/public/categories/index.html","3db2002394551aa940f7db94093290bf"],["D:/Hexo/public/categories/网站/index.html","e06fae865eaa7105641366a1d3d86ac9"],["D:/Hexo/public/categories/音乐/index.html","c551005e1b744219d62eb407e2d2c7b6"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","c0b1c54c1491c0cd87745d1a3cbe1cfa"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","271d941565e04aee5436054b083416c4"],["D:/Hexo/public/fun1/index.html","9f0a0705976d98b20fb52e9e54057374"],["D:/Hexo/public/fun2/index.html","664e3b55739bb8eb0b9da9e6dea34314"],["D:/Hexo/public/fun3/index.html","29b5136eaa4983d286424e4f7814e00e"],["D:/Hexo/public/fun4/index.html","57a9b664cf56fbd72f7c5ca33d6de688"],["D:/Hexo/public/fun5/index.html","7a9d5f414dba6c32b1615ae24e2e908c"],["D:/Hexo/public/fun6/index.html","306ba140aa7e7cd167b6302e0ed863f0"],["D:/Hexo/public/fun7/index.html","e17b5e10cb3c3865519bfcbc4917f132"],["D:/Hexo/public/fun8/index.html","0f97b34c5603839b1cedf49f1385046b"],["D:/Hexo/public/gallery/index.html","9c14b6a41ca707ad9830fbd7bb219056"],["D:/Hexo/public/gzsh/index.html","3f92fc737f05721925fc80595cad0806"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","4ac5a5f10e71a99a1b33a6112a11d512"],["D:/Hexo/public/index.html","54b9ce4017e6096f423b374e05ca73a4"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","a79833ccf74c8f47f50144e2f65d24d2"],["D:/Hexo/public/movieku/index.html","71b7f8b37cfd246037d3aa827e301d86"],["D:/Hexo/public/movies/index.html","c212b617bcf19598bf0e4664231c4840"],["D:/Hexo/public/pan/index.html","30454f9eec49d848703e78131b274fc7"],["D:/Hexo/public/private/index.html","c4ddab016274e9765172063d35ae75e7"],["D:/Hexo/public/sjbz/index.html","d73ddd969e2763f015a6d15f82c747f3"],["D:/Hexo/public/sjsy/index.html","dd34272427b7de064f91746c877b0cc9"],["D:/Hexo/public/tags/bupt/index.html","846472e2d228a4f21734ae87608a02ab"],["D:/Hexo/public/tags/index.html","0c57deb73353c2ad2651b7bbe93a63cc"],["D:/Hexo/public/tags/信息/index.html","461ed233c8ff8a0746dfcd4b4f8abea4"],["D:/Hexo/public/tags/数码/index.html","c9a09dfb771ec5fff0b20d4d908ec73f"],["D:/Hexo/public/tags/网易云/index.html","010f26031e55955017b3c154f4c5e50d"],["D:/Hexo/public/talk/index.html","b603239e208279061385cd41c5a641a1"],["D:/Hexo/public/video/index.html","590496fb26fa7b238a3eed7121e94858"],["D:/Hexo/public/zipai/index.html","aee24f1f6af3c06b43bce2f1483d9b26"]];
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







