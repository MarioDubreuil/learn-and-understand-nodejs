var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

console.log(person);

var john = Object.create(person);
var jane = Object.create(person);

john.firstname = 'John';
// john.lastname = 'Doe';

jane.firstname = 'Jane';
// jane.lastname = 'Doe';

person.lastname = 'Doe';

console.log(john);
console.log(john.firstname);
console.log(john.greet());

console.log(jane);
console.log(jane.firstname);
console.log(jane.greet());

person.lastname = 'Smith';

console.log(john);
console.log(john.firstname);
console.log(john.greet());

console.log(jane);
console.log(jane.firstname);
console.log(jane.greet());
