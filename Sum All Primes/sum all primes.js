/**
 * Created by auto2 on 12/7/2016.
 */

function sumOfPrimes(num){
    var array = [];

    for(var i = 2; i <= num; i++ ){
        for(var j = 2; j <= i; j++){
            if(i === j){           // If statements only run when i & j are ===
                array.push(i);
            }
            if(i % j === 0){
                break;
            }
        }
    }   //i = 2 because 2 is the first prime number
}
sumOfPrimes(5)