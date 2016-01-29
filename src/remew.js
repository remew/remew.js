(function() {
	'use strict';
	var remew = {
		Random: require('./XorShift'),
		observe: require('./observer'),
		utils: require('./utils'),
	};

	module.exports = remew;
	window.remew = remew;
})();

