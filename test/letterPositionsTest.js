const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns 0 for letter 'h' in 'hello'", () => {
    assert.deepStrictEqual(letterPositions("hello").h, [0]);
  });
  it("returns 1 for letter 'e'", () => {
    assert.deepStrictEqual(letterPositions("John Travolta").t, [5, 11]);
  });
  it("returns 2, 3 for letter 'l'", () => {
    assert.deepStrictEqual(letterPositions("hello").l, [2, 3]);
  });
  it("returns undefined for incorrect letter", () => {
    assert.isUndefined(letterPositions("hello").b, [3]);
  });
  it("returns undefined for empty input", () => {
    assert.isUndefined(letterPositions("").a);
  });
});