'use strict'

var fs = require('fs')
var promise = require('cb2promise')

function isString (str) {
  return typeof str === 'string'
}

function existeFile (filepath, cb) {
  if (!cb) return promise(existeFile, filepath)
  if (!isString(filepath)) return cb(null, false)

  fs.stat(filepath, function (err, stats) {
    if (!err) return cb(null, true)
    if (err.code === 'ENOENT') return cb(null, false)
    return cb(err, stats)
  })
}

existeFile.sync = function existeFileSync (filepath) {
  if (!isString(filepath)) return false
  try {
    fs.statSync(filepath)
    return true
  } catch (err) {
    if (err.code === 'ENOENT') return false
    throw err
  }
}

module.exports = existeFile
