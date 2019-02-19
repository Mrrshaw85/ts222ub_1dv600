'use standard'

const StandardGame = require('./StandardGame.js')
const HangTheMan = require('./HangTheMan')
const Quit = require('./Quit.js')
const readline = require('readline-sync')

// Menu

// Display the Menu
// Await console number for choice + enter
// 1. Play Standard
// 2. Play HangTheMan
// 3. Quit application
//  3.1 Confirm Yes/No

const version = 'v1.0'

let tempChoice = ''

async function displayMenu () {
  console.log(`HangTheMan ${version}`)
  console.log('--------MENU-------')
  console.log('1: Play Standard Game')
  console.log('2: Play HangTheMan')
  console.log('3: Quit')
  console.log('-------------------')

  askQuestion()
}

function askQuestion () {
  tempChoice = readline.question('Option: ')
  handleMenu()
}

function handleMenu () {
  if (tempChoice === '1') {
    StandardGame()
  } else if (tempChoice === '2') {
    HangTheMan()
  } else if (tempChoice === '3') {
    let quit = Quit()
    if (quit === false) {
      displayMenu()
    } else {
    }
  } else {
    console.log('Please select a valid menu item')
    askQuestion()
  }
}

module.exports = displayMenu
