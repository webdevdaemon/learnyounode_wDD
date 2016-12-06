// Require the 'NET' node module...
var net     = require('net');
var moment  = require('moment');
var port    = process.argv[2];
var frmt    = ("YYYY-MM-DD HH:mm" + "\n");

var server  = net.createServer(function(socket) {
	var now = moment();
	socket.write(now.format(frmt) + "\n");
	socket.end();
});
server.listen(Number(process.argv[2]));
