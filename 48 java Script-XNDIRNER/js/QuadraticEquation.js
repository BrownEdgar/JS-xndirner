let num1 = parseInt(prompt("enter  a")); 
let num2 = parseInt(prompt("enter  b"));
let num3 = parseInt(prompt("enter  c"));


/*ax2 + bx + c = 0 */
function start(a, b, c){
	if (a == 0) {
		alert(`a-n chi karox 0 linel`);
	}else if(isNaN(a)){
		alert(`a-n petq e tiv lini!`);
	}
	
	let d = Math.sqrt(b*b-4*a*c);
	if (d < 0) {
		alert('լուծում չունի');
	}
	let baj = 2*a;
	let x1 = (-b + d) / baj;
	let x2 = (-b - d) / baj;

	alert(`x1 = ${x1},\n x2 = ${x2}`);

}
start(num1,num2,num3);
