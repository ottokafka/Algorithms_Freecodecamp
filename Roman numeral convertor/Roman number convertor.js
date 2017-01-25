/**
 * Created by auto2 on 11/27/2016.
 */

function convertToRoman(num) {
    var roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var decimal =  [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var convertor = "";

    for(var i = 0; i < decimal.length; i++){
        while(decimal[i] <= num){
            convertor = convertor + roman;
            num = num - decimal;
        }
    }

    return num;
}

convertToRoman(36);
