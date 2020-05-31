/*let array =[];
	let sum = 0
	for (let i = 0; i <= 2; i++) {
		let arrElem = prompt(`enter a ${i} elem`); 
		sum += parseInt(arrElem);
		array.push(arrElem);
	}
	console.log(array.sort());*/


	let massiv1 = ['12', '45','12', '45','32', '5','12', '45','52', '5',];
	let massiv2 = ['12', '46','112', '425','42', '15','24', '76','762', '5',];
	let newMassiv = [];

	for (let i = massiv1.length - 1; i >= 0; i--) {
		for (let j = massiv2.length - 1; j >= 0; j--) {
			if (massiv1[i] == massiv2[i]) {
				massiv2.splice(i, 1);
			} 
		}
	}
console.log(massiv2);
console.log(newMassiv.concat(massiv1).concat(massiv2));

let Sebo = massiv1.filter(function(item, index, arr) {
	return arr
	
});
console.log(`Sebo:  ${Sebo}`);


