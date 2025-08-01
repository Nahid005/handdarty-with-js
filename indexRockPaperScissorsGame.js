// game plan
// Rock beats scissor 
// Scissor beats papper
// papper beats Rock

const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");

const buttons = document.querySelectorAll(".button");
let userChoice;
let computerCoice;
let result;

buttons.forEach(button => {
    button.addEventListener("click", function (event) {
        userChoice = event.target.id;

        userChoiceDisplay.innerHTML = "User Choice:" + " " + userChoice;
        ComputerChoiceRandom();
        getResult();
    })
})


function ComputerChoiceRandom() {
    const randomNumber = Math.floor(Math.random()* 3) + 1;
    
    if(randomNumber === 1) {
        computerCoice = "rock";
    }else if(randomNumber === 2) {
        computerCoice = "paper";
    }else {
        computerCoice = "scissors"
    }

    computerChoiceDisplay.innerHTML = "Computer Choice: " + " " + computerCoice;
}

// Rock beats scissor 
// Scissor beats papper
// papper beats Rock

function getResult() {
    if(computerCoice === userChoice) {
        result = "It's a drow!"
    }else if(computerCoice === "rock" && userChoice ===  "paper") {
        result = "You win!"
    }else if(computerCoice === "paper" && userChoice ===  "rock") {
        result = "You lost!"
    }else if(computerCoice === "scissors" && userChoice ===  "paper") {
        result = "You lost!"
    }else if(computerCoice === "paper" && userChoice ===  "scissors") {
        result = "You win!"
    }else if(computerCoice === "rock" && userChoice ===  "scissors") {
        result = "You lost!"
    }else if(computerCoice === "scissors" && userChoice ===  "rock") {
        result = "You win!"
    }

    resultDisplay.innerHTML = "Result: " + " " + result;
}