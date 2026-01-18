# Core JS concepts used in the following mini-projects:
1. Expense Analyzer
2. Transanction frequency analyzer
3. Log Analyzer

## Data Structure and Accessing
### Arrays:
- Elements can be of different data types
- Elements can be an object.
- Indexed accessing: 
``` JS
array = [{category: "Food", amount: 200}];
console.log(array[0].category);
```

### Objects:
- key-value pairs (convert to array based on neccessity)
``` JS
obj[key] --> Dynamic access
obj.key --> Literal access
```

## Example of reduce:
- Always return the accumulator when using `reduce`
- `Accumulator` can be any datatype based on `initialValue`: `Object{}`, `Arrays[]`, `Value 0`
``` JS
array.reduce((acc, curr) => {
    const key = curr.someProperty;

    if (acc[key] === undefined) {
        acc[key] = 0;
    }

    acc[key] += 1;   // or += curr.amount
    return acc;
}, {});
```  

# JavaScript Data Processing Notes  
(Arrays, Objects, map / filter / reduce)

This document covers the core JavaScript data-processing concepts used in the following mini-projects:

1. Expense Analyzer  
2. Transaction Frequency Analyzer  
3. Log Analyzer  

Focus: array → object transformations, aggregation, and data-shape thinking.

---

## 1. Core Data Structures

### Arrays
- Ordered collection
- Indexed access

arr[0]

### Objects
- Key–value pairs (similar to struct / hashmap)

obj[key]   // dynamic access  
obj.key    // literal access  

NOTE: obj[key] is NOT the same as obj.key.

---

## 2. map / filter / reduce — When to Use What

map → transform elements  
filter → remove elements  
reduce → compress many elements into one

---

## 3. Canonical reduce Pattern

array.reduce((acc, curr) => {
    const key = curr.someProperty;

    if (acc[key] === undefined) {
        acc[key] = 0;
    }

    acc[key] += 1;
    return acc;
}, {});

---

## 4. Objects to Arrays

Object.entries(obj)
Object.keys(obj)
Object.values(obj)

---

## 5. Reduce on Object.entries

Object.entries(obj).reduce(
  (max, curr) => curr[1] > max[1] ? curr : max,
  ["", 0]
);

---

## 6. for...of vs for...in

for...of → values  
for...in → indexes  

---

## 7. Reference vs Value

let a = [1,2];
let b = a;   // same reference

Shallow copy:
let b = [...a];

---

## 8. Equality

Use ===  
Avoid ==  

---

## 9. Key Takeaway

JavaScript backend logic is about DATA SHAPE TRANSFORMATION.

array → object → entries → array

