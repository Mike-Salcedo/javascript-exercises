const reverseString = function (str) {
  const slicedStr = str.split("");
  let output = ``;

  for (let i = slicedStr.length - 1; i >= 0; i--) {
    output += slicedStr[i];
  }

  return output;
};

// Do not edit below this line
module.exports = reverseString;
