'use standard'

const readlineSync = require('readline-sync')
const Quit = require('./Quit.js')
const displayMenu = require('./Menu.js')

let wordArray = ['tophat', 'lever', 'fish', 'cat']
let answerArr = []
let maxGuesses = 7
let guessCount = 0
let notFound = true
let quit = false

function stdGame () {
  // Randomize
  let word = wordArray[Math.floor(Math.random() * wordArray.length)]
  for (let i = 0; i < word.length; i++) {
    answerArr[i] = '_'
  }
  let remainingLetters = word.length

  while (remainingLetters > 0) {
    if (guessCount >= maxGuesses) {
      console.log('You lose!')
      console.log('')
      return false
    }
    console.log(answerArr.join(' '))
    let currLetter = readlineSync.question('Guess a letter (type "Quit" to quit, "Main" to go back to Main Menu): ')
    currLetter = currLetter.toLowerCase()
    notFound = true
    if (currLetter.length !== 1 && currLetter !== 'quit' && currLetter !== 'main') {
      console.log('Please enter a single letter! (type "Quit" to quit, "Main" to go back to Main Menu)')
    } else if (currLetter === 'quit') {
      quit = Quit()
    } else if (currLetter === 'main') {
      console.log('')
      return true
    } else {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === currLetter && answerArr[j] !== currLetter) {
          answerArr[j] = currLetter
          remainingLetters--
          notFound = false
        } 
      }
      if (notFound && currLetter !== 'quit' && currLetter !== 'main') {
        guessCount++
        console.log(`You have ${(maxGuesses - guessCount)} guesses left!`)
      }
    }
    if (quit === true) {
      console.log('')
      return false
    }

  }
  console.log('You win!')
}

module.exports = stdGame
