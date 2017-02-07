/**
 * Created by automac on 2/6/17.
 */

function uniteUnique(arr){

    //Array.from looks into the entire array
    var arrayFrom = Array.from(arguments);
    console.log(arr); //[ 1, 3, 2 ] can only see this
    console.log(arrayFrom); //[ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ] can see it all

    //reduce the array and concatenate the array
    var reduceTheArray = arrayFrom.reduce(function(a, b) {
        return a.concat(b);
    });

//
   var unique = Array.from(new Set(reduceTheArray));
    console.log(unique);

    return unique; //final product

}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);














