const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getHumanChoice() {
  const choice = prompt("Rock, paper or scissors? ").toLowerCase();
  return choice;
}
