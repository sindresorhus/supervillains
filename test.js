'use strict';
var test = require('ava');
var supervillains = require('./');

test(function (t) {
	t.assert(supervillains.all.length > 0);
	t.assert(supervillains.all.indexOf('Mud Pack') !== -1);
	t.assert(supervillains.random());
	t.end();
});
