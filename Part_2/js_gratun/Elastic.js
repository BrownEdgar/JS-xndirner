
/*let date = new Date();
console.log('Год: ' + date.getFullYear());
console.log('Месяц: ' + date.getMonth());
console.log('Число: ' + date.getDate());
console.log('Час: ' + date.getHours());
console.log('Минуты: ' + date.getMinutes());
console.log('Секунды: ' + date.getSeconds());
console.log('Миллисекунды: ' + date.getMilliseconds());
*/
/*function minuteaAgo(a) {
  var d = new Date();
  let r = a.split(":");
  d.setHours(r[0]);
  d.setMinutes(r[1]-45);
  let result = `${d.getHours()}:${d.getMinutes()}`
  console.log(result);
}
minuteaAgo("11:5");*/

/*"bbcccvvvvv"* to "b2c3v5" */
//function code(str){
//	    let compressed = "";
//
//             let ch = str.charAt(0);
//              let counter = 1;
//              for (let i = 1; i < str.length; i++) { 
//                 if (ch == str.charAt(i)) {
//                    counter = counter + 1;
//                 } 
//                 else {
//                     compressed = compressed + ch;
//                    if(counter != 1){
//                       compressed = compressed + counter;
//                    }
//                    ch = str.charAt(i);
//                    counter = 1;
//                 }
//              }
//              compressed = compressed + ch;
//              if(counter != 1){
//                 compressed = compressed + counter;
//              }
//              return compressed;
//       }
//console.log(code("bbcccvvvvv"));
/*"3a2b3c" to "aaabbccc" kisat*/
function code(str){
	    let compressed = "";
	    let count = 0;
	    let ch = "";
	   while(str.endsWith(str.charAt(count)) != true){
         ch = str.charAt(count);
        for(let i = 1;i<=ch;i++){
        	compressed+=str.charAt(count+1)
        }
		count++;  
    }
    return compressed;
}
console.log(code("3a2b3c"));