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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","09594321821555dc4a6ba327244f7e82"],["D:/Hexo/public/2020/09/06/表情/index.html","3be058a02ab7038ef8b7c2f4b215d1f0"],["D:/Hexo/public/2020/09/07/热榜/index.html","af6c41977665ad14d485aaf0d8bd5fba"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","212976668ec66e7e4010cdee574026f4"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","e5718c958bbeba5d88bc442435b05fa4"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","6c76556e6d7db8d108e82f734672b743"],["D:/Hexo/public/2020/10/02/微小说/index.html","ae148044567b0a3498fa9df805db50d2"],["D:/Hexo/public/2020/10/12/lyf/index.html","87e97de62439f7a0b2b29f1c9a181bb6"],["D:/Hexo/public/2020/10/18/gs1/index.html","1cb643bf96fc9afc5480c52805a35c9f"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","e993d346eb37675a84d774f0c21b4ad7"],["D:/Hexo/public/2020/10/27/LCD&&OLED/index.html","b30a36b3fccaf04c5847e77470807bbb"],["D:/Hexo/public/2020/11/10/biden/index.html","16f290e9c2354b50a5ec6407651f9a24"],["D:/Hexo/public/JLU/index.html","b365dc5b8106afba257ead3690385987"],["D:/Hexo/public/about/index.html","8adb171cd7f3ad7d571663c27c91d045"],["D:/Hexo/public/archives/2018/03/index.html","d8c66ac4bc9cf723d73ff090c49cc31c"],["D:/Hexo/public/archives/2018/index.html","25a128905064b320ad454f6eba01ac94"],["D:/Hexo/public/archives/2020/09/index.html","e9e103ba73f16fa1a6f084607c5c704b"],["D:/Hexo/public/archives/2020/10/index.html","0387680e7ac752ff10b453af901e6e5f"],["D:/Hexo/public/archives/2020/11/index.html","d78c0a7161c0cf388e75eb6d01ceaa5f"],["D:/Hexo/public/archives/2020/index.html","4dfe807b00176487c6c1e1ab410e4a5a"],["D:/Hexo/public/archives/2020/page/2/index.html","fda4eec759b984e877a000906f7896ba"],["D:/Hexo/public/archives/index.html","c1a89b7025f7923a515c0aa660d6f5fb"],["D:/Hexo/public/archives/page/2/index.html","91e2e0a66838a2603293fae2e38c0c4c"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","420a5a03a754f06f9b3193e98df168e8"],["D:/Hexo/public/categories/gallery/index.html","9caa7bb9d9bcd06843b6d6f3c3ddce90"],["D:/Hexo/public/categories/index.html","301de40de3bf746e346c6cd031fc3855"],["D:/Hexo/public/categories/music/index.html","7682517c852a885616594ad5e60fd891"],["D:/Hexo/public/categories/情感/index.html","4abbb7af61e78fd01ce7a7a4609bc07c"],["D:/Hexo/public/categories/文章/index.html","3d89cc5a72c1c6ffaf016a3afff28830"],["D:/Hexo/public/categories/网站/index.html","1700f33c2acbef48bcb41a188451f471"],["D:/Hexo/public/categories/音乐/index.html","db868f57b3e638d25dcfdaf86d8a105b"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","442ab1e48cfa7940e54abad6722bdddc"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","e72262ed9cd98b0264a6fe1b5163f84f"],["D:/Hexo/public/favorite/index.html","5857cdec7cc9d24dabcbd178c1ec4eb0"],["D:/Hexo/public/fun1/index.html","4190b5c2b467626d62ff42338cae5154"],["D:/Hexo/public/fun2/index.html","c755cecf01c241e087d239cfac16d3be"],["D:/Hexo/public/fun3/index.html","b3f8ffc36f914855cc4b6543e1b5bce7"],["D:/Hexo/public/fun4/index.html","66a20a2c19d25d33610dddd987af1d7e"],["D:/Hexo/public/fun5/index.html","2ed42f0bea4bc090ccc40947230c5865"],["D:/Hexo/public/fun6/index.html","704eb022de06d1a0c63dc144c355da39"],["D:/Hexo/public/fun7/index.html","d23a4d9b008e76cabe7723cdbee9fdae"],["D:/Hexo/public/fun8/index.html","d862841d36e4a22b13f99daeb4ecefb2"],["D:/Hexo/public/gallery/index.html","28400c1157569fdf36e24d0b4c771115"],["D:/Hexo/public/gzsh/index.html","52c7fe1f5987d908034cc4ee3345c30a"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/bg.jpg","9338231d78e771831c61f721e5ca3a2b"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","9e468fd1f0e000f7b032b4071aedf0c5"],["D:/Hexo/public/index.html","ef36a4cb9e98cd2e25bc9ba42a034b2b"],["D:/Hexo/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["D:/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/Hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","4bd200bb6f08722f884db6a7874a4e20"],["D:/Hexo/public/page/2/index.html","ef6b58a589b633620b9531ec8e25879f"],["D:/Hexo/public/pan/index.html","d5d64d842534de3f1dbb5e31a9074d71"],["D:/Hexo/public/private/index.html","446a6332fec037a66eaf3c17af8311d3"],["D:/Hexo/public/sjbz/index.html","a5a772e7844784f4882b392b0578d43a"],["D:/Hexo/public/sjsy/index.html","57a2494bb37ffa9c463db3184b619438"],["D:/Hexo/public/tags/bupt/index.html","9c4dde2619d1f9b476f07af33e2894df"],["D:/Hexo/public/tags/index.html","3100f9484d62f0b1334f40fec6e6434d"],["D:/Hexo/public/tags/吐槽/index.html","5bc3afa9578079a74f7c8517100d4603"],["D:/Hexo/public/tags/娱乐/index.html","a2df752da833834a17b4fc7de861f103"],["D:/Hexo/public/tags/故事/index.html","3f531e01d252c432a6bdecc82557fbb6"],["D:/Hexo/public/tags/数码/index.html","45cbd0ff83ddcea1da9ddf3b52935b89"],["D:/Hexo/public/tags/网易云/index.html","ceff4c6d2a0ba1c520e1adc51f2bf4c7"],["D:/Hexo/public/tags/翻唱/index.html","27d0b150e11311e0d1526f45107f92d4"],["D:/Hexo/public/talk/index.html","b7e741cb993f8f572b44064dcecc88dc"],["D:/Hexo/public/video/index.html","0d36320518d099d55b4d2546034f2e34"],["D:/Hexo/public/zipai/index.html","4e3f671b44ca015ce667a0ba18ac934f"]];
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







