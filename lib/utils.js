;(function(global) {
    'use strict';

    // Class ----------------------------------------
    var utils = {};

    // Header ---------------------------------------
    utils.sanitaize = sanitaize;

    function sanitaize(s) {
        return s.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // Exports --------------------------------------
    if ('process' in global) {
        module.exports = utils;
    }
})((this || 0).self || global);
