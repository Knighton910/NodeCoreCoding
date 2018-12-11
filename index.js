// dependency
const http = require('http');

// the server should respond to all request wiht a string
const server = http.createServer(function(req, res) {
    res.end('Hello world \n')
});


// start the server & listen on port 3000
server.listen(3000, () => {
    console.log('server is listening on port 3000');
});
