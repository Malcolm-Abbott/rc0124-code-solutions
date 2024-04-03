# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?

C => Insert
R => Select
U => Update
D => Delete

- How do you add a row to a SQL table?

Using an insert statement.

Statement begins with the insert keyword.
The list of columns being inserted is wrapped in parenthesis ().
The values being inserted are also wrapped in parenthesis () in the same order as the columns they belong to. In SQL, a list of values is referred to as a tuple.
Text values are wrapped in single quotes.
Numeric values are represented with literal numbers (or decimals if applicable).

To obtain automatically generated attributes, append a returning statement.

insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care')
returning \*;

If you only want specific values back, you can use a comma-separated list of column names instead of an asterisk (\*).

- How do you add multiple rows to a SQL table at once?

By specifying more than one tuple of values, separated by commas.

insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care'),
('Tater Mitts', 'Scrub some taters!', 6, 'cooking')
returning \*;

- How do you update rows in a database table?

By adding an update statement and a set clause.

update "products"
set "price" = 100
where "productId" = 24;

Update multiple columns with a comma-separated list of assignments in the set clause.

update "products"
set "price" = 200,
"name" = 'Super ShakeWeight',
"description" = 'Makes you ULTRA strong!'
where "productId" = 24;

- How do you delete rows from a database table?

By adding a delete statement with from and where clauses.

delete
from "products"
where "productId" = 24;

To provide more constraints in you where clause, use the and keyword.

delete
from "products"
where "productId" = 24
and "price" < 20;

The or and not operators are available as well.

- Why is it important to include a `where` clause in your `update` and `delete` statements?

So that the specified updates and deletes do not apply to all rows in the table but only to the row that meets the condition specific in the where clause.

- How do you accidentally delete or update all rows in a table?

By not adding a where clause specifying a condition which must be fulfilled in order for the update or delete to be applied to.

- How do you get back the modified row without a separate `select` statement?

Appending a returning clause.
returning \*;

- Why did you get an error when trying to delete certain films?

Because a constraint had been declared prohibiting cascading delete effects in the films table.

ERROR: pq: update or delete on table "films" violates foreign key constraint "film_actor_film_id_fkey" on table "castMembers"

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
