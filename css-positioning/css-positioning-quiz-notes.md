# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static
- How does setting `position: relative` on an element affect document flow?
  it keeps it in its normal position in the document flow
- How does setting `position: relative` on an element affect where it appears on the page?
  keeps it in its normal position in the document flow but allows you to modify where it appears on the page
  using top | bottom | left | right
- How does setting `position: absolute` on an element affect document flow?
  It removes the element from the document flow
- How does setting `position: absolute` on an element affect where it appears on the page?
  It removes it from the document flow and thus will appear in the initial containing block (the same block
  that contains the html element) if all of its ancestors have a positioning of static.
  If one of its ancestor elements have a position of relative, it will be contained inside of that element.
- How do you constrain an absolutely positioned element to a containing block?
  by setting the containing block's position property to relative
- What are the four box offset properties?
  top
  bottom
  left
  right

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
