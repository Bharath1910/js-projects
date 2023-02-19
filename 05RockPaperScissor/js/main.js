// selecting the options
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')


// Getting texts
const userResult = document.getElementById('user-result')
const compResult = document.getElementById('comp-result')
const winner = document.getElementById('winner')

function play(option) {
    const options = ["rock", "paper", "scissors"]

    const rando = Math.round(Math.random() * 10) % 3
    let computerSelection = options[rando]
}

rock.addEventListener('click', event => {
    console.log("in rock :D");
    userResult.innerText = "Rock"
})

paper.addEventListener('click', event => {
    userResult.innerText = "Paper"
})

scissors.addEventListener('click', event => {
    userResult.innerText = "Scissors"
})