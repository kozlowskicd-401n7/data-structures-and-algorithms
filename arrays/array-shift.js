'use strict';

const arrayShift = (arr, val) => {
  let mid = arr.length / 2;
  for (let i = arr.length-1; i >= mid; i--) {
    arr[i+1] = arr[i];
  }
  arr[mid] = val;
  return arr;
};

module.exports = arrayShift;