'use strict';

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// capture arg(s)...
// ES6 operations via Babel.js

// Require the 'NET' node module...
var port = process.argv[2];

var server = _net2.default.createServer(function (socket) {
	socket.on('data', function (data) {
		var now = (0, _moment2.default)();
		console.log(now.format("YYYY-MM-DD hh:mm") + "\n");
		socket.end(now.format("YYYY-MM-DD hh:mm") + "\n");
	});
});
server.listen(port);