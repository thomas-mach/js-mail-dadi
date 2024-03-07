// creare un numero random da 1 - 6 per computer e giocatore
const randomNumberComputer = Math.floor(Math.random() * 6) + 1
const randomNumberPlayer = Math.floor(Math.random() * 6) + 1
let resultPlayer = 0
let resultComputer = 0

if (randomNumberComputer > randomNumberPlayer){
resultComputer++
console.log(resultPlayer)
console.log(resultComputer)
console.log('Copmuter ' + randomNumberComputer)
console.log('You ' + randomNumberPlayer)
console.log('Computer WIN! ')
}
else if (randomNumberComputer < randomNumberPlayer){
    resultPlayer++
    console.log(resultPlayer)
    console.log(resultComputer)
    console.log('You ' + randomNumberPlayer)
    console.log('Copmuter ' + randomNumberComputer)
    console.log('You WIN!')
    
} else {
    console.log('You ' + randomNumberPlayer)
    console.log('Copmuter ' + randomNumberComputer)
    console.log('DRAW')
}

