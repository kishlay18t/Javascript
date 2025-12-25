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