//eqArrays function
const eqArrays = function(actual, expected) {
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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};


const test1 = "hello".toLowerCase(); // Ensure the string is in lowercase

assertArraysEqual(letterPositions(test1).h, [0]); // For letter 'h'
assertArraysEqual(letterPositions(test1).e, [1]); // For letter 'e'
assertArraysEqual(letterPositions(test1).l, [2, 3]); // For letters 'l'
assertArraysEqual(letterPositions(test1).o, [4]); // For letter 'o'

assertArraysEqual(letterPositions("hello").e, [1]); // => [1]