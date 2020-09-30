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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","b8b07bd8a4444162083cb6e399fd9159"],["D:/Hexo/public/2020/08/17/201万年薪的华为“天才少年”真面目曝光，我们都被骗了：醒醒吧，什么天才！/index.html","1f8a605c6a1b4f18c526c7603b0b353b"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","ce4c76e093d87d03bf2324493dca282b"],["D:/Hexo/public/2020/09/06/表情/index.html","4586279801eb50b62fa862b5ead188a7"],["D:/Hexo/public/2020/09/07/热榜/index.html","9c6522df1cc89bd115432a2cd202831e"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","5f80fbbd55a40f933f06bac98779b6e1"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","34602b4ca7a07978d57ad674f88181ce"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","a0173cdf1048a3b5ff119e4435879625"],["D:/Hexo/public/404.html","53a394632e7bae876ee6855c2f423a5a"],["D:/Hexo/public/JLU/index.html","e0ee863751223132528e823213155eeb"],["D:/Hexo/public/Jay/index.html","5ec6f4e2c2d8b20a68172e2e50d82ae6"],["D:/Hexo/public/about/index.html","c441013876f9ba5caa96562848db3569"],["D:/Hexo/public/archives/2018/03/index.html","6e3afbb7d0d7341dc8ad4917b559cf61"],["D:/Hexo/public/archives/2018/index.html","494365a23fdb40e5431c8e71b9183e99"],["D:/Hexo/public/archives/2020/08/index.html","82e1c23722fe16de4b84aa150fe4b413"],["D:/Hexo/public/archives/2020/09/index.html","c5ae036f5534bef6853ac5d7ed2d1382"],["D:/Hexo/public/archives/2020/index.html","12ba012e919681f89b67a215b74f1083"],["D:/Hexo/public/archives/index.html","2300294f87dd0f79f5e25b4d9b2a4c67"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","2af91343f14f4bf22936775e8b655646"],["D:/Hexo/public/categories/article/index.html","30f2faef21bd1bec3861123fd5c0a89b"],["D:/Hexo/public/categories/index.html","72d5a40dc507f65ee4bd0846bde1ddec"],["D:/Hexo/public/categories/网站/index.html","0b2bae94fa5625b97da809452436efc2"],["D:/Hexo/public/categories/音乐/index.html","94f53c82723615524619138a744d628e"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","4a71e1134905d0287b9e5979569d0f31"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","566477e1772ac9e57c5f8c09ebe7f486"],["D:/Hexo/public/fun1/index.html","bb4ec08239bee372a15a414acd3db755"],["D:/Hexo/public/fun2/index.html","9957a9428a2564e342ee6befaa9b81a5"],["D:/Hexo/public/fun3/index.html","c6c9bbd2a249bcfbb58c6b6dff2ed257"],["D:/Hexo/public/fun4/index.html","1e95b52d727c309371494037f3468bf9"],["D:/Hexo/public/fun5/index.html","620a070a2737df56f6af637bde71b635"],["D:/Hexo/public/fun6/index.html","c91fe3d735fae8ab88fcf405c08769e3"],["D:/Hexo/public/fun7/index.html","d00b19bddb437da1826c86191c2c0def"],["D:/Hexo/public/fun8/index.html","97b962577c3b6f45293b8bdacd8ed2f6"],["D:/Hexo/public/gallery/index.html","cb9727392d83b86d4a790a989e847620"],["D:/Hexo/public/gzsh/index.html","0d959f0b0ca53bcec46cbaa17a00d3bf"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","527e5d3426d7b38a4d7c8bd9f613f3eb"],["D:/Hexo/public/index.html","dd491038c7f7632edce7f6cfa08c80ab"],["D:/Hexo/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Hexo/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Hexo/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Hexo/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Hexo/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","176ddf3e026d5dd97013f3d1d6762c14"],["D:/Hexo/public/movieku/index.html","6a54adcc8b8e7e797805d6313d11be73"],["D:/Hexo/public/movies/index.html","c212b617bcf19598bf0e4664231c4840"],["D:/Hexo/public/pan/index.html","e39c45a2c5e5a0df6e395ca390ee15f4"],["D:/Hexo/public/private/index.html","3fd5352b56d9fa850b29c2f98beec808"],["D:/Hexo/public/sjbz/index.html","71c28dd76faa573e7b36a4f605ea34e7"],["D:/Hexo/public/sjsy/index.html","1d40395faf22ac32c69d2c9e789b0d50"],["D:/Hexo/public/tags/bupt/index.html","89fa7a8e0d83806d20a5ab406d35be78"],["D:/Hexo/public/tags/index.html","87df73959f5ffb3154383f4150f81ebb"],["D:/Hexo/public/tags/信息/index.html","c8f2d040b51237f009cdc3d274680198"],["D:/Hexo/public/tags/数码/index.html","fd62b44dc2a98233de175cafcbc8ba17"],["D:/Hexo/public/tags/网易云/index.html","2613625d2eba9e8595529087a81b81f0"],["D:/Hexo/public/talk/index.html","953a9ddd334d8ec64448f17e876dbf80"],["D:/Hexo/public/video/index.html","fae8923d910b73529551fa6927b0bf78"],["D:/Hexo/public/zipai/index.html","6f89ed448158c2ef3199fd7afd43e5c9"]];
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







