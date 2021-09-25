var readlineSync = require("readline-sync");

var score = 0;

// array of objects
var questions = [{
  question: "Who is the NeogCamp Mentor?\n",
  answer: "Tanay Pratap"
}, {
  question: "Where does he work?\n",
  answer: "Microsoft"
}, {
  question: "This course is for Web development or cyber security?\n",
  answer: "Web development"
}, {
  question: "Is this course paid or free?\n",
  answer: "paid"
},
{
  question: "Deadline month for level one admission?\n",
  answer: "september"
}];

function welcome() {
 var userName = readlineSync.question("What's your name?\n");

  console.log("\nWelcome "+ userName.toUpperCase() + " to Neogcamp Quiz?\n");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You SCORED: ", score);

}


welcome();
game();
showScores();


