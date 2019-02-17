'use standard'

let wordArray = ['Tophat']
let answerArr
let currLetter

function setWord (guessedLetter) {
  // Randomize
  currLetter = guessedLetter
  let word = words[Math.floor(Math.random() * wordArray.length)]
  for (let i = 0; i < word.length; i++) {
    answerArr[i] = '_'
  }
  let remainingLetters = word.length

  while (remainingLetters > 0) {

  }
}