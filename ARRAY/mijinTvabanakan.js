//mijin tvabanakan
const array = [1, 23, 94, 12, 145, 4, 711, 8];

function checkMijin(params) {
	let sum = 0;
	for (let item of params) {
		sum += item;
	}
	sum = sum / params.length;
	console.log(`~= ${Math.floor(sum)}`);
}
checkMijin(array)