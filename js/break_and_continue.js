//alert();

let odd_Number = 0;

// checking for valid input
while (true) {
    odd_Number = prompt("Enter a odd number between 1 and 50");
    if ((odd_Number > 1) && (odd_Number <= 50)) {
        if (odd_Number % 2 === 1) {
            break;
        }
    }
}

console.log("Number to skip is: " + odd_Number);


for (let number = 1; number <50; number = number + 2) {
    if (odd_Number === number) {
        console.log("Oh No! Skipping number: " + odd_Number);
        continue;
    }
    console.log("Here is an odd number: " + number);
}