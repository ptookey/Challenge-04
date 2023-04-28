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
var initialsInput = document.getElementById("initials");
var highscorelist = document.getElementById("highscorelist");
var result = document.getElementById("result");
var highscore0 = document.getElementById("highscore0");
var highscore1 = document.getElementById("highscore1");
var highscore2 = document.getElementById("highscore2");
var highscore3 = document.getElementById("highscore3");
var highscore4 = document.getElementById("highscore4");
var highscore5 = document.getElementById("highscore5");
var highscore6 = document.getElementById("highscore6");
var highscore7 = document.getElementById("highscore7");
var highscore8 = document.getElementById("highscore8");
var highscore9 = document.getElementById("highscore9");
var clearScores = document.getElementById("reset");

var score = 0;

var currentQuestion = 0;

var timeInterval;
var timeLeft;


var one = "";
var two = "";


localStorage.getItem("hsInitials");
localStorage.getItem("hsScores");


var question1 = {
    question: "Inside which HTML element do we put the JavaScript?",
    a1: "<scripting>",
    a2: "<js>",
    a3: "<javascript>",
    a4: "<script>",
    correct: "D",
}

var question2 = {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?"+" <p id='demo'>This is a demonstration.</p>",
    a1: "#demo.innerHTML = 'Hello World!';",
    a2: "document.getElement('p').innerHTML = 'Hello World!';",
    a3: "document.getElementById('demo').innerHTML = 'Hello World!'",
    a4: "document.getElementByName('p').innerHTML = 'Hello World!'",
    correct: "C",
}

var question3 = {
    question: "Where is the correct place to insert a JavaScript?",
    a1: "Both the <head> section and the <body> section are correct",
    a2: "The <body> section",
    a3: "The <head> section",
    a4: "The <foot> section",
    correct: "A",
}

var question4 = {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    a1: '<script name="xxx.js">',
    a2: '<script href="xxx.js">',
    a3: '<script src="xxx.js">',
    a4: '<script img="xxx.js">',
    correct: "C",
}

var question5 = {
    question: "The external JavaScript file must contain the <script> tag.",
    a1: "True",
    a2: "False",
    a3: "",
    a4: "",
    correct: "B",
}

var question6 = {
    question: 'How do you write "Hello World" in an alert box?',
    a1: 'msgBox("Hello World");',
    a2: 'alertBox("Hello World");',
    a3: 'alert("Hello World");',
    a4: 'msg("Hello World");',
    correct: "C",
}

var question7 = {
    question: "How do you create a function in JavaScript?",
    a1: "function myFunction()",
    a2: "function = myFunction()",
    a3: "function:myFunction()",
    a4: "var function = myfunction()",
    correct: "A",
}

var question8 = {
    question: 'How do you call a function named "myFunction"?',
    a1: "call myFunction()",
    a2: "myFunction()",
    a3: "call function myFunction()",
    a4: "function(myFunction)",
    correct: "B",
}

var question9 = {
    question: "How to write an IF statement in JavaScript?",
    a1: "if i = 5",
    a2: "if i = 5 then",
    a3: "if i == 5 then",
    a4: "if (i == 5)",
    correct: "D",
}

var question10 = {
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    a1: 'if (i != 5)',
    a2: 'if (i <> 5)',
    a3: 'if i =! 5 then',
    a4: 'if i <> 5',
    correct: "A",
}

var question11 = {
    question: "How does a WHILE loop start?",
    a1: "while (i <= 10; i++)",
    a2: "while (i <= 10)",
    a3: "while i = 1 to 10",
    a4: "while (var i = 0; i<10; i++)",
    correct: "B",
}

var question12 = {
    question: "How does a FOR loop start?",
    a1: "for (i = 0; i <= 5; i++)",
    a2: "for (i <= 5; i++)",
    a3: "for (i = 0; i <= 5)",
    a4: "for i = 1 to 5",
    correct: "A",
}

var question13 = {
    question: "How can you add a comment in a JavaScript?",
    a1: "//This is a comment",
    a2: "<!--This is a comment-->",
    a3: "'This is a comment",
    a4: '"This is a comment"',
    correct: "A",
}

var question14 = {
    question: "How to insert a comment that has more than one line?",
    a1: "/*This comment has more than one line*/ ",
    a2: "//This comment has more than one line//",
    a3: "<!--This comment has more than one line-->",
    a4: "",
    correct: "A",
}

var question15 = {
    question: "What is the correct way to write a JavaScript array?",
    a1: 'var colors = ["red", "green", "blue"]',
    a2: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
    a3: 'var colors = (1:"red", 2:"green", 3:"blue")',
    a4: 'var colors = "red", "green", "blue"',
    correct: "A",
}

