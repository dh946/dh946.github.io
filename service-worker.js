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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","55290fbef8ccc780b8be96a200480ba6"],["D:/Hexo/public/2020/08/17/华为/index.html","75a1f98777b98ec649fa161ee90dfbf3"],["D:/Hexo/public/2020/09/05/网盘大战/index.html","e90baa5b8565121f4050974e29b57453"],["D:/Hexo/public/2020/09/06/表情/index.html","aea99867b997304703aba2dfb374d182"],["D:/Hexo/public/2020/09/07/热榜/index.html","ff5f40ca27548d887bab6dcc658e62d5"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","41ece82ef825f7740d94f8fc8a8d3879"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","1efb970d1197e68b435379febe00aae1"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","dc8013169e8875807dddcc0b571a50ff"],["D:/Hexo/public/2020/10/02/微小说/index.html","5ee0eb8b99b1c8ed6de7805d32d16bc4"],["D:/Hexo/public/2020/10/12/lyf/index.html","be2fc8f552aceeea640a9777a006f1a4"],["D:/Hexo/public/2020/10/17/屋顶告白大会/index.html","74d8895978ccc8b8d1c99002e5750406"],["D:/Hexo/public/2020/10/18/gs1/index.html","4b5c628c361e171f5364cd573a9f686f"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","a37c8a3eee4b2700672742f0e5f4bf8c"],["D:/Hexo/public/2020/10/27/LCD&&OLED/index.html","e1ad5cdb34c6dd3a40024cb6f36c128e"],["D:/Hexo/public/JLU/index.html","de13567df0e51f7652b84ede4ed73197"],["D:/Hexo/public/about/index.html","10a72cc86ac9a30908d7274941c43c2c"],["D:/Hexo/public/archives/2018/03/index.html","f938a0702dda68794af53343ab9dd882"],["D:/Hexo/public/archives/2018/index.html","4700aa888310eddf785bb9da18f0d61e"],["D:/Hexo/public/archives/2020/08/index.html","e02d17bbdd1ac1e5fe9fdbcd109b08bd"],["D:/Hexo/public/archives/2020/09/index.html","c9109cebd6a7e1a6caa00cb5085682ed"],["D:/Hexo/public/archives/2020/10/index.html","e73323d3aed1e993871d06982a3183ce"],["D:/Hexo/public/archives/2020/index.html","03d7fd6568639918809f3199f4282820"],["D:/Hexo/public/archives/2020/page/2/index.html","4235a6f6a8512ddb686441652022c1bd"],["D:/Hexo/public/archives/index.html","47ab6b28987acf20e4c422335768095a"],["D:/Hexo/public/archives/page/2/index.html","7e533f89ab5e807ec5fbfb64a69f3135"],["D:/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","dc5c7b08dbfbfb329538b695deff9a9d"],["D:/Hexo/public/categories/gallery/index.html","9dc19ed7e9a144371bc33137956a85af"],["D:/Hexo/public/categories/index.html","661bdc8e498a28df9af548098e4e6047"],["D:/Hexo/public/categories/music/index.html","e2f8b173f61b6721c00749ed03623526"],["D:/Hexo/public/categories/video/index.html","55f2ce87aa8193152295e76cdd6c1d1c"],["D:/Hexo/public/categories/情感/index.html","5707ee1d73d99eedd970eede9a7e7b02"],["D:/Hexo/public/categories/文章/index.html","9a8e919b03ec7e0729f4cb92a69461b6"],["D:/Hexo/public/categories/网站/index.html","a5593e8bba088a31ab882f5b01b53911"],["D:/Hexo/public/categories/音乐/index.html","4556877e36c6b1dba9e6ef46acd8fcd5"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","661bb8dbfe3951e262326cb4ce523a3f"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","50314845f21d035fe388795d1c79dc19"],["D:/Hexo/public/favorite/index.html","3ec67171b276db8539fc8a4379bac117"],["D:/Hexo/public/fun1/index.html","e24ea9a521bd924d9dbc74dea14fbf52"],["D:/Hexo/public/fun2/index.html","e85cecf1374e29ed967b7fb64cad68d2"],["D:/Hexo/public/fun3/index.html","52b868e839b8d218d1234b855d0d11e1"],["D:/Hexo/public/fun4/index.html","d9bba22ee46a8192715a1e5b509c83fa"],["D:/Hexo/public/fun5/index.html","9727f2eda33ab386f679e470df2d6b30"],["D:/Hexo/public/fun6/index.html","3a68eff84c428eafa2e2dae158c4cb0c"],["D:/Hexo/public/fun7/index.html","de529a790fdeb14ddceb5b57af858203"],["D:/Hexo/public/fun8/index.html","90298a51ce91a2d265068a87889b779b"],["D:/Hexo/public/gallery/index.html","630164d8657a2bac511bdeb733579ebf"],["D:/Hexo/public/gzsh/index.html","30ab41fb17836b1b9a4bb8fa8a2608d2"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","543161d6e468df560f706bef1459577a"],["D:/Hexo/public/index.html","5211a8fe22b9c05746067e296d9746eb"],["D:/Hexo/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/Hexo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Hexo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","0bfd31f071cb1934c5520c5142cd4794"],["D:/Hexo/public/movies/index.html","cb03549fedea4aedc09f7ecd2c457c5d"],["D:/Hexo/public/page/2/index.html","77ed338e3e608b63007a2537798baed0"],["D:/Hexo/public/pan/index.html","4cd3f3c39f3f5da6d354183c19139d7a"],["D:/Hexo/public/private/index.html","216e41076246f0577906752bcd02d1c2"],["D:/Hexo/public/sjbz/index.html","6f10fb8b293cc5ba0faf56c8c249833f"],["D:/Hexo/public/sjsy/index.html","ab378f0ade618e0bc163f6f6954e0f8e"],["D:/Hexo/public/tags/bupt/index.html","2432ce0079e63ecad75f772c25f57c76"],["D:/Hexo/public/tags/index.html","ffa00c6ddc42ba67a001e6629ca62e57"],["D:/Hexo/public/tags/信息/index.html","c84f42162c214045650c99339c5e464e"],["D:/Hexo/public/tags/吐槽/index.html","0c76eacdb36e90f293edbcc7b1c94a8c"],["D:/Hexo/public/tags/娱乐/index.html","d1389caeb89079af9fb55cd6e07a1898"],["D:/Hexo/public/tags/故事/index.html","41073dbf833df9291c6cc3bfef032dde"],["D:/Hexo/public/tags/数码/index.html","1733f9b376cb97276ecba1a520ece043"],["D:/Hexo/public/tags/网易云/index.html","1d9a740c0be6b6ddb29700a2dc1751c9"],["D:/Hexo/public/tags/翻唱/index.html","5c616b9f59c62764f9256e317894fe0f"],["D:/Hexo/public/talk/index.html","cad07f076074e6e812cc07d684a04740"],["D:/Hexo/public/video/index.html","df5c83047e528b938a73cd2b21d6dbe9"],["D:/Hexo/public/zipai/index.html","80dcd36cf6bdcaf84ba937ac0da634dc"]];
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







