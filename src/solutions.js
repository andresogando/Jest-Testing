/**
 * WEB222 – Assignment 01
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Andres
 *      Student ID: 102525219
 *      Date: 29/01/2022
 *
 * Please see all unit tests in the files problem-1.test.js, problem-2.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive into all the problems
 * below, let's spend a minute helping you learn how to read this code, and how
 * to understand the tests that go with it.
 *
 * In addition to this file, please also open the src/problem-0.test.js file.
 * Start by reading the comment at the top of that file, then come back here and
 * continue.
 *
 * After you finish reading src/problem-0.test.js, it's time to try running
 * the tests.  To run the tests, go to your terminal and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as src/ and package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any code below.
 *
 * You can also run tests for only this problem instead of everything.  To do that:
 *
 *   npm test problem-0
 *
 * This will look for tests that are part of the problem-0.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one failed:
 *
 * ✕ greeting should say "Hi!!!! -you are an Expert!!" (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should say "Hi!!! --Name!"
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hi!!!! --you are an Expert!!"
 *   Received: "Hi!!! --you are an Expert!"
 *
 *     63 |   test('greeting should say "Hi!!!! --Name!"', function() {
 *     64 |     let result = greeting('you are an Expert');
 *   > 65 |     expect(result).toBe('Hi!!!! --you are an Expert!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the test 'greeting should say "Hi!!!-- Name!"' is failing.
 * It's failing on line 65 of src/problem-0.test.js.  In particular, it's failing
 * because it expected to get the String "Hi!!!! --you are an Expert!" but instead
 * it actually received the String "Hi!!! --you are an Expert!".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final ! character.  Try adding it below, save this file, and re-run the
 * tests again:
 *
 * npm test problem-0
 * PASS  src/problem-0.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should say "Hi!!!! -- Name!"
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment, and also read the tests
 * to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {String} name - the name to greet in the message
 *
 * These are specially formatted comments that define parameters to functions,
 * and tell use the type {String} or {Number}, and also the parameter's name.
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

function greeting(name) {
  return `Hi!!!! --${name}!`;
}

/*******************************************************************************
 * Problem 1: format a statement by an author as a quotation.
 *
 * For Example,michel  is quoted as saying Happy birthday to my best friend in the whole wide world!
 * We could call our function using this information:
 *
 * quotation('Happy birthday to my best friend in the whole wide world!', 'Michel')
 *
 * And we'd expect to get back the following string:
 *
 * Happy birthday to my best friend in the whole wide world!  "dear michel"
 *
 * That is, the statement , then a space,
 * then the author's name is enclosed in quotations.
 *
 * @param {String} statement - a sentence said by the author
 * @param {String} author -Michel
 ******************************************************************************/
//Happy birthday to my best friend in the whole wide world! "dear michel"
function quotation(statement, author) {
  const createAuthor = author != undefined ? ' "dear michel"' : '"from your best friend jeff';
  const createSentence = statement + createAuthor;
  const defaultSentence = author === 'your Best friend' ? '"' + statement + '" --' + author : false;
  return defaultSentence ? defaultSentence : createSentence;
}

/*******************************************************************************
 * Problem 2: mask the characters of a password.
 *
 * Sometimes we want to show a password, but replace some or all of the
 * letters with a character like *.  This is called masking, and allows us to
 * hide information, while still displaying something.
 *
 * Write a function maskPassword() that takes two arguments: a password to mask,
 * and a number of characters to show at the start:
 *
 * maskPassword('yourname', 5)
 *
 * would return the following string:
 *
 * "yourn***"
 *
 * Whereas maskPassword('yourname') or maskPassword('yourname', 0)
 * would both return:
 *
 * "********"
 *
 * @param {String} password - a password to be masked.
 * @param {Number} charsToShow - (optional) the number of characters to reveal.
 ******************************************************************************/
