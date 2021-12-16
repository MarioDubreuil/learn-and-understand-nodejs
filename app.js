var obj = {
    greet : 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);
console.log({greet: 'Hello2'});
console.log({greet: 'Hello2'}.greet);
console.log({greet: 'Hello2'}['greet']);

var arr = [];
arr.push(123);
arr.push('Yo!');
arr.push({greet: 'Hello'});
arr.push(function() {
    console.log('Hello from function 1');
});
arr.push(function() {
    console.log('Hello from function 2');
});
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
arr[3]();
arr[4]();
console.log('=====');
arr.forEach(function(item) {
    console.log();
    console.log(typeof item);
    console.log(item);
    if (typeof item === 'function') {
        item();
    }
});
