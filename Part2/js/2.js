/* Ներմուծել երկու թիվ 10-ից 30 միջակայքում, տպել դրանց միջև ընկած բոլոր բնական թվերը,
 հակադարձ հաջորդականությամբ: 
 օրինակ եթե ներմուծվել են 5 և 21 ապա պիտի տպվի   21 20 19 ….. 7 6 5 */


let bnakan, bnakan2;

alert("Ներմուծել երկու թիվ 10-ից 30 միջակայքից");
prom();
function prom(){
 bnakan = parseInt(prompt("Ներմուծել առաջին թիվը", 0));
 bnakan2 = parseInt(prompt("Ներմուծել երկրերդ թիվը", 0));

}

if(bnakan < 10 || bnakan > 30 || bnakan2 < 10 || bnakan2 > 30 || isNaN(bnakan) || isNaN(bnakan2)  ) {
	alert("ներմուծված թվերը չեն համապատասխանում պայմաններին");
prom();
}else if(bnakan == bnakan2){
	alert("թվերը չեն կարող լինել հավասար");
	prom();
}else{
	const arr = [];
	console.log(bnakan2);
	console.log(bnakan);
	for(let i = bnakan2; i>=bnakan; i--){
		arr.push(i);
	}
	console.log("arr:", arr);
}
 
