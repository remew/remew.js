(function() {
	'use strict';
	function XorShift(seed, x, y, z) {
		if (!(this instanceof XorShift)) {
			return new XorShift(seed);
		}
		this.x = x || 1234567890;
		this.y = y || 9753197531;
		this.z = z || 8642086420;
		this.w = seed || new Date().getTime();
	}
	XorShift.prototype.next = function() {
		var t = this.x ^ (this.x << 11);
		this.x = this.y;
		this.y = this.z;
		this.z = this.w;
		return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8));
	};

	module.exports = XorShift;
})();
