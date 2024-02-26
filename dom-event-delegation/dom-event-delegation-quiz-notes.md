# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The most deeply nested element that caused the event.
  The "target" element that initiated the event, it doesn't change through the bubbling process.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Bubbling
- What DOM element property tells you what type of element it is?
  .tagName
- What does the `element.closest()` method take as its argument and what does it return?
  A CSS selector.
  It returns the closest ancestor element (with all of its descendants of course) matching the specified CSS selector.
- How can you remove an element from the DOM?
  .remove() method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  By wrapping them with an element and placing the event listener on that parent element.

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
