// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

// eqArrays function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let key in arr1) {
    if (Array.isArray(arr1[key]) && Array.isArray(arr2[key])) {
      if (!eqArrays(arr1[key], arr2[key])) {
        return false;
      }
    } else if (arr1[key] !== arr2[key]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([0, 0, 0], [1, 2, 3]), false); // => false
assertEqual(eqArrays([0, 0, 0], [0, 0, 0]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false