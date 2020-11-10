# stickman
Stickman

Description: Stickman is a word-guessing game. The game sets up a secret word and the player tries to guess it by suggesting letters within a certain given number of guesses.

Game objective: The end goal of the game is to guess the secret word in a defined number of attempts.

Remaining lives count: Throughout the game, the player is notified of the lives remaining. 

Game theme: The secret word belongs to a certain category, announced to the player upon game start.

Hint: There is a hint option available to the player that gives a clue by providing a concise description of the secret word.

Game metrics: After achieving the limit of attempts available, the game is over and the player receives the visual punishment in the form of the death by hanging.

Embedded keyboard: Taking into consideration mobile first approach and in order to make the game more kid-friendly (children are the ultimate end users) – the keyboard constitutes the integral part of the game screen, so that the user does not need to resort to the conventional keyboard.

MVP

Data Structure
o	index.html
o	style.css
o	stickman.js

Properties:
alphabet
themes
selectedTheme
secretWord
guess
letters //Stored guesses
lives
counter
space
canvas
head
scaffold1
scaffold2
scaffold3
scaffold4
core
leftArm
rightLeg
leftLeg
drawArray

Methods:
showLives
showTheme
getHint
showClue
buttons
selectTheme
result 
livesCounter 
animate
draw
check
play
hint
reset

States 

•	Start button
o	It starts the game. 
o	It goes to gameScreen when Start button is clicked.

•	gameScreen 
o	The game is running while the lives > 0.
o	It has Hint functionality on demand to assist the player in guessing the secret word.
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

Git https://github.com/shtesh/stickman

Slides https://docs.google.com/presentation/d/1SdCxuvAY3t261mTCd_wnnsdCPqz4gMgikXELP-yKICI/edit?usp=sharing

URIs for the project presentation https://shtesh.github.io/stickman/
