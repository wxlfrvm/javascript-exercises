const sumAll = function(a, b ) {
    function checkIfInt(a){
        let x = 0;
        x = a * 10;
        if (x%10 != 0){
          return false;
        } else {
          return true;
        }
      }
    let sum = 0;
    if ( a < 0 || b < 0 || (typeof a != "number") || (typeof b != "number") || checkIfInt(b) == false || checkIfInt(a) == false){
        sum = "ERROR";
    } else if (a > b){
        for(i = b ; i <= a ; i ++){
            sum += i;
        }
    } else if ( b > a) {
        for(i = a ; i <= b ; i ++){
            sum += i;
        }
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
