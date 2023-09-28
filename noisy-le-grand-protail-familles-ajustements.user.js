// ==UserScript==
// @name         Ajustements Portail Famille Noisy-le-Grand
// @namespace    http://github.com/taoufix
// @version      0.1
// @description  Ajout de tri pour les tableaux
// @author       Taoufix
// @match        https://noisy-le-grand.portail-familles.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

  $('th').click(function() {
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc) {
      rows = rows.reverse()
    }
    for (var i = 0; i < rows.length; i++) {
      table.append(rows[i])
    };
  })

  function comparer(index) {
    return function(a, b) {
      var valA = getCellValue(a, index), valB = getCellValue(b, index);
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
    }
  }
function getCellValue(row, index){ return $(row).children('td').eq(index).text() }

})();
