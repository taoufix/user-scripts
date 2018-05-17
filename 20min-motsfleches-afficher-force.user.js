// ==UserScript==
// @name         20min Mots flêchés afficher force
// @namespace    http://taoufix.com/20min-motsfleches-afficher-force
// @version      0.1
// @updateURL    https://github.com/taoufix/user-scripts/raw/master/20min-motsfleches-afficher-force.user.js
// @author       taoufix
// @match        http://rcijeux.fr/game/20minutes/mfleches?id=*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    function getDate() {
        return window.location.href.split('=')[1];
    }

    $.get("http://rcijeux.fr/drupal_game/20minutes/grids/"+getDate()+".mfj", function( data ) {
       var force = data.split("\n")[3].split('"')[1];
        $( "#game-name" ).html("Force: " + force);
    });

})();
