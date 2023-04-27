var header = document.querySelector('header');
var scoreLink = document.querySelector('#scoreLink');
var timer = document.querySelector('#timer');
var question = document.querySelector('#question')
var choices = document.querySelector('#choices');
var scoreboard = document.querySelector('#scoreboard');
var start = document.querySelector('#start');
var answer = document.querySelector('#answer');
var submit = document.querySelector('#submit');
var initials = document.querySelector('#initials');
var choice = document.querySelector('.choice');
var finalScore = document.querySelector('#finalScore');
var highScoreOptions = document.querySelector('#highScoreOptions');
var goBack = document.querySelector('#goBack');
var clearScores = document.querySelector('#clearScores');

var question1 = [
  'Javascript is a ___ language?',
  'Object-oriented',
  'Object-based',
  'Procedural',
  'None of the Above',
  1
]

var question2 = [
  'Which of the following keywords is used to define a variable in Javascript?',
  'var',
  'let',
  'Both A and B',
  'None of the Above',
  3
]

var question3 = [
  'Which of the following methods is used to access HTML elements using Javascript?',
  'getElementbyId()',
  'getElementsbyClassName()',
  'Both A and B',
  'None of the Above',
  3
]

var question4 = [
  'Upon encountering empty statements, what does the Javascript Interpreter do?',
  'Throws and error',
  'Ignores the statements',
  'Gives a warning',
  'None of the Above',
  2
]

var question5 = [
  'Which of the following methods can be used to display data in some form using Javascript?',
  'document.write()',
  'console.log()',
  'window.alert()',
  'All of the Above',
  4
]

var question6 = [
  'How can a datatype be declared to be a constant type?',
  'const',
  'var',
  'let',
  'constant',
  1
]

var question7 = [
  'When the switch statement matches the expression with the given labels, how is the comparison done?',
  'Both the datatype and the result of the expression are compared',
  'Only the datatype of the expression is compared',
  'Only the value of the expression is compared',
  'None of the Above',
  1
]

var question8 = [
  'What keyword is used to check whether a given property is valid or not?',
  'in',
  'is in',
  'exists',
  'lies',
  1
]

var question9 = [
  'What is the use of the <noscript> tag in Javascript?',
  'The contents are displayed by non-JS-based browsers',
  'Clears all the cookies and cache',
  'Both A and B',
  'None of the Above',
  1
]

var question10 = [
  'Which function is used to serialize an object into a JSON string in Javascript?',
  'stringify()',
  'parse()',
  'convert()',
  'None of the Above',
  1
]

var currentQuestion = 0;
var started = false;
var timeLeft = 120;
var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var sortedInitialsList = [];
var sortedScoresList = [];
var initialsList = [];
var scoresList = [];

start.addEventListener('click', startQuiz);
scoreLink.addEventListener('click', function (event) {
  event.preventDefault();
  if (!started) {
    viewHighScores();
  }
});
submit.addEventListener('submit', submitScore);
goBack.addEventListener('click', goBackFunction);
clearScores.addEventListener('click', clearScoresFunction);

choices.addEventListener('click', function (event){
  var element =  event.target;

  if (element.matches('button') === true) {
    var chosen = element.getAttribute('data-index');
    if (questions[currentQuestion][5] == chosen) {
      answer.textContent = 'Correct!';
      currentQuestion++;
      nextQuestion(currentQuestion);
    } else {
      answer.textContent = 'Wrong!';
      timeLeft -= 10;
    }
  }
});

function startQuiz () {
  start.setAttribute('style', 'display: none;')
  choices.setAttribute('style', 'display: block;');
  scoreLink.setAttribute('style', 'visibility: hidden;')
  answer.textContent = '';
  started = true;
  timerFunction();
  nextQuestion(currentQuestion);
}

