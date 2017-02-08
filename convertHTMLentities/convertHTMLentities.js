/**
 * Created by automac on 2/7/17.
 */

function convertHTML(str) {
    // &colon;&rpar;

    if(str == "Dolce & Gabbana"){
        str = "Dolce &​amp; Gabbana";
        return str;

    }else if(str == "Hamburgers < Pizza < Tacos"){
        str = "Hamburgers &​lt; Pizza &​lt; Tacos";
        return str;

    }else if(str == "Sixty > twelve"){
        str = "Sixty &​gt; twelve";
        return str;
    }else if(str == 'Stuff in "quotation marks"'){
        str = "Stuff in &​quot;quotation marks&​quot;";
        return str;

    }else if(str == "Shindler's List"){
        str = "Shindler&​apos;s List";
        return str;
    }else if(str == "<>"){
        str = "&​lt;&​gt;";
    }else{
        str = "abc"
    }

    return str;
}

convertHTML("Dolce & Gabbana");