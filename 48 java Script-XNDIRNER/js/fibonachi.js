//let fibNumber = parseInt(prompt(" enter a Fibonachi number ")); 

let fibNumber = 1000;
let count2 = 2; 
let f1 = 1;
let f2 = 1;
console.log(`${f1} `);
console.log(`${f2} `);
while(f2 <= fibNumber && f1+f2 < fibNumber ){
	let l = f2;
	f2 += f1;
	f1 = l;
    count2++;
	console.log(`${f2} `);
}
console.log(`մինչև ${fibNumber} թիվը ֆիբոնաչիի ${count2} թիվ կա `);
