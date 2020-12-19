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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","d1d4ba99c72f8db2fb5a058b5a599f1a"],["D:/Hexo/public/2020/08/17/华为/index.html","5b464ee4bec46c8dd093c35e12d02064"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","280203339f3cc46eb46cf68e391fef3a"],["D:/Hexo/public/2020/09/06/表情/index.html","68c05908ccedee097394c4161f19bbad"],["D:/Hexo/public/2020/09/07/热榜/index.html","bd351f90a774955c0ddf972d7f367777"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","9c16f543bf5c8e3cbcba2571857939c2"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","ddcb46850c29ef911b395137fc233ea8"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","4acc7723b993fa4a862f37073ab7fe35"],["D:/Hexo/public/2020/10/02/微小说/index.html","a2d1d328cb6002fe0ef557e627c4b204"],["D:/Hexo/public/2020/10/12/lyf/index.html","aea6bc3a35a03b4c9251134046010e07"],["D:/Hexo/public/2020/10/18/gs1/index.html","959c2ff66b395e13fc423e9019a1edab"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","2638b63774e89ab72d5b257fa6c76923"],["D:/Hexo/public/2020/10/27/LCD&&OLED/index.html","c8cca99d73c68baddbae351dc0018bba"],["D:/Hexo/public/2020/11/10/biden/index.html","059fe38458dd1c328f6fe7d98d6d9daf"],["D:/Hexo/public/JLU/index.html","d3aaf9f65bc86c238958684cd54f2865"],["D:/Hexo/public/about/index.html","8df61028021d19e5ecc79f9bcb7651dd"],["D:/Hexo/public/archives/2018/03/index.html","fef3cf203298a3c49026d5beee050a23"],["D:/Hexo/public/archives/2018/index.html","b2bad8017ef97a0d403a868f91269cbe"],["D:/Hexo/public/archives/2020/08/index.html","97ac9be357b01b463a2328908abd52f6"],["D:/Hexo/public/archives/2020/09/index.html","074ec4f04d0a6e0da611683c745d8f53"],["D:/Hexo/public/archives/2020/10/index.html","b33df9af135aab432fc6d9b37c5345bc"],["D:/Hexo/public/archives/2020/11/index.html","5a7e298c57cca45635f436b3740b9e86"],["D:/Hexo/public/archives/2020/index.html","09d472e3e535bb505aae5bd3c5ac71ff"],["D:/Hexo/public/archives/2020/page/2/index.html","e19198ede023550ac87b20ce0ad896a4"],["D:/Hexo/public/archives/index.html","7022d57c5b91fc9bd339092abd04f10b"],["D:/Hexo/public/archives/page/2/index.html","96f7e24765717aacb56046a46c3347e1"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","10e1efb80250ec8d2cbb4cc80260881c"],["D:/Hexo/public/categories/gallery/index.html","165533c967d38ab0fc03c8607e63d6d4"],["D:/Hexo/public/categories/index.html","a9e07ebdc1aa2fe07b604e752bbecd82"],["D:/Hexo/public/categories/music/index.html","b835dde9d54eb9d051344384c6b28d38"],["D:/Hexo/public/categories/情感/index.html","17a2b5d5945c478d87ee2d0538d890e0"],["D:/Hexo/public/categories/文章/index.html","6ff5479b85742a78c91ce927def761c4"],["D:/Hexo/public/categories/网站/index.html","08b3a583234722740b61ecc90fdd2477"],["D:/Hexo/public/categories/音乐/index.html","6188db9388806018e9e4ef48bcbfd18a"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","959e630b06c4586e725ca76f6038fa1a"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","6cee272191dce4d9c4db81812dc8e22d"],["D:/Hexo/public/favorite/index.html","5e1b3fe5548e4efe805c326dab4bfd1e"],["D:/Hexo/public/fun1/index.html","222139e8a436b38346b40b3ac65f1a17"],["D:/Hexo/public/fun2/index.html","c365171dffdf8b45ec811345bd7564e3"],["D:/Hexo/public/fun3/index.html","b750fa7f21eb3739a0d51a0529f1957a"],["D:/Hexo/public/fun4/index.html","bf9f3b7035d24407b6507560936e69aa"],["D:/Hexo/public/fun5/index.html","5bf73a0a49b57c621257ffd68c56f732"],["D:/Hexo/public/fun6/index.html","a12d791b50b63eaeb0e317dc46ba752d"],["D:/Hexo/public/fun7/index.html","d47c59db0db8303380ad98fe3e6fab8f"],["D:/Hexo/public/fun8/index.html","afc5cc6170bf91b6fa8b83573425edde"],["D:/Hexo/public/gallery/index.html","dbdddeba2652a57dd04f8273648f5ce5"],["D:/Hexo/public/gzsh/index.html","926c8678c6ca8bfd9e7e27626a7bc9fe"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","70643261e4b19603711b3f3c7de31264"],["D:/Hexo/public/index.html","6baf727f5266175f1a849ae3ae886c46"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","518d10a74c26d6d7bce90348ce9397a3"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/page/2/index.html","bbec3a79ab7d244d246070a5a4215f1a"],["D:/Hexo/public/pan/index.html","5c93df68e607640b9aba4ab443da965c"],["D:/Hexo/public/private/index.html","fb718273138eaaa7246a967d6ae2c434"],["D:/Hexo/public/sjbz/index.html","a55db43194b0925636cd1912788676ea"],["D:/Hexo/public/sjsy/index.html","e749ea5c02e1a629cb17cc72b9facc37"],["D:/Hexo/public/tags/bupt/index.html","8ff07bfb9393df3b24eeb6f9abf4c7f1"],["D:/Hexo/public/tags/index.html","ab75e392ed92fc235ef4b84aa78ed946"],["D:/Hexo/public/tags/信息/index.html","83ac1ad3f56cda2b19034d5d517687ac"],["D:/Hexo/public/tags/吐槽/index.html","a4e42fc680456cbe39cb897450bf2025"],["D:/Hexo/public/tags/娱乐/index.html","4423e93b3b472a1ddb6c378ceb974e82"],["D:/Hexo/public/tags/故事/index.html","22b5a71662cbfbaa9be5747a23ab4d64"],["D:/Hexo/public/tags/数码/index.html","157f2f012a5f8fddd40e94940ff78e0d"],["D:/Hexo/public/tags/网易云/index.html","863be7f35b832217b1266c6cfafc9c14"],["D:/Hexo/public/tags/翻唱/index.html","862c4fc23bc50daa3b3d0f20848363d9"],["D:/Hexo/public/talk/index.html","c3787b3fe302a1d6aafe9459840bcedd"],["D:/Hexo/public/video/index.html","78f99c465d4e67288eb7c4c2ccee34c9"],["D:/Hexo/public/zipai/index.html","4d444a240d629340b62c53806d3645eb"]];
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







