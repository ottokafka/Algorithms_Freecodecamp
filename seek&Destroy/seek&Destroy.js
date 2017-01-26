/**
 * Created by automac on 1/25/17.
 */


function destroyer(arr) {
    // Remove all the values

    var argumentHolder = arguments[0];
    console.log("argument holder: "+argumentHolder); //1,2,3,1,2,3
    console.log("arguments length: "+arguments.length); // 6

    for(var i = 0; i < arguments.length; i++) {

        var argumentHolderIncrementing = arguments[i];
        console.log("incrementing argument: "+argumentHolderIncrementing); // 2, 3

for(var j = 0; j < arguments.length; j++){

    var removeWithIndexOf = argumentHolder.indexOf(argumentHolderIncrementing);
    console.log("remove with Index "+removeWithIndexOf);

    if(removeWithIndexOf >= 0){
        argumentHolder.splice(removeWithIndexOf, 1);
        console.log("the array is now "+argumentHolder);
    }
}

    }
    return argumentHolder;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);