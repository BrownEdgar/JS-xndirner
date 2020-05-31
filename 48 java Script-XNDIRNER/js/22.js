/*Բնական թվերի գումարը 
Ներմուծել  4 թիվ ,  որոնցից յուրաքանչուրի համար հաշվել և արտածել  1-ից մինչև այդ թիվը ընկած բնական թվերի գումարը*/
let sumary = 0;
for(let i = 1; i <= 5; i++){
let num = parseInt(prompt(`enter a ${i} number`)); 
console.log(num);
		for(let p = 0; p <= num; p++){
			sumary += p;
}
alert(`simary is ${sumary}`);
}