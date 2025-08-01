const cardsArr = [
    {
        name: "fries",
        img: "image/fries.png",
    },
    {
        name: "cheeseburger",
        img: "image/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "image/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "image/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "image/milkshake.png"
    },
    {
        name: "pizza",
        img: "image/pizza.png"
    },
    {
        name: "fries",
        img: "image/fries.png",
    },
    {
        name: "cheeseburger",
        img: "image/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "image/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "image/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "image/milkshake.png"
    },
    {
        name: "pizza",
        img: "image/pizza.png"
    }
]

cardsArr.sort(() => .5 - Math.random());

const gridEl = document.querySelector(".grid");

let cardChoose = [];
let cardIdChoose = [];
let score = 0;

function createBoard() {
    for(let i = 0; i < cardsArr.length; i++) {
        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", "image/blank.png");
        cardImg.setAttribute("data-id", i);
        cardImg.addEventListener("click", cardFlip);
        gridEl.append(cardImg);
    }
}

function cardFlip() {
    if (cardChoose.length >= 2 || this.getAttribute("src") !== "image/blank.png") return;
    const cardId = this.getAttribute("data-id");
    cardChoose.push(cardsArr[cardId]);
    cardIdChoose.push(cardId);
    this.setAttribute("src", cardsArr[cardId].img);

    if (cardChoose.length === 2) {
        setTimeout(matchCard, 1000);
    }
}

function matchCard() {
    const cards = document.querySelectorAll("img");
    const firstCardId = cardIdChoose[0];
    const secondCardId = cardIdChoose[1];
    const firstCard = cardChoose[0]?.name;
    const secondCard = cardChoose[1]?.name;

    if(firstCard == secondCard) {
        cards[firstCardId]?.setAttribute("src", "image/white.png");
        cards[secondCardId]?.setAttribute("src", "image/white.png");
        cards[firstCardId]?.removeEventListener("click", cardFlip);
        cards[secondCardId]?.removeEventListener("click", cardFlip);

        score += 1;
        document.querySelector("h3").textContent = "Score: " + score

        if (score === cardsArr.length / 2) {
            alert("Congratulations! You won!");
        }
    }else {
        alert("please try again");

        cards[firstCardId]?.setAttribute("src", "image/blank.png");
        cards[secondCardId]?.setAttribute("src", "image/blank.png")
    }

    cardChoose = [];
    cardIdChoose = [];
}

createBoard();