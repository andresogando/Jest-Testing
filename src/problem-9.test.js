const { findLargest } = require('./solutions');

describe('Problem 9 - findLargest', function() {
  test('should find the largest number in a list', function() {
    let largest = findLargest(1, 2, 3);
    expect(largest).toBe(3);
  });

  test('should find the largest number in a list of 1', function() {
    const largest = findLargest(1);
    expect(largest).toBe(1);
  });

  test('should find the largest number in a long list', function() {
    // https://github.com/gromgit/jstips-xe/blob/master/tips/33.md
    const list = Array.apply(null, { length: 5000 }).map(Function.call, Number);
    const largest = findLargest.apply(null, list);
    expect(largest).toBe(4999);
  });

  test('should work with negative numbers', function() {
    const largest = findLargest(1, 2, 3, -1, -2, -3);
    expect(largest).toBe(3);
  });

  test('should work with strings that are numbers', function() {
    const largest = findLargest('1', '2', '3');
    expect(largest).toBe(3);
  });

  test('should work with decimals', function() {
    const largest = findLargest(0.01, 0.001);
    expect(largest).toBe(0.01);
  });

  test('should throw if a Boolean is included in the list', function() {
    function shouldThrow() {
      findLargest(1, true, 3);
    }
    expect(shouldThrow).toThrow();
  });

  test('should throw if an Object is included in the list', function() {
    function shouldThrow() {
      findLargest(1, console, 3);
    }
    expect(shouldThrow).toThrow();
  });

  test('should throw if a null is included in the list', function() {
    function shouldThrow() {
      findLargest(1, null, 3);
    }
    expect(shouldThrow).toThrow();
  });

  test('should throw if a undefined is included in the list', function() {
    function shouldThrow() {
      findLargest(1, undefined, 3);
    }
    expect(shouldThrow).toThrow();
  });

  test('should return null if the list is empty', function() {
    const largest = findLargest();
    expect(largest).toBe(null);
  });
});
