// Object and arrays are reference type

const x = [1,2];
let b = x;

b.pop();
console.log(x);

// Numbers (Normal variables) --> Value type

let a = 2;
let c = a;
c *= 10;
console.log(`${c} ${a}`);