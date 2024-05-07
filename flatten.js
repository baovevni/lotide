const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    // const innerArray = array[i];
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = flatten;