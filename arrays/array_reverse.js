'use strict'
const array = [4,6,10,3,11,1,0,3];
const reverseArray = (arr) => {
  const reverse = [];
  for (let i = 0; i < arr.length; i++) {
    reverse[i] = arr[arr.length - (i+1)]
  }
  return reverse
} 
reverseArray(array);