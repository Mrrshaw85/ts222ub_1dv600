'use strict'

const readlineSync = require('readline-sync')
const Quit = require('./Quit.js')

let wordArray = ['fox', 'leopard', 'stormcloud', 'teddybear', 'gandalf', 'silmarillion', 'budapest', 'jeopardy', 'donkey', 'narwhale', 'orca', 'frodo', 'laptop', 'suitcase', 'doorway', 'subway', 'stream']
let questionArray = [
  {
    id: 1,
    question: 'Does the Dung Beetle navigate through polarized sun- and moonlight? (true or false) ',
    answer: 'true'
  },
  {
    id: 2,
    question: 'Is there a bat that actually could suck the blood of humans? (true or false) ',
    answer: 'true'
  },
  {
    id: 3,
    question: 'Is it cheaper to fly to Stockholm from Skellefteå, than to take the train? (true or false) ',
    answer: 'false'
  }
]
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
  let randomQ = rndQuestion(questionArray)
  console.log('')
  let fAnswer = readlineSync.question(randomQ.question)
  fAnswer = fAnswer.toLowerCase()
  let endValue = checkFinalAnswer2(fAnswer, randomQ)
  return endValue
}

function manGoesFree () {
  console.log('The man goes free. No one will be hanged today. You lose!')
  clearGameState()
  return false
}

function rndWordFromArr (wArr) {
  return wArr[Math.floor(Math.random() * wArr.length)]
}

function rndQuestion (questionArray) {
  return questionArray[Math.floor(Math.random() * questionArray.length)]
}

function checkFinalAnswer2 (finalAnswer, rQ) {
  let returnValue
  if (finalAnswer === rQ.answer) {
    console.log(`Correct! The guilty man hangs! You win!`)
    console.log('')
    console.log(' _________')
    console.log('//        |')
    console.log('||        |')
    console.log('||        O')
    console.log('||       /|')
    console.log('||       / |')
    console.log('||')
    console.log('||')
    console.log('MMMMMMMMMMMM')
    console.log('')
    clearGameState()
    returnValue = true
  } else if (finalAnswer !== rQ.answer) {
    console.log('Sorry, the answer was incorrect.')
    console.log('')
    returnValue = manGoesFree()
  } else {
    console.log('Sorry your answer is neither true or false. The guilty man escape and you ponder your intelligence.')
    console.log('')
    clearGameState()
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
  checkFinalAnswer2: checkFinalAnswer2,
  manGoesFree: manGoesFree
}
