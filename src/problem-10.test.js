const { prepareQueryString } = require('./solutions');

describe('Problem 10 - prepareQueryString() function', function() {
  test('builds a query string from product name and quantity', function() {
    const qs = prepareQueryString('shirt', 6);
    expect(qs).toBe('?p=shirt&q=6');
  });

  test('builds a query string from product name, quantity, and gift', function() {
    // Explicit true
    const qs1 = prepareQueryString('shirt', 6, true);
    expect(qs1).toBe('?p=shirt&q=6&gift');
    // Explicit false
    const qs2 = prepareQueryString('shirt', 6, false);
    expect(qs2).toBe('?p=shirt&q=6');
  });

  test('properly encodes non-URL characters in query string', function() {
    const qs = prepareQueryString('Shirt: Cool & Red!', 2);
    expect(qs).toBe('?p=Shirt%3A%20Cool%20%26%20Red!&q=2');
  });

  test('should assume 1 if quantity is 0', function() {
    const qs = prepareQueryString('shirt');
    expect(qs).toBe('?p=shirt&q=1');
  });
});