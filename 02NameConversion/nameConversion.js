function capitalize(str) {
    return str.toLowerCase().charAt(0).toUpperCase() + (str.slice(1).toLowerCase())
} 

function toCamelCase(strArr) {
    returnString = ""
    for (let i = 0; i < strArr.length; i++) {
        if (i != 0) {
            returnString += capitalize(strArr[i])
        } else {
            returnString += strArr[i]
        }
    }

    return returnString
}

function toPascalCase(strArr) {
    returnString = ""
    for (let i = 0; i < strArr.length; i++) {
        returnString += capitalize(strArr[i])
    }

    return returnString
}

function toSnakeCase(strArr) {
    returnString = ""
    for (let i = 0; i < strArr.length; i++) {
        if (i != (strArr.length - 1)) {
            returnString += strArr[i]
            returnString += "_"
        } else {
            returnString += strArr[i]
        }
    }

    return returnString
}


function toScreamingSnakeCase(strArr) {
    let returnString = ""
    for (let i = 0; i < strArr.length; i++) {
        if (i != (strArr.length - 1)) {
            returnString += strArr[i].toUpperCase()
            returnString += "_"
        } else {
            returnString += strArr[i].toUpperCase()
        }
    }

    return returnString
}

function toKebabCase(strArr) {
    let returnString = ""
    for (let i = 0; i < strArr.length; i++) {
        if (i != (strArr.length - 1)) {
            returnString += strArr[i]
            returnString += "-"
        } else {
            returnString += strArr[i]
        }
    }

    return returnString
} 

function toScreamingKebabCase(strArr) {
    let returnString = ""
    for (let i = 0; i < strArr.length; i++) {
        if (i != (strArr.length - 1)) {
            returnString += strArr[i].toUpperCase()
            returnString += "-"
        } else {
            returnString += strArr[i].toUpperCase()
        }
    }

    return returnString
}

function handleClick(str) {
    strArr = str.toLowerCase().split(' ')

    const camelCase = document.getElementById('camel-case')
    camelCase.innerText = toCamelCase(strArr)

    const pascalCase = document.getElementById('pascal-case')
    pascalCase.innerText = toPascalCase(strArr)

    const snakeCase = document.getElementById('snake-case')
    snakeCase.innerText = toSnakeCase(strArr)

    const screamingSnake = document.getElementById('screaming-snake-case')
    screamingSnake.innerText = toScreamingSnakeCase(strArr)

    const kebabCase = document.getElementById('kebab-case')
    kebabCase.innerText = toKebabCase(strArr)

    const screamingKebab = document.getElementById('screaming-kebab-case')
    screamingKebab.innerText = toScreamingKebabCase(strArr)
}

const convertBtn = document.getElementById('convert-btn')
convertBtn.addEventListener('click', event => {
    const text = document.getElementById('text').value
    handleClick(text)
})
