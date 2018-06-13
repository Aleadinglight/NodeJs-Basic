var http = require('http');


http.createServer(function (req, res){
	// include http header with correct content type
	res.writeHead(200, {'Content-Type': 'text/html'});
	// output response to client
	res.write('Hello World!'); 
	//end the response
	res.end(); 
}).listen(8080); // server listen on port 8080