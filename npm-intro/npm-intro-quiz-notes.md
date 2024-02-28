# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  A software registry in which open source developers share and borrow packages.
- What is a package?
  A directory with one or more files in it that also has a package.json file containing metadata about the package.
  A package contains reusable code.
- What are some other popular package managers?
  Yarn, PNPM
- How can you create a `package.json` with `npm`?
  npm init --yes
- What is a dependency and how do you add one to a package?
  Packages required by your application in production.
  npm install packageName
- What happens when you add a dependency to a package with `npm`?
  It's added to your dependencies object in your package.json file
- What is a devDependency and how do you add one to a package?
  A package that is only needed for local development and testing.
  npm install --save-dev packageName
- How do you define and run `npm` scripts? Why are these useful?
  Manually add a scripts property with a value of an object that contains key-value pairs of script names as the property name and commands to be run as their corresponding values.

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
