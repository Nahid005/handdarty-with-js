// const countEl = document.querySelector(".count-people");
// const countList = document.querySelector(".count-list")

// let count = 0;

// function increment() {
//     count += 1;
//     countEl.innerHTML = count;
// }

// function save() {
//     const currentCount = count + " - ";
//     countList.textContent += currentCount;

//     count = 0;
//     countEl.innerHTML = count;
// }



// 22
// 18
// 65
// My points: 59
// 4
// 1114

// const firstCard = 5;
// const secondCard = 3;

// const sum = firstCard + secondCard;

// if(sum < 21) {
//     console.log("Do you wont to draw a new card?")
// }else if(sum === 21) {
//     console.log("Yeah Black Jak...")
// }else if(sum > 21) {
//     console.log("You are out of of the game!")
// }


const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardEl = document.querySelector(".card-el");
const playerEl = document.querySelector("#player-el");

let player = {
    name: "Nahid Hassan",
    chips: 150, 
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

playerEl.textContent = "Player Name:" + " " + player.name + " " + "$" + player.chips

function startGame() {
    isAlive = true;
    let firstCard = getRandomNum();
    let secondCard = getRandomNum();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function getRandomNum() {
    const randomNum = Math.floor(Math.random() * 13) + 1;
    if(randomNum === 1) {
        return 11;
    }else if(randomNum > 10) {
        return 10;
    }else {
        return randomNum;
    }
}

function renderGame() {
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    }else if(sum === 21) {
        message = "Wohoo! you've got Blackjack!"
        hasBlackJack = true;
    }else {
        message = "You're out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message;
    sumEl.textContent = "sum:" + sum;
    cardEl.textContent = "Cards: ";

    for(let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
 }


 function newCard() {
    if(isAlive && hasBlackJack === false) {
        let card = getRandomNum();
        sum += card;
        cards.push(card);
        renderGame();
    }
 }
