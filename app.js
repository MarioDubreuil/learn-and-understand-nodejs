console.log(firstname);

(function (lastname) {
    var firstname = 'John';
    console.log(firstname + ' ' + lastname);
}('Doe'));

function test() {
    var firstname = 'Pete';
    console.log(firstname);
};

console.log(firstname);
var firstname = 'Jane';
console.log(firstname);
test();
console.log(firstname);
