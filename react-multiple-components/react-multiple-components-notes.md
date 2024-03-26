# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?

Identify Components
Identify State
Actions

Step 1 => Break the UI into a component hierarchy
Step 2 => Build a static version in React
Step 3 => Find the minimal but complete representation of UI state
Step 4 => Identify where your state should live
Step 5 => Add inverse data flow

- How does data flow in React?

Down from the component at the top of the hierarchy.
Data can be passed from parent to child using props.

- How can children components modify state in their parents?

By passing the data to the child component using props.
By passing callback functions / event handlers to children to pass up modified state values to parents.

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
