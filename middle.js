//Actual Function
const middle = function (array) {
  let newArray = [];
  const middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return newArray;
  } else if (isOdd(array)) {
    newArray.push(array[middleIndex]);
  } else {
    newArray.push(array[middleIndex - 1], array[middleIndex]);
  }
  return newArray;
};

function isOdd(array) {
  if (array.length % 2 !== 0) {
    return true;
  }
};

module.exports = middle;