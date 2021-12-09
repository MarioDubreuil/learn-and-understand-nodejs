var greet = function() {
    console.log('Hello!');
};
console.log(module);
console.log(module.exports);
module.exports = {greet: greet};
console.log(module);
console.log(module.exports);
