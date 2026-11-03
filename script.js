let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score");

// Returns a random choice: "rock", "paper", or "scissors", with equal probability.
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

// Compares two valid choices and returns the round outcome: "human", "computer", or "tie".
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

// Adds a point to the round winner and updates the displayed scores; ties add no points.
function updateScore(result) {
  if (result === "human") {
    humanScore += 1;
  } else if (result === "computer") {
    computerScore += 1;
  }

  scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

// Returns "human" or "computer" at five or more points, or null if the game is ongoing.
function getGameWinner() {
  if (humanScore >= 5) {
    return "human";
  } else if (computerScore >= 5) {
    return "computer";
  } else {
    return null;
  }
}

// Displays the game winner if there is one; otherwise, displays the round outcome.
function displayResult(winner, result) {
  if (winner === "human") {
    results.textContent = "You won the game!";
  } else if (winner === "computer") {
    results.textContent = "Computer won the game";
  } else {
    results.textContent = `Round result: ${result}`;
  }
}

// Runs one round for the selected choice, updates scores and results, and ignores clicks after a win.
function handleRound(playerSelection) {
  if (getGameWinner() !== null) {
    return;
  }

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  updateScore(result);

  const winner = getGameWinner();
  displayResult(winner, result);
}

// Each click callback starts a round with its button's choice.
rockButton.addEventListener("click", () => {
  handleRound("rock");
});

paperButton.addEventListener("click", () => {
  handleRound("paper");
});

scissorsButton.addEventListener("click", () => {
  handleRound("scissors");
});
