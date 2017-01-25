/**
 * Created by auto2 on 11/28/2016.
 */

function palindromes(str) {

        return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    // relplace(). lowerCase() === replace().lowercase().split('').reverse().join('');
// g flag or /g is global search
    //----------- /[\W_]/g, '';  =  /[^A-Za-z0-9]/g, '';   you can use /[\W_]/g, '';   or  /[^A-Za-z0-9]/g, ''; to remove unwanted characters
    // -------str.replace( /[\W_]/g, '') will remove all non word characters
    // [\W_] removes any non word character
    // ----------- \w is shorthand for  [A-Za-z0-9_] to allow these characters
    // ------------- \W is the opposite of \w
    //----------------- .toLowerCase() converts all letter to lower case
    // ------------------ .split('') splits the string in into individual letters
    // ------------------- .reverse() reverses the individual letters
    // --------------------  . join('') puts the individual letter into one word string
 }
palindromes("your mom");



function palindrome(str) {

  var remove = /[\W_]/g; //things to be removed
var lowerCase = str.toLowerCase().replace(remove, ''); //remove shit
   // console.log(lowerCase);
   // console.log(remove);

    var reverseString = lowerCase.split('').reverse().join('');

    console.log(reverseString);

    if (reverseString == lowerCase){
        console.log(false);
    }else {
        console.log(true);
    }

    return reverseString == lowerCase;

}

palindrome("OTTO");
//note test git
