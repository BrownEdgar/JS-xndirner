	/* 4.16․1 զանգվածը prompt-ով լցնել 12 հատ տարբեր թվերով*/
	let Myarray =[];
	let sum = 0
	for (let i = 0; i <= 2; i++) {
		let arrElem = prompt(`enter a ${i} elem`); 
		sum += parseInt(arrElem);
		Myarray.push(arrElem);
	}
	console.log(sum);
	console.log(`MyArray: ${Myarray}`);

/*տպել զանգվածի զույգ ինդեքսով անդամների գումարը*/
 let sum2 = 0
for (let k = 1 ; k <= Myarray.length-1; k+=2) {
	sum2 += parseInt(Myarray[k]);
	console.log(` Gumary forum: ${sum2}`);
}
console.log(` Gumary: ${sum2}`);
