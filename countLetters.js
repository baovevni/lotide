// assertArraysEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (let letters of sentence) {
    if (letters !== ' ') {
      if (result[letters]) {
        result[letters] += 1;
      } else {
        result[letters] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));


// Test code
const countLettersTest = countLetters("lighthouse in the house");
assertEqual(countLettersTest.l, 1);
assertEqual(countLettersTest.i, 2);
assertEqual(countLettersTest.g, 1);
assertEqual(countLettersTest.h, 4);
assertEqual(countLettersTest.t, 2);
assertEqual(countLettersTest.o, 2);
assertEqual(countLettersTest.u, 2);
assertEqual(countLettersTest.s, 2);
assertEqual(countLettersTest.e, 3);
assertEqual(countLettersTest.n, 1);