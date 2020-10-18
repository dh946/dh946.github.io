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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","45cd1cbd6f8534895baf55118f4aa9db"],["D:/Hexo/public/2020/08/17/华为/index.html","f10f1d21234586254ddb46bef332f5c6"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","413318c1eec3a9e47d805d63e1df6118"],["D:/Hexo/public/2020/09/06/表情/index.html","184a381af7745a6b48db3c3af5dd7299"],["D:/Hexo/public/2020/09/07/热榜/index.html","f359a8f4505f1141fa80bd24eeb365e7"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","17efcae71c5ac584c13f4e1433cf386f"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","bf3f24805feb84d7645a9193891c3b9c"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","afb689de4346a632253c8e8d3c76551d"],["D:/Hexo/public/2020/10/02/微小说/index.html","3822512968986dc8c0919e4fff236a6f"],["D:/Hexo/public/2020/10/12/lyf/index.html","c282afb08ed77abc7512b40a11ff7c78"],["D:/Hexo/public/2020/10/17/屋顶告白大会/index.html","9fdc232bc3bf68c93cf9fb0fbeb39bdc"],["D:/Hexo/public/2020/10/18/gs1/index.html","5ae8fcaaaaf9a15ccccf302467a9ed67"],["D:/Hexo/public/JLU/index.html","c443fbdfdd0fbcca5504b375dba7db84"],["D:/Hexo/public/about/index.html","40ea7ea437f280479dba7eeea317d32c"],["D:/Hexo/public/archives/2018/03/index.html","ef53b92333587e46acd6b44c312f8bda"],["D:/Hexo/public/archives/2018/index.html","b7c6a7eada1a7e57344a61caffb42180"],["D:/Hexo/public/archives/2020/08/index.html","704fb7c6234e83162f1c32a2818a8dc3"],["D:/Hexo/public/archives/2020/09/index.html","d907029b34832158dbc9105c1f4bf23c"],["D:/Hexo/public/archives/2020/10/index.html","63ec4d2feb3ebeb97c802a8bd749058e"],["D:/Hexo/public/archives/2020/index.html","02068edb0dc06fe8746668b6ac7e69bc"],["D:/Hexo/public/archives/2020/page/2/index.html","d3bd201641d422d5a0745e56bc3ea4db"],["D:/Hexo/public/archives/index.html","7a1a129d5bb5fef3636885b5cb76b613"],["D:/Hexo/public/archives/page/2/index.html","b3dc5a142b9ac77e0b65468cb7128ae8"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","3507ac74a4a8c76d6a93de12ca60eab3"],["D:/Hexo/public/categories/gallery/index.html","f06cac309e2e1bdede0140e9b755601e"],["D:/Hexo/public/categories/index.html","a445df5bca666a1d278ac37087e25ed5"],["D:/Hexo/public/categories/video/index.html","714a78a417b250710a827b4ac3ec9e39"],["D:/Hexo/public/categories/情感/index.html","55fdba185b3d8e7da508fc1703c29a18"],["D:/Hexo/public/categories/文章/index.html","bfac09e2bfe3c2697a5deec23e99bf68"],["D:/Hexo/public/categories/网站/index.html","aa1f53ecaef835827f1c34e793474d37"],["D:/Hexo/public/categories/音乐/index.html","54f57783e6ab3f92d8f1092ce52e9786"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","661bb8dbfe3951e262326cb4ce523a3f"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","8d74b2dbe5624e6d1390859e323f8f47"],["D:/Hexo/public/favorite/index.html","9b8351d2910e6fc6be1c2c0217b9fa83"],["D:/Hexo/public/fun1/index.html","1a71fcb82c07e3d7d3ca742005a9febd"],["D:/Hexo/public/fun2/index.html","e01dc89ca91fa288f6ba037c6314dedd"],["D:/Hexo/public/fun3/index.html","af3d3f37c5be4614c95030218485e34c"],["D:/Hexo/public/fun4/index.html","fa04fa8bb82dcf520eca8364c4e7269a"],["D:/Hexo/public/fun5/index.html","972df984ddbbf188a489f502013bf676"],["D:/Hexo/public/fun6/index.html","8982d15016362c6a3d1170057edaf2f2"],["D:/Hexo/public/fun7/index.html","365b5b6c4b97bdd7ddcd13a34e3a2a58"],["D:/Hexo/public/fun8/index.html","59a751bc47f732f13373f41107888319"],["D:/Hexo/public/gallery/index.html","4a622a873caf9e72a38ca76c00afc179"],["D:/Hexo/public/gzsh/index.html","0636bd19fd4122fa12c1be6aca9631e5"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","877c182a06fa0281e93ba3603e6a39db"],["D:/Hexo/public/index.html","b739a629a34df798765224b25e947cc3"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","aca0a1951b5b5a61c5fc72d7990612f5"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/page/2/index.html","0aed2fa840b1a22980d6223eb2f5dde0"],["D:/Hexo/public/pan/index.html","764834dae8984dfc8c95187c7d7e0cb8"],["D:/Hexo/public/private/index.html","651e01a93fb37cc61ed3a9d48e74cef6"],["D:/Hexo/public/sjbz/index.html","6a3b805b61da7e212ab9ab7359aea881"],["D:/Hexo/public/sjsy/index.html","8fc178f2263f6f8653f74f06bb56b09a"],["D:/Hexo/public/tags/bupt/index.html","3c26e74a79be2f981186e99581383a08"],["D:/Hexo/public/tags/index.html","4909f38a2a3a39c81156a8b33c697878"],["D:/Hexo/public/tags/信息/index.html","5cfc19dfd244ba34b34ead4dcef1dd89"],["D:/Hexo/public/tags/吐槽/index.html","acdc6832ac9f83bf8f268ce7a9475c6e"],["D:/Hexo/public/tags/娱乐/index.html","651f36937480c085f5c8cc37f219af89"],["D:/Hexo/public/tags/故事/index.html","8870dad79af87abfa1c2877e23952f92"],["D:/Hexo/public/tags/数码/index.html","6ed8b9103a76473c585e67d10033dfe4"],["D:/Hexo/public/tags/网易云/index.html","c70fa0b9a37f34afb0ae52f3e01eb0fa"],["D:/Hexo/public/talk/index.html","dc1ed57d0992550c032396eb90584124"],["D:/Hexo/public/video/index.html","1ebe9e07bb327add7be12e568bec96f2"],["D:/Hexo/public/zipai/index.html","51f0ddfda0d2595113bf38a5259f917e"]];
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







