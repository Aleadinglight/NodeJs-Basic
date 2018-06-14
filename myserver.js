const http = require('http');

const server = http.createServer((req, res) => {
	// include http header with correct content type
	res.writeHead(200, {'Content-Type': 'text/html'});
	// output response to client
	res.write('Hello World!'); 
	//end the response
	res.end(); 
}); 

server.on('listening',(socket) => {
	console.log('Server listening...');
});

server.on('connection',(socket) => {
	console.log('New connection...')
});

// server listen on port 8080
server.listen(8080);