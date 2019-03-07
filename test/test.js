'use strict'

const stdGame = require('../src/StandardGame.js')
const quitGame = require('../src/Quit.js')
const hangTheMan = require('../src/HangTheMan.js')

let assert = require('assert')
describe('StandardGame (UC2) Testing', function () {
  describe('#createUnderscoreArr: Create Empty Array with _ for each char', function () {
    it(`should return ('_','_','_','_','_','_','_','_','_','_')`, function () {
      let testArr = stdGame.createUnderscoreArr('stormcloud')
      assert.deepEqual(testArr, (['_','_','_','_','_','_','_','_','_','_']))
    })
  }),
  describe('#clearGameState: Clear the values and return true ', function () {
    it('should return true ', function () {
      let shouldBeTrue = false
      shouldBeTrue = stdGame.clearGameState() 
      assert.deepEqual(shouldBeTrue, true)
    })
  })
})
describe('Play Hang the Man(UC4) Testing', function () {
  describe('#manGoesFree: console.logs that the man goes free and returns false', function () {
    it('should return false', function () {
      let testVal = hangTheMan.manGoesFree()
      assert.equal(testVal, false)
    })
  }),
  describe('#rndWordFromArr: Returns a random word from array', function () {
    it('should return "fox"', function () {
      let wArr = ['fox']
      let testRndW = hangTheMan.rndWordFromArr(wArr)
      assert.equal(testRndW, 'fox')
    })
  }),
  describe('#checkFinalAnswer: Should return true if the input to the function is the string "true"', function () {
    it('should return true', function () {
      let test = hangTheMan.checkFinalAnswer('true')
      assert.equal(test, true)
    })
  })/*,
  describe('#checkFinalAnswer2: Should return true if the input to the function is the string "true"', function () {
    it('should return true', function () {
      let test = hangTheMan.checkFinalAnswer2('true')
      assert.equal(test, true)
    })
  })*/
})
