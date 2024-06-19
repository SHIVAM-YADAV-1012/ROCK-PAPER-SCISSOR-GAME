let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
 const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = ("Draw Game");
    msg.style.backgroundColor = " rgb(4, 1, 27)";
 };

 const showWinner = (userWine, userChoice, compchoice) => {
    if (userWine){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = `You lose , ${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 };

const playGmae = (userChoice) => {
    //Generate computer choice
    console.log("user choice = ", userChoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

     if ( userChoice === compchoice) {
        //draw game
        drawGame();
     }else{
        let userWine = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWine = compchoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //scissor,rock
             userWine = compchoice === "scissor" ? false :true;
        }   else {
             //rock,paper
           userWine = compchoice === "rock" ? false : true;
            }
            showWinner(userWine,userChoice,compchoice);
        
     }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked",choiceID);
        playGmae(userChoice);
    });
});
