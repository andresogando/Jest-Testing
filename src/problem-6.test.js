const { parity } = require('./solutions');

describe('Problem 6 - parity() function', function() {
  test('parity works for a single, even argument', function() {
    let value = 2;
    let result = parity(value);
    expect(result).toBe('2-even');
  });

  test('parity works for a single, odd argument', function() {
    let value = 3;
    let result = parity(value);
    expect(result).toBe('3-odd');
  });

  test('parity works for a multiple, even arguments', function() {
    let result = parity(2, 4, 6);
    expect(result).toBe('2-even 4-even 6-even');
  });

  test('parity works for a multiple, odd arguments', function() {
    let result = parity(1, 3, 5);
    expect(result).toBe('1-odd 3-odd 5-odd');
  });

  test('parity works for a multiple, odd and even arguments', function() {
    let result = parity(1, 2, 3, 4, 5, 38134991394);
    expect(result).toBe('1-odd 2-even 3-odd 4-even 5-odd 38134991394-even');
  });
});
