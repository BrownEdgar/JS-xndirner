
function fac(x = 1){
	function under(x1){
		return x1;
	}
	if (x == 1) {
		return 1;
	}else{
		return x * fac(x-1);
	}

}

console.log(fac(6));

