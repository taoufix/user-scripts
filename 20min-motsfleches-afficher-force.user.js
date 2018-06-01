// ==UserScript==
// @name         20min Mots flêchés afficher force
// @namespace    http://taoufix.com/20min-motsfleches-afficher-force
// @version      1.0.2
// @updateURL    https://github.com/taoufix/user-scripts/raw/master/20min-motsfleches-afficher-force.user.js
// @author       taoufix
// @match        http*://rcijeux.fr/game/20minutes/mfleches?id=*
// @match        http*://www.rcijeux.fr/game/20minutes/mfleches?id=*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    console.log("---- User script [20min mfleches] ----");

    var DEBUG = true;
    function getDate() {
        return window.location.href.split('=')[1];
    }

    function forceStars(force) {
        var stars = "";
        for (var i=0; i<force; i++) {
            stars += "★";
        }
        for (var j=force; j<4; j++) {
            stars += "☆";
        }
        return stars;
    }

    $.get(window.location.origin+"/drupal_game/20minutes/grids/"+getDate()+".mfj")
     .done(function( data ) {
        var force = data.split("\n")[3].split('"')[1];
        if (DEBUG) {
            console.log("force", force);
        }
        $( "#game-name" ).html("Force: " + forceStars(force));
     })
     .fail(function(err) {
        console.log("---- ERROR ----");
        console.log(err);
     });

})();
