 let timeOut = setTimeout(myfunc, 3000);

console.log("hello");
clearTimeout(timeOut);

function myfunc(){
 console.log("myfunc function");
 }

