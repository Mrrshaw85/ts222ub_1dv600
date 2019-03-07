'use strict'

const readlineSync = require('readline-sync')
const Quit = require('./Quit.js')

let wordArray = ['fox', 'leopard', 'stormcloud', 'teddybear', 'galdalf', 'silmarillion', 'budapest', 'jeopardy', 'donkey']
let answerArr = []
let maxGuesses = 7
let guessCount = 0
let notFound = true
let quit = false

function playHangTheMan () {
  // Randomize
  let word = rndWordFromArr(wordArray)
  answerArr = createUnderscoreArr(word)
  let remainingLetters = word.length

  while (remainingLetters > 0) {
    if (guessCount >= maxGuesses) {
      let retVal = manGoesFree()
      return retVal
    }
    console.log(answerArr.join(' '))
    let currLetter = readlineSync.question('Guess a letter (type "Quit" to quit, "Main" to go back to Main Menu): ')
    currLetter = currLetter.toLowerCase()
    notFound = true
    if (currLetter.length !== 1 && currLetter !== 'quit' && currLetter !== 'main') {
      console.log('Please enter a single letter! (type "Quit" to quit, "Main" to go back to Main Menu)')
    } else if (currLetter === 'quit') {
      let yesOrNo = readlineSync.question('Are you sure you want to quit? (Yes or No): ')
      quit = Quit(yesOrNo)
    } else if (currLetter === 'main') {
      console.log('')
      clearGameState()
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
        console.log(`Letter ${currLetter} not found.`)
        console.log(`You have ${(maxGuesses - guessCount)} guesses left, don't let the guilty man go free!`)
      }
    }
    if (quit === true) {
      console.log('')
      clearGameState()
      return false
    }
  }
  let finalAnswer = readlineSync.question('Does the Dung Beetle navigate through polarized sun- and moonlight? (true or false) ')
  finalAnswer = finalAnswer.toLowerCase()
  let endValue = checkFinalAnswer2(finalAnswer)
  return endValue
  
}

function manGoesFree () {
  console.log('The man goes free. No one will be hanged today. You lose!')
  return false
}
 
function rndWordFromArr (wArr) {
  return wArr[Math.floor(Math.random() * wArr.length)]
}

function checkFinalAnswer(finalAnswer) {
  return false
}

function checkFinalAnswer2(finalAnswer) {
  let returnValue
  if (finalAnswer === 'true') {
    console.log(`Correct! The guilty man hangs! You win!`)
    returnValue = true
  } else if (finalAnswer === 'false') {
    console.log('Sorry, the answer was incorrect.')
    returnValue = manGoesFree()
  } else {
    console.log('Sorry your answer as neither true or false. The guilty man escape and you ponder your intelligence.')
    returnValue = false
  }
  return returnValue
}

function createUnderscoreArr (w) {
  let aArr = []
  for (let i = 0; i < w.length; i++) {
    aArr[i] = '_'
  }
  return aArr
}

function clearGameState () {
  answerArr = []
  guessCount = 0
}

module.exports = {
  hangTheMan: playHangTheMan,
  clearGameState: clearGameState,
  createUnderscoreArr: createUnderscoreArr,
  rndWordFromArr: rndWordFromArr,
  checkFinalAnswer: checkFinalAnswer,
  checkFinalAnswer2: checkFinalAnswer2,
  manGoesFree: manGoesFree
}