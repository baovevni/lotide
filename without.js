//eqArrays function
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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i< source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


const array1 = [1, 2, 3];
assertArraysEqual(without(array1, [1]), [2, 3]); // => [2, 3]

const array2 = ["1", "2", "3"];
assertArraysEqual(without(array2, [1, 2, "3"]), ["1", "2"]); // => [1, 2]


const array3 = [0, 0, 0];
assertArraysEqual(without(array3, [0]), []); // => []

const array4 = ["hello", "world", "lighthouse"];
assertArraysEqual(without(array4, ["lighthouse"]), ["hello", "world"]); // => ["hello", "world"]