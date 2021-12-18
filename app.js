var EventEmitter = require('events')
var util = require('util')

function Greeter() {
    EventEmitter.call(this)
    this.gretting = 'Hello'
}

util.inherits(Greeter, EventEmitter)

Greeter.prototype.greet = function(name) {
    console.log(this.gretting + ' ' + name)
    this.emit('greet', name)
}

var greeter = new Greeter()

greeter.on('greet', function(name) {
    console.log('greeted ' + name)
})

greeter.greet('Mario')

function Person() {
    this.firsname = 'John'
    this.lastname = 'Doe'
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firsname + ' ' + this.lastname)
}

var john = new Person();
john.greet();

function Policeman() {
    Person.call(this)
    this.badgenumber = '12345'
}

util.inherits(Policeman, Person)

var officer = new Policeman()

officer.greet();
