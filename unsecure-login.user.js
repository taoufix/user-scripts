// ==UserScript==
// @name        Unsecure login check
// @namespace   htt://taoufix.com/unsecure-login
// @include     *
// @version     1.2.4
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

var pwStyle = "input.pwOK { color: #000000 !important; background-color: #ccffcc !important; background-image: none !important; }"
    + "input.pwWarn { color: #000000 !important; background-color: #ffff98 !important; background-image: none !important; }"
    + "input.pwKO { color: #000000 !important; background-color: #ffffbb !important; background-image: none !important; }";


$( "<style>" + pwStyle + "</style>" ).appendTo("head");

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

$('input[type=password]').each(function () {
    var ok;
    var action = $(this).closest('form').attr('action');
    if (action.startsWith('https://')) {
        // Form action is HTTPS
        ok = true;
    } else if (action.startsWith('http://')) {
        // Form action is HTTP :(
        ok = false;
    } else if (location.protocol === 'https:') {
        // Form action is a relative path and the whole page is HTTPS
        ok = true;
    } else {
        ok = false;
    }
    
    var pwClass;
    if (!ok) {
        pwClass = 'pwKO';
    } else if (getLocation(action).hostname === location.hostname) {
        pwClass = 'pwOK';
    } else {
        // Warn about cross domain in HTTPS
        pwClass = 'pwWarn';
    }
    
    $(this).addClass(pwClass);
    
    // Show form action on mouse hover.
    $(this).attr('title', 'form action: ' + action);
});
