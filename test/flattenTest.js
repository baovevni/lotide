const assert = require('chai').assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("returns empty array for (0, [3, 4], 1, 0)", () => {
    assert.deepStrictEqual(flatten([(0, [3, 4], 1, 0)]), [0]);
  });
  it("returns [0, 'Hello World', 1, 0] for [0, 'Hello World', 1, 0]", () => {
    assert.deepStrictEqual(flatten([0, "Hello World", 1, 0]), [0, "Hello World", 1, 0]);
  });
  it("returns proper array for nested array [0, [3, 4], 1, 0]", () => {
    assert.deepStrictEqual(flatten([0, [3, 4], 1, 0]), [0, 3, 4, 1, 0]);
  });
  it("returns proper array for nested array [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepStrictEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns proper array for nested array with strings and numbers ['John', 'Samuel', ['Travolta', 'Doe'], 5, [6]]", () => {
    const result = flatten(["John", "Samuel", ["Travolta", "Doe"], 5, [6]]);
    assert.deepStrictEqual(result, ["John", "Samuel", "Travolta", "Doe", 5, 6]);
  });
});
