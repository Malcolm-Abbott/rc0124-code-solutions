# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

A type of function that allows a code base to make use of external functionality.
They are used to add state functionality into individual components so that the state can be used to persist data between component calls and schedule component re-renders.

Special functions that are only available while React is rendering.
They let you 'hook into' different React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

  1.) The function name must start with use followed by an uppercase letter
  2.) Hooks can only be called by React components and other hooks
  3.) All hooks in a component must always be called at the top level of a component, and in the same order
  This means you cannot call hooks in nested functions or conditional statements

Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.

- What is the purpose of state in React?

To maintain data storage between re-renders.

- Why can't we just maintain state in a local variable?

Because local variables don't persist throughout re-renders.

Local variables don't persist between renders.
Changes to local variables won't trigger renders.

- What two actions happen when you call a `state setter` function?

A state value is updated and cached to be used in the next invocation of the component.
React schedules a re-render of the component to occur.

The useState Hook provides those two things:

A state variable to retain the data between renders.
A state setter function to update the variable and trigger React to render the component again.

- When does the local `state variable` get updated with the new value?

When the local state variable is re-rendered.

Your component renders the first time. Because you passed 0 to useState as the initial value for index, it will return [0, setIndex]. React remembers 0 is the latest state value.
You update the state. When a user clicks the button, it calls setIndex(index + 1). index is 0, so it’s setIndex(1). This tells React to remember index is 1 now and triggers another render.
Your component’s second render. React still sees useState(0), but because React remembers that you set index to 1, it returns [1, setIndex] instead.
And so on!

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
