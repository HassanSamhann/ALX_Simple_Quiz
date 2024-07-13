let submit= document.getElementById("submit-answer"); 

function  checkAnswer() {
    // Function body
    let feedback = document.getElementById("feedback"); 
    let userAnswer = document.querySelector('input[name="quiz"]:checked');
     userAnswer = userAnswer.value
    
    let correctAnswer  = "4" ; 

    if(userAnswer = correctAnswer){
        feedback.textContent = "Correct! Well done." ; 

    }else{
        feedback.textContent = "That's incorrect. Try again!" ;
    }

}

submit.addEventListener('click', checkAnswer)

