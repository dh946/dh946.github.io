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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","c74b72de8e6be78ea8c259642301eb04"],["D:/Hexo/public/2020/08/17/201万年薪的华为“天才少年”真面目曝光，我们都被骗了：醒醒吧，什么天才！/index.html","2142753411115b583a57b6ae7223f3a0"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","8948d87210228c08966847cfcd061db3"],["D:/Hexo/public/2020/09/06/表情/index.html","922224e651bcd568f29256ef8e6e1e2c"],["D:/Hexo/public/2020/09/07/热榜/index.html","43f2755862208d7c53e833fddab40b97"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","4d37ea5328cd41148da6471cb8be2dc4"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","d44b14f925c03d123f7c488ec148e035"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","9eb5a4b853d875fe760f0892df98c801"],["D:/Hexo/public/404.html","fbee93d54fdbb7e2f5d6f889f7a64034"],["D:/Hexo/public/JLU/index.html","e2d23a7910de01b491a21257d976d07e"],["D:/Hexo/public/Jay/index.html","c553e80f352d2208764823ba0ad3ee01"],["D:/Hexo/public/about/index.html","e04d9e8b2dea49f4c83ec50a44f067c1"],["D:/Hexo/public/archives/2018/03/index.html","79d11343ff172a4398b8b39bd3380f39"],["D:/Hexo/public/archives/2018/index.html","3c376e85599d1ba58b6b863d78b77ffd"],["D:/Hexo/public/archives/2020/08/index.html","064b06258e919833b9798dd107b3b314"],["D:/Hexo/public/archives/2020/09/index.html","ef802894b648dbc87fa2edc568bc20dc"],["D:/Hexo/public/archives/2020/index.html","1d89feecabe211525c40f5743617caa5"],["D:/Hexo/public/archives/index.html","67ffd95b5b1ba763b14ea3195bc83b07"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","088dc6ac5295dbd5bf01dfbcfa239d2c"],["D:/Hexo/public/categories/index.html","c13800187764bb3d58cfb2b4f29fd13c"],["D:/Hexo/public/categories/网站/index.html","9643ba2aa5aff2f3ae7538302fccb241"],["D:/Hexo/public/categories/音乐/index.html","a7e4bc56ff36892feff14f30d5e226e9"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","9d37318d07f7f0ed25eb7101db2bc86c"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","686a514e82e513296a143bde13308ff8"],["D:/Hexo/public/fun1/index.html","76fef2993044bd9702840cfa33a49a33"],["D:/Hexo/public/fun2/index.html","2a16adae42603e270e3e4927a30a532f"],["D:/Hexo/public/fun3/index.html","3b89bc17f2d97ead68f58b29948b527e"],["D:/Hexo/public/fun4/index.html","9e543383faca3669a3b1fb54c0f07147"],["D:/Hexo/public/fun5/index.html","15f4b56162620e222dd6d704af4261eb"],["D:/Hexo/public/fun6/index.html","f9f6036c16284044514654577f325f8a"],["D:/Hexo/public/fun7/index.html","be8aab222a46702ec9da800222470379"],["D:/Hexo/public/fun8/index.html","fc472e28b4458cf56ab80ec60be81ef1"],["D:/Hexo/public/gallery/index.html","a4c5c632691fac2ee934844b2a20d5dc"],["D:/Hexo/public/gzsh/index.html","6451ee295973bd704eaea139c9f63e23"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/avatar.png","82a627c44b6dcbef5908d781588947d3"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","3cd8ad5b734b5b1dadb5b9990350b8b6"],["D:/Hexo/public/index.html","485ca9753259202827069bcfcafbb5fd"],["D:/Hexo/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Hexo/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Hexo/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Hexo/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Hexo/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","d1a5f0a9e703c121ae37d5442a016dcb"],["D:/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Hexo/public/movieku/index.html","77779c1dd566ce4e446845b469192d1a"],["D:/Hexo/public/pan/index.html","5811926a5e955be9ca1f022b7b83a567"],["D:/Hexo/public/private/index.html","c61896e0d79a69600c144cd0bf072d30"],["D:/Hexo/public/sjbz/index.html","b750615ba40f6b51925c36f603ccf271"],["D:/Hexo/public/sjsy/index.html","62436a864691597f170bfc1fa4e290a9"],["D:/Hexo/public/tags/bupt/index.html","94fded53f58c184204decfc86d9bcb89"],["D:/Hexo/public/tags/index.html","76a308a7a7957e7626e48abe2bbaa5f5"],["D:/Hexo/public/tags/网易云/index.html","97b81ed64426f4bf149dc89e0e14cb60"],["D:/Hexo/public/talk/index.html","dda22f3d85624d593eca5a207202a94b"],["D:/Hexo/public/video/index.html","35af9b9e13777a56609497df586b1aac"],["D:/Hexo/public/zipai/index.html","13e935d8c1a58e7faf699623c5f040cc"]];
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







