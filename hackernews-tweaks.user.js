// ==UserScript==
// @name        Hacker News Tweaks
// @namespace   http://taoufix.com/hackernews-tweaks
// @include     https://news.ycombinator.com/*
// @updateURL   https://github.com/taoufix/user-scripts/raw/master/hackernews-tweaks.user.js
// @version     2.1.0
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

// Points
var MIN_SCORE = 100;
var BEST_SCORE = 500;
var SCORE_REGEXP = /(\d+) points/;
$('span.score').each(function() {
  var match = SCORE_REGEXP.exec($(this).text());
  if (match != null && parseInt(match[1]) >= MIN_SCORE) {
    $(this).css('color', '#ff3030');
    if (parseInt(match[1]) >= BEST_SCORE) {
      $(this).css('font-weight', 'bold');
    }
  }
});
