/**
Supervillain names in alphabetical order.

@example
```
import supervillains from 'supervillains';

supervillains;
//=> ['Abattoir', 'Able Crown', …]
```
*/
declare const supervillains: readonly string[];

/**
Get a random supervillain name.

@example
```
import {randomSupervillain} from 'supervillains';

randomSupervillain();
//=> 'Mud Pack'
```
*/
export function randomSupervillain(): string;
