const cardarray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];

cardarray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const cardChosen = [];
const cardChosenID = [];

function createBoard() {
    for (let i = 0; i < cardarray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        gridDisplay.appendChild(card);
    }
}

function flipcard() {
    const cardID = this.getAttribute('data-id');
    cardChosen.push(cardarray[cardID].name);
    cardChosenID.push(cardID);
    this.setAttribute('src', cardarray[cardID].img);
    if (cardChosen.length === 2) {
        setTimeout(checkForMatch, 500); // Delay to show the second card before checking for a match.
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const [firstCardID, secondCardID] = cardChosenID;
    if (cardChosen[0] === cardChosen[1] && firstCardID !== secondCardID) {
        alert('You found a match!');
        cards[firstCardID].setAttribute('src', 'images/white.png');
        cards[secondCardID].setAttribute('src', 'images/white.png');
    } else {
        cards[firstCardID].setAttribute('src', 'images/blank.png');
        cards[secondCardID].setAttribute('src', 'images/blank.png');
        alert('Try again.');
    }
    cardChosen.length = 0;
    cardChosenID.length = 0;
}

createBoard();
