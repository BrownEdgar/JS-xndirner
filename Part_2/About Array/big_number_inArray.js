let r =  [325,2,56,4,69,913];

let max = r[0];
for(let i = 0;i<=r.length;i++){
	if (max < r[i]) {
		max = r[i];
	}
}
console.log(max);