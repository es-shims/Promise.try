'use strict';

var Call = require('es-abstract/2025/Call');
var NewPromiseCapability = require('es-abstract/2025/NewPromiseCapability');
var PromiseResolve = require('es-abstract/2025/PromiseResolve');

var isObject = require('es-abstract/helpers/isObject');

var setFunctionName = require('set-function-name');
var $TypeError = require('es-errors/type');
var callBound = require('call-bind/callBound');

var $slice = callBound('Array.prototype.slice');

module.exports = setFunctionName(function try_(callbackfn) {
	/* eslint no-invalid-this: 0 */

	var C = this;
	if (!isObject(C)) {
		throw new $TypeError('receiver must be an object'); // step 2
	}

	var args = arguments.length > 1 ? $slice(arguments, 1) : [];

	var status;
	try {
		status = Call(callbackfn, void undefined, args); // step 3
	} catch (e) { // step 4
		var promiseCapability = NewPromiseCapability(C); // step 4.a

		Call(promiseCapability['[[Reject]]'], void undefined, [e]); // step 4.b

		return promiseCapability['[[Promise]]']; // step 4.c
	}

	return PromiseResolve(C, status); // step 5.a
}, 'try', true);
