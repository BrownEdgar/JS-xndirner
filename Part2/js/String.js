	/*արտածել նախադասության մեջ ներառված բառերի քանակը  */
	let str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit"
	//console.log(str.split(' ').length);

	/* արտածել նախադասության մեջ ներառված սիմվոլների քանակը */
	//console.log(str.length);

	/* նախադասությունը արտածել վերին ռեգիստրում (մեծատառերով) */
	//console.log(str.toLocaleUpperCase());

	/* հերթով արտածել բոլոր տառերը */
	//let split = str.split('');
	//for(let key of split){
	//	if (key == " " || key == ".") continue;
	//	console.log(key);
	//}

	/* արտածել ամեն երկրորդ տառը */
	let len = str.length;
	//for (let i = 1; i <= len; i+=2) {
	//	if (str.charAt(i) ==" ") {
	//		continue;		
	//	}else{
	//		console.log(str.charAt(i));
	//	}
	//}
	/* բոլոր տառերը բացառությամբ “p” տառերի */
	//for (let i = 0; i <= len; i++) {
	//	if (str.charAt(i) == "p" || str.charAt(i) == " ") {
	//		continue;
	//	} else {
	//		console.log(str.charAt(i));
	//	}
	//}

	/* արտածել առաջին հանդիպած “d” տառի դիրքը */
	console.log(str.search("d"));

	/* արտածել ամենավերջին “ո” տառի դիրքը (եթե չի գտնվել արտածել “չի գտնվել“ արտահայտությունը) */
	let search = str.lastIndexOf("n")
	if (search == -1) {
	    console.log("չի գտնվել");
	} else {
	    console.log(search);
	}

	/*տպել նախադասության բոլոր բառերը, բաժանած ստորակետերով, վերջում ստորակետ չպիտի լինի: */
	let joinsrt = str.split(' ').join(',')
	console.log(joinsrt);

	/*տպել նախադասությունը հակառակ հաջորդականությամբ*/
	let arr = str.split(' ').reverse().join(' ');
	console.log(arr);