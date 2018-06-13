var http = require('http');
var url = require('url');
// test with http://127.0.0.1:8080/?year=2017&month=July
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.write(txt);
    res.end();
}).listen(8080);