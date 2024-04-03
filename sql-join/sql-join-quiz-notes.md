# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?

A column that refers to a value in a separate table, thus linking the 2 tables.
A foreign key is one table points to a primary key in another table.

- How do you join two SQL tables? (Provide at least two syntaxes.)

By using a select statement with a from clause and join clause.

select \*
from "products"
join "suppliers" using ("supplierId");

The join clause follows the from clause.
The join clause is instructing the database server to link the two tables by their "supplierId" column (the link between the 2 tables)
This form of the join clause requires that the primary key and foreign key have exactly the same name.
If that is not the case, an alternate form of the join clause can be used:
join "suppliers" on "products"."supplierId" = "suppliers"."supplierId"

select \*
from "products"
join "suppliers" on "products"."supplierId" = "suppliers.supplierId";

- How do you temporarily rename columns or tables in a SQL statement?

Using the as keyword.

select "products"."name" as "product",
"suppliers."name" as "supplier"
from "products"
join "suppliers" using ("supplierId");

It's also common for table names to be aliased in the from and join clauses of the statement.
Sometimes, we need to select more than just a couple of columns and re-typing the table names can get tedious.

select "p"."name" as "product",
"p"."category",
"s"."name" as "supplier",
"s"."state"
from "products" as "p"
join "suppliers" as "s" using ("supplierId");

- How do you create a one-to-many relationship between two tables?

By creating a foreign key in one table that references a primary key in another table.

- How do you create a many-to-many relationship between two tables?

By creating a table that contains a foreign key that references a primary key in a table and another foreign key that references another primary key in yet another table.

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
