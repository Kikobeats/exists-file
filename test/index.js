'use strict'

var existFile = require('..')
var should = require('should')

describe('exists file ::', function () {
  context('sync ::', function () {
    it('when file exists', function () {
      return existFile.sync('./README.md').should.be.equal(true)
    })
    it('file doesnt exist', function () {
      return existFile.sync('./lol').should.be.equal(false)
    })
    it('when filename is false', function () {
      return existFile.sync(false).should.be.equal(false)
    })
    it('when filename is true', function () {
      return existFile.sync(true).should.be.equal(false)
    })
    it('when filename is object', function () {
      return existFile.sync({}).should.be.equal(false)
    })
    return it('when filename is number', function () {
      return existFile.sync(12).should.be.equal(false)
    })
  })
  return context('async ::', function () {
    it('when file exists', function (done) {
      return existFile('./README.md', function (err, exists) {
        exists.should.be.equal(true)
        return done()
      })
    })
    it('when file doesnt exist', function (done) {
      return existFile('./lol', function (err, exists) {
        exists.should.be.equal(false)
        return done()
      })
    })
    it('when filename is false', function (done) {
      return existFile(false, function (err, exists) {
        exists.should.be.equal(false)
        return done()
      })
    })
    it('when filename is true', function (done) {
      return existFile(true, function (err, exists) {
        exists.should.be.equal(false)
        return done()
      })
    })
    it('when filename is object', function (done) {
      return existFile({}, function (err, exists) {
        exists.should.be.equal(false)
        return done()
      })
    })
    return it('when filename is number', function (done) {
      return existFile(19, function (err, exists) {
        exists.should.be.equal(false)
        return done()
      })
    })
  })
})
