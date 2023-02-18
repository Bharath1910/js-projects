const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')

const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')

const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const options = [uppercaseEl, lowercaseEl, numbersEl, symbolsEl]

clipboardEl.addEventListener('click', () => {
    
})

generateEl.addEventListener('click', () => {

})

function generatePassword(configArr, length) {
    let specifiedOptions = []

    for (let i = 0; i < options.length; i++) {
        if (configArr[i]) {
            specifiedOptions.push(options[i])
        }
    }

    for (let i = 0; i < length; i++) {
        
    }
}

function getRandomLower() {
    const lowerArr = Array.from("abcdefghijklmnopqrstuvwxyz");
    return lowerArr[Math.round((Math.random() * 100) % 26)];
}


function getRandomUpper() {
    const upperArr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    return lowerArr[Math.round((Math.random() * 100) % 26)];
}

function getRandomNumber() {
    const numberArr = Array.from("0123456789");
    return lowerArr[Math.round((Math.random() * 100) % 10)];
}

function getRandomSymbol() {
    const symbolArr = Array.from("!@#$%^&*");
    return lowerArr[Math.round((Math.random() * 10) % 8)];
}