'use strict';

var $TypeError = require('es-errors/type');

module.exports = function requirePromise() {
	if (typeof Promise !== 'function') {
		throw new $TypeError('`Promise.try` requires a global `Promise` be available.');
	}
};
