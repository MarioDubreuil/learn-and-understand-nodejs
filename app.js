'use strict'

var Greeter = require('./greeter')

var greeter = new Greeter()

greeter.on('greet', function(name) {
    console.log('greeted ' + name)
})

greeter.greet('Mario')
