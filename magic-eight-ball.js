let userName = '';

// Create a ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello ${userName}`) : console.log(`Hello`);

// Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
let userQuestion = 'Will I become a wearwolf tonight?';

// Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!
console.log(`${userName} asked: ${userQuestion}`);

// Generate a random number between 0 and 7. Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods from the Math library.
let randomNumber = Math.floor(Math.random() * 8);

// Create one more variable named eightBall, and set it equal to an empty string. Its value will depend on the value of randomNumber via a switch statement.
let eightBall = "";

