var header = document.querySelector('header');
var scoreLink = document.querySelector('#scoreLink');
var timer = document.querySelector('#timer');
var question = document.querySelector('#question')
var choices = document.querySelector('#choices');
var scoreboard = document.querySelector('#scoreboard');
var start = document.querySelector('#start');
var answer = document.querySelector('#answer');
var submit = document.querySelector('#submit');

var question1 = {
  q: 'Javascript is a ___ language?',
  a1: 'Object-oriented',
  a2: 'Object-based',
  a3: 'Procedural',
  a4: 'None of the Above',
  correct: 1
}

var question2 = {
  q: 'Which of the following keywords is used to define a variable in Javascript?',
  a1: 'var',
  a2: 'let',
  a3: 'Both A and B',
  a4: 'None of the Above',
  correct: 3
}

var question3 = {
  q: 'Which of the following methods is used to access HTML elements using Javascript?',
  a1: 'getElementbyId()',
  a2: 'getElementsbyClassName()',
  a3: 'Both A and B',
  a4: 'None of the Above',
  correct: 3
}

var question4 = {
  q: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
  a1: 'Throws and error',
  a2: 'Ignores the statements',
  a3: 'Gives a warning',
  a4: 'None of the Above',
  correct: 2
}

var question5 = {
  q: 'Which of the following methods can be used to display data in some form using Javascript?',
  a1: 'document.write()',
  a2: 'console.log()',
  a3: 'window.alert()',
  a4: 'All of the Above',
  correct: 4
}

var question6 = {
  q: 'How can a datatype be declared to be a constant type?',
  a1: 'const',
  a2: 'var',
  a3: 'let',
  a4: 'constant',
  correct: 1
}

var question7 = {
  q: 'When the switch statement matches the expression with the given labels, how is the comparison done?',
  a1: 'Both the datatype and the result of the expression are compared',
  a2: 'Only the datatype of the expression is compared',
  a3: 'Only the value of the expression is compared',
  a4: 'None of the Above',
  correct: 1
}

var question8 = {
  q: 'What keyword is used to check whether a given property is valid or not?',
  a1: 'in',
  a2: 'is in',
  a3: 'exists',
  a4: 'lies',
  correct: 1
}

var question9 = {
  q: 'What is the use of the <noscript> tag in Javascript?',
  a1: 'The contents are displayed by non-JS-based browsers',
  a2: 'Clears all the cookies and cache',
  a3: 'Both A and B',
  a4: 'None of the Above',
  correct: 1
}

var question10 = {
  q: 'Which function is used to serialize an object into a JSON string in Javascript?',
  a1: 'stringify()',
  a2: 'parse()',
  a3: 'convert()',
  a4: 'None of the Above',
  correct: 1
}

start.addEventListener('click', startQuiz);
choices.addEventListener('click', quizChoice);
scoreLink.addEventListener('click', viewHighScores);
submit.addEventListener('click', submitScore);

function startQuiz () {
  start.setAttribute('style', 'display: none;')
  quizChoice();
}

function timerFunction () {
  var timeLeft = 2;
  var timeInterval = setInterval( function () {
    timeLeft--;
    timer.textContent = timeLeft;
    console.log(timeLeft);

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      submit.setAttribute('style', 'display: block;')
    }
  }
  , 1000)
}

function quizChoice () {
  choices.textContent = '';
  choices.setAttribute('style', 'display: block;');

  var li = document.createElement('li');
  var button = document.createElement('button');

  li.setAttribute('data-index', '1');
  button.textContent = 'testing';
  choices.appendChild(li).appendChild(button);
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