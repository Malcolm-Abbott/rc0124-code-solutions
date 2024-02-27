# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    Executes a provided function once for each array element.
    The return value is discarded.

  - What should the callback function do?
    Perform an action on each element in the array.
    It should be a synchronous call back function, generally avoid using asynchronous functions as a callback function while using forEach
  - What is `Array.forEach` useful for?
    Performing some sort of action on each element in the array.

- `Array.map`:
  - What does `Array.map` do?
    Creates a new array populated with the results of calling a provided function on each element in the calling array.
  - What should the callback function return?
    A new array with each element being the result of the callback function.
  - What is `Array.map` useful for?
    Similarly to forEach, it's useful for performing an action on each element inside of an array.
    Where it differs from forEach, is that it provides a return value of a new array after each element was modified by the provided callback function.
- `Array.find`:

  - What does `Array.find` do?
    Returns the first element in the provided array that satisfies the provided testing function.
    Calls a provided callback function once for each element in an array in ascending-index order, until the callback function returns a truthy value.
    Once a truthy value is found, the callback function is short circuited and that element is returned.
    If no truthy value is found, undefined is returned.
  - What should the callback function return?
    Returns the first element in the provided array that satisfies the provided testing function.
    Otherwise, undefined is returned.
  - What is `Array.find` useful for?
    Accessing a single element that meets a certain criteria defined in your callback function.

- `Array.filter`:
  - What does `Array.filter` do?
    Creates a new array consisting of all the values of the original array that passed the criteria defined in the callback function.
  - What should the callback function return?
    A shallow copy of the given array containing only the elements that pass the criteria laid out in your callback function.
    If no elements meet the criteria, an empty array is returned.
  - What is `Array.filter` useful for?
    Creating a new array consisting only of the elements which meet a certain desired criteria.

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
