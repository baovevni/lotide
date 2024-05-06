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
  it("returns length of the original array for 3 values array [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"].length), 3);
  });
  it("returns empty array for 1 value array", () => {
    expect(tail(["Yo-Yo"])).to.be.an( "array" ).that.is.empty;
  });
  it("returns length of the original array for 1 value array", () => {
    assert.strictEqual(tail(["Yo-Yo"].length), 1);
  });
  it("returns empty array for empty array", () => {
    expect(tail([])).to.be.an( "array" ).that.is.empty;
  });
  it("returns length of the original array for empty array", () => {
    assert.strictEqual(tail([].length), 0);
  });
});