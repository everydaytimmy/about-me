'use strict';

let username = prompt('Hello, what is your name?')
//alert('Hello ' + username);
//console.log('You are' + username);

let question1 = prompt(`Ok ${username}, was Tim born in Florida?`);
switch (question1.toLowerCase()) {
    case 'yes':
        alert('That is correct')
        break;
    case 'y':
        alert('That is correct')
        break;
    case 'no':
        alert('That is incorrect')
        break; 
    case 'n':
        alert('That is incorrect')
        break;
  default:
        alert('It\'s a yes or no question - you fail');
        }

let question2 = prompt(`Ok ${username}, was Tim in the Marines?`);
switch (question2) {
    case 'yes':
        alert('That is incorrect')
        break;
    case 'y':
        alert('That is incorrect')
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

let question3 = prompt(`Ok ${username}, Did Tim go to university in Maine?`);
switch (question3) {
    case 'yes':
        alert('That is incorrect')
        break;
    case 'y':
        alert('That is incorrect')
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

let question4 = prompt(`Ok ${username}, did Tim meet his wife at work?`);
switch (question4) {
    case 'yes':
        alert('That is incorrect')
        break;
    case 'y':
        alert('That is incorrect')
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

let question5 = prompt(`Ok ${username}, did Tim study finance?);
switch (question5) {
    case 'yes':
        alert('That is correct')
        break;
    case 'y':
        alert('That is correct')
        break;
    case 'no':
        alert('That is incorrect')
        break; 
    case 'n':
        alert('That is incorrect')
        break;
  default:
        alert('It\'s a yes or no question - you fail');
        }

        

