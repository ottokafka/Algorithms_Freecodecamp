/**
 * Created by automac on 1/31/17.
 */
function whatIsInAName(collection, source) {

// Object keys method returns the arrays own property's in this case it returns: ["last"] from the second array source
        var sourceProperty = Object.keys(source);

//filter is ES6 language filter method will create a new array with all the elements that pass the test
    //in this case we have filter namesInCollection. the arrow function => is just another way of writing the keyword function
    return collection.filter((namesInCollection) => {

//the every method tests whether all elements in the array pass the test provided by the provided function
        return sourceProperty.every((propertyInCollection) => {

//here we test equality with the function namesInCollection[property] === source[property]
            return namesInCollection[propertyInCollection] === source[propertyInCollection];

        });
    });
    }

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" });
