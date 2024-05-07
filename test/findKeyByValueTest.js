const assert = require('chai').assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {

  beforeEach(() => {
    bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
  });
  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns 'undefined' for 'That '70s Show'", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
});