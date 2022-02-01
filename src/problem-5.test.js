const { isEven, isOdd } = require('./solutions');

describe('Problem 5 - isEven() and isOdd() functions', function() {
  test('isEven, isOdd work as expected for 0', function() {
    let value = 0;
    let even = isEven(value);
    let odd = isOdd(value);

    expect(even).toBe(true);
    expect(odd).toBe(false);
  });

  test('isEven, isOdd work as expected for 1', function() {
    let value = 1;
    let even = isEven(value);
    let odd = isOdd(value);

    expect(even).toBe(false);
    expect(odd).toBe(true);
  });

  test('isEven, isOdd work as expected for 2', function() {
    let value = 2;
    let even = isEven(value);
    let odd = isOdd(value);

    expect(even).toBe(true);
    expect(odd).toBe(false);
  });

  test('isEven, isOdd work as expected for 3', function() {
    let value = 3;
    let even = isEven(value);
    let odd = isOdd(value);

    expect(even).toBe(false);
    expect(odd).toBe(true);
  });

  test('isEven, isOdd work as expected for a large number', function() {
    let value = 38134991394;
    let even = isEven(value);
    let odd = isOdd(value);

    expect(even).toBe(true);
    expect(odd).toBe(false);
  });
});
