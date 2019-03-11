// ==UserScript==
// @name         Ignore newslettre keywords
// @namespace    http://taoufix.com/
// @version      0.1.3
// @description  Ignore keywords and sponsored articles
// @author       @taoufix
// @include      /^https?:\/\/mailchi\.mp\/.*/
// @grant        none
// @updateURL   https://github.com/taoufix/user-scripts/raw/master/ignore-newslettre-keywords.user.js
// ==/UserScript==

(function() {
    'use strict';
    var color = "#ddd";

    var keywords = [/\brxjava\b/, /\bkotlin\b/, /\bespresso\b/, /\btests\b/, /\bwear\b/];

    // Keywords
    $(".article-headline").each(function(i, v) {
        var title = v.innerText.toLowerCase();
        keywords.forEach(function(k) {
            if (title.match(k)) {
                $(v).css("color", color);
                $(v).next().css("color", color);
                $(v).parent().css("color", color);
            }
        });
    });

    // Sponsored
    $("table h5, table h2").each(function(i, v) {
        var title = v.innerText.toLowerCase();
        if (title === "sponsored") {
            $(v).css("color", color);
            var $target = $(v).closest("table").next();
            $target.css( "color", color);
            $target.find(".article-headline, .main-url").css( "color", color);
        }
    });

})();
