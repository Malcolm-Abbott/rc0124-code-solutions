# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

After React calls that component and commits it.

- What is a React Effect?

Actions that run upon the rendering of a component.
Events are actions that are run based on an event being triggered, whereas actions cannot trigger effects but rather rendering of the component itself triggers the effect.

- When should you use an Effect and when should you not use an Effect?

You should use an effect when you need your component to synchronize with an external system (such as an API).
You should not use an effect otherwise, effects shouldn't be use to adjust states based on another state.

- When do Effects run?

At the end of a commit after the screen updates.

- What function is used to declare an Effect?

useEffect(() => code to run)

- What are Effect dependencies and how do you declare them?

Props in a component that are used to define whether or not an effect should be triggered or not (so that it's not firing per every render that happens on the page)
You add them as a second argument into the useEffect() function as an array of prop names you want to use to dictate whether or not the effect should be ran or not.

If your code inside the effect does not use any props or state, you enter an empty array as the second argument.
This tells React to only run this code when the component "mounts" (appears) on the screen for the first time.

- Why would you want to clean up from an Effect?

So that your effects do not continue to pile up, one after the other.

- How do you clean up from an Effect?

By returning a callback function inside of the effect.

- When does the cleanup function run?

Each time the effect will re-run, and once more when the components unmounts.

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
