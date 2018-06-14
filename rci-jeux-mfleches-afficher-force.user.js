// ==UserScript==
// @name         Mots flêchés RCI Jeux - Afficher force
// @description  Afficher la force d'une grille de mots flêchés 20Minutes, LCI, Telestar, ...
// @namespace    http://taoufix.com/20min-motsfleches-afficher-force
// @version      1.1.5
// @author       taoufix
// @match        http*://rcijeux.fr/game/*/mfleches?id=*
// @match        http*://www.rcijeux.fr/game/*/mfleches?id=*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {

    'use strict';

    console.log("---- User script [mfleches] ----");

    var IMG_URL = "https://raw.githubusercontent.com/taoufix/user-scripts/master/permalink/mfleches/";

    var CONF = {
        "20minutes": { mfjPath: "/grids/"},
    };
    function id() {
        return window.location.href.split('=')[1];
    }

    function source() {
        return window.location.pathname.split('/')[2];
    }

    function stars(force) {
        var s = "";
        for (var i = 0; i < force; i++) {
            s += "★";
        }
        for (var j = force; j < 4; j++) {
            s += "☆";
        }
        return s;
    }

    function mfjUrl() {
        var src = source();
        var path = CONF[src]? CONF[src].mfjPath : "/mfleches/grids/";
        return window.location.origin + "/drupal_game/" + src + path + id() + ".mfj";
    }

    $.get(mfjUrl())
     .done(function( data ) {
        var force = data.split("\n")[3].split('"')[1];
        $("#game-name").html("<img style='vertical-align:middle;' src='"+IMG_URL+source()+".png'> Force : " + stars(force));
     })
     .fail(function(err) {
        console.log("---- ERROR ----");
        console.log(err);
     });

})();
