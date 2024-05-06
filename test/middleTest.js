const assert = require('chai').assert;
const expect = require('chai').expect;
const middle = require("../middle");

describe("#middle", () => {
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