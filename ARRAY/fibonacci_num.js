
function fact(x = 1){
	if (x == 1) {
		return 1;
	}else{
		return x * fact(x-1);
	}

}

console.log(fact(6));


function MyFunctionName() {
	console.log("Hi");
}

console.log(MyFunctionName.name); // sayHi



