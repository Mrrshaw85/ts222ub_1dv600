'use standard'

const readlineSync = require('readline-sync')
const Quit = require('./Quit.js')

let wordArray = ['tophat', 'lever', 'fish', 'cat']
let answerArr = []
let maxGuesses = 8
let guessCount = 0
let notFound = true

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
      return
    }
    console.log(answerArr.join(' '))
    let currLetter = readlineSync.question('Guess a letter (type "Quit" to go to Main Menu): ')
    currLetter = currLetter.toLowerCase()
    notFound = true
    if (currLetter.length !== 1 && currLetter !== 'Quit') {
      console.log('Please enter a single letter! (type "Quit" to go to Main Menu)')
    } else if (currLetter === 'Quit') {
      Quit()
    } else {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === currLetter && answerArr[j] !== currLetter) {
          answerArr[j] = currLetter
          remainingLetters--
          notFound = false
        }
      }
    }
    if (notFound) {
      guessCount++
      console.log(`You have ${(8 - guessCount)} guesses left!`)
    }
  }
  console.log('You win!')
}

module.exports = stdGame
