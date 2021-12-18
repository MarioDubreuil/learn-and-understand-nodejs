'use strict'

function Person1(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

Person1.prototype.greet = function() {
    console.log(`Hello1 ${this.firstname} ${this.lastname}`)
}

var john1 = new Person1('John', 'Doe')
john1.greet()
 
var jane1 = new Person1('Jane', 'Doe')
jane1.greet()

console.log(john1.__proto__)
console.log(jane1.__proto__)
console.log(john1.__proto__ === jane1.__proto__)

class Person2 {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    greet() {
        console.log(`Hello2 ${this.firstname} ${this.lastname}`)
    }
}

var john2 = new Person2('John', 'Doe')
john2.greet();
 
var jane2 = new Person2('Jane', 'Doe')
jane2.greet()

console.log(john2.__proto__)
console.log(jane2.__proto__)
console.log(john2.__proto__ === jane2.__proto__)
