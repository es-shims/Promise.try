'use strict';

var requirePromise = require('./requirePromise');

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	requirePromise();
	return typeof Promise['try'] === 'function' ? Promise['try'] : implementation;
};
