'use strict';

const arrayShift = require('../arrays/array-shift.js');

describe('arrayShift()', () => {
  it('takes in an array and a value', () => {
    let results;
    try {
      results = arrayShift([1,2,3,4], 5);
    }
    catch(err) {
      results = undefined;
    }
    expect(results).toBeDefined();
  });
  it('returns an array', () => {
    let results = arrayShift([1,2,3,4], 5);
    expect(results).toBeInstanceOf(Array);
  });
  it('inserts the value in middle of array', () => {
    let results = arrayShift([1,2,3,4], 5);
    expect(results.length).toBe(5);
    expect(results[2]).toBe(5);
  });
});