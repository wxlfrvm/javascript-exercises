let booksR = [];

const getTheTitles = function(input) {
  for(i = 0 ; i < input.length ; i ++){
  console.log(i, input[i].title);
  booksR[i] = input[i].title;
}
  let result = booksR;
  return result;

}

// Do not edit below this line
module.exports = getTheTitles;
