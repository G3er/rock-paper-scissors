"use strict";

//my tries, errors or past code are in comments;
// const choices = ("a, b, c");
// let a = "rock";
// let b = "scissors";
// let c = "paper";

// const choices = ['a', 'b', 'c'];
// const options = ['rock', 'scissors', 'paper'];

// let userChoice = "";
// let computerChoice = "";

// function getComputerChoice()


function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    const ramdomChoice = Math.floor(Math.random() * choices.length);
    return choices[ramdomChoice];
}


function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "rock")) {
                    return " You win! " + playerSelection + " beats " + computerSelection;
                     } else {
                        return " You lose! " + computerSelection + " beats " + playerSelection;
                     }
}

// const playerChoice = prompt("Enter your choice (rock, paper or scissors):").toLowerCase();
//     if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
//             console.log("Invalid Input, try using 'rock' 'paper' or 'scissors'");
//          } else {
//                 const computerChoice = getComputerChoice();
//                 const result = playRound(playerChoice, computerChoice);
//                 console.log(result);
//     }


       function playGame() {
        let playerScore = 0;
        let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerChoice = prompt("Enter your choice (rock, paper or scissors):").toLowerCase(); 
            if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
                console.log("Invalid Input, try using 'rock' 'paper' or 'scissors'");
                round--;
                continue;
            }

            const computerChoice = getComputerChoice();
            const result = playRound(playerChoice, computerChoice);
            console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    console.log("Game over!");
    console.log("Player wins:", playerScore);
    console.log("Computer wins:", computerScore);


}


playGame();