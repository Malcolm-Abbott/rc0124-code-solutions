# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  The `async` keyword is placed before a function to change it from a synchronous function to an asynchronous function.
  The `await` keyword is placed before a call to a function which returns a promise.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

- When do you use `async`?
  When you want to define a function as asynchronous.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  When you're calling a function that returns a promise.
- How do you handle errors with `await`?
  catch (error) {
  code block
  }
- What do `try`, `catch` and `throw` do? When do you use them?

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  Returns the resolved/rejected value instead of returning a promise.
  The promise rejection is stored as a value and handled in the catch (error) code block.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I prefer async/await, because that way I do not have to create a new .then() callback function for each new action I want to perform if the promise is resolved, but can rather write it line by line inside of the try code block. It makes the code easier to write and much more readable in my opinion.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
