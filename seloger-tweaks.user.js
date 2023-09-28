// ==UserScript==
// @name         SeLoger Tweaks
// @namespace    http://github.com/taoufix
// @version      1.1
// @description  Adds navigation by arrow when viewing images
// @author       Taoufix
// @match        https://www.seloger.com/annonces/*
// @icon         https://www.seloger.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('loaded...');
    const next = document.querySelector('button[direction="next"]');
    const prev = document.querySelector('button[direction="prev"]');
    document.onkeydown = function(e) {
      switch(e.keyCode) {
        case 37: /* <- */ {
          prev.click();
          break;
        }
        case 39: /* -> */ {
          next.click();
          break;
        }
        case 70: /* f */ {
          document.querySelector('div[data-test="media-photo"]').click();
          break;
        }
      }
    }

})();
