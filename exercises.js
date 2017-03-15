//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var difference = num - 5;
  return difference;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  return (str1.length === str2.length) ? true : false;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  return (x === y) ? true : false;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  return (num < 90) ? true : false;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  return (num > 50) ? true : false;
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var difference = x - y;
  return difference;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var quotient = x / y;
  return quotient;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var product = x * y;
  return product;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  return (num % 2 === 0) ? true : false;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  return (num % 2 != 0) ? true : false;
}

function square(num) {
  //square num and return the new value
  //code here
  var square = Math.pow(num, 2);
  return square;
}

function cube(num) {
  //cube num and return the new value
  //code here
  var cube = Math.pow(num, 3);
  return cube;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  var powered = Math.pow(num, exponent);
  return powered;
}

function roundNumber(num) {
  //round num and return it
  //code here
  var rounded = Math.round(num);
  return rounded;
}

function roundUp(num) {
  //round num up and return it
  //code here
  var roundedUp = Math.ceil(num);
  return roundedUp;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var exclamation = str + '!';
  return exclamation;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var full_name = firstName + ' ' + lastName;
  return full_name;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var rectangleArea = length * width;
  return rectangleArea;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var triangleArea = (base * height) / 2;
  return triangleArea;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var area = Math.PI * Math.pow(radius, 2);
  return Math.round(area);
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  var volume = length * width * height;
  return volume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
