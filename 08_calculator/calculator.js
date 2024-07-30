const add = function(a, b) {
  result = a + b;
  return result;
};

const subtract = function(a, b) {
  result = a - b;
  return result;
};

const sum = function(array) {
  let result = 0;
  console.log(array);

	for(i = 0; i < array.length; i++ ){
    result += array[i];
  };
  return result;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

console.log(add(2,4));
console.log(sum([1,2,3,4]));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
