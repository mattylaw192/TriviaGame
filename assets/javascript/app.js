
//Questions & Answers//
var questions = [
    {
        question: "1. Mama, just killed _________. (easy)",
        choice: ["a squirrel", "a man", "a houseplant", "Hey now, you're an all star!"],
        answer: 1
    },

    {
        question: "2. There's vomit on his sweater already, ________. (easy)",
        choice: ["Nelson Bighetti", "somebody once told me the world is going to roll me. I ain't the sharpest tool in the sheeeeed", "call the Vetty. (The wife came up with this one)", "mom's spaghetti"],
        answer: 3
    },

    {
        question: "3. Two pints of booze, tell me are you ________ too? (medium)",
        choice: ["a badfish", "a cuttlefish", "an all star", "a drinker"],
        answer: 0
    },

    {
        question: "4. Hello, I've waited here for you, ____________. (medium)",
        choice: ["for quite some time", "it's a cool place, and they say it gets colder", "everlong", "for about 5 minutes"],
        answer: 2
    },

    {
        question: "5. if I fall back down, you're gonna help me back up again. If I fall back down, you're gonna be my _________.(hard)",
        choice: ["Only shooting stars break the mold", "friend", "Rick Astley", "homie"],
        answer: 2
    },

    {
        question: "6. What the hell is ADD, my friends say _______________. (Easy)",
        choice: ["what's my age again?", "Hey yay yayayay what's going on?", "I should act my age, what's my age again?", "I should play more halo."],
        answer: 2
    },

    {
        question: "7. Hey now, you're an ___________.(Unbelievably difficult. Good luck.)",
        choice: ["All Star", "This isn't the correct answer", "Not this one either", "This one. jk lol"],
        answer: 0

    }


]



var startButton;
var correctAnswers = 0;
var wrongAnswers = 0;
var userGuess = "";
var timerNumber = 5;
var intervalId;
var running = false;





//Timer functions - runTimer decrements timer by 1 second
function runTimer() {
    if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
    }

}


//Decrements timer by 1 second
function decrement() {
    $("#timerCountText").html("<h3>Time Remaining " + timerNumber + "</h3>")
    timerNumber--;

    if (timerNumber === -1) {
        stop();
    }
}

//Creates text that notifies user that time is up
function stop(){
    $("#timerCountText").text("Time's Up!");
    clearInterval(intervalId);
    running = false;    
}


var timer = {
    start: function () {
        alert("Starting Timer");
        timerNumber=5;
        runTimer();
        decrement();    
    }
};

//This starts game on button click
$("#start").on("click", timer.start);




function displayQuestions(){

for (i=0; i < questions.length; i++){
  var questionHeader = $("<h3>").text(questions[i].question);
 $(".questionText").append(questionHeader)
console.log(questions[i].question);

questions[i].choice.forEach(function(options){
    var answerHeader = $("<p>").text(options);
    $(".questionText").append(answerHeader);

})
}


}

displayQuestions();





//Displays questions on 
function startGame() {

    displayQuestions();


};


