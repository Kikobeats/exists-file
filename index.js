'use strict'

var fs = require('fs')
var path = require('path')

function getAbsolutePath (filepath) {
  return path.resolve(process.cwd(), filepath)
}

function isString (str) {
  return typeof str === 'string'
}

function noop () {}

function existeFile (filepath, cb) {
  cb = cb || noop
  if (!isString(filepath)) return cb(null, false)

  fs.stat(getAbsolutePath(filepath), function (err, stats) {
    if (!err) return cb(null, true)
    if (err.code === 'ENOENT') return cb(null, false)
    return cb(err, stats)
  })
}

existeFile.sync = function existeFileSync (filepath) {
  if (!isString(filepath)) return false
  try {
    fs.statSync(getAbsolutePath(filepath))
    return true
  } catch (err) {
    if (err.code === 'ENOENT') return false
    throw err
  }
}

module.exports = existeFile
