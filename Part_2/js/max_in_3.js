/*երեք թվի դասավորություն և դրանց նվազագույնը*/
/*ներմուծել երեք թիվ (prompt հրամանի միջոցով) արտածել դրանցից նվազագույնը արտածել այդ թվերը մեկ պատուհանով, ըստ նվազման կարգի*/
let num1 = parseInt(prompt("enter number 1")); 
let num2 = parseInt(prompt("enter number 2"));
let num3 = parseInt(prompt("enter number 3"));


/*if (num1 > num2 && num1 > num3) {
	alert("max, " + num1);
}else if (num2 > num3) { 
	alert(num2);	
}else{
	alert(num3);	
}*/

if (num1 > num2 && num1 > num3) {
	if (num2 > num3) {
		alert(num1 + ' ' + num2 + ' ' + num3);
	}else{
		alert(num1 + ' ' + num3 + ' ' + num2);
	}
}else if (num2 > num1 && num2 > num3) { 
	if (num1 > num3) {
		alert(num2 + ' ' + num1 + ' ' + num3);
	}else{
		alert(num2 + ' ' + num3 + ' ' + num1);
	}
}else if (num3 > num1 && num3 > num2) { 
	if (num1 > num2) {
		alert(num3 + ' ' + num1 + ' ' + num2);
	}else{
		alert(num3 + ' ' + num2 + ' ' + num1);
	}
}
