
//Questions
function Question(questionId,questionTitle,answers,correctAnswerId){
    this.questionId = questionId;
    this.questionTitle = questionTitle;
    this.answers = answers;
    this.correctAnswerId = correctAnswerId;
    this.answered = 0;
    this.marked = false;
}
//Answers
function Answer(answerId,answerTitle){
    this.answerId = answerId;
    this.answerTitle = answerTitle;
}
//function to create questions
function createQuestion(questions,currentQuestion){
    $("#question-content").html(function(){
        return "<div class='question-area' id='question"+questions[currentQuestion].questionId+"'>"+
                    "<h2 class='questionTitle'>"+(currentQuestion+1)+") "+questions[currentQuestion].questionTitle+"</h2>"+
                    "<h3  class='answer' id='a1' "+answered(questions[currentQuestion],questions[currentQuestion].answers[0].answerId)+" onclick='checkAnswer("+questions[currentQuestion].answers[0].answerId+","+currentQuestion+",this)'>A) "+questions[currentQuestion].answers[0].answerTitle+"</h3>"+
                    "<h3  class='answer' id='a2'"+answered(questions[currentQuestion],questions[currentQuestion].answers[1].answerId)+"onclick='checkAnswer("+questions[currentQuestion].answers[1].answerId+","+currentQuestion+",this)'>B) "+questions[currentQuestion].answers[1].answerTitle+"</h3>"+
                    "<h3  class='answer'id='a3' "+answered(questions[currentQuestion],questions[currentQuestion].answers[2].answerId)+"onclick='checkAnswer("+questions[currentQuestion].answers[2].answerId+","+currentQuestion+",this)'>C) "+questions[currentQuestion].answers[2].answerTitle+"</h3>"+
                    "<h3  class='answer' id='a4' "+answered(questions[currentQuestion],questions[currentQuestion].answers[3].answerId)+"onclick='checkAnswer("+questions[currentQuestion].answers[3].answerId+","+currentQuestion+",this)'>D) "+questions[currentQuestion].answers[3].answerTitle+"</h3>"+
                    "<table class='options'><tr><td><button id='previousQuestion' disabled='true'  onclick='previous("+currentQuestion+")'>Previous</button></td>"+
                    "<td><button id='nextQuestion' onclick='next("+currentQuestion+")'>Next</button></td>"+
                    "<td><button id='markQuestion' onclick='mark("+currentQuestion+")'>Mark</button><td>"
                +"</div>";
    });
}
//Next question 
function next(currentQuestion){
    //Question number less than number of questions
    if(currentQuestion < questions.length -1 ){
        currentQuestion++;
        createQuestion(questions,currentQuestion);
        $("#previousQuestion").css('opacity','1'); 
        $("#previousQuestion").prop('disabled',false); 
    }
    //last question don't do anything
    if(currentQuestion == questions.length -1 ){
        $("#nextQuestion").css('opacity','0.2');
        $("#nextQuestion").prop('disabled',true);  
    }

}
//Previous question
function previous(currentQuestion){
    
    if(currentQuestion > 0 ){
        currentQuestion--;
        createQuestion(questions,currentQuestion)
        $("#previousQuestion").css('opacity','1');
        $("#previousQuestion").prop('disabled',false);  
    }
    if(currentQuestion == 0 ){
        $("#previousQuestion").css('opacity','0.2');
        $("#previousQuestion").prop('disabled',true);  
    }
}
//Go to specific question 
function goToQuestion(currentQuestion,target){
    $(target).toggle(500);
    questions[currentQuestion].marked = false;
    $(target).remove(500);
    //First Question
    if(currentQuestion == 0 ){
        previous(currentQuestion+1);
    }else{
        next(currentQuestion-1);
    }
    
}
//markquestion 
function mark(currentQuestion){
    $("#markedQuestions").append(function(){
        //question is already marked
        if(!questions[currentQuestion].marked){
            questions[currentQuestion].marked = true;
            return "<button class='markedQuestion' onclick='goToQuestion("+currentQuestion+",this)'>Question "+(currentQuestion+1)+"</button>";
        }
    });  
}
//check if answer true or not
function checkAnswer(answerId,currentQuestion,target){
    $(".answer").css("background-color"," rgb(45, 86, 175)");
    $(".answer").css("color","rgb(245, 232, 119)");
    $(target).css({"background-color":"  rgb(245, 232, 119)","color":"rgb(45, 86, 175)"});
    if(answerId == questions[currentQuestion].correctAnswerId){
        console.log("True");
    }else{
        console.log("false");
    }
    //make question answered
    questions[currentQuestion].answered = answerId;
    console.log(questions[currentQuestion].correctAnswerId);
}
//if answer true make it green background
function answered(question,answerId){
    if(question.answered == answerId ){
        return "style='background-color: rgb(245, 232, 119); color: rgb(45, 86, 175)'";
    }else{
        console.log("not answered");        
        return "style='background-color: rgb(45, 86, 175)'";
    }
}
function randomArray(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}
//all questions
var questions = new Array();
//Answers for question 1
var questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"with");
questionAnswers[1] = new Answer(2,"towards");
questionAnswers[2] = new Answer(3,"for");
questionAnswers[3] = new Answer(4,"None of these");
questionAnswers = randomArray(questionAnswers);
//Question 1
questions[0] = new Question(1,"Her thinking leans ____ democracy.",questionAnswers,2);
//Answers for question 2
questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"because of");
questionAnswers[1] = new Answer(2,"because off");
questionAnswers[2] = new Answer(3,"on");
questionAnswers[3] = new Answer(4,"for");
questionAnswers = randomArray(questionAnswers);
//Question 2 
questions[1] = new Question(2,"He got too tired _____ over work.",questionAnswers,1);
//Answers for question 3
questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"with regard of");
questionAnswers[1] = new Answer(2,"with regard on");
questionAnswers[2] = new Answer(3,"with regard to");
questionAnswers[3] = new Answer(4,"None of these");
questionAnswers = randomArray(questionAnswers);
//question 3 
questions[2] = new Question(3,"_____ his principles, he has to be very careful.",questionAnswers,3);
//Answers for question 4 
questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"went");
questionAnswers[1] = new Answer(2,"running");
questionAnswers[2] = new Answer(3,"moves");
questionAnswers[3] = new Answer(4,"going");
questionAnswers = randomArray(questionAnswers);
//question 4 
questions[3] = new Question(4,"The train ____ as fast as the bus.",questionAnswers,3);
//Answers for question 5
questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"went");
questionAnswers[1] = new Answer(2,"going");
questionAnswers[2] = new Answer(3,"gone");
questionAnswers[3] = new Answer(4,"go");
questionAnswers = randomArray(questionAnswers);
//question 5 
questions[4] = new Question(5,"He was seen _____ to the school.",questionAnswers,2);
//Answers for question 6
questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"sitting");
questionAnswers[1] = new Answer(2,"has been sitting");
questionAnswers[2] = new Answer(3,"has been sit");
questionAnswers[3] = new Answer(4,"has sit");
questionAnswers = randomArray(questionAnswers);
//question 6 
questions[5] = new Question(6,"She ____ in the sun for 1 hour.",questionAnswers,2);
//Answers for question 7
questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"will");
questionAnswers[1] = new Answer(2,"was");
questionAnswers[2] = new Answer(3,"is");
questionAnswers[3] = new Answer(4,"are");
questionAnswers = randomArray(questionAnswers);
//question 7
questions[6] = new Question(6,"____ it help you in your studies ?",questionAnswers,1);
//Answers for question 8
questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"did");
questionAnswers[1] = new Answer(2,"was");
questionAnswers[2] = new Answer(3,"have");
questionAnswers[3] = new Answer(4,"has");
questionAnswers = randomArray(questionAnswers);
//question 8
questions[7] = new Question(8,"I ____ never seen such a picture before.",questionAnswers,3);
//Answers for question 9
questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"On");
questionAnswers[1] = new Answer(2,"At");
questionAnswers[2] = new Answer(3,"For");
questionAnswers[3] = new Answer(4,"In");
questionAnswers = randomArray(questionAnswers);
//question 9
questions[8] = new Question(9,"I was delighted _____ her answer.",questionAnswers,2);
//Answers for question 10
questionAnswers = new Array();
questionAnswers[0] = new Answer(1,"off");
questionAnswers[1] = new Answer(2,"of");
questionAnswers[2] = new Answer(3,"from");
questionAnswers[3] = new Answer(4,"with");
questionAnswers = randomArray(questionAnswers);
//question 10
questions[9] = new Question(10,"I assure you _____ your safety.",questionAnswers,2);