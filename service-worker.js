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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","414b94116aa179660a7bc3a159f483a6"],["D:/Hexo/public/2020/08/17/201万年薪的华为“天才少年”真面目曝光，我们都被骗了：醒醒吧，什么天才！/index.html","e9f5a273e4768ac41de3ec3414ad64cd"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","cc3af26cd731a30d40d685a34fe1bf41"],["D:/Hexo/public/2020/09/06/表情/index.html","6d33bb865ab64790f7205b2bb5bf99de"],["D:/Hexo/public/2020/09/07/热榜/index.html","8f4043a1ee5e0340ae6d3bdce381bc83"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","16ecffb4d212f5a49ea685efedcb2ebb"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","fcef626b8a1e777fa74b4c47742ec02c"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","8f0937b233807ae334a792c2e9a8e4f9"],["D:/Hexo/public/404.html","c30978fe1605ffc5228f33546f88812b"],["D:/Hexo/public/JLU/index.html","7fd090d1b70095ba00941f4bf025165d"],["D:/Hexo/public/Jay/index.html","bdfeffbbc98e263c1f52f1e40cab5f23"],["D:/Hexo/public/about/index.html","f68392ee85e952083b4466983baa9200"],["D:/Hexo/public/archives/2018/03/index.html","550da6318f0903e5a67ff5ce27829a87"],["D:/Hexo/public/archives/2018/index.html","f71c0ce06d221cbf45ba75539b77dd20"],["D:/Hexo/public/archives/2020/08/index.html","bb5eb842e25c6592e7606e5c3da5b888"],["D:/Hexo/public/archives/2020/09/index.html","8189c110c321330ead75c407a94c22f6"],["D:/Hexo/public/archives/2020/index.html","ce0004eb0a7568c2fbd8cef6a77648ed"],["D:/Hexo/public/archives/index.html","ab7cea722b41d94b976972ed3a5469f5"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","f2b920e455dfd73c2652c47d490b1ae5"],["D:/Hexo/public/categories/article/index.html","a5035afdde796ed909871854213df671"],["D:/Hexo/public/categories/index.html","a7f962d95770832e4acca9d420f5e51f"],["D:/Hexo/public/categories/网站/index.html","c8ea3002544ebf4e35a894ee4638f09a"],["D:/Hexo/public/categories/音乐/index.html","870d2776e2c30419926e4287980f1cba"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","4a71e1134905d0287b9e5979569d0f31"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","2327e16927346c64c707f0feb96d707f"],["D:/Hexo/public/fun1/index.html","96de47bd4aa7028206fe5c0a2f383911"],["D:/Hexo/public/fun2/index.html","9dff01812911a162487bb0872398e2d8"],["D:/Hexo/public/fun3/index.html","4d488260c64a3cbb6c7cc94d772edccc"],["D:/Hexo/public/fun4/index.html","1e4eef0c9eb7ed93e56d47bf1742cd82"],["D:/Hexo/public/fun5/index.html","89e45b6351e7ceb53dcd95383100d422"],["D:/Hexo/public/fun6/index.html","ec2697756c0e4ef27e2c9f8c99c3f7ee"],["D:/Hexo/public/fun7/index.html","2194f391bff504329f9eb6a68060625e"],["D:/Hexo/public/fun8/index.html","6d6e59b4156a747f169880d31655ed4e"],["D:/Hexo/public/gallery/index.html","4a278fa1f4e4034f5df7f010e85d1368"],["D:/Hexo/public/gzsh/index.html","44d9290edb1b55afdab266172b80c42f"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","082b8010e741052f7731e7919ddeb7d5"],["D:/Hexo/public/index.html","b93847a92ab9d85b5569ca25e63b0732"],["D:/Hexo/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Hexo/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Hexo/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Hexo/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Hexo/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","fae4a6999964e8c57b10473de5090e7d"],["D:/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Hexo/public/movieku/index.html","c9f863c7c59a017ce1029a02362433bb"],["D:/Hexo/public/movies/index.html","89001d96d9c0336d0ccbfb32eb4a7f44"],["D:/Hexo/public/pan/index.html","aa1752a3041c394e2bdf4d6fdb449990"],["D:/Hexo/public/private/index.html","305f8dcadb713a85a11496910bfe0e86"],["D:/Hexo/public/sjbz/index.html","be4d181a9fd979f6e81b0e1506b6d600"],["D:/Hexo/public/sjsy/index.html","1964387939acf81e9fc0ba9271ef53ae"],["D:/Hexo/public/tags/bupt/index.html","3168f3db04a352813d9f5b58bb6696ad"],["D:/Hexo/public/tags/index.html","ef6e66fc54f0317461470cc954a976e4"],["D:/Hexo/public/tags/信息/index.html","2cb1f468c2f998040b0781ae2e766f00"],["D:/Hexo/public/tags/数码/index.html","46738900323381db628193807593392a"],["D:/Hexo/public/tags/网易云/index.html","eb3b2ac20f31436787800b1dee31f07b"],["D:/Hexo/public/talk/index.html","06609dee91b576692c1b8bfe0ac308fb"],["D:/Hexo/public/video/index.html","966cac9a4353ab8d20e0534d8557bf75"],["D:/Hexo/public/zipai/index.html","dc58912628905ea09696da0e65a9a1d2"]];
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







