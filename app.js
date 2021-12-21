function greet(callback) {
    console.log('Hello from greet')
    if (typeof callback === 'function') {
        callback()
    }
}

greet(function() {
    console.log('Hello from callback')
})

greet()
