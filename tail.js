// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};


// FUNCTION IMPLEMENTATION
const tail = function(array) {
  return array.slice(1);
};

// Test Case: Check 3 values array
const threeWords = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(threeWords.length, 2); // original array should still have 3 elements!

// Test Case: Check 1 value array
const oneWord = tail(["Yo Yo"]);
assertEqual(oneWord.length, 0); // original array should still have 3 elements!

// Test Case: Empty array
const zeroWords = tail([]);
assertEqual(zeroWords.length, 0); // original array should still have 3 elements!