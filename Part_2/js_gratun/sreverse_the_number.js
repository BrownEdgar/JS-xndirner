//console.log(`—> Խնդիր 1 "reverse a number" 654`);
//function reverse_a_number(n){
//	n = n + "";
//	return n.split("").reverse().join("");
//}
//console.log(reverse_a_number(654));
console.log(`—> Խնդիր 1 "reverse a number" 654`);
function reverse_a_number2(num){
	let rev = 0, rem;
	while(num!=0){
		rem = num%10;
		rev=rev*10+rem;
		num = parseInt(num/10);
	}
		return rev;
}
console.log(reverse_a_number2(654));


/*Ներմուծել նախադասություն, ներմուծել մեկ բառ, 
որոնել այդ բառը նախադասության մեջ, արտածել գտնված դիրքերը , 
եթե չի գտնվել արտածել “չի գտնվել” արտահայտությունը։*/
//console.log(`—> Գրատուն JS խնդրագիրք N24`);
//let s = "ajd e amen inchi patjary";
//function find_word(arg){
//	let x = s.indexOf(arg);
//		if(x != -1){
//			return `Բառը գտնվել է։ ${x}-${x+arg.length} դիրքերում`;
//		}else{
//			return "չի գտնվել";
//		}
//}
//console.log(find_word("patjary"));