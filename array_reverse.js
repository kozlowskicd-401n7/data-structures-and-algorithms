'use strict'
const baseArray = [4,6,10,3,11,1,0,3];
const revArray = (arr) => {
  const reverse = [];
  for (let i = 0; i < arr.length; i++) {
    reverse[i] = arr[arr.length - (i+1)]
  }
  return reverse
} 
revArray(baseArray);