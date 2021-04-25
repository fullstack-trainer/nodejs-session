const readline = require("readline-sync");

console.log("Welcome to Node JS");

try {
    var xx = yy + 20;
    console.log(xx);
} catch (ex) {
    console.log(ex);
}

try {
   throw new Error("My own exception")
} catch (ex) {
    console.log(ex);
} finally {
    console.log("Finally exceuted");
}

const name = readline.question("\nWhat is your name? ");
const age = readline.question("\nWhat is your age? ");
const feedback = readline.question("\nWhat is your feedback? ");

console.log(`Hello ${name}, 
Your age is ${age}. 
You have said: ${feedback}.
Thanks for sharing it.`);

while (true) {
    const choice = readline.question("Do you want to share it? ");
    if (choice == 'yes') {
        console.log('Shared');
        break;
    } else if (choice == 'no') {
        console.log('Not Shared');
        break;
    } else {
        console.log('Incorrect option');
    }
}


