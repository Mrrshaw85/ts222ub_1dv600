let assert = require('assert')
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.strictEqual(-1, [1, 2, 3].indexOf(4))
    })
  })
})

describe('Math', function () {
  describe('#Is 3*3 = 9?', function () {
    it('should return 9', function () {
      assert.strictEqual(9, 3 * 3)
    })
  })
  describe('#Is (3-4)*8 = -8?', function () {
    it('should return -8', function () {
      assert.strictEqual(-8, (3 - 4) * 8)
    })
  })
})

describe('Correct Guess', function () {
  
})
