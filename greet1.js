console.log(exports === module.exports);

exports = function() {
    console.log('Hello from greet');
}

console.log(exports === module.exports);
console.log(exports);
console.log(module.exports);
