// Cacheing the DOM: //

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

// Readout messages to display at random when the round is won, lost or drew //

function getBotChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function negativeMessages() {
    const messageChoices = ["Don't worry, keep at it!", "Ugh. This is embarassing.", "Is that all you got?", "Please god, no!", "Don't let the bastard win!",
                            "He'll kill us all!", "We're doomed!", "Don't give up your day job, will you?", "It was all for nothing...", "We've made a huge mistake choosing you." ];
    const randomNumber = (Math.floor(Math.random() *10));
    return messageChoices[randomNumber];
}

function positiveMessages() {
    const messageChoices = ["Wow! You're Good.", "You've done this before, haven't you?", "I knew you could do it!", "You've got him on the ropes!", "That's the spirit!",
                            "You're my hero!", "Fast as lightning, god DAMN you're frightning!", "Surely, you are the chosen one!", "Yeah! Kick him in the nuts.. and bolts!", "Pull him limb from limb!"];
    const randomNumber = (Math.floor(Math.random() *10));
    return messageChoices[randomNumber];
}

// disable buttons temporarily after choosing weapon //

function pauseUnpause() {
    let btns = document.querySelectorAll('.btn');
    for(let x of btns) {
        x.classList.toggle("pauseplay");
    }
    }

// Code to run if a round is won, lost or drew //

function win() {
    pauseUnpause()
    playerScore++;
    result_h3.innerHTML = "You Win This Round!";
    setTimeout(function() { playerFace_div.innerHTML = "&#128512;" }, 1500);
    playerScore_span.innerHTML = playerScore;
    botScore_span.innerHTML = botScore;
    if ( playerScore == 5 ) {
        result_h3.innerHTML = "You Win This Round.";
        setTimeout(function() { result_h3.innerHTML = "You did it! Brainbot is defeated. Refresh to play again";}, 1500);
        setTimeout(function() { botFace_div.innerHTML = "&#x1F4A5;" }, 1500);
        setTimeout(function() { playerFace_div.innerHTML = "&#128526;" }, 1500);
    }
    else {
        setTimeout(function() { result_h3.innerHTML = positiveMessages() }, 1500);
        setTimeout(function() { result_h3.innerHTML = "Choose Your Weapon to Continue:" }, 3500);
        setTimeout(function() { playerFace_div.innerHTML = "&#128528;" }, 3500);
        setTimeout(function() { botFace_div.innerHTML = "&#129302;" }, 1500);
        setTimeout(function() { pauseUnpause() }, 3500);
    }
}

function lose() {
    pauseUnpause()
    botScore++;
    result_h3.innerHTML = "You Lose This Round.";
    setTimeout(function() { playerFace_div.innerHTML = "&#128531;" }, 1500);
    playerScore_span.innerHTML = playerScore;
    botScore_span.innerHTML = botScore;
    if ( botScore == 5 ) {
        result_h3.innerHTML = "You Lose This Round.";
        setTimeout(function() { result_h3.innerHTML = "Brainbot has defeated you. Refresh to try again.";}, 1500);
        setTimeout(function() { playerFace_div.innerHTML = "&#128557;" }, 1500);
        setTimeout(function() { botFace_div.innerHTML = "&#129302;" }, 1500);
    }
    else {
    setTimeout(function() { result_h3.innerHTML = negativeMessages() }, 1500);
    setTimeout(function() { result_h3.innerHTML = "Choose Your Weapon to Continue:" }, 3500);
    setTimeout(function() { playerFace_div.innerHTML = "&#128528;" }, 3500);
    setTimeout(function() { botFace_div.innerHTML = "&#129302;" }, 1500);
    setTimeout(function() { pauseUnpause() }, 3500);
    }
}

function draw() {
    pauseUnpause()
    setTimeout(function() { playerFace_div.innerHTML = "&#128528;" }, 1500);
    setTimeout(function() { botFace_div.innerHTML = "&#129302;" }, 1500);
    result_h3.innerHTML = "Round Draw. Try Again."
    setTimeout(function() { result_h3.innerHTML = "Choose Your Weapon to Continue:" }, 1500);
    setTimeout(function() { pauseUnpause() }, 1500);
}

// The following code decides how a round is won, lost or drew //

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

// Changing the bot's face to reflect their weapon choice //

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

// main game function includes player face changing to reflect weapon selection //

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