;(function(global) {
	'use strict';

	// Class ----------------------------------------
	function remew() {
	}

	// Header ---------------------------------------
	remew.XorShift = require('./XorShift');
	remew.observe = require('./observer');
	remew.utils = require('./utils');
	remew.dom = require('./DomApi');

	// Implementation -------------------------------

	// Exports --------------------------------------
	if ('process' in global) {
		module.exports = remew;
	}
	global['remew'] = remew;
})((this || 0).self || global);

