/**
 * Created by automac on 2/6/17.
 */

function uniteUnique(arr){

    //Array.from looks into the entire array
    // argument is a object argument[0] argument[1]


    var args = arguments;
    console.log(args);

   var unique = Array.from(new Set(args));
    console.log(unique);

    var reduceIt = unique.reduce(function(a, b){

        return a.concat(b);
    });
    console.log(reduceIt);

    let uniqueValues = [...new Set(reduceIt)];
    console.log(uniqueValues);
    return uniqueValues; //final product

}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);














