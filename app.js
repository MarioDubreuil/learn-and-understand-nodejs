var greet1 = require('./greet1');
greet1();

var greet2a = require('./greet2');
greet2a.greet();

var greet2b = require('./greet2').greet;
greet2b();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting += '!';
greet3.greet();

var greet3b = require('./greet3');
greet3b.greet();
greet3b.greeting += '#';
greet3b.greet();

greet3.greet();

console.log(greet3b === greet3);

var greet4a = require('./greet4');
console.log(greet4a);
var greet4ag = new greet4a();
greet4ag.greet();
greet4ag.greeting += "!";
greet4ag.greet();

var greet4b = require('./greet4');
console.log(greet4b);
var greet4bg = new greet4b();
greet4bg.greet();
greet4bg.greeting += "!";
greet4bg.greet();

console.log(greet4a === greet4b);
console.log(greet4ag === greet4bg);

var greet5 = require('./greet5');
greet5.greet();
greet5.setGreeting('Hello');
greet5.greet();
