// dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// the server should respond to all request with a string
const server = http.createServer(function(req, res) {

    // get the url & parse it
    const parsedUrl = url.parse(req.url, true);

    // get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // get the querystring as an Obj
    const queryStrObj = parsedUrl.query;

    // get the Http method
    const httpMethod = req.method.toLowerCase();

    // get the headers as an obj
    const headers = req.headers;

    // get the payload, if any
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', (data) => {
        buffer += decoder.write(data)
    });

    req.on('end', () => {
       buffer += decoder.end();

        // send the response
       res.end('Hello world \n');

       console.log('Request received with this payload: ', buffer);
    });


    // TODO: commented out because i already know they work
    // log the request path
    // console.log('Request received on path: ' + trimmedPath);
    // console.log('using Http method : ' + httpMethod);
    // console.log('using these query string params: ', queryStrObj);
    // console.log('Request received with these headers: ', headers);
});


// start the server & listen on port 3000
server.listen(3000, () => {
    console.log('server is listening on port 3000');
});

// define a Request router
const router = {
    
};
