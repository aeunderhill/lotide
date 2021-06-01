
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const middle = function(arr) {

  const midArr = arr.length / 2;

  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return arr[Math.floor(arr.length / 2)]
  } else if(arr.length % 2 === 0) {
    return [arr[midArr - 1], arr[midArr]]
}
}

module.export = middle
