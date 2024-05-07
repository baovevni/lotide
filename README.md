# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @baovevni/lotide`

**Require it:**

`const _ = require('@baovevni/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(actual, expected)`: This function compares two arrays and only console logs an assertion pass or fail statement. There is no return value.
- `assertEqual(actual, expected)`: This function compares two values and only console logs an assertion pass or fail statement. There is no return value.
- `assertObjectsEqual(actual, expected)`: This function compares two objects and only console logs an assertion pass or fail statement. There is no return value.
- `countLetters(sentence)`: This function takes the sentence and returns the count for each letter in the sentence skipping spaces.
- `countOnly(allItems, itemsToCount)`: This function iterates through the array looking for the vlaues from itemsToCount and returns the count of each items from itemsToCount in the array.
- `eqArrays(arr1, arr2)`: This function compares two arrays and returns a true if equal and false if arrays are unequal.
- `eqObjects(object1, object2)`: This function compares two objects and returns a true if equal and false if arrays are unequal.
- `findKey(object, callback)`: This function iterates through the object and returns a key from the callback function where the required key is specified.
- `findKeyByValue(object, value)`: This function iterates through the object and returns a key by vlaue provided in the value argument.
- `flatten(array)`: The function processes the input arrays element by element, flattening nested arrays and appending non-array elements directly to the result array.
- `head(array)`: The function processes the input array returning first element of the array. It doesn't modify the input array. 
- `letterPositions(sentence)`: This function takes the sentence and returns the positions of every letter in the sentence. 
- `map(array, callback)`: This function transforms each element of an array using a callback function and returns a new array containing the transformed elements.
- `middle(array)`: This function takes an array and returns a new array containing the middle value for odd-lengthed arrays and the two middle values for even-lengthed arrays.
- `tail(array)`: This function returns a new array containing all elements of the input array except for the first element, preserving the original array if it is empty or has only one element.
- `takeUntil(array, callback)`: This function iterates through an array until the callback function returns true for an element, returning a new array containing all elements before that point.
- `without(source, itemsToRemove)`: This function removes specified items from a source array, returning a new array containing the remaining elements.