function fearNotLetter(str) {

    for(var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        console.log(charCode); //97, 98, 99, 101
        if (charCode !== str.charCodeAt(0) + i) {
            // if not 97, 98. 99, 101 + 1
            console.log(String.fromCharCode(charCode - 1));
            return String.fromCharCode(charCode - 1);

        }
    }
    return undefined;
}
fearNotLetter("abce");