const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test Case: Check 3 values array
const threeWords = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(threeWords.length, 2); // original array should still have 3 elements!

// Test Case: Check 1 value array
const oneWord = tail(["Yo Yo"]);
assertEqual(oneWord.length, 0); // original array should still have 3 elements!

// Test Case: Empty array
const zeroWords = tail([]);
assertEqual(zeroWords.length, 0); // original array should still have 3 elements!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"