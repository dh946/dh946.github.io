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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","dd1f3cd893a23c7737c09576f3226d6b"],["D:/Hexo/public/2020/09/06/表情/index.html","d741bc0850f69ce7728512090831a088"],["D:/Hexo/public/2020/09/07/热榜/index.html","6ee29fdfa0c9a93642c7d14425d4cf20"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","9fc2427ce5a9358ceb429aeba32852c2"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","0fc511a2d792b2f2b59399bb04f4b2e5"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","5004df47ec72e6fb14043f9dc03990a7"],["D:/Hexo/public/2020/10/02/微小说/index.html","e2c33b93897244dd606fc83e10c676b9"],["D:/Hexo/public/2020/10/12/lyf/index.html","ec6fecac9fdd18b11f382fe22406027f"],["D:/Hexo/public/2020/10/18/gs1/index.html","7898540fd21b4b33e85cb54416a48083"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","f60cbcf9c756f77d7a655e503ff51c1e"],["D:/Hexo/public/2020/10/27/LCD&&OLED/index.html","e76bc5097787f75d7f408c6b8f6e4ef1"],["D:/Hexo/public/2020/11/10/biden/index.html","b0e54941ef560920160c738a74b6d952"],["D:/Hexo/public/JLU/index.html","1a53c829c8a7ebf7ac95f305e65ef0f3"],["D:/Hexo/public/about/index.html","88d3cb4b5bddedecd01d791193fbb00d"],["D:/Hexo/public/archives/2018/03/index.html","a9b2f2676facf930d5af99ca34c1acad"],["D:/Hexo/public/archives/2018/index.html","1d74a78486e94288b0c3aa85981b85da"],["D:/Hexo/public/archives/2020/09/index.html","185d6e29fc321de4e7b63c750c2a5960"],["D:/Hexo/public/archives/2020/10/index.html","547ceefe34f6a15ee0e80ae10d6c162a"],["D:/Hexo/public/archives/2020/11/index.html","eea918013a96e1bf7b8969206c9753c2"],["D:/Hexo/public/archives/2020/index.html","1780e8ba67d68b27b18615d5a0668e67"],["D:/Hexo/public/archives/2020/page/2/index.html","ca39d1b96525e82bb9bc0fcb56590786"],["D:/Hexo/public/archives/index.html","1b9f882f7d8bf46d8d7030dcc2af6461"],["D:/Hexo/public/archives/page/2/index.html","b45f267014e090041a1be9945eb50f27"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","7198154298243f8bfe9b60206c9c09f2"],["D:/Hexo/public/categories/gallery/index.html","a4f27c007287bc1f3789272c8c0f0f83"],["D:/Hexo/public/categories/index.html","d77039d50cf38f9c0832974818855fe9"],["D:/Hexo/public/categories/music/index.html","d41b71ae128afc798e553f262fbe87ba"],["D:/Hexo/public/categories/情感/index.html","d0398b8e08722d088ebf9eb629ed1aff"],["D:/Hexo/public/categories/文章/index.html","647fe6cfa277b5910e6b6cb1af7f9adb"],["D:/Hexo/public/categories/网站/index.html","71d8ce0b80c0f07b974102f6fbb550de"],["D:/Hexo/public/categories/音乐/index.html","5983ecf2a2ef44014e690f4f230a46bb"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","959e630b06c4586e725ca76f6038fa1a"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","2199e118aa57b55bb6897803b445303f"],["D:/Hexo/public/favorite/index.html","1770a777d4570d76dc433edce8c42f19"],["D:/Hexo/public/fun1/index.html","1649bc2e2e16ac86662923905447c9ce"],["D:/Hexo/public/fun2/index.html","8df097104d4472f8e4941ceb889e4817"],["D:/Hexo/public/fun3/index.html","d155dabe322bdf9d7f371290f2d22d3e"],["D:/Hexo/public/fun4/index.html","138a8907292f6ad046a3de3551055d75"],["D:/Hexo/public/fun5/index.html","ef51875baafa79edc360c779514c5b00"],["D:/Hexo/public/fun6/index.html","8fe267c03f456d2e7c0a9da5242d70b4"],["D:/Hexo/public/fun7/index.html","580d8e0a6b4d1b8b2995b09e35b58e00"],["D:/Hexo/public/fun8/index.html","8cb498d8d1f430a2a1414300441e1ecd"],["D:/Hexo/public/gallery/index.html","4a7819091d594a759833b3b442d13c5e"],["D:/Hexo/public/gzsh/index.html","9b83d20d40d03fae4065a3194d8688e3"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","8307232adf0c5331d6cb40b0a89eaf30"],["D:/Hexo/public/index.html","8f8c2e7657346c003077a34ce28288be"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","a3b4bccba2486b4f9f8af98f3f77e832"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/page/2/index.html","9ff4af04785e5b0231b39d0dede0ecf5"],["D:/Hexo/public/pan/index.html","6fa1abf32530d43b500394a3e48ca6f5"],["D:/Hexo/public/private/index.html","965dee9fd282130666b1ecc25c4ceba1"],["D:/Hexo/public/sjbz/index.html","3bc1785e187aaac4ac8ba43f339534a8"],["D:/Hexo/public/sjsy/index.html","3c65d0806cb06dcc2140b19466e11d93"],["D:/Hexo/public/tags/bupt/index.html","427ee5e84eb072a452c183f2cb48dd00"],["D:/Hexo/public/tags/index.html","d66810543820ffdbac4b601d2e2bbaba"],["D:/Hexo/public/tags/吐槽/index.html","4fbd7098949237b49425c92c2e835979"],["D:/Hexo/public/tags/娱乐/index.html","8eb3da3bb705320cd7e06fa1d3893f9c"],["D:/Hexo/public/tags/故事/index.html","15d469d054de06defc2146b80644a123"],["D:/Hexo/public/tags/数码/index.html","861a63073b0edacc511b73555d56f087"],["D:/Hexo/public/tags/网易云/index.html","dd79c08e85a6bd701a6bb5d3e678fb11"],["D:/Hexo/public/tags/翻唱/index.html","bb353f997c08c316cdee93b161c7d57d"],["D:/Hexo/public/talk/index.html","0360f77f4975d36cc0350903e8ffc897"],["D:/Hexo/public/video/index.html","0c7b7a7a6b3b3ffcd150ab1b168bb18f"],["D:/Hexo/public/zipai/index.html","9ce2124799d09bedfb19e632722e5c49"]];
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







