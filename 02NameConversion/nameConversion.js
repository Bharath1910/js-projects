const names = "hello hi hehe"
strArr = names.split(' ')

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