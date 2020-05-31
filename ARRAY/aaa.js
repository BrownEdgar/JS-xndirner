
// 1)Ունենալ թվերով զանգված (դրական, բացասական, 0), վերադարձնել միայն դրական թվերի գումարը։
// let mixedNumArr = [ 11, 2, -4, 0, 6, -11, 15 ];
// let num = mixedNumArr.filter((elem) => elem > 0).reduce((prevValue, currentValue) => prevValue + currentValue);
// console.log(num);

//2)Ունենալ թվային զանգված, արտածել գումարը, բացառելով առաջին և վերջին էլեմենտները։
// let sumArr = [ 1, 2, 4, 5, 6, 78, 9 ];
// let result = sumArr.slice(1, -1).reduce((prevValue, currentValue) => prevValue + currentValue);
//  console.log(result);

//3)Գրել ֆունկցիա, որը զանգվածի առաջին էլեմենտը տեղափոխում է վերջ
// let lastEl = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// let lastElFunc = (a) => {
// 	let res = a.shift();
// 	a.push(res);
// 	console.log(lastEl);
// };
// lastElFunc(lastEl);

//4) Ստեղծել տարբեր տիպերով զանգված, ստուգել և ջնջել բոլոր Boolean և Number տիպ ունեցող տարրերը
// let mArr = [ 1, 'Javascript', 'React', 3, 'Angular', false ];
// let x = mArr.filter((elem, index,arr) => {
//     if(typeof elem === 'number' || typeof elem === 'boolean'){
//         arr.splice(index,1)
//     }
//     return arr;
// })
// console.log('x', x)

// Ունենալ բառերով զանգված և ռանդոմով տպել
// let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
// let randDay = Math.floor(Math.random() * days.length);
// console.log(`Today is ${days[randDay]}`);
//Ունենալ թվ․ զանգված ու տպել բոլոր 100ից մեծ ինդեքները
// let emptyArr = [];
// for (let x = 0; x <= 120; x+=2) {
// 	let y = emptyArr.push(x);
// }
// console.log(emptyArr)
//  let bigThanHundred = emptyArr.filter((elem,index) => {
//     if(elem > 100){
//         console.log(index)
//     }
//  });