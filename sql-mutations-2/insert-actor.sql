insert into "actors" ("firstName", "lastName")
  values ('Gunner', 'Nelson')
  returning "firstName", "lastName";
