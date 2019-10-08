let factorial = parseInt(prompt("enter  a")); 


function fact(x) {
       if(x == 0) {
           alert(1);
       }
       if(x < 0 ) {
           alert(undefined);
       }
       for(var i = x; --i; ) {
           x *= i;
       }
       alert(x);
}
fact(factorial);


function fact(x) {
   if(x==0) {
      return 1;
   }
   return x * fact(x-1);
}
alert(fact(factorial));