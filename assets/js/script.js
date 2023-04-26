var header = document.querySelector('header');
var scoreLink = document.querySelector('#scoreLink');
var timer = document.querySelector('#timer');
var question = document.querySelector('#question')
var choices = document.querySelector('#choices');
var scoreboard = document.querySelector('#scoreboard');
var start = document.querySelector('#start');
var answer = document.querySelector('#answer');
var submit = document.querySelector('#submit');

var question1 = [ 'Javascript is a ___ language?',
  '1. Object-oriented',
  '2. Object-based',
  '3. Procedural',
  '4. None of the Above',
  1
]

var question2 = [
  'Which of the following keywords is used to define a variable in Javascript?',
  '1. var',
  '2. let',
  '3. Both A and B',
  '4. None of the Above',
  3
]

var question3 = [
  'Which of the following methods is used to access HTML elements using Javascript?',
  '1. getElementbyId()',
  '2. getElementsbyClassName()',
  '3. Both A and B',
  '4. None of the Above',
  3
]

var question4 = [
  'Upon encountering empty statements, what does the Javascript Interpreter do?',
  '1. Throws and error',
  '2. Ignores the statements',
  '3. Gives a warning',
  '4. None of the Above',
  2
]

var question5 = [
  'Which of the following methods can be used to display data in some form using Javascript?',
  '1. document.write()',
  '2. console.log()',
  '3. window.alert()',
  '4. All of the Above',
  4
]

var question6 = [
  'How can a datatype be declared to be a constant type?',
  '1. const',
  '2. var',
  '3. let',
  '4. constant',
  1
]

var question7 = [
  'When the switch statement matches the expression with the given labels, how is the comparison done?',
  '1. Both the datatype and the result of the expression are compared',
  '2. Only the datatype of the expression is compared',
  '3. Only the value of the expression is compared',
  '4. None of the Above',
  1
]

var question8 = [
  'What keyword is used to check whether a given property is valid or not?',
  '1. in',
  '2. is in',
  '3. exists',
  '4. lies',
  1
]

var question9 = [
  'What is the use of the <noscript> tag in Javascript?',
  '1. The contents are displayed by non-JS-based browsers',
  '2. Clears all the cookies and cache',
  '3. Both A and B',
  '4. None of the Above',
  1
]

var question10 = [
  'Which function is used to serialize an object into a JSON string in Javascript?',
  '1. stringify()',
  '2. parse()',
  '3. convert()',
  '4. None of the Above',
  1
]

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

start.addEventListener('click', startQuiz);
choices.addEventListener('click', quizChoice);
scoreLink.addEventListener('click', viewHighScores);
submit.addEventListener('click', submitScore);

function startQuiz () {
  start.setAttribute('style', 'display: none;')
  choices.setAttribute('style', 'display: block;');
  timerFunction();
  quizChoice();
}

var timeLeft = 120;
function timerFunction () {
  var timeInterval = setInterval( function () {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      submit.setAttribute('style', 'display: block;')
    }
  }
  , 1000)
}

function quizChoice (event) {
  var element = event.target;
  var firstQuestion = true;
  // for (var i = 0; i < 10; i++) {
    //choices.textContent = '';
    // Renders question and multiple choice answers
    // if (element.matches('button') === true || firstQuestion === true) {
    //   firstQuestion = false;

      for (var x = 1; x < 5; x++) {
        var li = document.createElement('li');
        var button = document.createElement('button');
      
        button.setAttribute('style', 'text-align: left; min-width: 40%;');
        question.textContent = questions[1][0]
        li.setAttribute('data-index', x + 1);
        button.textContent = questions[1][x];

        choices.appendChild(li).appendChild(button);
      }
    // }
  // }
}

function submitScore (event) {
  event.preventDefault();
  header.setAttribute('style', 'visibility: hidden');
  question.textContent = 'High Scores:';
  submit.setAttribute('style', 'display: none');
  scoreboard.setAttribute('style', 'display: block;');
}

function viewHighScores(event) {
  event.preventDefault();
  header.setAttribute('style', 'visibility: hidden;');
  start.setAttribute('style', 'display: block;')
}

function clearScores() {
  if (confirm('Are you sure you want to clear the scoreboard?')) {
    
  }
}

function goBack () {
  header.setAttribute('style', 'visibility: visible;');
  scoreboard.setAttribute('style', 'display: none;');
}