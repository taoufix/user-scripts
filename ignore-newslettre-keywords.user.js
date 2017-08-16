// ==UserScript==
// @name         Ignore newslettre keywords
// @namespace    http://taoufix.com/
// @version      0.1
// @description  try to take over the world!
// @author       @taoufix
// @include      /^https?:\/\/mailchi\.mp\/.*/
// @grant        none
// @updateURL   https://github.com/taoufix/user-scripts/raw/master/ignore-newslettre-keywords.user.js
// ==/UserScript==

(function() {
    'use strict';

    var keywords = ["rxjava", "kotlin"];

    // Your code here...
    $(".article-headline").each(function(i, v) {
        var title = v.innerText.toLowerCase();
        keywords.forEach(function(k) {
            console.log(k);
            if (title.indexOf(k) > 0) {
                $(v).css("color", "#ccc");
            }
        });

    });
})();
