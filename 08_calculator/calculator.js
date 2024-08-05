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

const multiply = function(array) {
  let result = 1;
  console.log(array);

	for(i = 0; i < array.length; i++ ){
    result *= array[i];
  };
  return result;
};

const power = function(a, b) {
  result = a;
	for(i = 1 ; i < b ; i++){
    result *= a;
  }
  return result;

};

const factorial = function(a) {
	result = 1;
  for(i = 1 ; i <= a ; i++){
    result *= i;
  }
  return result;
};

// console.log(add(2,4));
// console.log(sum([1,2,3,4]));
// console.log(multiply([1,2,3,4]));
// console.log(power(3,4));
console.log(factorial(12));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
