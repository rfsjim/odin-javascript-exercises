// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// Round to 1 decimal place
const roundToDecimal = (num) => Math.round(num * 10) / 10;

const convertToCelsius = function(fahrenheit) {
  // x °F ≘ (x − 32) × ⁠5 / 9°C

  return roundToDecimal((fahrenheit - 32) * 5/9);
};

const convertToFahrenheit = function(celsius) {
  // x °C ≘ (x × ⁠9 / 5 + 32) °F

  return roundToDecimal((celsius * 9/5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
