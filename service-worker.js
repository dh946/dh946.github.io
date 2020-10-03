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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","71fd7550eadb8c43aea9e496114d325b"],["D:/Hexo/public/2020/08/17/201万年薪的华为“天才少年”真面目曝光，我们都被骗了：醒醒吧，什么天才！/index.html","a643f4fc30f86afe40991e7df989cbb0"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","506150e795ea32aa2e38f32d78ea37f5"],["D:/Hexo/public/2020/09/06/表情/index.html","d19bf99e3d75cee78bb547cc06775ebd"],["D:/Hexo/public/2020/09/07/热榜/index.html","48e97dac596328c4210153ed1d08584c"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","20ee6c1d3aca556c4e4b569972352656"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","d74d62f2ea3773ea3a43d3a688aa6b93"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","f7de198ce619671b5fa091d6281a98bb"],["D:/Hexo/public/2020/10/02/微小说/index.html","b991ee5495f8f68c5785221c29740290"],["D:/Hexo/public/JLU/index.html","70a779c26337c96c99f58513c75b724d"],["D:/Hexo/public/Jay/index.html","ba43bce73d308837360717ead7f117a7"],["D:/Hexo/public/about/index.html","212db244767d5c44010865f0ef3fc304"],["D:/Hexo/public/archives/2018/03/index.html","c20a2e91aa9ff0d75970fe1747b4a7d6"],["D:/Hexo/public/archives/2018/index.html","75fac6a8b39f737140121a9f329f30cb"],["D:/Hexo/public/archives/2020/08/index.html","efbc6bd09f788137731875f72692c31a"],["D:/Hexo/public/archives/2020/09/index.html","13f44907eee9732385281eabf9994440"],["D:/Hexo/public/archives/2020/10/index.html","3310cba028c77bd3f2dc328906b6760a"],["D:/Hexo/public/archives/2020/index.html","ca74035f15dcf3956089a4a4286f07ff"],["D:/Hexo/public/archives/index.html","9e1bc5b98dbea9241a7855be43cc5f15"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","6625ca1aeb2f0c2cae01f8a6ab415239"],["D:/Hexo/public/categories/index.html","30664ef877d384148936f806cb402f9d"],["D:/Hexo/public/categories/情感/index.html","ff6ef7c1e187a96b0148cc21d26245f0"],["D:/Hexo/public/categories/文章/index.html","a687a1980849138a5f70b8fae95d69f8"],["D:/Hexo/public/categories/网站/index.html","5f2f57826ee5479832eea9a6b0981902"],["D:/Hexo/public/categories/音乐/index.html","45b9d4206e0a7ad45a2f58afcd586ab6"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","661bb8dbfe3951e262326cb4ce523a3f"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","b7bbbfbc7fb40c5f99f4392892c737e1"],["D:/Hexo/public/fun1/index.html","a795366d6773838cb52fbf2c57601c41"],["D:/Hexo/public/fun2/index.html","baa888bfa89b30c446ae4d3f39761e86"],["D:/Hexo/public/fun3/index.html","54911b13ebb668863f83d95a5bbfe7e4"],["D:/Hexo/public/fun4/index.html","8fe12f7466c3e7552f437a052b19ef8a"],["D:/Hexo/public/fun5/index.html","51471fa59620bc71b62c6789d4399ea1"],["D:/Hexo/public/fun6/index.html","808fa0ffaa9adc99a7dbb42d227ffee1"],["D:/Hexo/public/fun7/index.html","2060fd5328fd9b414a3f9c4add019cde"],["D:/Hexo/public/fun8/index.html","d376eed07ccb335ccfa1dbd332bcfeaa"],["D:/Hexo/public/gallery/index.html","538f8131ce89b7174e2c38e52f9cd10e"],["D:/Hexo/public/gzsh/index.html","7b0bd6afc8a4276ffc5fbddde338e93a"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","4e735d32f78cd8832957cf712add363c"],["D:/Hexo/public/index.html","34d7fa5b48386658d3e12be6ce8f956c"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","e26b03c5ee803ff49d172288bd87545c"],["D:/Hexo/public/movieku/index.html","76c4f2b1c31cfec0633bae3fa32dffa9"],["D:/Hexo/public/pan/index.html","f16e877e6f1cddad5d59a037ad1bb4e8"],["D:/Hexo/public/private/index.html","480860361a9bc8a396b309755d86462e"],["D:/Hexo/public/sjbz/index.html","cbb58ede81a442f03e8d608a3999fdae"],["D:/Hexo/public/sjsy/index.html","b64432924270289a5eccc58cd206f303"],["D:/Hexo/public/tags/bupt/index.html","a70af5b4414a3ff35966af1e5f2c673f"],["D:/Hexo/public/tags/index.html","4749507cc8eb7520fa8a28a993c3b51c"],["D:/Hexo/public/tags/信息/index.html","c76adef149cebc268c1704ac238b0f3d"],["D:/Hexo/public/tags/吐槽/index.html","39d104756b0f16dcad456994256f7fff"],["D:/Hexo/public/tags/故事/index.html","016b1d43821dac4cab438881b02c8b62"],["D:/Hexo/public/tags/数码/index.html","f87110c874cf4462a1e71df5b2e73536"],["D:/Hexo/public/tags/网易云/index.html","0d143a5256457129564d1fe8d48ecbfe"],["D:/Hexo/public/talk/20201001090507.html","ad2952077e1b16d6cb5e858dd1a49832"],["D:/Hexo/public/talk/index.html","8e8c8c3173110f1c82e947a1701eda14"],["D:/Hexo/public/video/index.html","a23fc6c061e13e2c4d3460b863397ffe"],["D:/Hexo/public/zipai/index.html","419b0b7637c1ca72c09d3f07322ecade"]];
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







