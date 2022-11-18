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

function shuffle() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);//randomly swap place of cards
    let temp = deck[j];
    deck[j] = deck[i];
    deck[i] = temp;
  }
};

function init() {
  deck = makeDeck();
  shuffle(deck);
  dealerHand = [dealCard(), dealCard()];
  playerHand = [dealCard(), dealCard()];
  console.log(deck);
  console.log(dealerHand);
  console.log(playerHand);
  
}

function hitMe() {
  playerHand.push(dealCard());
}

function stay() {
  gameOver = true;
  checkForWinner();
}

function dealCard() {
  return deck.shift();
}

function addCards(hand) {
  let sum = 0;
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
    sum += card.Score
  } return sum;
}

function getScore() {
  dealerScore = addCards(dealerHand);
  playerScore = addCards(playerHand);
}

function checkForWinner() {
  getScore();
  if (gameOver) {
    while (dealerScore < 17) {
      dealerHand.push(dealCard());
      getScore();
    }
  }
  if (playerScore > 21) {
    winner = false;
    gameOver = true;
  } else if (dealerScore > 21) {
    winner = true;
    gameOver = true;
  } else if (gameOver) {
    if (playerScore > dealerScore) {
    winner = true;
  } else {
    winner = false;
  }
 }
}