# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

The `async` keyword is placed before a function to change it from a synchronous function to an asynchronous function.
The `await` keyword is placed before a call to a function which returns a promise.
They allow asynchronous programming in a style that appears synchronous, thus vastly improving readability.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

They use Promises, but the syntax is different. Instead of Promise.then you await the Promise. That is, execution appears to pause until the Promise resolves. Instead of Promise.catch you use the try/catch mechanism since await will cause a failed Promise to throw an exception.

- When do you use `async`?

When you want to define a function as asynchronous.
It annotates any function that will be using the await keyword.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

When you're calling a function that returns a promise.
Use await when you want to wait for a Promise to resolve before executing the next line of code.
Do not use await if the function being called is not asynchronous (that is, does not return a Promise).

- How do you handle errors with `await`?

catch (error) {
code block
}
Using the try/catch mechanism.

- What do `try`, `catch` and `throw` do? When do you use them?

try attempts to execute the code in its block.
If the attempt succeeds, execution continues after the try/catch block.
If the attempt fails because an exception is thrown, execution jumps immediately to the catch block, skipping all subsequent statements in the try block.
throw is used to throw an exception. It indicates that an error happened that is so bad that execution of the current code block cannot continue.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

The Promise will continue to run asynchronously but you won't pause and wait for it. Subsequent code may accidentally access the Promise instead of the Promise's resolved value.
If a Promise that is not awaited rejects, it attempts to call the reject handler, but since there isn't one, this will likely result in an unhandled Promise rejection exception sometime after the current code block finishes. Therefore, the catch block will not be executed.

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
