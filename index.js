let options = ["Rock", "Paper", "Scissors"];
let computerSelection = options[(Math.random() * options.length) | 0];
console.log(computerSelection);

let playerSelection = prompt("Rock, Paper or Scissors");

const playRound = function(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
	console.log("You Win This Round");
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
	console.log("You Lose This Round");
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
	console.log("Round Draw!");
} else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
	console.log("You Lose This Round");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
	console.log("Round Draw!");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
	console.log("You Win This Round");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
	console.log("Round Draw");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
	console.log("You Win This Round");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
	console.log("You Lose This Round");
} else {
    console.log("try again");
}
}

playRound(playerSelection, computerSelection);

