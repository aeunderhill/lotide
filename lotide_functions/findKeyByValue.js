const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`
  } else if (actual !== expected) {
    return `🔴🔴🔴Assertion Failed: [${actual}] !== [${expected}]`
  }
};


const findKeyByValue = function(object, value) {
  let arrayOfKeys = Object.keys(object);
  for (let i = 0; i < arrayOfKeys.length; i++) {
    if (object[arrayOfKeys[i]] === value) {
      return arrayOfKeys[i];
    }
  }
};



module.export = findKeyByValue
