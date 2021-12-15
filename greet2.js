console.log(exports === module.exports);

exports.greet = function() {
    console.log('Hello from greet2');
}

console.log(exports === module.exports);
console.log(exports);
console.log(module.exports);
