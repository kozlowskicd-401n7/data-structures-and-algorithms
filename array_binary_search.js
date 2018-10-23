'use strict';

const binarySearch = (arr, key) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.round((low + high) / 2);  // Get new average of high and low
    if (arr[mid] > key) {
      high = mid - 1;  // If midpoint is greater than the key, lower the high point.
    }
    else if (arr[mid] < key) {
      low = mid + 1  // If midpoint is less than the key, raise the low point.
    }
    else {return mid} // Only runs if midpoint = key.
  }
  return -1;  // Happens when low > high
}

module.exports = binarySearch;