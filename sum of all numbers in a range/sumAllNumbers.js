/**
 * Created by auto2 on 11/30/2016.
 */
function sumAllNumbers(arr){
    var smallest = 0;
    var biggest = 1;

    if (arr[0] < arr[1]){
        smallest = arr[0];
        biggest = arr[1];
    }else{
        smallest = arr[1];
        biggest = arr[0];
    }
    return sumRange(smallest, biggest);
}
function sumRange(from, to){
    var result = 0;

    for(var i = from; i <= to; i++){
        result = result + i;
    }
    return result;
}
sumAllNumbers([2,4])