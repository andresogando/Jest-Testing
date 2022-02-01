const { maskPassword } = require('./solutions');

  

  test('all characters should be masked if charsToMask is 0', function() {
    let password = 'youAregenius';
    let result = maskPassword(password, 0);
    expect(result).toBe('************');
  });

  test('first 3 characters should be unmasked if requested', function() {
    let password = 'yourname';
    let result = maskPassword(password, 5);
    expect(result).toBe('yourn***');
  });

  test('all characters should be unmasked if requested', function() {
    let password = 'Abc5632ppp';
    let result = maskPassword(password, 10);
    expect(result).toBe(password);
  });

