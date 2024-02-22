// test suite for factorial function including edge case i.e. 0!

const assert = require("assert");
const Calculate =  require('./index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('takes in 5 and returns 120', () => {
      // Setup
      const inputNum = 5;
      const expected = 120;

      // Exercise
      const result = Calculate.factorial(inputNum);

      // Verify
      assert.equal(result, expected);
    });

    it('takes in 8 and returns 40320', () => {
      // Setup 
      const inputNum = 8;
      const expected = 40320;

      // Exercise
      const result = Calculate.factorial(inputNum);

      // Verify
      assert.strictEqual(result, expected);
    });

    it('takes in 0 and returns 1', () => {
      // Setup 
      const inputNum = 0;
      const expected = 1;

      // Exercise
      const result = Calculate.factorial(inputNum);

      // Verify
      assert.strictEqual(result, expected);
    })
  });
});
