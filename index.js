// cacheing the DOM
const playerScore = 0;
const botScore = 0;

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
    console.log(Math.floor(Math.random() * 3));
}

getBotChoice();

function game(userChoice) {
    
}

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