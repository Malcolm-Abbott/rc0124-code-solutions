# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database.

Allows us to connect to and modify our database.

- How do you tell `pg` which database to connect to?

By adding it as the url as the connectionString property value of the instantiated pg.Pool() object

Ex.)
import pg from 'pg';

// only create ONE pool for your whole server.
// Note the database name at the end of the connection string.
const db = new pg.Pool({
connectionString: 'postgres://dev:dev@localhost/pagila',
ssl: {
// Allow non-SSL traffic to localhost
rejectUnauthorized: false,
},
});

- How do you send SQL to PostgreSQL from your Express server?

Through the query method of the db (with stored connection) object adding your sql code in as an argument.

const db = new pg.Pool({
connectionString: 'postgres://dev:dev@localhost/pagila',
ssl: {
rejectUnauthorized: false,
},
});

const result = await db.query(sql);

- How do you get the rows return from the SQL query?

The rows property of the pg.Result object

const result = db.query();
const rows = result.rows;

- What must you always remember to put around your asynchronous route handlers? Why?

Error handlers, so that uncorrupted data cannot be entered into the database.

try && catch block
Ease of error handling.

- What is a SQL Injection Attack and how do you avoid it in `pg`?

SQL injection, also known as SQLI, is a common attack vector that uses malicious SQL code for backend database manipulation to access information that was not intended to be displayed.

By adding endpoints from users into an array and passing that array into the query() method as an argument alongside the sql code.
Parameterized queries.

const params = [endPoint1, endPoint2];

const result = await db.query(sql, params);

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
