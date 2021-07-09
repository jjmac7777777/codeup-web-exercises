// // July 1st 2021
// // TODO: Create a function named countSpaces that accepts a string and
// //  returns the total number of spaces in the string.
//
// function countSpaces(str) {
//     if (typeof str !== 'string'){
//         return false;
//     }
//     else {
//         let spaceCount = 0; //(str.split(" ").length - 1);
//         for (let x = 0; x < str.length; x++) {
//            if (str.substring(x, x + 1) === " ") {
//                spaceCount++;
//            }
//
//         }
//         return spaceCount;
//     }
//
//
//     //console.log(spaceCount);
//
// }
// console.log(countSpaces("Total number of spaces"));
// console.log(countSpaces("Total number"));
// console.log(countSpaces("Total number of spaces in the United States of America"));
//
// // TODO: Add validation to function above, if the argument pass is not a string it should return false.
//
//
//
// // July 6th 2021
// // TODO: Create a function named capitalizeAllNames that accepts an array of strings and
// //  returns the array with all of its elements capitalized.
// // Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
//
// const capitalizeAllNames ["bob","Seth","TOFU","Toyota"];
//
//     let capitalizeAllNames = names.map(name => name.toUpperCase());
//
//
// console.log(capitalizeAllNames("bob","Seth","TOFU","Toyota"));

// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]

// July 7th 2021
// TODO: Create a method on the object down below named getFullName
//  that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
// var personOne = {
//     firstName: "silvia",
//     lastName: "floopertan",
//     ageInYears: 34,
//     heightInInches: 65,
//     getFullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// };
//
// personOne`${person} is ${age} years old`;
//
// // TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
// //  users full name with both first letters in the names being capitalized look at example down below for more reference.
// // Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
// var personTwo = {
//     firstName: "dan",
//     lastName: "valdarez",
//     ageInYears: 61,
//     heightInInches: 73
// }
//
//
// // TODO: Create a method on the object below that gives us the behavior that the example implies.
// // Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
// var personThree = {
//     firstName: "arlene",
//     lastName: "martinez",
//     ageInYears: 25,
//     heightInInches: 62
// }


// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]

let array = ["Hello" , "Dave"];

function returnSplitString(string){
    return string.split(" ");
}

let splitStringArray = returnSplitString(array[0]);


// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"
// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array
//  will be in the same format as PersonOne, PersonTwo, and PersonThree. The functions job is to return
//  an array of users that have heightInInches equal to or greater than 65.
//var people = [personOne,personTwo,personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//

function getTallUsers(arrayOfObjects){
    var people = [personOne,personTwo,personThree];

}

var personOne = {
//     firstName: "silvia",
//     lastName: "floopertan",
//     ageInYears: 34,
//     heightInInches: 65,
//     getFullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

    var personTwo = {
//     firstName: "dan",
//     lastName: "valdarez",
//     ageInYears: 61,
//     heightInInches: 73
// }
        var personThree = {
//     firstName: "arlene",
//     lastName: "martinez",
//     ageInYears: 25,
//     heightInInches: 62
// }

//
personOne`${person} is ${height} inches tall`;
personTwo`${person} is ${height} inches tall`;
personThree`${person} is ${height} inches tall`;