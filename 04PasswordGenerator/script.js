const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')

const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')

const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

async function copy() {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(resultEl.value);
    } else {
        console.log("Copy not supported :(");
    }
}


clipboardEl.addEventListener('click', () => {
    copy()
})

function getRandomLower() {
    const lowerArr = Array.from("abcdefghijklmnopqrstuvwxyz");
    return lowerArr[Math.round((Math.random() * 100) % 26)];
}


function getRandomUpper() {
    const upperArr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    return upperArr[Math.round((Math.random() * 100) % 26)];
}

function getRandomNumber() {
    const numberArr = Array.from("0123456789");
    return numberArr[Math.round((Math.random() * 100) % 10)];
}

function getRandomSymbol() {
    const symbolArr = Array.from("!@#$%^&*");
    return symbolArr[Math.round((Math.random() * 10) % 8)];
}

function generatePassword(configArr, length) {
    const options = [getRandomUpper, getRandomLower, getRandomNumber, getRandomSymbol]
    let specifiedOptions = []
    let password = ""

    for (let i = 0; i < options.length; i++) {
        if (configArr[i]) {
            specifiedOptions.push(options[i])
        }
    }

    for (let i = 0; i < length; i++) {
        password +=  options[(Math.round(Math.random() * 10)) %  options.length]()
    }

    return password
}

generateEl.addEventListener('click', () => {
    const options = [uppercaseEl, lowercaseEl, numbersEl, symbolsEl]
    let configArr = []
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            configArr.push(true)
        } else {
            configArr.push(false)
        }
    }

    resultEl.innerText = generatePassword(configArr, lengthEl.value)
})