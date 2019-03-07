'use standard'

const StandardGame = require('./StandardGame.js')
const HangTheMan = require('./HangTheMan.js')
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
let run = true

function displayMenu () {
  console.log(`HangTheMan ${version}`)
  console.log('--------MENU-------')
  console.log('1: Play Standard Game')
  console.log('2: Play HangTheMan')
  console.log('3: Quit')
  console.log('-------------------')

  while (run) {
    tempChoice = readline.question('Option: ')
    if (tempChoice === '1') {
      let backToMain = StandardGame.stdGame()
      if (backToMain === true) {
        displayMenu()
      } else {
        return
      }
      run = false
    } else if (tempChoice === '2') {
      let backToMain = HangTheMan.hangTheMan()
      if (backToMain === true) {
        displayMenu()
      } else {
        return
      }
      run = false
    } else if (tempChoice === '3') {
      let quit = Quit()
      if (quit === false) {
        displayMenu()
      } else {
        return
      }
    } else {
      console.log('Please select a valid menu item')
    }
  }
}

module.exports = displayMenu
