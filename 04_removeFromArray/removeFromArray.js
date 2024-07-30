const removeFromArray = function(arr, ...arg) {
    arrL = arr.length;
    argL = arg.length;
    let arrDupPos = [];
    let k = 0; // for iterating position in array of duplicates positions
    for(i = 0 ; i < arrL ; i ++){
        for(j = 0 ; j < argL ; j++){
            if(arr[i] === arg[j]){
                arrDupPos[k] = (i); //log positions of duplicates
                k++;
            }
        }
    }
    for( i = (arrL-1); i >= 0; i--){ 
        for(let deletos in arrDupPos){
            if(i == arrDupPos[deletos]){ 
                arr.splice(i, 1); 
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;