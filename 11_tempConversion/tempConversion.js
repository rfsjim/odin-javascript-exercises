// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// Round to 1 decimal place
const convertToCelsius = function(fahrenheit) {
  // x °F ≘ (x − 32) × ⁠5 / 9°C

  return Math.round(((fahrenheit - 32) * 5/9) * 10) / 10 ;
};

const convertToFahrenheit = function(celsius) {
  // x °C ≘ (x × ⁠9 / 5 + 32) °F

  return Math.round(((celsius * 9/5) + 32) * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
