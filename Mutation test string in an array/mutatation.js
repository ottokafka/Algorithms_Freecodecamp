/**
 * Created by auto2 on 12/5/2016.
 */
function mutatation(arr){
    var test0 = arr[0].toLowerCase();
    var test1 = arr[1].toLowerCase();

    for(var i = 0; i< test1.length; i++){
        if(test0.indexOf(test1[i]) > 0){
            return false;
        }
    }
    return true;

}
mutatation(["hello", "hell"])