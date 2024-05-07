const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {

    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    const longSleeveMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
      sleeveLength: "long",
    };
  it("returns true for the same objects", () => {
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("returns false for different objects", () => {
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  it("returns true for the same objects but with differently placed items inside the object", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  it("returns false for the differently sized objects", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
  it("returns true for the same nested objects", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("returns false for the differently nested objects", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("returns false for the differently sized nested objects", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});