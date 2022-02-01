const { toCents, toCurrency, currencyTotal } = require('./solutions');

describe('Problem 8 - toCents(), toCurrency(), currencyTotal() functions', function() {
  test('toCents should return expected result for a simple currency string', function() {
    let currency = '1.99';
    let cents = toCents(currency);
    expect(cents).toBe(199);
  });

  test('toCents should return expected result for a larger currency string', function() {
    let currency = '1999.87';
    let cents = toCents(currency);
    expect(cents).toBe(199987);
  });

  test('toCurrency should return expected result for a small number in cents', function() {
    let cents = 199;
    let currency = toCurrency(cents);
    expect(currency).toBe('$1.99');
  });

  test('toCurrency should return expected result for a larger number in cents', function() {
    let cents = 199987;
    let currency = toCurrency(cents);
    expect(currency).toBe('$1999.87');
  });

  test('currencyTotal should work with a single value', function() {
    expect(currencyTotal('1.00')).toBe('$1.00');
  });

  test('currencyTotal should work with a list of values', function() {
    expect(currencyTotal('1.99', '3.00', '4.16')).toBe('$9.15');
  });
});
