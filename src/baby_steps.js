var argz = process.argv; var sum = 0;
argz.map(function(value, index) {
	var num = (index > 1) ? Number(value) : 0;
	sum += num;
	return value;
});
console.log(sum);
// return sum;
