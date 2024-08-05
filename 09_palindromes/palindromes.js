const palindromes = function (word) {
    let regexp = /[a-z0-9]/gi;
    oldW = word.toLowerCase();
    revW = '';
    oldWR = oldW.match(regexp);
    let newWR = '';

    oldWR = oldWR.join("");
    newWR = oldWR.toString();
    
    for(i = newWR.length; i >= 0 ; i--){
        revW += newWR.charAt(i);
    }

    if (revW == newWR){
        return true;
    } else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
