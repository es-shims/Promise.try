'use strict';

var ES = require('es-abstract/es7');

var promiseTry = function try_(callbackfn) {
	/* eslint no-invalid-this: 0 */

	var C = this;
	if (ES.Type(C) !== 'Object') {
		throw new TypeError('receiver must be an object');
	}

	if (!ES.IsConstructor(C)) {
		throw new TypeError('receiver must be a constructor');
	}

	return new C(function (resolve) {
		resolve(callbackfn());
	});
};
if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(promiseTry, 'name').configurable) {
	Object.defineProperty(promiseTry, 'name', { configurable: true, value: 'try' });
}

module.exports = promiseTry;
