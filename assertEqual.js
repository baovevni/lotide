// FUNCTION IMPLEMENTATION
const assetEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

//TEST CODE
assetEqual("Lighthouse Labs", "Bootcamp");
assetEqual(1, 1);