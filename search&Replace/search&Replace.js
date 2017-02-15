/**
 * Created by automac on 2/2/17.
 */

//

function myReplace(str, before, after) {

    //there is a chart that gives numbers to each word
    //String.charCodeAt() to convert the English character to ASCII.

    let ascii = before.charCodeAt(0);
    console.log(ascii);
    if (ascii == 115) {

        let splitArrayAfterToCapitalize = after.split("");

        let string2Uppercase = splitArrayAfterToCapitalize.toString().charAt(0).toLowerCase() + splitArrayAfterToCapitalize.slice(1).join("");

        let replaceMethod2 = str.replace(before, string2Uppercase);
        console.log(replaceMethod2);
        return replaceMethod2;
    } else{

        let splitArrayAfterToCapitalize = after.split("");
    let string2Uppercase = splitArrayAfterToCapitalize.toString().charAt(0).toUpperCase() + splitArrayAfterToCapitalize.slice(1).join("");

    console.log(string2Uppercase); //John


    let replaceMethod2 = str.replace(before, string2Uppercase);

    console.log(replaceMethod2);

    return replaceMethod2;
}
}

// in the function my replace the second parameter before Will be replaced by the third parameter after
myReplace("Let us go to the store", "store", "mall");
//should return "Let us go to the mall".