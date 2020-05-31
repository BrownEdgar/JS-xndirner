/*Ֆունկցիա, որը տպում է 1-20 թվերը 5վ․ ընդհատումներով*/
let setI = setInterval(function check20() {
	let counter = 0;
    counter += 1;	
	console.log(counter);
	if (counter >= 20) {
		clearInterval(setI);
		console.log("The end");
    }
}, 1000);

/*anather*/
// function fun(k, n){
//     let a = setInterval(function(){
//         if(k <= n){
//             console.log(k);
//         }else{
//             clearInterval(a);
//         }
//         k++;
//     },500)
// }
// fun(1, 10)

// myInterval Ֆունկցիա
// function testF(){
//     console.log("x")
// }
// function myInterval(f, sec){
//     setTimeout(f, sec);
//     while(sec < 1e5)
//         return myInterval(f, sec + 2000)
// }
// myInterval(testF, 2000);


