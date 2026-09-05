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

/////////////////  SELECTION HUMAN //////////////////

function getHumanChoice() {
  return prompt("Enter Rock, Paper or Scissors...");
}

///////////////// GAME //////////////////

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

  for (let i = 1; i <= 5; i++) {
    const selectionComputer = getComputerChoice();
    const selectionHuman = getHumanChoice();
    console.log(`ROUND ${i}`);
    console.log(
      `You chose ${selectionHuman} and the computer chose ${selectionComputer}`,
    );

    playRound(selectionHuman, selectionComputer);

    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game :(");
  } else {
    console.log("The game ends in a tie!");
  }
}

playGame();
