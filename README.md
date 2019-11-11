# promise.try <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Greenkeeper badge](https://badges.greenkeeper.io/es-shims/Promise.try.svg)](https://greenkeeper.io/)

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

ES Proposal spec-compliant shim for `Promise.try`. Invoke its "shim" method to shim `Promise.try` if it is unavailable or noncompliant. **Note**: a global `Promise` must already exist: the [es6-shim](https://github.com/es-shims/es6-shim) is recommended.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment that has `Promise` available globally, and complies with the [proposed spec](https://github.com/ljharb/proposal-promise-try).

Most common usage:
```js
var assert = require('assert');
var promiseTry = require('promise.try');

promiseTry(function () {
	throw 42;
}).catch(function (e) {
	assert.equal(e, 42);
});

promiseTry(function () {
	return Infinity;
}).then(function (x) {
	assert.equal(x, Infinity);
});

promiseTry.shim(); // will be a no-op if not needed

Promise.try(function () {
	throw 42;
}).catch(function (e) {
	assert.equal(e, 42);
});

Promise.try(function () {
	return Infinity;
}).then(function (x) {
	assert.equal(x, Infinity);
});
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/promise.try
[npm-version-svg]: http://versionbadg.es/es-shims/Promise.try.svg
[travis-svg]: https://travis-ci.org/es-shims/Promise.try.svg
[travis-url]: https://travis-ci.org/es-shims/Promise.try
[deps-svg]: https://david-dm.org/es-shims/Promise.try.svg
[deps-url]: https://david-dm.org/es-shims/Promise.try
[dev-deps-svg]: https://david-dm.org/es-shims/Promise.try/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Promise.try#info=devDependencies
[testling-svg]: https://ci.testling.com/es-shims/Promise.try.png
[testling-url]: https://ci.testling.com/es-shims/Promise.try
[npm-badge-png]: https://nodei.co/npm/promise.try.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/promise.try.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/promise.try.svg
[downloads-url]: http://npm-stat.com/charts.html?package=promise.try
