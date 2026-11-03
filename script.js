// Comparison version: console game with five valid rounds, without a UI.
// Reference only: index.html still loads script.js, not this file.

const VALID_CHOICES = ["rock", "paper", "scissors"];
const TOTAL_ROUNDS = 5;

function getComputerChoice() {
  const randomNumber = Math.random() * 3;

  if (randomNumber < 1) {
    return "rock";
  } else if (randomNumber < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter Rock, Paper or Scissors...");

  if (choice === null) {
    return null;
  }

  return choice.trim().toLowerCase();
}

// Receives valid choices and returns a result without changing scores.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "human";
  }

  return "computer";
}

let humanScore = 0;
let computerScore = 0;

function updateScore(result) {
  if (result === "human") {
    humanScore += 1;
  } else if (result === "computer") {
    computerScore += 1;
  }

  scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

function getGameWinner() {
  if (humanScore >= 5) {
    return "human";
  } else if (computerScore >= 5) {
    return "computer";
  } else {
    return null;
  }
}

function displayResult(winner, result) {
  if (winner === "human") {
    results.textContent = "You won the game";
  } else if (winner === "computer") {
    results.textContent = "Computer won the game";
  } else {
    results.textContent = `Round result: ${result}`;
  }
}

function handleRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  updateScore(result);
  const winner = getGameWinner();
  displayResult(winner, result);
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score");

rockButton.addEventListener("click", () => {
  handleRound("rock");
});

paperButton.addEventListener("click", () => {
  handleRound("paper");
});

scissorsButton.addEventListener("click", () => {
  handleRound("scissors");
});
