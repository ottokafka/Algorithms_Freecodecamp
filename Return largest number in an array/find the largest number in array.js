/**
 * Created by auto2 on 12/5/2016.
 */
function largeArrayNumber(num){

    var arrayHolder = [];
    var countHolder = 0;
    for(var i = 0; i < num.length; i++){
        for(var j = 0; j < num[i].length; j++){
            if(num[i][j] > countHolder){
                countHolder = num[i][j];
                arrayHolder[i] = countHolder;


            }
        }
    }
    console.log(arrayHolder);
    console.log(countHolder);
}
largeArrayNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);