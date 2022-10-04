// cacheing the DOM
const playerScore = 0;
const botScore = 0;

const playerScore_span = document.getElementById("playerscore");
const botScore_span = document.getElementById("botscore");

const scoreBox_div = document.getElementById("score-box");


const selectionButtons = document.querySelectorAll('[data-selection]')

// Add event listener for each button - on 'click; listens for event ('e')
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection);
}