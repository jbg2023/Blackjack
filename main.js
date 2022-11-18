  /*----- constants -----*/
let suit = ['♦', '♥', '♣', '♠']
let cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

/*----- state variables -----*/
let deck = [];
let dealerHand = [];
let playerHand = [];
let gameStart = false;
let gameOver = false;
let winner = false;
let dealerScore = 0;
let playerScore = 0;

  /*----- cached elements  -----*/
let display = document.getElementById('display');
let newGame = document.getElementById('newBtn');
let hitBtn = document.getElementById('hitBtn');
let stayBtn = document.getElementById('stayBtn');

  /*----- event listeners -----*/
newGame.addEventListener('click', init());
hitBtn.addEventListener('click', hitMe());
stayBtn.addEventListener('click', stay());

  /*----- functions -----*/
  function makeDeck() {
    deck = [];
    //iterate through suit and value arrays to push each card into deck array
    //pair each card value with a suit
    for (let i = 0; i < cardValue.length; i++) {
      for (let j = 0; j < suit.length; j++) {
        let score = parseInt(cardValue[i]);
        if (cardValue[i] == 'J' || cardValue[i] == 'Q' || cardValue[i] == 'K')
            score = 10;
        if (cardValue[i] == 'A')
            score = 11;
        //array has keys for value and suit of each card
        let card = {Value: cardValue[i], Suit: suit[j], Score: score};
        deck.push(card);
      } 
    } return deck;
}

function init() {

}

function hitMe() {

}

function stay() {

}
