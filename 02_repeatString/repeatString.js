num = 0;
string = '';

const repeatString = function(string, num) {
    let newString = '';
    if (num < 0){
        return newString = ("ERROR");

    } else {
        for(let i = 1 ; i <= num; i ++){
            newString += string;
        }
        return newString;
    }
};
// console.log(repeatString(string, num));

// Do not edit below this line
module.exports = repeatString;
