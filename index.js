var _browserify = require('browserify')
var pull = require('pull-stream')
var once = pull.once
var through = pull.through
var asyncMap = pull.asyncMap

module.exports = browserify

function browserify (files, opts) {
  return once(_browserify(files, opts))
}

browserify.source = browserify
browserify.add = (file, opts) => through(b => b.add(file, opts))
browserify.require = (file, opts) => through(b => b.require(file, opts))
browserify.external = (file) => through(b => b.external(file))
browserify.ignore = (file) => through(b => b.ignore(file))
browserify.exclude = (file) => through(b => b.exclude(file))
browserify.transform = (tr, opts) => through(b => b.transform(tr, opts))
browserify.bundle = () => asyncMap((b, cb) => b.bundle(cb))
