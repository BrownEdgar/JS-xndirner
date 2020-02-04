	 let  p = 0;
	 for (let i = 0; i <= 9; i++) {
	 	for (let j = 0; j <= 9; j++) {
	 		for (let k = 0; k <= 9; k++) {
	 			for (let l = 0; l <= 9; l++) {
	 				if ((i != j) && (i != k) && (j != k) && (l != i) && (l != j) && (l != k)) {
						console.log(`${i}${j}${k}${l}`);
	 					p++;
	 				}
	 			}
	 		}
		 }
	 }
	 console.log(`Yndhanur  ${p} qaranish hat tiv`);