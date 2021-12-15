var greeting = 'Hello from greet5';

function greet() {
    console.log(greeting);
}

function setGreeting(newGreeting) {
    greeting = newGreeting;
}

module.exports = {
    greet: greet,
    setGreeting: setGreeting
};
