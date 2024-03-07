// creare un numero random da 1 - 6 per computer e giocatore

const rollElement = document.getElementById('roll')
const resultPlayer = document.getElementById('playerResult') 
const resultComputer = document.getElementById('computerResult')
const winner = document.getElementById('winner')
const winsComputer = document.getElementById('winsComputer')
const winsPlayer = document.getElementById('winsPlayer')

let computerWins = 0
let playerWins = 0


function hendleClick(){
    const randomNumberComputer = Math.floor(Math.random() * 6) + 1
    const randomNumberPlayer = Math.floor(Math.random() * 6) + 1
    resultComputer.innerHTML = randomNumberComputer
    resultPlayer.innerHTML = randomNumberPlayer
    
    
    if (randomNumberComputer > randomNumberPlayer){
        winner.innerHTML = ('COMPUTER WON!')
        computerWins++
    }
    else if (randomNumberComputer < randomNumberPlayer){
        winner.innerHTML = ('YOU WON!')
        playerWins++
    } else {
        winner.innerHTML = ('DRAW')
    }

    winsComputer.innerHTML = computerWins
    winsPlayer.innerHTML = playerWins
}

rollElement.addEventListener('click', hendleClick) 



