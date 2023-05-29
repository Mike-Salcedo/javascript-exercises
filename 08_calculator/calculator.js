const add = function (numberA, numberB) {
  return numberA + numberB;
};

const subtract = function (numberA, numberB) {
  return numberA - numberB;
};

const sum = function (args) {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function (args) {
  return args.reduce((accumulator, current) => accumulator * current, 1);
};

const power = function (numberA, numberB) {
  return Math.pow(numberA, numberB);
};

const factorial = function (number) {
  let result = 1;

  for (let i = 1; i <= number; i++) result *= i;

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
