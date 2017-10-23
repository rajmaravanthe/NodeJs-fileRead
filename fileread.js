
var http = require('http');
fs = require('fs')

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });
    fs.readFile('./file.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.end(data);
        console.log(data);
    });

});

server.listen(3000);