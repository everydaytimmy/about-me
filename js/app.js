'use strict';

let userName = prompt('Hello, what is your name?');
alert('Hello ' + userName);
console.log('You are' + userName);

let correctAnswerCount = 0;

function affirmative() {
    alert('That is correct');
    correctAnswerCount += 1;
    console.log('That is correct');
}

function negative() {
    alert('That is incorrect');
    console.log('That is incorrect');
}

let question2 = prompt(`Ok ${userName}, was Tim in the Marines?`);
switch (question2.toLowerCase()) {
    case 'yes':
        negative();
        break;
    case 'y':
        negative();
        break;
    case 'no':
        affirmative();
        break;
    case 'n':
        affirmative();
        break;
    default:
        alert('It\'s a yes or no question - you fail');
}

let question3 = prompt(`Ok ${userName}, Did Tim go to university in California?`);
switch (question3.toLowerCase()) {
    case 'yes':
        negative();
        break;
    case 'y':
        negative();
        break;
    case 'no':
        affirmative();
        break;
    case 'n':
        affirmative();
        break;
    default:
        alert('It\'s a yes or no question - you fail');
}

let question4 = prompt(`Ok ${userName}, did Tim meet his wife at work?`);
switch (question4.toLowerCase()) {
    case 'yes':
        negative();
        break;
    case 'y':
        negative();
        break;
    case 'no':
        affirmative();
        break;
    case 'n':
        affirmative();
        break;
    default:
        alert('It\'s a yes or no question - you fail');
}

let question5 = prompt(`Ok ${userName}, did Tim study finance?`);
switch (question5.toLowerCase()) {
    case 'yes':
        affirmative();
        break;
    case 'y':
        affirmative();
        break;
    case 'no':
        negative();
        break;
    case 'n':
        negative();
        break;
    default:
        alert('It\'s a yes or no question - you fail');
}

//Question 6
let numAnswer = 7;

for (let i = 0; i < 4; i++) {
    let numGuess = prompt('Pick a number between 1 and 20. You\'ve got 4 chances.');
    let int = parseInt(numGuess);
    if (int < numAnswer) {
        console.log('Too low');
        alert('Too low');
    }
    else if (int > numAnswer) {
        console.log('Too high ');
        alert('Too High');
    }
    else if (int === numAnswer) {
        console.log('Well done');
        alert('Well done');
        correctAnswerCount++;
        break;
    }
    else {
        console.log('Wrong Answer');
        alert('wrong answer');
    }
}

//Question 7
let fruits = ['apple', 'orange', 'pear'];
let correct = false;

for (let i = 0; i < 6; i++) {
    let answer7 = prompt('What is one of Tim\'s favorite fruit?');

    for (let j = 0; j < fruits.length; j++) {
        if (fruits[j] === answer7) {
            console.log('Correct');
            alert('That is correct');
            correctAnswerCount++
            correct = true;
            break;
        }
    }
    if (correct === true) {
        alert(`Correct. You got a total of ${correctAnswerCount} questions right`);
        break;
    } else {
        alert('incorrect answer');
    }
}


if (correct === false) {
    console.log('sorry you got it wrong');
    alert(`the correct answers were: ${fruits}. You got a total of ${correctAnswerCount} questions right out of seven total`);
}



// let correctaMundo = "you got it"
// let hellNa = "nope"

// let questions = ["Does Tim have a spouse?","Does Tim have a dog", "Does Tim have kids"]
// let correctOnes = ['yes', 'yes', 'no']
// let answerKey = [correctaMundo, hellNa]

// for (let i = 0; i < questions.length; i++) {
//     let currentQuestion = questions[i];
//     let currentCorrectResponse = correctOnes[i];
//     let userResponse = prompt(currentQuestion);
//     if (userResponse === currentCorrectResponse) {
//         alert (answerKey[0]);
//     }
//     else {
//         alert (answerKey[1]);
//     }

// }

