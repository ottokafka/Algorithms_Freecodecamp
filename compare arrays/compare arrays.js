/**
 * Created by auto2 on 11/27/2016.
 */
/*Compare two arrays and return a new array with any items only ja
 found in one of the two given arrays, but not both.
 In other words, return the symmetric difference of the two arrays.*/




function diffArray(arr1, arr2) {
    var newArr = [];

    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) { // -1 this just make sure it iterates through all of the index
            newArr.push(arr1[i]);

        }
    }
    for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j])==-1){
            newArr.push(arr2[j]);

        }
    }

    console.log(newArr); //this show the new addition
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

