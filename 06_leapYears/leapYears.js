const leapYears = function(year) {
    function divByFour(year){
        if( year % 4 == 0 && year % 100 != 0 ){
            return true;
        } else {
            return false;
        }
    }
    
    function divByFourHundred(year){ 
        if( year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    }

    if(divByFour(year) || divByFourHundred(year)){
        isLeap = true;
    } else {
        isLeap = false;
    }

    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