var question16 = {
    question: 'How do you round the number 7.25, to the nearest integer?',
    a1: 'rnd(7.25)',
    a2: 'Math.round(7.25)',
    a3: 'Math.rnd(7.25)',
    a4: 'round(7.25)',
    correct: "B",
}

var question17 = {
    question: "How do you find the number with the highest value of x and y?",
    a1: "ceil(x, y)",
    a2: "Math.max(x, y)",
    a3: "top(x, y)",
    a4: "Math.ceil(x, y)",
    correct: "B",
}

var question18 = {
    question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
    a1: 'w2 = window.open("http://www.w3schools.com");',
    a2: 'w2 = window.new("http://www.w3schools.com");',
    a3: 'w2 = open.window("http://www.w3schools.com")',
    a4: 'w2 = new.window("http://www.w3schools.com")',
    correct: "A",
}

var question19 = {
    question: 'JavaScript is the same as Java.',
    a1: 'True',
    a2: 'False',
    a3: 'Sometimes True',
    a4: '',
    correct: "B",
}

var question20 = {
    question: "How can you detect the client's browser name?",
    a1: "navigator.appName",
    a2: "browser.name",
    a3: "client.navName",
    a4: "browser.navName",
    correct: "A",
}

var question21 = {
    question: 'Which event occurs when the user clicks on an HTML element?',
    a1: 'onclick',
    a2: 'onmouseclick',
    a3: 'onmouseover',
    a4: 'onchange',
    correct: 'A',
}

var question22 = {
    question: 'How do you declare a JavaScript variable?',
    a1: 'var carName;',
    a2: 'v carName;',
    a3: 'variable carName;',
    a4: 'var = carName;',
    correct: "A",
}

var question23 = {
    question: "Which operator is used to assign a value to a variable?",
    a1: "*",
    a2: "=",
    a3: "+",
    a4: "/",
    correct: "B",
}

var question24 = {
    question: 'What will the following code return: Boolean(10 > 9)',
    a1: "NaN",
    a2: "True",
    a3: "False",
    a4: "Undefined",
    correct: "B",
}

var question25 = {
    question: 'Is JavaScript case-sensitive?',
    a1: 'True',
    a2: 'False',
    a3: '',
    a4: '',
    correct: "A",
}

var fullQuestionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25];

var questionlist = [];

questionlist = questionlist.concat(fullQuestionList);

