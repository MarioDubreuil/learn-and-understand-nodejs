var fs = require('fs')
var readable = fs.createReadStream(`${__dirname}/greet.txt`, { encoding: 'utf8', highWaterMark: 8 * 1024 })
var writable = fs.createWriteStream(`${__dirname}/greetcopy.txt`)
var count = 0;
readable.on('data', function(chunck) {
    count++
    console.log(`${count} ${chunck.length}`)
    writable.write(chunck)
    // console.log(chunck.length)
    // console.log(chunck)
})
