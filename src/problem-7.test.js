const { friendlyDuration } = require('./solutions');

describe('Problem 7 - friendlyDuration() function', function() {
  test('correct result for durations under 10 seconds', function() {
    let duration = 9532;
    // Without ... at the end
    expect(friendlyDuration(duration)).toBe('A few seconds');
    // With ... at the end
    expect(friendlyDuration(duration, true)).toBe('A few seconds...');
  });

  test('correct result for durations under 1 minute', function() {
    let duration = 38123;
    // Without ... at the end
    expect(friendlyDuration(duration)).toBe('Less than a minute');
    // With ... at the end
    expect(friendlyDuration(duration, true)).toBe('Less than a minute...');
  });

  test('correct result for durations under 30 minutes', function() {
    let duration = 1740000; // 29 minutes
    // Without ... at the end
    expect(friendlyDuration(duration)).toBe('Less than half-an-hour');
    // With ... at the end
    expect(friendlyDuration(duration, true)).toBe('Less than half-an-hour...');
  });

  test('correct result for durations under 60 minutes', function() {
    let duration = 3540000; // 59 minutes
    // Without ... at the end
    expect(friendlyDuration(duration)).toBe('Less than an hour');
    // With ... at the end
    expect(friendlyDuration(duration, true)).toBe('Less than an hour...');
  });

  test('correct result for durations 60 minutes or more', function() {
    let duration = 3600000 + 1; // 60+ minutes
    // Without ... at the end
    expect(friendlyDuration(duration)).toBe('More than an hour');
    // With ... at the end
    expect(friendlyDuration(duration, true)).toBe('More than an hour...');
  });
});
