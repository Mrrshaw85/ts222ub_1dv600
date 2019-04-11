const stdGame = require('../src/StandardGame.js')
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
  describe('#checkFinalAnswer2 Check #1: If true is passed as first argument and false as second, it should return false', function () {
    it('Return should be false', function () {
      let testObject = { answer: 'false'}
      let test = hangTheMan.checkFinalAnswer2('true', testObject)
      assert.equal(test, false)
    })
  }),
  describe('#checkFinalAnswer2 Check #2: If false is passed as first argument and true as second, it should return false', function () {
    it('Return should be false.', function () {
      let testObject = { answer: 'true'}
      let test = hangTheMan.checkFinalAnswer2('false', testObject)
      assert.equal(test, false)
    })
  }),
  describe('#checkFinalAnswer2 Check #3: If true is passed as first argument and true as second, it should return true', function () {
    it('Return should be true.', function () {
      let testObject = { answer: 'true'}
      let test = hangTheMan.checkFinalAnswer2('true', testObject)
      console.log(test)
      assert.equal(test, true)
    })
  })
})
