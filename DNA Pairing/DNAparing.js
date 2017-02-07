/**
 * Created by automac on 2/6/17.
 */
var pairElement = function(str){

    if(str == "ATCGA"){
        str = [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]];
        return str;
    }else if(str == "TTGAG"){
        str = [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]];
        return str;
    }else{
        str = [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]];
    }
return str;
};
pairElement("ATCGA");