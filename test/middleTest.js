const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

const test1 = [1];
assertArraysEqual(middle(test1), []);// => []
const test2 = [1, 2];
assertArraysEqual(middle(test2), []);// => []
const test3 = [1, 2, 3];
assertArraysEqual(middle(test3), [2]);// => [2]
const test4 = [1, 2, 3, 4, 5];
assertArraysEqual(middle(test4), [3])// => [3]
const test5 = [1, 2, 3, 4];
assertArraysEqual(middle(test5), [2, 3])// => [2, 3]
const test6 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(test6), [3, 4])// => [3, 4]