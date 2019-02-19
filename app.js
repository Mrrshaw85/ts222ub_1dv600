/* Hang The Man - The Game

// How to play the game (Basic)
* Random word is selected - not visible to player
* Number of _ for each letter in the word is displayed
* Choose a letter
* If letter is part of the random word - reveal it at its location _
* If letter is not part of the random word - display it as "wrong"
* Display each status towards a man being hung for each wrong guess of a letter in the random word.
* If all letters are correctly guessed - display that the player has won
* If all steps towards hanging the man has been done, the game is over.
* Display "Game Over" in the console.

Features to be done:
- Optional game mode where the player is supposed to hang the man.
- Number of guessed letters displayed on screen (console) when you guess the correct word.
- Time it took to guess the right word.
- Highscore list that display the 10 fastest winners (including the number of guesses)

*/

// Import the files for the modules

const menu = require('./src/Menu.js')

menu()
