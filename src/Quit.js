'use standard'

const readlineSync = require('readline-sync')

function quitPrompt() {
  let yesOrNo = readlineSync.question('Are you sure you want to quit? (Yes or No): ')
  yesOrNo = yesOrNo.toUpperCase()
  if(yesOrNo === 'YES') {
    return true
  } else if (yesOrNo === 'NO') {
    console.log('')
    return false
  } else {
    quitPrompt()
  }
}

module.exports = quitPrompt