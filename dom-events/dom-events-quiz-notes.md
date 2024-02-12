# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  Verify we are accessing the intended data and performing the intended functionality.
- What is the purpose of events and event handling?
  To provide a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs.
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The .addEventListener() method.
- What is a callback function?
  A function that is passed into another function to be called on as an argument of another function (the outer function).
- What object is passed into an event listener callback when the event fires?
  An event handler, which is a function (a JavaScript object) containing code to be run upon the event being fired.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The event.target is the element on which the event was triggered / fired.
  You can log the event.target to the console.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  In the first snippet of code, the function is being called asynchronously.
  This means that the function will run only after the addEventListener function has completed its code execution.
  In the second snippet of code, the function is being called synchronously.
  This means that the function will run immediately, not working for the addEventListner function to complete its code execution.

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
