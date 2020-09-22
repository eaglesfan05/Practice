const startButton = document.getElementById("start-button");
//array of elements of class btn
const nextButton = document.getElementsByClassName("btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var userScore = 0;

startButton.addEventListener("click", startGame);
// nextButton.addEventListener("click", () =>{
    // currentQuestionIndex++
    // setNextQuestion()
// });
//stack overflow work around for listening to buttons of the same class
Array.from(nextButton).forEach(function(element) {
    element.addEventListener('click', function(){
        console.log("clicking");
    });
  });

function startGame(){
    console.log("started")
    //hides start button when after clicked//
    startButton.classList.add("hide");
    //generates questions after start is hit
    
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion(){
    resetQuestions();
    showQuestion();
  
};
//function will show next question and increment score
function showQuestion(question) {
    questionElement.innerText = question.question;
    questions.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answers.text;
        button.classList.add =("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            userScore++;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    })
}
//clears out previous answers from buttons
function resetQuestions(){
    nextButton.classList.add("hide")
    while(answerButtons.firstChild){
        answerButtons.removeChild;
        (answerButtons.firstChild);
    }
}

//gives correct answer its correct value
function choseAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
}
if (questions.length > currentQuestionIndex + 1){
    nextButton.classList.remove("hide");
 } else {
     startButton.innerText = "Restart";
     startButton.classList.remove("hide");
 }
nextButton.classList.remove("hide");

let questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answers: [
        {text: "<javascript>", correct: false },
        {text: "<body>", correct: false},
        {text: "<script>", correct: true},            
        {text: "<h1>", correct: false}
    ]
            
},
    {
        question: "Where is the correct place to put the Javascript tag",
        answers: [
            {text: "The <head> tag", correct: false},
            {text: "Either the <head> or the <body> tags", correct: false},
            {text: "The <body> tag", correct: true},
            {text: "There are no rules!", correct: false}
    ]
},
    {
        question: "How do you write 'Hello World' in and alert box",
        answers: [   
        {text: "msgBox('Hello World');", correct: false},
        {text: "msg('Hello World');", correct: false},
        {text: "alertBox('Hello World');", correct: false},
        {text: "alert('Hello World');", correct: true}
    ]
},
    {
        question: "How do you create a function in JavaScript?",
        answers: [     
        {text: "function = myFunction()", correct: true},
        {text: "function myFunction()", correct: false},
        {text: "function:myFunction()", correct: false},
        {text: "myFunction = function", correct: false}
        ]
    }
];