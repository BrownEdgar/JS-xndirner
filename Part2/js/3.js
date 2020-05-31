/* Տպել բոլոր պարզ թվերը, որոնք ընկած են 0-ից  ներմուծված թիվը ընկած միջակայքում։ */
let y = parseInt(prompt("Ներմուծել առաջին թիվը", 0));
let i, j, parz;
let count = 0;
for (i = 1; i < y; i++) {
parz = true;
    for (j = 2; j < i; j++){
        if (i % j === 0) {
        parz = false;
    }
}
    if (parz) {
        count++;
        console.log(`${i}`);
       
    } 
}
     console.log(` Ընդամենը ${count} պարզ թիվ:`);
