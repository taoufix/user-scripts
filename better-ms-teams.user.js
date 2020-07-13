// ==UserScript==
// @name         Better MS Teams
// @namespace    http://github.com/taoufix/better-ms-teams
// @version      1.0
// @description  Better MS Teams
// @author       Taoufix
// @match        https://teams.microsoft.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
`);

const SAFE_THREADS = [
    '19:ID1@thread.tacv2', // ID1
    '19:ID2@thread.tacv2', // ID2
];

function log(str, elm) {
    console.log('USER_SCRIPT ' + str, elm);
}

(function() {
    'use strict';

    function tweak() {
        const threadId = new URL('http://teams' + window.location.hash.substr(1)).searchParams.get('threadId');
        const div = document.getElementById('page-content-wrapper');
        div.style.border = null;
        if (threadId) {
            if (SAFE_THREADS.includes(threadId)) {
                div.style.border = '2px solid green';
            } else {
                div.style.border = '2px solid red';
            }
        }
    }

    // Run on url change
    window.addEventListener('popstate', tweak);

    // Run on page reload
    tweak();
})();
