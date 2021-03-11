// 'use strict';

// let userName = prompt('Hello, what is your name?')
// //alert('Hello ' + username);
// //console.log('You are' + username);

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
//         //console.log('That is correct')
//         break; 
//     case 'n':
//         alert('That is correct')
//         //console.log('That is correct')
//         break;
//   default:
//         alert('It\'s a yes or no question - you fail');
//         }

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
//         break; 
//     case 'n':
//         alert('That is correct')
//         break;
//   default:
//         alert('It\'s a yes or no question - you fail');
//         }

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
//         //console.log('That is correct')
//         break; 
//     case 'n':
//         alert('That is correct')
//         //console.log('That is correct')
//         break;
//   default:
//         alert('It\'s a yes or no question - you fail');
//         }

// let question5 = prompt(`Ok ${userName}, did Tim study finance?`);
// switch (question5.toLowerCase()) {
//     case 'yes':
//         alert('That is correct')
//         //console.log('That is correct')
//         break;
//     case 'y':
//         alert('That is correct')
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
//   default:
//         alert('It\'s a yes or no question - you fail');
//         }


let numAnswer = 7;

for (let i = 0; i < 4; i++) {
  let numGuess = prompt('Pick a number between 1 and 20. You\'ve got 4 chances.')
  let int = parseInt(numGuess);
  if (int < numAnswer) {
    console.log('Too low');
  } 
  else if (int > numAnswer) {
    console.log('Too high ');
  } 
  else if (int === numAnswer) {
    console.log('Well done');
    alert('Well done');
    break;
  } 
  else {
    console.log('What are you doing fool?!');
  }
}

let fruits = ['apple', 'orange', 'pear']

for (let i = 0; i < 6; i++) {
    let answer7 = prompt('What is one of Tim\'s favorite fruit?')
    let correct = false;

    for (let j = 0; j < fruits.length; j++) {
        if (fruits[j] === answer7) {
            console.log('Correct');
            correct = true;
            break;
        }
    }
    if (correct === true) {
        break;
    } else {
        alert('incorrect answer')
    }
}
if (correct === false) {
    console.log('Sorry - wrong answer');
    alert(`The correct answers were: ${fruits}`);
}