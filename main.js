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
function init() {

}

function hitMe() {

}

function stay() {
  
}