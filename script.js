const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const gameOver = document.getElementById("gameOver");


let questions = [
    {
        question : "'Never tell me the odds.'",
        imgSrc : "",
        choiceA : "Ackbar",
        choiceB : "Han Solo",
        choiceC : "Darth Vader",
        choiceD : "Obi Wan",
        choiceE : "Yoda",
        correct : "B"
    },{
        question : "'In my experience there is no such thing as luck.'",
        imgSrc : "",
        choiceA : "Ackbar",
        choiceB : "Han Solo",
        choiceC : "Darth Vader",
        choiceD : "Obi Wan",
        choiceE : "Yoda",
        correct : "D"
    },{
        question : "'Its a trap!'",
        imgSrc : "",
        choiceA : "Ackbar",
        choiceB : "Han Solo",
        choiceC : "Darth Vader",
        choiceD : "Obi Wan",
        choiceE : "Yoda",
        correct : "A"
    },{
        question : "'Do. Or do not.  There is no try.'",
        imgSrc : "",
        choiceA : "Ackbar",
        choiceB : "Han Solo",
        choiceC : "Darth Vader",
        choiceD : "Obi Wan",
        choiceE : "Yoda",
        correct : "E"
    },{
        question : "'Great, kid. Don’t get cocky.'",
        imgSrc : "",
        choiceA : "Ackbar",
        choiceB : "Han Solo",
        choiceC : "Darth Vader",
        choiceD : "Obi Wan",
        choiceE : "Yoda",
        correct : "B"
    },{
        question : "'You must unlearn what you have learned.'",
        imgSrc : "",
        choiceA : "Ackbar",
        choiceB : "Han Solo",
        choiceC : "Darth Vader",
        choiceD : "Obi Wan",
        choiceE : "Yoda",
        correct : "D"
    },{
        question : "'I find your lack of faith disturbing.'",
        imgSrc : "",
        choiceA : "Ackbar",
        choiceB : "Han Solo",
        choiceC : "Darth Vader",
        choiceD : "Obi Wan",
        choiceE : "Yoda",
        correct : "C"
    },{
        question : "'The shield is down! Commence attack on the Death Star's main reactor.'",
        imgSrc : "",
        choiceA : "Ackbar",
        choiceB : "Han Solo",
        choiceC : "Darth Vader",
        choiceD : "Obi Wan",
        choiceE : "Yoda",
        correct : "A"
    },{
        question : "'If you strike me down, I shall become more powerful than you can possibly imagine.'",
        imgSrc : "",
        choiceA : "Ackbar",
        choiceB : "Han Solo",
        choiceC : "Darth Vader",
        choiceD : "Obi Wan",
        choiceE : "Yoda",
        correct : "D",
    }

];


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
}

start.addEventListener("click",startQuiz);
gameOver.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
    
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
         
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender(); 
        gameOver.style.display = "block";
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#FFC458";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#bb070e";
}

function scoreRender(){
    scoreDiv.style.display = "block";
    
    const scorePerCent = Math.round(100 * score/questions.length);
    
    let img = (scorePerCent >= 80);
              (scorePerCent >= 60);
              (scorePerCent >= 40);
              (scorePerCent >= 20);
    

    scoreDiv.innerHTML += "<p>"+"You got " + scorePerCent + "% correct"+"</p>";
}
////////////////////////////////////////////////////////////////////////////////////////////
