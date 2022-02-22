## JavaScript six core parts (module 31.1)

- variable declaration `var` and `let` & `const`
- conditionals `if` and `else`
- arrays `[]`
  - array.length property and array.push(), array.pop() method to add elements .
  - if (array.indexOf(xx) != -1) {} , array.includes() method to check if an element is in the array
- while loop `while` for loop `for` for of loop
- function declaration `function`
- object declaration `{}`

## DOM Manipulation and event handlers (module 31.2)

## Breakup with var to have a relationship with Let and const (module 31.3)

- ECMAScript 6 introduced in 2015
- TC39 decided to introduce ECMAScript 6 in 2015
- ECMAScript 6 introduced a new syntax for variables `let` and `const`.
- if variable value is changeable we use `let`.
- if variable value is not changeable we use `const`.
  - `const` variable can be modified but not reassigned.

## Function default parameter for not provided values (module: 31.4)

- handing unexpected error for all function parameter if not declared.
  1. using if condition to check if parameter is not provided. then a default value for that parameter is assigned.
  2. using a || operator to check if parameter is not provided. then a default value for that parameter is assigned. `num2 == num2 || 0`
  3. assigning a default value in the function declare parameter. `function add(num1, num2 = 0)`

## Template string, multiple line string, dynamic string (module: 31.5)

- template string is a string that can contain placeholders.
- using back tick ` `` ` to create a template string.
- while using quotes `" "` to create a string we use `\n` to create a new line.
- using `\` to escape the special characters.
- using `${}` to insert a variable into a template string. This is called string interpolation.

## Arrow function, Multiple Parameter, Function body (module: 31.6)

- function expression is called when we need to assign a function to a variable.
- anonymous function is a function without a name.
- arrow function is a function without a name. It is a shorthand for function expression. we use `=>` to assign a function to a variable.
  `const add = (num1, num2) => num1 + num2`
- calling the function expression with `variable name` forward by `()`

## More Arrow functions and big arrow functions (module: 31.7)

- `const add = (num1, num2) => num1 + num2` is a simple arrow function expression. `variable = parameter => expression`
- In arrow function if a single parameter is used, we can remove the `(` and `)`
- In multi Line arrow function expression, we can use `{}` to group the function body. and we must use `return` to return the value.

## Spread operator, array max, copy arrays (module: 31.8)

- spread operator is used to spread the elements of an array into a list of arguments.
