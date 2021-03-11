'use strict';

let userName = prompt('Hello, what is your name?')
alert('Hello ' + userName);
console.log('You are' + userName);

// let correctAnswerCount = 0

// let question2 = prompt(`Ok ${userName}, was Tim in the Marines?`);
// switch (question2.toLowerCase()) {
//     case 'yes':
//         alert('That is incorrect')
//         //console.log('That is incorrect')
//         break;
//     case 'y':
//         alert('That is incorrect')
//         //console.log('That is incorrect')
//         break;
//     case 'no':
//         alert('That is correct')
//         correctAnswerCount++
//         //console.log('That is correct')
//         break;
//     case 'n':
//         alert('That is correct')
//         correctAnswerCount++
//         //console.log('That is correct')
//         break;
//     default:
//         alert('It\'s a yes or no question - you fail');
// }

// let question3 = prompt(`Ok ${userName}, Did Tim go to university in Maine?`);
// switch (question3.toLowerCase()) {
//     case 'yes':
//         alert('That is incorrect')
//         //console.log('That is incorrect')
//         break;
//     case 'y':
//         alert('That is incorrect')
//         //console.log('That is incorrect')
//         break;
//     case 'no':
//         alert('That is correct')
//         correctAnswerCount++
//         break;
//     case 'n':
//         alert('That is correct')
//         correctAnswerCount++
//         break;
//     default:
//         alert('It\'s a yes or no question - you fail');
// }

// let question4 = prompt(`Ok ${userName}, did Tim meet his wife at work?`);
// switch (question4.toLowerCase()) {
//     case 'yes':
//         alert('That is incorrect')
//         //console.log('That is incorrect')
//         break;
//     case 'y':
//         alert('That is incorrect')
//         //console.log('That is incorrect')
//         break;
//     case 'no':
//         alert('That is correct')
//         correctAnswerCount++
//         //console.log('That is correct')
//         break;
//     case 'n':
//         alert('That is correct')
//         correctAnswerCount++
//         //console.log('That is correct')
//         break;
//     default:
//         alert('It\'s a yes or no question - you fail');
// }

// let question5 = prompt(`Ok ${userName}, did Tim study finance?`);
// switch (question5.toLowerCase()) {
//     case 'yes':
//         alert('That is correct')
//         correctAnswerCount++
//         //console.log('That is correct')
//         break;
//     case 'y':
//         alert('That is correct')
//         correctAnswerCount++
//         //console.log('That is correct')
//         break;
//     case 'no':
//         alert('That is incorrect')
//         //console.log('That is incorrect')
//         break;
//     case 'n':
//         alert('That is incorrect')
//         //console.log('That is incorrect')
//         break;
//     default:
//         alert('It\'s a yes or no question - you fail');
// }

//Question 6
// let numAnswer = 7;

// for (let i = 0; i < 4; i++) {
//     let numGuess = prompt('Pick a number between 1 and 20. You\'ve got 4 chances.')
//     let int = parseInt(numGuess);
//     if (int < numAnswer) {
//         console.log('Too low');
//         alert('Too low');
//     }
//     else if (int > numAnswer) {
//         console.log('Too high ');
//         alert('Too High')
//     }
//     else if (int === numAnswer) {
//         console.log('Well done');
//         alert('Well done');
//         correctAnswerCount++
//         break;
//     }
//     else {
//         console.log('Wrong Answer');
//         alert('wrong answer')
//     }
// }

//Question 7
let fruits = ['apple', 'orange', 'pear']
let correct = false;

for (let i = 0; i < 6; i++) {
    let answer7 = prompt('What is one of Tim\'s favorite fruit?');

    for (let j = 0; j < fruits.length; j++) {
        if (fruits[j] === answer7) {
            console.log('Correct');
            alert('That is correct')
            correct = true;
            break;
        }
    }

}
if (correct === true) {
    alert(`Correct. You got a total of ${correctAnswerCount} questions right`);
    break;
} else {
    alert('incorrect answer');
}

if (correct !== true) {
    console.log('sorry you got it wrong');
    alert(`the correct answers were: ${fruits}. You got a total of ${rightAnswers} questions right out of seven total`);
}