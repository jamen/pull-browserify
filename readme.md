# pull-browserify

> Pull stream functions for Browserify

This simply wraps [`browserify`](https://npmjs.com/browserify) in pull-stream functions.

```js
var pull = require('pull-stream')
var vinyl = require('pull-vinyl')
var bify = require('pull-browserify')

pull(
  bify('some-file.js'),
  bify.add('another-file.js'),
  bify.transform('babelify', { ...opts }),
  bify.bundle(),
  vinyl.map('index.js'),
  vinyl.write('out')
)
```

## Installation

```sh
$ npm install --save pull-browserify
```

## Usage

### `browserify([files, opts])`
### `browserify.source([files, opts])`

Creates a browserify object in the pipeline, where you can use the functions (or `pull.map`) to manage it.

### `browserify.{add, require, external, ignore, exclude, transform}`

These just wrap their [`browserify`](https://npmjs.com/browserify) counterparts in `pull.map`. You can read the docs there.

```js
var settings = pull(
  browserify.add('./some-shim.js')
  browserify.transform('babelify', { ...opts }),
  browserify.exclude('./other-file.js'),
  // ...
)

pull(
  browserify('./app/index.js'),
  settings,
  browserify.bundle(),
  // ...
)
```

### `browserify.bundle()`

Maps the stream to the bundled source buffer.  You can write it to the file system or do whatever.

```js
pull(
  // ... after sourcing and adding settings
  browserify.bundle(),
  vinyl.map('index.js'),
  vinyl.write('out')
)

## License

MIT © [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/pull-browserify.svg?style=flat-square)][package] [![travis](https://img.shields.io/travis/jamen/pull-browserify.svg?style=flat-square)](https://travis-ci.org/jamen/pull-browserify) [![downloads](https://img.shields.io/npm/dt/pull-browserify.svg?style=flat-square)][package] [![license](https://img.shields.io/npm/l/pull-browserify.svg?style=flat-square)][package] [![support me](https://img.shields.io/badge/support%20me-paypal-green.svg?style=flat-square)](https://paypal.me/jamenmarz/5usd) [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)

[package]: https://npmjs.org/package/pull-browserify
