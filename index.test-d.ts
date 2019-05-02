import {expectType} from 'tsd';
import supervillains = require('.');

expectType<readonly string[]>(supervillains.all);
expectType<string>(supervillains.random());
