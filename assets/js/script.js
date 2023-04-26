var header = document.querySelector('header');
var scoreLink = document.querySelector('#scoreLink');
var timer = document.querySelector('#timer');
var question = document.querySelector('#question')
var choices = document.querySelector('#choices');
var scoreboard = document.querySelector('#scoreboard');
var start = document.querySelector('#start');
var answer = document.querySelector('#answer');
var submit = document.querySelector('#submit');

start.addEventListener('click', startQuiz);
scoreLink.addEventListener('click', viewHighScores);

function startQuiz () {
  start.setAttribute('style', 'display: none;')

  var timeLeft = 5;
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

function submitScore (event) {
  event.preventDefault();
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