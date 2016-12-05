var http = require('http');
var storage = "";

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        storage += data;
    });
    res.on('end', function () {
        storage = storage.toString();
        console.log(storage.length);
        console.log(storage);
    });
    res.on('error', function (err) {
        console.log(err);
    });
});