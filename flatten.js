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

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !=== ${arr2}`);
  }
};

const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    // const innerArray = array[i];
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const array1 = (0, [3, 4], 1, 0);
assertArraysEqual(flatten(array1), []); // => []

const array2 = [0, "Hello World", 1, 0];
assertArraysEqual(flatten(array2), [0, "Hello World", 1, 0]); // => [0, "Hello World", 1, 0]

const array3 = [0, [3, 4], 1, 0];
assertArraysEqual(flatten(array3), [0, 3, 4, 1, 0]); // => [0, 3, 4, 1, 0]

const array4 = [1, 2, [3, 4], 5, [6]];
assertArraysEqual(flatten(array4), [1, 2, 3, 4, 5, 6]); //  => [1, 2, 3, 4, 5, 6]

const array5 = ["John", "Samuel", ["Travolta", "Doe"], 5, [6]];
assertArraysEqual(flatten(array5), ["John", "Samuel", "Travolta", "Doe", 5, 6]); //  => ["John", "Samuel", "Travolta", "Doe", 5, 6]