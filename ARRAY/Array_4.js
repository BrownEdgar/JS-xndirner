//Ֆունկցիա, որը վերադարձնում է զանգվածում ամենաշատը հանդիպող էլեմենտը և նրա կրկնությունների քանակը;

// function checkCountInArray (arr){
// 	//արտածում է կոդի կատարման ժամանակը
// 	// պետք է նշել սկիզբ և վերջ հատված ընտրելու համար
// 	console.time("answer time");
// 	if (!Array.isArray(arr)){
// 		return "invalid value, please give me an Array!";
// 	}
// 	let result;
// 	let max = {
// 		value:null,
// 		qanak:0
// 	};
// 	for (let i = 0, len = arr.length; i < len; i++) {
// 		// if (arr[i] === arr[i - 1]) continue;
// 	result = arr.filter((elem) => elem == arr[i]).length;
// 		if (max.qanak < result) {
// 			max.qanak = result;
// 			max.value = arr[i];
// 		}
// 	}
// 	console.timeEnd("answer time");
// 	return max;

// }
 const array = [ 154,42,1,87,1,1,1,1,1,695,36,2,10,39, 87, 9,150 ];
// console.log(checkCountInArray(array));
 
function mode(arr){
 return  arr.sort((a, b)=>{
	return arr.filter(v=> v===a).length 
	       - arr.filter(v=> v===b).length
});
}
let r = mode(array);
console.log(r);

//includes


// Array.prototype.X = function(arg){
// 	for (const i in this) {
// 		if(this[i] == arg){
// 			return true;
// 		}
// 	}
// 	return  false;
// }

