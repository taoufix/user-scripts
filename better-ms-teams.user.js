// ==UserScript==
// @name         Better MS Teams
// @namespace    http://taoufix.github.io/user-scripts/better-ms-teams
// @version      1.1.2
// @description  Add red border to threads and green boreder to singl chats ; Disable Ctlr-Shif-C to make calls
// @author       Taoufix
// @match        https://teams.microsoft.com/*
// @updateURL    https://github.com/taoufix/user-scripts/raw/master/better-ms-teams.user.js
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
`);

function log(str, elm) {
    console.log('USER_SCRIPT ' + str, elm);
}

(function() {
    'use strict';

    // Disable Call short-cut (Ctrl-Shift-C)
    function disabelCallShortCut(e) {
       if (e.ctrlKey && e.shiftKey && e.which === 67) {
            document.location.href = 'http://www.google.com'
        }
    }
    document.onkeydown = disabelCallShortCut;
    document.onkeyup = disabelCallShortCut

    // Hightlight safe and unsafe threads
    function tweak() {
        const div = document.getElementById('page-content-wrapper');
        div.style.border = null;
        // Unique user chat
        if (location.hash.includes('@unq')) {
            div.style.background = 'inherit';
            div.style.opacity = '1';
        }
        // Group chat or channel
        if (location.hash.includes('@thread')) {
            div.style.background = 'repeating-linear-gradient(45deg, red, red 20px, orange 20px, orange 40px)';
            div.style.opacity = '0.15';
        }
    }

    // Run on url change
    window.addEventListener('popstate', tweak);

    // Run on page reload
    tweak();
})();
