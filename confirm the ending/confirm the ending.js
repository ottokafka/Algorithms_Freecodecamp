/**
 * Created by auto2 on 11/29/2016.
 */
function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
    //substr returns a string in a specified location
    // negative target.length gets the first letter through the entire length of the word
    // length always goes through the entire length
}
confirmEnding("hey fuck you", "Na fuck that");

/*Code Explanation:

 The substr() method returns the characters in a string beginning at the specified location
 through the optional specified number of characters.
  substr operates through the end of the string if the second optional parameter is not specified.
  substr() calculates the index of first matching character from the string's end if the specified location is negative.
 Using the - operator in front of target.length makes it negative.

 We use the method substr() with the negative value of target's length to extract the ending
  segment of str of the same size as target, compare it to target, and then return the value
  of this boolean expression.*/

/*My Code Explanation:

 We use the subtring() with the negative value of the lengths of target.
 We could use -1 to get the last element but if the target is actually
 longer than one letter then the program will provide the wrong information.
 The we return true or false as needed.*/