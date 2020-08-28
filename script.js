

var pos = 0;
var correct = 0;
var test, test_status, quest, choice, choices, chA, chB, chC, chD;
var answerA = "a";
var i;
var round = 0;
var answer;
var response ="";
var score = 0;
var timeLeft = 120;

// var answerOne = document.getElementById("answerOne");
// answerOne.addEventListener("click",testAnswer);
//       if ( "a" === answer ) { 
//     // increment correct variable and then call renderOneQuestion - and do the increment inside the render function, if they guess wrong then subtract time

//       }
//     else {
//     // subtract time, and move on to the next question by calling renderOneQuestion

//     }

//     } 


// // add same event listener to answers 2, 3, 4 with if statment B/C/D 

function testAnswer(response) {
    if (response === answer) {
        console.log("right answer " + answer)
        score=score+10
        renderOneRound()}

     else {

        console.log("wrong answer")
        renderOneRound()
        timeLeft= timeLeft - 20}

    }   

function nextRound() {
    if(timeLeft>0 && (questArray.length > (round +1))) {

      renderOneRound() }

    else { 

      alert("Game Over")

      }
    }

function saveScore() {


}







// var x = document.getElementById("myBtn");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("click", mySecondFunction);
// x.addEventListener("mouseout", myThirdFunction);








    // function myFunction() {
    // alert("next question")
    // }

//     function mySecondFunction() {
//     document.getElementById("demo").innerHTML += "Clicked!<br>"
//     }

//     function myThirdFunction() {
//     document.getElementById("demo").innerHTML += "Moused out!<br>"
//     }

var startQ = document.getElementById("startBtn");
startQ.addEventListener("click", renderOneRound);

// answer button actions

var answer1 = document.getElementById("answerOne");
  answer1.addEventListener("click", function(){response= "a"; testAnswer(response)});

var answer2 = document.getElementById("answerTwo");
  answer2 .addEventListener("click", function(){response= "b"; testAnswer(response)});

var answer3 = document.getElementById("answerThree");
    answer3 .addEventListener("click", function(){response= "c"; testAnswer(response)});

var answer4 = document.getElementById("answerFour");
answer4.addEventListener("click", function(){response= "d"; testAnswer(response)});


// test navigation button actions

var nextQ = document.getElementById("nextQuestion");
  nextQ.addEventListener("click", nextRound);

var restart = document.getElementById("StartOver");
  restart.addEventListener("click", function(){alert("start over")});

var submitInitials = document.getElementById("submitInitials");
  submitInitials.addEventListener("click", function(){alert("submit Initials")});

var clearHighScores = document.getElementById("clearHighScores");
  clearHighScores.addEventListener("click", function(){alert("clearHighScores")});





// document.getElementById("nextQuestion").addEventListener("click", function(){
// //   alert("Hello World");
// // });


// setting up questions object 

var questArray = [
  {
     question: "Who is Elmer Fudd?",
      choices: {
        a: "a Hunter",
        b: "a Baker",
        c: "a Boater",
        d: "a Fisherman",
      },
      answer: "a"
    },
  {
      question: "who is Bill Gates?",
      choices: {
        a: "a computer programmer",
        b: "a geek",
        c: "2nd richest man in the world",
        d: "your uncle",
      },

      answer: "c"
    },
  {
      question: "What company does Warren Buffet run?",
      choices: {
        a: "Berkshire Hathaway",
        b: "Monsanto",
        c: "General Electric",
        d: "Google",
      },

      answer: "a"
    },
  {
      question: "Where is Machu Pichu located?",
      choices: {
        a: "Brazil",
        b: "Argentina",
        c: "Minneapolis",
        d: "Puru",
      },
      answer: "d"
    }
  ];


// start quiz by initializing time and round count and generating fist set of questions 

function startQuiz() {

    round = 0;
    timeLeft = 120
    renderOneRound();

}


// render a single question round

// renderOneRound()


function renderOneRound() {
    quest= questArray[round].question;
    answer= questArray[round].answer;
    chA= questArray[round].choices.a;
    chB= questArray[round].choices.b;
    chC= questArray[round].choices.c;
    chD= questArray[round].choices.d;

    document.getElementById("question-display").innerHTML = quest;
    document.getElementById("answerOne").innerHTML = chA;
    document.getElementById("answerTwo").innerHTML = chB;
    document.getElementById("answerThree").innerHTML = chC;
    document.getElementById("answerFour").innerHTML = chD;
    
    round=round+1
    }

// var nextRound = document.querySelector("#nextQuestion");



// var startTest = document.querySelector("#StartQuizBtn");

// startTest.addEventListener("click", renderOneRound)


// Add event listener to generate button
    // nextQuestion.addEventListener("click", renderOneRound);



// render questions for all rounds - testing 

// renderQuestions()

// function renderQuestions() {

//   for (i = 0; questArray.length; i++) {

//     question = questArray[i].question;
//     answer = questArray[i].answer;
//     chA = questArray[i].choices.a;
//     chB = questArray[i].choices.b;
//     chC = questArray[i].choices.c;
//     chD = questArray[i].choices.d;



//     console.log("iteration " + i);
//     console.log(question);
//     console.log(answer);
//     console.log(chA);
//     console.log(chB);
//     console.log(chC);
//     console.log(chD);

    // display the answer options












  // the += appends to the data we started on the line above

  // questions-form.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  // questions-form += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  // questions-form += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  // questions-form += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  // questions-form += "<button onclick='checkAnswer()'>Submit Answer</button>";
//   }
// }







// renderTodos();

// // question = document.getElementById(questArray).




// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     todoList.appendChild(li);
//   }
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Re-render the list
//   renderTodos();
// }
