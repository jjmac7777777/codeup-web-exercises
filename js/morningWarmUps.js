// July 1st 2021
// TODO: Create a function named countSpaces that accepts a string and
//  returns the total number of spaces in the string.

function countSpaces(str) {
    if (typeof str !== 'string'){
        return false;
    }
    else {
        let spaceCount = 0; //(str.split(" ").length - 1);
        for (let x = 0; x < str.length; x++) {
           if (str.substring(x, x + 1) === " ") {
               spaceCount++;
           }

        }
        return spaceCount;
    }


    //console.log(spaceCount);

}
console.log(countSpaces("Total number of spaces"));
console.log(countSpaces("Total number"));
console.log(countSpaces("Total number of spaces in the United States of America"));

// TODO: Add validation to function above, if the argument pass is not a string it should return false.



// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and
//  returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]

function capitalizeAllNames = ["bob","Seth","TOFU","Toyota"]; {

    let capitalizeAllNames = names.map(name => name.toUpperCase());
}

console.log(capitalizeAllNames("bob","Seth","TOFU","Toyota"));





// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]