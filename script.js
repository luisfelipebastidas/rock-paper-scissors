// What's the problem?
// 1- A function that returns randomly “rock”, “paper” o “scissors”.
// 2- An input for the user play
// 3-

// BREAK IT DOWN
// como hacer que aparezcan valores random? ----> math.random
// como convertirlos a strigs? con if/else
// how to return one of those values? return dentro de if/ else

// how to create an input for the user? -----> prompt?
// what to do with that value? put it in a variable
// How to compare results?

///////////////// SELECTION COMPUTER //////////////////

function getComputerChoice() {
  const randomNumber = Math.random() * 3;
  if (randomNumber >= 0 && randomNumber < 1) {
    return "rock";
  } else if (randomNumber >= 1 && randomNumber < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

const selectionComputer = getComputerChoice();
console.log(selectionComputer);

/////////////////  SELECTION HUMAN //////////////////

function getHumanChoice() {
  return prompt("Enter Rock, Paper or Scissors...");
}

const selectionHuman = getHumanChoice();
console.log(selectionHuman);

///////////////// SCORE //////////////////

let humanScore = 0;
let computerScore = 0;

///////////////// GAME //////////////////

function playRound(humanChoice, computerChoice) {
  const humanLowerCase = humanChoice.toLowerCase();
  if (humanLowerCase === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore += 1;
  } else if (humanLowerCase === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore += 1;
  } else if (humanLowerCase === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore += 1;
  } else if (humanLowerCase === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore += 1;
  } else if (humanLowerCase === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore += 1;
  } else if (humanLowerCase === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper");
    humanScore += 1;
  } else {
    console.log("It's a tie! Play again");
  }
}
