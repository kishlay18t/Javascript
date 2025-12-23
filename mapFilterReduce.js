const array = [1,2,3,4];

// Map example
let cube = array.map( n => n*n*n );
console.log(cube);

// Filter Example
let even = array.filter( n => n%2 === 0);
console.log(even);

// Reduce Example
let sum = array.reduce((accumulator, currentValue, idx) => (idx + 1)*accumulator + currentValue, 0); // sum = (i + 1)*sum + old[i]
console.log(sum);