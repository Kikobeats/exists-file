'use strict'

var existFile = require('..')
var should = require('should')

describe('exists file', function () {
  describe('sync', function () {
    it('when file exists', function () {
      should(existFile.sync('./README.md')).be.equal(true)
    })

    it('file doesnt exist', function () {
      should(existFile.sync('./lol')).be.equal(false)
    })
  })
  describe('async', function () {
    describe('true', function () {
      it('when file exists', function (done) {
        existFile('./README.md', function (err, exists) {
          should(exists).be.equal(true)
          return done(err)
        })
      })
    })

    describe('false', function () {
      it('when file doesnt exist', function (done) {
        existFile('./lol', function (err, exists) {
          should(exists).be.equal(false)
          return done(err)
        })
      })
    })

    describe('throw error', function () {
      it('filename is false', function () {
        try {
          existFile(false)
          should.fail('no error was thrown')
        } catch (err) {
          should(err.message).be.equal('path must be a string or Buffer')
        }
      })
      it('filename is true', function () {
        try {
          existFile(true)
          should.fail('no error was thrown')
        } catch (err) {
          should(err.message).be.equal('path must be a string or Buffer')
        }
      })
      it('filename is object', function () {
        try {
          existFile({})
          should.fail('no error was thrown')
        } catch (err) {
          should(err.message).be.equal('path must be a string or Buffer')
        }
      })
      it('filename is number', function () {
        try {
          existFile(12)
          should.fail('no error was thrown')
        } catch (err) {
          should(err.message).be.equal('path must be a string or Buffer')
        }
      })
    })

    it('returns a promise when no callback passed', function (done) {
      existFile('./README.md')
        .then((exists) => {
          exists.should.be.equal(true)
          done()
        })
        .catch(done)
    })
  })
})
