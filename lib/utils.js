(function() {
	'use strict';
	var utils = {};

	utils.el = function(id) {
		return document.getElementById(id);
	};

	utils.empty = function(el) {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
	};

	module.exports = utils;
})();
