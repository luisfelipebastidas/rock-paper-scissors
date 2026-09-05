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

function getComputerChoice() {
  const randomNumber = Math.random() * 3;
  if (randomNumber >= 0 && randomNumber < 1) {
    return "Rock";
  } else if (randomNumber >= 1 && randomNumber < 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

console.log(getComputerChoice());

// function that opens a prompt so the user can input his choice
// return the value

function getHumanChoice() {
  return prompt("Enter Rock, Paper or Scissors...");
}

console.log(getHumanChoice());
