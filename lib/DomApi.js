;(function(global) {
	'use strict';

	// Class ----------------------------------------

	/**
	 * DomApi class
	 * @class
	 * @constructor
	 * @classdesc My Dom short hands api.
	 * @params {HTMLElement} element - target dom object.
	 */
	function DomApi(el) {
		if (!(this instanceof DomApi)) {
			return new DomApi(el);
		}
		this.el = el;
	}

	// Header ---------------------------------------

	/**
	 * Get attribute value from target if count of arguments is one.
	 * Set attribute value to target if count of arguments is two.
	 * @param {string} name - target attribute name.
	 * @param {string|number} [value] - set this value to target.
	 * @return {string} return attribute value if given only one argument.
	 */
	DomApi.prototype.attr = attr;

	/**
	 * Remove all child nodes from target.
	 */
	DomApi.prototype.empty = empty;

	/**
	 * Set given css class name to target.
	 * @param {string} name - css class name
	 */
	DomApi.prototype.addClass = addClass;

	/**
	 * Remove given css class name from target.
	 * @param {string} name - css class name
	 */
	DomApi.prototype.removeClass = removeClass;
	
	/**
	 * Return the target has given css class.
	 * @param {string} name - search css class name.
	 * @return {boolean} has given css class.
	 */
	DomApi.prototype.hasClass = hasClass;
	
	/**
	 * Set given css class name to target if it does not has given css class.
	 * Remove given css class name from target if it has given css class.
	 * @param {string} name - css class name
	 */
	DomApi.prototype.toggleClass = toggleClass;

	
	/**
	 * Short hand of [document|target].querySelector()
	 * @param {string} query - css selector.
	 * @return {HTMLElement} found element
	 * @example
	 * var dom = new DomApi(someElement);
	 * var a = dom.query('a'); // short hand of someElement.querySelector('a');
	 * if (a !== null) {
	 *   a.href = '/hoge';
	 * }
	 * @example
	 * var a = DomApi.query('a'); // short hand of document.querySelector('a');
	 * if (a !== null) {
	 *   a.href = '/hoge';
	 * }
	 */
	DomApi.prototype.query = query;
	DomApi.query = query;
	
	/**
	 * Short hand of [document|target].querySelectorAll()
	 * But NOT just short hand.
	 * vanila querySelectorAll will returns a NodeList but this method will returns an Array.
	 * @param {string} query - css selector.
	 * @return {Array} found element(s) array.
	 * @example
	 * var dom = new DomApi(someElement);
	 * dom.queryAll('a').forEach(function(a) {
	 *   console.log(a); // Show a tag.
	 * });
	 */
	DomApi.prototype.queryAll = queryAll;
	DomApi.queryAll = queryAll;
	
	/**
	 * Short hand of addEventListener
	 * @param {string} eventName - listen event name. like 'click', 'DOMContentLoaded', 'custom-event'.
	 * @param {Function|string} callback - call this function when fired eventName. use target[callback] if typeof callback is string.
	 * @param {boolean} [useCapture] - 3rd argument of addEventListener. search google it.
	 */
	DomApi.prototype.listen = listen;
	DomApi.listen = listen;
	
	/**
	 * Short hand of removeEventListener
	 * @param {string} eventName - unlisten event name. like 'click', 'DOMContentLoaded', 'custom-event'.
	 * @param {Function|string} callback - unlisten this function. use target[callback] if typeof callback is string.
	 * @param {boolean} [useCapture] - 3rd argument of addEventListener. search google it.
	 */
	DomApi.prototype.unlisten = unlisten;
	DomApi.unlisten = unlisten;

	// Implementation -------------------------------
	function attr(name, value) {
		if (value === undefined) {
			return this.el.getAttribute(name);
		}
		this.el.setAttribute(name, value);
	}

	function empty() {
		while (this.el.firstChild) {
			this.el.removeChild(this.el.firstChild);
		}
	}

	function addClass(name) {
		this.el.classList.add(name);
	}

	function removeClass(name) {
		this.el.classList.remove(name);
	}

	function hasClass(name) {
		return this.el.classList.contain(name);
	}

	function toggleClass(name) {
		if (this.hasClass(name)) {
			this.removeClass(name);
		} else {
			this.addClass(name);
		}
	}

	function query(q) {
		var ctx = _context(this);
		return ctx.querySelector(q);
	}

	function queryAll(q) {
		var ctx = _context(this);
		return Array.prototype.slice.call(ctx.querySelectorAll(q));
	}
	
	function listen(eventName, callback, useCapture) {
		if (useCapture === undefined) {
			useCapture = false;
		}
		var ctx = _context(this);
		if (typeof callback === 'string') {
			callback = ctx[callback];
		}
		ctx.addEventListener(eventName, callback, useCapture);
	}

	function unlisten(eventName, callback, useCapture) {
		if (useCapture === undefined) {
			useCapture = false;
		}
		var ctx = _context(this);
		if (typeof callback === 'string') {
			callback = ctx[callback];
		}
		ctx.removeEventListener(eventName, callback, useCapture);
	}

	function _context(that) {
		return this && this.el || document;
	}

	// Exports --------------------------------------
	// var module = module || {};
	// console.log(module, module.exports);
	// module.exports = module.exports || global['DomApi'];
	module.exports = DomApi;
	//global['DomApi'] = DomApi;
})((this || 0).self || global);

