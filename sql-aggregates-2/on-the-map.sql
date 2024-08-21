select count("cities"."name") as "totalCities",
       "countries"."name" as "country"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
