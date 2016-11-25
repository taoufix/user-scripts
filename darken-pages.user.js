// ==UserScript==
// @name        Darken pages
// @namespace   htt://taoufix.com/darken-pages
// @updateURL   https://raw.githubusercontent.com/taoufix/user-scripts/master/darken-pages.user.js
// @include     *
// @version     1.0.0
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

$('<div id="darken-page" style="pointer-events:none;position:fixed;top:0;bottom:0;left:0;right:0;background-color:black;opacity:0.15;z-index:9999"></div>').appendTo('body');
$("#darken-page").click(function(e){e.preventDefault();});
