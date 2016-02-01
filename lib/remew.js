;(function(global) {
	'use strict';

	// Class ----------------------------------------
	function remew() {
	}

	// Header ---------------------------------------
	remew.prototype.XorShift = require('./XorShift');
	remew.prototype.observe = require('./observer');
	remew.prototype.utils = require('./utils');

	// Implementation -------------------------------

	// Exports --------------------------------------
	if ('process' in global) {
		module.exports = remew;
	}
	// global['remew'] = remew;
})((this || 0).self || global);

