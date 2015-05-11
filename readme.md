# supervillains [![Build Status](https://travis-ci.org/sindresorhus/supervillains.svg?branch=master)](https://travis-ci.org/sindresorhus/supervillains)

> Get supervillain names

<img src="https://cloud.githubusercontent.com/assets/170270/7563380/f0af1aee-f7dc-11e4-9b83-92fe18cf6bdd.png" width="182">

The list is just a [JSON file](supervillains.json) and can be used wherever.


## Install

```
$ npm install --save supervillains
```


## Usage

```js
var supervillains = require('supervillains');

supervillains.random();
//=> 'Mud Pack'
```


## API

### .all

Type: `array`

Supervillain names in alphabetical order.

### .random()

Type: `function`

Random supervillain name.


## CLI

```
$ npm install --global supervillains
```

```
$ supervillains --help

  Examples
    $ supervillains
    Mud Pack

    $ supervillains --all
    Abattoir
    Able Crown
    ...

  Options
    --all   Get all names instead of a random name
```


## Related

- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
