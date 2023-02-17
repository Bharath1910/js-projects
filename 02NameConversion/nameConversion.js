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

function handleConversion(strArr, casing) {
    const cases = {
        'camel-case': toCamelCase,
        'pascal-case': toPascalCase,
        'snake-case': toSnakeCase,
        'screaming-snake-case': toScreamingSnakeCase,
        'kebab-case': toKebabCase,
        'screaming-kebab-case': toScreamingKebabCase
    }

    let p = document.getElementById(casing)
    p.innerText = cases[casing](strArr)
}


function handleClick(str) {
    let strArr = str.toLowerCase().split(' ')
    let cases = [
        'camel-case', 'pascal-case', 'snake-case',
        'screaming-snake-case', 'screaming-kebab-case',
        'kebab-case'
    ]

    cases.forEach(element => {
        handleConversion(strArr, element)
    })
}

const convertBtn = document.getElementById('convert-btn')
convertBtn.addEventListener('click', event => {
    const text = document.getElementById('text').value
    handleClick(text)
})
