# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  No, it creates the element so that the element exists in the DOM but the element still needs to be inserted into the web page.
- How do you add an element as a child to another element?
  using the .append() method
- What do you pass as the arguments to the `element.setAttribute()` method?
  2 string arguments: the first representing the attribute name, the second representing the attribute value.
- What steps do you need to take in order to insert a new element into the page?
  Create an element using the .createElement() method.
  Append the element onto an existing element in the HTML file using the .append() method
- What is the `textContent` property of an element object for?
  Representing the textual content that will appear inside of an element on the web page.
- Name two ways to set the `class` attribute of a DOM element.
  .className = 'new-class';
  .classList.add('new-class')
  .classList.toggle('new-class')
  .setAttribute('class', 'new-class')
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  A DOM tree can then be generated at the simple calling of that function.
  Conditional logic can be used to determine when to generate that DOM tree.

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
