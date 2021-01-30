//Timer of exam
function timer(){
    var countDownDate = new Date().getTime()+(2*60000);
    var x = setInterval(function() {
    var now = new Date().getTime();
    var diff = countDownDate - now;
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    $("#timer").attr ("value",(120-(minutes*60+seconds)));
    if(minutes == 0 && seconds <= 59  ){
        $("#timer").css("background","  rgb(255, 85, 85)");
    }
    if (diff < 0) {
        clearInterval(x);
        setCookie("timeout","yes");
        setCookie("count",Count());
        setCookie("grade",calculateGrade());
        location.replace("result.html");
    }
    }, 1000);
}
questions = randomArray(questions);
var currentQuestion = 0;
createQuestion(questions,currentQuestion);
//start time 
timer();
//Finish Exam
function calculateGrade(){
    var grade = 0;
    questions.forEach(question => {
        if(question.answered == question.correctAnswerId){
            grade++;
        }
    });
    return grade;
} 
function Count(){
    var count=0;
    return count;
}
//Finish the exam before timeout
$("#finishExam").on("click",function(){
    setCookie("timeout","no");
    setCookie("grade",calculateGrade());
    setCookie("count",Count());
    location.replace("result.html");
});