function countdown() {

    timeLeft = 120

    timeInterval = setInterval(function() {
      timer.textContent = timeLeft+" Seconds Remaining";
      timeLeft--;
      if (timeLeft===-1){
        displayResultScreen();
        clearInterval(timeInterval);
        questionlist = questionlist.concat(fullQuestionList);
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

function cycleQuestion(){

    var randomNumber=Math.random();
    var randomNumberUpToMax=randomNumber * questionlist.length;
    var randomNumberInRange = 0 + randomNumberUpToMax;
    currentQuestion = Math.floor(randomNumberInRange);

    activeQuestion.textContent = questionlist[currentQuestion].question;
    answer1Button.textContent = questionlist[currentQuestion].a1;
    answer2Button.textContent = questionlist[currentQuestion].a2;
    answer3Button.textContent = questionlist[currentQuestion].a3;
    answer4Button.textContent = questionlist[currentQuestion].a4;

    if (answer1Button.textContent===""){
        answer1Button.style.display = "none"
    } else {
        answer1Button.style.display = "block"
    }
    if (answer2Button.textContent===""){
        answer2Button.style.display = "none"
    } else {
        answer2Button.style.display = "block"
    }
    if (answer3Button.textContent===""){
        answer3Button.style.display = "none"
    } else {
        answer3Button.style.display = "block"
    }
    if (answer4Button.textContent===""){
        answer4Button.style.display = "none"
    } else {
        answer4Button.style.display = "block"
    }
}

function startQuiz() {
    countdown();
    header.style.display = "block";
    vhs.style.display = "none";
    startScreen.style.display = "none";
    questions.style.display = "block";
    resultScreen.style.display = "none";
    highscoreScreen.style.display = "none";

    cycleQuestion();
}

function nextQuestion(){

    questionlist.splice(currentQuestion,1);

    if (questionlist.length===0) {
        displayResultScreen();
        clearInterval(timeInterval);
        questionlist = questionlist.concat(fullQuestionList);
        timer.textContent = "";
      } else {
        cycleQuestion();
    }
}

function correct() {
    result.textContent = "Correct!"
    var guessTimer = setTimeout(function() {
      result.textContent = "";
      clearTimeout(guessTimer);
    },500)
}

function incorrect() {
    result.textContent = "Incorrect!"
    var guessTimer = setTimeout(function() {
      result.textContent = "";
      clearTimeout(guessTimer);
    },500)
}

function guessA(){
    if (questionlist[currentQuestion].correct === "A"){
        score++;
        correct();
    }   else{
        timeLeft = timeLeft-5;
        incorrect();
    }
    console.log(score);
    nextQuestion();
}

function guessB(){
    if (questionlist[currentQuestion].correct === "B"){
        score++;
        correct();
    }   else{
        timeLeft = timeLeft-5;
        incorrect();
    }
    console.log(score);
    nextQuestion();
}

function guessC(){
    if (questionlist[currentQuestion].correct === "C"){
        score++;
        correct();
    }   else{
        timeLeft = timeLeft-5;
        incorrect();
    }
    console.log(score);
    nextQuestion();
}

function guessD(){
    if (questionlist[currentQuestion].correct === "D"){
        score++;
        correct();
    }   else{
        timeLeft = timeLeft-5;
        incorrect();
    }
    console.log(score);
    nextQuestion();
}

function loadhighscores(){

    one = one + localStorage.getItem("hsInitials");
    two = two + localStorage.getItem("hsScores");

    var highscoreInitials = one.split(",");
    var highscores = two.split(",");
    var currentHighscores = []

    for (var i = 0; i<10; i++){
        var newObject = {
            playerInitials: highscoreInitials[i],
            playerhighscore: +highscores[i],
        };
        currentHighscores.push(newObject);
    }
    console.log(currentHighscores);
}

function displayHighscores(){

    one = one + localStorage.getItem("hsInitials");
    two = two + localStorage.getItem("hsScores");

    var highscoreInitials = one.split(",");
    var highscores = two.split(",");
    var currentHighscores = []

    for (var i = 0; i<10; i++){
        var newObject = {
            playerInitials: highscoreInitials[i],
            playerhighscore: +highscores[i],
        };
        currentHighscores.push(newObject);
    }
    console.log(currentHighscores);

    if (currentHighscores[0].playerhighscore>0){
        highscore0.innerText = currentHighscores[0].playerInitials + " - " +currentHighscores[0].playerhighscore;
    } else {
        highscore0.innerText = "";
    }

    if (currentHighscores[1].playerhighscore>0){
        highscore1.innerText = currentHighscores[1].playerInitials + " - " +currentHighscores[1].playerhighscore;
    } else {
        highscore1.innerText = "";
    }

    if (currentHighscores[2].playerhighscore>0){
        highscore2.innerText = currentHighscores[2].playerInitials + " - " +currentHighscores[2].playerhighscore;
    } else {
        highscore2.innerText = "";
    }

    if (currentHighscores[3].playerhighscore>0){
        highscore3.innerText = currentHighscores[3].playerInitials + " - " +currentHighscores[3].playerhighscore;
    } else {
        highscore3.innerText = "";
    }
    
    if (currentHighscores[4].playerhighscore>0){
        highscore4.innerText = currentHighscores[4].playerInitials + " - " +currentHighscores[4].playerhighscore;
    } else {
        highscore4.innerText = "";
    }

    if (currentHighscores[5].playerhighscore>0){
        highscore5.innerText = currentHighscores[5].playerInitials + " - " +currentHighscores[5].playerhighscore;
    } else {
        highscore5.innerText = "";
    }
    
    if (currentHighscores[6].playerhighscore>0){
        highscore6.innerText = currentHighscores[6].playerInitials + " - " +currentHighscores[6].playerhighscore;
    } else {
        highscore6.innerText = "";
    }

    if (currentHighscores[7].playerhighscore>0){
        highscore7.innerText = currentHighscores[7].playerInitials + " - " +currentHighscores[7].playerhighscore;
    } else {
        highscore7.innerText = "";
    }
    
    if (currentHighscores[8].playerhighscore>0){
        highscore8.innerText = currentHighscores[8].playerInitials + " - " +currentHighscores[8].playerhighscore;
    } else {
        highscore8.innerText = "";
    }
    
    if (currentHighscores[9].playerhighscore>0){
        highscore9.innerText = currentHighscores[9].playerInitials + " - " +currentHighscores[9].playerhighscore;
    } else {
        highscore9.innerText = "";
    }
    
}

function submitInitial(){

    one = one + localStorage.getItem("hsInitials");
    two = two + localStorage.getItem("hsScores");

    var highscoreInitials = one.split(",");
    var highscores = two.split(",");
    var currentHighscores = []

    for (var i = 0; i<10; i++){
        var newObject = {
            playerInitials: highscoreInitials[i],
            playerhighscore: +highscores[i],
        };
        currentHighscores.push(newObject);
    }
    console.log(currentHighscores);

    var newScore = {
        playerInitials: initialsInput.value,
        playerhighscore: +score,
    }

    for (var i=0; i<10; i++){
        if (score>currentHighscores[i].playerhighscore){
            currentHighscores.splice(i,0,newScore);
            {break};
        }
    }

    currentHighscores.pop();

    if (currentHighscores[0].playerhighscore>0){
        highscore0.innerText = currentHighscores[0].playerInitials + " - " +currentHighscores[0].playerhighscore;
    } else {
        highscore0.innerText = "";
    }

    if (currentHighscores[1].playerhighscore>0){
        highscore1.innerText = currentHighscores[1].playerInitials + " - " +currentHighscores[1].playerhighscore;
    } else {
        highscore1.innerText = "";
    }

    if (currentHighscores[2].playerhighscore>0){
        highscore2.innerText = currentHighscores[2].playerInitials + " - " +currentHighscores[2].playerhighscore;
    } else {
        highscore2.innerText = "";
    }

    if (currentHighscores[3].playerhighscore>0){
        highscore3.innerText = currentHighscores[3].playerInitials + " - " +currentHighscores[3].playerhighscore;
    } else {
        highscore3.innerText = "";
    }
    
    if (currentHighscores[4].playerhighscore>0){
        highscore4.innerText = currentHighscores[4].playerInitials + " - " +currentHighscores[4].playerhighscore;
    } else {
        highscore4.innerText = "";
    }

    if (currentHighscores[5].playerhighscore>0){
        highscore5.innerText = currentHighscores[5].playerInitials + " - " +currentHighscores[5].playerhighscore;
    } else {
        highscore5.innerText = "";
    }
    
    if (currentHighscores[6].playerhighscore>0){
        highscore6.innerText = currentHighscores[6].playerInitials + " - " +currentHighscores[6].playerhighscore;
    } else {
        highscore6.innerText = "";
    }

    if (currentHighscores[7].playerhighscore>0){
        highscore7.innerText = currentHighscores[7].playerInitials + " - " +currentHighscores[7].playerhighscore;
    } else {
        highscore7.innerText = "";
    }
    
    if (currentHighscores[8].playerhighscore>0){
        highscore8.innerText = currentHighscores[8].playerInitials + " - " +currentHighscores[8].playerhighscore;
    } else {
        highscore8.innerText = "";
    }
    
    if (currentHighscores[9].playerhighscore>0){
        highscore9.innerText = currentHighscores[9].playerInitials + " - " +currentHighscores[9].playerhighscore;
    } else {
        highscore9.innerText = "";
    }
    
    //works until here

    localStorage.setItem("hsInitials", currentHighscores[0].playerInitials + "," + currentHighscores[1].playerInitials + "," + currentHighscores[2].playerInitials + "," + currentHighscores[3].playerInitials + "," + currentHighscores[4].playerInitials + "," + currentHighscores[5].playerInitials + "," + currentHighscores[6].playerInitials + "," + currentHighscores[7].playerInitials + "," + currentHighscores[8].playerInitials + "," + currentHighscores[9].playerInitials);
    localStorage.setItem("hsScores", currentHighscores[0].playerhighscore + "," + currentHighscores[1].playerhighscore + "," + currentHighscores[2].playerhighscore + "," + currentHighscores[3].playerhighscore + "," + currentHighscores[4].playerhighscore + "," + currentHighscores[5].playerhighscore + "," + currentHighscores[6].playerhighscore + "," + currentHighscores[7].playerhighscore + "," + currentHighscores[8].playerhighscore + "," + currentHighscores[9].playerhighscore);



    score = 0;

    displayhighscoreScreen();
}

function clearHighscores(){

    localStorage.setItem("hsInitials","");
    localStorage.setItem("hsScores","");

        highscore0.innerText = "";
        highscore1.innerText = "";
        highscore2.innerText = "";
        highscore3.innerText = "";
        highscore4.innerText = "";
        highscore5.innerText = "";
        highscore6.innerText = "";
        highscore7.innerText = "";
        highscore8.innerText = "";
        highscore9.innerText = "";

    
}

function displayResultScreen() {
    header.style.display = "block";
    vhs.style.display = "none";
    startScreen.style.display = "none";
    questions.style.display = "none";
    resultScreen.style.display = "block";
    highscoreScreen.style.display = "none";
}

function displayhighscoreScreen() {
    displayHighscores();
    header.style.display = "none";
    vhs.style.display = "none";
    startScreen.style.display = "none";
    questions.style.display = "none";
    resultScreen.style.display = "none";
    highscoreScreen.style.display = "block";
}



loadhighscores();

startScreenView();

vhsButton.addEventListener("click",displayhighscoreScreen);
tryAgain.addEventListener("click", startScreenView);
startQuizButton.addEventListener("click", startQuiz);
submit.addEventListener("click", submitInitial);
answer1Button.addEventListener("click", guessA);
answer2Button.addEventListener("click", guessB);
answer3Button.addEventListener("click", guessC);
answer4Button.addEventListener("click", guessD);
clearScores.addEventListener("click", clearHighscores)