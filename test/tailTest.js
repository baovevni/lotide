const assert = require('chai').assert;
const expect = require('chai').expect;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 2 last values [\"Lighthouse\", \"Labs\"] for 3 values array [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepStrictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
  it("returns first element is \"Lighthouse\"", () => {
    const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.deepStrictEqual(result[0], "Lighthouse");
  });
  it("returns second element is \"Labs\"", () => {
    const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.deepStrictEqual(result[1], "Labs");
  });
  it("does not modify the original array", () => {
    const originalArray = ["Yo Yo", "Lighthouse", "Labs"];
    const cloneArray = [...originalArray]; // Create a clone of the original array
    tail(originalArray);  // Call tail, but don't need to store the result since we're testing for no mutation
    assert.deepStrictEqual(originalArray, cloneArray); // This compares that the original array remains unchanged
  });
  it("returns empty array for 1 value array", () => {
    assert.deepStrictEqual(tail(["Yo-Yo"]), []);
  });
  it("returns length of the original array for 1 value array", () => {
    const originalArray = ["Yo Yo"];
    const cloneArray = [...originalArray]; // Create a clone of the original array
    tail(originalArray);  // Call tail, but don't need to store the result since we're testing for no mutation
    assert.deepStrictEqual(originalArray, cloneArray); // This compares that the original array remains unchanged
  });
  it("returns empty array for empty array", () => {
    assert.deepStrictEqual(tail([]), []);
  });
  it("returns length of the original array for empty array", () => {
    const originalArray = [];
    const cloneArray = [...originalArray]; // Create a clone of the original array
    tail(originalArray);  // Call tail, but don't need to store the result since we're testing for no mutation
    assert.deepStrictEqual(originalArray, cloneArray); // This compares that the original array remains unchanged
  });
});