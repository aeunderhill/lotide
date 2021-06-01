const findKey = function(object, callback) {
  let objKey = Object.keys(object); 
  for (let i in objKey) {
    if (callback(object[objKey[i]])) {
      return objKey[i];
    }
  }
  return undefined;
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`)
  }
};

module.export = findKey;