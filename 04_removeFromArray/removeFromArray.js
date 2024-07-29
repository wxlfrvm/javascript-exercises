// let arr = [1,2,3,4];
// let arg = 3;
let spliced = [];
let arr = [];
let newerArr = [];

const removeFromArray = function(arr, ...arg) {
    argL = arg.length;
    arrL = arr.length;
    console.log(arrL, argL)
    let newArr = [];
    // console.log("arr length: ",arr.length );
    // console.log("argl: ", argL);
    for( i = 0; i < arrL; i ++){
        //przejdz przez kazdy element arr

        //console.log(`at ${i} in ${arr} is ${arr[arg[i]]}`);
        // console.log("arr i: ",arr[i]); 

        for( j = 0; j < argL; j ++){
            console.log(`i: [  ${i}  ]   arr i: [  ${arr[i]}  ]     arg j: [  ${arg[j]}  ]`);
            //przejdz przez kazdy element argumentow

            if(arr[i] == arg[j]){
                // co == arg[j]){
                // console.log(`arr[i] ${arr[i]} = arg[j] ${arg[j]}`);
                // console.log(i);
                //takie same elementy ^
                newArr[j] = i; 
                console.log("==============================================")
                break; //jakims cudem to dziala
            };
        }

    }
    console.log("pozycje duplikatów: ", newArr);
    

    for(i = 0 ; i < newArr.length ; i++){
        console.log(i, newArr[i]);
        arr.splice(newArr[i],1);
    }

    //^^ petla ktora usuwa z zapisanych pozycji gdzie zgadzały sie cyfry


    return arr;
};


console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7,], 6, 3, 2));


// Do not edit below this line
module.exports = removeFromArray;