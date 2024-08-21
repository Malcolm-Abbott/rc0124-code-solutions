select "films"."releaseYear",
       "films"."title" as "film",
       "genres"."name" as "genre"
  from "filmGenre"
  join "genres" using ("genreId")
  join "films" using ("filmId")
  where "films"."title" = 'Boogie Amelie';
