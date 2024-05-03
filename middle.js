//eqArrays function
const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

// assertArraysEqual function
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

//Actual Function
const middle = function (array) {
  let newArray = [];
  const middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return newArray;
  } else if (isOdd(array)) {
    newArray.push(array[middleIndex]);
  } else {
    newArray.push(array[middleIndex - 1], array[middleIndex]);
  }
  return newArray;
};

function isOdd(array) {
  if (array.length % 2 !== 0) {
    return true;
  }
};




//Test code:

const test1 = [1];
assertArraysEqual(middle(test1), []);// => []
const test2 = [1, 2];
assertArraysEqual(middle(test2), []);// => []
const test3 = [1, 2, 3];
assertArraysEqual(middle(test3), [2]);// => [2]
const test4 = [1, 2, 3, 4, 5];
assertArraysEqual(middle(test4), [3])// => [3]
const test5 = [1, 2, 3, 4];
assertArraysEqual(middle(test5), [2, 3])// => [2, 3]
const test6 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(test6), [3, 4])// => [3, 4]