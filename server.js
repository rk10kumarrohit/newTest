var http = require('http');
function onRequest(request, response) {
    response.writeHead(200,{'Content-type': 'text/plain'});
    response.write('Helloworld');
    response.end();

}

http.createServer(onRequest).listen(8000);
