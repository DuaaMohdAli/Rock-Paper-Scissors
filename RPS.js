let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const draw = () => {
    console.log("Its draw !!");
}

const playGame = (userChoice) => {
        console.log("User's choice =  " , userChoice);
        let compChoice = genCompChoice();
        console.log("Computer's choice =  " , compChoice);

        if(userChoice === compChoice){
            draw();
        }
}

choices.forEach((choice) => {
       choice.addEventListener("click" , () => {
           const userChoice = choice.getAttribute("id");
        //    console.log("choice was clicked" , userChoice);
           playGame(userChoice)
    })
})