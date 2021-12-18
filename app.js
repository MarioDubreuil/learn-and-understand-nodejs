var EventEmitter = require('events')
var util = require('util')

function Greeter() {
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
