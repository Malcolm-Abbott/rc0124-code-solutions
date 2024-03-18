# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is React?

A library that allows developers to build websites and interfaces using individual pieces of functionality called components.

- What is a React component?

A piece of the UI (user interface) that has its own logic and appearance.
They're JavaScript functions that return markup.
React components start with a capital letter.

export default keywords specify the main component in the file.

- How do you mount a React app (root component) to the DOM?

The createRoot method with an argument of the render method being called on the element with the id of root

```react
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- What are some other popular frontend frameworks?

Angular | Next.js | Django | JQuery | Express.js

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
