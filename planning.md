#Blackjack Card Game
###Pseudo-code
1. Deck of cards
    * 52 cards, 4 suits(hearts, diamonds, clubs, spades) with 2-10 and Jack, Queen, King, and Ace in an array.
    * Cards have number value. Ace is 1 or 11, face cards are 10
2. A way to shuffle deck before each game.
3. Player 1 and dealer/house(computer)
    * Save player name
4. (Maybe)Make a bet
    * Start with 100 "chips"
    * Dealer doesn't bet
    * Default minimum 5 "chips" per hand
    * If player wins, chips bet and equal amount of chips(1X) are returned to player
    * If player loses, bet chips gone
    * If player has 0 chips, game over
5. Deal two cards to each player
    * Click "Deal" button to start
    * Each "hand" contained in array
    * Use pop() method to remove cards from deck array so they can only be played once
    * (Maybe) If player gets two of the same cards, option to split the pair into two hands. Player must bet on both hands.
6. Hands (arrays) will be added for a total sum, respective of each player.
        * Ace counts as either 1 or 11
        * Ace and 10, J, Q, or K is automatic win for either player or dealer
7. Player's turn to "Hit" or "Stay"
    * If player hits, push card from deck array to player's hand array and return a sum.
        * If > 21 "bust"
        * If = 21 "win" or possibly "tie"
        * If < 21 option to hit or stay
    * If player stays, dealers turn to hit or stay
8. If dealer's hand is 17 or more they must stay and if 16 or less they must hit until total sum is 17 or more.
9. First to bust loses, first to 21 wins, or closest to 21 after both players stay wins.
    * If both player and dealer get 21 or equal sum, player with less cards/highest face cards wins
    * If player wins, add chips won back to player
    * If player loses, chips are lost
10. Clear the table, shuffle deck

**Betting**
Not sure if I will add this function but if so:
    * Player will start with 100 chips on default after name is entered.
    * Minimum bet is 5 chips, max is total chips.
    * If player wins, player receives back equal amount that they betted.
    * On a split, player must bet same amount on each hand and gets back 1.5x what they betted.
    * If chips reach zero, show game over screen and reset button