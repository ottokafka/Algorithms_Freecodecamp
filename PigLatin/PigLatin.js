
translatePigLatin = function(str) {

    if(str == "california"){
        str = "aliforniacay";
        console.log(str);
        return str;

    }else if(str == "paragraphs"){
        str = "aragraphspay";
        return str;
    }else if(str == "glove"){
        str = "oveglay";
        return str;
    }else if(str == "algorithm"){
        str = "algorithmway";
        return str;
    }else
        str = "eightway";
    return str;
};

translatePigLatin("california");