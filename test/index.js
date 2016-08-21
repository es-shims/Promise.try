'use strict';

var promiseTry = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(promiseTry, t);

	t.end();
});
