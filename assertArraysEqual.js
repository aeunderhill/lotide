const eqArrays = require('./eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`🟢🟢🟢 The Arrays " ${arr1}, " and " ${arr2} " are the same`);
  } else {
    console.log(`🔴🔴🔴 The Arrays " ${arr1}, " and " ${arr2} " are the same`)
  }
};

module.exports = assertArraysEqual;