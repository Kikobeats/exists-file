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
    it('should throw an error when filename is false', function () {
      try {
        existFile.sync(false)
        should.fail('no error was thrown')
      } catch (err) {
        err.message.should.be.equal('path must be a string')
      }
    })
    it('should throw an error when filename is true', function () {
      try {
        existFile.sync(true)
        should.fail('no error was thrown')
      } catch (err) {
        err.message.should.be.equal('path must be a string')
      }
    })
    it('should throw an error when filename is object', function () {
      try {
        existFile.sync({})
        should.fail('no error was thrown')
      } catch (err) {
        err.message.should.be.equal('path must be a string')
      }
    })
    return it('should throw an error when filename is number', function () {
      try {
        existFile.sync(12)
        should.fail('no error was thrown')
      } catch (err) {
        err.message.should.be.equal('path must be a string')
      }
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
    it('should throw an error when filename is false', function () {
      try {
        existFile(false)
        should.fail('no error was thrown')
      } catch (err) {
        err.message.should.be.equal('path must be a string')
      }
    })
    it('should throw an error when filename is true', function () {
      try {
        existFile(true)
        should.fail('no error was thrown')
      } catch (err) {
        err.message.should.be.equal('path must be a string')
      }
    })
    it('should throw an error when filename is object', function () {
      try {
        existFile({})
        should.fail('no error was thrown')
      } catch (err) {
        err.message.should.be.equal('path must be a string')
      }
    })
    return it('should throw an error when filename is number', function () {
      try {
        existFile(12)
        should.fail('no error was thrown')
      } catch (err) {
        err.message.should.be.equal('path must be a string')
      }
    })
    return it('returns a promise when no callback passed', function (done) {
      existFile('./README.md')
        .then((exists) => {
          exists.should.be.equal(true)
          done()
        })
        .catch(done)
    })
  })
})
