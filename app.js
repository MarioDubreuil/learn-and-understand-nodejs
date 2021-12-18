var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`)
    }
}

obj.greet()
console.log()
obj.greet.call(obj)
obj.greet.call({name: 'Jane Doe'})
obj.greet.call({anothername: 'Jane Doe'})
console.log()
obj.greet.apply(obj)
obj.greet.apply({name: 'Jane Doe'})
obj.greet.apply({anothername: 'Jane Doe'})
