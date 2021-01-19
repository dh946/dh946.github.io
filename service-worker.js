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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","ea3078e2c681d56107e52351fad88661"],["D:/Hexo/public/2020/09/06/表情/index.html","9534b606e01f8e7b59c2e7bec0796a8d"],["D:/Hexo/public/2020/09/07/热榜/index.html","2eef44838e4b8dd9a67f66129308e00a"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","eb726986e64f5a7a2f137f4a38be2b22"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","d9ba1949cc311e22e50b19ae1c08ec92"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","032c90d1569d2b7e7d4f97f1b5f85e8f"],["D:/Hexo/public/2020/10/02/微小说/index.html","6fc2eacf305830e5225c8453efb8afd9"],["D:/Hexo/public/2020/10/12/lyf/index.html","5d971371fc1f19d5f36787d865bea576"],["D:/Hexo/public/2020/10/18/gs1/index.html","df76f6a672fa084192ac3eb23984789f"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","47788af6ae82ea00b69ae38fef15e5a7"],["D:/Hexo/public/2020/10/27/LCD&&OLED/index.html","9368bb59dc643b626e92178eb29196bd"],["D:/Hexo/public/2020/11/10/biden/index.html","79f7bcec69946ceef5cc2cecd9373a0d"],["D:/Hexo/public/JLU/index.html","24a90be3e2008f2d80992c842a175568"],["D:/Hexo/public/about/index.html","3742c3bba5392f3189449e31a7597b09"],["D:/Hexo/public/archives/2018/03/index.html","93a57a60a915cc36484f36881716c167"],["D:/Hexo/public/archives/2018/index.html","04c1a3d372812d21d3b75541afd8e6cf"],["D:/Hexo/public/archives/2020/09/index.html","e70ea1fa458d048bc1d17c6e99e038b3"],["D:/Hexo/public/archives/2020/10/index.html","d1398e413c938e4e64850d43a9c36bec"],["D:/Hexo/public/archives/2020/11/index.html","fdc0798698091773d6f0ea5b13f9f30e"],["D:/Hexo/public/archives/2020/index.html","9895c403a65a257d7f759c325ff8cbd0"],["D:/Hexo/public/archives/2020/page/2/index.html","dfcd751deef7ff8d7953b1532480a393"],["D:/Hexo/public/archives/index.html","49b147e7c68c98ee2fb3b29abca94349"],["D:/Hexo/public/archives/page/2/index.html","b1aa05573d5e0aabf3aaca348a40da36"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","59d6a1a7e6e1a7002559a9f4915ca7ff"],["D:/Hexo/public/categories/gallery/index.html","bae58c3ab6f3f6ff5ce681cd77601f36"],["D:/Hexo/public/categories/index.html","b48622dacd803c8a5cd1c787cef546b7"],["D:/Hexo/public/categories/music/index.html","ab987a7bf86d35e391a8cb54486661f6"],["D:/Hexo/public/categories/情感/index.html","b1194b9f2fcb2128f01206b6b1104b79"],["D:/Hexo/public/categories/文章/index.html","f3866f9c922cce575ff18110ccce58fc"],["D:/Hexo/public/categories/网站/index.html","bed3e42880333d4716843bf8b5abb5cf"],["D:/Hexo/public/categories/音乐/index.html","ebe2baa2c016e6e28f80dc645e70e518"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","6584fa2a517dc7b7e6d5fbdd8554faec"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","a028440233f3c701093ab8faf00f14e8"],["D:/Hexo/public/favorite/index.html","7f1c6c53c7bdeab779d2ec63057fb126"],["D:/Hexo/public/fun1/index.html","0a4095e2245c0e8e31e69862b785a80d"],["D:/Hexo/public/fun2/index.html","532d69f5fe0ef1ce85c1c3dc5c34a81c"],["D:/Hexo/public/fun3/index.html","db9dd7959331b51be0e6d9e77741d246"],["D:/Hexo/public/fun4/index.html","a23be940139f44987e573b4fe13c2265"],["D:/Hexo/public/fun5/index.html","775aab571da34d507dc3b84c10ee1d5b"],["D:/Hexo/public/fun6/index.html","0d3731e8998e49bad4a43288f614fa97"],["D:/Hexo/public/fun7/index.html","a7ecf0eadf9c9d7bf15384bc025dad3e"],["D:/Hexo/public/fun8/index.html","91d52f44e5e00a60d7ff395d080e1f09"],["D:/Hexo/public/gallery/index.html","ae35de77261379c381ce56b276cf377d"],["D:/Hexo/public/gzsh/index.html","31ef7aa0d228090f1180aeb6d17e0739"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","17396e72108661b71fbdcdd9f564a531"],["D:/Hexo/public/index.html","5aae60e8b1d0b294d7a1a2f89022cac4"],["D:/Hexo/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["D:/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/Hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","3396ede837a81e57e5393c70359791ff"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/page/2/index.html","6095d8776b4a798c6a23319b8bc05198"],["D:/Hexo/public/pan/index.html","e377fdb19fb586f46020190bd732ad84"],["D:/Hexo/public/private/index.html","abb900584f8451fd58952a3fc7f950fa"],["D:/Hexo/public/sjbz/index.html","be0198367078c24b663e192954641281"],["D:/Hexo/public/sjsy/index.html","d7ebbeb2fa3f56877ff9b28dd5d97ed0"],["D:/Hexo/public/tags/bupt/index.html","0239a0107847368595937e191aff7dbe"],["D:/Hexo/public/tags/index.html","07e9c7f923af58563f90458f97a557d0"],["D:/Hexo/public/tags/吐槽/index.html","509f9042d54f236b0b57ec57598d91c1"],["D:/Hexo/public/tags/娱乐/index.html","441a7f0f4c14e69428ce0ba739b89528"],["D:/Hexo/public/tags/故事/index.html","2c109f33686172c4a206819bb3516487"],["D:/Hexo/public/tags/数码/index.html","e50330a1ef42bfdd06ec99c6f5f373ad"],["D:/Hexo/public/tags/网易云/index.html","d8d8d4b8837c06ec05c641b20a60adb9"],["D:/Hexo/public/tags/翻唱/index.html","ca5f86c64af538e1abb7474152fc49b8"],["D:/Hexo/public/talk/index.html","442124d87be94470b1120ca5c4cfbb84"],["D:/Hexo/public/video/index.html","b4a7fb88aa949f3f9531a7aa186b37b0"],["D:/Hexo/public/zipai/index.html","82b8c180ac6275bfb2d508a0b5b825ac"]];
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







