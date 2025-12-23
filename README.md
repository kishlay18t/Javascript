# Javascript
Learning respository for JS


- Use backticks and '$' in `console.log()`  
Example: `console.log(`abcd $(variable)`);`

- `of` for values and `in` for index : for-loop for array.

- `.toFixed()` returns a "String", NOT a Number.

- Use `const` when declaring "ARRAY"  
WHY? It allows Moidification `pop(), push(), array[0] = 12` but not reassignment `array = [1,2]`  

- All the FALSE values in JS:
``` JS
false
0
""
null
undefined
NaN
```  
Everything else is TRUE.  

- Object/Array --> Reference Type  
Numbers(Normal Variables) --> Value Type

- Difference between `==` and `===`  
``` JS
== : checks just value
=== : Checks both value and type
Ex: 5 === "5" --> False
    5 === 5 --> True
```

### Map, Filter and Reduce
1. Map  

- Map = For each element --> Return a new element.  
- new[i] = f(old[i])  
- Map creates a new array, NOT modify the previous one.  
- Syntax :  
```JS
let mapped_array = array_name.map( n => f(old[i]) --> Any operation );
```
2. Filter

- Filter = Keep only what fulfills the consition  
- Syntax :  
 ``` JS
 let filtered_array = array_name.filter( n => condition (ex: n % 2 === 0));
 ```

3. Reduce  

- Reduce = Reduce everything into 1 single value.  
- Syntax : 
``` JS
let reduced_value = array_name.reduce( callbackFn , intialValue);
```

Here,
- callbackFn : This function is executed for every element of the array + It has up to 4 arguments  
`
1. Accumulator (Necessary) : Result accumulated so far with previous callbacks, or the intialValue (If provided)
2. Current_Value (Necessary) : The current index being processed.
3. Current_Index (Optional) : The index of the current element being processed.
4. Array (Optional) : The array `reduce` was called upon. 
`  
Ex: callbackFn --> (acc, current) => acc + current  

- initialValue (optional) : A starting value for the `accumulator`. If omitted, the `first array element` becomes the accumulator, and iteration starts from the second element.   

-EX: 
``` JS
let sum = array.reduce((acc, curr) => acc + curr , 0);
```