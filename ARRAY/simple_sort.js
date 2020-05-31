// Սորտավորում առանց մեթոդների
const arr = [154, 42, 1, 87, 695, 36, 2, 10, 39, 9];
let len = arr.length;
for (let j = 0; j < len; j++) {
	for (let i = 0; i < len; i++) {
		if (arr[i] > arr[i + 1]) {
			let newElem = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = newElem;
		}
	}
}
console.log(arr);


//գտնել թվային զանգվածի ամենամեծ թիվը, առանց որևիցե մեթոդ օգտագործելու!!!
let max = 0;
for (let i = 0, len = arr.length; i < len; i++) {
	if (max < arr[i]) {
		max = arr[i];
	}
}
console.log(max);