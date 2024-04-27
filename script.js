const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getHumanChoice() {
  const choice = prompt("Rock, paper or scissors? ").toLowerCase();
  return choice;
}

let computerScore = 0;
let humanScore = 0;
let winner;

function playRound(humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    winner = "computer";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    winner = "computer";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    winner = "computer";
  } else if (computerChoice === humanChoice) {
    console.log(`It's a tie!`);
    winner = "tie";
  } else {
    humanScore++;
    winner = "human";
  }
  console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}.`);
  const msg =
    winner === "tie" ? "No one wins! It's a tie." : `Winner is ${winner}.`;
  console.log(msg);
  console.log(`Score ->  (Human) ${humanScore} : ${computerScore} (Computer)`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
