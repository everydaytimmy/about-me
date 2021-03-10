'use strict';

let userName = prompt('Hello, what is your name?')
//alert('Hello ' + username);
//console.log('You are' + username);

let question1 = prompt(`Ok ${userName}, was Tim born in Florida?`);
switch (question1.toLowerCase()) {
    case 'yes':
        alert('That is correct')
        //console.log('That is correct')
        break;
    case 'y':
        alert('That is correct')
        //console.log('That is correct')
        break;
    case 'no':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break; 
    case 'n':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break;
  default:
        alert('It\'s a yes or no question - you fail');
        }

let question2 = prompt(`Ok ${userName}, was Tim in the Marines?`);
switch (question2.toLowerCase()) {
    case 'yes':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break;
    case 'y':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break;
    case 'no':
        alert('That is correct')
        //console.log('That is correct')
        break; 
    case 'n':
        alert('That is correct')
        //console.log('That is correct')
        break;
  default:
        alert('It\'s a yes or no question - you fail');
        }

let question3 = prompt(`Ok ${userName}, Did Tim go to university in Maine?`);
switch (question3.toLowerCase()) {
    case 'yes':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break;
    case 'y':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break;
    case 'no':
        alert('That is correct')
        break; 
    case 'n':
        alert('That is correct')
        break;
  default:
        alert('It\'s a yes or no question - you fail');
        }

let question4 = prompt(`Ok ${userName}, did Tim meet his wife at work?`);
switch (question4.toLowerCase()) {
    case 'yes':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break;
    case 'y':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break;
    case 'no':
        alert('That is correct')
        //console.log('That is correct')
        break; 
    case 'n':
        alert('That is correct')
        //console.log('That is correct')
        break;
  default:
        alert('It\'s a yes or no question - you fail');
        }

let question5 = prompt(`Ok ${userName}, did Tim study finance?`);
switch (question5.toLowerCase()) {
    case 'yes':
        alert('That is correct')
        //console.log('That is correct')
        break;
    case 'y':
        alert('That is correct')
        //console.log('That is correct')
        break;
    case 'no':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break; 
    case 'n':
        alert('That is incorrect')
        //console.log('That is incorrect')
        break;
  default:
        alert('It\'s a yes or no question - you fail');
        }