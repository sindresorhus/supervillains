'use strict';
var uniqueRandomArray = require('unique-random-array');
var supervillains = require('./supervillains.json');

exports.all = supervillains;
exports.random = uniqueRandomArray(supervillains);
