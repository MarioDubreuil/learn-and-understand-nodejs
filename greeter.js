'use strict'

var EventEmitter = require('events')

module.exports = class Greeter extends EventEmitter {
    constructor() {
        super()
        this.gretting = 'Hello'
    }
    greet(fullname) {
        console.log(`${this.gretting} ${fullname}`)
        this.emit('greet', fullname)
    }
}
