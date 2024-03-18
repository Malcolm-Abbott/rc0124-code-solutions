# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The logical AND operator evaluates operands from left to right and returns the first falsy operand it encounters.
  If all values are truthy, it returns the last truthy operand.
  The logical OR operator evaluates whether the first value can be converted to a truthy operand, if not, it returns the second value.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short circuit evaluation applies when a certain condition is met, the rest of the code no longer needs to be evaluated as a return value has already been established.
  With the logical AND operator, once a falsy value is found, the rest of the values will not be evaluated to see whether or not they result in a falsy operand and that first falsy value will be returned.
  With the logical OR operator, once the first value is evaluated, the process is short circuited because the second value will not be evaluated and will be returned if the first value was not truthy.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing operator returns the value on the right hand side if the value on the left hand side is null or undefined, whereas the logical OR operator returns the value on the right hand side if the value on the left hand side is any falsy value.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The ternary operator evaluates an expression to be truthy or falsy, and provides different expressions to execute based on whether the original expression was truthy or falsy.
  It's basically a shorthand syntax for an if/else statement.
- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining operator accesses an object's property or calls a function, so that if the object/function is null or undefined, returns undefined instead of throwing an error.
  It's useful when accessing properties when you're not sure if the property exists to avoid and error being thrown and stopping the rest of your code from running.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread syntax allows an iterable to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
  In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
- What data types can be spread into an array? Into an object?
  All primitives can be spread in objects.
  Only iterable values, like Array and String, can be spread in array literals and argument lists.
- How does spread syntax differ from rest syntax?
  rest syntax condenses multiple elements into one element, spread syntaxes expands one element into multiple elements.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
