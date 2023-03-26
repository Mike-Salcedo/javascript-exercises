const removeFromArray = function (providedArray, ...manyArgs) {
  const arr = Array.from(providedArray); // Array.from() converts the argument named "providedArray" into an Array and stores it inside the arr variable.
  const newArray = arr.filter(x => !manyArgs.includes(x));
  return newArray;
};



// Do not edit below this line
module.exports = removeFromArray;
