#!/usr/bin/env node
'use strict';
var meow = require('meow');
var supervillains = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ supervillains',
		'  Mud Pack',
		'',
		'  $ supervillains --all',
		'  Abattoir',
		'  Able Crown',
		'  ...',
		'',
		'Options',
		'  --all   Get all names instead of a random name'
	].join('\n')
});

console.log(cli.flags.all ? supervillains.all.join('\n') : supervillains.random());
