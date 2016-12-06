// ES6 operations via Babel.js

// Require the 'NET' node module...
import net from 'net';
import moment from 'moment';
// capture arg(s)...
let port = process.argv[2];

const server = net.createServer((socket) => {
	socket.on('data', (data) => {
		let now = moment();
		console.log(now.format("YYYY-MM-DD hh:mm") + "\n");
		socket.end(now.format("YYYY-MM-DD hh:mm") + "\n");
	});
});
server.listen(port);


