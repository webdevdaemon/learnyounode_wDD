var fs = require('fs');
// attach input arguments (array) to a var
var inp = process.argv;
// extract the needed items from the input array, assign to vars
dir = inp[2];type = inp[3];callBack = inp[4];
// create a function to perform the needed filtering and printing
function filterByType(dir, type, callBack) {
    // create an empty array for output
    var data_arr = [];
    // use readdir() to list the contents of the target directory
    fs.readdir(dir, function (err, list) {
        // if error indicator is present, return thr callback with "err" as the argument
        if (err) {
            return callBack(err);
        }
        // loop through file list
        for (var i = 0; i < list.length; i++) {
            // assign current index to a var
            var li = list[i];
            // if current index contains the target filetype/suffix...
            if (li.indexOf(type.toString()) !== -1 && li.indexOf("." + type) !== -1) {
                // push it to the output array (data_arr)
                data_arr.push(li);
            }
        }
        // after sorting loop completes, invoke the callback with an error value of "null"
        callBack(null, data_arr);
    });
}
// export filterByType() as the module's output
module.exports = filterByType;