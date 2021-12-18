var fullname1 = 'John Doe'
var greet1 = 'Hello ' + fullname1
var greet2 = `Hello ${ fullname1 }`
console.log(greet1)
console.log(greet2)

var fullname2 = {
    firstname: 'John',
    lastname: 'Doe'
}
var greet3 = 'Hello ' + fullname2
var greet4 = `Hello ${ fullname2 }`
console.log(greet3)
console.log(greet4)
