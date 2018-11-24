'use strict';

const binarySearch = require('../arrays/array_binary_search.js');

describe('Binary Search Tests', () => {
  it('can return a value', () => {
    let value = binarySearch([1,2,3,4,5], 3);
    expect(value).toBeTruthy();
  });
  it('can find midpoint index in an array', () => {
    let value = binarySearch([1,2,3,4,5], 3);
    expect(value).toEqual(2);
  });
  it('returns -1 if value is not in the array', () => {
    let value = binarySearch([1,2,3,4,5], 99);
    expect(value).toEqual(-1);
  });
});