let r =  [325,2,56,4,969,93];

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

console.log(getMaxOfArray(r));//big number 969
console.log(getMinOfArray(r));//less number 2