//data
var questions=[
    {
        question:"which is frontend language?",
        choices:["PHP","REACT js","python"],
        answer:"REACT js"
    },
    {
        question:"which is backend language?",
        choices:["html","express js","sass"],
        answer:"express js"
    },
    {
        question:"which one is javascript library?",
        choices:["PHP","REACT js","python"],
        answer:"REACT js"
    }
]
console.log(questions.length)
//display questions
var currentQuestionIndex=0;
var score=0;
function displayQuestion(){
    if(currentQuestionIndex<questions.length){
        var currentQuestion=questions[currentQuestionIndex];
        document.getElementById("question").innerText=currentQuestion.question;
        for(let i=0;i<currentQuestion.choices.length;i++){
            let button=document.getElementById("btn" +i);
            button.innerText=currentQuestion.choices[i];
            button.onclick=function(){
                checkAnswer(currentQuestion.choices[i])
            }
        }
        document.getElementById("progress").innerText="Question" + " " + (currentQuestionIndex+1) +" "+ "of" +" " + questions.length;
    }else{
        showScore();
    }
}
function checkAnswer(answer){
    var correctAnswer=questions[currentQuestionIndex].answer;
    if(answer===correctAnswer){
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}
function showScore(){
    document.getElementById("quiz").innerHTML=
    "<h1>Quiz completed successfully</h1> <h2>Your score:"
    + score
    +"</h2><a href='index.html'>Take Quiz Again</a>"
}
displayQuestion();
//start count down timer
var timeLeft=60;
//select the countdown element
var countDownelement=document.getElementById("count-down");
function startCountdown(){
    var timer=setInterval(function(){
        if(timeLeft<=0){
            clearInterval(timer);
            countDownelement.innerText="Time's up!!!"
        }else{
            countDownelement.innerText="Time Left:" + timeLeft +"seconds";
            timeLeft--;
        }
    },1000)
}
startCountdown();