
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !=== ${arr2}`);
  }
};

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


const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map((words), (item => item.length)), [6, 7, 2, 5, 3]);

const array2 = [0, "Hello World", 1, 0];
assertArraysEqual(map((array2), (item => typeof (item))), ['number', 'string', 'number', 'number']);

const array3 = [1, 2, 3, 4, 5];
assertArraysEqual(map((array3), (num => num * 2)), [2, 4, 6, 8, 10]);

const people = [
  { name: "Kyle", age: 26 },
  { name: "Jill", age: 35 },
];
assertArraysEqual(map((people), (person => person.name)), ["Kyle", "Jill"]);