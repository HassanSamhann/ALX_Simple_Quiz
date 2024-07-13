let submit= document.getElementById("submit-answer"); 

function  checkAnswer() {
    // Function body
    let feedback = document.getElementById("feedback"); 
    let userAnswer = document.querySelector('input[name="quiz"]:checked');
    console.log(userAnswer);
    
    let correctAnswer  = "4" ; 

    if(userAnswer.value === correctAnswer){
        feedback.textContent = "Correct! Well done." ; 

    }else{
        feedback.textContent = "That's incorrect. Try again!" ;
    }

}

submit.addEventListener('click', checkAnswer)

