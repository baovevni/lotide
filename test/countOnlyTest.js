const assert = require('chai').assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  let firstNames;
  let namesToCheck;
  let result;

  beforeEach(() => {
    firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    namesToCheck = { Jason: true, Karima: true, Fang: true, Agouhanna: false };
    result = countOnly(firstNames, namesToCheck);
  });
  it("returns 1 for 'Jason'", () => {
    assert.strictEqual(result["Jason"], 1);
  });
  it("returns Undefined for 'Karima'", () => {
    assert.isUndefined(result["Karima"]);
  });
  it("returns 2 for 'Fang'", () => {
    assert.strictEqual(result["Fang"], 2);
  });
  it("returns Undefined for 'Agouhanna'", () => {
    assert.isUndefined(result["Agouhanna"]);
  });
});