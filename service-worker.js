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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","ea3078e2c681d56107e52351fad88661"],["D:/Hexo/public/2020/09/06/表情/index.html","9534b606e01f8e7b59c2e7bec0796a8d"],["D:/Hexo/public/2020/09/07/热榜/index.html","2eef44838e4b8dd9a67f66129308e00a"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","eb726986e64f5a7a2f137f4a38be2b22"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","d9ba1949cc311e22e50b19ae1c08ec92"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","032c90d1569d2b7e7d4f97f1b5f85e8f"],["D:/Hexo/public/2020/10/02/微小说/index.html","6fc2eacf305830e5225c8453efb8afd9"],["D:/Hexo/public/2020/10/12/lyf/index.html","5d971371fc1f19d5f36787d865bea576"],["D:/Hexo/public/2020/10/18/gs1/index.html","df76f6a672fa084192ac3eb23984789f"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","47788af6ae82ea00b69ae38fef15e5a7"],["D:/Hexo/public/2020/10/27/LCD&&OLED/index.html","9368bb59dc643b626e92178eb29196bd"],["D:/Hexo/public/2020/11/10/biden/index.html","79f7bcec69946ceef5cc2cecd9373a0d"],["D:/Hexo/public/JLU/index.html","24a90be3e2008f2d80992c842a175568"],["D:/Hexo/public/about/index.html","3742c3bba5392f3189449e31a7597b09"],["D:/Hexo/public/archives/2018/03/index.html","21b0bd7f7d533a75dd68099976b21081"],["D:/Hexo/public/archives/2018/index.html","762316d3724897ac110d47229e486f93"],["D:/Hexo/public/archives/2020/09/index.html","7e8d0bb4402446afab435e4fbd3b99bb"],["D:/Hexo/public/archives/2020/10/index.html","95d1cc46d54cbb09cc5fbc2a1fb836d7"],["D:/Hexo/public/archives/2020/11/index.html","3dc4dc66e7de385d8546a6cf3f12da0e"],["D:/Hexo/public/archives/2020/index.html","7cdf90dd185614a614e7f2d296ab40c6"],["D:/Hexo/public/archives/2020/page/2/index.html","411bf5e5cc9747a9e543a48f4e946084"],["D:/Hexo/public/archives/index.html","f9ac5fef36fcb9234daefdf9bad01c5a"],["D:/Hexo/public/archives/page/2/index.html","8afd37e4f0cf2c016f546deac0ee5be3"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","59d6a1a7e6e1a7002559a9f4915ca7ff"],["D:/Hexo/public/categories/gallery/index.html","6f38df6bbcbfe9f8dd00b8a400d8f044"],["D:/Hexo/public/categories/index.html","ed1a7d05a0ee6d95b9f841afcce2fbda"],["D:/Hexo/public/categories/music/index.html","fae80a94966acb1a0327f016a5ff5b55"],["D:/Hexo/public/categories/情感/index.html","d849fa6088d1dca48921258fa8ae5adc"],["D:/Hexo/public/categories/文章/index.html","5d80ca2d8ee3430f0917f0b3ce418e53"],["D:/Hexo/public/categories/网站/index.html","f6d8a4012121cd70e7f9ded272bb43da"],["D:/Hexo/public/categories/音乐/index.html","ef69644f30000c5371c1b17dae572126"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","6584fa2a517dc7b7e6d5fbdd8554faec"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","e57b60b9930f498a5be9fcc22f6bf133"],["D:/Hexo/public/favorite/index.html","90d20bd92a75579344b472044a18ab1c"],["D:/Hexo/public/fun1/index.html","5a17d935aab46dd782a8c7953bbdecdb"],["D:/Hexo/public/fun2/index.html","46f927f9ac7da51c205c7865dab765d1"],["D:/Hexo/public/fun3/index.html","07be390177141d77ba6f8d6e0c6a90b5"],["D:/Hexo/public/fun4/index.html","56343e2a8153ed06b09d8089a590e05b"],["D:/Hexo/public/fun5/index.html","ee2051e145628cdcb8bbcfa2904194f5"],["D:/Hexo/public/fun6/index.html","78e939127e9f38f20753d7fa23dc0ba6"],["D:/Hexo/public/fun7/index.html","2364db1ba375a5d8de58a7bfefaa3175"],["D:/Hexo/public/fun8/index.html","3e026ef84bdbafff95db5833ba2fa317"],["D:/Hexo/public/gallery/index.html","c0723ea4184b79883303be88816dc2a5"],["D:/Hexo/public/gzsh/index.html","31ef7aa0d228090f1180aeb6d17e0739"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","2278857de93b75b2ecb8939eaf223b3d"],["D:/Hexo/public/index.html","33c43656f296b91c08ad7a30cc3025a7"],["D:/Hexo/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["D:/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/Hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","0de21900e9177f6c0e3d72bac39d6cee"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/page/2/index.html","72d46ea1170bd55c9532e48b00f00da8"],["D:/Hexo/public/pan/index.html","fb531cfe943a797dbabca70722b7fad8"],["D:/Hexo/public/private/index.html","abb900584f8451fd58952a3fc7f950fa"],["D:/Hexo/public/sjbz/index.html","be0198367078c24b663e192954641281"],["D:/Hexo/public/sjsy/index.html","d7ebbeb2fa3f56877ff9b28dd5d97ed0"],["D:/Hexo/public/tags/bupt/index.html","3ea427e8e81dd52cc057c3ed1d84b2a1"],["D:/Hexo/public/tags/index.html","266b0b534f4299da16ea4de18b9b126e"],["D:/Hexo/public/tags/吐槽/index.html","a9792d258f53bdcfaf005375d83aaf00"],["D:/Hexo/public/tags/娱乐/index.html","df289b4b96ade5cfbc81f6332ef9f21b"],["D:/Hexo/public/tags/故事/index.html","5a028ff9e6ed76e75d2c2ba87639911e"],["D:/Hexo/public/tags/数码/index.html","d11bf2fc0a30dfe5d8f607ff9b8eb4b1"],["D:/Hexo/public/tags/网易云/index.html","5dddc9a3eb33fd802226ec95c12e9f78"],["D:/Hexo/public/tags/翻唱/index.html","8561a16d62d1ca75b52fee69d7ef1108"],["D:/Hexo/public/talk/index.html","442124d87be94470b1120ca5c4cfbb84"],["D:/Hexo/public/video/index.html","b4a7fb88aa949f3f9531a7aa186b37b0"],["D:/Hexo/public/zipai/index.html","968b59b4dc9b30f4bb673621498ecd0c"]];
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







