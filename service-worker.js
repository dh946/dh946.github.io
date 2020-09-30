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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","9581f3a3f78ec11b6dbf853adc9c34db"],["D:/Hexo/public/2020/08/17/201万年薪的华为“天才少年”真面目曝光，我们都被骗了：醒醒吧，什么天才！/index.html","ab25cc148f7cc739a820da2d6bfaeb6b"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","951311c57c7f0159cfbf84e73a28c04c"],["D:/Hexo/public/2020/09/06/表情/index.html","32a1480b1da3133f36e5a86468befbed"],["D:/Hexo/public/2020/09/07/热榜/index.html","81139fb46d2fcabd3ca4e1e6d2104376"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","cb43a772ef9818e7aec63974ba761964"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","b0c353056003dadecc1c6187581781d9"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","221962cf294e88c9c86a372490aba964"],["D:/Hexo/public/JLU/index.html","3fab8ce6d9819a5f47238ca662cab745"],["D:/Hexo/public/Jay/index.html","8ec2368451c7c40d49d15a44c1f29878"],["D:/Hexo/public/about/index.html","e490e44fdf0bce862c077df6cb0fbe9d"],["D:/Hexo/public/archives/2018/03/index.html","ea08697ef079d04cbe9192f54669215e"],["D:/Hexo/public/archives/2018/index.html","276a30b4e74e471af104d4e5efa09e4a"],["D:/Hexo/public/archives/2020/08/index.html","06b1b82b2d910d4be6df1c062e6542fa"],["D:/Hexo/public/archives/2020/09/index.html","62334140e1671b9340b7cbecbb11c05e"],["D:/Hexo/public/archives/2020/index.html","30d3cfd6afe6aa08e09f9e4188a084cf"],["D:/Hexo/public/archives/index.html","19420f37e977b07230248d4ee6ebc8aa"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","d73c101cb24ac7c77094f3f86d1e8e4e"],["D:/Hexo/public/categories/article/index.html","fa8228dd4e0abfb856261260a45115ad"],["D:/Hexo/public/categories/index.html","df1e7ab1e3630ca546bf1eba08da3813"],["D:/Hexo/public/categories/网站/index.html","9e9d6473c0eac4c810e291a9b3a8e7eb"],["D:/Hexo/public/categories/音乐/index.html","f85343be41c3d3fd10a184e21338ec89"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","c0b1c54c1491c0cd87745d1a3cbe1cfa"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","760d6caaeabf4502294b2475291ceee8"],["D:/Hexo/public/fun1/index.html","37b093626f360c7d35fa9bb759b62f85"],["D:/Hexo/public/fun2/index.html","c5bdefb3933000af76d63a38f5aa18df"],["D:/Hexo/public/fun3/index.html","0978823d5b2bb972b5a2d8bd3e08024f"],["D:/Hexo/public/fun4/index.html","89cb3cd6026b8687280400e60247de6b"],["D:/Hexo/public/fun5/index.html","944403ebbe2f68f5e2229aa7a52fa4e6"],["D:/Hexo/public/fun6/index.html","6e284a9507d6fd1d1d4dfd835cf485ec"],["D:/Hexo/public/fun7/index.html","b9798ec5156ed4e1dcf193ed206f0f30"],["D:/Hexo/public/fun8/index.html","3a0188474619c636c7439626d76a0a04"],["D:/Hexo/public/gallery/index.html","e7e5241203c942b68c4edee3ac3bd3a4"],["D:/Hexo/public/gzsh/index.html","19c123ae5f8de82361f7f705b0c50a8a"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","1b1e874256556f13aad2c9c7f2623adf"],["D:/Hexo/public/index.html","13b6482279b3816d117c0098b203955b"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","aa0fcfa7541b96d1ce53d6362337e729"],["D:/Hexo/public/movieku/index.html","b95bcc245c78353998d264e01ae87022"],["D:/Hexo/public/movies/index.html","c212b617bcf19598bf0e4664231c4840"],["D:/Hexo/public/pan/index.html","ce444bcca6f9bd8919ef623f2cc758ce"],["D:/Hexo/public/private/index.html","9e1fb297af99738746374f8c89627e7d"],["D:/Hexo/public/sjbz/index.html","a8a400301549f9e0c26509db829d6890"],["D:/Hexo/public/sjsy/index.html","2b08bbc79d45e7c4ff7e3a60256c0785"],["D:/Hexo/public/tags/bupt/index.html","0e40d8d16e3f2739654d34c16e680336"],["D:/Hexo/public/tags/index.html","d9303f45ff1e2de691d30b9db30838f8"],["D:/Hexo/public/tags/信息/index.html","ebcc00db6fe51457f32ff7e14126e403"],["D:/Hexo/public/tags/数码/index.html","c7dbd5e402ca20c6fdab33af7fc848ed"],["D:/Hexo/public/tags/网易云/index.html","ec17d31a5c02dd0c9740118f6d95c21d"],["D:/Hexo/public/talk/index.html","d7bdf4f21bd46edae02870f3de841b10"],["D:/Hexo/public/video/index.html","be08f5968c37ddd5d9d3a89f8a9d8615"],["D:/Hexo/public/zipai/index.html","a2d0de654ba4fac787af7da68e1adca8"]];
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







