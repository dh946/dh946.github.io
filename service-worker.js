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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","598445bb752fb970dcd40996aa784b80"],["D:/Hexo/public/2020/08/17/201万年薪的华为“天才少年”真面目曝光，我们都被骗了：醒醒吧，什么天才！/index.html","b72aafdb97c5496471c0188a0b6c152d"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","df10aef6e8c58e54c0246098b83f56a1"],["D:/Hexo/public/2020/09/06/表情/index.html","78657f9ab5e752a24469ec25b85fbd8f"],["D:/Hexo/public/2020/09/07/热榜/index.html","118613cde737e5b9c08bb3dfbce9a53f"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","a6800710584e9b64358155654d49af8f"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","966311ec717cf6703489db5334d88869"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","25cece9317fc1631eb2d85321f307c84"],["D:/Hexo/public/JLU/index.html","cd9197333bae2d330e75d6c17b5b0112"],["D:/Hexo/public/Jay/index.html","309f59750492a6bc65722bf3446e82da"],["D:/Hexo/public/about/index.html","e07b6021e0233adfab648bbfd69a1ce8"],["D:/Hexo/public/archives/2018/03/index.html","485411d9ae11af00fe6e3b5093954ba5"],["D:/Hexo/public/archives/2018/index.html","01eeb7840be08c03b3721a5370846951"],["D:/Hexo/public/archives/2020/08/index.html","1167ba2032ddaa57ec1beba2d042ae88"],["D:/Hexo/public/archives/2020/09/index.html","d27b7873f04814e661d42d99028eb708"],["D:/Hexo/public/archives/2020/index.html","811ce7b4bea4c053285f5e0fd7f13517"],["D:/Hexo/public/archives/index.html","34c573ca8c6402230681f3cf3676908a"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","345183d72dfc337faedacae14664e777"],["D:/Hexo/public/categories/article/index.html","a1c7445715b6f572128beb1df7385f69"],["D:/Hexo/public/categories/index.html","12259098661354b3785e9d653d6d95c6"],["D:/Hexo/public/categories/网站/index.html","5594638a65e906e0390fb2c175197627"],["D:/Hexo/public/categories/音乐/index.html","6ba41dc76c9ea225749cee52bfb14705"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","c0b1c54c1491c0cd87745d1a3cbe1cfa"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","d95c8e3a9c202398b271c47891497475"],["D:/Hexo/public/fun1/index.html","e923411f9bd05cb8fade928444108024"],["D:/Hexo/public/fun2/index.html","9c93420f0a20aad68b4922226d0b85d6"],["D:/Hexo/public/fun3/index.html","031d26d000187715c659aaeda25b359d"],["D:/Hexo/public/fun4/index.html","6f6b8eec961f932b8c87f0d66852e10f"],["D:/Hexo/public/fun5/index.html","fe643895ed547a5adb303905c1343e36"],["D:/Hexo/public/fun6/index.html","94f51439f2972dbfbda9bc0b9c900f13"],["D:/Hexo/public/fun7/index.html","dc21606068368b130cfd04b23985de69"],["D:/Hexo/public/fun8/index.html","d4648e38d6e4145375bb63afc6cb439f"],["D:/Hexo/public/gallery/index.html","a48927e2ef2d9a50487f4d439963141e"],["D:/Hexo/public/gzsh/index.html","14d9626d9fa537336451eadbdb45aa38"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","00a9d2b2961df9701fec33f8bbdd45a9"],["D:/Hexo/public/index.html","5e593bf81f0e4401050268788ba5b4f2"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","16321ddac1244c291f8521cc34113542"],["D:/Hexo/public/movieku/index.html","d18518351924d108e7cd8f90ea92ed9b"],["D:/Hexo/public/movies/index.html","c212b617bcf19598bf0e4664231c4840"],["D:/Hexo/public/pan/index.html","b4d4256d121ce3da46a6f153441bf757"],["D:/Hexo/public/private/index.html","a9f48c0f40dd2cc9d093ea03c91020ab"],["D:/Hexo/public/sjbz/index.html","027c7be9c364c9e8706c9af0ce18c427"],["D:/Hexo/public/sjsy/index.html","265d7094fc819036a4d8dea4ee66151f"],["D:/Hexo/public/tags/bupt/index.html","c64fb79c6394eb5e3aed7d896b3c58c7"],["D:/Hexo/public/tags/index.html","277c0581ad47018083ecc1b004b27e7d"],["D:/Hexo/public/tags/信息/index.html","82903d09c463a7aba6e55f0c609a4a7a"],["D:/Hexo/public/tags/数码/index.html","7ecd4dee87ead66d6a86f7b6c15b7664"],["D:/Hexo/public/tags/网易云/index.html","a73a7016ee59b3c7e3643ee703570409"],["D:/Hexo/public/talk/index.html","9829759ea7d5042a33e9b3d41faa9155"],["D:/Hexo/public/video/index.html","5dc82b2f9ac5d77854cc4a8807b8e858"],["D:/Hexo/public/zipai/index.html","6eda863bece7630c5718acafbb69e4ff"]];
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







