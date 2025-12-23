let a = [{x: 1}, {x: 2}];
let b = JSON.parse(JSON.stringify(a));
let c = [...a];

b[0] = {y : 0};
c[0] = {z : 3};

console.log(b[0].y);
console.log(a[0].x);