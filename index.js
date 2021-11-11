// Your code here
function mapToNegativize(array) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        results.push(array[i] * -1)
    }
    return results
}

function mapToNoChange(array) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        results.push(array[i])
    }
    return results
}

function mapToDouble(array) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        results.push(array[i] * 2)
    }
    return results
}

function mapToSquare(array) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        results.push(array[i] ** 2)
    }
    return results
}

function reduceToTotal(array, start = 0) {
    let accum = start;

    for (let i = 0; i < array.length; i++) {
        accum = array[i] + accum
    }
    return accum
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    }
    return false
}