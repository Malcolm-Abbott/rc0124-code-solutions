/*
select "category",
       count(*) as "totalProducts"
  from "products"
  group by "category";
*/

select count("cities") as "totalCities",
       "countries"."name" as "country"
  from "cities"
  join "countries" using ("countryId")
  where "cities"."countryId" = "countries"."countryId"
  group by "countries"."countryId";
