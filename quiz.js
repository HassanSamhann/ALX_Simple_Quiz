let submit= document.getElementById("submit-answer"); 

function  checkAnswer() {
    // Function body
    let feedback = document.getElementById("feedback"); 
    let Answer = document.querySelector('input[name="quiz"]:checked');
   let  userAnswer = Answer.value ;
    
    let correctAnswer  = "4" ; 

    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done." ; 

    }else{
        feedback.textContent = "That's incorrect. Try again!" ;
    }

}

submit.addEventListener('click', checkAnswer) ; 

