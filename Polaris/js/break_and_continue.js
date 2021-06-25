'use strict';

var oddNum;

    for(var index = 0 ;index <50 ;index++) {
        oddNum=prompt(`Enter an odd number between 1 and 50`);

        if (index !== Number(oddNum)) {
            console.log("Oh no, skipping a number!" + index);
            continue;
        }
    }
        if (index % 2 !== 0) {
            console.log("Here is an odd number: " + index);
        }







    /*    console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}

for (i = 0; i < 50; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}

var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to
// continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.

for (i = 0; i < 50; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}



for (var i = 1; i < 50; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
} */