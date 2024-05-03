// eqArrays function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// assertArraysEqual function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(takeUntil(words, (item => item === "to")), ['ground', 'control']);

const array2 = [0, "Hello World", 1, 0];
assertArraysEqual(takeUntil(array2, (item => typeof (item) === 'string')), [0]);

const array3 = [1, 2, 3, 4, 5];
assertArraysEqual(takeUntil(array3, (num => num > 4)), [1, 2, 3, 4]);
