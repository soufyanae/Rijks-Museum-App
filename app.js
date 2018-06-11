function populate() {
    if(quiz.isEnded ()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess ("btn" +i, choices[i]);
        }
        
        showProgress(); 
    }
};

function guess (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        alert("Ga door naar " + paint);
        quiz.guess(guess);
        populate();
    }
   
}



function showProgress() {
    var currentQuestionsNumber = quiz.questionsIndex +1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionsNumber + " of " +quiz.questions.length;
        if (currentQuestionsNumber == 1) {
            paint = "Rembrandt";
        } else if (currentQuestionsNumber == 2) {
            paint = "Vincent";
        } else if (currentQuestionsNumber == 3) {
            paint = "De Nachtwacht";
        }
}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id = 'score'> Your scores: " +quiz.score +"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
    var element = document.getElementById("picture1").style.visibility = "visible";
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("Hoe oud ben jij?", ["A", "B", "C", "D"], "D"),
    new Question("Wat studeer jij?", ["A", "B", "C", "D"], "A"),
    new Question("Wie is rijker?", ["A", "B", "C", "D"], "D"),
    new Question("Hoe ben je zo lelijk?", ["A", "B", "C", "D"], "C"),
    new Question("Hoe oud ben ik?", ["A", "B", "C", "D"], "B")
];

var quiz = new Quiz(questions);


populate();


