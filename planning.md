# Blackjack Card Game
### Pseudo-code
1. Deck of cards
    * Function to build a deck with an empty array of 'deck = []'
    * Start with an array of values ['A','2','3','4','5','6','7','8','9','10','J','Q','K'] and an array of suits ['C','D','H','S'] (4 suits(hearts, diamonds, clubs, spades) with 2-10 and Jack, Queen, King, and Ace). I'm going to use the suits just to distinguish between the four of each card value.
    * For loops to iterate through 'value' and 'suit' arrays and push into 'deck' array.
2. A way to shuffle deck before each game.
    * Make algorithm function to shuffle: for loop that makes two points in the deck and uses Math.floor(Math.random()) to randomize by switching each point, doing so 1000 times. 
3. Player 1 and dealer/house(computer)
    * Create player 1 object (array) containing:
        * Name
        * current hand
        * sum value of cards in hand
        * for loop makes variables for UI(DOM elements):
            * player, hand, card values
4. _(Icebox)_~~Make a bet
    * Start with 100 "chips"
    * Dealer doesn't bet
    * Default minimum 5 "chips" per hand
    * If player wins, chips bet and equal amount of chips(1X) are returned to player
    * If player loses, bet chips gone
    * If player has 0 chips, game over~~
5. Deal two cards to each player
    * Click "Deal" button to initialize game
    * Each "hand" contained in array
    * Use pop() method to remove cards from deck array so they can only be played once
    * alternate player then dealer, two cards each: 
        * pop() from deck, push() to hands
        * render function: DOM to make element for each card (use icon and innerHTML for simple display)
        * update sum of hands
6. Hands (arrays) will be added for a total sum, respective of each player.
        * Function to check 'value': if 'value' is NaN (such as 'A', 'J', 'Q', 'K')...
            * Ace counts as either 1 or 11: if value is 'A' return 11
            * J, Q, K returns 10
        * If 'value' is number return integer using parseInt
        * Check for win function: Ace and 10, J, Q, or K is automatic win for either player or dealer
7. Player's turn to "Hit" or "Stay"
    * If player hits(button), push card from deck array to player's hand array and return a sum.
        * If > 21 "bust"
        * If = 21 "win" or possibly "tie"
        * If < 21 option to hit or stay
    * If player stays, dealers turn to hit or stay
8. If dealer's hand is 17 or more they must stay and if 16 or less they must hit until total sum is 17 or more.
9. First to bust loses, first to 21 wins, or closest to 21 after both players stay wins. Function to check score:
    * If both player and dealer get 21 or equal sum, player with less cards/highest face cards wins
    * If player wins, add chips won back to player
    * If player loses, chips are lost
10. Clear the table, shuffle deck
11. Reset button to reset/ start over

~~**Betting**
Not sure if I will add this function but if so:
    * Player will start with 100 chips on default after name is entered.
    * Minimum bet is 5 chips, max is total chips.
    * If player wins, player receives back equal amount that they betted.
    * On a split, player must bet same amount on each hand and gets back 1.5x what they betted.
    * If chips reach zero, show game over screen and reset button~~