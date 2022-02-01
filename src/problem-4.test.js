const { convertMetresTo } = require('./solutions');

describe('Problem 4 - convertMetresTo() function', function() {
  test('converting to mm works', function() {
    let distance = 1;
    let unit = 'mm';
    let result = convertMetresTo(distance, unit);
    expect(result).toBe(1000);
  });

  test('converting to cm works', function() {
    let distance = 1;
    let unit = 'cm';
    let result = convertMetresTo(distance, unit);
    expect(result).toBe(100);
  });

  test('converting to km works', function() {
    let distance = 1000;
    let unit = 'km';
    let result = convertMetresTo(distance, unit);
    expect(result).toBe(1);
  });

  test('case should not matter for mm units', function() {
    expect(convertMetresTo(1, 'MM')).toBe(1000);
    expect(convertMetresTo(1, 'Mm')).toBe(1000);
    expect(convertMetresTo(1, 'mM')).toBe(1000);
  });

  test('case should not matter for cm units', function() {
    expect(convertMetresTo(1, 'CM')).toBe(100);
    expect(convertMetresTo(1, 'Cm')).toBe(100);
    expect(convertMetresTo(1, 'cM')).toBe(100);
  });

  test('case should not matter for km units', function() {
    expect(convertMetresTo(1000, 'KM')).toBe(1);
    expect(convertMetresTo(1000, 'Km')).toBe(1);
    expect(convertMetresTo(1000, 'kM')).toBe(1);
  });

  test('converting to unknown unit throws', function() {
    function shouldThrow() {
      // nm is an invalid unit, and should throw
      convertMetresTo(100, 'nm');
    }

    expect(shouldThrow).toThrow();
  });
});
