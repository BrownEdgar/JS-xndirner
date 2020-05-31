/*
1.Ստեղծել ֆունկցիա, որը կստեղծի 2  զանգված 15 հատ չկրկնվող թվերով, 1-100 միջակայքից, տպել այդ զանգվածները: Ստացված զանգվածներից առաջին զանգվածի էլեմենտները օգտագործելով որպես "key" և 2-րդ զանգվածի էլեմենտները որպես "value" ստեղծել Map, և տպել ստացված արդյունքը։
 */

function randomPush(l) {
	let arr = [];
	for (let i = 0; arr.length < l; i++) {
		let r = Math.floor(Math.random() * 100);
		if (i == 0) {
			arr.push(r)
		}
		if (arr.indexOf(r) < 0){
			arr.push(r)
		} 
	}
	return arr;
}
let result = randomPush(15);
let result2 = randomPush(15);
console.log(result);
console.log(result2);

function createMap(arr1 = result, arr2 = result2) {
	let map = new Map();
	for (let i = 0; i < arr1.length; i++) {
		map.set(arr1[i], arr2[i])
	}
	console.log(map);
}
createMap()

