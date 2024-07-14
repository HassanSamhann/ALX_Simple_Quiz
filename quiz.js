// function  checkAnswer() {
//     let correctAnswer  = "4" ; 
    
//     let selectedOption = document.querySelector("input[name='quiz']:checked");
//     let  userAnswer = selectedOption.value ;
    
    
//     if(userAnswer === correctAnswer){
//         document.getElementById("feedback").textContent = "Correct! Well done." ; 

//     }else{
//         document.getElementById("feedback").textContent = "That's incorrect. Try again!" ;
//     }; 

// };

// document.getElementById("submit-answer").addEventListener('click', checkAnswer) ; 

const radioInputs = document.querySelectorAll("input[name='quiz']"),
submitBtn = document.getElementById("submit-answer"),
feedback = document.getElementById('feedback');

submitBtn.addEventListener("click" , _ => {
    // get the checked input----
    let userAnswer = parseFloat(document.querySelector("input[name='quiz']:checked").value);

    // // loop on radioInputs to get the checked value-----
    // radioInputs.forEach(input => {
    //     // check on inputs and assign the value----
    //     if(input.checked) userAnswer = input.value;
    // })
    checkAnswer(userAnswer);
});


function checkAnswer (userAnswer) {
    const correctAnswer  = 4;
    // return feedback---
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    }
    else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}