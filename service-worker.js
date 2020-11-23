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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","18e6423ff76c6cf1315403fc3200f6f5"],["D:/Hexo/public/2020/08/17/华为/index.html","0bfe9c766b7a6323751b0cf8d6e0e22b"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","df9f8ff4c8446bb5141937d3fb6bfb69"],["D:/Hexo/public/2020/09/06/表情/index.html","53a84084a9aa686543bcbfa4e54045b6"],["D:/Hexo/public/2020/09/07/热榜/index.html","3c6bf7f8f7bfd9c81c69c37e02cca2e1"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","c8dded2d748ee2b5213a934c2e355c4e"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","d277f5dc5d120993deab73ab84b0c3f3"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","a6ec4921cfcd9e8381818d91c98c75d7"],["D:/Hexo/public/2020/10/02/微小说/index.html","f18fb5708ecd0b85facbfd768f4b65df"],["D:/Hexo/public/2020/10/12/lyf/index.html","824a6846520df2d4f4d6ef2bfecba5ad"],["D:/Hexo/public/2020/10/18/gs1/index.html","ee80da2eb044570327ec0d8ad8dcf1c6"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","68a1b55d726801aac0c5dcc7f197a873"],["D:/Hexo/public/2020/10/27/LCD&&OLED/index.html","505d4754da1e9f48ae705c970812dcdb"],["D:/Hexo/public/2020/11/10/biden/index.html","5168f349d67b37704b0d51a24a85cfe8"],["D:/Hexo/public/JLU/index.html","b983fc2ea4b1e598ab012245cdcfffa2"],["D:/Hexo/public/about/index.html","b645e7f0ac5b55e46b52d45dd6f2846b"],["D:/Hexo/public/archives/2018/03/index.html","2407379b1a9317a73210d3bb627e202f"],["D:/Hexo/public/archives/2018/index.html","ee5acc6ab05d81d56d0bac7a7830b8fc"],["D:/Hexo/public/archives/2020/08/index.html","ee6d244e04b8936806f00478926cd7d3"],["D:/Hexo/public/archives/2020/09/index.html","35e8dd3718c608c6e97fa2851cda5c55"],["D:/Hexo/public/archives/2020/10/index.html","add4841e425c20ca7ce195fab1cf53f7"],["D:/Hexo/public/archives/2020/11/index.html","9b511adb89521487694f72394570d7fe"],["D:/Hexo/public/archives/2020/index.html","39c861fb62afa8973602e47bc8dd0ac1"],["D:/Hexo/public/archives/2020/page/2/index.html","9caf2055173aeb5b00ff1aa788fa0f5c"],["D:/Hexo/public/archives/index.html","a85956d3a30fa670e39a55a532f1ccbe"],["D:/Hexo/public/archives/page/2/index.html","c74aafdcd873320abb107131fd75caf1"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","892112eed0416b6ffeae88d0e4324352"],["D:/Hexo/public/categories/gallery/index.html","57ce4cf2061b5787a55f2824065e6a91"],["D:/Hexo/public/categories/index.html","101d75de318ae969b299de78b853369f"],["D:/Hexo/public/categories/music/index.html","ff218ac5b0e89846752f3ac7a9100f92"],["D:/Hexo/public/categories/情感/index.html","e913c2d8f3c12962c09ddbbd4b10d83b"],["D:/Hexo/public/categories/文章/index.html","c92180e05882acf6cdb7d47dde6c067e"],["D:/Hexo/public/categories/网站/index.html","4119b8f9ae785fbae71597131b5248c5"],["D:/Hexo/public/categories/音乐/index.html","af327bd41649c6357e100620a4a6f4f4"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","661bb8dbfe3951e262326cb4ce523a3f"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","b763ff6001f53e81a8d3abdbeabc9774"],["D:/Hexo/public/favorite/index.html","e7c9f62cf55af4d6ae0681ba9e78c162"],["D:/Hexo/public/fun1/index.html","48815a2c117c0433dcb0ba4b68f7d717"],["D:/Hexo/public/fun2/index.html","8372e13edc88a211d3cac001a48dd857"],["D:/Hexo/public/fun3/index.html","f4bb88474a04d33a4ab0c0d2fa80f835"],["D:/Hexo/public/fun4/index.html","7dc3de00dee00c018e2f28ed22736496"],["D:/Hexo/public/fun5/index.html","f588b024347785e454a431219264697f"],["D:/Hexo/public/fun6/index.html","37ebf23d4ee96dc64f458690d8bc2c4d"],["D:/Hexo/public/fun7/index.html","291569f619097df077cb66eb4f77ceaa"],["D:/Hexo/public/fun8/index.html","d3092c3770b4736cea30b1073e8be44b"],["D:/Hexo/public/gallery/index.html","e5acd6d9f2a74dccea79a89bf1dcd0ec"],["D:/Hexo/public/gzsh/index.html","cd134a2d6413ebbb0cf9cc761eb06566"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","b32625562c9fff0f9323c6a1fcbb57a9"],["D:/Hexo/public/index.html","55c6e7cba4586b259d26c12349be2651"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","25400d8219eeb429154c3af9e0e4e84e"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/page/2/index.html","c9c3a553de461df7be3c0a1121c6d7b1"],["D:/Hexo/public/pan/index.html","d4076e07f753095590ed1ea2df99560c"],["D:/Hexo/public/private/index.html","eae1772563f8236d12b35ee1563ed75c"],["D:/Hexo/public/sjbz/index.html","2982c9d0164935b9e4ba62b1b24f07c4"],["D:/Hexo/public/sjsy/index.html","65fafb4704f713070db02f65cbb627b9"],["D:/Hexo/public/tags/bupt/index.html","9bf00498d241f00701d830944d754da9"],["D:/Hexo/public/tags/index.html","80bbd375ba682991e3af29ac9d534ca3"],["D:/Hexo/public/tags/信息/index.html","2b5ddf50cbed0a16e052b8d67712183b"],["D:/Hexo/public/tags/吐槽/index.html","e1d2a15017ae44b401d7f559d45c0713"],["D:/Hexo/public/tags/娱乐/index.html","a20d1042d4347b756df6f162f1ba9bdb"],["D:/Hexo/public/tags/故事/index.html","ab6725150313aaca72aacfbd9d2c4cf5"],["D:/Hexo/public/tags/数码/index.html","75558fb39fb920621e4da7d598e693fd"],["D:/Hexo/public/tags/网易云/index.html","c74e577143f5ca32a98c7301184075e1"],["D:/Hexo/public/tags/翻唱/index.html","8ebf090ac10f133aa02fd9f554ab59bc"],["D:/Hexo/public/talk/index.html","25641d349759badaf8e763cca524ccfa"],["D:/Hexo/public/video/index.html","28f51c03eecb9b841b3040ca62f971c9"],["D:/Hexo/public/zipai/index.html","a3b44db25df25810b31e5da2480ac9e7"]];
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







