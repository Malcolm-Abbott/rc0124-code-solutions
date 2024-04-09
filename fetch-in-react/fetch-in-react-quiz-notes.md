# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?

fetch()

- What two things need to be done to properly handle HTTP request errors? Why?

Checking the response.ok property and throwing an error if it's not response.ok

Set a catch block to catch that the try block needs to cease to execute and the catch block needs to run.

Update the error in state.

- How can `useEffect` be used to load data for a component?

By setting it to call every time a dependency is altered.

- How do you use `useEffect` to load component data just once when the component mounts?

By adding an empty array as a dependency.

- How do you use `useEffect` to load component data every time the data key changes?

By adding a dependency in the array of dependencies.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

Manage all your data accesses with a third-party data management library.
Some good open source packages are React Query and Vercel SWR.

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
