// Create Function that takes user name and outputs the value in a HTML string.
function say_hi() {
    var fname = document.getElementById('first_name').value;
    var html = `Hello ${fname}`;
    document.getElementById('result1').innerHTML = html;
}
// Add an event lidtener for the say_hi function.
document.getElementById('say').addEventListener('click', say_hi);

// Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
let userQuestion = 'Will I become a wearwolf tonight?';

// Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!
console.log(`${userName} asked: ${userQuestion}`);

// Generate a random number between 0 and 7. Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods from the Math library.
let randomNumber = Math.floor(Math.random() * 8);

// Create one more variable named eightBall, and set it equal to an empty string. Its value will depend on the value of randomNumber via a switch statement.
let eightBall = "";

// Create a control flow that takes in the randomNumber we made in step 4, and then assigns eightBall to a reply that a Magic Eight Ball would return.
switch (randomNumber) {
    case 0:
        eightBall = 'It is ceartain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy, try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
};

// Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.
console.log(`The eight ball answered: ${eightBall}`);