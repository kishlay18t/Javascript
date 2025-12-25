const expenses = 
[
    {name: "Tea", amount: 10, category: "Food"},
    {name: "Lunch", amount: 120, category: "Food"},
    {name: "Bus", amount: 40, category: "Travel"},
    {name: "Movie", amount: 250, category: "Entertainment"},
    {name: "Book", amount: 180, category: "Education"},
    {name: "Coffee", amount: 60, category: "Food"}
];

//Task 1: Calculated total expenses.
let total_expenses = expenses.reduce((sum, exp) => exp.amount + sum, 0);
console.log(`Total expenses = ${total_expenses}`);

//Task 2: Get expenses above 100 rs.
let expensive = expenses.filter(exp => exp.amount > 100);
console.log("List of expenses above 100: ");
for (let value of expensive)
{
    console.log(value);
}

//Task 3: Category-wise total expense.
// let food = expenses.reduce( (sum, curr) => (curr.category === "Food")?sum + curr.amount:sum ,0);
// let travel = expenses.reduce( (sum, curr) => (curr.category === "Travel")? sum + curr.amount : sum ,0);
// let entertainment = expenses.reduce( (sum, curr) => (curr.category === "Entertainment")?sum + curr.amount:sum ,0);
// let education = expenses.reduce( (sum, curr) => (curr.category === "Education")?sum + curr.amount:sum ,0);

// console.log("Category-wise expenses:");
// console.log(`food: ${food}`);
// console.log(`travel: ${travel}`);
// console.log(`entertainment: ${entertainment}`);
// console.log(`education: ${education}`);

//Task 4: Highest expense.
let highest = expenses.reduce((max, curr) => (max.amount > curr.amount)?max:curr ,0);
console.log("Maximum expense: ");
console.log(highest);

//Tast 5: Only Expense Names
let expense_names = expenses.map(n => n.name);
console.log(expense_names);

//Task 3: Category-wise total expense.
let cat_total = expenses.reduce((acc, curr) => 
    {
            let category = curr.category;
            if (acc[category] === undefined)
            {
                acc[category] = 0;
            }

            acc[category] += curr.amount;

            return acc;
    }, {}
);
console.log(cat_total);