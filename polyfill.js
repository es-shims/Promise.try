'use strict';

var requirePromise = require('./requirePromise');

var implementation = require('./implementation');

// https://github.com/tc39/ecma262/pull/3883
function wrapsReturnedPromise() {
	var sentinel = Promise.resolve();
	var returned = Promise['try'](function () {
		return sentinel;
	});
	return returned !== sentinel;
}

module.exports = function getPolyfill() {
	requirePromise();
	if (typeof Promise['try'] === 'function' && !wrapsReturnedPromise()) {
		return Promise['try'];
	}
	return implementation;
};
