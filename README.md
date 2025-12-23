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