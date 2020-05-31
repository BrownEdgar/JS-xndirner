/*Ներմուծել երկու թիվ 10-ից 30 միջակայքում, տպել դրանց միջև ընկած բոլոր բնական թվերը, հակադարձ հաջորդականությամբ*/


let numStart = parseInt(prompt("First number", ''));
let numEnd = parseInt(prompt("Second number", ''));

if (numStart < 10 || numEnd > 30) {
	alert('ներմուծված թվերը չեն համապատասխանում պայմաններին');
	let massage = confirm("ներմուծեք 10 - 30 միջակաըքում ընկած թվեր")
	window.location.reload();
}

for (let i = numEnd; i >= numStart; i--) {
	console.log(i);
}