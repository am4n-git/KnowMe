var read = require("readline-sync");
const chalk = require('chalk');
const log = console.log;
var score = 0;
var correct=0;

var user = read.question("Whats your name? ");
log("Welcome "+ chalk.bgBlue(user.toUpperCase()) + "!!\nDo you know "+chalk.bold.green.underline('Aman')+ " ,let's test it out..")


function play(question,answer)
{
  var useranswer = read.question(question).toLowerCase();
  
  if(useranswer === answer)
  {
    log(chalk.bold.blueBright('Right'));
    score++;
    correct++;
  }

  else
  {
    log(chalk.bold.redBright('Wrong!!'));  
  }

  
}

var questions = 
[
  {
    question: "Where do I live? ", 
    answer: "jaipur"
  },

  {
    question: "What's my last name? ", 
    answer: "raj"
  },
  {
    question: "My favourite lang? ", 
    answer: "python"
  },
  {
    question: "Do I love playing games? ", 
    answer: "yes"
  },
  {
    question: "Favourite IPL team? ", 
    answer: "mi"
  }
];

function retry()
{
  var ret = read.question("Wanna Retry? y/n :  ").toUpperCase();
  if (ret==='Y')
  {
    main();
  }
  else if(ret==='N')
  {
    console.log("Exit")
  }
  else
  {
    console.log("Invalid Input")
    r();
  }

}

function main()
{
  for(var i =0; i<questions.length; i++)
  {
    play(questions[i].question, questions[i].answer)
    console.log("Your current score: "+ score);
  }
}

function r()
{
  if(score<=3)
  {
  score=0;
  retry();
  }
}

var highscore = [
  {
  name: "Aman",
  score: 4
  },
  {
  name: "Raj",
  score: 3
  }
]

main();
retry();
console.log("Checkout the highscores :- ")
for(var i=0; i<highscore.length; i++ ){
  console.log(highscore[i].name + ": "+ highscore[i].score)
}

console.log("Your Final Score: "+ score)





