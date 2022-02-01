const { countDownSequence } = require('./solutions');

describe('Problem 3 - countDownSequence() function', function() {
  test('proper count down sequence from 6', function() {
    let start = 6;
    let result = countDownSequence(start);
    expect(result).toBe('654321');
  });

  test('proper count down sequence from 1', function() {
    let start = 2;
    let result = countDownSequence(start);
    expect(result).toBe('2');
  });

  test('starting at 0 should throw', function() {
    function shouldThrow() {
      // Using 0 is invalid, this should throw
      countDownSequence(0);
    }

    expect(shouldThrow).toThrow();
  });

  test('starting at a negative number should throw', function() {
    function shouldThrow() {
      // Using -100 is invalid, this should throw
      countDownSequence(-100);
    }

    expect(shouldThrow).toThrow();
  });

  test('starting at a number greater than 10 should throw', function() {
    function shouldThrow() {
      // Using 11 is invalid, this should throw
      countDownSequence(11);
    }

    expect(shouldThrow).toThrow();
  });
});
