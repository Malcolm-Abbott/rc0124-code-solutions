# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?

To share data between a parent component and all of the resulting children / grandchildren / etc. components in its tree without having to pass the data down through props.

- What values can be stored in context?

Any kind of value (even an object).

- How do you create context and make it available to the components?

import { createContext } from react;

export const MyContext = createContext(val);

- How do you access the context values?

importing the useContext Hook and your context

import { useContext } from 'react';
import { MyContext } from './MyContext.ts';

const variable = useContext(MyContext);

- When would you use context? (in addition to the best answer: "rarely")

When multiple components in a tree need access to the same data and those components become far removed from the parent component so that the data doesn't need to be passed down through prop drilling.

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
