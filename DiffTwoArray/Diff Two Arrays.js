/**
 * Created by automac on 1/29/17.
 *
 * function oneOfAKind(value, index, self){
    self.indexOf(value) === index;
}
 */

function diffArray(arr1, arr2) {
    var newArr = [];
    var i, j;
    var arr1Length = arr1.length;
    var arr2Length = arr2.length;

    // empty array to hold the new array

    for(i = 0; i < arr1Length; i++){
        var arr2IndexOf = arr2.indexOf(arr1[i]);

        if(arr2IndexOf == -1){
            //console.log(arr2IndexOf); // -1
            newArr.push(arr1[i]);
        }
    }
for(j = 0; j < arr2Length; j++){
    var arr1IndexOf = arr1.indexOf(arr2[j]);

    if(arr1IndexOf == -1){
        //console.log(arr1IndexOf); // -1
        newArr.push(arr2[j]);
    }
}
    console.log(newArr);
    return newArr;
}
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);




