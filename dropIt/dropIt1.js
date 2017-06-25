/**
 * Created by automac on 6/25/17.
 */
/**
 if its true push the number to a new array if false skip it.
 */

function dropElements(arr, functionDrop) {

    // i created two arrays in order to compare there lengths when using if statements I found this the easiest way to campare
// the comparingArray will not hold any value on the newArr will actually used to hold elements
    var newArr = [];
    var comparingArray = [];

    // used a forEach statement and gave it a reference just in case I needed it use that
    // with the forEach loop I am only using the current value parameter and comparing it with the function given below

    var loopIt1 = arr.forEach(function (currentValue, index, array) {

        // the if statement compares using the function functionDrop(n === 1) basically tests for true or false
        // in the if statement I have the function name with currentValue parameter and testing with True &&
        // I compare the two arrays length in order to skip the if statement if not true and if true in the future
        // but not needing to add more items to the array the comparison of array will prevent this.

        if (functionDrop(currentValue) === true && comparingArray.length === newArr.length){

            // using a return in front of push immediately stops the function and push the fist true value
            return newArr.push(currentValue);

            //moves to the else if statement for a comparison looking non equal arrays meaning the first true
            //statement is already added and now we can add the rest of the array

        } else if (comparingArray.length !== newArr.length) {
            newArr.push(currentValue);
            console.log(newArr);
            return newArr;
        }
    });
    //the final return statement with the completed array
    return newArr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
//should return [1, 0, 1]