// ==UserScript==
// @name         Mots flêchés RCI Jeux - Afficher force
// @description  Afficher la force d'une grille de mots flêchés 20Minutes, LCI, Telestar, ...
// @namespace    http://taoufix.com/20min-motsfleches-afficher-force
// @version      1.2.2
// @author       taoufix
// @match        http*://rcijeux.fr/game/*/mfleches?id=*
// @match        http*://www.rcijeux.fr/game/*/mfleches?id=*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {

    'use strict';

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
        var src = source();
        $("#game-name").html("<img style='vertical-align:middle;' src='"+IMG_URL+src+".png'> Force : " + stars(force));
        $("title").html(src.toUpperCase());
     })
     .fail(function(err) {
        console.log("---- ERROR ----");
        console.log(err);
     });

    // Fix padding (LCI)
    $(".app").css("max-width", "880px");
    $(".game").css("padding", "15px !important");

    $('body').append('<div id="top-def" style=position:absolute;top:0;right:0;background-color:black;color:white;'+
                     'font-family:sans-serif;height:110px;width:110px;font-size:18px;text-align:center;'+
                     'display:flex;flex-direction:column;justify-content:center;align-items:center;"></div>');

    $("#top-def").click(function(){
        $("#top-def").hide();
    });

    var originalHighlightNode = window.rci.Cells.Definition.prototype.highlightNode;
    window.rci.Cells.Definition.prototype.highlightNode = function() {
        // Execute the original method
        var result = originalHighlightNode.apply( this, arguments );

        var $node = $(this.getNode());
        var txt = "";
        $node.find('tspan').each(function(i, v) {
            txt += $(v).text() + " ";
        })
        $("#top-def").html(txt);
        $("#top-def").show();

        // return the original result
        return result;
    };

})();
