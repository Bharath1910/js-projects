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

// Score tags
const userScoreTag = document.getElementById('userScoreVal')
const computerScoreTag = document.getElementById('compScoreVal')

function play(option) {
    const options = ["rock", "paper", "scissors"]

    const rando = Math.round(Math.random() * 10) % 3
    let computerSelection = options[rando]
    compResult.innerText = computerSelection

    switch(option) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    winner.innerText = "Tied"
                    break;
                
                case "paper":
                    winner.innerText = "Computer"
                    computerScore += 1
                    break;
                
                case "scissors":
                    winner.innerText = "User"
                    userScore += 1
                    break;
            }
            break
        
        case "paper":
            switch(computerSelection) {
                case "rock":
                    winner.innerText = "User"
                    userScore += 1
                    break;
                
                case "paper":
                    winner.innerText = "Tied"
                    break;
                
                case "scissors":
                    winner.innerText = "Computer"
                    computerScore += 1
                    break;
            }
            break

        case "scissors":
            switch(computerSelection) {
                case "rock":
                    winner.innerText = "Computer"
                    computerScore += 1
                    break;
                
                case "paper":
                    winner.innerText = "User"
                    userScore += 1
                    break;
                
                case "scissors":
                    winner.innerText = "Tied"
                    break;
            }
            break
    }

    userScoreTag.innerText = userScore
    computerScoreTag.innerText = computerScore
}

rock.addEventListener('click', event => {
    userResult.innerText = "rock"
    play("rock")
})

paper.addEventListener('click', event => {
    userResult.innerText = "paper"
    play("paper")
})

scissors.addEventListener('click', event => {
    userResult.innerText = "scissors"
    play("scissors")
})