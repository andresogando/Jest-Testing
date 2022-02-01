const { quotation } = require('./solutions');

describe('Problem 1 - quotation() function', function() {
  test('quotation format is correct with statement and author', function() {
    let greet = 'Happy birthday to my best friend in the whole wide world!';
    let author = 'michel';
    let result = quotation(greet, author);
    expect(result).toBe('Happy birthday to my best friend in the whole wide world! "dear michel"');
  });

  test('quotation format correct if missing author', function() {
    let statement = '"I hope all your wishes come true today, my friend....';
    let result = quotation(statement);
    expect(result).toBe(
      '"I hope all your wishes come true today, my friend...."from your best friend jeff'
    );
  });

  test('quotation format correct if author is Anonymous', function() {
    let statement = 'As we celebrate you today, please never change. Happy birthday.';
    let author = 'your Best friend';
    let result = quotation(statement, author);
    expect(result).toBe(
      '"As we celebrate you today, please never change. Happy birthday." --your Best friend'
    );
  });
});
