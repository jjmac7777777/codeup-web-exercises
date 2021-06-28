alert("Hello World!")
/*function showMultiplicationTable(x) {
    for (let index = 1; index <= 10; index++){
    console.log(x + "x" + index + "=" + (x * index));
}

}
    showMultiplicationTable(7);*/


/*function randomNumber() {
    for (let Num = 0; Num < 10; Num++) {
        var ranNum = Math.ceil(Math.random() * (200 - 20) + 20;
        if (ranNum % 2 === 0) ;
            console.log(" This number is even" + ranNum);
        else{
            console.log(" This number is odd" + ranNum);
        }
    }

    randomNumber()
 */

// program to generate a multiplication table

// take input from the user
/* program to generate a multiplication table
upto a range */

// take number input from the user
const number = parseInt(prompt('7'));

// take range input from the user
const range = parseInt(prompt('10'));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
}
console.log(`${number} * ${i} = ${result}`);