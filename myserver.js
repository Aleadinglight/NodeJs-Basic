var http = require('http');


http.createServer(function (req, res){
	res.write('Hello World!'); // output response to client
	res.end(); //end the response
}).listen(8080); // server listen on port 8080