var fs = require('fs');
var file_path = process.argv[2]; var file_type = process.argv[3];
var filtered_arr = [];
fs.readdir(file_path, function(err, list) {
	if (!err) {
		for (var i = 0; i < list.length; i++ ) {
			var li = list[i]; var sub_dex = li.lastIndexOf(".");
			if (sub_dex !== -1 &&
					li.substring(sub_dex+1) === file_type) {
				console.log(li); filtered_arr.push(li);
			}
		}
	}
});
