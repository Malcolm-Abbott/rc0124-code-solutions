# http-messages-recap-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?

Those who request services from a server.

- What is a server?

Providers of a resource or service to clients upon request.

- Which HTTP method does a browser issue to a web server when you visit a URL?

The GET method

- What is on the first line of an HTTP **request** message?

The start line.

a.) An HTTP message
A verb (like GET, PUT or POST) or a noun (like HEAD or OPTIONS) that describes the action to be performed.
For example, GET indicates that a resource should be fetched or POST means that data is pushed to the server (creating or modifying a resource, or generating a temporary document to send back).

b.) The request target
Usually a URL, or the absolute path of the protocol, port, and domain are usually characterized by the request context. The format of this request target varies between HTTP methods.
An absolute path, ultimately followed by a `?` and query string. This is the most common form, known as the origin form, and is used with GET, POST, HEAD and OPTIONS methods.
A complete URL, known as the absolute form, is mostly used with GET when connected to a proxy. GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1

c.) The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.

- What is on the first line of an HTTP **response** message?

Also called the status line.

a.) The protocol version
usually HTTP/1.1

b.) A status code
Indicating success or failure of the request. Common status codes are 200, 404, or 302.

c.) A status text
A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

A typical status line looks like:
HTTP/1.1 404 Not Found

- What are HTTP headers?

Part of the HTTP request that specifies the request.
Part of the HTTP request that specifies the body included in the response.

- Is a body required for a valid HTTP message?

No.

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
