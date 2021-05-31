const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log("🟢🟢🟢 The Arrays ", arr1, " and ", arr2, " are the same");
  } else {
    console.log("🔴🔴🔴 The Arrays ", arr1, " and ", arr2, " are NOT the same")
  }
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      result.push(source[i]);

    }
  }
  return result;
};


