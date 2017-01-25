/**
 * Created by auto2 on 11/30/2016.
 */
function findLongestWord(string){

    //console.log(string.split(" "));


    var biggestWordCount = 0;
    var stringSplit = string.split(" ");

    for(var i = 0; i < stringSplit.length; i++){
        if(stringSplit[i].length > biggestWordCount){

                biggestWordCount = stringSplit[i].length;

           // console.log(biggest);

        }


    }
    console.log(biggestWordCount);
    return biggestWordCount;
}
findLongestWord("you have to find the longest"); // 7