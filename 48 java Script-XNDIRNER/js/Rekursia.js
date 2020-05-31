function fact(number){
    let sum = 1;
    for(let i = 1; i<= number;i++){
        sum*=i;
    }
    return sum;
}
console.log(fact(6))// 5x4x3x2x1