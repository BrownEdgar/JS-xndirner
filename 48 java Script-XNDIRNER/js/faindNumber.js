let rand = Math.floor(Math.random() * 5) + 1;
console.log(rand);
let number = prompt("Գուշակիր 1-ից 5 միջակայքում ընկած թիվը");
let maxValue = 5;

if (number != rand && number <= maxValue) {
	 number = prompt("Փորձեք նորից");
	 window.location.reload();
}else if(number > maxValue ){
		alert('Ներմուծված թիվը միջակայքից դուրս է');
		window.location.reload();
}else if (number == rand ){
		alert('Դուք գուշակեցիք!');
}



