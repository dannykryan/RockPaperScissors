let list = ["Rock", "Paper", "Scissors"];

// this function generates a random number between 0-2 to select R/P/S from 'list' //
function getComputerChoice () {
	return list[Math.floor((Math.random()*list.length))];
  }

// this function compares the player selection to the computer selection and declares the player a winner or loser //
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

// loops the game round //
for (let i = 0; i < 1; i++) {
const playerSelection = prompt("Rock, Paper or Scissors", "Make a Choice");
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
}

// target buttons DOM nodes //
// const rockButton = document.querySelector('.rock');
// const paperButton = document.querySelector('.paper');
// const scissorsButton = document.querySelector('.scissors');

// const rockBtn = document.querySelector('.rock');
// rockBtn.onclick = () => playerSelection = "rock";

// const paperBtn = document.querySelector('.paper');
// paperBtn.onclick = () => playerSelection = "paper";

// const scissorsBtn = document.querySelector('.scissors');
// scissorsBtn.onclick = () => playerSelection = "scissors";

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
  playerSelection("rock");
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
  playerSelection("paper");
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
  console.log("scissors");
});