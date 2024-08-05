const fibonacci = function(nth) {
    let a = 1;
    let b = 1;
    let result = 1;

    if(nth < 0) return "OOPS";
    if(nth == 0) return 0;
    
    for(i = 2 ; i < nth ; i++){   
        result = a + b;
        b = a;
        a = result;
        console.log(a, b, result);
        } 
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
