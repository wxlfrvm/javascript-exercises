const convertToCelsius = function(temp) {
  newTemp = (temp - 32) * (5 / 9);
  newTemp = Math.round(newTemp*10) / 10;
  return newTemp;
};

const convertToFahrenheit = function(temp) {
  newTemp = temp * (9 / 5) + 32;
  newTemp = Math.round(newTemp*10) / 10;
  return newTemp;
};



console.log(convertToCelsius(100));
console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
