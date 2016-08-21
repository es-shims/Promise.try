'use strict';

var bind = require('function-bind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var requirePromise = require('./requirePromise');

var bound = bind.call(Function.call, getPolyfill());

var promiseTry = function promiseTry(fn) {
	requirePromise();

	return bound(this || Promise, fn); // eslint-disable-line no-invalid-this
};

define(promiseTry, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = promiseTry;
