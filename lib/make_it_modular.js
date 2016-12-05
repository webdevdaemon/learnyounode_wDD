// include node.js' "fs" object, assign to var
var fs = require('fs');
// include moduke, assign to a var
var myModule = require('./make_it_module.js');
// assign arguments array to a var
var inp = process.argv;
// create calback function to handle result of myModule() function's sorting operation
function caller(err, data) {
    if (err) {
        console.log("error: " + err); // if error value is present, log an error...
        return;
    } // ...and terminate function immediately
    data.map(function (input) {
        // map through data (array)...
        console.log(input); // ... logging each index to the console...
        return;
    });
}
// invoke myModule() function to get the party started!!!
myModule(inp[2], inp[3], caller);