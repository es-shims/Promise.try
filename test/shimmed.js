'use strict';

var promiseFinally = require('../');
promiseFinally.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = function f() {}.name === 'f';
var fnNamesConfigurable = functionsHaveNames && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(function f() {}, 'name').configurable;

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Promise['try'].length, 1, 'Promise.try has a length of 1');
	t.test('Function name', { skip: !fnNamesConfigurable }, function (st) {
		st.equal(Promise['try'].name, 'try', 'Promise.try has name "try"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Promise, 'try'), 'Promise.try is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad object value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Promise['try'].call(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Promise['try'].call(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(function (fn) { return Promise['try'].call(this || Promise, fn); }, t);

	t.end();
});
