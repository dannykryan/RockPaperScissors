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
    playerScore_span.innerHTML = playerScore;
    botScore_span.innerHTML = botScore;
    result_h3.innerHTML = "You Win This Round!"
}

function lose() {
    botScore++;
    playerScore_span.innerHTML = playerScore;
    botScore_span.innerHTML = botScore;
    result_h3.innerHTML = "You Lose This Round."
}

function draw() {
    result_h3.innerHTML = "Round Draw. Try Again."
}

var botChoice = undefined;

function game(userChoice) {
    botChoice = getBotChoice();
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
    return botChoice;
}

game();

function botFace() {
    if(botChoice == "r") {
        botFace_div.innerHTML = "&#9994;"; 
    }
    else if(botChoice == "p") {
        botFace_div.innerHTML = "&#9995;";
    }
    else {
        botFace_div.innerHTML = "&#9996;"; 
    }
}

function main() {
rock_div.addEventListener('click', function() {
    game("r");
    playerFace_div.innerHTML = "&#9994;";
    botFace();
})
paper_div.addEventListener('click', function() {
    game("p");
    playerFace_div.innerHTML = "&#9995;";
    botFace();
})
scissors_div.addEventListener('click', function() {
    game("s");
    playerFace_div.innerHTML = "&#9996;";
    botFace();
})
}

main();