// Renders question and multuple choice answers based on input parameter number
function nextQuestion(questionNumber) {
  if (questionNumber < 10) {
    question.textContent = questions[questionNumber][0];
    choices.children[0].children[0].textContent = questions[questionNumber][1];
    choices.children[1].children[0].textContent = questions[questionNumber][2];
    choices.children[2].children[0].textContent = questions[questionNumber][3];
    choices.children[3].children[0].textContent = questions[questionNumber][4];
  }
}

function timerFunction () {
  var timeInterval = setInterval( function () {
    timeLeft--;
    timer.textContent = timeLeft;
  
    if (timeLeft <= 0 || currentQuestion === 10) {
      clearInterval(timeInterval);
      question.textContent = 'All Done!';
      finalScore.textContent = timeLeft;
      answer.textContent = '';
      started = false;
      currentQuestion = 0;
      choices.setAttribute('style', 'display: none;');
      submit.setAttribute('style', 'display: block;')
    }
  }
  , 1000)
}

function submitScore (event) {
  event.preventDefault();
  var userInitials = initials.value.trim().toUpperCase();

  if (userInitials !== '') {
    submit.setAttribute('style', 'display: none');

    initialsList.push(userInitials);
    scoresList.push(timeLeft);
    initials.value = '';
    scoreboard.textContent = '';

    sortScores();

    localStorage.setItem('localSortedInitialsList', JSON.stringify(sortedInitialsList));
    localStorage.setItem('localSortedScoresList', JSON.stringify(sortedScoresList));
    
    for (i = 0; i < sortedInitialsList.length; i++) {
      var li = document.createElement('li');
      li.textContent = sortedInitialsList[i] + ' : ' + sortedScoresList[i];
      scoreboard.appendChild(li);
    }

    timeLeft = 120;
    viewHighScores();
  }
}

// High score sorting function
function sortScores() {
  var highScores = initialsList.map((name, index) => ({ name, score: scoresList[index] }));
  highScores.sort((a, b) => b.score - a.score);
  
  sortedInitialsList = highScores.map(person => person.name);
  sortedScoresList = highScores.map(person => person.score);
}

function viewHighScores() {
  header.setAttribute('style', 'visibility: hidden;');
  start.setAttribute('style', 'display: none;')
  answer.setAttribute('style', 'display: none;')
  scoreboard.setAttribute('style', 'display: block;');

  question.textContent = 'High Scores:';
  highScoreOptions.setAttribute('style', 'display: block;');
}

function init() {
  question.textContent = 'Welcome to the Coding Quiz Challenge!';
  answer.textContent = 'Try to answer the following code-releated questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!';
}

function scoreboardInit() {
  var storedInitials = JSON.parse(localStorage.getItem('localSortedInitialsList'));
  var storedScores = JSON.parse(localStorage.getItem('localSortedScoresList'));

  if (storedInitials !== null || storedScores !== null) {
    initialsList = storedInitials;
    scoresList = storedScores;
  }

  for (i = 0; i < initialsList.length; i++) {
    var li = document.createElement('li');
    li.textContent = initialsList[i] + ' : ' + scoresList[i];
    scoreboard.appendChild(li);
  }
}

function clearScoresFunction() {
  if (confirm('Are you sure you want to clear the scoreboard?')) {
    sortedInitialsList = [];
    sortedScoresList = [];
    scoreboard.textContent = '';
    localStorage.setItem('localSortedInitialsList', JSON.stringify(sortedInitialsList));
    localStorage.setItem('localSortedScoresList', JSON.stringify(sortedScoresList));
  }
}

function goBackFunction () {
  header.setAttribute('style', 'visibility: visible;');
  scoreLink.setAttribute('style', 'visibility: visible;');
  start.setAttribute('style', 'display: block;');
  scoreboard.setAttribute('style', 'display: none;');
  highScoreOptions.setAttribute('style', 'display: none;');
  answer.setAttribute('style', 'display: block;');

  init();
}

init();
scoreboardInit();