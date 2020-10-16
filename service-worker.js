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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","4b46bc63017967fcdf45d2ee54c2b82d"],["D:/Hexo/public/2020/08/17/华为/index.html","13c5eb25d87aee1c7bffba289f6d9d33"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","b6aa64ef67badd0fe5e7d6040f790323"],["D:/Hexo/public/2020/09/06/表情/index.html","ada7fd541048e7f8d38a310f2fc65273"],["D:/Hexo/public/2020/09/07/热榜/index.html","33c30a7cc7290da98899a0f9a19655aa"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","9386078715ec2859c4b492ac9d65e9b1"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","64d1e93a83cbee5eaa6c5887b0de2e54"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","a4407ff031471352667feaf09fb9fd2c"],["D:/Hexo/public/2020/10/02/微小说/index.html","1b1d4fd25ce66841f74a8e13f795f8aa"],["D:/Hexo/public/2020/10/12/lyf/index.html","1e6867d828745e50280e55feaa6acbef"],["D:/Hexo/public/JLU/index.html","7302176f16a24f93b9e855832275052f"],["D:/Hexo/public/Jay/index.html","437b695426d0f28e27e885915a45c7ae"],["D:/Hexo/public/about/index.html","22b5c0b1cc9e8b02e61a2a4c8360e695"],["D:/Hexo/public/archives/2018/03/index.html","5fd99cffad85f278449c09fa1a4699f9"],["D:/Hexo/public/archives/2018/index.html","398c1ada0f544f2fecc0c6243d096398"],["D:/Hexo/public/archives/2020/08/index.html","fd5a693c612a970e56877ebfa6528326"],["D:/Hexo/public/archives/2020/09/index.html","9d03adf51b223ca5865b7e92dac24eb4"],["D:/Hexo/public/archives/2020/10/index.html","fc937fb2262b63c1c176398aecc12359"],["D:/Hexo/public/archives/2020/index.html","7518f5c30133b420392e5633b40c37aa"],["D:/Hexo/public/archives/index.html","80374fec049691b7e80cd440c0fd976b"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","1445e5c7ec49ce0e489df40e90f47732"],["D:/Hexo/public/categories/gallery/index.html","17d1a1f54ee914a274b9fe7009b03e46"],["D:/Hexo/public/categories/index.html","e4798cc4b71cb754835a69b5cd9d1cc5"],["D:/Hexo/public/categories/情感/index.html","10ab18c599e1125c80e8a88514d6e99a"],["D:/Hexo/public/categories/文章/index.html","36b73c09f909796dcbb257215f36863a"],["D:/Hexo/public/categories/网站/index.html","4598c5e03147e288e607df3896784f4f"],["D:/Hexo/public/categories/音乐/index.html","4971b79c244bb22fbac84732a180682f"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","661bb8dbfe3951e262326cb4ce523a3f"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","e3e7c7af0e5d2a327a992dd0ca9b7979"],["D:/Hexo/public/fun1/index.html","cb01dee2b006d244543b972c0ba2e828"],["D:/Hexo/public/fun2/index.html","4479d2e9d7f8715b374951b5bf4ed962"],["D:/Hexo/public/fun3/index.html","f7f719b99e08b68ff2a7e0498b25a1af"],["D:/Hexo/public/fun4/index.html","04661b0b30b1acc0baa9366f2930da24"],["D:/Hexo/public/fun5/index.html","529cd4a77f4e364f3a13759a5cdd2a4d"],["D:/Hexo/public/fun6/index.html","951b211112104add0825eee41ab64841"],["D:/Hexo/public/fun7/index.html","a3d61a0a40b737299d25bb61a2eed957"],["D:/Hexo/public/fun8/index.html","b3563861a4983452308587fead124cba"],["D:/Hexo/public/gallery/index.html","a937c16008c0d43aadbe4561f21b4ea2"],["D:/Hexo/public/gzsh/index.html","1f0362d4faf094c504f2207f4ad6da5d"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","7ed3bb3b327c8bfa8a01cd67c3bd6b38"],["D:/Hexo/public/index.html","a1d38a2f5f5de029dffbf4fa6cf19eaa"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","7b4e60b1b12950ae491644810d9c82a5"],["D:/Hexo/public/movieku/index.html","9d947e5593d3b338bdc02d1cff330419"],["D:/Hexo/public/movies/index.html","4ca6ed4932b5adb79495a31e03d034cf"],["D:/Hexo/public/pan/index.html","d771b07f3d645914e0bbd15930bd4228"],["D:/Hexo/public/private/index.html","31068d64110492c1a4dc74b60fb24696"],["D:/Hexo/public/sjbz/index.html","0d2e3caae5ed5e8a2292e4755205f598"],["D:/Hexo/public/sjsy/index.html","6c4b01ff9b9f80bb09e1187eb8f02c1e"],["D:/Hexo/public/tags/bupt/index.html","a4f22f3cdff6efbc689dbc39020669c8"],["D:/Hexo/public/tags/index.html","84fcaa3505f711b5490d528dc2eb1c1c"],["D:/Hexo/public/tags/信息/index.html","9f09ae9fac089a12bf7c010686ee29e9"],["D:/Hexo/public/tags/吐槽/index.html","177716a678669775c710f66b7646f1de"],["D:/Hexo/public/tags/娱乐/index.html","ecd9d44df31128b6c2d8868c088ad7d7"],["D:/Hexo/public/tags/故事/index.html","f306eeeed6e19e5c4168cef428398470"],["D:/Hexo/public/tags/数码/index.html","024f08af4502797d9d892e44c12bb637"],["D:/Hexo/public/tags/网易云/index.html","017398492568e04b17be2c3b66147e98"],["D:/Hexo/public/talk/20201001090507.html","e131a95e2ef7c277a40a37a94ccf4467"],["D:/Hexo/public/talk/index.html","b07eb553a011293ef9d34aea735480d1"],["D:/Hexo/public/video/index.html","3aa56578f5fd80d1e073e95733eb99e6"],["D:/Hexo/public/zipai/index.html","a79970dfd38f16875edc159815fda549"]];
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







