/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

 The range will be an array of two numbers that will not necessarily be in numerical order.

 e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 */


function smallestCommons(arr) {

    let sortCompare = arr.sort(function(a,b){return a - b});

    var arr2 = [];

    arr.forEach(function (item, index, array) {

        var i = Math.min(arr[0], arr[1]);

        if (i <= Math.max(arr[0], arr[1])) {
            i++;
            arr2.push(i);
            console.log(arr2);
        }
    });

    //for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
   //     arr2.push(i);
     //  console.log(arr2);
   // }

   //
    //console.log(sortCompare);

    // the goal is to stop both at 12
    // we want check if its a lcm first
    // if not lcm add numbers to each side until lcm is found

    //add the number to iself then check if that number exists in another field



}
smallestCommons([3,1]);

// arr num + itself

/*

*Example

 What is the LCM of 4 and 6?

 Multiples of 4 are:

 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, ...

 and the multiples of 6 are:

 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, ...

 Common multiples of 4 and 6 are simply the numbers that are in both lists:

 12, 24, 36, 48, 60, 72, ....

 So, from this list of the first few common multiples of the numbers 4 and 6,
  their least common multiple is 12.
  */