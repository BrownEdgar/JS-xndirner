/*սահմանել  թվերով լցված 5 հատ զանգված
դասավորել բոլոր զանգվածները ըստ նվազման!!!
տպել բոլոր զանգվածների բոլոր անդամները*/


let arr1 = [3, 5, 6, 14, 2, 8];
let arr2 = [13, 25, 36, 14, 42, 28];
let arr3 = [5, 6, 6, 16, 1, 6];
let arr4 = [32, 56, 61, 65, 42, 18];
let arr5 = [3, 75, 60, 90, 4, 2, 38];


function sorts(arr){
	arr = arr.sort((a, b) => a - b);
	arr.reverse();
	return arr;
}

 console.log(sorts(arr1));
 console.log(sorts(arr2));
 console.log(sorts(arr3));
 console.log(sorts(arr4));
 console.log(sorts(arr5));
 console.log("Math:" + arr1.split(""));