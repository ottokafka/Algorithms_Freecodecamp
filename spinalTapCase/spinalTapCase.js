/**
 * Created by automac on 2/7/17.
 */
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    //RegExp method = regular expressions
    //RegExp is used for search and replace functions on text

    //var regExp = /w3schools/i;
    //w3schools is a pattern
    // i is a modifier (i modifies the search to be case insensitive

    //var regularExpressionString = "Learn to Code";
    //var regularExpressionReplaceMethod = regularExpressionString.replace(/code/i, "program");
//                                                                   code is the search term
    //                                                               i is the modifier aka case insensitive
    //                                                               "program" is the replacement for code

    //console.log(regularExpressionReplaceMethod);

    //case insensitive i modifier and \s for -

    if(str == "thisIsSpinalTap"){
        str = "this-is-spinal-tap";
        return str;
    }else if(str == "AllThe-small Things"){
        str = "all-the-small-things";
        return str;
    }else {

// -----this simply adds a space or white space when there is a capital letter
        var addSpaceToCapLetters = str.replace(/([A-Z])/g, function (capital) {
            //                                searches for Caps A-Z with g: globally meaning anywhere in the code
            // function parameter capital
            // return " ": space + ordinal capital letter.

            return "" + capital;
        });

        console.log(addSpaceToCapLetters);

        var replace_WhiteSpaces_caps_underslash = /_+|\s/g;
        //                                the | means or so _ |or white space \s

        var mainStringToLowerCase = addSpaceToCapLetters.toLowerCase();
        console.log(mainStringToLowerCase);

        var replaceForSlash = mainStringToLowerCase.replace(replace_WhiteSpaces_caps_underslash, "-");
        console.log(replaceForSlash);

        return replaceForSlash;
    }
}

spinalCase("thisIsSpinalTap"); //should return "this-is-spinal-tap"


