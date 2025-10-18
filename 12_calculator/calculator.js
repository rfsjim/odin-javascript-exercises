const add = function(a, b) {
  return a + b;
};

const subtract = function(a , b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, number) => total + number, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, number) => product * number, 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
  if (number < 0 ) return 'Error'; 
  if (number === 0 ) return 1;

  let result = 1;
  for (let i = number; i > 0; i--)
  {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
