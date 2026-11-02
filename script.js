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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  //   for (let round = 1; round <= TOTAL_ROUNDS; round++) {
  //     let selectionHuman = getHumanChoice();

  //     while (selectionHuman !== null && !VALID_CHOICES.includes(selectionHuman)) {
  //       console.log("Invalid choice. Enter rock, paper or scissors.");
  //       selectionHuman = getHumanChoice();
  //     }

  //     if (selectionHuman === null) {
  //       console.log("Game cancelled.");
  //       return;
  //     }

  //     const selectionComputer = getComputerChoice();
  //     const result = playRound(selectionHuman, selectionComputer);

  //     console.log(`ROUND ${round}`);
  //     console.log(
  //       `You chose ${selectionHuman} and the computer chose ${selectionComputer}`,
  //     );

  //     if (result === "tie") {
  //       console.log("It's a tie!");
  //     } else if (result === "human") {
  //       console.log(`You win! ${selectionHuman} beats ${selectionComputer}`);
  //       humanScore += 1;
  //     } else {
  //       console.log(`You lose! ${selectionComputer} beats ${selectionHuman}`);
  //       computerScore += 1;
  //     }

  //     console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  //   }

  //   if (humanScore > computerScore) {
  //     console.log("You win the game!");
  //   } else if (computerScore > humanScore) {
  //     console.log("You lose the game :(");
  //   } else {
  //     console.log("The game ends in a tie!");
  //   }
}

playGame();

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const result = playRound("rock", computerSelection);
  results.textContent = `Round result: ${result}`;
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const result = playRound("paper", computerSelection);
  results.textContent = `Round result: ${result}`;
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const result = playRound("scissors", computerSelection);
  results.textContent = `Round result: ${result}`;
});