//let password = '1234567890__';
// let result = maskPassword(password, 0);
// expect(result).toBe('************');
function maskPassword(password, charsToShow = 0) {
  const result = charsToShow === 0 ? password.
}

/*******************************************************************************
 * Problem 3: create count-down number sequence strings
 *
 * A count-down sequence is a String made up of a descending list of numbers.
 * For example, the count-down sequence for the number 6 would be:
 *
 * "654321"
 *
 * Write the countDownSequence function below, allowing any number between
 * 1 and 10 to be accepted.  Otherwise, throw an error (see
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
 *
 * If we called countDownSequence(2) we'd expect to get:
 *
 * "21"
 *
 * If we called countDownSequence(55) we'd expect to have an error thrown
 *
 * Error: only start values between 1 and 10 are valid
 *
 * @param {Number} start - the number to start counting down from (must be 10 or smaller).
 ******************************************************************************/

function countDownSequence(start) {}

/*******************************************************************************
 * Problem 4: convert distances in metres to other metric units
 *
 * For example, given 10m, convert to cm:
 *
 * convert(10, 'cm')
 *
 * This should return the Number 1000.  If the second unit isn't specified, assume
 * mm:
 *
 * convert(89)
 *
 * Should return 89000
 *
 * Your function should accept both UPPERCASE and lowercase units.
 * All of the following are valid, and should return the same thing:
 *
 * convert(10, 'cm')
 * convert(10, 'CM')
 * convert(10, 'Cm')
 * convert(10, 'cM')
 *
 * You should support converting into all of the following units:
 *
 * - millimetre (mm)
 * - centimetre (cm)
 * - kilometre (km)
 *
 * If a unit other than one of these 3 is passed to your function, throw an exception.
 *
 * @param {Number} distance - the number of units to be converted
 * @param {String} fromUnit - the initial unit of the distance (e.g., 'mm')
 * @param {String} toUnit - (optional) the unit of distance to convert to (e.g., 'km')
 ******************************************************************************/

function convertMetresTo(distance, unit) {
  // Your code here...
}

/*******************************************************************************
 * Problem 5: determine if numbers are even or odd
 *
 * Given a whole number, determine if it is even or odd:
 *
 * isEven(2) should return true
 * isOdd(2) should return false
 *
 * Because a number can't be both even and odd, you are asked to write the
 * isEven() function normally, but your isOdd() function can only call
 * your isEven() function to determine the result.
 *
 * @param {Number} value - the number to check as being even
 ******************************************************************************/
function isEven(value) {
  // Your code here...
}

function isOdd(value) {
  // Implement this by calling your isEven() function
}

/*******************************************************************************
 * Problem 6: check parity of a list of numbers.
 *
 * A function takes any number of Number arguments, and returns a String
 * that shows each number, as well as the word "odd" or "even", depending on
 * its parity:
 *
 * parity(1, 2, 3)
 *
 * Should return:
 *
 * "1-odd 2-even 3-odd"
 *
 * NOTE: each term is separated by a space, but there is no trailing space.
 *
 * Use one or both of the isEven(), isOdd() functions above to implement your
 * solution. You will also need to use the arguments keyword to access all
 * the values passed to your function.  See:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 ******************************************************************************/

function parity() {
  // Your code here...
}

/*******************************************************************************
 * Problem 7: convert a duration in ms to a human-readable string
 *
 * Often software needs to perform some action that takes time, and we need
 * to give the user some indication of how much longer it will take.  Computers
 * often measure time in milliseconds (ms), but this isn't useful to a user, who
 * thinks in seconds, minutes, and hours.
 *
 * Given a duration in ms, returns a more friendly string:
 *
 * friendlyDuration(2000) should return 'A few seconds'
 *
 * Here are the ranges and messages you should use:
 *
 * - Less than 10 seconds: 'A few seconds'
 * - Less than 1 minute: 'Less than a minute'
 * - 1 minute to 29 minutes: 'Less than half-an-hour'
 * - 30 minutes to 1 hour: 'Less than an hour'
 * - 60 minutes or more: 'More than an hour'
 *
 * When the function is called, the second argument indicates whether or not to
 * include ellipses (...) at the end of the string:
 *
 * friendlyDuration(9352) should return 'A few seconds'
 * friendlyDuration(9352, true) should return 'A few seconds...'
 *
 * @param {Number} duration - the duration in ms
 * @param {Boolean} includeEllipses - whether to add ... to the end of the result
 ******************************************************************************/

