var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('greet', function() {
    console.log('Someone, somewhere said hello.');
});

emitter.on('greet', function() {
    console.log('I whish you a good day.');
});

emitter.on('bye', function() {
    console.log('Someone, somewhere said goodbye.')
})

console.log('Hello')
emitter.emit('greet');
console.log('bye');
emitter.emit('bye');
