// Require the 'NET' node module...
var http    = require('http'); var fs = require('fs');

var port    = process.argv[2]; var serv = process.argv[3];

var src = fs.createReadStream(serv);
console.log(src);

var server  = http.createServer(function(request, response) {
	server.on('request', function() {
		response.write(src.pipe());
		response.end();
	});
});
server.listen(Number(process.argv[2]));