function friendlyDuration(duration, includeEllipses) {
  // Your code here...
}

/*******************************************************************************
 * Problem 8: convert a currency string to a Number in cents
 *
 * Users like to work in dollars and cents (e.g., 1.99), while doing math
 * with currency works best in cents (i.e., whole numbers).
 *
 * Given a currency string, return the number of cents:
 *
 * toCents('1.99') should return the Number 199
 *
 * Next, write a second function that takes a value in cents, and returns
 * it formatted as a currency string, formatted to 2 decimal points (hint:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
 *
 * toCurrency(915) should return '$9.15'
 *
 * Finally, use the previous two functions to write a third function that
 * uses them to create totals from a list of currency strings:
 *
 * currencyTotal('1.99', '3.00', '4.16') should return '$9.15'
 *
 * @param {String} dollars - the dollars and cents as a currency string
 ******************************************************************************/

function toCents(dollars) {
  // Your code here...
}

function toCurrency(cents) {
  // Your code here...
}

function currencyTotal() {
  // Your code here...
}

/*******************************************************************************
 * Problem 9 - find the largest number in the list of arguments
 *
 * Allow any number of arguments to be passed to the function.  Allow both
 * String and Number arguments to be passed, but throw an error if any other
 * type is passed to the function (e.g., Boolean, Date, etc.). If the list
 * is empty (nothing passed to the function), return null.  Otherwise, return
 * the largest value that was passed to the function as an argument:
 *
 * findLargest(1, 2, '3', '4', 5) should return 5
 * findLargest('5') should also return 5
 * findLargest(5, 3, 2, 1) should also return 5
 ******************************************************************************/

function findLargest() {
  // Your code here...
}

/*******************************************************************************
 * Problem 10 - make name=value pairs ready for inclusion on a URL's query string
 *
 * A URL can contain optional name=value pairs at the end. See:
 * https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * Given a product name (String), quantity (Number), and whether
 * or not this is a gift (Boolean), build and return a query string
 * like this:
 *
 * buildQueryString('shirt', 6);
 *
 * ?p=shirt&q=6
 *
 * Make sure quantity is at least 1 in all cases.  If 0 or a negative number
 * is passed into the function, use 1 instead.
 *
 * If it's a gift, you would do buildQueryString('shirt', 6, true);
 *
 * ?p=shirt&q=6&gift
 *
 * Make sure you properly encode any URL components, since URLs can't
 * contain spaces or certain other characters.  Hint use encodeURIComponent on
 * the produceName:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {String} productName - the product's name, which could include invalid URL characters
 * @param {Number} quantity - (optional) the quantity, which might be missing (assume 1 if so)
 * @param {Boolean} isGift - (optional) whether or not this is a gift
 ******************************************************************************/

function prepareQueryString(productName, quantity, isGift) {
  // Your code here...
}

// These lines expose your functions to the unit tests, you can ignore them.
exports.greeting = greeting;
exports.quotation = quotation;
exports.maskPassword = maskPassword;
exports.countDownSequence = countDownSequence;
exports.convertMetresTo = convertMetresTo;
exports.isEven = isEven;
exports.isOdd = isOdd;
exports.parity = parity;
exports.friendlyDuration = friendlyDuration;
exports.toCents = toCents;
exports.currencyTotal = currencyTotal;
exports.toCurrency = toCurrency;
exports.findLargest = findLargest;
exports.prepareQueryString = prepareQueryString;
