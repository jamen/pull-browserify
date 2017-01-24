var _browserify = require('browserify')
var pull = require('pull-stream')
var once = pull.once
var through = pull.through
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

function browserify (files, opts) { return once(_browserify(files, opts)) }
function add (file, opts) { return through(b => b.add(file, opts)) }
function _require (file, opts) { return through(b => b.require(file, opts)) }
function bundle () { return asyncMap((b, cb) => b.bundle(cb)) }
function external (file) { return through(b => b.external(file)) }
function ignore (file) { return through(b => b.ignore(file)) }
function exclude (file) { return through(b => b.exclude(file)) }
function transform (tr, opts) { return through(b => b.transform(tr, opts)) }
