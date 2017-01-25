/**
 * Created by auto2 on 11/30/2016.
 */


function factorialize(num) {
    var number = 1;
    for(var i = 0; i < num; i++){
        number = number * (i+1);
        }
    console.log(number);

    return number;
}

factorialize(5);
