let list = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
	return list[Math.floor((Math.random()*list.length))];
  }

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
	console.log("You Win! Rock beats Scissors.");
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
	console.log("You Lose! Paper beats Rock.");
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
	console.log("Round Draw!");
} else if(playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
	console.log("You Lose. Scissors beats Paper");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
	console.log("Round Draw!");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
	console.log("You Win! Paper beats Rock.");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
	console.log("Round Draw");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
	console.log("You Win! Scissors beats Paper.");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
	console.log("You Lose! Rock beats Scissors.");
} else {
    console.log("try again");
}
}

for (let i = 0; i < 5; i++) {
const playerSelection = prompt("Rock, Paper or Scissors", "Make a Choice");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
}