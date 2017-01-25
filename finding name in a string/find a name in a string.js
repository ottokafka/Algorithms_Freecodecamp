/**
 * Created by auto2 on 11/27/2016.
 */

function whatIsInAName(collection, source) {
    var attributes = Object.keys(source);
    var solution;

    var arr = collection.filter(function(item) {
        for(var i = 0; i < attributes.length; i++) {
            if(item.hasOwnProperty(attributes[i]) && item[attributes[i]] == source[attributes[i]]) {
                solution = true;
            } else {
                solution = false;
            }
        }

        return solution;
    });

    return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });