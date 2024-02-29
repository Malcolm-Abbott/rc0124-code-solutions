# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?

A promise that resolves with a Response object, a representation of the entire HTTP response.

- What is the default request method used by `fetch()`?

GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

Including it in your init object as the second parameter of the fetch method.
keyName = method
keyValue = `GET` || `POST` etc.

```javascript
const response = fetch(url, {
  method: 'POST',
});
```

- How does `fetch` report errors?

Using the try/catch mechanism.

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
