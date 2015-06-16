existFile = require '..'
should    = require 'should'

describe 'exists file ::', ->

  context 'sync ::', ->
    it 'when file exists', ->
      existFile('./README.md').should.be.equal true

    it 'file doesnt exist', ->
      existFile('./lol').should.be.equal false

  context 'async ::', ->
    it 'when file exists', (done) ->
      existFile './README.md', (err, exists) ->
        exists.should.be.equal true
        done()

    it 'when file doesnt exist', ->
      existFile './lol', (err, exists) ->
        exists.should.be.equal false
        done()
