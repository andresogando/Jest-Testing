
const { greeting } = require('./solutions');

describe('Problem 0 - greeting() function', function() {
  
  test('greeting should be a function', function() {
    // This is like saying: if(typeof greeting === 'function')
    expect(typeof greeting).toBe('function');
  });

  
  test('greeting should say "Hi!!!! --Name!', function() {
    let result = greeting('you are an Expert');
    expect(result).toBe('Hi!!!! --you are an Expert!');
  });

 
});
