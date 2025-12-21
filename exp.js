let x;
x = [10,1,12,23,434,44];
x[1] = 2;
x.pop();

for (let value of x)
{
    console.log(value);
}
let a = x.length;
console.log(`Length of array: ${a}`);

for (let index in x)
{
    console.log(index);
}