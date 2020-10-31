# stickman
Stickman

Description: Hangman is a word-guessing game. The game sets up a secret word and the player tries to guess it by suggesting letters within a certain number of guesses.

Game objective: The end goal of the game is to guess the secret word in a defined number of attempts.

Remaining lives count: Throughout the game, the player is notified of the lives remaining. In case of wrong letter suggestion, the wrong letter is printed on the game screen to facilitate erroneous suggestions log keeping for the player.

Game theme: The secret word belongs to a certain category, announced to the player upon game start.

Hint: There is a hint option available to the player that gives a clue by providing a concise description of the secret word.

Game metrics: After achieving the limit of attempts available, the game is over and the player receives the visual punishment in the form of the death by hanging.

Embedded keyboard: Taking into consideration mobile first approach and in order to make the game more kid-friendly – the keyboard constitutes the integral part of the game screen, so that the user does not need to resort to the conventional keyboard.

MVP

Data Structure
o	index.html
o	styles.css
o	canvas.js

Properties:
class HangmanCanvas
rightLeg
leftLeg
rightArm
leftArm
torso
head
frame4
frame3
frame2
frame1
drawArray

Methods:
createBoard
drawLines
writeCorrectLetter
writeWrongLetter
drawHangman
gameOver
winner

o	hangman.js
Properties:
class Hangman
words
word
getHint
secretWord
letters
alphabet
themes
chosenTheme
lives
counter
guessedLetters
errorsLeft
startGameButton
startGame

Methods:
pickWord
checkClickedLetter
addCorrectLetter
addWrongLetter
showLives
showTheme
getHint
showClue
checkGameOver
checkWinner

States and States Transitions

•	Start button
o	It starts the game. 
o	It goes to gameScreen when Start button is clicked.

•	gameScreen 
o	The game is running while the lives > 0.
o	It has Hint functionality (optional) on demand to assist the player in guessing the secret word.
o	It provides Start Over functionality to play again.

•	GameOver alert
o	It shows Game Over message.

•	Win alert
o	It shows Win message.

Backlog
•	Displayed error log: Upon wrong letter suggestion, the wrong letter is printed on the game screen to facilitate erroneous suggestions log keeping for the player.
•	Amplify the range of game themes available: Add to the array of themes and corresponding hints to increase the number of game iterations possible.

Links

Trello https://trello.com/b/ajuGss0e/kanban-template

Git

Slides
URIs for the project presentation
