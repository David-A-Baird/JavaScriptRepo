function alertMessage(message) {
    return message
}
function getWelcomeMessage(name) {
    return `Weclome, ` + name + `!`
}
function divide(a, b) {
    return a / b
}
function multiply(a, b) {
    return a * b
}

console.log(getWelcomeMessage("William"))
console.log(getWelcomeMessage("Eric"))
console.log(divide(6, 2))
console.log(divide(7, 3))
console.log(multiply(8, 2))
console.log(multiply(92, 23))
alert(alertMessage("This is an alert message"))