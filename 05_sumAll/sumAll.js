const sumAll = function (firstVal, secondVal) {
  let smallerValue;
  let largerValue;
  let numsInBetweenArgs = [];

  if (firstVal <= secondVal) {
    smallerValue = firstVal;
    largerValue = secondVal;
  } else {
    smallerValue = secondVal;
    largerValue = firstVal;
  }

  for (let i = smallerValue; i <= largerValue; i++) {
    numsInBetweenArgs.push(i);
  }

  const sumOfArgs = numsInBetweenArgs.reduce((a, b) => a + b, 0);

  if (smallerValue < 0 || largerValue < 0) {
    return "ERROR";
  } else if (
    typeof smallerValue !== "number" ||
    typeof largerValue !== "number"
  ) {
    return "ERROR";
  } else {
    return sumOfArgs;
  }
};



// Do not edit below this line
module.exports = sumAll;
