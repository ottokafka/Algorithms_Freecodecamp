/**
 * Created by auto2 on 11/30/2016.
 */

function sumAll(arr) {

var arrayOfNumbers = arr;
    console.log(arrayOfNumbers);

    var max = Math.max(...arrayOfNumbers);
    //here I using a spread operator ... where a argument is expected
    //I could use Math.max.apply(null,arrayOfNumber) to accomplish the same thing
    console.log(max);

    var min = Math.min(...arrayOfNumbers);
    console.log(min);

    var factorialize = min;

    for(var i = min; i < max; i++){
        factorialize = factorialize + (i+1);
    }
    console.log(factorialize);

    return factorialize;
}

sumAll([10, 5]); //1+2+3+4 = 10
//This is expecting 10

