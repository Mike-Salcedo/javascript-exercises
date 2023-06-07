const fibonacci = function (number) {
  let fib;
  switch (+number) {
    case 0:
      return +number;
    case 1:
      return +number;
    default:
      if (number <= -1) {
        return "OOPS";
      } else {
        fib = fibonacci(number - 1) + fibonacci(number - 2);
        return parseInt(fib);
      }
  }
};

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
