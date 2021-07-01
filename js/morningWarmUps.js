// TODO: Create a function named countSpaces that accepts a string and
//  returns the total number of spaces in the string.

function countSpaces(str) {
    if (typeof str !== ('string')){
        return false;
    }
    else {
        return countSpaces;
    }

    let my_string = "total number of Spaces in the string";
    let spaceCount = (my_string.split(" ").length - 1);
    console.log(spaceCount);

}



// TODO: Add validation to function above, if the argument pass is not a string it should return false.