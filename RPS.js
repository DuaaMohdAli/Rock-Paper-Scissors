let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result-box");
const msgContainer = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const draw = () => {
    msg.innerText = "Its draw !!!";
}


const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win !!";
        msgContainer.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose !!";
        msgContainer.style.backgroundColor = "red";
    }
}






const playGame = (userChoice) => {
        // console.log("User's choice =  " , userChoice);
        let compChoice = genCompChoice();
        // console.log("Computer's choice =  " , compChoice);

        if(userChoice === compChoice){
            draw();
        }else{
            let userWin = true ;
            if(userChoice === "rock"){
                //compchoice will be either paper or scissor
                userWin =   compChoice === "paper" ? false:true ;
            }else if(userChoice === "paper"){
                // either scissor or rock
                userWin = compChoice === "scissor" ? false : true ;
            }else{
                // if it scissor , either rock or paper 
                userWin = compChoice === "rock" ? false : true ;
            }

            showWinner(userWin);
           
        }
}

choices.forEach((choice) => {
       choice.addEventListener("click" , () => {
           const userChoice = choice.getAttribute("id");
        //    console.log("choice was clicked" , userChoice);
           playGame(userChoice)
    })
})