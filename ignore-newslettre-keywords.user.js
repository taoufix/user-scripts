// ==UserScript==
// @name         Ignore newslettre keywords
// @namespace    http://taoufix.com/
// @version      0.1.2
// @description  try to take over the world!
// @author       @taoufix
// @include      /^https?:\/\/mailchi\.mp\/.*/
// @grant        none
// @updateURL   https://github.com/taoufix/user-scripts/raw/master/ignore-newslettre-keywords.user.js
// ==/UserScript==

(function() {
    'use strict';

    var keywords = [/\brxjava\b/, /\bkotlin\b/, /\bespresso\b/, /\btests\b/, /\bwear\b/];

    // Your code here...
    $(".article-headline").each(function(i, v) {
        var title = v.innerText.toLowerCase();
        keywords.forEach(function(k) {
            if (title.match(k)) {
                $(v).css("color", "#ccc");
                $(v).parent().css("color", "#ccc");
            }
        });

    });
})();
