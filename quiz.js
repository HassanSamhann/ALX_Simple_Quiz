let selectedOption = document.querySelector("input[name='quiz']:checked");
let  userAnswer = selectedOption.value ;
s
function  checkAnswer() {
    let correctAnswer  = "4" ; 
    

    if(userAnswer === correctAnswer){
        document.getElementById("feedback").textContent = "Correct! Well done." ; 

    }else{
        document.getElementById("feedback").textContent = "That's incorrect. Try again!" ;
    }; 

};

document.getElementById("submit-answer").addEventListener('click', checkAnswer) ; 

