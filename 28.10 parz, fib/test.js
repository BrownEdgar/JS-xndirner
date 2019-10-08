/*console.log(a);
var a = 10;//undefined
console.log(b);
let b = 10;//b is not defined*/
let f = true;
for(let i = 0;i<8;i++){
  for(let j = 0;j <8; j++){
    if (j%2==0 && (j+i)%2 ==0) {
      console.log(1);
    }else{
      console.log(0);
    }

  }
  console.log( `
    `);

}