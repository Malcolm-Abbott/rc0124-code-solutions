# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?

Structured Query Language (SQL) is a declarative programming language that is the primary way of interacting with relational databases.

In declarative languages, programmers describe the results they want and the programming environment comes up with its own plan for getting those results.
In imperative programming languages, such as JavaScript, you tell the JavaScript runtime what to do and how to do it.

Relational databases interpret SQL and then dynamically generate a plan of action to perform the programmer's commands as efficiently as possible.

- How do you retrieve specific columns from a database table?

By using a select statement.

select "column",
"othercolumn"
from "table";

The query starts with the select keyword
The select keyword is followed by a comm-separated list of column names. (best to use double quotes)
The column names are followed by a from clause specifying which table to retrieve the data from
The query must end in a semicolon (;)
SQL keywords such as select and from are not case-sensitive
SQL does not have to be indented, but you should do it anyway for consistent style and therefore readability.

To select all things, use the universal operator instead of column names

select \*
from "table";

order of results not predictable

Sorting Results

select \*
from "column"
order by "column";

The order by clause comes af ter the from clause
The order by clause is followed by a column name (in PostgreSQL the column name is in double quotes)
The default sort order of the results is ascending order.

- How do you filter rows based on some specific criteria?

By providing a where clause after the from clause

select "columnName",
"columnName"
from "tableName"
where "columnName" = 'columnNameTextValue';

The where clause comes after the from clause
Text values, such as 'columnNameTextValue', are wrapped in single quotes
The comparison is made with a single = sign (Other comparisons are available, such as: >, <, !=)
Comparison values are case sensitive

- What are the benefits of formatting your SQL?

Makes your code more readable.

- What are four comparison operators that can be used in a `where` clause?

= | > | < | !=

- How do you limit the number of rows returned in a result set?

By appending a limit clause

select "columnName",
"columnName"
from "tableName"
order by "columnName" desc
limit 1;

The limit clause comes last
The limit clause includes a literal integer number with no quotes to specify the maximum number of rows that should be returned.
The sort order of the order by clause is switched to descending order with the desc keyword.

- How do you retrieve all columns from a database table?

Using the universal selector (\*).

- How do you control the sort order of a result set?

By adding a sort by clause.

Sorting Results

select \*
from "column"
order by "column";

The order by clause comes af ter the from clause
The order by clause is followed by a column name (in PostgreSQL the column name is in double quotes)
The default sort order of the results is ascending order.

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
