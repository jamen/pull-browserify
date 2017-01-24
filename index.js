var _browserify = require('browserify')
var pull = require('pull-stream')
var once = pull.once
var map = pull.map
var asyncMap = pull.asyncMap

module.exports = browserify
browserify.source = browserify
browserify.add = add
browserify.require = _require
browserify.bundle = bundle
browserify.external = external
browserify.ignore = ignore
browserify.exclude = exclude
browserify.transform = transform

function browserify (files, opts) {
  return once(_browserify(files, opts))
}

function add (file, opts) {
  return map(function (b) { b.add(file, opts); return b })
}

function _require (file, opts) {
  return map(function (b) { b.require(file, opts); return b })
}

function bundle () {
  return asyncMap(function (b, cb) { b.bundle(cb) })
}

function external (file) {
  return map(function (b) { b.external(file); return b })
}

function ignore (file) {
  return map(function (b) { b.ignore(file); return b })
}

function exclude (file) {
  return map(function (b) { b.exclude(file); return b })
}

function transform (tr, opts) {
  return map(function (b) { b.transform(tr, opts); return b })
}
