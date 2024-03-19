# react-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a React component?

Functions that provide markup | functionality to your web page / project.

A self-contained UI piece.

- How do you define a component in React?

```react
export function Body() {
  return (
    jsx code block;
  );
}
```

- How is a component "rendered" (made visible on the browser page)?

By being imported and placed in a self closing / void tag.

```react
import { Body } from './header.tsx'

export function App() {
  return <Body />;
}
```

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
