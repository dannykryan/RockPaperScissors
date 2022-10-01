let list = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
	return list[Math.floor((Math.random()*list.length))];
  }

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
	alert("You Win! Rock beats Scissors.");
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
	alert("You Lose! Paper beats Rock.");
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
	alert("Round Draw!");
} else if(playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
	alert("You Lose. Scissors beats Paper");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
	alert("Round Draw!");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
	alert("You Win! Paper beats Rock.");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
	alert("Round Draw");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
	alert("You Win! Scissors beats Paper.");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
	alert("You Lose! Rock beats Scissors.");
} else {
    alert("try again");
}
}

// Plays five rounds:
// for (let i = 0; i < 5; i++) {
// const playerSelection = prompt("Rock, Paper or Scissors", "Make a Choice");
// const computerSelection = getComputerChoice();

// }