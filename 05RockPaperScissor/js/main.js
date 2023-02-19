// selecting the options
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')


// Getting texts
const userResult = document.getElementById('user-result')
const compResult = document.getElementById('comp-result')
const winner = document.getElementById('winner')

// Scores
let userScore = 0
let computerScore = 0

function play(option) {
    const options = ["rock", "paper", "scissors"]

    const rando = Math.round(Math.random() * 10) % 3
    let computerSelection = options[rando]

    switch(option) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    winner.innerText = "Tied"
                    break;
                
                case "paper":
                    winner.innerText = "Computer"
                    break;
                
                case "scissors":
                    winner.innerText = "User"
                    break;
            }
            break
        
        case "paper":
            switch(computerSelection) {
                case "rock":
                    winner.innerText = "User"
                    break;
                
                case "paper":
                    winner.innerText = "Tied"
                    break;
                
                case "scissors":
                    winner.innerText = "Computer"
                    break;
            }
            break

        case "scissor":
            switch(computerSelection) {
                case "rock":
                    winner.innerText = "Computer"
                    break;
                
                case "paper":
                    winner.innerText = "User"
                    break;
                
                case "scissors":
                    winner.innerText = "Tied"
                    break;
            }
            break
    }
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