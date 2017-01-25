/*Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.*/


function repeatStringNumTimes(str, num) {
    // repeat after me
    // repeat string * argument
    //return empty string if num is != 4 positive number
    var newString = "";

    if(num < 0) {
        return newString;
    }

    while(num !== 0) {
        newString += str;
        num--;
    }
    return newString;
}

repeatStringNumTimes("abc", 3);

