var Emitter = require('events');
var eventConfig = require('./config').events;

var emitter = new Emitter();

emitter.on(eventConfig.GREET, function() {
    console.log('Someone, somewhere said hello.');
});

emitter.on(eventConfig.GREET, function() {
    console.log('I whish you a good day.');
});

emitter.on(eventConfig.BYE, function() {
    console.log('Someone, somewhere said goodbye.')
})

console.log('>Hello')
emitter.emit(eventConfig.GREET);
console.log('>bye');
emitter.emit(eventConfig.BYE);
