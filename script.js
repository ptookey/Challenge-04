var header = document.getElementById("header");
var vhs = document.getElementById("vhs");
var startScreen = document.getElementById("startScreen");
var questions = document.getElementById("questions");
var resultScreen = document.getElementById("resultScreen");
var highscoreScreen = document.getElementById("highscoreScreen");

var timer = document.getElementById("timer");

var vhsButton = document.getElementById("viewHighscore");
var startQuizButton = document.getElementById("start");
var activeQuestion = document.getElementById("activeQuestion");
var answer1Button = document.getElementById("answer1");
var answer2Button = document.getElementById("answer2");
var answer3Button = document.getElementById("answer3");
var answer4Button = document.getElementById("answer4");
var submit = document.getElementById("sub");
var tryAgain = document.getElementById("retry");
var timeInterval;

var answeredQuestions = [];

var question1 = {
    question: "What is the color purple?",
    a1: "The best",
    a2: "The worst",
    a3: "Just Kinda Mid",
    a4: "Fuck if I know",
}

var question2 = {
    question: "What is the square root of pi?",
    a1: "2",
    a2: "????",
    a3: "why?",
    a4: "please help me",
}

var questionlist = [question1, question2];

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

    timeInterval = setInterval(function() {
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
    timer.textContent = "120 Seconds Remaining";
}

function displayResultScreen() {
    header.style.display = "block";
    vhs.style.display = "none";
    startScreen.style.display = "none";
    questions.style.display = "none";
    resultScreen.style.display = "block";
    highscoreScreen.style.display = "none";
}

function startQuiz() {
    countdown();
    header.style.display = "block";
    vhs.style.display = "none";
    startScreen.style.display = "none";
    questions.style.display = "block";
    resultScreen.style.display = "none";
    highscoreScreen.style.display = "none";

    var x = 0;

    var randomNumber=Math.random();
    var randomNumberUpToMax=randomNumber * questionlist.length;
    var randomNumberInRange = 0 + randomNumberUpToMax;
    x = Math.floor(randomNumberInRange);

    console.log(x);

    activeQuestion.textContent = questionlist[x].question;
    answer1Button.textContent = questionlist[x].a1;
    answer2Button.textContent = questionlist[x].a2;
    answer3Button.textContent = questionlist[x].a3;
    answer4Button.textContent = questionlist[x].a4;

    questionlist.splice(x,1);
}

function nextQuestion(){

    if (questionlist.length===0) {
        displayResultScreen();
        clearInterval(timeInterval);
        timer.textContent = "";
      } else {
        var x = 0;

        var randomNumber=Math.random();
        var randomNumberUpToMax=randomNumber * questionlist.length;
        var randomNumberInRange = 0 + randomNumberUpToMax;
        x = Math.floor(randomNumberInRange);


        console.log(x);

        activeQuestion.textContent = questionlist[x].question;
        answer1Button.textContent = questionlist[x].a1;
        answer2Button.textContent = questionlist[x].a2;
        answer3Button.textContent = questionlist[x].a3;
        answer4Button.textContent = questionlist[x].a4;

        questionlist.splice(x,1);

    }
}

startScreenView();

vhsButton.addEventListener("click",displayhighscoreScreen);
tryAgain.addEventListener("click", startScreenView);
startQuizButton.addEventListener("click", startQuiz);
submit.addEventListener("click", displayhighscoreScreen);
answer1Button.addEventListener("click", nextQuestion);
answer2Button.addEventListener("click", nextQuestion);
answer3Button.addEventListener("click", nextQuestion);
answer4Button.addEventListener("click", nextQuestion);