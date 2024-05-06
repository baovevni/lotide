const assert = require('chai').assert;
const expect = require('chai').expect;
const middle = require("../middle");

describe("#tail", () => {
  it("returns empty array when one-value array is sent to the function", () => {
    assert.deepStrictEqual(middle([1]), []);
  });
  it("returns empty array when two-value array is sent to the function", () => {
    assert.deepStrictEqual(middle([1, 2]), []);
  });
  it("returns middle value when three-value (odd) array is sent to the function", () => {
    assert.deepStrictEqual(middle([1, 2, 3]), [2]);
  });
  it("returns two middle values when four-value (even) array is sent to the function", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns middle value when five-value (odd) array is sent to the function", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns two middle values when six-value (even) array is sent to the function", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns middle values when six-value (even) array with sub-array is sent to the function", () => {
    assert.deepStrictEqual(middle([1, 2, [3, 4], 5, 6]), [[3, 4]]);
  });
  it("returns middle value when three-value (odd) array with strings is sent to the function", () => {
    assert.deepStrictEqual(middle(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });
  it("returns two middle values when six-value (even) array with strings is sent to the function", () => {
    assert.deepStrictEqual(middle(["Yo Yo", "Lighthouse", "Labs", "Boo-Boo", "Foo", "Bar"]), ["Labs", "Boo-Boo"]);
  });
});


// const test1 = [1];
// assertArraysEqual(middle(test1), []);// => []
// const test2 = [1, 2];
// assertArraysEqual(middle(test2), []);// => []
// const test3 = [1, 2, 3];
// assertArraysEqual(middle(test3), [2]);// => [2]
// const test4 = [1, 2, 3, 4, 5];
// assertArraysEqual(middle(test4), [3])// => [3]
// const test5 = [1, 2, 3, 4];
// assertArraysEqual(middle(test5), [2, 3])// => [2, 3]
// const test6 = [1, 2, 3, 4, 5, 6];
// assertArraysEqual(middle(test6), [3, 4])// => [3, 4]