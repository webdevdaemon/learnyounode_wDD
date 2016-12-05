var fs = require('fs');
var targ = "" + process.argv[2];
var count = "";
fs.readFile( targ, function(err, data) {
	if (err) { console.log("err" + err); }
	count += data;
});
console.log(count.split(/[\n]/).length - 1);

