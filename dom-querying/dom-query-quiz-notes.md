# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  Do check our work and verify the expected functionality is being achieved.
- What is a "model"?
  Essentially they are host environments.
  A host environment provides its own objects and functions in addition to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.
- Which "document" is being referred to in the phrase Document Object Model?
  The main "entry point" to the page.
  We can change or create anything on the page using it.
  Essentially it is a host environment referencing what will appear in the browser window.
  The document object that represents the whole document is, formally, a DOM node as well.
- What is the word "object" referring to in the phrase Document Object Model?
  the document object, which is a direct child of the window object.
- What is a DOM Tree?
A tree structure of tags.
Every tree node is an object.
Tags are element nodes (or just elements) and form the tree structure.
<html> is at the root, then <head> and <body> are its children, etc.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector()
  document.getElementById()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
  To be able to readily access | manipulate | store data
  If you do not store it in a variable, you will have to query the DOM and thus search through the HTML file to locate the desired selector every time you want to access that information, which is very time consuming a.k.a inefficient.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  So that it does not prevent the rest of the page from loading while it loads in.
  JavaScript is going to be a heavier file to load than HTML or CSS, so it is best to allow those to load in before your JavaScript.
- What does `document.querySelector()` take as its argument and what does it return?
  a string representing the selector you wish to target
  Returns the first of the targeted node.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  a string representing the selector you wish to target target.
  a node list of the targeted selector.

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
