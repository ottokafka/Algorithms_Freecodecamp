function rot13(str) {

    var String2Code2String = [];
    //this will hold the string that gets converted to code than codee that get converted back to a string

    for (var i = 0; i < str.length; i++) {
        //a for loop to iterate through the string

        if (str.charCodeAt(i) - 13 < 65) {
            //if code iteration  -13 < 65

            if ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 90)) {
           //if code iteration is greater/equal than 65 and less/equal to 90

            String2Code2String.push(String.fromCharCode(90 + str.charCodeAt(i) - 65 - 12));
        //push string code convert it to a string

        } else {
            String2Code2String.push(String.fromCharCode(str.charCodeAt(i)));

        }
        } else {
            String2Code2String.push(String.fromCharCode(str.charCodeAt(i) - 13));
        }

    }
    console.log(String2Code2String);
    return String2Code2String.join('');

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
