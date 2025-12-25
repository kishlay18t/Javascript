const transactions = [
  { id: 1, category: "Food", amount: 120 },
  { id: 2, category: "Travel", amount: 40 },
  { id: 3, category: "Food", amount: 60 },
  { id: 4, category: "Entertainment", amount: 250 },
  { id: 5, category: "Food", amount: 30 },
  { id: 6, category: "Education", amount: 180 },
  { id: 7, category: "Travel", amount: 20 }
];


//Task01. Category wise frequency.
let cat_freq = transactions.reduce((acc,curr) =>
{
    let category = curr.category;
    if (acc[category] === undefined)
        acc[category] = 0;
    acc[category]++;

    return acc;
},{});

console.log(cat_freq);

//Task02. Category of highest frequency.
let freq_array = Object.entries(cat_freq);
console.log(freq_array);

let highest_freq = freq_array.reduce((max,curr) => (max[1]>curr[1])?max:curr ,["", 0]);
console.log(highest_freq[0]);

//Task03. Categories with atleast 2 transactions
let atleast_2 = freq_array.filter(el => el[1] >= 2);
for (let [category, value] of atleast_2)    //value --> [category,count] for 2 members inside each element of atleast_2
{
    console.log(category);
}

console.log(`Total Transactions: ${transactions.length}`);
console.log(`Transaction by category: `, cat_freq);
console.log(`Top Category: ${highest_freq[0]}`);
