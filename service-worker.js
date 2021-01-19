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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","a8cf6296baf89bf0da9a8ebb9f037e9e"],["D:/Hexo/public/2020/09/06/表情/index.html","f8cdc14d817df0d76de1fff44fcd718c"],["D:/Hexo/public/2020/09/07/热榜/index.html","8b3481e4009891afd51623b6ae7142f5"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","6fb10935c9b94305907827ddf1be4ae6"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","d7d9e15d880c1b1d3de9badc94f6d3ac"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","4b83bbb26bf9a70746f0d674c23ca37f"],["D:/Hexo/public/2020/10/02/微小说/index.html","5a98f9a6170da67bb005be11817a1744"],["D:/Hexo/public/2020/10/12/lyf/index.html","11b3ac1f11fe5712e848b701df87c369"],["D:/Hexo/public/2020/10/18/gs1/index.html","f055a473b9d4cc50e00dbdea8f6790d2"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","4785cc6044aa2a77f5ec80118c2f2438"],["D:/Hexo/public/2020/10/27/LCD&&OLED/index.html","c2c59b7b3c0ebbee18992b1fc59a4ebe"],["D:/Hexo/public/2020/11/10/biden/index.html","2f4271bdb24089858d03ca048590ae19"],["D:/Hexo/public/JLU/index.html","918209f83360b501e2bdefa5547a7f78"],["D:/Hexo/public/about/index.html","3dc56bf773ffcd6d5c1d40cfaccfb094"],["D:/Hexo/public/archives/2018/03/index.html","e2bc3acfc8f3b033cdf4d2105ee2d220"],["D:/Hexo/public/archives/2018/index.html","c411f9e71e0f67dfab9f5b30b7a722f1"],["D:/Hexo/public/archives/2020/09/index.html","13172b056911f1fd0831b1c34a570431"],["D:/Hexo/public/archives/2020/10/index.html","3aa9a49b6a535f4f7bc09686cc7ee5ad"],["D:/Hexo/public/archives/2020/11/index.html","e14eb0829b8a5adcba3651a5a509c07b"],["D:/Hexo/public/archives/2020/index.html","f4a33db13569e5859bdd069fcd23f80c"],["D:/Hexo/public/archives/2020/page/2/index.html","44796b2023e1b87665fffe643e054f9f"],["D:/Hexo/public/archives/index.html","548514ced7564bc7b8edd8bcfda9e3a9"],["D:/Hexo/public/archives/page/2/index.html","b813fb6dbe5682507a20503b16b5fe34"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","7567f964a47228627890cb51407d0630"],["D:/Hexo/public/categories/gallery/index.html","2142c8f266f579214409b893ad1592e7"],["D:/Hexo/public/categories/index.html","115fe19687457a253a45b86460661f34"],["D:/Hexo/public/categories/music/index.html","9c33b101bed57943126c7c014497f2ab"],["D:/Hexo/public/categories/情感/index.html","30504ac0ecf16ba06dfe0cc92c1bfb22"],["D:/Hexo/public/categories/文章/index.html","1ecfe300001e0d775a533f282940d649"],["D:/Hexo/public/categories/网站/index.html","e1f0ace94993784593c959bb5783d63b"],["D:/Hexo/public/categories/音乐/index.html","2341ab94f223235bbed6c7679a899b14"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","442ab1e48cfa7940e54abad6722bdddc"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","b4bfdcc0fef1ab98731e8ea644d15ae4"],["D:/Hexo/public/favorite/index.html","9504d72f448187b8696e789a9b4ae68b"],["D:/Hexo/public/fun1/index.html","4ef3db5d3574cb1e42ae33e10db3ee74"],["D:/Hexo/public/fun2/index.html","0e6acd4a8f6df71fc46ff5c0c172deed"],["D:/Hexo/public/fun3/index.html","0309ecf04b0e0fe144b96785f4c07057"],["D:/Hexo/public/fun4/index.html","d8c3ffe40c36c2718c58c6ad1c48a9ff"],["D:/Hexo/public/fun5/index.html","d23869ad02eaeb8f92d088e6ce58fa66"],["D:/Hexo/public/fun6/index.html","fa9f7f84d15112a2c5a996adcd6639f7"],["D:/Hexo/public/fun7/index.html","42ae4ddb4e8bf79839b7d061f1049e52"],["D:/Hexo/public/fun8/index.html","e2c6316233f202ba2650971c5703a98c"],["D:/Hexo/public/gallery/index.html","92fef01bcd1a602fbcc1cd02b2c5b308"],["D:/Hexo/public/gzsh/index.html","349599cb3cfef63b593944a95f033e7e"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","9550664898d54af431605412de37de06"],["D:/Hexo/public/index.html","923420d5c2e32f4add5223a2aa0c57b2"],["D:/Hexo/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["D:/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/Hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","f93b861a6b30bf6f56d1cd5d20739ba9"],["D:/Hexo/public/page/2/index.html","d982bee525f52c8adc53a4e4f0fc008a"],["D:/Hexo/public/pan/index.html","8077d26d7b0b6e9fd3f956a43310863a"],["D:/Hexo/public/private/index.html","2d66eddee56b37b194bee8140e3a6beb"],["D:/Hexo/public/sjbz/index.html","09e3c2b71cd98e79ee5dff94f5b1e1fd"],["D:/Hexo/public/sjsy/index.html","87f0a5b1b4b9d41de744bc98b23afb67"],["D:/Hexo/public/tags/bupt/index.html","b19ffe95e567f7a7cc4b4b6d4aa5f45f"],["D:/Hexo/public/tags/index.html","43314158c89db2c6fb81b3b85ea473c7"],["D:/Hexo/public/tags/吐槽/index.html","879fe61b3afd687616a182596ce5ad02"],["D:/Hexo/public/tags/娱乐/index.html","6b4fd4c92829b088319e04ce16ef4fbd"],["D:/Hexo/public/tags/故事/index.html","e443428b1ba15ea71882277b17ff6cd8"],["D:/Hexo/public/tags/数码/index.html","c423bcd04d16b33e1604999c8abb77c9"],["D:/Hexo/public/tags/网易云/index.html","0dec58f81c3cc946e98ecb53a292ae90"],["D:/Hexo/public/tags/翻唱/index.html","9c8c9e8132641e74517a805957bde2e4"],["D:/Hexo/public/talk/index.html","cb29ba1514659411cf5704d681c44d59"],["D:/Hexo/public/video/index.html","54a6e2038e45274715477929ab979985"],["D:/Hexo/public/zipai/index.html","7ceb87074011f548b7f2fedcbc1cb586"]];
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







