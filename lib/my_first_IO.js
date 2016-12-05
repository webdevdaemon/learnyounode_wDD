var fs = require('fs');var target = process.argv[2];
var sol = fs.readFileSync(target, 'utf8').split(/[\n]/).length - 1;
console.log(sol);