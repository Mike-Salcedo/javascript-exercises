const leapYears = function (year) {
  let isLeapYear; // Here I create a variable to hold the value of my checks for leap years.

  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    // IF-ElseIf to check if the year is a leap year here I use the "&&" symbol which will check that everything evaluates to true to run the code.
    isLeapYear = true;
  } else if (year % 4 === 0 && !(year % 100 === 0)) {
    // Here I'm using the !(not) symbol to inverse the following code !(year % 100 === 0) this way it'll convert the "false" value to "true" if a year is not divisible by 100.
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }
  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
