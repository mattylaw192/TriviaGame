
var startButton;
var correctAnswers = 0;
var wrongAnswers = 0;



function timeUp() {

    $("#timerCountText").text("Time's Up!")
    
    };
    


var timer = {
    start: function () {
        alert("test");
        setTimeout(timeUp,1000*5);
        setInterval(function() {
            $('.timerCountText').text((new Date - start) / 1000 + " Seconds");
        }, 1000);

    }

    
};

$(".startButton").on("click", timer.start);














// var questions = {
//     "questionOne": [
//         {
//             "correct":"a man"
//             "incorrect": [
//                 "a squirrel",
//                 "a houseplant",
//                 "Hey now, you're an all star"
//             ]
//         }
//     ]
//     "questionTwo":[
//         {}
//     ]
// }








//quiz questions & Answers//
// var questions {


// // }