let suit = ['♦', '♥', '♣', '♠']
let cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let deck = [];
let dealerHand = [];
let playerHand = [];
let gameStart = false;
let gameOver = false;
let winner = false;
let dealerScore = 0;
let playerScore = 0;
let tieGame = false;

const display = document.getElementById('display');
const newGame = document.getElementById('newBtn');
const hitBtn = document.getElementById('hitBtn');
const stayBtn = document.getElementById('stayBtn');
const dealerCards = document.getElementById('dealerCards');
const playerCards = document.getElementById('playerCards');

newGame.addEventListener('click', function() {
  gameStart = true;
  gameOver = false;
  winner = false;
  hitBtn.style.display = "inline"
  stayBtn.style.display = "inline"
  deck = makeDeck();
  shuffle(deck);
  dealerHand = [dealCard(), dealCard()];
  playerHand = [dealCard(), dealCard()];
  console.log(deck);
  console.log(dealerHand);
  console.log(playerHand);
  displayGame()
});
hitBtn.addEventListener('click', function() {
  playerHand.push(dealCard());
  checkForWinner();
  displayGame();
});
stayBtn.addEventListener('click', function() {
  gameOver = true;
  checkForWinner();
  displayGame();
});

  function makeDeck() {
    deck = [];
    for (let i = 0; i < cardValue.length; i++) {
      for (let j = 0; j < suit.length; j++) {
        let score = parseInt(cardValue[i]);
        if (cardValue[i] == 'J' || cardValue[i] == 'Q' || cardValue[i] == 'K')
            score = 10;
        if (cardValue[i] == 'A')
            score = 1;
        let card = {Value: cardValue[i], Suit: suit[j], Score: score};
        deck.push(card);
      }
    } return deck;
}

function shuffle() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[j];
    deck[j] = deck[i];
    deck[i] = temp;
  }
}

function dealCard() {
  return deck.shift();
}

function addCards(hand) {
  let sum = 0;
  let ace = false;
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
    sum += card.Score;
    if (card.Value === 'A') {
      ace = true;
    }
  } if (ace && sum + 10 <= 21) {
      return sum + 10;
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
    tieGame = false;
  } else if (dealerScore > 21) {
    winner = true;
    gameOver = true;
    tieGame = false;
  } else if (gameOver) {
    if (playerScore > dealerScore) {
    winner = true;
    tieGame = false;
  } else if (playerScore === dealerScore) {
    gameOver = true;
    tieGame = true;
  }
    else {
    winner = false;
  }
 }
}

displayGame()
function displayGame() {
  if (!gameStart) {
    display.innerText = "Welcome to Blackjack!\n Click 'New Game' to deal cards.";
    hitBtn.style.display = "none"
    stayBtn.style.display = "none"
    return;
  }
  while (dealerCards.firstChild) {
    dealerCards.removeChild(dealerCards.lastChild)
  }
 
  for (let i = 0; i < dealerHand.length; i++) {
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = dealerHand[i].Value + ' ' + dealerHand[i].Suit;
    dealerCards.appendChild(cardDiv);
    if (dealerHand[i].Suit == '♦' || dealerHand[i].Suit == '♥') {
      cardDiv.style.color = 'red';
    }
  }
  while (playerCards.firstChild) {
    playerCards.removeChild(playerCards.lastChild)
  }
  for (let i = 0; i < playerHand.length; i++) {
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = playerHand[i].Value + ' ' + playerHand[i].Suit;
    playerCards.appendChild(cardDiv);
    if (playerHand[i].Suit == '♦' || playerHand[i].Suit == '♥') {
      cardDiv.style.color = 'red';
    }
  }
  
getScore();
  display.innerText =
    "Dealer: \n " +
    "(Total: " +
    dealerScore +
    ")\n\n" +
    "Player: \n " +
    "(Total: " +
    playerScore +
    ")";
  if (gameOver) {
    if (winner) {
      display.innerText += "\nYou Win!";
    } else if (tieGame) {
      display.innerText += "\nIt's a Tie!"
    } else {
      display.innerText += "\nDealer Wins!";
    }
      hitBtn.style.display = "none"
      stayBtn.style.display = "none"

  }
}