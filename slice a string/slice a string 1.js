/**
 * Created by auto2 on 12/2/2016.
 */

function truncateString(str, num) {
    // Clear out that junk in your trunk
    var newString = "";

    if(str.length > num && num <= 3){
        newString = str.slice(0, num) + "...";
        console.log(newString + "if");
        return newString;
    }else if(str.length > num && num > 3){
        newString = str.slice(0, num -3) + "...";
        console.log(newString + "else if");
        return newString;

    }else{
        newString = str;
        console.log(newString + "else");
        return newString;

    }


    return newString;
}

truncateString("A-", 1);
