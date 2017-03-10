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

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/index.html","7e52a95c4fe2af8d65d42b8383f4055d"],["/manifest.json","2eefc15db4b58758cddc0d666e27d399"],["/results_demo/celiac_disease3/q1","e0775ea019a044cacad4b3ef9e72d455"],["/results_demo/celiac_disease3/q2","7cc8b52a030a9182368c3ab399571ace"],["/results_demo/celiac_disease3/q3","7fc94bc6e40def29ce8e78e3338ece0c"],["/results_demo/celiac_disease3/results_1.txt","0fa587949d0ba9aec5a0dd6d7dd4a45b"],["/results_demo/celiac_disease3/results_2.txt","b5e938404b6507f5ab41eaea8a5f7d75"],["/results_demo/celiac_disease3/results_3.txt","68fe2f7e6e7c4330f877c9e3edfe66b4"],["/results_demo/celiac_disease4/celiac4_original.pdf","4d86594f32bd0e3232afc910fcc20b6e"],["/results_demo/celiac_disease4/q1","3fcd3c2d5fb0164239cd46a00fbdffaf"],["/results_demo/celiac_disease4/q2","b34324128d583922f09546c12f8b0ee9"],["/results_demo/celiac_disease4/q3","a6334761404fdc2284407940ce0d3b7c"],["/results_demo/celiac_disease4/q4","8c3186d41abf0bb4cdbdec88dd65bb67"],["/results_demo/celiac_disease4/results_1.txt","6aa6a1eec618ce9055412f132e411fb7"],["/results_demo/celiac_disease4/results_2.txt","4111acbfdbc7352f1facfcf849e6ad30"],["/results_demo/celiac_disease4/results_3.txt","0268b5c466ba7758781ad65e69c3d614"],["/results_demo/celiac_disease4/results_4.txt","5a8c08b7141c7c307b01c10968bf1dd0"],["/results_demo/celiac_disease5/celiac5_original.pdf","716643c63afa3ac9043253acdb043d82"],["/results_demo/celiac_disease5/q1","1ba7e30a15aa9c3828ffbb8bd45b58f2"],["/results_demo/celiac_disease5/q2","807f1b3ab71c7be2ddce1dc871c03dd8"],["/results_demo/celiac_disease5/q3","1d8330634d1459822c350739eadbffb6"],["/results_demo/celiac_disease5/q4","2e203afc2e8ba405ab3e746e3351082e"],["/results_demo/celiac_disease5/q5","3b8b5214cbab0b0645af1573d81da024"],["/results_demo/celiac_disease5/results_1.txt","8fe37628c40854772c509987605327b0"],["/results_demo/celiac_disease5/results_2.txt","127dbc68b4f291395d7bd8577375bd0b"],["/results_demo/celiac_disease5/results_3.txt","6760c4216295bbce5933a4b965f03221"],["/results_demo/celiac_disease5/results_4.txt","7121e42b0afceb52c017f4666a6a4e68"],["/results_demo/celiac_disease5/results_5.txt","622523fb6800d61b824941f3a2056476"],["/results_demo/celiac_disease6/celiac6_original.pdf","6c396e16b3a3d6fbec00a3f2893d47c6"],["/results_demo/celiac_disease6/q1","3840b7b1bd5c4d95472d002bb13702a0"],["/results_demo/celiac_disease6/q2","f4112ba00ad1382e39fddd73db474e70"],["/results_demo/celiac_disease6/q3","e31087b8d7ad040610f319cdc9f71596"],["/results_demo/celiac_disease6/q4","2543f1fa53d2bf095875e2a4bf6703af"],["/results_demo/celiac_disease6/results_1.txt","a8b87b74af412867efb0a463ea27d76d"],["/results_demo/celiac_disease6/results_2.txt","c00d4cbee2cbbfc5c8c9c83a7160398f"],["/results_demo/celiac_disease6/results_3.txt","a40f00a7d1f3ed3033819ab2c12f7c13"],["/results_demo/celiac_disease6/results_4.txt","665b3906532f8a7e0ee8a322822c692c"],["/results_demo/crohn_disease1/crohn1_original.pdf","50f0f8247595becafdea2cc206de59d5"],["/results_demo/crohn_disease1/q1","593467b1aea62c6b6fe515cd49dd068a"],["/results_demo/crohn_disease1/q2","86fecc7edfbde077fa9b3f8fc43fe5e8"],["/results_demo/crohn_disease1/q3","810260831d786b694dae6728808ea516"],["/results_demo/crohn_disease1/q4","50a46095d7419f87a0d3887dc3c8c834"],["/results_demo/crohn_disease1/results_1.txt","5fdcd2fc2ef9fceee53dcaadda7e87b0"],["/results_demo/crohn_disease1/results_2.txt","9bfbd181b1687595edfb7f8c56c5d8b9"],["/results_demo/crohn_disease1/results_3.txt","e33c75a8a82812b3d04ded98ff288bdc"],["/results_demo/crohn_disease1/results_4.txt","b21c05009cdd8c0a353ccf96dbadcfe9"],["/results_demo/lupus_vulgaris2/lupus2_original.pdf","0b1bc855c83a9a08371e3d2852b48ac1"],["/results_demo/lupus_vulgaris2/q1","04e90e38ced9343bde9aefeb67ed11cc"],["/results_demo/lupus_vulgaris2/q2","71a229750e41902cb087cac3f207a5ec"],["/results_demo/lupus_vulgaris2/q3","129b875ce3071086d5ae78ff91a434d0"],["/results_demo/lupus_vulgaris2/results_1.txt","cb9f58a2187c74cf91cf9a49d2935796"],["/results_demo/lupus_vulgaris2/results_2.txt","5983fa11d69b493ac64bb8a62135f99c"],["/results_demo/lupus_vulgaris2/results_3.txt","a81ab378bfd1d22f8877958d5c23fba9"],["/results_demo/lyme_disease1/lyme1_original.pdf","4f2d84a4eda5341bf14b9fee52c353e7"],["/results_demo/lyme_disease1/q1","d7f7ca3a46f676e4db024ae20fa8c742"],["/results_demo/lyme_disease1/q2","a6c883cd8c831212b0ab99a470adeec9"],["/results_demo/lyme_disease1/q3","e18a87676fb26cc7d1e74dd1de7bf542"],["/results_demo/lyme_disease1/q4","0d964b3c7ad02594dd48386245dadae8"],["/results_demo/lyme_disease1/q5","0e2e2816338785728d68ad0b37281265"],["/results_demo/lyme_disease1/q6","3208f7d86f5d2f786911157209968748"],["/results_demo/lyme_disease1/q7","847930eb7c276bf8099e5815fcc6dfec"],["/results_demo/lyme_disease1/results_1.txt","94c2114b7cd35e27735dc65258b41890"],["/results_demo/lyme_disease1/results_2.txt","eed5f801ac962c2b08b65dab415e2978"],["/results_demo/lyme_disease1/results_3.txt","d27cc9200273274dde9968cc70dc7cae"],["/results_demo/lyme_disease1/results_4.txt","a696cdbc51c75ef1a444929a03220307"],["/results_demo/lyme_disease1/results_5.txt","fe6a7a73eddaf9ccebb523ac38365752"],["/results_demo/lyme_disease1/results_6.txt","cc81ae944e132661f3531600c8ab92e6"],["/results_demo/lyme_disease1/results_7.txt","7bbf9a88dc7d5e811e9a745d9f2fc350"],["/results_demo/multiple_sclerosis1/bipolar_mul_scle_1_2_3_original.pdf","be9de06d9afa96b1e8135a180d41d7a4"],["/results_demo/multiple_sclerosis1/q1","b042d806ee2a6a36f504d2ee7455290f"],["/results_demo/multiple_sclerosis1/q2","bf5cd6ef97fbfb1df5b253928a792eea"],["/results_demo/multiple_sclerosis1/q3","52c62890d39872e76d2821eafbcad499"],["/results_demo/multiple_sclerosis1/q4","05fad96de16e6080bb1558c15c093754"],["/results_demo/multiple_sclerosis1/results_1.txt","6a96eb7b161805015fe40a142b05e2aa"],["/results_demo/multiple_sclerosis1/results_2.txt","e1b0a60a4186896c8dd987ab17fe3f1b"],["/results_demo/multiple_sclerosis1/results_3.txt","0cfc2b2b0386343c114fc69d8b7e1515"],["/results_demo/multiple_sclerosis1/results_4.txt","f102444ff27be77eea15a28570d5db70"],["/results_demo/multiple_sclerosis2/bipolar_mul_scle_1_2_3_original.pdf","be9de06d9afa96b1e8135a180d41d7a4"],["/results_demo/multiple_sclerosis2/q1","3443436ea6dbfa1c5a08b6014a482d46"],["/results_demo/multiple_sclerosis2/q2","eb3cba2e7e04c3fecee79e8c7d196670"],["/results_demo/multiple_sclerosis2/q3","113561095bf618f45d237b0df4001f47"],["/results_demo/multiple_sclerosis2/q4","be02d7eb139c6f33b92834b5b3496349"],["/results_demo/multiple_sclerosis2/results_1.txt","704e6ff7ddbab761ad3e73eef1214311"],["/results_demo/multiple_sclerosis2/results_2.txt","ece4aea7111763367302a8b93c5b55cb"],["/results_demo/multiple_sclerosis2/results_3.txt","fd4b94ae8cf5f476d891c80b847c627a"],["/results_demo/multiple_sclerosis2/results_4.txt","9b2c748e63ba0ebec6b8a423c63c4769"],["/results_demo/ulcerative_colitis1/q1","b16bdca8bf8c286084d6ecbf51c3933b"],["/results_demo/ulcerative_colitis1/q2","e9caca3a92b9630b4e7e038b6ec07b3f"],["/results_demo/ulcerative_colitis1/q3","2cd5f7bc1e8643eeb50ee3278e5c7e20"],["/results_demo/ulcerative_colitis1/q4","edd93fe6649228728c5723a812a4ec5b"],["/results_demo/ulcerative_colitis1/q5","3d4821d079ac0b67ef2e78112b3d74f4"],["/results_demo/ulcerative_colitis1/results_1.txt","42b2b538d5a17a7152cc9cc861a78b8d"],["/results_demo/ulcerative_colitis1/results_2.txt","f44e09cf46b996368262f0c2cb245584"],["/results_demo/ulcerative_colitis1/results_3.txt","cad6fa61dd7dbd3caa3a9d6978b59b84"],["/results_demo/ulcerative_colitis1/results_4.txt","35628c8b5d039c8140ad68b3c65ba956"],["/results_demo/ulcerative_colitis1/results_5.txt","1d402b6aa1a37825011ef2b344ef71a6"],["/results_demo/ulcerative_colitis1/ulcerative_colitis1_original.pdf","5bd57163058490865bfe3c26215b6ba1"],["/results_demo/ulcerative_colitis2/q1","976b9110a3afa7dba34fdc666689d3ee"],["/results_demo/ulcerative_colitis2/q2","2a4fda00149debd122c4e363b35b2eb3"],["/results_demo/ulcerative_colitis2/q3","91277d2821c8275fc260ce258efde092"],["/results_demo/ulcerative_colitis2/results_1.txt","5872c93f5c47f7e7f70abcbe5a2ee29f"],["/results_demo/ulcerative_colitis2/results_2.txt","19018c7ac8e309a9013befa8c5437c93"],["/results_demo/ulcerative_colitis2/results_3.txt","5011e48dea53ff963297456b86205198"],["/results_demo/whipple_disease2/Whipple_Disease_2_original.pdf","aab6ab59006a24ca645b3e4197beabe1"],["/results_demo/whipple_disease2/q1","ce1638081fe5ecec1422dc20d7f70e10"],["/results_demo/whipple_disease2/q2","85acabd850f2a875583ce497aa70ed53"],["/results_demo/whipple_disease2/q3","83aab8bec76b2b08660bdc13b0bd5280"],["/results_demo/whipple_disease2/q4","45fd66747d56e8d011261da0b89c5077"],["/results_demo/whipple_disease2/q5","09bb9a368624ffca2aaac3e68ef731ba"],["/results_demo/whipple_disease2/q6","d4dee0de890e65e9317e6f9818ba9a40"],["/results_demo/whipple_disease2/q7","8c925cebb392797e0c1860d8f7a16b4d"],["/results_demo/whipple_disease2/q8","f32fef295a45bee75b7d783f0758accf"],["/results_demo/whipple_disease2/results_1.txt","1e6429184246f14540b0f3df86921a73"],["/results_demo/whipple_disease2/results_2.txt","22a621d2b9f535ae944e8b59ea9b4a56"],["/results_demo/whipple_disease2/results_3.txt","b2f070f11697fb1448f71c70fc108693"],["/results_demo/whipple_disease2/results_4.txt","cdee874219a34a0241e932a77af4680e"],["/results_demo/whipple_disease2/results_5.txt","38327fb4492df606dd80457566ec538d"],["/results_demo/whipple_disease2/results_6.txt","87c3d566deecdd68c25de2d0c21227e6"],["/results_demo/whipple_disease2/results_7.txt","7b7edd6823af1c29e609de9688afdc36"],["/results_demo/whipple_disease2/results_8.txt","80478e6c92884daef3a1616a5cd0f953"],["/src/eh-labs-digital-companion.html","cb8bd203e0aa8c68283b074799af725f"],["/src/eh-labs-view-404.html","f4cb5dfb5ff4e8911d004d95b8659977"],["/src/eh-labs-view-annotated-ehr.html","875a3858e405fd631fcb5ae5f01a8acd"],["/src/eh-labs-view-diagnosis-support.html","c951f1755cf15bdf2fec8992064ae35d"],["/src/my-view3.html","0c5e4d51c59285a2a5539d446fced673"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

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


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = 'index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




