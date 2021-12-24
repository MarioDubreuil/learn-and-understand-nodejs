var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var html = fs.readFileSync(`${__dirname}/index.html`, 'utf8').replace('{Message}', 'Hello world (from Message)')
    res.end(html)
}).listen(1337, '127.0.0.1')
