const findKeyByValue = function(object, value) {
  for (let names of Object.keys(object)) {
    if (object[names] === value) {
      return names;
    }
  }
};

module.exports = findKeyByValue;