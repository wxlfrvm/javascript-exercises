let text = '';
let rText = '';
// console.log(text);

const reverseString = function(text) {
    // console.log(text.length);
    rText ='';
    for(i = 0 ; i <= text.length; i ++){
        rText += text.charAt(text.length - i);
        console.log(rText);
    }
    return rText;
};
console.log(reverseString(text));

// Do not edit below this line
module.exports = reverseString;
