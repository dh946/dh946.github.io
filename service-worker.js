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

var precacheConfig = [["D:/Hexo/public/2018/03/07/网易云动态歌单/index.html","809277364c6faa105bb75725025884a8"],["D:/Hexo/public/2020/09/06/表情/index.html","6fac962b91ba2abc61ffb817894bc0f8"],["D:/Hexo/public/2020/09/07/热榜/index.html","67f1c8c5a89b2b4141dd34f4e25debfe"],["D:/Hexo/public/2020/09/07/移动cpu/index.html","892182b68e9ed0266a5ac73540919a8e"],["D:/Hexo/public/2020/09/15/为什么会有墙/index.html","c5aad89a3876f5b3242cbff6c63e64be"],["D:/Hexo/public/2020/09/16/北邮人导航/index.html","bca273cb5bafd1c296dd3ee17c008d94"],["D:/Hexo/public/2020/10/02/微小说/index.html","247a8f54b5151a970af9ca490853ff70"],["D:/Hexo/public/2020/10/12/lyf/index.html","34d44f018d49f9562358d84ca087b767"],["D:/Hexo/public/2020/10/21/关于郑州我知道的不多/index.html","8c987b9dd2149a13162b29066b70441f"],["D:/Hexo/public/JLU/index.html","98d2f77a9514f0e07567cadef290c527"],["D:/Hexo/public/about/index.html","e97d5aa6b275fe42b071ae0ad77194be"],["D:/Hexo/public/archives/2018/03/index.html","17da6ab70490d26b0227632e6e2f9b6f"],["D:/Hexo/public/archives/2018/index.html","fd88de800bcb8c03cb244eac6c335233"],["D:/Hexo/public/archives/2020/09/index.html","64164f41dcc9acd9b8e85b02f6e79a7f"],["D:/Hexo/public/archives/2020/10/index.html","457cb26a69a6e7a65b7b2cfd291b64c6"],["D:/Hexo/public/archives/2020/index.html","8e18737de1da26f2184e12aa93530870"],["D:/Hexo/public/archives/index.html","ef3b5bd659cb5fce1664c7e753da6d55"],["D:/Hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Hexo/public/cartoon/index.html","dbeb2978d70d22dcdef66ca2e2440213"],["D:/Hexo/public/categories/gallery/index.html","47966467d8f2e3105815713746095d88"],["D:/Hexo/public/categories/index.html","f3e1c856f7a4b6128278e2a2c2a4d543"],["D:/Hexo/public/categories/music/index.html","66317cd5e00b108cbacad72eff4b4b1b"],["D:/Hexo/public/categories/情感/index.html","a313a7e3643a482233e00fc4ba71f6d6"],["D:/Hexo/public/categories/文章/index.html","71b14e5eade25a1252a64a8f1a7e0535"],["D:/Hexo/public/categories/网站/index.html","df3c55f72a5c194803064cb303ecc5ed"],["D:/Hexo/public/categories/音乐/index.html","ea0eca126903e8143cdb32c1f45dbd1a"],["D:/Hexo/public/css/background.css","79b0b4d29f31d921972c09f4b19c9b6b"],["D:/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Hexo/public/css/index.css","442ab1e48cfa7940e54abad6722bdddc"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/fafa/index.html","901a18af1abf18b33172a43611551c3c"],["D:/Hexo/public/favorite/index.html","0dae7a77e20a1d70d2109447d268537e"],["D:/Hexo/public/fun1/index.html","4497ba801f54b8423fe7a5b1e9fecf3b"],["D:/Hexo/public/fun2/index.html","97576c2dcdd4f2690d50dd28560a20e6"],["D:/Hexo/public/fun3/index.html","e0f4824008ae1e2d400d6cb012374248"],["D:/Hexo/public/fun4/index.html","30e4b68df8495b570d41f59710b1f9df"],["D:/Hexo/public/fun5/index.html","dc8a82fb36b3fe3f53e4c5b401bdeb7a"],["D:/Hexo/public/fun6/index.html","4ce17a3cc4123695bb15dedc54ca7b79"],["D:/Hexo/public/fun7/index.html","89ce29bd4b8e752738f5900223eaa3e0"],["D:/Hexo/public/fun8/index.html","1ed138db391b23a7cab9fdc473c588e7"],["D:/Hexo/public/gallery/index.html","11640b8bab0c0bd2021d19afe0e7842f"],["D:/Hexo/public/gzsh/index.html","9d7ea9977252cc590922ef7f416d2906"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/bg.jpg","9338231d78e771831c61f721e5ca3a2b"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/in3/index.html","ea8058bf54bafe0fcac16310843ab041"],["D:/Hexo/public/index.html","119c9ab73b6c5899e58fe3c955b503eb"],["D:/Hexo/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["D:/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/Hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Hexo/public/link/index.html","186feda13bedeaf886f597366f863273"],["D:/Hexo/public/pan/index.html","1ffaf88588ff4258132cbe77a6dc32e7"],["D:/Hexo/public/private/index.html","a666c9de01ec55e6e5c0a59f606bd35b"],["D:/Hexo/public/sjbz/index.html","aec52ff41ef8c240f7aa1354b0e28b29"],["D:/Hexo/public/sjsy/index.html","7e28e963cdb8acd7438caaa8cf53079e"],["D:/Hexo/public/tags/bupt/index.html","101abbc08970c41bd12a9db2ab5c7142"],["D:/Hexo/public/tags/index.html","6a546a17ee3bf4676e0204f8e409fb28"],["D:/Hexo/public/tags/吐槽/index.html","9bf4c31e543755155690aa7fcc14e467"],["D:/Hexo/public/tags/娱乐/index.html","8f18977b213c58e90597e39f0d23cd2a"],["D:/Hexo/public/tags/故事/index.html","595f562d013f3bdef63c25d7a6ca9728"],["D:/Hexo/public/tags/数码/index.html","de36b6843935653f940d5011e3a85013"],["D:/Hexo/public/tags/网易云/index.html","59eb74715b6fdb813ccecb131dda8f9b"],["D:/Hexo/public/tags/翻唱/index.html","4582e2f443e104822ad13f8c072e1d0e"],["D:/Hexo/public/talk/index.html","a8725898f88508a6c23a0b989cf9d2b6"],["D:/Hexo/public/video/index.html","01c93aadf9bb5c88e0fbbd874c58003b"],["D:/Hexo/public/zipai/index.html","f69a1791bfd2f71e60fe89e343a462c2"]];
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







