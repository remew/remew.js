(function() {
	'use strict';

	var observedObjects = [];
	function _observeObject(target, prop, index, callback) {
		var currentValue = target[prop];
		observedObjects[index][prop] = currentValue;
		Object.defineProperty(target, prop, {
			enumerable: true,
			get: function() {
				return observedObjects[index][prop];
			},
			set: function(v) {
				var oldValue = observedObjects[index][prop];
				if (oldValue !== v) {
					observedObjects[index][prop] = v;
					callback(prop, v, oldValue);
				}
			},
		});
	}

	function _observeInputElement(target, index, callback) {
		target.addEventListener('change', _update);
		target.addEventListener('input', _update);

		function _update(e) {
			var prop = _isUseChecked(e.target) ? 'checked' : 'value';
			var oldValue = observedObjects[index][prop];
			if (e.target[prop] !== oldValue) {
				observedObjects[index][prop] = e.target[prop];
				callback(prop, e.target[prop], oldValue);
			}
		}
	}

	function _isUseChecked(element) {
		if (element.type === 'checkbox' ||
			element.type === 'radio' ||
			element.getAttribute('role') === 'checkbox' ||
			element.getAttribute('role') === 'radio') {
				return true;
		}
		return false;
	}

	/**
	 * starting observe an Object or a HTMLInputElement
	 * target: observed object. Instance of Object or HTMLInputElement
	 * properties: observe properties Array when target is instance of Object. this must be callback if target is instance of HTMLInputElement.
	 * callback: call when target.property was chenged
	 */
	function observe(target, properties, callback) {
		var index = observedObjects.length;
		observedObjects[index] = {};

		if (target instanceof HTMLInputElement) {
			if (typeof callback !== 'function' && typeof properties === 'function') {
				callback = properties;
			}
			_observeInputElement(target, index, callback);
		} else {
			if (!Array.isArray(properties)) {
				properties = [properties];
			}
			properties.forEach(function(prop) {
				_observeObject(target, prop, index, callback);
			});
		}
	}
	module.exports = observe;
})();

