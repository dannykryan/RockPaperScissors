// cacheing the DOM
let playerScore = 0;
let botScore = 0;

const playerScore_span = document.getElementById("playerscore");
const botScore_span = document.getElementById("botscore");
const scoreBox_div = document.getElementById("score-box");
const playerFace_div = document.getElementById("playerbox");
const botFace_div = document.getElementById("botbox");
const result_h3 = document.getElementById("result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getBotChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function win() {
    playerScore++;
    console.log("win");
    console.log("your score: " + playerScore + ", bot score: " + botScore);
}

function lose() {
    botScore++;
    console.log("You Lose. Pathetic.")
    console.log("your score: " + playerScore + ", bot score: " + botScore);
}

function draw() {
    console.log("Round Draw. Try again.");
}

function game(userChoice) {
    const botChoice = getBotChoice();
    switch(userChoice + botChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

game();

function main() {
rock_div.addEventListener('click', function() {
    game("r");
})
paper_div.addEventListener('click', function() {
    game("p");
})
scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();




// const selectionButtons = document.querySelectorAll('[data-selection]')

// // Add event listener for each button - on 'click; listens for event ('e')
// selectionButtons.forEach(selectionButton => {
//     selectionButton.addEventListener('click', e => {
//         const selectionName = selectionButton.dataset.selection
//         makeSelection(selectionName)
//     })
// })

// function makeSelection(selection) {
//     console.log(selection);
// }