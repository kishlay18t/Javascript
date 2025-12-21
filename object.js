let stock =
{
    current: 31103,
    previous: 31001
};

let difference = stock.current - stock.previous;
let percentage = (difference / stock.current) * 100;

console.log(`Difference : ${difference.toFixed(2)}`);
console.log(`Percentage change : ${percentage.toFixed(2)}`);