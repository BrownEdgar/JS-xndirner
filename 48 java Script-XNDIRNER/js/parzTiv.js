/*let simpleNumber = parseInt(prompt("Enter a number", ''));


function simple(x) {
    let i, j, parz;
    for (i = x; i >= x / 2; i--) {
        parz = true;
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                parz = false;
                return (`${x}։ թիվը  պարզ չէ:`);
            }
        }
        return (`${x}։ թիվը  պարզ է:`);
    }
}
alert(simple(simpleNumber));
window.location.reload();*/

/* 
		-------------------------   -----------------------------
Տպել բոլոր պարզ թվերը, որոնք ընկած են 0-ից  ներմուծված թիվը ընկած միջակայքում։ */

function simple(y, x = 2){
let i, j, parz;
let count = 0;
for (i = x; i < y; i++) {
parz = true;
    for (j = 2; j < i/2; j++){
        if (i % j === 0) {
        parz = false;
    }
}
    if (parz) {
        count++;
        console.log(` ${i}:`);
       
    }
    
}
     console.log(` Ընդամենը ${count} պարզ թիվ:`);
}
simple(256);