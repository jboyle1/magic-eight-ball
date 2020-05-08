// Create Function that takes user name and outputs the value in a HTML string.
function say_hi() {
    let fname = document
        .getElementById('first_name')
        .value;
    let html = `Hello ${fname}`;
    document
        .getElementById('result1')
        .innerHTML = html;
}
// Add an event lidtener for the say_hi function.
document
    .getElementById('say')
    .addEventListener('click', say_hi);

// Create a function that takes a question and displays that question in the
// browser
function askQuestion() {
    let userQuestion = document
        .getElementById('question')
        .value;
    let fname = document
        .getElementById('first_name')
        .value;
    let userQuestionHtml = `${fname} asked: ${userQuestion}`;
    document
        .getElementById('result2')
        .innerHTML = userQuestionHtml;
}

// Create a function that generates a random number between 0 and 7. Store this
// number in a variable called randomNumber. Then create an empty string called
// eightball. After this make a switch statment that uses random number to pick
// a string.
function eightBallOutput() {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = "";
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

    let result = `${eightBall}`;
    document
        .getElementById('output')
        .innerHTML = result;

};

// Add event lidteners for the say_hi function and the eightBallOutput function.
document
    .getElementById('ask')
    .addEventListener('click', askQuestion,);
document
    .getElementById('ask')
    .addEventListener('click', eightBallOutput,);

