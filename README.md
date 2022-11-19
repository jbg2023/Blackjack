# ♠️ Blackjack (21) Card Game ♠️
![](https://img.shields.io/badge/Version-1.1-success)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- This is a simple blackjack card game.
- It is 1 player vs. the dealer(computer).
- Click 'New Game' button to deal cards. 'New Game' button will reset to a new hand at any time.
- Cards are rendered directly from the hand arrays(dealerHand and playerHand) with Bootstrap and CSS styling, along with the total 'score' of the hand displayed as text.
- Click either 'Hit Me!' or 'Stay' button: 'Hit Me!' adds a card to player's hand, while 'Stay' switches to dealers turn.
- Dealer must hit if score is less than 17.
- First to 21 wins.
- The default value of an Ace is set at 1. When the sum of each hand is added for total score, the function checks each hand for an Ace card. If an Ace is present and the sum of the hand adds 10 and is still less than or equal to 21, 10 is added to sum. This automatically switches the Ace value to 11(1 + 10).
- Ties can occur.
- This is a minimal viable product: there is no betting (soon to come).