var http = require('http');

function onRequest(request,response){
    response.writeHead(200, {'Content-Type:' : 'text/html'})
}
http.createServer(onRequest).listen(8000);