var header = document.getElementById("header");
var vhs = document.getElementById("vhs");
var startScreen = document.getElementById("startScreen");
var questions = document.getElementById("questions");
var resultScreen = document.getElementById("resultScreen");
var highscoreScreen = document.getElementById("highscoreScreen");

var timer = document.getElementById("timer");

var vhsButton = document.getElementById("viewHighscore");
var startQuizButton = document.getElementById("start");
var answer1Button = document.getElementById("answer1");
var answer2Button = document.getElementById("answer2");
var answer3Button = document.getElementById("answer3");
var answer4Button = document.getElementById("answer4");
var submit = document.getElementById("sub");
var tryAgain = document.getElementById("retry");

function displayhighscoreScreen() {
    header.style.display = "none";
    vhs.style.display = "none";
    startScreen.style.display = "none";
    questions.style.display = "none";
    resultScreen.style.display = "none";
    highscoreScreen.style.display = "block";
}

function countdown() {
    var timeLeft = 120;

    var timeInterval = setInterval(function() {
      timer.textContent = timeLeft+" Seconds Remaining";
      timeLeft--;
      if (timeLeft===-1){
        timer.textContent = "Time's Up";
        clearInterval(timeInterval);
      }
    },1000);
  }

function startScreenView() {
    header.style.display = "block";
    vhs.style.display = "block";
    startScreen.style.display = "block";
    questions.style.display = "none";
    resultScreen.style.display = "none";
    highscoreScreen.style.display = "none";
}

function startQuiz() {
    header.style.display = "block";
    vhs.style.display = "none";
    startScreen.style.display = "none";
    questions.style.display = "block";
    resultScreen.style.display = "none";
    highscoreScreen.style.display = "none";
    countdown();
}


startScreenView();

vhsButton.addEventListener("click",displayhighscoreScreen);
tryAgain.addEventListener("click", startScreenView);
startQuizButton.addEventListener("click", startQuiz);
submit.addEventListener("click", displayhighscoreScreen);