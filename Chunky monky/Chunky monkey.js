
/**
 * Created by auto2 on 12/3/2016.
 * Write a function that splits an array (first argument) into groups the length of size
 * (second argument) and returns them as a two-dimensional array.
 Remember to use Read-Search-Ask if you get stuck. Write your own code.
 Here are some helpful links:
 Array.prototype.push()
 Array.prototype.slice()
 */


function chunkArrayInGroups(arr, size) {
    // Break it up.
    var tempArray = [];
    var resultArray = [];
        for (var a in arr) {
           if (a % size !== size - 1)
               tempArray.push(arr[a]);
           else {
               tempArray.push(arr[a]);
               resultArray.push(tempArray);
               tempArray = [];
        }
    }
    if (tempArray.length !== 0)
        resultArray.push(tempArray);
    return resultArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);




/*
* chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].*/