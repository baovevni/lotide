const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (typeof object1[key] !== typeof object2[key]) {
      return false;
    }
    
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object' && !Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (!eqArrays(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;