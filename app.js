var fs = require('fs')
var greet1 = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8')
console.log(greet1)

var greet2 = fs.readFile(`${__dirname}/greet.txt`, 'utf8', function(err, data) {
    console.log(err)
    console.log(data)
})
wait(2000)
console.log('done')

function wait(ms) {
    var start = new Date().getTime()
    var end = start
    while (end < start + ms) {
        end = new Date().getTime()
    }
}
