let stocks = 
[
    {name: 'A', price: 100},
    {name: 'B', price: 200},
    {name: 'C', price: 300},
    {name: 'D', price: 400}
];

// Creating array of stock prices from stocks_array.
let price = stocks.map(s => s.price);

// Filtering out expensive stocks
let expensive = stocks.filter(s => s.price >= 300);

// total stock value.
let total = stocks.reduce((sum, s) => sum + s.price, 0);

console.log(price);
for (let idx in stocks)
{
    console.log(stocks[idx].price);
}
console.log(expensive);
console.log(total);