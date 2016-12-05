var http    = require('http');
var argz    = process.argv;
var urlz    = [ argz[2], argz[3], argz[4] ];
var output  = { zero : "", one  : "", two  : "" };
var counter = [];

urlz.map(function(val, dex) {
    var url = val; var q = dex;
    http.get(url, function(res) {
        res.on('data', function(data) {
            if (q === 0) {output.zero += data;}
            if (q === 1) {output.one  += data;}
            if (q === 2) {output.two  += data;}
        });
        res.on('end', function() {
            counter.push("X");
            if (counter.length > 2) {
                console.log(output.zero);
                console.log(output.one);
                console.log(output.two);
            }
        });
    });
});
