# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  When a promise is created, it is put onto the event queue / task queue.
  This is done so that the code which is on the call stack will get called and ran line by line.
  When the call stack has been finished, or each line of code has been run, then the code which is in the event queue will be pushed into the call stack one at a time, executed, then the next event in the event queue will be pushed into the call stack one at a time, executed, and this process will repeat until the event queue has had every event pushed onto the call stack and run.
- What are the three states a Promise can be in?
  Pending, fulfilled, rejected
- How do you handle the fulfillment of a Promise?
  The .then() method
- How do you handle the rejection of a Promise?
  The .catch() method

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
