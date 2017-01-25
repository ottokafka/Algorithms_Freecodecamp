/**
 * Created by auto2 on 12/6/2016.
 */
function truncate (str, num) {

    var stringHolder = "";

    if(num <= 3 && str.length > num){
        stringHolder = str.slice(0, num) + "...";
        console.log(stringHolder);
    }else {
        stringHolder = str.slice(0, num -3) + "...";
        console.log(stringHolder);
    }
}
truncate("This is a truncate", 56)/*
if string is longer than num than return string with ...
 if num is less than or equal to 3 than the ... is added but does not count a a string number

Truncate a string (first argument) if it is longer than the given maximum
string length (second argument). Return the truncated string with a ... ending.

 Note that inserting the three dots to the end will add to the string length.
 However, if the given maximum string length num is less than or equal to 3,
  then the addition of the three dots does not add to the string length in determining the truncated string.
  */
