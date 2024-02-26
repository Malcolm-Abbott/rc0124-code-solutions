# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?
  Gets and sets teh class attribute of a specific element.
- How do you update the CSS class attribute of an element using JavaScript?
  Assigning a value to the className property of a specified JavaScript object (element)
  $myElement.className = 'go';
Using the add method to the classList property of the specified JavaScript object (element)
$myElement.classList.add('go');
- What is the `textContent` property of element objects?
  Represents the text content of the node and its descendants.
- How do you update the text within an element using JavaScript?
  By assigning a value to the textContent property of a specified JavaScript object (element):
  $myElement.textContent = 'Example Text Content';

- Is the `event` parameter of an event listener callback always useful?
  Yes and No.
  Yes in the sense that it will always be specified to the event that's listed as an argument.
  No in the sense that many times the browser will do it for you.
  Essentially specifying the event prevents any unexpected return values.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  Much more complicated.
  You would have to rewrite the entire string for every time the textContent value would be updated instead of just incrementing the value of the clickCounter variable.

- Why is storing information about a program in variables better than only storing it in the DOM?
  That we do not have to query the DOM every time we wish to access and/or manipulate that value stored in the memory database.
  So improved efficiency.
  Also provides a simple reference point to the data we wish to access, allowing us to quickly call upon and access that data.
  So improved readability and DRY.

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
