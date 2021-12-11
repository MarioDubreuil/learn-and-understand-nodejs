// var greet = require('./greet');
// greet.greet();

// var person = {
//     firstname: 'John',
//     lastname: 'Doe',
//     greet: function() {
//         console.log('Hello ' + this.firstname + ' ' + this.lastname);
//     }
// };

// person.greet();
// console.log(person.firstname);
// console.log(person['lastname']);
// person['greet']();

function Person(firstname, lastname) {
    this.fistname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('My name is ' + this.fistname + ' ' + this.lastname);
}

var person = new Person('John', 'Doe');
console.log('Hi ' + person.fistname + ' ' + person.lastname);
console.log(person);
console.log(person.__proto__);
person.greet();

var another = {
    firstname: 'Peter',
    lastname: 'Pan'
};

var person2 = new Person('Jane', 'Doe');

console.log(another);
console.log(person.__proto__ === another.__proto__);
console.log(person.__proto__ === person2.__proto__);
