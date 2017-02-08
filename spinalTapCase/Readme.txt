Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    RegExp
    var regularExpressionString = "Learn to Code";
        var regularExpressionReplaceMethod = regularExpressionString.replace(/code/i, "program");
    //                                                                   code is the search term
        //                                                               i is the modifier aka case insensitive
        //                                                               "program" is the replacement for code

    String.prototype.replace()
    var regularExpressionString = "Learn to Code";
        var regularExpressionReplaceMethod = regularExpressionString.replace(/code/i, "program");
    //                                                                   code is the search term
        //                                                               i is the modifier aka case insensitive
        //                                                               "program" is the replacement for code

This Is Spinal Tap


spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".