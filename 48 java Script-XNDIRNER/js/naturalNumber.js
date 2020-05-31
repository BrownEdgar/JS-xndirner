
let sum = 0;
for(let i = 0; i<=50; i++){
	sum +=i;
	console.log(i);
}
console.log("sum:" + sum);

/*  1.  3-ից 50 միջակայքում ընկած բոլոր բնական զույգ թվերը
	2.	դրանց գումարը*/
	 let sum2 = 0;
	for(let j = 4; j<=50; j+=2){
		sum2 +=j;
		console.log(j);
	}
	console.log("sum:" + sum2);

	/*Տպել 1-ից 100 միջակայքում ընկած բոլոր այն բնական թվերը, որոնք բաժանվում են 3-ի առանց մնացորդ։*/

	/* 
	for(let k = 0; k<=100; k+=3){
		console.log(k);
	} 
	*/

	for(let k = 0; k<=100; k++){
		if (k % 3==0) {
			console.log(k);
		}
		
	}